import { detailedBudgetForest, detailedBudgetMap, detailedScenarioMap } from './budget.data'
import { mockRepresentativeGraphData } from './graph.data'

export * from './budget.data'
export * from './graph.data'

export const appData = {
  graphDefinition: mockRepresentativeGraphData,
  scenarioMap: detailedScenarioMap,
  budgetForest: detailedBudgetForest,
  budgetMap: detailedBudgetMap,
} as const
