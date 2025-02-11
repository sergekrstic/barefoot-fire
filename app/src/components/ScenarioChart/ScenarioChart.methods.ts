import { ScenarioStartEvents, TimeScrubberSelection, TimeSeriesData } from 'types'

// Design decision:
//  - Only filter arrays with more than 2 elements.
//  - A line chart with less than 2 data points is not useful.
export function filterTimeseries(timeseries: TimeSeriesData, selection: TimeScrubberSelection): TimeSeriesData {
  if (timeseries.length <= 2) return timeseries

  const [startPercent, endPercent] = selection

  let startIndex = Math.floor((timeseries.length - 1) * (startPercent / 100))
  let endIndex = Math.floor((timeseries.length - 1) * (endPercent / 100))

  // Ensure there is at least two data points in the selection
  if (endIndex - startIndex === 0) {
    // Increment the end index, if doesn't exceed the array length
    if (endIndex + 1 < timeseries.length) {
      endIndex += 1
    } else if (startIndex - 1 >= 0) {
      // Decrement the start index, if doesn't go below 0
      startIndex -= 1
    } else {
      throw new Error('Invalid selection (should have at least two data points)')
    }
  }

  const startDate = timeseries[startIndex].date
  const endDate = timeseries[endIndex].date

  return timeseries.filter((d) => d.date >= startDate && d.date <= endDate)
}

// Todo: Add unit tests
export function filterScenarioEvents(
  scenarioEvents: ScenarioStartEvents,
  timeseries: TimeSeriesData,
): ScenarioStartEvents {
  if (timeseries.length < 2) {
    return []
  }

  const startDate = timeseries[0].date
  const endDate = timeseries[timeseries.length - 1].date

  return scenarioEvents.filter((d) => d.date >= startDate && d.date <= endDate)
}
