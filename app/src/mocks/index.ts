import { mockBudgetCategoriesMap, startBudgetPlotData } from './budget.data'
import { mockRepresentativeGraphData } from './graph.data'

export * from './budget.data'
export * from './graph.data'

export const appData = {
  graphDefinition: mockRepresentativeGraphData,
  plotData: startBudgetPlotData,
  budgets: mockBudgetCategoriesMap,
} as const
