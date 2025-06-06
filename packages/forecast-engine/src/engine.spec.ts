import { describe, expect, it } from 'vitest'
import { calculateBudgetEvents, calculateScenarioEvents } from './engine.core'
import { Budget, Period } from './engine.types'
import { expectToBeCloseToArray } from './test.utils'

const tenYearBudgetPeriod: Period = { startDate: '2024-01-01', endDate: '2034-01-01' }
const beforeOutsidePeriod: Period = { startDate: '2014-01-01', endDate: '2014-12-31' }
const afterOutsidePeriod: Period = { startDate: '2044-01-01', endDate: '2044-12-31' }
const alignedStartOneYearPeriod: Period = { startDate: '2024-01-01', endDate: '2024-12-31' }
const alignedEndOneYearPeriod: Period = { startDate: '2033-01-01', endDate: '2034-01-01' }
const containedOneYearPeriod: Period = { startDate: '2024-06-01', endDate: '2025-05-31' }
const misalignedOverlappingStartPeriod: Period = { startDate: '2023-06-07', endDate: '2024-06-07' }
const misalignedOverlappingEndPeriod: Period = { startDate: '2033-06-07', endDate: '2035-01-07' }

describe('@calculateBudgetEvents()', () => {
  const budget: Budget = {
    id: 'budget-1',
    name: 'Budget 1',
    amount: 100,
    frequency: 'month',
    ...tenYearBudgetPeriod,
  }

  it('calculates budget events when period when it aligns with budget start dates', () => {
    const budgetEvents = calculateBudgetEvents(budget, alignedStartOneYearPeriod)

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

  it('calculates budget events when period when it aligns with budget end dates', () => {
    const budgetEvents = calculateBudgetEvents(budget, alignedEndOneYearPeriod)

    const values = budgetEvents.events.map((event) => event.value)
    const dates = budgetEvents.events.map((event) => event.date)

    expect(budgetEvents.totalAmount).toBe(1200)
    expect(budgetEvents.events).toHaveLength(12)
    expect(values).toEqual([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100])
    expect(dates).toEqual([
      '2033-01-01',
      '2033-02-01',
      '2033-03-01',
      '2033-04-01',
      '2033-05-01',
      '2033-06-01',
      '2033-07-01',
      '2033-08-01',
      '2033-09-01',
      '2033-10-01',
      '2033-11-01',
      '2033-12-01',
    ])
  })

  it('calculates budget events when period contains budget dates', () => {
    const budgetEvents = calculateBudgetEvents(budget, containedOneYearPeriod)

    const values = budgetEvents.events.map((event) => event.value)
    const dates = budgetEvents.events.map((event) => event.date)

    expect(budgetEvents.totalAmount).toBe(1200)
    expect(budgetEvents.events).toHaveLength(12)
    expect(values).toEqual([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100])
    expect(dates).toEqual([
      '2024-06-01',
      '2024-07-01',
      '2024-08-01',
      '2024-09-01',
      '2024-10-01',
      '2024-11-01',
      '2024-12-01',
      '2025-01-01',
      '2025-02-01',
      '2025-03-01',
      '2025-04-01',
      '2025-05-01',
    ])
  })

  it('calculates budget events when period is outside budget dates (before)', () => {
    const budgetEvents = calculateBudgetEvents(budget, beforeOutsidePeriod)

    const values = budgetEvents.events.map((event) => event.value)
    const dates = budgetEvents.events.map((event) => event.date)

    expect(budgetEvents.totalAmount).toBe(0)
    expect(budgetEvents.events).toHaveLength(0)
    expect(values).toEqual([])
    expect(dates).toEqual([])
  })

  it('calculates budget events when period is outside budget dates (after)', () => {
    const budgetEvents = calculateBudgetEvents(budget, afterOutsidePeriod)

    const values = budgetEvents.events.map((event) => event.value)
    const dates = budgetEvents.events.map((event) => event.date)

    expect(budgetEvents.totalAmount).toBe(0)
    expect(budgetEvents.events).toHaveLength(0)
    expect(values).toEqual([])
    expect(dates).toEqual([])
  })

  it('calculates budget events when period partially overlaps budget start dates', () => {
    const budgetEvents = calculateBudgetEvents(budget, misalignedOverlappingStartPeriod)

    const values = budgetEvents.events.map((event) => event.value)
    const dates = budgetEvents.events.map((event) => event.date)

    expect(budgetEvents.totalAmount).toBe(600)
    expect(budgetEvents.events).toHaveLength(6)
    expect(values).toEqual([100, 100, 100, 100, 100, 100])
    expect(dates).toEqual(['2024-01-01', '2024-02-01', '2024-03-01', '2024-04-01', '2024-05-01', '2024-06-01'])
  })

  it('calculates budget events when period partially overlaps budget end dates', () => {
    const budgetEvents = calculateBudgetEvents(budget, misalignedOverlappingEndPeriod)

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
    const budgetEvents = calculateBudgetEvents({ ...budget, initialAmount: 1000 }, alignedStartOneYearPeriod)

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
    const budgetEvents = calculateBudgetEvents({ ...budget, initialAmount: 1000 }, misalignedOverlappingStartPeriod)

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

  it('calculates budget events with an initial amount and regular deposits when period partially overlaps budget end dates', () => {
    const budgetEvents = calculateBudgetEvents({ ...budget, initialAmount: 1000 }, misalignedOverlappingEndPeriod)

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
      alignedStartOneYearPeriod,
    )

    const values = budgetEvents.events.map((event) => event.value)
    const dates = budgetEvents.events.map((event) => event.date)

    expect(budgetEvents.totalAmount).toBeCloseTo(1095.583)
    expect(budgetEvents.events).toHaveLength(13)
    expectToBeCloseToArray(values, [1000, 0, 8.33, 8.4, 8.47, 8.54, 8.61, 8.69, 8.76, 8.83, 8.91, 8.98, 9.05])
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
      misalignedOverlappingStartPeriod,
    )

    const values = budgetEvents.events.map((event) => event.value)
    const dates = budgetEvents.events.map((event) => event.date)

    expect(budgetEvents.totalAmount).toBeCloseTo(1042.366)
    expect(budgetEvents.events).toHaveLength(7)
    expectToBeCloseToArray(values, [1000, 0, 8.33, 8.4, 8.47, 8.54, 8.61])
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
      misalignedOverlappingEndPeriod,
    )

    const values = budgetEvents.events.map((event) => event.value)
    const dates = budgetEvents.events.map((event) => event.date)

    expect(budgetEvents.totalAmount).toBeCloseTo(152.775)
    expect(budgetEvents.events).toHaveLength(7)
    expectToBeCloseToArray(values, [21.285, 21.462, 21.641, 21.822, 22.003, 22.187, 22.372])
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
      alignedStartOneYearPeriod,
    )

    const values = budgetEvents.events.map((event) => event.value)
    const dates = budgetEvents.events.map((event) => event.date)

    expect(budgetEvents.totalAmount).toBeCloseTo(2352.14)
    expect(budgetEvents.events).toHaveLength(13)
    expectToBeCloseToArray(
      values,
      [1000, 100, 109.166, 110.076, 110.993, 111.918, 112.851, 113.791, 114.739, 115.696, 116.66, 117.632, 118.61],
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
      misalignedOverlappingStartPeriod,
    )

    const values = budgetEvents.events.map((event) => event.value)
    const dates = budgetEvents.events.map((event) => event.date)

    expect(budgetEvents.totalAmount).toBeCloseTo(1655.006)
    expect(budgetEvents.events).toHaveLength(7)
    expectToBeCloseToArray(values, [1000, 100, 109.166, 110.076, 110.993, 111.918, 112.851])
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
    const budgetEvents = calculateBudgetEvents(
      { ...budget, initialAmount: 1000, interestRate: 0.1 },
      misalignedOverlappingEndPeriod,
    )

    const values = budgetEvents.events.map((event) => event.value)
    const dates = budgetEvents.events.map((event) => event.date)

    expect(budgetEvents.totalAmount).toBeCloseTo(2001.365)
    expect(budgetEvents.events).toHaveLength(7)
    expectToBeCloseToArray(values, [278.84, 281.164, 283.507, 285.869, 288.252, 290.654, 293.076])
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

describe('@calculateScenarioEvents()', () => {
  const scenarioBudgets: Budget[] = [
    {
      id: 'budget-1',
      name: 'Budget 1',
      amount: 100,
      frequency: 'month',
      ...tenYearBudgetPeriod,
    },
    {
      id: 'budget-2',
      name: 'Budget 2',
      amount: 1000,
      frequency: 'year',
      ...tenYearBudgetPeriod,
    },
  ]

  it('calculates a scenario when period contains budget dates', () => {
    const scenarioEvents = calculateScenarioEvents({ budgets: scenarioBudgets, period: alignedStartOneYearPeriod })

    expect(scenarioEvents.totalAmount).toBe(2200)
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
    const scenarioEvents = calculateScenarioEvents({
      budgets: scenarioBudgets,
      period: misalignedOverlappingStartPeriod,
    })

    expect(scenarioEvents.totalAmount).toBe(1600)
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
    const scenarioEvents = calculateScenarioEvents({ budgets: scenarioBudgets, period: misalignedOverlappingEndPeriod })

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
    expect(dates2).toEqual(['2034-01-01'])
  })
})
