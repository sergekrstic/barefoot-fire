import { BudgetForest, BudgetItem, BudgetMap, BudgetTree, ScenarioMap, TimeSeriesData } from 'types'
import { cloneBudgets, convertScenarioBudgetsToPlotData, createBudgetItems } from 'utils'

import { Period } from '@fire/forecast-engine'

// #############################################################################
// Time periods
// #############################################################################

const defaultPeriod: Period = {
  startDate: '2024-01-01',
  endDate: '2034-01-01', // ten years
  // endDate: '2044-01-01', // twenty years
  // endDate: '2054-01-01', // thirty years
}

const period: Record<string, Period> = {
  thirtyYear: {
    startDate: '2024-01-01',
    endDate: '2054-01-01',
  },

  start: {
    startDate: '2024-07-01',
    endDate: defaultPeriod.endDate,
  },

  jobSearch: {
    startDate: '2024-11-01',
    endDate: defaultPeriod.endDate,
  },

  fullTime: {
    startDate: '2025-03-01',
    endDate: defaultPeriod.endDate,
  },

  fullTimeRenting: {
    startDate: '2025-09-01',
    endDate: defaultPeriod.endDate,
  },

  contract: {
    startDate: '2025-03-01',
    endDate: defaultPeriod.endDate,
  },

  contractRenting: {
    startDate: '2025-09-01',
    endDate: defaultPeriod.endDate,
  },

  home: {
    startDate: '2026-01-01',
    endDate: defaultPeriod.endDate,
  },

  shareMarket: {
    startDate: '2025-11-01',
    endDate: defaultPeriod.endDate,
  },
}

// #############################################################################
// Budgets
// #############################################################################

