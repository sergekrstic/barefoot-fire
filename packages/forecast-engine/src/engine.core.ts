import moment from 'moment'
import { Budget, BudgetEvents, BudgetFrequency, Period, ScenarioBudgets, ScenarioEvents } from './engine.types'

export function calculateScenarioEvents({ budgets, period }: ScenarioBudgets): ScenarioEvents {
  // Calculate all the budget events in the scenario
  const budgetEvents = budgets.map((budget) => calculateBudgetEvents(budget, period))

  // Calculate the total amount in the scenario
  const totalAmount = budgetEvents.reduce((total, events) => total + events.totalAmount, 0)

  // Return the scenario events
  return { period, budgetEvents, totalAmount }
}

export function calculateBudgetEvents(budget: Budget, period: Period): BudgetEvents {
  const events = []
  let runningEventsTotal = 0 // Initialize the running total for events within the period
  let runningCompoundTotal = 0 // Initialize the running total for compound interest

  // Calculate the periodic interest rate
  const numberOfCompoundingPeriods = getNumberOfCompoundingPeriods(budget.frequency)
  const periodicInterestRate = budget.interestRate ? budget.interestRate / numberOfCompoundingPeriods : 0

  // Add the initial amount event, if it is within the period
  // Note: We assume that the initial amount is a one-time event that occurs at the start date of the budget
  if (budget.initialAmount && moment(budget.startDate).isBetween(period.startDate, period.endDate, undefined, '[]')) {
    // Add the initial amount event
    events.push({ date: budget.startDate, value: budget.initialAmount })
    // events.push({ date: budget.startDate, value: budget.amount })

    // And update the running totals
    runningCompoundTotal += budget.initialAmount
    runningEventsTotal += budget.initialAmount
  }

  // If the initial amount event is before the period start date, then we need to calculate the interest it would have earned
  else if (budget.initialAmount && moment(budget.startDate).isBefore(period.startDate)) {
    let amount = 0
    runningCompoundTotal += budget.initialAmount + budget.amount
    for (let event = moment(budget.startDate); event.isBefore(period.startDate); event.add(1, budget.frequency)) {
      if (event.isBetween(budget.startDate, period.startDate, undefined, '[]')) {
        const interest = budget.interestRate ? runningCompoundTotal * periodicInterestRate : 0
        amount = budget.amount + interest

        runningCompoundTotal += amount
      }
    }
    // Remove the final amount to avoid double counting the start date
    runningCompoundTotal -= amount
  }

  // Calculate the start date so that it aligns with the budget's start date and frequency
  let budgetAlignedStartDate = moment(budget.startDate)
  if (moment(budget.startDate).isBefore(period.startDate)) {
    // Align the start date to the budget frequency
    while (budgetAlignedStartDate.isBefore(period.startDate)) {
      budgetAlignedStartDate.add(1, budget.frequency)
    }
  }

  // Calculate the budget events for the period
  // We start from the budgetAlignedStartDate and go until the end of the period
  // We also check if the event is within the budget's start and end dates
  for (let event = budgetAlignedStartDate; event.isBefore(period.endDate); event.add(1, budget.frequency)) {
    if (event.isBetween(budget.startDate, budget.endDate, undefined, '[]')) {
      const isStartDate = event.isSame(budget.startDate, 'day')
      const interest = budget.interestRate ? runningCompoundTotal * periodicInterestRate : 0
      const amount = isStartDate ? budget.amount : budget.amount + interest
      events.push({ date: event.format('YYYY-MM-DD'), value: amount })

      runningCompoundTotal += amount
      runningEventsTotal += amount
    }
  }

  // Return the budget events
  return { budget, period, events, totalAmount: runningEventsTotal }
}

// @ts-ignore
export function getNumberOfCompoundingPeriods(frequency: BudgetFrequency): number {
  if (frequency === 'day') return 365
  if (frequency === 'week') return 52
  if (frequency === 'month') return 12
  if (frequency === 'quarter') return 4
  if (frequency === 'year') return 1
  throw new Error(`Invalid frequency: ${frequency}`)
}
