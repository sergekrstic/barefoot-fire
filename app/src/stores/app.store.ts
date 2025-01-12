import cy from 'cytoscape'
import { BudgetCategories, ScenarioMap, Selection, TimeSeriesData } from 'types'
import { buildScenarioPath, convertScenarioBudgetsToPlotData } from 'utils'

import { Period } from '@fire/forecast-engine'

import { createStore } from './createStore'

export interface AppState {
  graphDefinition: cy.CytoscapeOptions['elements']
  scenarioMap: ScenarioMap
  budgetMap: Record<string, BudgetCategories>
  selectedBudgetId: string | null
  selectedBudget: BudgetCategories | null
  selection: Selection
  plotData: TimeSeriesData
  highlightedPath: string[]
  pinnedPath: string[]
}

export type AppLoadData = Pick<AppState, 'graphDefinition' | 'scenarioMap' | 'budgetMap'>

export type AppActions = {
  reset: () => void
  load: (data: AppLoadData) => void
  setSelectedBudgetId: (value: string | null) => void
  setSelection: (value: Selection) => void
  setHighlightedPath: (value: string[]) => void
  setPinnedPath: (value: string[]) => void
}

export type PluginStore = AppState & AppActions

const initialState: AppState = {
  graphDefinition: { nodes: [{ data: { id: 'root', name: 'Initial budget' } }], edges: [] },
  scenarioMap: {},
  budgetMap: {},
  selectedBudgetId: null,
  selectedBudget: null,
  selection: [0, 100],
  plotData: [],
  highlightedPath: [],
  pinnedPath: [],
}

export const useAppStore = createStore<PluginStore>((set, get) => ({
  ...initialState,
  reset(): void {
    set(initialState)
  },
  load(data): void {
    if (isAppDataValid(data)) {
      set({ ...data })
    }
  },
  setSelectedBudgetId: (value: string | null): void => {
    set({ selectedBudgetId: value, selectedBudget: get().budgetMap[value || ''] })
  },
  setSelection: (value: Selection): void => {
    set({ selection: value })
  },
  setHighlightedPath: (value: string[]): void => {
    const defaultPeriod: Period = { startDate: '2024-01-01', endDate: '2034-01-01' }
    const scenarioBudgets = buildScenarioPath(value, get().scenarioMap, defaultPeriod)
    const newPlotData = convertScenarioBudgetsToPlotData(scenarioBudgets)
    set({ plotData: newPlotData })
  },
  setPinnedPath: (value: string[]): void => {
    set({ pinnedPath: value })
  },
}))

export function isAppDataValid(data: AppLoadData): boolean {
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
