import { ParentSize } from '../ParentSize'
import { ScenarioChart as ScenarioChartComponent } from './ScenarioChart.component'

export function ScenarioChart(): React.JSX.Element {
  return (
    <ParentSize className="p-4">
      {({ width, height }) => <ScenarioChartComponent width={width} height={height} />}
    </ParentSize>
  )
}
