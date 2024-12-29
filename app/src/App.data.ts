import { ScenarioBudgets, ScenarioEvents, calculateScenarioEvents } from '@fire/forecast-engine'

export const scenarioBudgets: ScenarioBudgets = {
  period: {
    startDate: '2024-01-01',
    endDate: '2024-12-31',
  },
  budgets: [
    {
      name: 'Budget 1',
      amount: 1000,
      frequency: 'year',
      startDate: '2024-01-01',
      endDate: '2034-12-31',
    },
    {
      name: 'Budget 2',
      amount: 100,
      frequency: 'week',
      startDate: '2024-01-01',
      endDate: '2034-12-31',
    },
    {
      name: 'Budget 33',
      amount: 10,
      frequency: 'day',
      startDate: '2024-01-01',
      endDate: '2034-12-31',
    },
    {
      name: 'Budget 4',
      amount: 10,
      frequency: 'day',
      startDate: '2024-01-01',
      endDate: '2034-12-31',
    },
  ],
}

export const scenarioEvents: ScenarioEvents = calculateScenarioEvents(scenarioBudgets)
