export interface ScenarioBudgets {
  id: string
  name: string
  budgets: Budget[]
  period: Period
}

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

export interface ScenarioEvents {
  period: Period
  budgetEvents: BudgetEvents[]
  totalExpense: number
}

export interface BudgetEvents {
  budget: Budget
  period: Period
  events: Array<{ date: string; value: number }>
  totalAmount: number
}
