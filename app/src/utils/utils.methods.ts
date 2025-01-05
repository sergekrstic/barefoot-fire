import * as Plot from '@observablehq/plot'
import moment from 'moment'

import { ScenarioBudgets, calculateScenarioEvents } from '@fire/forecast-engine'

export interface TimeSeriesElement {
  date: Date
  amount: number
  name: string
}
export type TimeSeriesData = TimeSeriesElement[]

export function generateRandomTimeSeriesData(): TimeSeriesData {
  const data = []
  for (let i = 0; i < 100; i++) {
    data.push({ date: moment().add(i, 'w').toDate(), amount: Math.random() * 100, name: 'A' })
  }

  // accumulate the amount
  let total = 0
  for (const d of data) {
    total += d.amount
    d.amount = total
  }

  return data
}

export interface PlotData {
  date: Date
  amount: number
  name: string
}

export function convertScenarioBudgetsToPlotData(scenarioBudgets: ScenarioBudgets): PlotData[] {
  const scenarioEvents = calculateScenarioEvents(scenarioBudgets)

  return scenarioEvents.budgetEvents
    .map((budgetEvent) => {
      return budgetEvent.events.map((event) => ({
        date: new Date(event.date),
        amount: event.value,
        name: budgetEvent.budget.name,
      }))
    })
    .flat()
    .sort((a, b) => a.date.getTime() - b.date.getTime())
}

export function preprocessPlotData(args: { data: TimeSeriesData; cumulative: boolean }): Plot.Data {
  const { data, cumulative } = args

  const binned: TimeSeriesData = []
  console.log()
  let currentMonth = getCurrentMonth(data[0].date)
  let currentAmount = 0
  for (const datum of data) {
    if (getCurrentMonth(datum.date) !== currentMonth) {
      binned.push({
        date: dateFromCurrentMonth(currentMonth),
        amount: currentAmount,
        name: '',
      })
      currentMonth = getCurrentMonth(datum.date)
      currentAmount = 0
    }
    currentAmount += datum.amount
  }
  binned.push({
    date: dateFromCurrentMonth(currentMonth),
    amount: currentAmount,
    name: '',
  })

  const processed: TimeSeriesData = [{ ...binned[0] }]
  if (cumulative) {
    for (let i = 1; i < binned.length; i++) {
      processed.push({ ...binned[i], amount: processed[i - 1].amount + binned[i].amount })
    }
    return processed
  }

  return binned
}

function getCurrentMonth(date: Date): string {
  return date.toISOString().slice(0, 7)
}

function dateFromCurrentMonth(currentMonth: string): Date {
  const year = Number(currentMonth.split('-')[0])
  const month = Number(currentMonth.split('-')[1])
  const day = 1
  return new Date(year, month, day)
}
