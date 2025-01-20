import { useMemo } from 'react'

import { ResponsiveContainer } from 'components'
import { ScenarioStartEvents, TimeScrubberSelection, TimeSeriesData } from 'types'

import { AreaChart } from './AreaChart.component'
import { DifferenceChart } from './DifferenceChart.component'
import { filterScenarioEvents, filterTimeseries } from './ScenarioChart.methods'

export interface ScenarioChartV2Props {
  type: 'area' | 'difference'
  timeseries: TimeSeriesData
  scenarioEvents: ScenarioStartEvents
  selection: TimeScrubberSelection
}

export function ScenarioChart({
  type,
  timeseries,
  scenarioEvents,
  selection,
}: ScenarioChartV2Props): React.JSX.Element {
  const filteredTimeseries = useMemo(() => filterTimeseries(timeseries, selection), [timeseries, selection])
  const filteredScenarioEvents = useMemo(
    () => filterScenarioEvents(scenarioEvents, filteredTimeseries),
    [scenarioEvents, filteredTimeseries],
  )

  if (filteredTimeseries.length < 2) {
    const message = filteredTimeseries.length === 0 ? 'No data' : 'Insufficient data'
    return <div className="flex h-full items-center justify-center text-lg font-medium text-slate-600">{message}</div>
  }

  return (
    <div className="h-full pt-1">
      <ResponsiveContainer>
        {({ width, height }) => {
          return type === 'area' ? (
            <AreaChart
              width={width}
              height={height}
              timeseries={filteredTimeseries}
              scenarioEvents={filteredScenarioEvents}
            />
          ) : (
            <DifferenceChart
              width={width}
              height={height}
              timeseries={filteredTimeseries}
              scenarioEvents={filteredScenarioEvents}
            />
          )
        }}
      </ResponsiveContainer>
    </div>
  )
}
