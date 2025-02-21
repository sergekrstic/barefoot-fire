import { Budget, BudgetMap, BudgetTransactionsCache, ScenarioMap } from 'types'
import { describe, expect, it } from 'vitest'

import { ScenarioBudgets, calculateScenarioEvents } from '@fire/forecast-engine'

import {
  calculateBudgetRollupValue,
  cloneBudgetForest,
  collectBudgetIds,
  findBudgetInForest,
  generateNewBudgetIdMap,
} from './budget.methods'
import { formatTransactionValue } from './helper.methods'
import {
  convertBudgetTransactionsToPlotData,
  dateFromCurrentInterval,
  getCurrentInterval,
  preprocessPlotData,
} from './plot-data.methods'
import { buildScenarioPath, calculateBudgetTransactions } from './scenario-path.methods'

describe('plot-data.methods', () => {
  describe('@convertScenarioEventsToPlotData()', () => {
    const scenarioEvents = calculateScenarioEvents({
      period: { startDate: '2024-01-01', endDate: '2024-12-31' },
      budgets: [
        {
          id: 'mock-budget-01',
          name: 'mock-budget-01',
          amount: 100,
          frequency: 'month',
          startDate: '2024-01-01',
          endDate: '2024-03-01',
        },
        {
          id: 'mock-budget-02',
          name: 'mock-budget-02',
          amount: 50,
          frequency: 'week',
          startDate: '2024-01-01',
          endDate: '2024-02-01',
          initialAmount: 1000,
          interestRate: 0.1,
        },
      ],
    })

    const expectedPlotData = [
      { date: '2024-01-01', name: 'mock-budget-01', amount: 100 },
      { date: '2024-01-01', name: 'mock-budget-02', amount: 1000 },
      { date: '2024-01-01', name: 'mock-budget-02', amount: 51.92307692307692 },
      { date: '2024-01-08', name: 'mock-budget-02', amount: 52.02292899408284 },
      { date: '2024-01-15', name: 'mock-budget-02', amount: 52.12297308830223 },
      { date: '2024-01-22', name: 'mock-budget-02', amount: 52.2232095750105 },
      { date: '2024-01-29', name: 'mock-budget-02', amount: 52.32363882419322 },
      { date: '2024-02-01', name: 'mock-budget-01', amount: 100 },
      { date: '2024-03-01', name: 'mock-budget-01', amount: 100 },
    ]

    it('creates a flat array', () => {
      const plotData = convertBudgetTransactionsToPlotData(scenarioEvents.budgetEvents)
      expect(plotData.length).toBe(9)
    })

    it('creates a sort array', () => {
      const plotData = convertBudgetTransactionsToPlotData(scenarioEvents.budgetEvents)
      const actualDates = plotData.map((datum) => datum.date)
      const expectedDates = expectedPlotData.map((datum) => datum.date)
      expect(actualDates).toStrictEqual(expectedDates)
    })
  })

  describe('@preprocessPlotData()', () => {
    it('bins the data into yearly intervals', () => {
      const scenarioEvents = calculateScenarioEvents({
        period: { startDate: '2024-01-01', endDate: '2034-12-31' },
        budgets: [
          {
            id: 'mock-budget-01',
            name: 'mock-budget-01',
            amount: 100,
            frequency: 'month',
            startDate: '2024-01-01',
            endDate: '2026-06-01',
          },
        ],
      })
      const plotData = convertBudgetTransactionsToPlotData(scenarioEvents.budgetEvents)
      const processedPlotData = preprocessPlotData({ data: plotData, interval: 'year', cumulative: false })

      expect(processedPlotData.length).toBe(4)
      expect(processedPlotData).toStrictEqual([
        { date: '2024-01-01', amount: 100, name: 'mock-budget-01' },
        { date: '2025-01-01', amount: 1100, name: 'mock-budget-01' },
        { date: '2026-01-01', amount: 1200, name: 'mock-budget-01' },
        { date: '2027-01-01', amount: 600, name: 'mock-budget-01' },
      ])
    })

    it('bins the data into monthly intervals', () => {
      const scenarioEvents = calculateScenarioEvents({
        period: { startDate: '2024-01-01', endDate: '2034-12-31' },
        budgets: [
          {
            id: 'mock-budget-01',
            name: 'mock-budget-01',
            amount: 100,
            frequency: 'week',
            startDate: '2024-01-01',
            endDate: '2024-03-31',
          },
        ],
      })
      const plotData = convertBudgetTransactionsToPlotData(scenarioEvents.budgetEvents)
      const processedPlotData = preprocessPlotData({ data: plotData, interval: 'month', cumulative: false })

      expect(processedPlotData.length).toBe(4)
      expect(processedPlotData).toStrictEqual([
        { date: '2024-01-01', amount: 100, name: 'mock-budget-01' },
        { date: '2024-02-01', amount: 400, name: 'mock-budget-01' },
        { date: '2024-03-01', amount: 400, name: 'mock-budget-01' },
        { date: '2024-04-01', amount: 400, name: 'mock-budget-01' },
      ])
    })

    it('bins the data into weekly intervals', () => {
      const scenarioEvents = calculateScenarioEvents({
        period: { startDate: '2024-01-01', endDate: '2034-12-31' },
        budgets: [
          {
            id: 'mock-budget-01',
            name: 'mock-budget-01',
            amount: 100,
            frequency: 'day',
            startDate: '2024-01-01',
            endDate: '2024-01-31',
          },
        ],
      })
      const plotData = convertBudgetTransactionsToPlotData(scenarioEvents.budgetEvents)
      const processedPlotData = preprocessPlotData({ data: plotData, interval: 'week', cumulative: false })

      expect(processedPlotData.length).toBe(6)
      expect(processedPlotData).toStrictEqual([
        { date: '2024-01-01', amount: 100, name: 'mock-budget-01' },
        { date: '2024-01-08', amount: 600, name: 'mock-budget-01' },
        { date: '2024-01-15', amount: 700, name: 'mock-budget-01' },
        { date: '2024-01-22', amount: 700, name: 'mock-budget-01' },
        { date: '2024-01-29', amount: 700, name: 'mock-budget-01' },
        { date: '2024-02-05', amount: 300, name: 'mock-budget-01' },
      ])
    })

    it.skip('bins the data into weekly intervals over two years', () => {
      const scenarioEvents = calculateScenarioEvents({
        period: { startDate: '2024-01-01', endDate: '2034-12-31' },
        budgets: [
          {
            id: 'mock-budget-01',
            name: 'mock-budget-01',
            amount: 100,
            frequency: 'day',
            startDate: '2024-01-01',
            endDate: '2025-03-31',
          },
        ],
      })
      const plotData = convertBudgetTransactionsToPlotData(scenarioEvents.budgetEvents)

      // const d = plotData.map((datum) => `${datum.name}, ${datum.date}, ${datum.amount.toFixed(2)}`)
      // console.log(JSON.stringify(d, null, 2))

      const processedPlotData = preprocessPlotData({ data: plotData, interval: 'week', cumulative: false })

      // console.log(processedPlotData)

      expect(processedPlotData.length).toBe(999)
      // expect(processedPlotData.length).toBe(6)
      // expect(processedPlotData).toStrictEqual([
      //   { date: '2024-01-01', amount: 100, name: 'mock-budget-01' },
      //   { date: '2024-01-08', amount: 600, name: 'mock-budget-01' },
      //   { date: '2024-01-15', amount: 700, name: 'mock-budget-01' },
      //   { date: '2024-01-22', amount: 700, name: 'mock-budget-01' },
      //   { date: '2024-01-29', amount: 700, name: 'mock-budget-01' },
      //   { date: '2024-02-05', amount: 300, name: 'mock-budget-01' },
      // ])
    })
  })

  describe('@getCurrentInterval()', () => {
    const mockDate = new Date('2024-04-09T11:30:00.000Z').toISOString()

    it('creates a year interval', () => {
      const interval = getCurrentInterval(mockDate, 'year')
      expect(interval).toBe('2024')
    })

    it('creates a month interval', () => {
      const interval = getCurrentInterval(mockDate, 'month')
      expect(interval).toBe('2024-04')
    })

    it('creates a week interval', () => {
      const interval = getCurrentInterval(mockDate, 'week')
      expect(interval).toBe('2024-w15')
    })
  })

  describe('@dateFromCurrentInterval()', () => {
    it('creates date from year interval', () => {
      const date = dateFromCurrentInterval('2024', 'year')
      expect(date).toBe('2025-01-01')
    })

    it('creates date from month interval', () => {
      const date = dateFromCurrentInterval('2024-04', 'month')
      expect(date).toBe('2024-05-01')
    })

    it('creates date from week interval', () => {
      const date = dateFromCurrentInterval('2025-w05', 'week')
      expect(date).toBe('2025-02-05')
    })

    it('creates date from week interval when the first week (00) falls in the previous year', () => {
      const date = dateFromCurrentInterval('2027-w00', 'week')
      expect(date).toBe('2027-01-02')
    })
  })
})

