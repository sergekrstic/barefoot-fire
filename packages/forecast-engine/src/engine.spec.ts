import { describe, expect, it } from 'vitest'
import { calculateBudgetEvents, calculateScenarioBudgets } from './engine.core'
import { Budget, Period, ScenarioBudgets } from './engine.types'

describe('@calculateBudgetEvents()', () => {
  const budget: Budget = {
    name: 'Budget 1',
    // type: 'expense',
    amount: 100,
    frequency: 'month',
    startDate: '2024-01-01',
    endDate: '2034-12-31',
  }

  it('should calculate expense when period contains budget dates', () => {
    const period: Period = {
      startDate: '2024-01-01',
      endDate: '2024-12-31',
    }
    const budgetEvents = calculateBudgetEvents(budget, period)

    expect(budgetEvents.totalExpense).toBe(1200)
    expect(budgetEvents.events).toHaveLength(12)
  })

  it('should calculate a budget when period is outside budget dates', () => {
    const period: Period = {
      startDate: '2014-01-01',
      endDate: '2014-12-31',
    }

    const budgetEvents = calculateBudgetEvents(budget, period)

    expect(budgetEvents.totalExpense).toBe(0)
    expect(budgetEvents.events).toHaveLength(0)
  })

  it('should calculate a budget when period partially overlaps budget dates', () => {
    const period: Period = {
      startDate: '2023-06-01',
      endDate: '2024-07-01',
    }

    const budgetEvents = calculateBudgetEvents(budget, period)

    expect(budgetEvents.totalExpense).toBe(600)
    expect(budgetEvents.events).toHaveLength(6)
  })

  it('should calculate a budget with an initial amount and regular deposits', () => {
    const period: Period = {
      startDate: '2024-01-01',
      endDate: '2024-12-31',
    }

    const budgetEvents = calculateBudgetEvents({ ...budget, initialAmount: 1000 }, period)

    expect(budgetEvents.totalExpense).toBe(2200)
    expect(budgetEvents.events).toHaveLength(13)
  })

  it('should calculate a budget with an initial amount and interest rate', () => {
    const period: Period = {
      startDate: '2024-01-01',
      endDate: '2024-12-31',
    }

    const budgetEvents = calculateBudgetEvents({ ...budget, initialAmount: 1000, amount: 0, interestRate: 0.1 }, period)

    expect(budgetEvents.totalExpense).toBeCloseTo(1104.71)
    expect(budgetEvents.events).toHaveLength(13)
  })

  it('should calculate a budget with an initial amount, interest rate, and regular deposits', () => {
    const period: Period = {
      startDate: '2024-01-01',
      endDate: '2024-12-31',
    }

    const budgetEvents = calculateBudgetEvents({ ...budget, initialAmount: 1000, interestRate: 0.1 }, period)

    expect(budgetEvents.totalExpense).toBeCloseTo(2361.27)
    expect(budgetEvents.events).toHaveLength(13)
  })
})

describe('@calculateScenarioBudgets()', () => {
  it('should calculate the total amount for a scenario', () => {
    const scenarioBudgets: ScenarioBudgets = {
      period: {
        startDate: '2024-01-01',
        endDate: '2024-12-31',
      },
      budgets: [
        {
          name: 'Budget 1',
          // type: 'expense',
          amount: 100,
          frequency: 'month',
          startDate: '2024-01-01',
          endDate: '2034-12-31',
        },
        {
          name: 'Budget 2',
          // type: 'expense',
          amount: 1000,
          frequency: 'year',
          startDate: '2024-01-01',
          endDate: '2034-12-31',
        },
      ],
    }

    const scenarioEvents = calculateScenarioBudgets(scenarioBudgets)

    expect(scenarioEvents.totalExpense).toBe(2200)
    expect(scenarioEvents.budgetEvents).toHaveLength(2)
  })
})
