// Todo: Refactor this type to remove the 'periods' property, it doesn't smell right
export interface ScenarioBudgets {
  id: string
  name: string
  budgets: Budget[]
  periods: Periods
  period: Period
}

// Todo: Figure out a better name for this type
export type Periods = Array<{ date: string; name: string }>

export interface Period {
  startDate: string
  endDate: string
}

export interface Budget {
  id: string
  name: string
  // type: BudgetType
  amount: number
  frequency: BudgetFrequency
  startDate: string
  endDate: string
  initialAmount?: number
  interestRate?: number
}

export type BudgetType = 'income' | 'expense'

export type BudgetFrequency = 'year' | 'quarter' | 'month' | 'week' | 'day'

export interface BudgetEvents {
  budget: Budget
  period: Period
  events: Event[]
  totalAmount: number
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

export interface ScenarioTree {
  name: string
  children: ScenarioTree[]
  totalExpense: number
}
