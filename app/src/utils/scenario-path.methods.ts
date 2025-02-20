import { Budget, BudgetMap, ScenarioMap, ScenarioPath, ScenarioStartEvents } from 'types'

import { Period, ScenarioBudgets, ScenarioEvents, calculateBudgetEvents } from '@fire/forecast-engine'

import { collectBudgetIds } from './budget.methods'
import { deepClone } from './helper.methods'

// Create a compound scenario from the given scenario IDs
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

// Todo: Update this function to utilize a budget event cache
export function calculateScenarioEventsWithCacheOptimisation({ budgets, period }: ScenarioBudgets): ScenarioEvents {
  // Calculate all the budget events in the scenario
  const budgetEvents = budgets.map((budget) => calculateBudgetEvents(budget, period))

  // Calculate the total expense in the scenario
  const totalExpense = budgetEvents.reduce((total, events) => total + events.totalAmount, 0)

  // Return the scenario events
  return { period, budgetEvents, totalAmount: totalExpense }
}
