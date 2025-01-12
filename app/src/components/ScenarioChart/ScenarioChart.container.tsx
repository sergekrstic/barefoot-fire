import { useMemo } from 'react'

import { ResponsiveContainer } from 'components'
import { Selection, TimeSeriesData } from 'types'

import { Periods } from '@fire/forecast-engine'

import { AreaChart } from './AreaChart.component'
import { DifferenceChart } from './DifferenceChart.component'
import { filterData } from './ScenarioChart.methods'

export interface ScenarioChartV2Props {
  type: 'area' | 'difference'
  timeseries: TimeSeriesData
  periods: Periods
  selection: Selection
}

export function ScenarioChart({ type, timeseries, periods, selection }: ScenarioChartV2Props): React.JSX.Element {
  const filteredTimeseries = useMemo(() => filterData(timeseries, selection), [timeseries, selection])

  if (filteredTimeseries.length < 2) {
    const message = filteredTimeseries.length === 0 ? 'No data' : 'Insufficient data'
    return <div className="flex h-full items-center justify-center text-lg font-medium text-slate-600">{message}</div>
  }

  return (
    <ResponsiveContainer>
      {({ width, height }) => {
        return type === 'area' ? (
          <AreaChart width={width} height={height} timeseries={filteredTimeseries} periods={periods} />
        ) : (
          <DifferenceChart width={width} height={height} timeseries={filteredTimeseries} periods={periods} />
        )
      }}
    </ResponsiveContainer>
  )
}
