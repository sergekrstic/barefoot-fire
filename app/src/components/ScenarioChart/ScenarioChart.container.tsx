import { ScenarioEvents } from '@fire/forecast-engine'

import { ResponsiveContainer } from '../ResponsiveContainer'
import { ScenarioChart as ScenarioChartComponent } from './ScenarioChart.component'

export interface ScenarioChartProps {
  scenarioEvents: ScenarioEvents
}

export function ScenarioChart({ scenarioEvents }: ScenarioChartProps): React.JSX.Element {
  return (
    <ResponsiveContainer>
      {({ width, height }) => <ScenarioChartComponent width={width} height={height} scenarioEvents={scenarioEvents} />}
    </ResponsiveContainer>
  )
}
