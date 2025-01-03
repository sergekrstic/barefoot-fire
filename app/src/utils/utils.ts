import moment from 'moment'

export interface TimeSeriesElement {
  date: string
  amount: number
  name: string
}
export type TimeSeriesData = TimeSeriesElement[]

export function generateRandomTimeSeriesData(): TimeSeriesData {
  const data = []
  for (let i = 0; i < 100; i++) {
    data.push({ date: moment().add(i, 'w').toISOString(), amount: Math.random() * 100, name: 'A' })
  }

  // accumulate the amount
  let total = 0
  for (const d of data) {
    total += d.amount
    d.amount = total
  }

  return data
}
