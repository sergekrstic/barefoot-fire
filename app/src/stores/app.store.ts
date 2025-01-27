import cy from 'cytoscape'
import { saveAs } from 'file-saver'
import { budgetMapSchema, graphDefinitionSchema, scenarioMapSchema } from 'schemas'
import {
  Budget,
  BudgetMap,
  ScenarioMap,
  ScenarioStartEvents,
  TimeScrubberSelection,
  TimeSeriesData,
  TreeData,
} from 'types'
import { buildScenarioPath, convertScenarioBudgetsToPlotData as convertScenarioPathToPlotData } from 'utils'

import { Period } from '@fire/forecast-engine'

import { createStore } from './createStore'

export interface AppState {
  data: {
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
  }
}

export type AppLoadData = Pick<AppState['data'], 'scenarioGraph' | 'scenarioMap' | 'budgetMap'>

export type AppActions = {
  actions: {
    // ========================================================================
    // Application data actions
    // ========================================================================

    // Application
    reset: () => void
    saveAs: () => void
    load: (data: AppLoadData) => void

    // Scenario
    addScenario: (id: string) => void
    updateScenarioName: (id: string, value: string) => void
    updateScenarioStartDate: (id: string, value: string) => void

    // Budget
    updateBudget: (id: string, value: Partial<Omit<Budget, 'id'>>) => void
    deleteBudget: (id: string) => void

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
  }
}

export type PluginStore = AppState & AppActions

const defaultPeriod: Period = { startDate: '2024-01-01', endDate: '2034-01-01' }

const initialState: AppState = {
  data: {
    // Application data
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
  },
}

export const useAppStore = createStore<PluginStore>((set, get) => ({
  ...initialState,

  actions: {
    // ========================================================================
    // Application data actions
    // ========================================================================
    reset(): void {
      set(initialState)
    },

    load(data): void {
      if (isAppDataValid(data)) {
        set({ data: { ...data } })
      } else {
        // Todo: fail gracefully, show an error toast message
        console.error('Invalid data')
      }
    },

    saveAs(): void {
      const { scenarioGraph, scenarioMap, budgetMap } = get().data
      const data = { scenarioGraph, scenarioMap, budgetMap }
      const file = new Blob([JSON.stringify(data)], { type: 'application/json;charset=utf-8' })
      saveAs(file, 'barefoot_fire.json') // <-- Use a library to handle all the edge cases
    },

    addScenario: (id: string): void => {
      const { data } = get()
      const newScenarioId = `scenario-${data.scenarioGraph.nodes.length}`
      const newScenario = { id: newScenarioId, name: 'New scenario', startDate: defaultPeriod.startDate, budgets: [] }

      // Add the new scenario to the graph
      const newScenarioGraph = {
        nodes: [...data.scenarioGraph.nodes, { data: { id: newScenarioId, name: 'New scenario' } }],
        edges: [...data.scenarioGraph.edges, { data: { source: id, target: newScenarioId } }],
      }

      // Add the new scenario to the map
      const newScenarioMap = { ...data.scenarioMap, [newScenarioId]: newScenario }

      set({ data: { ...data, scenarioGraph: newScenarioGraph, scenarioMap: newScenarioMap } })
    },

    updateScenarioName: (id: string, value: string): void => {
      const { data, ui } = get()

      // Regenerate the budget map
      const newScenarioMap = { ...data.scenarioMap, [id]: { ...data.scenarioMap[id], name: value } }

      // Update the graph node name
      const newScenarioGraph = data.scenarioGraph
      const node = newScenarioGraph.nodes.find((node) => node.data.id === id)
      if (node) {
        node.data.name = value
        ui.cytoInstance?.$id(node.data.id || '')?.data('name', value)
      }

      set({ data: { ...data, scenarioGraph: newScenarioGraph, scenarioMap: newScenarioMap } })
    },

    updateScenarioStartDate: (id: string, value: string): void => {
      const { data, actions } = get()
      const newScenarioMap = { ...data.scenarioMap, [id]: { ...data.scenarioMap[id], startDate: value } }
      set({ data: { ...data, scenarioMap: newScenarioMap } })
      actions.refreshChart()
    },

    updateBudget: (id: string, value: Partial<Omit<Budget, 'id'>>): void => {
      const { data, actions } = get()
      const newBudgetMap = { ...data.budgetMap, [id]: { ...data.budgetMap[id], ...value } }
      set({ data: { ...data, budgetMap: newBudgetMap } })
      actions.refreshChart()
    },

    deleteBudget: (id: string): void => {
      const { data, ui, actions } = get()

      // Recursively remove the budget from the scenario
      const scenario = data.scenarioMap[ui.selectedScenarioId]
      scenario.budgets = scenario.budgets.filter((tree) => {
        if (tree.id === id) {
          return false
        }
        // Todo: create a list of deleted budgets and remove them from the budgetMap
        const removeChild = (tree: TreeData): boolean => {
          if (tree.id === id) {
            return false
          }
          if (tree.children) {
            tree.children = tree.children.filter(removeChild)
          }
          return true
        }
        return removeChild(tree)
      })

      const newScenarioMap = { ...data.scenarioMap, [ui.selectedScenarioId]: { ...scenario } }
      set({ data: { ...data, scenarioMap: newScenarioMap } })

      const newBudgetMap = { ...data.budgetMap }
      delete newBudgetMap[id]
      set({ data: { ...data, budgetMap: newBudgetMap } })
      actions.refreshChart()
    },

    // ========================================================================
    // Local UI state actions
    // ========================================================================

    setCytoInstance: (value: cy.Core | null): void => {
      set((prev) => ({ ui: { ...prev.ui, cytoInstance: value } }))
    },

    selectScenario: (value: string): void => {
      set((prev) => ({ ui: { ...prev.ui, selectedScenarioId: value } }))
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

    pinPath: (scenarioIds: string[] | null): void => {
      const { data } = get()
      const scenarioPath = scenarioIds
        ? buildScenarioPath(scenarioIds, data.scenarioMap, data.budgetMap, defaultPeriod)
        : null
      const newPlotData = scenarioPath ? convertScenarioPathToPlotData(scenarioPath, 'pinned') : null
      // Todo: merge the scenarioStartEvents
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
  },
}))

export function isAppDataValid(data: AppLoadData): boolean {
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
