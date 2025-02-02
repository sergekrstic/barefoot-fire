import { ScenarioPath } from 'types'
import { describe, expect, it } from 'vitest'

import {
  convertScenarioPathToPlotData,
  dateFromCurrentInterval,
  getCurrentInterval,
  preprocessPlotData,
} from './utils.methods'

describe('@convertScenarioPathToPlotData()', () => {
  const scenarioPath: ScenarioPath = {
    id: 'mock-path-id',
    name: 'Mock Scenario Path',
    period: { startDate: '2024-01-01', endDate: '2024-12-31' },
    scenarioStartEvents: [{ date: '2024-01-01', name: 'Mock Scenario' }],
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
  }

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
    const plotData = convertScenarioPathToPlotData(scenarioPath)
    expect(plotData.length).toBe(9)
  })

  it('creates a sort array', () => {
    const plotData = convertScenarioPathToPlotData(scenarioPath)
    const actualDates = plotData.map((datum) => datum.date)
    const expectedDates = expectedPlotData.map((datum) => datum.date)
    expect(actualDates).toStrictEqual(expectedDates)
  })
})

describe('@preprocessPlotData()', () => {
  it.only('bins the data into yearly intervals', () => {
    const scenarioPath: ScenarioPath = {
      id: 'mock-path-id',
      name: 'Mock Scenario Path',
      period: { startDate: '2024-01-01', endDate: '2034-12-31' },
      scenarioStartEvents: [{ date: '2024-01-01', name: 'Mock Scenario' }],
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
    }
    const plotData = convertScenarioPathToPlotData(scenarioPath)
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
    const scenarioPath: ScenarioPath = {
      id: 'mock-path-id',
      name: 'Mock Scenario Path',
      period: { startDate: '2024-01-01', endDate: '2034-12-31' },
      scenarioStartEvents: [{ date: '2024-01-01', name: 'Mock Scenario' }],
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
    }
    const plotData = convertScenarioPathToPlotData(scenarioPath)
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
    const scenarioPath: ScenarioPath = {
      id: 'mock-path-id',
      name: 'Mock Scenario Path',
      period: { startDate: '2024-01-01', endDate: '2034-12-31' },
      scenarioStartEvents: [{ date: '2024-01-01', name: 'Mock Scenario' }],
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
    }
    const plotData = convertScenarioPathToPlotData(scenarioPath)
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

  it('bins the data into weekly intervals over two years', () => {
    const scenarioPath: ScenarioPath = {
      id: 'mock-path-id',
      name: 'Mock Scenario Path',
      period: { startDate: '2024-01-01', endDate: '2034-12-31' },
      scenarioStartEvents: [{ date: '2024-01-01', name: 'Mock Scenario' }],
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
    }
    const plotData = convertScenarioPathToPlotData(scenarioPath)

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
