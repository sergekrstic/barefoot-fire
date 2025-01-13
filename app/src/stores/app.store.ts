import cy from 'cytoscape'
import { BudgetCategories, ScenarioMap, Selection, TimeSeriesData } from 'types'
import { buildScenarioPath, convertScenarioBudgetsToPlotData } from 'utils'

import { Period, Periods } from '@fire/forecast-engine'

import { createStore } from './createStore'

export interface AppState {
  graphDefinition: cy.CytoscapeOptions['elements']
  scenarioMap: ScenarioMap
  budgetMap: Record<string, BudgetCategories>
  selectedBudgetId: string | null
  selectedBudget: BudgetCategories | null
  selection: Selection
  highlightedPlotData: TimeSeriesData
  highlightedPath: string[]
  pinnedPlotData: TimeSeriesData | null
  pinnedPath: string[] | null
  periods: Periods
}

export type AppLoadData = Pick<AppState, 'graphDefinition' | 'scenarioMap' | 'budgetMap'>

export type AppActions = {
  reset: () => void
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
  scenarioMap: { root: { id: 'root', name: 'Initial budget', budgets: [], periods: [], period: defaultPeriod } },
  budgetMap: {},
  selectedBudgetId: null,
  selectedBudget: null,
  selection: [0, 100],
  highlightedPlotData: [],
  highlightedPath: [],
  pinnedPlotData: null,
  pinnedPath: null,
  periods: [],
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
  setHighlightedPath: (scenarioIds: string[]): void => {
    const scenarioMap = get().scenarioMap
    const scenarioBudgets = buildScenarioPath(scenarioIds, scenarioMap, defaultPeriod)
    const newPlotData = convertScenarioBudgetsToPlotData(scenarioBudgets, 'highlighted')
    set({ highlightedPlotData: newPlotData || [], periods: scenarioBudgets.periods })
  },
  setPinnedPath: (scenarioIds: string[] | null): void => {
    const scenarioMap = get().scenarioMap
    const scenarioBudgets = scenarioIds ? buildScenarioPath(scenarioIds, scenarioMap, defaultPeriod) : null
    const newPlotData = scenarioBudgets ? convertScenarioBudgetsToPlotData(scenarioBudgets, 'pinned') : null
    // const scenarioMap = get().scenarioMap
    // const newPlotData = generatePlotData(value, scenarioMap, 'pinned')
    set({ pinnedPath: scenarioIds, pinnedPlotData: newPlotData })
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
