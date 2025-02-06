import { DATA_FORMAT_VERSION } from 'config'
import cy from 'cytoscape'
import { saveAs } from 'file-saver'
import { produce } from 'immer'
import { budgetMapSchema, graphDefinitionSchema, scenarioMapSchema } from 'schemas'
import {
  Budget,
  BudgetMap,
  BudgetType,
  RollupFrequency,
  ScenarioMap,
  ScenarioStartEvents,
  TimeScrubberSelection,
  TimeSeriesData,
  TreeData,
} from 'types'
import {
  buildScenarioPath,
  calculateBudgetRollupValue,
  cloneBudgetTree,
  collectBudgetIds,
  convertScenarioPathToPlotData,
  findBudget,
  generateNewIdMap,
  nanoid,
} from 'utils'

import { Period } from '@fire/forecast-engine'

import { createStore } from './createStore'

export interface AppState {
  data: {
    version: string
    scenarioGraph: cy.ElementsDefinition
    scenarioMap: ScenarioMap
    budgetMap: BudgetMap
  }
  ui: {
    // Graph
    cytoInstance: cy.Core | null
    selectedScenarioId: string
    highlightedPath: string[]
    pinnedPath: string[] | null

    // Chart
    timeScrubberSelection: TimeScrubberSelection
    scenarioStartEvents: ScenarioStartEvents
    highlightedPlotData: TimeSeriesData
    pinnedPlotData: TimeSeriesData | null

    // Budget
    rollupFrequency: RollupFrequency
  }
}

export type AppActions = {
  actions: {
    // ========================================================================
    // Application data actions
    // ========================================================================

    // Application
    reset: () => void
    saveAs: (fileName: string) => void
    load: (data: AppState['data']) => void

    // Scenario
    addScenario: (parentScenarioId: string) => void
    updateScenarioName: (scenarioId: string, value: string) => void
    updateScenarioStartDate: (scenarioId: string, value: string) => void
    deleteScenario: (scenarioId: string) => void

    // Budget
    addBudget: (scenarioId: string, parentBudgetId: string, type: BudgetType) => void
    updateBudget: (budgetId: string, value: Partial<Omit<Budget, 'id'>>) => void
    deleteBudget: (scenarioId: string, budgetId: string) => void

    // ========================================================================
    // UI state actions
    // ========================================================================

    // Graph
    setCytoInstance: (value: cy.Core | null) => void
    selectScenario: (value: string) => void
    highlightPath: (value: string[]) => void
    pinPath: (value: string[] | null) => void

    // Chart
    selectChartRange: (value: TimeScrubberSelection) => void
    refreshChart: () => void

    // Budget
    selectRollupFrequency: (value: RollupFrequency) => void
    calculateScenarioBudgetRollup: (scenarioId: string) => void
  }
}

export type AppStore = AppState & AppActions

const defaultPeriod: Period = { startDate: '2024-01-01', endDate: '2034-01-01' }

export const initialState: AppState = {
  data: {
    // Application data
    version: DATA_FORMAT_VERSION,
    // Todo: figure out how to remove the duplicated data (name property)
    scenarioGraph: { nodes: [{ data: { id: 'root', name: 'New scenario' } }], edges: [] },
    scenarioMap: { root: { id: 'root', name: 'New scenario', startDate: defaultPeriod.startDate, budgets: [] } },
    budgetMap: {},
  },

  ui: {
    // Graph
    cytoInstance: null,
    selectedScenarioId: 'root',
    highlightedPath: [],
    pinnedPath: null,

    // Chart
    timeScrubberSelection: [0, 100],
    scenarioStartEvents: [], // <-- contains the start date of each scenario in the both highlight and pinned paths
    highlightedPlotData: [],
    pinnedPlotData: null,

    // Budget
    rollupFrequency: 'monthly',
  },
}

