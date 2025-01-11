import { mockBudgetCategoriesMap, mockScenarioBudgetsMap } from './budget.data'
import { mockRepresentativeGraphData } from './graph.data'

export * from './budget.data'
export * from './graph.data'

export const appData = {
  graphDefinition: mockRepresentativeGraphData,
  scenarioMap: mockScenarioBudgetsMap,
  budgets: mockBudgetCategoriesMap,
} as const
