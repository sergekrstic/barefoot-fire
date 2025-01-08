export interface TreeData extends Record<string, unknown> {
  id: string
  children?: TreeData[]
}

export interface BudgetCategories {
  name: string
  categories: TreeData[]
}

export interface TimeSeriesElement {
  date: Date
  amount: number
  name: string
}

export type TimeSeriesData = TimeSeriesElement[]

export interface PlotData {
  date: Date
  amount: number
  name: string
}

export type Interval = 'year' | 'month' | 'week'

export type Selection = [number, number]
