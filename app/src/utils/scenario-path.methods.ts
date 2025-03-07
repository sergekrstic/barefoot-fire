import { Budget, BudgetMap, BudgetTransactionsCache, ScenarioMap, ScenarioPath, ScenarioStartEvents } from 'types'

import { BudgetEvents, Period, ScenarioBudgets, calculateBudgetEvents } from '@fire/forecast-engine'

import { collectBudgetIds } from './budget.methods'
import { deepClone } from './helper.methods'

// Todo: Update this function to utilize a shared budgets across scenarios
export function buildScenarioPath(
  scenarioIds: string[],
  scenarioMap: ScenarioMap,
  budgetMap: BudgetMap,
  forecastPeriod: Period,
): ScenarioPath {
  const adjustedBudgets: Budget[] = []
  const scenarioStartEvents: ScenarioStartEvents = []

  // Adjust the end date of each scenario
  scenarioIds.forEach((scenarioId, index) => {
    const scenario = scenarioMap[scenarioId]
    const nextScenario = scenarioMap[scenarioIds[index + 1]]

    // Traverse the budget tree and clone the budgets
    const budgetIds = collectBudgetIds(scenario.budgets, true)
    const clonedBudgets = budgetIds.map((id) => deepClone(budgetMap[id]))

    // If there is a next scenario, adjust the end date of the current scenario
    if (nextScenario) {
      clonedBudgets.forEach((budget) => {
        budget.endDate = nextScenario.startDate
      })
    }

    adjustedBudgets.push(...clonedBudgets)
    scenarioStartEvents.push({ date: scenario.startDate, name: scenario.name })
  })

  return {
    id: 'scenario-path',
    name: 'Scenario Path',
    budgets: adjustedBudgets,
    scenarioStartEvents,
    period: forecastPeriod,
  }
}

// Todo: rename `globalTransactionsCache` to `globalBudgetTransactionsCache`
const globalTransactionsCache: BudgetTransactionsCache = {}

// Todo: Rename this function to `calculateScenarioPathTransactions`
export function calculateBudgetTransactions(
  { budgets, period }: ScenarioBudgets,
  transactionsCache: BudgetTransactionsCache = globalTransactionsCache,
  // Todo: create a new type to return: ScenarioPathTransactions
): BudgetEvents[] {
  // For each budget, calculate its transactions
  return budgets.map((budget) => {
    const cachedTransactions = transactionsCache[budget.id]

    // Are the budget transactions in the cache?
    if (cachedTransactions) {
      const cachedBudgetKey = JSON.stringify(cachedTransactions.budget)
      const currentBudgetKey = JSON.stringify(budget)

      // If the budget has not changed, use the cached transactions
      if (cachedBudgetKey === currentBudgetKey) {
        // console.log('Using cache:', budget.id)
        return cachedTransactions
      }
    }

    // Not in cache, so calculate the budget transactions
    const budgetTransactions = calculateBudgetEvents(budget, period)

    // And add it to the cache
    transactionsCache[budget.id] = budgetTransactions

    return budgetTransactions
  })

  // Todo: add a flag to indicate if the scenario path transactions have been updated
}

export interface ScenarioPathTransactions {
  pathIds: string[]
  transactions: BudgetEvents[]
  lastModified: string
}
