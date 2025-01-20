import cy from 'cytoscape'
import { saveAs } from 'file-saver'
import { budgetMapSchema, graphDefinitionSchema, scenarioMapSchema } from 'schemas'
import {
  // BudgetForest,
  BudgetMap,
  Forest,
  ScenarioMap,
  ScenarioStartEvents,
  TimeScrubberSelection,
  TimeSeriesData,
} from 'types'
import { buildScenarioPath, convertScenarioBudgetsToPlotData as convertScenarioPathToPlotData } from 'utils'

import { Period } from '@fire/forecast-engine'

import { createStore } from './createStore'

export interface AppState {
  // Cytoscape instance
  cytoInstance: cy.Core | null

  // Application data
  scenarioGraph: cy.ElementsDefinition
  scenarioMap: ScenarioMap
  budgetForest: Forest // BudgetForest
  budgetMap: BudgetMap

  // Local UI state
  selectedScenarioId: string | null
  timeScrubberSelection: TimeScrubberSelection
  highlightedPath: string[]
  highlightedPlotData: TimeSeriesData
  pinnedPath: string[] | null
  pinnedPlotData: TimeSeriesData | null
  scenarioStartEvents: ScenarioStartEvents
}

export type AppLoadData = Pick<AppState, 'scenarioGraph' | 'scenarioMap' | 'budgetForest' | 'budgetMap'>

export type AppActions = {
  // Cytoscape instance
  setCytoInstance: (value: cy.Core | null) => void

  // Application data actions
  reset: () => void
  saveAs: () => void
  load: (data: AppLoadData) => void

  // Local UI state actions
  setSelectedScenarioId: (value: string | null) => void
  setTimeScrubberSelection: (value: TimeScrubberSelection) => void
  setHighlightedPath: (value: string[]) => void
  setPinnedPath: (value: string[] | null) => void
  updateScenarioName: (id: string, value: string) => void
}

export type PluginStore = AppState & AppActions

const defaultPeriod: Period = { startDate: '2024-01-01', endDate: '2034-01-01' }

const initialState: AppState = {
  // Cytoscape instance
  cytoInstance: null,

  // Application data
  scenarioGraph: { nodes: [{ data: { id: 'root', name: 'Initial budget' } }], edges: [] },
  scenarioMap: { root: { id: 'root', name: 'Initial budget', budgetIds: [], startDate: defaultPeriod.startDate } },
  budgetForest: { root: { id: 'root', name: 'Initial budget', startDate: defaultPeriod.startDate, budgets: [] } },
  budgetMap: {},

  // Local UI state
  selectedScenarioId: null,
  timeScrubberSelection: [0, 100],
  highlightedPath: [],
  highlightedPlotData: [],
  pinnedPath: null,
  pinnedPlotData: null,
  scenarioStartEvents: [], // <-- contains the start date of each scenario in the both highlight and pinned paths
}

export const useAppStore = createStore<PluginStore>((set, get) => ({
  ...initialState,

  setCytoInstance: (value: cy.Core | null): void => {
    set({ cytoInstance: value })
  },

  reset(): void {
    set(initialState)
  },

  load(data): void {
    if (isAppDataValid(data)) {
      set({ ...data })
    } else {
      // Todo: fail gracefully, show an error toast message
      console.error('Invalid data')
    }
  },

  saveAs(): void {
    const { scenarioGraph, scenarioMap, budgetForest, budgetMap } = get()
    const data = { scenarioGraph, scenarioMap, budgetForest, budgetMap }
    const file = new Blob([JSON.stringify(data)], { type: 'application/json;charset=utf-8' })
    saveAs(file, 'barefoot_fire.json') // <-- Use a library to handle all the edge cases
  },

  setSelectedScenarioId: (value: string | null): void => {
    set({ selectedScenarioId: value })
  },

  setTimeScrubberSelection: (value: TimeScrubberSelection): void => {
    set({ timeScrubberSelection: value })
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

  updateScenarioName: (id: string, value: string): void => {
    const { cytoInstance, budgetForest, scenarioMap } = get()

    // Regenerate the budget map
    const newScenarioMap = { ...scenarioMap, [id]: { ...scenarioMap[id], name: value } }

    // Regenerate the budget forest
    const newBudgetForest = { ...budgetForest, [id]: { ...budgetForest[id], name: value } }

    // Update the graph node name
    const newScenarioGraph = get().scenarioGraph
    const node = newScenarioGraph.nodes.find((node) => node.data.id === id)
    if (node) {
      node.data.name = value
      cytoInstance?.$id(node.data.id || '')?.data('name', value)
    }

    set({
      scenarioGraph: newScenarioGraph,
      scenarioMap: newScenarioMap,
      budgetForest: newBudgetForest,
    })
  },
}))

export function isAppDataValid(data: AppLoadData): boolean {
  // if (budgetForestSchema.safeParse(data.budgetForest).error) {
  //   console.error('Budget forest is invalid')
  //   return false
  // }

  if (budgetMapSchema.safeParse(data.budgetMap).error) {
    console.error('Budget map is invalid')
    return false
  }

  if (scenarioMapSchema.safeParse(data.scenarioMap).error) {
    console.error('Scenario map is invalid')
    return false
  }

  if (graphDefinitionSchema.safeParse(data.scenarioGraph).error) {
    console.error('Graph definition is invalid')
    return false
  }

  const scenarioGraphKeys = data.scenarioGraph.nodes.map((node) => node.data.id)
  const scenarioMapKeys = Object.keys(data.scenarioMap)

  // Ensure that the graph nodes and scenario keys match
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
