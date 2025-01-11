import { Selection, TimeSeriesData } from 'types'

// Design decision:
//  - Only filter arrays with more than 2 elements.
//  - A line chart with less than 2 data points is not useful.
export function filterData(data: TimeSeriesData, selection: Selection): TimeSeriesData {
  if (data.length <= 2) return data

  const [startPercent, endPercent] = selection

  let startIndex = Math.floor((data.length - 1) * (startPercent / 100))
  let endIndex = Math.floor((data.length - 1) * (endPercent / 100))

  // Ensure there is at least two data points in the selection
  if (endIndex - startIndex === 0) {
    // Increment the end index, if doesn't exceed the array length
    if (endIndex + 1 < data.length) {
      endIndex += 1
    } else if (startIndex - 1 >= 0) {
      // Decrement the start index, if doesn't go below 0
      startIndex -= 1
    } else {
      throw new Error('Invalid selection (should have at least two data points)')
    }
  }

  const startDate = data[startIndex].date
  const endDate = data[endIndex].date

  return data.filter((d) => d.date >= startDate && d.date <= endDate)
}