describe('helper.methods', () => {
  describe('@formatTransactionValue', () => {
    it('formats a positive value', () => {
      expect(formatTransactionValue(100)).toBe('100')
    })

    it('formats a negative value', () => {
      expect(formatTransactionValue(-100)).toBe('(100)')
    })
  })
})

describe('budget.methods', () => {
  describe('@collectBudgetIds', () => {
    it('returns no IDs from an empty forest', () => {
      const budgetIds = collectBudgetIds([])

      expect(budgetIds).toStrictEqual([])
    })

    it('returns IDs from a forest with one tree', () => {
      const budgetForest = [
        {
          id: 'mock-budget-01',
        },
      ]
      const budgetIds = collectBudgetIds(budgetForest)

      expect(budgetIds).toStrictEqual(['mock-budget-01'])
    })

    it('returns IDs from a forest with one nested tree', () => {
      const budgetForest = [
        {
          id: 'mock-budget-01',
          children: [
            {
              id: 'mock-budget-02',
            },
            {
              id: 'mock-budget-03',
              children: [
                {
                  id: 'mock-budget-04',
                },
              ],
            },
          ],
        },
      ]
      const budgetIds = collectBudgetIds(budgetForest)

      expect(budgetIds).toStrictEqual(
        expect.arrayContaining(['mock-budget-01', 'mock-budget-02', 'mock-budget-03', 'mock-budget-04']),
      )
    })

    it('returns IDs from a forest with multiple nested trees', () => {
      const budgetForest = [
        {
          id: 'mock-budget-01',
          children: [
            {
              id: 'mock-budget-02',
            },
            {
              id: 'mock-budget-03',
              children: [
                {
                  id: 'mock-budget-04',
                },
              ],
            },
          ],
        },
        {
          id: 'mock-budget-05',
          children: [
            {
              id: 'mock-budget-06',
            },
            {
              id: 'mock-budget-07',
              children: [
                {
                  id: 'mock-budget-08',
                },
              ],
            },
          ],
        },
      ]
      const budgetIds = collectBudgetIds(budgetForest)

      expect(budgetIds).toStrictEqual(
        expect.arrayContaining([
          'mock-budget-01',
          'mock-budget-02',
          'mock-budget-03',
          'mock-budget-04',
          'mock-budget-05',
          'mock-budget-06',
          'mock-budget-07',
          'mock-budget-08',
        ]),
      )
    })

    it('returns IDs from a forest with multiple nested trees and excludes group budgets', () => {
      const budgetForest = [
        {
          id: 'mock-budget-01',
          children: [
            {
              id: 'mock-budget-02',
            },
            {
              id: 'mock-budget-03',
              children: [
                {
                  id: 'mock-budget-04',
                },
              ],
            },
          ],
        },
        {
          id: 'mock-budget-05',
          children: [
            {
              id: 'mock-budget-06',
            },
            {
              id: 'mock-budget-07',
              children: [
                {
                  id: 'mock-budget-08',
                },
              ],
            },
          ],
        },
      ]
      const budgetIds = collectBudgetIds(budgetForest, true)

      expect(budgetIds).toStrictEqual(
        expect.arrayContaining(['mock-budget-02', 'mock-budget-04', 'mock-budget-06', 'mock-budget-08']),
      )
    })
  })

  describe('@findBudgetInForest', () => {
    it('returns null from an empty forest', () => {
      const budget = findBudgetInForest('mock-budget-01', [])

      expect(budget).toBeNull()
    })

    it('returns a budget from a forest with one tree', () => {
      const budgetForest = [
        {
          id: 'mock-budget-01',
        },
      ]
      const budget = findBudgetInForest('mock-budget-01', budgetForest)

      expect(budget).toStrictEqual({ id: 'mock-budget-01' })
    })

    it('returns a budget from a forest with one nested tree', () => {
      const budgetForest = [
        {
          id: 'mock-budget-01',
          children: [
            {
              id: 'mock-budget-02',
            },
            {
              id: 'mock-budget-03',
              children: [
                {
                  id: 'mock-budget-04',
                },
              ],
            },
          ],
        },
      ]
      const budget = findBudgetInForest('mock-budget-03', budgetForest)

      expect(budget).toStrictEqual({ id: 'mock-budget-03', children: [{ id: 'mock-budget-04' }] })
    })

    it('returns a budget from a forest with multiple nested trees', () => {
      const budgetForest = [
        {
          id: 'mock-budget-01',
          children: [
            {
              id: 'mock-budget-02',
            },
            {
              id: 'mock-budget-03',
              children: [
                {
                  id: 'mock-budget-04',
                },
              ],
            },
          ],
        },
        {
          id: 'mock-budget-05',
          children: [
            {
              id: 'mock-budget-06',
            },
            {
              id: 'mock-budget-07',
              children: [
                {
                  id: 'mock-budget-08',
                },
              ],
            },
          ],
        },
      ]
      const budget = findBudgetInForest('mock-budget-07', budgetForest)

      expect(budget).toStrictEqual({ id: 'mock-budget-07', children: [{ id: 'mock-budget-08' }] })
    })
  })

  describe('@generateNewBudgetIdMap', () => {
    it('returns an empty map from an empty array', () => {
      const newBudgetIdMap = generateNewBudgetIdMap([])

      expect(newBudgetIdMap).toStrictEqual({})
    })

    it('returns a map from an array of IDs', () => {
      const newBudgetIdMap = generateNewBudgetIdMap(['mock-budget-01', 'mock-budget-02'])

      expect(newBudgetIdMap).toStrictEqual({
        'mock-budget-01': expect.not.stringMatching('mock-budget-01'),
        'mock-budget-02': expect.not.stringMatching('mock-budget-02'),
      })
    })
  })

  describe('@cloneBudgetForest', () => {
    it('returns an empty forest from an empty forest', () => {
      const newBudgetIdMap = generateNewBudgetIdMap([])
      const clonedBudgetForest = cloneBudgetForest([], newBudgetIdMap)

      expect(clonedBudgetForest).toStrictEqual([])
    })

    it('returns a cloned forest from a forest with one tree', () => {
      const budgetForest = [
        {
          id: 'mock-budget-01',
        },
      ]
      const newBudgetIdMap = generateNewBudgetIdMap(['mock-budget-01'])
      const clonedBudgetForest = cloneBudgetForest(budgetForest, newBudgetIdMap)

      expect(clonedBudgetForest).toStrictEqual([{ id: expect.not.stringMatching('mock-budget-01') }])
    })

    it('returns a cloned forest from a forest with one nested tree', () => {
      const budgetForest = [
        {
          id: 'mock-budget-01',
          children: [
            {
              id: 'mock-budget-02',
            },
            {
              id: 'mock-budget-03',
              children: [
                {
                  id: 'mock-budget-04',
                },
              ],
            },
          ],
        },
      ]
      const newBudgetIdMap = generateNewBudgetIdMap([
        'mock-budget-01',
        'mock-budget-02',
        'mock-budget-03',
        'mock-budget-04',
      ])
      const clonedBudgetForest = cloneBudgetForest(budgetForest, newBudgetIdMap)

      expect(clonedBudgetForest).toStrictEqual([
        {
          id: expect.not.stringMatching('mock-budget-01'),
          children: [
            {
              id: expect.not.stringMatching('mock-budget-02'),
            },
            {
              id: expect.not.stringMatching('mock-budget-03'),
              children: [
                {
                  id: expect.not.stringMatching('mock-budget-04'),
                },
              ],
            },
          ],
        },
      ])
    })

    it('returns a cloned forest from a forest with multiple nested trees', () => {
      const budgetForest = [
        {
          id: 'mock-budget-01',
          children: [
            {
              id: 'mock-budget-02',
            },
            {
              id: 'mock-budget-03',
              children: [
                {
                  id: 'mock-budget-04',
                },
              ],
            },
          ],
        },
        {
          id: 'mock-budget-05',
          children: [
            {
              id: 'mock-budget-06',
            },
            {
              id: 'mock-budget-07',
              children: [
                {
                  id: 'mock-budget-08',
                },
              ],
            },
          ],
        },
      ]
      const newBudgetIdMap = generateNewBudgetIdMap([
        'mock-budget-01',
        'mock-budget-02',
        'mock-budget-03',
        'mock-budget-04',
        'mock-budget-05',
        'mock-budget-06',
        'mock-budget-07',
        'mock-budget-08',
      ])
      const clonedBudgetForest = cloneBudgetForest(budgetForest, newBudgetIdMap)
      expect(clonedBudgetForest).toStrictEqual([
        {
          id: expect.not.stringMatching('mock-budget-01'),
          children: [
            {
              id: expect.not.stringMatching('mock-budget-02'),
            },
            {
              id: expect.not.stringMatching('mock-budget-03'),
              children: [
                {
                  id: expect.not.stringMatching('mock-budget-04'),
                },
              ],
            },
          ],
        },
        {
          id: expect.not.stringMatching('mock-budget-05'),
          children: [
            {
              id: expect.not.stringMatching('mock-budget-06'),
            },
            {
              id: expect.not.stringMatching('mock-budget-07'),
              children: [
                {
                  id: expect.not.stringMatching('mock-budget-08'),
                },
              ],
            },
          ],
        },
      ])
    })
  })

  describe('@calculateBudgetRollupValue', () => {
    const budget: Budget = {
      id: 'mock-budget-01',
      name: 'mock-budget-01',
      amount: 100,
      frequency: 'year',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
    }

    describe('yearly rollup', () => {
      it('calculates the rollup value for a budget with a yearly frequency', () => {
        expect(calculateBudgetRollupValue({ ...budget, frequency: 'year' }, 'yearly')).toBeCloseTo(100)
      })

      it('calculates the rollup value for a budget with a quarterly frequency', () => {
        expect(calculateBudgetRollupValue({ ...budget, frequency: 'quarter' }, 'yearly')).toBeCloseTo(400)
      })

      it('calculates the rollup value for a budget with a monthly frequency', () => {
        expect(calculateBudgetRollupValue({ ...budget, frequency: 'month' }, 'yearly')).toBeCloseTo(1200)
      })

      it('calculates the rollup value for a budget with a weekly frequency', () => {
        expect(calculateBudgetRollupValue({ ...budget, frequency: 'week' }, 'yearly')).toBeCloseTo(5200)
      })

      it('calculates the rollup value for a budget with a daily frequency', () => {
        expect(calculateBudgetRollupValue({ ...budget, frequency: 'day' }, 'yearly')).toBeCloseTo(36500)
      })
    })

    describe('monthly rollup', () => {
      it('calculates the rollup value for a budget with a yearly frequency', () => {
        expect(calculateBudgetRollupValue({ ...budget, frequency: 'year' }, 'monthly')).toBeCloseTo(8.33)
      })

      it('calculates the rollup value for a budget with a quarterly frequency', () => {
        expect(calculateBudgetRollupValue({ ...budget, frequency: 'quarter' }, 'monthly')).toBeCloseTo(33.33)
      })

      it('calculates the rollup value for a budget with a monthly frequency', () => {
        expect(calculateBudgetRollupValue({ ...budget, frequency: 'month' }, 'monthly')).toBeCloseTo(100)
      })

      it('calculates the rollup value for a budget with a weekly frequency', () => {
        expect(calculateBudgetRollupValue({ ...budget, frequency: 'week' }, 'monthly')).toBeCloseTo(433.33)
      })

      it('calculates the rollup value for a budget with a daily frequency', () => {
        expect(calculateBudgetRollupValue({ ...budget, frequency: 'day' }, 'monthly')).toBeCloseTo(3041.67)
      })
    })
  })
})

