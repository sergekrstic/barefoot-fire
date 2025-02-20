import moment from 'moment'
import { Budget, BudgetEvents, BudgetFrequency, Period, ScenarioBudgets, ScenarioEvents } from './engine.types'

export function calculateScenarioEvents({ budgets, period }: ScenarioBudgets): ScenarioEvents {
  // Calculate all the budget events in the scenario
  const budgetEvents = budgets.map((budget) => calculateBudgetEvents(budget, period))

  // Calculate the total expense in the scenario
  const totalExpense = budgetEvents.reduce((total, events) => total + events.totalAmount, 0)

  // Return the scenario events
  return { period, budgetEvents, totalAmount: totalExpense }
}

// Todo: Optimize this function, reduce the number of iterations
export function calculateBudgetEvents(budget: Budget, period: Period): BudgetEvents {
  const events = []
  let runningEventsTotal = 0
  let runningCompoundTotal = 0

  // Adjust the interest rate
  const numberOfPeriods = getNumberOfPeriods(budget.frequency)
  const adjustedInterestRate = budget.interestRate ? budget.interestRate / numberOfPeriods : 0

  // Calculate the initial amount event
  if (budget.initialAmount && moment(budget.startDate).isBetween(period.startDate, period.endDate, undefined, '[]')) {
    events.push({ date: budget.startDate, value: budget.initialAmount })

    runningCompoundTotal += budget.initialAmount
    runningEventsTotal += budget.initialAmount
  }

  // If the initial amount event if before the period start date, then we need to calculate the interest it would have earned
  if (budget.initialAmount && moment(budget.startDate).isBefore(period.startDate)) {
    runningCompoundTotal += budget.initialAmount
    for (let event = moment(budget.startDate); event.isBefore(period.startDate); event.add(1, budget.frequency)) {
      if (event.isBetween(budget.startDate, period.startDate, undefined, '[]')) {
        const interest = budget.interestRate ? runningCompoundTotal * adjustedInterestRate : 0
        const amount = budget.amount + interest

        runningCompoundTotal += amount
      }
    }
  }

  // Calculate the start date so that it aligns with the budget's start date and frequency
  let budgetAlignedStartDate = moment(budget.startDate)
  if (moment(budget.startDate).isBetween(period.startDate, period.endDate, undefined, '[]')) {
    while (budgetAlignedStartDate.isBefore(period.startDate)) {
      budgetAlignedStartDate.add(-1, budget.frequency)
    }
  } else {
    budgetAlignedStartDate = moment(period.startDate)
  }

  // for (let event = moment(period.startDate); event.isBefore(period.endDate); event.add(1, budget.frequency)) {
  for (let event = budgetAlignedStartDate; event.isBefore(period.endDate); event.add(1, budget.frequency)) {
    if (event.isBetween(budget.startDate, budget.endDate, undefined, '[]')) {
      const interest = budget.interestRate ? runningCompoundTotal * adjustedInterestRate : 0
      const amount = budget.amount + interest
      events.push({ date: event.format('YYYY-MM-DD'), value: amount })

      runningCompoundTotal += amount
      runningEventsTotal += amount
    }
  }

  // Return the budget events
  return { budget, period, events, totalAmount: runningEventsTotal }
}

// @ts-ignore
export function getNumberOfPeriods(frequency: BudgetFrequency): number {
  if (frequency === 'day') return 365
  if (frequency === 'week') return 52
  if (frequency === 'month') return 12
  if (frequency === 'quarter') return 4
  if (frequency === 'year') return 1
  throw new Error(`Invalid frequency: ${frequency}`)
}
