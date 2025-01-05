import { TreeData } from 'components'
import { convertScenarioBudgetsToPlotData } from 'utils'

import { Budget, Period, ScenarioBudgets } from '@fire/forecast-engine'

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
        { id: '2.3', name: 'Living', value: 400 },
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
        { id: '2.3', name: 'Living', value: 450 },
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
        { id: '2.3', name: 'Living', value: 450 },
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

export const oneYearPeriod: Period = {
  startDate: '2024-01-01',
  endDate: '2024-12-31',
}

export const tenYearPeriod: Period = {
  startDate: '2024-01-01',
  endDate: '2034-12-31',
}

export const thirtyYearPeriod: Period = {
  startDate: '2024-01-01',
  endDate: '2054-12-31',
}

const yearlyBudget: Budget = {
  name: 'Budget 1',
  amount: 1000,
  interestRate: 0.05,
  frequency: 'week',
  ...thirtyYearPeriod,
}

const firstThreeYearPeriod: Period = {
  startDate: '2024-01-01',
  endDate: '2026-12-31',
}

export const nextFiveYearPeriod: Period = {
  startDate: '2027-01-01',
  endDate: '2031-12-31',
}

export const remainingThirtyYearPeriod: Period = {
  startDate: '2032-01-01',
  endDate: '2034-12-31',
}

export const thirtyYearPlotData = convertScenarioBudgetsToPlotData({
  id: 'mock-scenario',
  name: 'Mock scenario',
  period: thirtyYearPeriod,
  budgets: [{ ...yearlyBudget, frequency: 'week' }],
})

export const budgetStart: ScenarioBudgets = {
  id: 'start',
  name: 'Start',
  period: thirtyYearPeriod,
  budgets: [
    // Start
    {
      name: 'Salary',
      amount: 0,
      frequency: 'week',
      ...firstThreeYearPeriod,
    },
    {
      name: 'Other',
      amount: 300,
      frequency: 'week',
      ...firstThreeYearPeriod,
    },
    {
      name: 'Living',
      amount: -250,
      frequency: 'year',
      ...firstThreeYearPeriod,
    },
    // Job 1
    {
      name: 'Salary',
      amount: 2000,
      frequency: 'week',
      ...nextFiveYearPeriod,
    },
    {
      name: 'Other',
      amount: 200,
      frequency: 'year',
      ...nextFiveYearPeriod,
    },
    {
      name: 'Rent',
      amount: -300,
      frequency: 'week',
      ...nextFiveYearPeriod,
    },
    {
      name: 'Electricity',
      amount: -100,
      frequency: 'year',
      ...nextFiveYearPeriod,
    },
    {
      name: 'Phone',
      amount: -200,
      frequency: 'week',
      ...nextFiveYearPeriod,
    },
    {
      name: 'Living',
      amount: -400,
      frequency: 'year',
      ...nextFiveYearPeriod,
    },
    // Job 3
    {
      name: 'Salary',
      amount: 3000,
      frequency: 'week',
      ...remainingThirtyYearPeriod,
    },
    {
      name: 'Other',
      amount: 200,
      frequency: 'year',
      ...remainingThirtyYearPeriod,
    },
    {
      name: 'Rent',
      amount: -350,
      frequency: 'week',
      ...remainingThirtyYearPeriod,
    },
    {
      name: 'Electricity',
      amount: -100,
      frequency: 'year',
      ...remainingThirtyYearPeriod,
    },
    {
      name: 'Phone',
      amount: -200,
      frequency: 'week',
      ...remainingThirtyYearPeriod,
    },
    {
      name: 'Living',
      amount: -450,
      frequency: 'year',
      ...remainingThirtyYearPeriod,
    },
  ],
}

export const startBudgetPlotData = convertScenarioBudgetsToPlotData(budgetStart)
