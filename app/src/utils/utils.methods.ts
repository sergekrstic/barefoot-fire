import moment from 'moment'
import { BudgetItem, BudgetMap, Interval, ScenarioMap, ScenarioPath, ScenarioStartEvents, TimeSeriesData } from 'types'

import { Budget, Period, calculateScenarioEvents } from '@fire/forecast-engine'

export function deepCloneData<T>(data: T): T {
  return JSON.parse(JSON.stringify(data))
}

export function generateRandomTimeSeriesData(args?: {
  name?: string
  magnitude?: number
  offset?: number
}): TimeSeriesData {
  const name = args?.name || 'A'
  const magnitude = args?.magnitude || 100
  const offset = args?.offset || 0
  const data = []
  for (let i = 0; i < 100; i++) {
    data.push({ date: moment('2025').add(i, 'w').toISOString(), amount: Math.random() * magnitude - offset, name })
  }

  // Accumulate the amount
  let runningTotal = 0
  for (const d of data) {
    runningTotal += d.amount
    d.amount = runningTotal
  }

  return data
}

export function generateSineWaveTimeSeriesData(): TimeSeriesData {
  const data = []
  for (let i = 0; i < 365; i++) {
    data.push({ date: moment('2025').add(i, 'd').toISOString(), amount: Math.sin(i / 29) * 100, name: 'A' })
  }

  // Accumulate the amount
  let runningTotal = 0
  for (const d of data) {
    runningTotal += d.amount
    d.amount = runningTotal
  }

  return data
}

export function convertScenarioBudgetsToPlotData(scenarioPath: ScenarioPath, name?: string): TimeSeriesData {
  const scenarioEvents = calculateScenarioEvents(scenarioPath)

  return scenarioEvents.budgetEvents
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
    case 'year':
      return getCurrentYear(date)
    case 'month':
      return getCurrentMonth(date)
    case 'week':
      return getCurrentWeek(date)
  }
}

function getCurrentYear(date: string): string {
  return moment.utc(date).toISOString().slice(0, 4)
}

function getCurrentMonth(date: string): string {
  return moment.utc(date).toISOString().slice(0, 7)
}

function getCurrentWeek(date: string): string {
  const year = getCurrentYear(date)
  const week = moment.utc(date).isoWeek()
  return `${year}-w${week}`
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

export function cloneBudgets(budgetIds: string[], budgetMap: BudgetMap): Budget[] {
  return budgetIds.map((id) => ({ ...budgetMap[id] }))
}

// Create a compound scenario from the given scenario IDs
export function buildScenarioPath(scenarioIds: string[], scenarioMap: ScenarioMap, period: Period): ScenarioPath {
  const adjustedBudgets: Budget[] = []
  const scenarioStartEvents: ScenarioStartEvents = []

  // Adjust the end date of each scenario
  scenarioIds.forEach((scenarioId, index) => {
    const scenario = scenarioMap[scenarioId]
    const nextScenario = scenarioMap[scenarioIds[index + 1]]

    const clonedBudgets = scenario.budgets.map((budget) => ({ ...budget }))

    // If there is a next scenario, adjust the end date of the current scenario
    if (nextScenario) {
      clonedBudgets.forEach((budget) => {
        budget.endDate = nextScenario.period.startDate
      })
    }

    adjustedBudgets.push(...clonedBudgets)
    scenarioStartEvents.push({ date: scenario.period.startDate, name: scenario.name })
  })

  return {
    id: 'scenario-path',
    name: 'Scenario Path',
    budgets: adjustedBudgets,
    scenarioStartEvents,
    period,
  }
}

export function createBudgetItems(budgetMap: BudgetMap, budgetIds: string[]): BudgetItem[] {
  return budgetIds.map((id) => {
    const budget = budgetMap[id]
    return {
      id: budget.name,
      name: budget.name,
      value: budget.amount,
    }
  })
}
