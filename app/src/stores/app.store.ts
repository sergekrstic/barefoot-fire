import cy from 'cytoscape'
import { saveAs } from 'file-saver'
import { budgetForestSchema, budgetMapSchema, graphDefinitionSchema, scenarioMapSchema } from 'schemas'
import { BudgetForest, BudgetMap, BudgetTree, ScenarioMap, ScenarioStartEvents, Selection, TimeSeriesData } from 'types'
import { buildScenarioPath, convertScenarioBudgetsToPlotData as convertScenarioPathToPlotData } from 'utils'

import { Period } from '@fire/forecast-engine'

import { createStore } from './createStore'

export interface AppState {
  graphDefinition: cy.CytoscapeOptions['elements']
  scenarioMap: ScenarioMap
  budgetForest: BudgetForest
  budgetMap: BudgetMap
  selectedBudgetId: string | null
  selectedBudget: BudgetTree | null
  selection: Selection
  highlightedPlotData: TimeSeriesData
  highlightedPath: string[]
  pinnedPlotData: TimeSeriesData | null
  pinnedPath: string[] | null
  scenarioStartEvents: ScenarioStartEvents
}

export type AppLoadData = Pick<AppState, 'graphDefinition' | 'scenarioMap' | 'budgetForest' | 'budgetMap'>

export type AppActions = {
  reset: () => void
  saveAs: () => void
  load: (data: AppLoadData) => void
  setSelectedBudgetId: (value: string | null) => void
  setSelection: (value: Selection) => void
  setHighlightedPath: (value: string[]) => void
  setPinnedPath: (value: string[] | null) => void
}

export type PluginStore = AppState & AppActions

const defaultPeriod: Period = { startDate: '2024-01-01', endDate: '2034-01-01' }

const initialState: AppState = {
  graphDefinition: { nodes: [{ data: { id: 'root', name: 'Initial budget' } }], edges: [] },
  scenarioMap: { root: { id: 'root', name: 'Initial budget', budgetIds: [], startDate: defaultPeriod.startDate } },
  budgetForest: { root: { name: 'Initial budget', budgets: [] } },
  budgetMap: {},
  selectedBudgetId: null,
  selectedBudget: null,
  selection: [0, 100],
  highlightedPlotData: [],
  highlightedPath: [],
  pinnedPlotData: null,
  pinnedPath: null,
  scenarioStartEvents: [], // <-- contains the start date of each scenario in the both highlight and pinned paths
}

export const useAppStore = createStore<PluginStore>((set, get) => ({
  ...initialState,
  reset(): void {
    set(initialState)
  },
  load(data): void {
    if (isAppDataValid(data)) {
      set({ ...data })
    } else {
      // Todo: show an error toast message
      console.error('Invalid data')
    }
  },
  saveAs(): void {
    const { graphDefinition, scenarioMap, budgetForest, budgetMap } = get()
    const data = { graphDefinition, scenarioMap, budgetForest, budgetMap }
    const file = new Blob([JSON.stringify(data)], { type: 'application/json;charset=utf-8' })
    saveAs(file, 'barefoot_fire.json') // <-- Use a library to handle all the edge cases
  },
  setSelectedBudgetId: (value: string | null): void => {
    set({ selectedBudgetId: value, selectedBudget: get().budgetForest[value || ''] })
  },
  setSelection: (value: Selection): void => {
    set({ selection: value })
  },
  setHighlightedPath: (scenarioIds: string[]): void => {
    const { scenarioMap, budgetMap } = get()
    const scenarioPath = buildScenarioPath(scenarioIds, scenarioMap, budgetMap, defaultPeriod)
    const newPlotData = convertScenarioPathToPlotData(scenarioPath, 'highlighted')
    set({ highlightedPlotData: newPlotData || [], scenarioStartEvents: scenarioPath.scenarioStartEvents })
  },
  setPinnedPath: (scenarioIds: string[] | null): void => {
    const { scenarioMap, budgetMap } = get()
    const scenarioPath = scenarioIds ? buildScenarioPath(scenarioIds, scenarioMap, budgetMap, defaultPeriod) : null
    const newPlotData = scenarioPath ? convertScenarioPathToPlotData(scenarioPath, 'pinned') : null
    // Todo: merge the scenarioStartEvents
    set({ pinnedPath: scenarioIds, pinnedPlotData: newPlotData })
  },
}))

export function isAppDataValid(data: AppLoadData): boolean {
  if (budgetForestSchema.safeParse(data.budgetForest).error) {
    console.error('Budget forest is invalid')
    return false
  }

  if (budgetMapSchema.safeParse(data.budgetMap).error) {
    console.error('Budget map is invalid')
    return false
  }

  if (scenarioMapSchema.safeParse(data.scenarioMap).error) {
    console.error('Scenario map is invalid')
    return false
  }

  if (graphDefinitionSchema.safeParse(data.graphDefinition).error) {
    console.error('Graph definition is invalid')
    return false
  }

  // Todo: narrow down the type of data
  // @ts-expect-error - data is not typed
  const graphNodeKeys = data.graphDefinition!.nodes.map((node) => node.data.id)
  const scenarioKeys = Object.keys(data.scenarioMap)

  // Ensure that the graph nodes and scenario keys match
  if (graphNodeKeys.length !== scenarioKeys.length) {
    console.error('Graph nodes and scenario keys do not match')
    return false
  }

  // Ensure that the graph nodes and scenario keys match
  if (!scenarioKeys.every((key) => graphNodeKeys.includes(key))) {
    console.error('Graph nodes and scenario keys do not match')
    console.error({ graphNodeKeys, scenarioKeys })
    return false
  }

  return true
}
