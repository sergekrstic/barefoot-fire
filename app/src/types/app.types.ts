import { Budget, ScenarioBudgets } from '@fire/forecast-engine'

export interface TreeData extends Record<string, unknown> {
  id: string
  children?: TreeData[]
}

export interface BudgetItem extends TreeData {
  name: string
  value: number
  children?: BudgetItem[]
}

export interface BudgetTree {
  name: string
  budgets: BudgetItem[]
}

export type BudgetForest = Record<string, BudgetTree>

export interface TimeSeriesElement {
  date: string
  amount: number
  name: string
}

export type TimeSeriesData = TimeSeriesElement[]

// Note: Interval is different from BudgetFrequency in the forecast-engine package
// It is used to determine the interval of the plot data
export type Interval = 'year' | 'month' | 'week'

export type Selection = [number, number]

export type BudgetMap = Record<string, Budget>

export type ScenarioMap = Record<string, ScenarioBudgets>

export type ScenarioStartEvents = Array<{ date: string; name: string }>

export interface ScenarioPath extends ScenarioBudgets {
  scenarioStartEvents: ScenarioStartEvents
}
