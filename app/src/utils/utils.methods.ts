import moment from 'moment'
import { Interval, TimeSeriesData } from 'types'

import { ScenarioBudgets, calculateScenarioEvents } from '@fire/forecast-engine'

export function generateRandomTimeSeriesData(): TimeSeriesData {
  const data = []
  for (let i = 0; i < 100; i++) {
    data.push({ date: moment().add(i, 'w').toDate(), amount: Math.random() * 100, name: 'A' })
  }

  // Accumulate the amount
  let runningTotal = 0
  for (const d of data) {
    runningTotal += d.amount
    d.amount = runningTotal
  }

  return data
}

export function convertScenarioBudgetsToPlotData(scenarioBudgets: ScenarioBudgets): TimeSeriesData {
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

export function preprocessPlotData(args: {
  data: TimeSeriesData
  interval: Interval
  cumulative: boolean
}): TimeSeriesData {
  const { data, interval, cumulative } = args

  const binned: TimeSeriesData = []
  let currentMonth = getCurrentInterval(data[0].date, interval)
  let currentAmount = 0
  for (const datum of data) {
    if (getCurrentInterval(datum.date, interval) !== currentMonth) {
      binned.push({
        date: dateFromCurrentInterval(currentMonth, interval),
        amount: currentAmount,
        name: '',
      })
      currentMonth = getCurrentInterval(datum.date, interval)
      currentAmount = 0
    }
    currentAmount += datum.amount
  }
  binned.push({
    date: dateFromCurrentInterval(currentMonth, interval),
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

export function getCurrentInterval(date: Date, interval: Interval): string {
  switch (interval) {
    case 'year':
      return getCurrentYear(date)
    case 'month':
      return getCurrentMonth(date)
    case 'week':
      return getCurrentWeek(date)
  }
}

// Todo: fix the one year off issue
function getCurrentYear(date: Date): string {
  return date.toISOString().slice(0, 4)
  // const year = date.getFullYear() + 1
  // return year.toString()
}

// Todo: fix the one month off issue
function getCurrentMonth(date: Date): string {
  return date.toISOString().slice(0, 7)
}

// Todo: fix the one week off issue
function getCurrentWeek(date: Date): string {
  const year = getCurrentYear(date)
  const week = moment(date).isoWeek()
  return `${year}-${week}`
}

export function dateFromCurrentInterval(currentInterval: string, interval: Interval): Date {
  switch (interval) {
    case 'year': {
      return new Date(Number(currentInterval), 0, 1)
    }
    case 'month': {
      return new Date(Number(currentInterval.split('-')[0]), Number(currentInterval.split('-')[1]), 1)
    }
    case 'week': {
      const year = Number(currentInterval.split('-')[0])
      const week = Number(currentInterval.split('-')[1])
      return moment(new Date(year, 0, 1))
        .year(year)
        .isoWeek(week)
        .toDate()
    }
  }
}
