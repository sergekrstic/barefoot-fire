import * as Plot from '@observablehq/plot'

import { ResponsiveContainer } from '../ResponsiveContainer'
import { ScenarioChartV2 as ScenarioChartV2Component } from './ScenarioChart.component.v2'

export interface ScenarioChartV2Props {
  data: Plot.Data
}

export function ScenarioChartV2({ data }: ScenarioChartV2Props): React.JSX.Element {
  return (
    <ResponsiveContainer>
      {({ width, height }) => <ScenarioChartV2Component width={width} height={height} data={data} />}
    </ResponsiveContainer>
  )
}
