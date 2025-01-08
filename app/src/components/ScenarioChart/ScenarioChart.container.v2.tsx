import { useMemo } from 'react'

import { Selection, TimeSeriesData } from 'types'

import { ResponsiveContainer } from '../ResponsiveContainer'
import { ScenarioChart as ScenarioChartComponent } from './ScenarioChart.component.v2'

export interface ScenarioChartV2Props {
  data: TimeSeriesData
  selection: Selection
}

export function ScenarioChart({ data, selection }: ScenarioChartV2Props): React.JSX.Element {
  const filteredData = useMemo(() => filterData(data, selection), [data, selection])

  return (
    <ResponsiveContainer>
      {({ width, height }) => <ScenarioChartComponent width={width} height={height} data={filteredData} />}
    </ResponsiveContainer>
  )
}

function filterData(data: TimeSeriesData, selection: Selection): TimeSeriesData {
  const [startPercent, endPercent] = selection

  const startIndex = Math.floor((data.length - 1) * (startPercent / 100))
  const endIndex = Math.floor((data.length - 1) * (endPercent / 100))

  const startDate = data[startIndex].date
  const endDate = data[endIndex].date

  return data.filter((d) => d.date >= startDate && d.date <= endDate)
}
