import { describe, expect, it } from 'vitest'
import { calculateBudgetEvents, calculateScenarioEvents } from './engine.core'
import { Budget, Period, ScenarioBudgets } from './engine.types'
import { expectToBeCloseToArray } from './test.utils'

const tenYearPeriod: Period = { startDate: '2024-01-01', endDate: '2034-01-01' }
const outsidePeriod: Period = { startDate: '2014-01-01', endDate: '2014-12-31' }
const overlapOneYearPeriod: Period = { startDate: '2024-01-01', endDate: '2024-12-31' }
const overlapStartPeriod: Period = { startDate: '2023-06-01', endDate: '2024-07-01' }
const overlapEndPeriod: Period = { startDate: '2033-07-01', endDate: '2035-01-01' }

describe('@calculateBudgetEvents()', () => {
  const budget: Budget = {
    id: 'budget-1',
    name: 'Budget 1',
    amount: 100,
    frequency: 'month',
    ...tenYearPeriod,
  }

  it('calculates budget events when period contains budget dates', () => {
    const budgetEvents = calculateBudgetEvents(budget, overlapOneYearPeriod)

    const values = budgetEvents.events.map((event) => event.value)
    const dates = budgetEvents.events.map((event) => event.date)

    expect(budgetEvents.totalAmount).toBe(1200)
    expect(budgetEvents.events).toHaveLength(12)
    expect(values).toEqual([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100])
    expect(dates).toEqual([
      '2024-01-01',
      '2024-02-01',
      '2024-03-01',
      '2024-04-01',
      '2024-05-01',
      '2024-06-01',
      '2024-07-01',
      '2024-08-01',
      '2024-09-01',
      '2024-10-01',
      '2024-11-01',
      '2024-12-01',
    ])
  })

  it('calculates budget events when period is outside budget dates', () => {
    const budgetEvents = calculateBudgetEvents(budget, outsidePeriod)

    const values = budgetEvents.events.map((event) => event.value)
    const dates = budgetEvents.events.map((event) => event.date)

    expect(budgetEvents.totalAmount).toBe(0)
    expect(budgetEvents.events).toHaveLength(0)
    expect(values).toEqual([])
    expect(dates).toEqual([])
  })

  it('calculates budget events when period partially overlaps budget start dates', () => {
    const budgetEvents = calculateBudgetEvents(budget, overlapStartPeriod)

    const values = budgetEvents.events.map((event) => event.value)
    const dates = budgetEvents.events.map((event) => event.date)

    expect(budgetEvents.totalAmount).toBe(600)
    expect(budgetEvents.events).toHaveLength(6)
    expect(values).toEqual([100, 100, 100, 100, 100, 100])
    expect(dates).toEqual(['2024-01-01', '2024-02-01', '2024-03-01', '2024-04-01', '2024-05-01', '2024-06-01'])
  })

  it('calculates budget events when period partially overlaps budget end dates', () => {
    const budgetEvents = calculateBudgetEvents(budget, overlapEndPeriod)

    const values = budgetEvents.events.map((event) => event.value)
    const dates = budgetEvents.events.map((event) => event.date)

    expect(budgetEvents.totalAmount).toBe(700)
    expect(budgetEvents.events).toHaveLength(7)
    expect(values).toEqual([100, 100, 100, 100, 100, 100, 100])
    expect(dates).toEqual([
      '2033-07-01',
      '2033-08-01',
      '2033-09-01',
      '2033-10-01',
      '2033-11-01',
      '2033-12-01',
      '2034-01-01',
    ])
  })

  it('calculates budget events with an initial amount and regular deposits', () => {
    const budgetEvents = calculateBudgetEvents({ ...budget, initialAmount: 1000 }, overlapOneYearPeriod)

    const values = budgetEvents.events.map((event) => event.value)
    const dates = budgetEvents.events.map((event) => event.date)

    expect(budgetEvents.totalAmount).toBe(2200)
    expect(budgetEvents.events).toHaveLength(13)
    expect(values).toEqual([1000, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100])
    expect(dates).toEqual([
      '2024-01-01',
      '2024-01-01',
      '2024-02-01',
      '2024-03-01',
      '2024-04-01',
      '2024-05-01',
      '2024-06-01',
      '2024-07-01',
      '2024-08-01',
      '2024-09-01',
      '2024-10-01',
      '2024-11-01',
      '2024-12-01',
    ])
  })

  it('calculates budget events with an initial amount and regular deposits when period partially overlaps budget start dates', () => {
    const budgetEvents = calculateBudgetEvents({ ...budget, initialAmount: 1000 }, overlapStartPeriod)

    const values = budgetEvents.events.map((event) => event.value)
    const dates = budgetEvents.events.map((event) => event.date)

    expect(budgetEvents.totalAmount).toBe(1600)
    expect(budgetEvents.events).toHaveLength(7)

    expect(values).toEqual([1000, 100, 100, 100, 100, 100, 100])
    expect(dates).toEqual([
      '2024-01-01',
      '2024-01-01',
      '2024-02-01',
      '2024-03-01',
      '2024-04-01',
      '2024-05-01',
      '2024-06-01',
    ])
  })

  it('calculates a budget events with an initial amount and regular deposits when period partially overlaps budget end dates', () => {
    const budgetEvents = calculateBudgetEvents({ ...budget, initialAmount: 1000 }, overlapEndPeriod)

    const values = budgetEvents.events.map((event) => event.value)
    const dates = budgetEvents.events.map((event) => event.date)

    expect(budgetEvents.totalAmount).toBe(700)
    expect(budgetEvents.events).toHaveLength(7)

    expect(values).toEqual([100, 100, 100, 100, 100, 100, 100])
    expect(dates).toEqual([
      '2033-07-01',
      '2033-08-01',
      '2033-09-01',
      '2033-10-01',
      '2033-11-01',
      '2033-12-01',
      '2034-01-01',
    ])
  })

  it('calculates budget events with an initial amount and interest rate', () => {
    const budgetEvents = calculateBudgetEvents(
      { ...budget, initialAmount: 1000, amount: 0, interestRate: 0.1 },
      overlapOneYearPeriod,
    )

    const values = budgetEvents.events.map((event) => event.value)
    const dates = budgetEvents.events.map((event) => event.date)

    expect(budgetEvents.totalAmount).toBeCloseTo(1104.71)
    expect(budgetEvents.events).toHaveLength(13)
    expectToBeCloseToArray(values, [1000, 8.33, 8.4, 8.47, 8.54, 8.61, 8.69, 8.76, 8.83, 8.91, 8.98, 9.05, 9.13])
    expect(dates).toEqual([
      '2024-01-01',
      '2024-01-01',
      '2024-02-01',
      '2024-03-01',
      '2024-04-01',
      '2024-05-01',
      '2024-06-01',
      '2024-07-01',
      '2024-08-01',
      '2024-09-01',
      '2024-10-01',
      '2024-11-01',
      '2024-12-01',
    ])
  })

  it('calculates budget events with an initial amount and interest rate when period partially overlaps budget start dates', () => {
    const budgetEvents = calculateBudgetEvents(
      { ...budget, initialAmount: 1000, amount: 0, interestRate: 0.1 },
      overlapStartPeriod,
    )

    const values = budgetEvents.events.map((event) => event.value)
    const dates = budgetEvents.events.map((event) => event.date)

    expect(budgetEvents.totalAmount).toBeCloseTo(1051.05)
    expect(budgetEvents.events).toHaveLength(7)
    expectToBeCloseToArray(values, [1000, 8.33, 8.4, 8.47, 8.54, 8.61, 8.69])
    expect(dates).toEqual([
      '2024-01-01',
      '2024-01-01',
      '2024-02-01',
      '2024-03-01',
      '2024-04-01',
      '2024-05-01',
      '2024-06-01',
    ])
  })

  it('calculates budget events with an initial amount and interest rate when period partially overlaps budget end dates', () => {
    const budgetEvents = calculateBudgetEvents(
      { ...budget, initialAmount: 1000, amount: 0, interestRate: 0.1 },
      overlapEndPeriod,
    )

    const values = budgetEvents.events.map((event) => event.value)
    const dates = budgetEvents.events.map((event) => event.date)

    expect(budgetEvents.totalAmount).toBeCloseTo(154.05)
    expect(budgetEvents.events).toHaveLength(7)
    expectToBeCloseToArray(values, [21.462, 21.641, 21.822, 22.003, 22.187, 22.372, 22.558])
    expect(dates).toEqual([
      '2033-07-01',
      '2033-08-01',
      '2033-09-01',
      '2033-10-01',
      '2033-11-01',
      '2033-12-01',
      '2034-01-01',
    ])
  })

  it('calculates budget events with an initial amount, interest rate, and regular deposits', () => {
    const budgetEvents = calculateBudgetEvents(
      { ...budget, initialAmount: 1000, interestRate: 0.1 },
      overlapOneYearPeriod,
    )

    const values = budgetEvents.events.map((event) => event.value)
    const dates = budgetEvents.events.map((event) => event.date)

    expect(budgetEvents.totalAmount).toBeCloseTo(2361.27)
    expect(budgetEvents.events).toHaveLength(13)
    expectToBeCloseToArray(
      values,
      [1000, 108.33, 109.24, 110.15, 111.06, 111.99, 112.92, 113.86, 114.81, 115.77, 116.734, 117.71, 118.69],
    )
    expect(dates).toEqual([
      '2024-01-01',
      '2024-01-01',
      '2024-02-01',
      '2024-03-01',
      '2024-04-01',
      '2024-05-01',
      '2024-06-01',
      '2024-07-01',
      '2024-08-01',
      '2024-09-01',
      '2024-10-01',
      '2024-11-01',
      '2024-12-01',
    ])
  })

  it('calculates budget events with an initial amount, interest rate, and regular deposits when period partially overlaps budget start dates', () => {
    const budgetEvents = calculateBudgetEvents(
      { ...budget, initialAmount: 1000, interestRate: 0.1 },
      overlapStartPeriod,
    )

    const values = budgetEvents.events.map((event) => event.value)
    const dates = budgetEvents.events.map((event) => event.date)

    expect(budgetEvents.totalAmount).toBeCloseTo(1663.69)
    expect(budgetEvents.events).toHaveLength(7)
    expectToBeCloseToArray(values, [1000, 108.33, 109.24, 110.15, 111.06, 111.989, 112.92])
    expect(dates).toEqual([
      '2024-01-01',
      '2024-01-01',
      '2024-02-01',
      '2024-03-01',
      '2024-04-01',
      '2024-05-01',
      '2024-06-01',
    ])
  })

  it('calculates budget events with an initial amount, interest rate, and regular deposits when period partially overlaps budget end dates', () => {
    const budgetEvents = calculateBudgetEvents({ ...budget, initialAmount: 1000, interestRate: 0.1 }, overlapEndPeriod)

    const values = budgetEvents.events.map((event) => event.value)
    const dates = budgetEvents.events.map((event) => event.date)

    expect(budgetEvents.totalAmount).toBeCloseTo(2002.64)
    expect(budgetEvents.events).toHaveLength(7)
    expectToBeCloseToArray(values, [279.018, 281.34, 283.69, 286.05, 288.44, 290.84, 293.26])
    expect(dates).toEqual([
      '2033-07-01',
      '2033-08-01',
      '2033-09-01',
      '2033-10-01',
      '2033-11-01',
      '2033-12-01',
      '2034-01-01',
    ])
  })
})