describe('scenario-path.methods', () => {
  describe('@buildScenarioPath', () => {
    it('builds an empty scenario path from an empty list of scenario IDs', () => {
      const scenarioMap: ScenarioMap = {}
      const budgetMap: BudgetMap = {}
      const forecastPeriod = { startDate: '2024-01-01', endDate: '2024-12-31' }
      const scenarioIds: string[] = []
      const scenarioPath = buildScenarioPath(scenarioIds, scenarioMap, budgetMap, forecastPeriod)

      expect(scenarioPath).toStrictEqual({
        id: 'scenario-path',
        name: 'Scenario Path',
        budgets: [],
        scenarioStartEvents: [],
        period: forecastPeriod,
      })
    })

    it('builds a scenario path from a list of scenario IDs', () => {
      const startDateForScenario1 = '2024-01-01'
      const startDateForScenario2 = '2024-03-01'
      const startDateForScenario3 = '2024-06-01'
      const endDateForScenarioPath = '2024-12-31'

      const scenarioMap: ScenarioMap = {
        'mock-scenario-01': {
          id: 'mock-scenario-01',
          name: 'mock-scenario-01',
          startDate: startDateForScenario1,
          budgets: [{ id: 'mock-budget-01' }, { id: 'mock-budget-02' }],
        },
        'mock-scenario-02': {
          id: 'mock-scenario-02',
          name: 'mock-scenario-02',
          startDate: startDateForScenario2,
          budgets: [{ id: 'mock-budget-03' }],
        },
        'mock-scenario-03': {
          id: 'mock-scenario-03',
          name: 'mock-scenario-03',
          startDate: startDateForScenario3,
          budgets: [{ id: 'mock-budget-04' }],
        },
      }

      const budgetMap: BudgetMap = {
        'mock-budget-01': {
          id: 'mock-budget-01',
          name: 'mock-budget-01',
          amount: 100,
          frequency: 'year',
          startDate: '2024-01-01',
          endDate: endDateForScenarioPath,
        },
        'mock-budget-02': {
          id: 'mock-budget-02',
          name: 'mock-budget-02',
          amount: 50,
          frequency: 'week',
          startDate: '2024-01-01',
          endDate: endDateForScenarioPath,
          initialAmount: 1000,
          interestRate: 0.1,
        },
        'mock-budget-03': {
          id: 'mock-budget-03',
          name: 'mock-budget-03',
          amount: 200,
          frequency: 'month',
          startDate: '2024-03-01',
          endDate: endDateForScenarioPath,
        },
        'mock-budget-04': {
          id: 'mock-budget-04',
          name: 'mock-budget-04',
          amount: 300,
          frequency: 'day',
          startDate: '2024-06-01',
          endDate: endDateForScenarioPath,
        },
      }

      const forecastPeriod = { startDate: '2024-01-01', endDate: endDateForScenarioPath }
      const scenarioIds = ['mock-scenario-01', 'mock-scenario-02', 'mock-scenario-03']
      const scenarioPath = buildScenarioPath(scenarioIds, scenarioMap, budgetMap, forecastPeriod)

      expect(scenarioPath).toStrictEqual({
        id: 'scenario-path',
        name: 'Scenario Path',
        budgets: [
          {
            id: 'mock-budget-01',
            name: 'mock-budget-01',
            amount: 100,
            frequency: 'year',
            startDate: startDateForScenario1,
            endDate: startDateForScenario2,
          },
          {
            id: 'mock-budget-02',
            name: 'mock-budget-02',
            amount: 50,
            frequency: 'week',
            startDate: startDateForScenario1,
            endDate: startDateForScenario2,
            initialAmount: 1000,
            interestRate: 0.1,
          },
          {
            id: 'mock-budget-03',
            name: 'mock-budget-03',
            amount: 200,
            frequency: 'month',
            startDate: startDateForScenario2,
            endDate: startDateForScenario3,
          },
          {
            id: 'mock-budget-04',
            name: 'mock-budget-04',
            amount: 300,
            frequency: 'day',
            startDate: startDateForScenario3,
            endDate: endDateForScenarioPath,
          },
        ],
        scenarioStartEvents: [
          { date: startDateForScenario1, name: 'mock-scenario-01' },
          { date: startDateForScenario2, name: 'mock-scenario-02' },
          { date: startDateForScenario3, name: 'mock-scenario-03' },
        ],
        period: forecastPeriod,
      })
    })
  })

  describe('@calculateScenarioEventsWithCacheOptimisation', () => {
    it('calculates the scenario events with an empty cache', () => {
      const scenarioBudgets: ScenarioBudgets = {
        period: { startDate: '2024-01-01', endDate: '2024-12-31' },
        budgets: [
          {
            id: 'mock-budget-01',
            name: 'mock-budget-01',
            amount: 100,
            frequency: 'month',
            startDate: '2024-01-01',
            endDate: '2024-03-01',
          },
          {
            id: 'mock-budget-02',
            name: 'mock-budget-02',
            amount: 50,
            frequency: 'quarter',
            startDate: '2024-01-01',
            endDate: '2024-12-01',
            initialAmount: 1000,
            interestRate: 0.1,
          },
        ],
      }

      const localTransactionsCache: BudgetTransactionsCache = {}

      const scenarioEventsWithCache = calculateBudgetTransactions(scenarioBudgets, localTransactionsCache)

      expect(scenarioEventsWithCache).toStrictEqual({
        period: { startDate: '2024-01-01', endDate: '2024-12-31' },
        budgetEvents: [
          {
            budget: {
              id: 'mock-budget-01',
              name: 'mock-budget-01',
              amount: 100,
              frequency: 'month',
              startDate: '2024-01-01',
              endDate: '2024-03-01',
            },
            events: [
              { date: '2024-01-01', value: expect.closeTo(100) },
              { date: '2024-02-01', value: expect.closeTo(100) },
              { date: '2024-03-01', value: expect.closeTo(100) },
            ],
            period: { startDate: '2024-01-01', endDate: '2024-12-31' },
            totalAmount: 300,
          },
          {
            budget: {
              id: 'mock-budget-02',
              name: 'mock-budget-02',
              amount: 50,
              frequency: 'quarter',
              startDate: '2024-01-01',
              endDate: '2024-12-01',
              initialAmount: 1000,
              interestRate: 0.1,
            },
            events: [
              { date: '2024-01-01', value: expect.closeTo(1000) },
              { date: '2024-01-01', value: expect.closeTo(75) },
              { date: '2024-04-01', value: expect.closeTo(76.87) },
              { date: '2024-07-01', value: expect.closeTo(78.8) },
              { date: '2024-10-01', value: expect.closeTo(80.77) },
            ],
            period: { startDate: '2024-01-01', endDate: '2024-12-31' },
            totalAmount: expect.closeTo(1311.44),
          },
        ],
        totalAmount: expect.closeTo(1611.44),
      })

      expect(localTransactionsCache).toStrictEqual({
        'mock-budget-01': {
          budget: {
            id: 'mock-budget-01',
            name: 'mock-budget-01',
            amount: 100,
            frequency: 'month',
            startDate: '2024-01-01',
            endDate: '2024-03-01',
          },
          period: { startDate: '2024-01-01', endDate: '2024-12-31' },
          totalAmount: 300,
          events: [
            { date: '2024-01-01', value: expect.closeTo(100) },
            { date: '2024-02-01', value: expect.closeTo(100) },
            { date: '2024-03-01', value: expect.closeTo(100) },
          ],
        },
        'mock-budget-02': {
          budget: {
            id: 'mock-budget-02',
            name: 'mock-budget-02',
            amount: 50,
            frequency: 'quarter',
            startDate: '2024-01-01',
            endDate: '2024-12-01',
            initialAmount: 1000,
            interestRate: 0.1,
          },
          period: { startDate: '2024-01-01', endDate: '2024-12-31' },
          totalAmount: expect.closeTo(1311.44),
          events: [
            { date: '2024-01-01', value: expect.closeTo(1000) },
            { date: '2024-01-01', value: expect.closeTo(75) },
            { date: '2024-04-01', value: expect.closeTo(76.87) },
            { date: '2024-07-01', value: expect.closeTo(78.8) },
            { date: '2024-10-01', value: expect.closeTo(80.77) },
          ],
        },
      })
    })
  })
})
