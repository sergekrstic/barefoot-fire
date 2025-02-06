import { BudgetMap, ScenarioMap, TimeSeriesData } from 'types'
import { convertScenarioPathToPlotData } from 'utils'

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
  // Shared
  thirtyYear: {
    startDate: '2024-01-01',
    endDate: '2054-01-01',
  },
  start: {
    startDate: '2024-07-01',
    endDate: defaultPeriod.endDate,
  },
  // Simple
  job1: {
    startDate: '2026-07-01',
    endDate: defaultPeriod.endDate,
  },
  job2: {
    startDate: '2027-07-01',
    endDate: defaultPeriod.endDate,
  },
  job3: {
    startDate: '2030-11-01',
    endDate: defaultPeriod.endDate,
  },
  // Detailed
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

export const newBudgetMap: BudgetMap = {}

export const initialBudgetMap: BudgetMap = {
  // =========================================================================
  // Start
  // =========================================================================
  // Todo: consider making a 'rollup' budget (frequency) type
  'i-start': {
    id: 'i-start',
    name: 'Income',
    amount: 0,
    frequency: 'month',
    ...period.start,
  },
  'i-salary-start': {
    id: 'i-salary-start',
    name: 'Salary',
    amount: 0,
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
  'e-start': {
    id: 'e-start',
    name: 'Expenses',
    amount: 0,
    frequency: 'month',
    ...period.start,
  },
  'e-living-start': {
    id: 'e-living-start',
    name: 'Living',
    amount: 250,
    frequency: 'month',
    ...period.start,
  },
}

export const simpleBudgetMap: BudgetMap = {
  // =========================================================================
  // Start
  // =========================================================================
  'i-start': {
    id: 'i-start',
    name: 'Income',
    amount: 0,
    frequency: 'month',
    ...period.start,
  },
  'i-salary-start': {
    id: 'i-salary-start',
    name: 'Salary',
    amount: 0,
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
  'e-start': {
    id: 'e-start',
    name: 'Expenses',
    amount: 0,
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
  // Job 1
  // =========================================================================
  'i-job-1': {
    id: 'i-job-1',
    name: 'Income',
    amount: 0,
    frequency: 'month',
    ...period.job1,
  },
  'i-salary-job-1': {
    id: 'i-salary-job-1',
    name: 'Salary',
    amount: 2000,
    frequency: 'month',
    ...period.job1,
  },
  'i-other-job-1': {
    id: 'i-other-job-1',
    name: 'Other',
    amount: 200,
    frequency: 'month',
    ...period.job1,
  },
  'e-job-1': {
    id: 'e-job-1',
    name: 'Expenses',
    amount: 0,
    frequency: 'month',
    ...period.job1,
  },
  'e-living-job-1': {
    id: 'e-living-job-1',
    name: 'Living',
    amount: -400,
    frequency: 'month',
    ...period.job1,
  },
  'e-rent-job-1': {
    id: 'e-living-job-1',
    name: 'Rent',
    amount: -300,
    frequency: 'month',
    ...period.job1,
  },
  'e-bills-job-1': {
    id: 'e-living-job-1',
    name: 'Bills',
    amount: 0,
    frequency: 'month',
    ...period.job1,
  },
  'e-bills-electricity-job-1': {
    id: 'e-living-job-1',
    name: 'Electricity',
    amount: -300,
    frequency: 'month',
    ...period.job1,
  },
  'e-bills-phone-job-1': {
    id: 'e-living-job-1',
    name: 'Phone',
    amount: -100,
    frequency: 'month',
    ...period.job1,
  },
  // =========================================================================
  // Job 2
  // =========================================================================
  'i-job-2': {
    id: 'i-job-2',
    name: 'Income',
    amount: 0,
    frequency: 'month',
    ...period.job2,
  },
  'i-salary-job-2': {
    id: 'i-salary-job-2',
    name: 'Salary',
    amount: 2500,
    frequency: 'month',
    ...period.job2,
  },
  'i-other-job-2': {
    id: 'i-other-job-2',
    name: 'Other',
    amount: 200,
    frequency: 'month',
    ...period.job2,
  },
  'e-job-2': {
    id: 'e-job-2',
    name: 'Expenses',
    amount: 0,
    frequency: 'month',
    ...period.job2,
  },
  'e-living-job-2': {
    id: 'e-living-job-2',
    name: 'Living',
    amount: -450,
    frequency: 'month',
    ...period.job2,
  },
  'e-rent-job-2': {
    id: 'e-living-job-2',
    name: 'Rent',
    amount: -350,
    frequency: 'month',
    ...period.job2,
  },
  'e-bills-job-2': {
    id: 'e-living-job-2',
    name: 'Bills',
    amount: 0,
    frequency: 'month',
    ...period.job2,
  },
  'e-bills-electricity-job-2': {
    id: 'e-living-job-2',
    name: 'Electricity',
    amount: -300,
    frequency: 'month',
    ...period.job2,
  },
  'e-bills-phone-job-2': {
    id: 'e-living-job-2',
    name: 'Phone',
    amount: -100,
    frequency: 'month',
    ...period.job2,
  },
  // =========================================================================
  // Job 3
  // =========================================================================
  'i-job-3': {
    id: 'i-job-3',
    name: 'Income',
    amount: 0,
    frequency: 'month',
    ...period.job3,
  },
  'i-salary-job-3': {
    id: 'i-salary-job-3',
    name: 'Salary',
    amount: 3000,
    frequency: 'month',
    ...period.job3,
  },
  'i-other-job-3': {
    id: 'i-other-job-3',
    name: 'Other',
    amount: 200,
    frequency: 'month',
    ...period.job3,
  },
  'e-job-3': {
    id: 'e-job-3',
    name: 'Expenses',
    amount: 0,
    frequency: 'month',
    ...period.job3,
  },
  'e-living-job-3': {
    id: 'e-living-job-3',
    name: 'Living',
    amount: -450,
    frequency: 'month',
    ...period.job3,
  },
  'e-rent-job-3': {
    id: 'e-living-job-3',
    name: 'Rent',
    amount: -350,
    frequency: 'month',
    ...period.job3,
  },
  'e-bills-job-3': {
    id: 'e-living-job-3',
    name: 'Bills',
    amount: 0,
    frequency: 'month',
    ...period.job3,
  },
  'e-bills-electricity-job-3': {
    id: 'e-living-job-3',
    name: 'Electricity',
    amount: -300,
    frequency: 'month',
    ...period.job3,
  },
  'e-bills-phone-job-3': {
    id: 'e-living-job-3',
    name: 'Phone',
    amount: -100,
    frequency: 'month',
    ...period.job3,
  },
}

// Todo: Fix the rollup values
export const detailedBudgetMap: BudgetMap = {
  // =========================================================================
  // Start
  // =========================================================================
  'i-start': {
    id: 'i-start',
    name: 'Income',
    amount: 0,
    frequency: 'month',
    ...period.start,
  },
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
  'e-start': {
    id: 'e-start',
    name: 'Expenses',
    amount: -10000,
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
  'i-job-search': {
    id: 'i-job-search',
    name: 'Income',
    amount: 0,
    frequency: 'month',
    ...period.jobSearch,
  },
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
  'e-job-search': {
    id: 'e-job-search',
    name: 'Expenses',
    amount: 0,
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
  'i-full-time': {
    id: 'i-full-time',
    name: 'Income',
    amount: 0,
    frequency: 'month',
    ...period.fullTime,
  },
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
  'e-full-time': {
    id: 'e-full-time',
    name: 'Expenses',
    amount: 0,
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
  'i-full-time-renting': {
    id: 'i-full-time-renting',
    name: 'Income',
    amount: 0,
    frequency: 'month',
    ...period.fullTimeRenting,
  },
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
  'e-full-time-renting': {
    id: 'e-full-time-renting',
    name: 'Expenses',
    amount: 0,
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
  'i-contract': {
    id: 'i-contract',
    name: 'Income',
    amount: 0,
    frequency: 'month',
    ...period.contract,
  },
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
  'e-contract': {
    id: 'e-contract',
    name: 'Expenses',
    amount: 0,
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
  'i-contract-renting': {
    id: 'i-contract-renting',
    name: 'Income',
    amount: 0,
    frequency: 'month',
    ...period.contractRenting,
  },
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
  'e-contract-renting': {
    id: 'e-contract-renting',
    name: 'Expenses',
    amount: 0,
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
  'i-contract-home': {
    id: 'i-home',
    name: 'Income',
    amount: 0,
    frequency: 'month',
    ...period.home,
  },
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
  'e-contract-home': {
    id: 'e-home',
    name: 'Expenses',
    amount: 0,
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
  'i-share-market': {
    id: 'i-share-market',
    name: 'Income',
    amount: 0,
    frequency: 'month',
    ...period.shareMarket,
  },
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
  'e-share-market': {
    id: 'e-share-market',
    name: 'Expenses',
    amount: 0,
    frequency: 'month',
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

export const newScenarioMap: ScenarioMap = {
  root: {
    id: 'root',
    name: 'New Scenario',
    startDate: period.start.startDate,
    budgets: [],
  },
}

export const initialScenarioMap: ScenarioMap = {
  root: {
    id: 'root',
    name: 'Start',
    startDate: period.start.startDate,
    budgets: [
      {
        id: 'i-start',
        children: [{ id: 'i-salary-start' }, { id: 'i-other-start' }],
      },
      {
        id: 'e-start',
        children: [{ id: 'e-living-start' }],
      },
    ],
  },
}

export const simpleScenarioMap: ScenarioMap = {
  root: {
    id: 'root',
    name: 'Start',
    startDate: period.start.startDate,
    budgets: [
      {
        id: 'i-start',
        children: [{ id: 'i-salary-start' }, { id: 'i-other-start' }],
      },
      {
        id: 'e-start',
        children: [{ id: 'e-living-start' }],
      },
    ],
  },
  'job-1': {
    id: 'job-1',
    name: 'Job 1',
    startDate: period.job1.startDate,
    budgets: [
      {
        id: 'i-job-1',
        children: [{ id: 'i-salary-job-1' }, { id: 'i-other-job-1' }],
      },
      {
        id: 'e-job-1',
        children: [
          { id: 'e-rent-job-1' },
          {
            id: 'e-bills-job-1',
            children: [{ id: 'e-bills-electricity-job-1' }, { id: 'e-bills-phone-job-1' }],
          },
          { id: 'e-living-job-1' },
        ],
      },
    ],
  },
  'job-2': {
    id: 'job-2',
    name: 'Job 2',
    startDate: period.job2.startDate,
    budgets: [
      {
        id: 'i-job-2',
        children: [{ id: 'i-salary-job-2' }, { id: 'i-other-job-2' }],
      },
      {
        id: 'e-job-2',
        children: [
          { id: 'e-rent-job-2' },
          {
            id: 'e-bills-job-2',
            children: [{ id: 'e-bills-electricity-job-2' }, { id: 'e-bills-phone-job-2' }],
          },
          { id: 'e-living-job-2' },
        ],
      },
    ],
  },
  'job-3': {
    id: 'job-3',
    name: 'Job 3',
    startDate: period.job3.startDate,
    budgets: [
      {
        id: 'i-job-3',
        children: [{ id: 'i-salary-job-3' }, { id: 'i-other-job-3' }],
      },
      {
        id: 'e-job-3',
        children: [
          { id: 'e-rent-job-3' },
          {
            id: 'e-bills-job-3',
            children: [{ id: 'e-bills-electricity-job-3' }, { id: 'e-bills-phone-job-3' }],
          },
          { id: 'e-living-job-3' },
        ],
      },
    ],
  },
}

export const detailedScenarioMap: ScenarioMap = {
  root: {
    id: 'root',
    name: 'Start',
    startDate: period.start.startDate,
    budgets: [
      {
        id: 'i-start',
        children: [{ id: 'i-salary-start' }, { id: 'i-other-start' }],
      },
      {
        id: 'e-start',
        children: [{ id: 'e-living-start' }],
      },
    ],
  },
  'job-search': {
    id: 'job-search',
    name: 'Job Search',
    startDate: period.jobSearch.startDate,
    budgets: [
      {
        id: 'i-job-search',
        children: [{ id: 'i-salary-job-search' }, { id: 'i-other-job-search' }],
      },
      {
        id: 'e-job-search',
        children: [{ id: 'e-living-job-search' }],
      },
    ],
  },
  'full-time': {
    id: 'full-time',
    name: 'Full Time',
    startDate: period.fullTime.startDate,
    budgets: [
      {
        id: 'i-full-time',
        children: [{ id: 'i-salary-full-time' }, { id: 'i-other-full-time' }],
      },
      {
        id: 'e-full-time',
        children: [{ id: 'e-living-full-time' }],
      },
    ],
  },
  'full-time-rent': {
    id: 'full-time-rent',
    name: 'Renting',
    startDate: period.fullTimeRenting.startDate,
    budgets: [
      {
        id: 'i-full-time-renting',
        children: [{ id: 'i-salary-full-time-renting' }, { id: 'i-other-full-time-renting' }],
      },
      {
        id: 'e-full-time-renting',
        children: [{ id: 'e-rent-full-time-renting' }, { id: 'e-living-full-time-renting' }],
      },
    ],
  },
  contract: {
    id: 'contract',
    name: 'Contract',
    startDate: period.contract.startDate,
    budgets: [
      {
        id: 'i-contract',
        children: [{ id: 'i-salary-contract' }, { id: 'i-other-contract' }],
      },
      {
        id: 'e-contract',
        children: [{ id: 'e-living-contract' }],
      },
    ],
  },
  'contract-rent': {
    id: 'contract-rent',
    name: 'Renting',
    startDate: period.contractRenting.startDate,
    budgets: [
      {
        id: 'i-contract-renting',
        children: [{ id: 'i-salary-contract-renting' }, { id: 'i-other-contract-renting' }],
      },
      {
        id: 'e-contract-renting',
        children: [{ id: 'e-living-contract-renting' }, { id: 'e-rent-contract-renting' }],
      },
    ],
  },
  'contract-home': {
    id: 'contract-home',
    name: 'Home',
    startDate: period.home.startDate,
    budgets: [
      {
        id: 'i-contract-home',
        children: [{ id: 'i-salary-home' }, { id: 'i-other-home' }],
      },
      {
        id: 'e-contract-home',
        children: [{ id: 'e-living-home' }, { id: 'e-mortgage-home' }],
      },
    ],
  },
  'contract-share-market': {
    id: 'contract-share-market',
    name: 'Share Market',
    startDate: period.shareMarket.startDate,
    budgets: [
      {
        id: 'i-share-market',
        children: [
          { id: 'i-salary-share-market' },
          { id: 'i-other-share-market' },
          { id: 'i-investments-deposit-share-market' },
        ],
      },
      {
        id: 'e-share-market',
        children: [
          { id: 'e-rent-share-market' },
          { id: 'e-living-share-market' },
          { id: 'e-investments-transfer-share-market' },
        ],
      },
    ],
  },
}

// #############################################################################
// Plot data
// #############################################################################

export const thirtyYearCompoundPlotData: TimeSeriesData = convertScenarioPathToPlotData({
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
