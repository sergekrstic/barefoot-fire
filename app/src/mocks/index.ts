import { mockBudgetMap, startBudgetPlotData } from './budget.data'
import { mockGraphData } from './graph.data'

export * from './budget.data'
export * from './graph.data'

export const appData = {
  graph: mockGraphData,
  plot: startBudgetPlotData,
  budgets: mockBudgetMap,
} as const
