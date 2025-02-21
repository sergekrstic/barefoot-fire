import moment from 'moment'
import { Interval, TimeSeriesData } from 'types'

import { BudgetEvents } from '@fire/forecast-engine'

export function convertBudgetTransactionsToPlotData(budgetEvents: BudgetEvents[], name?: string): TimeSeriesData {
  return budgetEvents
    .map((budgetEvent) => {
      return budgetEvent.events.map((event) => ({
        date: event.date,
        amount: event.value,
        name: name || budgetEvent.budget.name,
      }))
    })
    .flat()
    .sort((a, b) => moment(a.date).diff(b.date))
}

export function preprocessPlotData(args: {
  data: TimeSeriesData
  interval: Interval
  cumulative: boolean
}): TimeSeriesData {
  const { data, interval, cumulative } = args

  if (data.length === 0) return []

  const binned: TimeSeriesData = []
  binned.push({ ...data[0] })
  let currentInterval = getCurrentInterval(data[0].date, interval)
  let currentAmount = 0
  let currentName = data[0].name
  for (let i = 1; i < data.length; i++) {
    const datum = data[i]
    // Todo: improve the logic here to test if the datum is within the current interval using two dates
    if (getCurrentInterval(datum.date, interval) !== currentInterval) {
      binned.push({
        date: dateFromCurrentInterval(currentInterval, interval),
        amount: currentAmount,
        name: currentName,
      })
      currentInterval = getCurrentInterval(datum.date, interval)
      currentAmount = 0
    }
    currentAmount += datum.amount
    currentName = datum.name
  }
  binned.push({
    date: dateFromCurrentInterval(currentInterval, interval),
    amount: currentAmount,
    name: currentName,
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

export function getCurrentInterval(date: string, interval: Interval): string {
  switch (interval) {
    case 'year': {
      return moment.utc(date).toISOString().slice(0, 4)
    }
    case 'month': {
      return moment.utc(date).toISOString().slice(0, 7)
    }
    case 'week': {
      const year = moment.utc(date).toISOString().slice(0, 4)
      const week = moment.utc(date).isoWeek()
      return `${year}-w${week}`
    }
  }
}

export function dateFromCurrentInterval(currentInterval: string, interval: Interval): string {
  switch (interval) {
    case 'year': {
      return moment.utc(currentInterval).add(1, 'year').format('YYYY-MM-DD')
    }
    case 'month': {
      return moment.utc(currentInterval).add(1, 'month').format('YYYY-MM-DD')
    }
    case 'week': {
      const year = Number(currentInterval.split('-w')[0])
      const week = Number(currentInterval.split('-w')[1])

      // Todo: Fix this off by one error
      const date = moment.utc(`${year}-01-01`).isoWeek(week).add(1, 'week')
      // console.log(date.format('YYYY-MM-DD'), { year, week })
      if (week === 0 && date.year() < year) {
        date.add(1, 'year')
        // console.log('adding a year', date.format('YYYY-MM-DD'))
      }

      return date.format('YYYY-MM-DD')
      // return moment.utc(`${year}-01-01`).isoWeek(week).add(1, 'week').format('YYYY-MM-DD')
    }
  }
}
