export interface Budget {
  id: string
  name: string
  amount: number
  frequency: BudgetFrequency
  startDate: string
  endDate: string
  initialAmount?: number
  interestRate?: number
}

export type BudgetFrequency = 'year' | 'quarter' | 'month' | 'week' | 'day'

export interface Period {
  startDate: string
  endDate: string
}

export interface ScenarioBudgets {
  period: Period
  budgets: Budget[]
}

export interface ScenarioEvents {
  period: Period
  budgetEvents: BudgetEvents[]
  totalAmount: number
}

export interface BudgetEvents {
  budget: Budget
  period: Period
  events: Array<{ date: string; value: number }>
  totalAmount: number
}