export const useAppStore = createStore<AppStore>((set, get) => ({
  ...initialState,

  actions: {
    // ========================================================================
    // Application data actions
    // ========================================================================
    reset(): void {
      set(initialState)
    },

    // Todo: fail gracefully, show an error toast message
    load(data): void {
      if (isAppDataValid(data)) {
        // Todo: integrate the versioning system
        set({ data: { ...data, version: DATA_FORMAT_VERSION } })
      } else {
        console.error('Invalid data')
      }
    },

    saveAs(fileName: string): void {
      const file = new Blob([JSON.stringify(get().data)], { type: 'application/json;charset=utf-8' })

      // Use a library to handle all the edge cases
      saveAs(file, fileName)
    },

    addScenario: (parentScenarioId: string): void => {
      // Collect the budget IDs from the parent scenario outside of the produce function to
      // improve performance (this avoids unnecessarily creating proxies for touched objects)
      const { scenarioMap } = get().data
      const budgetIds = collectBudgetIds(scenarioMap[parentScenarioId].budgets)
      const newIdMap = generateNewIdMap(budgetIds)

      set(
        produce((draft: AppState) => {
          const { scenarioGraph, scenarioMap, budgetMap } = draft.data

          // Add the new scenario to the graph
          const newScenarioId = nanoid()
          scenarioGraph.nodes.push({ data: { id: newScenarioId, name: 'New scenario' } })
          scenarioGraph.edges.push({ data: { source: parentScenarioId, target: newScenarioId } })

          // Add the new scenario to the scenario map
          scenarioMap[newScenarioId] = {
            id: newScenarioId,
            name: 'New scenario',
            startDate: defaultPeriod.startDate,
            budgets: cloneBudgetTree(scenarioMap[parentScenarioId].budgets, newIdMap),
          }

          // Add the cloned budgets to the budget map
          const clonedBudgets = budgetIds.map((originalId) => ({ ...budgetMap[originalId], id: newIdMap[originalId] }))
          clonedBudgets.forEach((clonedBudget) => {
            budgetMap[clonedBudget.id] = clonedBudget
          })
        }),
      )
    },

    updateScenarioName: (scenarioId: string, value: string): void => {
      set(
        produce((draft: AppState) => {
          const { scenarioGraph, scenarioMap } = draft.data

          // Update the scenario name
          scenarioMap[scenarioId].name = value

          // Update the graph node name
          const node = scenarioGraph.nodes.find((node) => node.data.id === scenarioId)
          if (node) node.data.name = value

          // get().ui.cytoInstance?.$id(node?.data.id || '')?.data('name', value)
        }),
      )
    },

    // Todo: consider refactoring dates to a Date map, such that we can easily share and update all dates
    updateScenarioStartDate: (scenarioId: string, value: string): void => {
      // For example, why update the dates in the scenario map and budget map separately?
      // Instead, we could have a single source of truth for all dates
      set(
        produce((draft: AppState) => {
          const { scenarioMap, budgetMap } = draft.data
          const scenario = scenarioMap[scenarioId]

          // Update the scenario start date
          scenario.startDate = value

          // Update the budget start dates
          const budgetIds = collectBudgetIds(scenario.budgets)
          budgetIds.forEach((budgetId) => {
            budgetMap[budgetId].startDate = value
          })
        }),
      )
    },

    deleteScenario: (scenarioId: string): void => {
      const cy = get().ui.cytoInstance

      if (scenarioId === 'root' || !cy) {
        console.error(scenarioId === 'root' ? 'Cannot delete the root scenario' : 'Cytoscape instance is not available')
        return
      }

      // Determine which branches to prune
      const nodesToRemove = cy.collection().merge(cy.$id(scenarioId))
      const collectChildren = (nodeId: string): void => {
        const children = cy.$id(nodeId).outgoers().nodes()
        children.forEach((child) => {
          nodesToRemove.merge(child)
          collectChildren(child.id())
        })
      }
      collectChildren(scenarioId)

      // Prune the branches
      nodesToRemove.remove()

      // Collect the budget IDs from the removed scenarios
      const removedScenarioIds = nodesToRemove.map((node) => node.id())
      const removedBudgetIds = removedScenarioIds
        .map((scenarioId) => collectBudgetIds(get().data.scenarioMap[scenarioId].budgets))
        .flat()

      set(
        produce((draft: AppState) => {
          const { scenarioGraph, scenarioMap, budgetMap } = draft.data

          // Update the scenario graph
          scenarioGraph.nodes = cy.nodes().map((node) => {
            const { id, name } = node.data()
            return { data: { id, name } }
          })
          scenarioGraph.edges = cy.edges().map((edge) => {
            const { source, target } = edge.data()
            return { data: { source, target } }
          })

          // Remove the scenarios from the scenario map
          removedScenarioIds.forEach((removedScenarioId) => {
            delete scenarioMap[removedScenarioId]
          })

          // Remove the budgets from the budget map
          removedBudgetIds.forEach((removedBudgetId) => {
            delete budgetMap[removedBudgetId]
          })
        }),
      )
    },

    addBudget: (scenarioId: string, parentId: string, type: BudgetType): void => {
      set(
        produce((draft: AppState) => {
          const { scenarioMap, budgetMap } = draft.data

          // Add the new budget to the budget map
          const newBudgetId = nanoid()
          budgetMap[newBudgetId] = {
            id: newBudgetId,
            name: 'New budget',
            amount: 0,
            frequency: 'month',
            startDate: defaultPeriod.startDate,
            endDate: defaultPeriod.endDate,
          }

          // Add the new budget to the scenario
          const scenario = scenarioMap[scenarioId]
          const parent = findBudget(parentId, scenario.budgets)
          if (parent) {
            parent?.children?.push({ id: newBudgetId, children: type === 'group' ? [] : undefined })
          } else {
            scenario.budgets.push({ id: newBudgetId, children: type === 'group' ? [] : undefined })
          }
        }),
      )
    },

    updateBudget: (budgetId: string, value: Partial<Omit<Budget, 'id'>>): void => {
      set(
        produce((draft: AppState) => {
          const { budgetMap } = draft.data

          // Update the budget
          budgetMap[budgetId] = { ...budgetMap[budgetId], ...value }
        }),
      )
    },

    // Todo: refactor this
    deleteBudget: (scenarioId: string, budgetId: string): void => {
      set(
        produce((draft: AppState) => {
          const { scenarioMap, budgetMap } = draft.data
          let removedBudgetIds: string[] = []

          // Remove the budget from the scenario
          const scenario = scenarioMap[scenarioId]
          scenario.budgets = scenario.budgets.filter((tree) => {
            const removeChild = (tree: TreeData): boolean => {
              if (tree.id === budgetId) {
                removedBudgetIds = collectBudgetIds([tree])
                return false
              }
              if (tree.children) {
                tree.children = tree.children.filter(removeChild)
              }
              return true
            }
            return removeChild(tree)
          })

          // Remove the budgets from the budget map
          removedBudgetIds.forEach((removedBudgetId) => {
            delete budgetMap[removedBudgetId]
          })
          delete budgetMap[budgetId]
        }),
      )
    },

    // ========================================================================
    // Local UI state actions
    // ========================================================================

    setCytoInstance: (value: cy.Core | null): void => {
      set((prev) => ({ ui: { ...prev.ui, cytoInstance: value } }))
    },

    selectScenario: (value: string): void => {
      set((prev) => ({ ui: { ...prev.ui, selectedScenarioId: value } }))
      get().actions.calculateScenarioBudgetRollup(value)
    },

    selectChartRange: (value: TimeScrubberSelection): void => {
      set((prev) => ({ ui: { ...prev.ui, timeScrubberSelection: value } }))
    },

    highlightPath: (scenarioIds: string[]): void => {
      const { data } = get()
      const scenarioPath = buildScenarioPath(scenarioIds, data.scenarioMap, data.budgetMap, defaultPeriod)
      const newPlotData = convertScenarioPathToPlotData(scenarioPath, 'highlighted')
      set((prev) => ({
        ui: {
          ...prev.ui,
          highlightedPath: scenarioIds,
          highlightedPlotData: newPlotData || [],
          scenarioStartEvents: scenarioPath.scenarioStartEvents,
        },
      }))
    },

    // Todo: merge the scenarioStartEvents into a single array
    pinPath: (scenarioIds: string[] | null): void => {
      const { data } = get()
      const scenarioPath = scenarioIds
        ? buildScenarioPath(scenarioIds, data.scenarioMap, data.budgetMap, defaultPeriod)
        : null
      const newPlotData = scenarioPath ? convertScenarioPathToPlotData(scenarioPath, 'pinned') : null
      set((prev) => ({ ui: { ...prev.ui, pinnedPath: scenarioIds, pinnedPlotData: newPlotData } }))
    },

    refreshChart: (): void => {
      const { ui, actions } = get()
      if (ui.highlightedPath.length) {
        actions.highlightPath(ui.highlightedPath)
      }
      if (ui.pinnedPath) {
        actions.pinPath(ui.pinnedPath)
      }
    },

    selectRollupFrequency: (value: RollupFrequency): void => {
      set(
        produce((draft: AppState) => {
          draft.ui.rollupFrequency = value
        }),
      )
    },

    calculateScenarioBudgetRollup: (scenarioId: string): void => {
      set(
        produce((draft: AppState) => {
          const { scenarioMap, budgetMap } = draft.data
          const scenario = scenarioMap[scenarioId]

          scenario.budgets.forEach((tree) => {
            const calculateRollup = (tree: TreeData): number => {
              const budget = budgetMap[tree.id]

              // Calculate the rollup for each child
              const children = tree.children?.map((child) => calculateRollup(child)) || []
              const budgetRollupValue = calculateBudgetRollupValue(budget, draft.ui.rollupFrequency)
              const accumulatedRollupValue = children.reduce((acc, val) => acc + val, budgetRollupValue)

              // Update the budget rollup
              budget.rollup = accumulatedRollupValue

              return accumulatedRollupValue
            }
            calculateRollup(tree)
          })
        }),
      )
    },
  },
}))

export function isAppDataValid(data: AppState['data']): boolean {
  if (graphDefinitionSchema.safeParse(data.scenarioGraph).error) {
    console.error('Graph definition is invalid')
    return false
  }

  if (scenarioMapSchema.safeParse(data.scenarioMap).error) {
    console.error('Scenario map is invalid')
    return false
  }

  if (budgetMapSchema.safeParse(data.budgetMap).error) {
    console.error('Budget map is invalid')
    return false
  }

  const scenarioGraphKeys = data.scenarioGraph.nodes.map((node) => node.data.id)
  const scenarioMapKeys = Object.keys(data.scenarioMap)

  // Ensure that the number of graph nodes and scenario keys match
  if (scenarioGraphKeys.length !== scenarioMapKeys.length) {
    console.error('Graph nodes and scenario keys do not match')
    return false
  }

  // Ensure that the graph nodes and scenario keys match
  if (!scenarioMapKeys.every((key) => scenarioGraphKeys.includes(key))) {
    console.error('Graph nodes and scenario keys do not match')
    console.error({ scenarioGraphKeys, scenarioKeys: scenarioMapKeys })
    return false
  }

  return true
}