export const detailedBudgetMap: BudgetMap = {
  // =========================================================================
  // Start
  // =========================================================================
  'i-salary-start': {
    id: 'i-salary-start',
    name: 'Salary',
    amount: 1000,
    frequency: 'month',
    ...period.start,
  },
  'i-other-start': {
    id: 'i-other-start',
    name: 'Other',
    amount: 300,
    frequency: 'month',
    ...period.start,
  },
  'e-living-start': {
    id: 'e-living-start',
    name: 'Living',
    amount: -250,
    frequency: 'month',
    ...period.start,
  },
  // =========================================================================
  // Job Search
  // =========================================================================
  'i-salary-job-search': {
    id: 'i-salary-job-search',
    name: 'Salary',
    amount: 0,
    frequency: 'month',
    ...period.jobSearch,
  },
  'i-other-job-search': {
    id: 'i-other-job-search',
    name: 'Other',
    amount: 300,
    frequency: 'month',
    ...period.jobSearch,
  },
  'e-living-job-search': {
    id: 'e-living-job-search',
    name: 'Living',
    amount: -150,
    frequency: 'month',
    ...period.jobSearch,
  },
  // =========================================================================
  // Full Time
  // =========================================================================
  'i-salary-full-time': {
    id: 'i-salary-full-time',
    name: 'Salary',
    amount: 1000,
    frequency: 'month',
    ...period.fullTime,
  },
  'i-other-full-time': {
    id: 'i-other-full-time',
    name: 'Other',
    amount: 300,
    frequency: 'month',
    ...period.fullTime,
  },
  'e-living-full-time': {
    id: 'e-living-full-time',
    name: 'Living',
    amount: -350,
    frequency: 'month',
    ...period.fullTime,
  },
  // =========================================================================
  // Full Time -> Renting
  // =========================================================================
  'i-salary-full-time-renting': {
    id: 'i-salary-full-time-renting',
    name: 'Salary',
    amount: 1000,
    frequency: 'month',
    ...period.fullTimeRenting,
  },
  'i-other-full-time-renting': {
    id: 'i-other-full-time-renting',
    name: 'Other',
    amount: 300,
    frequency: 'month',
    ...period.fullTimeRenting,
  },
  'e-rent-full-time-renting': {
    id: 'e-rent-full-time-renting',
    name: 'Living',
    amount: -350,
    frequency: 'month',
    ...period.fullTimeRenting,
  },
  'e-living-full-time-renting': {
    id: 'e-living-full-time-renting',
    name: 'Rent',
    amount: -350,
    frequency: 'month',
    ...period.fullTimeRenting,
  },
  // =========================================================================
  // Contract
  // =========================================================================
  'i-salary-contract': {
    id: 'i-salary-contract',
    name: 'Salary',
    amount: 1500,
    frequency: 'month',
    ...period.contract,
  },
  'i-other-contract': {
    id: 'i-other-contract',
    name: 'Other',
    amount: 300,
    frequency: 'month',
    ...period.contract,
  },
  'e-living-contract': {
    id: 'e-living-contract',
    name: 'Living',
    amount: -350,
    frequency: 'month',
    ...period.contract,
  },
  // =========================================================================
  // Contract -> Renting
  // =========================================================================
  'i-salary-contract-renting': {
    id: 'i-salary-contract-renting',
    name: 'Salary',
    amount: 1500,
    frequency: 'month',
    ...period.contractRenting,
  },
  'i-other-contract-renting': {
    id: 'i-other-contract-renting',
    name: 'Other',
    amount: 300,
    frequency: 'month',
    ...period.contractRenting,
  },
  'e-rent-contract-renting': {
    id: 'e-rent-contract-renting',
    name: 'Rent',
    amount: -350,
    frequency: 'month',
    ...period.contractRenting,
  },
  'e-living-contract-renting': {
    id: 'e-living-contract-renting',
    name: 'Living',
    amount: -350,
    frequency: 'month',
    ...period.contractRenting,
  },
  // =========================================================================
  // Contract -> Renting -> Home
  // =========================================================================
  'i-salary-home': {
    id: 'i-salary-home',
    name: 'Salary',
    amount: 1500,
    frequency: 'month',
    ...period.home,
  },
  'i-other-home': {
    id: 'i-other-home',
    name: 'Other',
    amount: 300,
    frequency: 'month',
    ...period.home,
  },
  'e-mortgage-home': {
    id: 'e-mortgage-home',
    name: 'Mortgage',
    amount: -400,
    initialAmount: -100000,
    frequency: 'month',
    ...period.home,
  },
  'e-living-home': {
    id: 'e-living-home',
    name: 'Living',
    amount: -350,
    frequency: 'month',
    ...period.home,
  },
  // =========================================================================
  // Contract -> Renting -> Share Market
  // =========================================================================
  'i-salary-share-market': {
    id: 'i-salary-share-market',
    name: 'Salary',
    amount: 1500,
    frequency: 'month',
    ...period.shareMarket,
  },
  'i-other-share-market': {
    id: 'i-other-share-market',
    name: 'Other',
    amount: 300,
    frequency: 'month',
    ...period.shareMarket,
  },
  'i-investments-deposit-share-market': {
    id: 'i-investments-deposit-share-market',
    name: 'Shares (deposit)',
    amount: 150,
    frequency: 'month',
    interestRate: 0.3,
    ...period.shareMarket,
  },
  'e-investments-transfer-share-market': {
    id: 'e-investments-transfer-share-market',
    name: 'Shares (transfer)',
    amount: -150,
    frequency: 'month',
    ...period.shareMarket,
  },
  'e-rent-share-market': {
    id: 'e-rent-share-market',
    name: 'Rent',
    amount: -350,
    frequency: 'month',
    ...period.shareMarket,
  },
  'e-living-share-market': {
    id: 'e-living-share-market',
    name: 'Living',
    amount: -350,
    frequency: 'month',
    ...period.shareMarket,
  },
}

// #############################################################################
// Scenarios
// #############################################################################

export const detailedScenarioMap: ScenarioMap = {
  root: {
    id: 'root',
    name: 'Start',
    period: period.start,
    budgets: cloneBudgets(['i-salary-start', 'i-other-start', 'e-living-start'], detailedBudgetMap),
  },
  'job-search': {
    id: 'job-search',
    name: 'Job Search',
    period: period.jobSearch,
    budgets: cloneBudgets(['i-salary-job-search', 'i-other-job-search', 'e-living-job-search'], detailedBudgetMap),
  },
  'full-time': {
    id: 'full-time',
    name: 'Full Time',
    period: period.fullTime,
    budgets: cloneBudgets(['i-salary-full-time', 'i-other-full-time', 'e-living-full-time'], detailedBudgetMap),
  },
  contract: {
    id: 'contract',
    name: 'Contract',
    period: period.contract,
    budgets: cloneBudgets(['i-salary-contract', 'i-other-contract', 'e-living-contract'], detailedBudgetMap),
  },
  'full-time-rent': {
    id: 'full-time-rent',
    name: 'Renting',
    period: period.fullTimeRenting,
    budgets: cloneBudgets(
      [
        'i-salary-full-time-renting',
        'i-other-full-time-renting',
        'e-rent-full-time-renting',
        'e-living-full-time-renting',
      ],
      detailedBudgetMap,
    ),
  },
  'contract-rent': {
    id: 'contract-rent',
    name: 'Renting',
    period: period.contractRenting,
    budgets: cloneBudgets(
      ['i-salary-contract-renting', 'i-other-contract-renting', 'e-living-contract-renting', 'e-rent-contract-renting'],
      detailedBudgetMap,
    ),
  },
  'contract-home': {
    id: 'home',
    name: 'Home',
    period: period.home,
    budgets: cloneBudgets(['i-salary-home', 'i-other-home', 'e-mortgage-home', 'e-living-home'], detailedBudgetMap),
  },
  'contract-share-market': {
    id: 'contract-share-market',
    name: 'Share Market',
    period: period.shareMarket,
    budgets: cloneBudgets(
      [
        'i-salary-share-market',
        'i-other-share-market',
        'i-investments-deposit-share-market',
        'e-investments-transfer-share-market',
        'e-rent-share-market',
        'e-living-share-market',
      ],
      detailedBudgetMap,
    ),
  },
}

