import { Budget, ScenarioBudgets } from '@fire/forecast-engine'

export interface TreeData extends Record<string, unknown> {
  id: string
  children?: TreeData[]
}

export interface BudgetCategories {
  name: string
  categories: TreeData[]
}

export interface TimeSeriesElement {
  date: string
  amount: number
  name: string
}

export type TimeSeriesData = TimeSeriesElement[]

// Todo: decide it's best to group these together or not
// export interface PlotData {
//   timeSeries: TimeSeriesData
//   periods: Periods
// }

export type Interval = 'year' | 'month' | 'week'

export type Selection = [number, number]

export type BudgetMap = Record<string, Budget>

export type ScenarioMap = Record<string, ScenarioBudgets>
