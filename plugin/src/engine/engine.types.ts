export interface ScenarioBudgets {
  period: Period
  budgets: Budget[]
}

export interface Period {
  startDate: string
  endDate: string
}

export interface Budget {
  name: string
  expense: number
  frequency: BudgetFrequency
  startDate: string
  endDate: string
  initialAmount?: number
  interestRate?: number
}

export type BudgetFrequency = 'year' | 'month' | 'week' | 'day'

export interface BudgetEvents {
  budget: Budget
  period: Period
  events: Event[]
  totalExpense: number
}

export interface Event {
  date: string
  value: number
}

export interface ScenarioEvents {
  period: Period
  budgetEvents: BudgetEvents[]
  totalExpense: number
}
