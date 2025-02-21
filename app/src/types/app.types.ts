import {
  budgetFrequencySchema,
  budgetMapSchema,
  budgetSchema,
  scenarioMapSchema,
  scenarioSchema,
  treeDataSchema,
} from 'schemas'
import { z } from 'zod'

import { BudgetEvents, Period } from '@fire/forecast-engine'

export type TreeData = z.infer<typeof treeDataSchema>

export type BudgetFrequency = z.infer<typeof budgetFrequencySchema>

export type Budget = z.infer<typeof budgetSchema>

export type BudgetMap = z.infer<typeof budgetMapSchema>

export type Scenario = z.infer<typeof scenarioSchema>

export type ScenarioMap = z.infer<typeof scenarioMapSchema>

// Note: Interval is different from BudgetFrequency in the forecast-engine package
// It is used to determine the interval of the plot data
export type Interval = 'year' | 'month' | 'week'

export type TimeScrubberSelection = [number, number]

export type ScenarioStartEvents = Array<{ date: string; name: string }>

export interface ScenarioPath {
  id: string
  name: string
  budgets: Budget[]
  period: Period
  scenarioStartEvents: ScenarioStartEvents
}

export interface TimeSeriesElement {
  date: string
  amount: number
  name: string
}

export type TimeSeriesData = TimeSeriesElement[]

//Todo: consider merging this into the Interval type
export type RollupFrequency = 'monthly' | 'yearly'

export type BudgetType = 'group' | 'item'

export type BudgetTransactionsCache = Record<string, BudgetEvents>
