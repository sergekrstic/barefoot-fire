import { mockBudgetMap, startBudgetPlotData } from './budget.data'
import { mockRepresentativeGraphData } from './graph.data'

export * from './budget.data'
export * from './graph.data'

export const appData = {
  graph: mockRepresentativeGraphData,
  plot: startBudgetPlotData,
  budgets: mockBudgetMap,
} as const
