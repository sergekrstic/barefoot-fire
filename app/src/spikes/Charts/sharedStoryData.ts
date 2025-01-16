import { Budget, Period } from '@fire/forecast-engine'

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

export const oneYearLinearBudget: Budget = {
  id: '1',
  name: 'Budget 1',
  amount: 1000,
  frequency: 'year',
  ...thirtyYearPeriod,
}

export const yearlyCompoundBudget: Budget = {
  id: '2',
  name: 'Budget 1',
  amount: 1000,
  interestRate: 0.05,
  frequency: 'year',
  ...thirtyYearPeriod,
}
