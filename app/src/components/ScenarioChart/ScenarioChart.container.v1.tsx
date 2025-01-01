import { ScenarioEvents } from '@fire/forecast-engine'

import { ResponsiveContainer } from '../ResponsiveContainer'
import { ScenarioChartV1 as ScenarioChartV1Component } from './ScenarioChart.component.v1'

export interface ScenarioChartV1Props {
  scenarioEvents: ScenarioEvents
}

export function ScenarioChartV1({ scenarioEvents }: ScenarioChartV1Props): React.JSX.Element {
  return (
    <ResponsiveContainer>
      {({ width, height }) => (
        <ScenarioChartV1Component width={width} height={height} scenarioEvents={scenarioEvents} />
      )}
    </ResponsiveContainer>
  )
}
