import { useMemo } from 'react'

import { ResponsiveContainer } from 'components'
import { Selection, TimeSeriesData } from 'types'

import { ScenarioChart as ScenarioChartComponent } from './ScenarioChart.component'
import { filterData } from './ScenarioChart.methods'

export interface ScenarioChartV2Props {
  data: TimeSeriesData
  selection: Selection
}

export function ScenarioChart({ data, selection }: ScenarioChartV2Props): React.JSX.Element {
  const filteredData = useMemo(() => filterData(data, selection), [data, selection])

  if (filteredData.length < 2) {
    const message = filteredData.length === 0 ? 'No data' : 'Insufficient data'
    return <div className="flex h-full items-center justify-center text-lg font-medium text-slate-600">{message}</div>
  }

  return (
    <ResponsiveContainer>
      {({ width, height }) => <ScenarioChartComponent width={width} height={height} data={filteredData} />}
    </ResponsiveContainer>
  )
}
