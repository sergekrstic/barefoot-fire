import * as mockBudgets from './budget.data'
import * as mockGraphs from './graph.data'

export * from './budget.data'
export * from './graph.data'

export const examples = {
  initial: {
    scenarioGraph: mockGraphs.initialScenarioGraph,
    scenarioMap: mockBudgets.initialScenarioMap,
    budgetMap: mockBudgets.initialBudgetMap,
  },
  simple: {
    scenarioGraph: mockGraphs.simpleScenarioGraph,
    scenarioMap: mockBudgets.simpleScenarioMap,
    budgetMap: mockBudgets.simpleBudgetMap,
  },
  detailed: {
    scenarioGraph: mockGraphs.detailedScenarioGraph,
    scenarioMap: mockBudgets.detailedScenarioMap,
    budgetMap: mockBudgets.detailedBudgetMap,
  },
}

export const appData = examples.detailed
