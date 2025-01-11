import { BudgetCategories } from 'types'
import { convertScenarioBudgetsToPlotData } from 'utils'

import { Budget, Period, ScenarioBudgets } from '@fire/forecast-engine'

// #############################################################################
// Budget categories
// #############################################################################

export const mockCategoriesForScenarioStart: BudgetCategories = {
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

export const mockCategoriesForScenarioOne: BudgetCategories = {
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

export const mockCategoriesForScenarioTwo: BudgetCategories = {
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

export const mockCategoriesForScenarioThree: BudgetCategories = {
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

export const mockBudgetCategoriesMap: Record<string, BudgetCategories> = {
  root: mockCategoriesForScenarioStart,
  job1: mockCategoriesForScenarioOne,
  job2: mockCategoriesForScenarioTwo,
  job3: mockCategoriesForScenarioThree,
}

// #############################################################################
// Time periods
// #############################################################################

export const defaultPeriod: Period = {
  startDate: '2024-01-01',
  endDate: '2034-01-01', // ten years
  // endDate: '2044-01-01', // twenty years
  // endDate: '2054-01-01', // thirty years
}

export const thirtyYearPeriod: Period = {
  startDate: '2024-01-01',
  endDate: '2054-01-01',
}

export const startPeriod: Period = {
  startDate: '2022-07-01',
  endDate: defaultPeriod.endDate,
}

export const jobSearchPeriod: Period = {
  startDate: '2024-11-01',
  endDate: defaultPeriod.endDate,
}

export const fullTimePeriod: Period = {
  startDate: '2025-03-01',
  endDate: defaultPeriod.endDate,
}

export const fullTimeRentingPeriod: Period = {
  startDate: '2025-09-01',
  endDate: defaultPeriod.endDate,
}

export const contractPeriod: Period = {
  startDate: '2025-03-01',
  endDate: defaultPeriod.endDate,
}

export const contractRentingPeriod: Period = {
  startDate: '2025-09-01',
  endDate: defaultPeriod.endDate,
}

export const homePeriod: Period = {
  startDate: '2026-01-01',
  endDate: defaultPeriod.endDate,
}

export const shareMarketPeriod: Period = {
  startDate: '2025-11-01',
  endDate: defaultPeriod.endDate,
}

// #############################################################################
// Budgets
// #############################################################################

export const mockBudgetMap: Record<string, Budget> = {
  // =========================================================================
  // Start
  // =========================================================================
  'i-salary-start': {
    id: 'i-salary-start',
    name: 'Salary',
    amount: 1000,
    frequency: 'month',
    ...startPeriod,
  },
  'i-other-start': {
    id: 'i-other-start',
    name: 'Other',
    amount: 300,
    frequency: 'month',
    ...startPeriod,
  },
  'e-living-start': {
    id: 'e-living-start',
    name: 'Living',
    amount: -250,
    frequency: 'month',
    ...startPeriod,
  },
  // =========================================================================
  // Job Search
  // =========================================================================
  'i-salary-job-search': {
    id: 'i-salary-job-search',
    name: 'Salary',
    amount: 0,
    frequency: 'month',
    ...jobSearchPeriod,
  },
  'i-other-job-search': {
    id: 'i-other-job-search',
    name: 'Other',
    amount: 300,
    frequency: 'month',
    ...jobSearchPeriod,
  },
  'e-living-job-search': {
    id: 'e-living-job-search',
    name: 'Living',
    amount: -150,
    frequency: 'month',
    ...jobSearchPeriod,
  },
  // =========================================================================
  // Full Time
  // =========================================================================
  'i-salary-full-time': {
    id: 'i-salary-full-time',
    name: 'Salary',
    amount: 1000,
    frequency: 'month',
    ...fullTimePeriod,
  },
  'i-other-full-time': {
    id: 'i-other-full-time',
    name: 'Other',
    amount: 300,
    frequency: 'month',
    ...fullTimePeriod,
  },
  'e-living-full-time': {
    id: 'e-living-full-time',
    name: 'Living',
    amount: -350,
    frequency: 'month',
    ...fullTimePeriod,
  },
  // =========================================================================
  // Full Time -> Renting
  // =========================================================================
  'i-salary-full-time-renting': {
    id: 'i-salary-full-time-renting',
    name: 'Salary',
    amount: 1000,
    frequency: 'month',
    ...fullTimeRentingPeriod,
  },
  'i-other-full-time-renting': {
    id: 'i-other-full-time-renting',
    name: 'Other',
    amount: 300,
    frequency: 'month',
    ...fullTimeRentingPeriod,
  },
  'e-rent-full-time-renting': {
    id: 'e-rent-full-time-renting',
    name: 'Living',
    amount: -350,
    frequency: 'month',
    ...fullTimeRentingPeriod,
  },
  'e-living-full-time-renting': {
    id: 'e-living-full-time-renting',
    name: 'Rent',
    amount: -350,
    frequency: 'month',
    ...fullTimeRentingPeriod,
  },
  // =========================================================================
  // Contract
  // =========================================================================
  'i-salary-contract': {
    id: 'i-salary-contract',
    name: 'Salary',
    amount: 1500,
    frequency: 'month',
    ...contractPeriod,
  },
  'i-other-contract': {
    id: 'i-other-contract',
    name: 'Other',
    amount: 300,
    frequency: 'month',
    ...contractPeriod,
  },
  'e-living-contract': {
    id: 'e-living-contract',
    name: 'Living',
    amount: -350,
    frequency: 'month',
    ...contractPeriod,
  },
  // =========================================================================
  // Contract -> Renting
  // =========================================================================
  'i-salary-contract-renting': {
    id: 'i-salary-contract-renting',
    name: 'Salary',
    amount: 1500,
    frequency: 'month',
    ...contractRentingPeriod,
  },
  'i-other-contract-renting': {
    id: 'i-other-contract-renting',
    name: 'Other',
    amount: 300,
    frequency: 'month',
    ...contractRentingPeriod,
  },
  'e-rent-contract-renting': {
    id: 'e-rent-contract-renting',
    name: 'Rent',
    amount: -350,
    frequency: 'month',
    ...contractRentingPeriod,
  },
  'e-living-contract-renting': {
    id: 'e-living-contract-renting',
    name: 'Living',
    amount: -350,
    frequency: 'month',
    ...contractRentingPeriod,
  },
  // =========================================================================
  // Contract -> Renting -> Home
  // =========================================================================
  'i-salary-home': {
    id: 'i-salary-home',
    name: 'Salary',
    amount: 1500,
    frequency: 'month',
    ...homePeriod,
  },
  'i-other-home': {
    id: 'i-other-home',
    name: 'Other',
    amount: 300,
    frequency: 'month',
    ...homePeriod,
  },
  'e-mortgage-home': {
    id: 'e-mortgage-home',
    name: 'Mortgage',
    amount: -400,
    initialAmount: -100000,
    frequency: 'month',
    ...homePeriod,
  },
  'e-living-home': {
    id: 'e-living-home',
    name: 'Living',
    amount: -350,
    frequency: 'month',
    ...homePeriod,
  },
  // =========================================================================
  // Contract -> Renting -> Share Market
  // =========================================================================
  'i-salary-share-market': {
    id: 'i-salary-share-market',
    name: 'Salary',
    amount: 1500,
    frequency: 'month',
    ...shareMarketPeriod,
  },
  'i-other-share-market': {
    id: 'i-other-share-market',
    name: 'Other',
    amount: 300,
    frequency: 'month',
    ...shareMarketPeriod,
  },
  'i-investments-deposit-share-market': {
    id: 'i-investments-deposit-share-market',
    name: 'Living',
    amount: 150,
    frequency: 'month',
    interestRate: 0.3,
    ...shareMarketPeriod,
  },
  'i-investments-transfer-share-market': {
    id: 'i-investments-transfer-share-market',
    name: 'Living',
    amount: -150,
    frequency: 'month',
    ...shareMarketPeriod,
  },
  'e-rent-share-market': {
    id: 'e-rent-share-market',
    name: 'Rent',
    amount: -350,
    frequency: 'month',
    ...shareMarketPeriod,
  },
  'e-living-share-market': {
    id: 'e-living-share-market',
    name: 'Living',
    amount: -350,
    frequency: 'month',
    ...shareMarketPeriod,
  },
}

export const scenarioBudgetsMap: Record<string, ScenarioBudgets> = {
  'root-scenario': {
    id: 'root',
    name: 'Start',
    period: startPeriod,
    budgets: cloneBudgets(['i-salary-start', 'i-other-start', 'e-living-start']),
  },
  'job-search-scenario': {
    id: 'job-search',
    name: 'Job Search',
    period: jobSearchPeriod,
    budgets: cloneBudgets(['i-salary-job-search', 'i-other-job-search', 'e-living-job-search']),
  },
  'full-time-scenario': {
    id: 'full-time',
    name: 'Full Time',
    period: fullTimePeriod,
    budgets: cloneBudgets(['i-salary-full-time', 'i-other-full-time', 'e-living-full-time']),
  },
  'contract-scenario': {
    id: 'contract',
    name: 'Contract',
    period: contractPeriod,
    budgets: cloneBudgets(['i-salary-contract', 'i-other-contract', 'e-living-contract']),
  },
  'renting-after-full-time-scenario': {
    id: 'renting-after-full-time',
    name: 'Renting',
    period: fullTimeRentingPeriod,
    budgets: cloneBudgets([
      'i-salary-full-time-renting',
      'i-other-full-time-renting',
      'e-rent-full-time-renting',
      'e-living-full-time-renting',
    ]),
  },
  'renting-after-contract-scenario': {
    id: 'renting-after-full-time',
    name: 'Renting',
    period: contractRentingPeriod,
    budgets: cloneBudgets([
      'i-salary-contract-renting',
      'i-other-contract-renting',
      'e-rent-contract-renting',
      'e-living-contract-renting',
    ]),
  },
  'home-scenario': {
    id: 'home',
    name: 'Home',
    period: homePeriod,
    budgets: cloneBudgets(['i-salary-home', 'i-other-home', 'e-mortgage-home', 'e-living-home']),
  },
  'share-market-scenario': {
    id: 'share-market',
    name: 'Share Market',
    period: shareMarketPeriod,
    budgets: cloneBudgets([
      'i-salary-share-market',
      'i-other-share-market',
      'i-investments-deposit-share-market',
      'i-investments-transfer-share-market',
      'e-rent-share-market',
      'e-living-share-market',
    ]),
  },
}

export const shareMarketScenarioPath = [
  'root-scenario',
  'job-search-scenario',
  'contract-scenario',
  'renting-after-contract-scenario',
  'share-market-scenario',
]

export const homePropertyScenarioPath = [
  'root-scenario',
  'job-search-scenario',
  'contract-scenario',
  'renting-after-contract-scenario',
  'home-scenario',
]

export function cloneBudgets(budgetIds: string[]): Budget[] {
  return budgetIds.map((id) => ({ ...mockBudgetMap[id] }))
}

// Create a compound scenario from the given scenario IDs
export function buildScenarioPath(scenarioIds: string[]): ScenarioBudgets {
  const adjustedBudgets: Budget[] = []

  // Adjust the end date of each scenario
  scenarioIds.forEach((scenarioId, index) => {
    const scenario = scenarioBudgetsMap[scenarioId]
    const nextScenario = scenarioBudgetsMap[scenarioIds[index + 1]]

    const clonedBudgets = scenario.budgets.map((budget) => ({ ...budget }))

    // If there is a next scenario, adjust the end date of the current scenario
    if (nextScenario) {
      clonedBudgets.forEach((budget) => {
        budget.endDate = nextScenario.period.startDate
      })
    }

    adjustedBudgets.push(...clonedBudgets)
  })

  return {
    id: scenarioIds[scenarioIds.length - 1],
    name: 'Mock compound scenario',
    period: defaultPeriod,
    budgets: adjustedBudgets,
  }
}

// #############################################################################
// Plot data
// #############################################################################

export const thirtyYearPlotData = convertScenarioBudgetsToPlotData({
  id: 'mock-scenario',
  name: 'Mock compound scenario',
  period: thirtyYearPeriod,
  budgets: [
    {
      id: 'i-salary-start',
      name: 'Budget 1',
      amount: 1000,
      interestRate: 0.05,
      frequency: 'week',
      ...thirtyYearPeriod,
    },
  ],
})

// export const startBudgetPlotData = convertScenarioBudgetsToPlotData(scenarioBudgetsMap['root-scenario'])
export const startBudgetPlotData = convertScenarioBudgetsToPlotData(buildScenarioPath(shareMarketScenarioPath))
// export const startBudgetPlotData = convertScenarioBudgetsToPlotData(buildScenarioPath(homePropertyScenarioPath))