// #############################################################################
// Budget forest
// #############################################################################

export const simpleBudgetForest: BudgetForest = {
  root: {
    name: 'Start',
    budgets: [
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
  },
  job1: {
    name: 'Job 1',
    budgets: [
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
  },
  job2: {
    name: 'Job 2',
    budgets: [
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
  },
  job3: {
    name: 'Job 3',
    budgets: [
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
  },
}

export const detailedBudgetForestMap: BudgetForest = {
  root: generateBudgetTree(detailedBudgetMap, 'Start', ['i-salary-start', 'i-other-start', 'e-living-start']),
  'job-search': generateBudgetTree(detailedBudgetMap, 'Job Search', [
    'i-salary-job-search',
    'i-other-job-search',
    'e-living-job-search',
  ]),
  'full-time': generateBudgetTree(detailedBudgetMap, 'Full Time', [
    'i-salary-full-time',
    'i-other-full-time',
    'e-living-full-time',
  ]),
  'full-time-rent': generateBudgetTree(detailedBudgetMap, 'Renting', [
    'i-salary-full-time-renting',
    'i-other-full-time-renting',
    'e-rent-full-time-renting',
    'e-living-full-time-renting',
  ]),
  contract: generateBudgetTree(detailedBudgetMap, 'Contract', [
    'i-salary-contract',
    'i-other-contract',
    'e-living-contract',
  ]),
  'contract-rent': generateBudgetTree(detailedBudgetMap, 'Renting', [
    'i-salary-contract-renting',
    'i-other-contract-renting',
    'e-living-contract-renting',
    'e-rent-contract-renting',
  ]),
  'contract-home': generateBudgetTree(detailedBudgetMap, 'Home', [
    'i-salary-home',
    'i-other-home',
    'e-living-home',
    'e-mortgage-home',
  ]),
  'contract-share-market': generateBudgetTree(detailedBudgetMap, 'Share Market', [
    'i-salary-share-market',
    'i-other-share-market',
    'i-investments-deposit-share-market',
    'e-rent-share-market',
    'e-living-share-market',
    'e-investments-transfer-share-market',
  ]),
}

function generateBudgetTree(budgetMap: BudgetMap, name: string, budgetIds: string[]): BudgetTree {
  const incomeBudgetItems: BudgetItem = { id: 'income', name: 'Income', value: 0, children: [] }
  const expenseBudgetItems: BudgetItem = { id: 'expenses', name: 'Expenses', value: 0, children: [] }

  const incomeIds = budgetIds.filter((id) => id.includes('i-'))
  const expenseIds = budgetIds.filter((id) => id.includes('e-'))

  incomeBudgetItems.children = createBudgetItems(budgetMap, incomeIds)
  expenseBudgetItems.children = createBudgetItems(budgetMap, expenseIds)

  const totalIncome = incomeBudgetItems.children!.reduce((acc, child) => acc + (child.value as number), 0)
  const totalExpenses = expenseBudgetItems.children!.reduce((acc, child) => acc + (child.value as number), 0)

  return {
    name,
    budgets: [
      { ...incomeBudgetItems, value: totalIncome },
      { ...expenseBudgetItems, value: totalExpenses },
    ],
  }
}

// #############################################################################
// Plot data
// #############################################################################

export const thirtyYearCompoundPlotData: TimeSeriesData = convertScenarioBudgetsToPlotData({
  id: 'mock-scenario',
  name: 'Mock compound scenario',
  period: period.thirtyYear,
  budgets: [
    {
      id: 'i-salary-start',
      name: 'Budget 1',
      amount: 1000,
      interestRate: 0.05,
      frequency: 'year',
      ...period.thirtyYear,
    },
  ],
  scenarioStartEvents: [
    {
      date: period.thirtyYear.startDate,
      name: 'Start',
    },
  ],
})
