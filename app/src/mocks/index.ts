import { detailedBudgetMap, detailedScenarioMap } from './budget.data'
import { detailedScenarioGraph } from './graph.data'

export * from './budget.data'
export * from './graph.data'

export const appData = {
  scenarioGraph: detailedScenarioGraph,
  scenarioMap: detailedScenarioMap,
  budgetMap: detailedBudgetMap,
} as const
