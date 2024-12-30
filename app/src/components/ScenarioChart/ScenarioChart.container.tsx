import { ScenarioEvents } from '@fire/forecast-engine'

import { ParentSize } from '../ParentSize'
import { ScenarioChart as ScenarioChartComponent } from './ScenarioChart.component'

export interface ScenarioChartProps {
  scenarioEvents: ScenarioEvents
}

export function ScenarioChart({ scenarioEvents }: ScenarioChartProps): React.JSX.Element {
  return (
    <ParentSize>
      {({ width, height }) => <ScenarioChartComponent width={width} height={height} scenarioEvents={scenarioEvents} />}
    </ParentSize>
  )
}
