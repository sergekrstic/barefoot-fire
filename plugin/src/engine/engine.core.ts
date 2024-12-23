import moment from 'moment'
import { Budget, BudgetEvents, Period, ScenarioBudgets, ScenarioEvents } from './engine.types'

export function calculateScenarioBudgets({ period, budgets }: ScenarioBudgets): ScenarioEvents {
  // Calculate all the budget events in the scenario
  const events = budgets.map((budget) => calculateBudgetEvents(budget, period))

  // Calculate the total expense in the scenario
  const totalExpense = events.reduce((total, budgetEvents) => total + budgetEvents.totalExpense, 0)

  // Return the scenario events
  return { period, budgetEvents: events, totalExpense }
}

export function calculateBudgetEvents(budget: Budget, period: Period): BudgetEvents {
  const events = []
  let runningTotal = 0

  // Adjust the interest rate
  const numberOfPeriods = moment(period.endDate).diff(period.startDate, budget.frequency)
  const adjustedInterestRate = budget.interestRate ? budget.interestRate / numberOfPeriods : 0
  console.log('numberOfPeriods', numberOfPeriods)
  console.log('adjustedInterestRate', adjustedInterestRate)

  // Calculate the initial amount event
  if (budget.initialAmount) {
    events.push({ date: budget.startDate, value: budget.initialAmount })

    runningTotal += budget.initialAmount
  }

  // Calculate the repeated budget events
  for (let event = moment(period.startDate); event.isBefore(period.endDate); event.add(1, budget.frequency)) {
    if (event.isBetween(budget.startDate, budget.endDate, undefined, '[]')) {
      const interest = budget.interestRate ? runningTotal * adjustedInterestRate : 0
      const amount = budget.expense + interest
      events.push({ date: event.format('YYYY-MM-DD'), value: amount })

      runningTotal += amount
    }
  }

  // Return the budget events
  return { budget, period, events, totalExpense: runningTotal }
}
