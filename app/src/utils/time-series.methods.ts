import moment from 'moment'
import { TimeSeriesData } from 'types'

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