describe('@calculateScenarioBudgets()', () => {
  const scenarioBudgets: ScenarioBudgets = {
    id: 'test-scenario',
    name: 'Test scenario',
    period: overlapOneYearPeriod,
    budgets: [
      {
        id: 'budget-1',
        name: 'Budget 1',
        amount: 100,
        frequency: 'month',
        ...tenYearPeriod,
      },
      {
        id: 'budget-2',
        name: 'Budget 2',
        amount: 1000,
        frequency: 'year',
        ...tenYearPeriod,
      },
    ],
  }

  it('calculates a scenario when period contains budget dates', () => {
    const scenarioEvents = calculateScenarioEvents(scenarioBudgets)

    expect(scenarioEvents.totalExpense).toBe(2200)
    expect(scenarioEvents.budgetEvents).toHaveLength(2)

    // Budget 1
    const budget1 = scenarioEvents.budgetEvents[0]
    const values1 = budget1.events.map((event) => event.value)
    const dates1 = budget1.events.map((event) => event.date)

    expect(budget1.totalAmount).toBe(1200)
    expect(budget1.events).toHaveLength(12)
    expect(values1).toEqual([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100])
    expect(dates1).toEqual([
      '2024-01-01',
      '2024-02-01',
      '2024-03-01',
      '2024-04-01',
      '2024-05-01',
      '2024-06-01',
      '2024-07-01',
      '2024-08-01',
      '2024-09-01',
      '2024-10-01',
      '2024-11-01',
      '2024-12-01',
    ])

    // Budget 2
    const budget2 = scenarioEvents.budgetEvents[1]
    const values2 = budget2.events.map((event) => event.value)
    const dates2 = budget2.events.map((event) => event.date)

    expect(budget2.totalAmount).toBe(1000)
    expect(budget2.events).toHaveLength(1)
    expect(values2).toEqual([1000])
    expect(dates2).toEqual(['2024-01-01'])
  })

  it('calculates a scenario when period partially overlaps budget start dates', () => {
    const scenarioEvents = calculateScenarioEvents({ ...scenarioBudgets, period: overlapStartPeriod })

    expect(scenarioEvents.totalExpense).toBe(1600)
    expect(scenarioEvents.budgetEvents).toHaveLength(2)

    // Budget 1
    const budget1 = scenarioEvents.budgetEvents[0]
    const values1 = budget1.events.map((event) => event.value)
    const dates1 = budget1.events.map((event) => event.date)

    expect(budget1.totalAmount).toBe(600)
    expect(budget1.events).toHaveLength(6)
    expect(values1).toEqual([100, 100, 100, 100, 100, 100])
    expect(dates1).toEqual(['2024-01-01', '2024-02-01', '2024-03-01', '2024-04-01', '2024-05-01', '2024-06-01'])

    // Budget 2
    const budget2 = scenarioEvents.budgetEvents[1]
    const values2 = budget2.events.map((event) => event.value)
    const dates2 = budget2.events.map((event) => event.date)

    expect(budget2.totalAmount).toBe(1000)
    expect(budget2.events).toHaveLength(1)
    expect(values2).toEqual([1000])
    expect(dates2).toEqual(['2024-01-01'])
  })

  it('calculates a scenario when period partially overlaps budget end dates', () => {
    const scenarioEvents = calculateScenarioEvents({ ...scenarioBudgets, period: overlapEndPeriod })

    // Budget 1
    const budget1 = scenarioEvents.budgetEvents[0]
    const values1 = budget1.events.map((event) => event.value)
    const dates1 = budget1.events.map((event) => event.date)

    expect(budget1.totalAmount).toBe(700)
    expect(budget1.events).toHaveLength(7)
    expect(values1).toEqual([100, 100, 100, 100, 100, 100, 100])
    expect(dates1).toEqual([
      '2033-07-01',
      '2033-08-01',
      '2033-09-01',
      '2033-10-01',
      '2033-11-01',
      '2033-12-01',
      '2034-01-01',
    ])

    // Budget 2
    const budget2 = scenarioEvents.budgetEvents[1]
    const values2 = budget2.events.map((event) => event.value)
    const dates2 = budget2.events.map((event) => event.date)

    expect(budget2.totalAmount).toBe(1000)
    expect(budget2.events).toHaveLength(1)
    expect(values2).toEqual([1000])
    expect(dates2).toEqual(['2033-07-01'])
  })
})
