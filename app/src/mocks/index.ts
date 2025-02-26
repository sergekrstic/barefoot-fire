import { DATA_FORMAT_VERSION } from 'config'

import * as mockBudgets from './budget.data'
import * as mockGraphs from './graph.data'

export * from './budget.data'
export * from './graph.data'

export const examples = {
  new: {
    version: DATA_FORMAT_VERSION,
    scenarioGraph: mockGraphs.newScenarioGraph,
    scenarioMap: mockBudgets.newScenarioMap,
    budgetMap: mockBudgets.newBudgetMap,
  },
  initial: {
    version: DATA_FORMAT_VERSION,
    scenarioGraph: mockGraphs.initialScenarioGraph,
    scenarioMap: mockBudgets.initialScenarioMap,
    budgetMap: mockBudgets.initialBudgetMap,
  },
  simple: {
    version: DATA_FORMAT_VERSION,
    scenarioGraph: mockGraphs.simpleScenarioGraph,
    scenarioMap: mockBudgets.simpleScenarioMap,
    budgetMap: mockBudgets.simpleBudgetMap,
  },
  detailed: {
    version: DATA_FORMAT_VERSION,
    scenarioGraph: mockGraphs.detailedScenarioGraph,
    scenarioMap: mockBudgets.detailedScenarioMap,
    budgetMap: mockBudgets.detailedBudgetMap,
  },
}

export const appData = examples.detailed
// export const appData = examples.new
