import { ClassValue, clsx } from 'clsx'
import moment from 'moment'
import { twMerge } from 'tailwind-merge'
import {
  BudgetMap,
  Interval,
  RollupFrequency,
  ScenarioMap,
  ScenarioPath,
  ScenarioStartEvents,
  TimeSeriesData,
  TreeData,
} from 'types'

import { Budget, Period, calculateScenarioEvents } from '@fire/forecast-engine'

import { nanoid } from './nanoid'

export function deepClone<T>(data: T): T {
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

export function convertScenarioPathToPlotData(scenarioPath: ScenarioPath, name?: string): TimeSeriesData {
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

// Create a compound scenario from the given scenario IDs
export function buildScenarioPath(
  scenarioIds: string[],
  scenarioMap: ScenarioMap,
  budgetMap: BudgetMap,
  forecastPeriod: Period,
): ScenarioPath {
  const adjustedBudgets: Budget[] = []
  const scenarioStartEvents: ScenarioStartEvents = []

  // Adjust the end date of each scenario
  scenarioIds.forEach((scenarioId, index) => {
    const scenario = scenarioMap[scenarioId]
    const nextScenario = scenarioMap[scenarioIds[index + 1]]

    // Traverse the budget tree and clone the budgets
    const budgetIds = collectBudgetIds(scenario.budgets)
    const clonedBudgets = budgetIds.map((id) => deepClone(budgetMap[id]))

    // If there is a next scenario, adjust the end date of the current scenario
    if (nextScenario) {
      clonedBudgets.forEach((budget) => {
        budget.endDate = nextScenario.startDate
      })
    }

    adjustedBudgets.push(...clonedBudgets)
    scenarioStartEvents.push({ date: scenario.startDate, name: scenario.name })
  })

  return {
    id: 'scenario-path',
    name: 'Scenario Path',
    budgets: adjustedBudgets,
    scenarioStartEvents,
    period: forecastPeriod,
  }
}

export function collectBudgetIds(tree: TreeData[]): string[] {
  const budgetIds: string[] = []
  const fetchBudgetIds = (tree: TreeData): void => {
    if (tree.children) {
      tree.children.forEach(fetchBudgetIds)
    }
    budgetIds.push(tree.id)
  }
  tree.forEach(fetchBudgetIds)

  return budgetIds
}

export function generateNewIdMap(budgetIds: string[]): Record<string, string> {
  return budgetIds.reduce(
    (acc, originalId) => {
      acc[originalId] = nanoid()
      return acc
    },
    {} as Record<string, string>,
  )
}

export function cloneBudgetTree(tree: TreeData[], newIdMap: Record<string, string>): TreeData[] {
  const preformClone = (tree: TreeData): TreeData => {
    const newTree = { ...tree, id: newIdMap[tree.id] }
    if (tree.children) {
      newTree.children = tree.children.map(preformClone)
    }
    return newTree
  }
  return tree.map(preformClone)
}

export function findBudget(budgetId: string, budgetTree: TreeData[]): TreeData | null {
  const findTreeNode = (tree: TreeData): TreeData | null => {
    let result: TreeData | null = null

    if (tree.id === budgetId) {
      result = tree
    } else if (tree.children) {
      tree.children.some((node) => {
        result = findTreeNode(node)
        return result // break loop
      })
    }

    return result
  }

  return budgetTree.map(findTreeNode).find((node) => node !== null) || null
}

// Todo: Deprecate this function
export function createBudgetItems(budgetMap: BudgetMap, budgetIds: string[]): TreeData[] {
  return budgetIds.map((id) => {
    const budget = budgetMap[id]
    return {
      id: budget.name,
      name: budget.name,
      value: budget.amount,
    }
  })
}

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

export function formatTransactionValue(value: number): string {
  const integerValue = Math.floor(Math.round(value))
  const formattedNumber = Math.abs(integerValue).toLocaleString()
  return value >= 0 ? formattedNumber : `(${formattedNumber})`
}

export function calculateBudgetRollupValue(budget: Budget, rollupFrequency: RollupFrequency): number {
  const { amount, frequency: budgetFrequency } = budget
  switch (budgetFrequency) {
    case 'year':
      return rollupFrequency === 'yearly' ? amount : amount / 12
    case 'quarter':
      return rollupFrequency === 'yearly' ? amount * 4 : (amount * 4) / 12
    case 'month':
      return rollupFrequency === 'yearly' ? amount * 12 : amount
    case 'week':
      return rollupFrequency === 'yearly' ? amount * 52 : (amount * 52) / 12
    case 'day':
      return rollupFrequency === 'yearly' ? amount * 365 : (amount * 365) / 12
  }
}
