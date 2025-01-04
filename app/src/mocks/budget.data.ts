import { TreeData } from 'components'

import { Budget, Period, calculateScenarioEvents } from '@fire/forecast-engine'

export interface MockBudget {
  name: string
  categories: TreeData[]
}

export const mockBudgetStart: MockBudget = {
  name: 'Start',
  categories: [
    {
      id: '1',
      name: 'Income',
      value: 300,
      children: [
        { id: '1.1', name: 'Salary', value: 0 },
        { id: '1.2', name: 'Other', value: 300 },
      ],
    },
    {
      id: '2',
      name: 'Expenses',
      value: 250,
      children: [{ id: '2.2', name: 'Living', value: 250 }],
    },
  ],
}

export const mockBudgetOne: MockBudget = {
  name: 'Job 1',
  categories: [
    {
      id: '1',
      name: 'Income',
      value: 2200,
      children: [
        { id: '1.1', name: 'Salary', value: 2000 },
        { id: '1.2', name: 'Other', value: 200 },
      ],
    },
    {
      id: '2',
      name: 'Expenses',
      value: 1000,
      children: [
        { id: '2.1', name: 'Rent', value: 300 },
        {
          id: '2.2',
          name: 'Bills',
          value: 300,
          children: [
            { id: '2.2.1', name: 'Electricity', value: 100 },
            { id: '2.2.2', name: 'Phone', value: 200 },
          ],
        },
        { id: '2.2', name: 'Living', value: 400 },
      ],
    },
  ],
}

export const mockBudgetTwo: MockBudget = {
  name: 'Job 2',
  categories: [
    {
      id: '1',
      name: 'Income',
      value: 2700,
      children: [
        { id: '1.1', name: 'Salary', value: 2500 },
        { id: '1.2', name: 'Other', value: 200 },
      ],
    },
    {
      id: '2',
      name: 'Expenses',
      value: 1100,
      children: [
        { id: '2.1', name: 'Rent', value: 350 },
        {
          id: '2.2',
          name: 'Bills',
          value: 300,
          children: [
            { id: '2.2.1', name: 'Electricity', value: 100 },
            { id: '2.2.2', name: 'Phone', value: 200 },
          ],
        },
        { id: '2.2', name: 'Living', value: 450 },
      ],
    },
  ],
}

export const mockBudgetThree: MockBudget = {
  name: 'Job 3',
  categories: [
    {
      id: '1',
      name: 'Income',
      value: 3200,
      children: [
        { id: '1.1', name: 'Salary', value: 3000 },
        { id: '1.2', name: 'Other', value: 200 },
      ],
    },
    {
      id: '2',
      name: 'Expenses',
      value: 1100,
      children: [
        { id: '2.1', name: 'Rent', value: 350 },
        {
          id: '2.2',
          name: 'Bills',
          value: 300,
          children: [
            { id: '2.2.1', name: 'Electricity', value: 100 },
            { id: '2.2.2', name: 'Phone', value: 200 },
          ],
        },
        { id: '2.2', name: 'Living', value: 450 },
      ],
    },
  ],
}

export const mockBudgetMap: Record<string, MockBudget> = {
  start: mockBudgetStart,
  job1: mockBudgetOne,
  job2: mockBudgetTwo,
  job3: mockBudgetThree,
}

const thirtyYearPeriod: Period = {
  startDate: '2024-01-01',
  endDate: '2054-12-31',
}

const yearlyBudget: Budget = {
  name: 'Budget 1',
  amount: 1000,
  interestRate: 0.05,
  frequency: 'year',
  ...thirtyYearPeriod,
}

const scenarioEvents = calculateScenarioEvents({
  period: thirtyYearPeriod,
  budgets: [{ ...yearlyBudget, frequency: 'year' }],
})

export const thirtyYearPlotData = scenarioEvents.budgetEvents
  .map((budgetEvent) => {
    return budgetEvent.events.map((event) => ({
      date: new Date(event.date),
      amount: event.value,
      name: budgetEvent.budget.name,
    }))
  })
  .flat()
