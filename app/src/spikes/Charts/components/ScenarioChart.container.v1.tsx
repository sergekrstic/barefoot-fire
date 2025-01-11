import * as Plot from '@observablehq/plot'
import { ResponsiveContainer } from 'components'

import { ScenarioEvents } from '@fire/forecast-engine'

import { ScenarioChartV1 as ScenarioChartV1Component } from './ScenarioChart.component.v1'

export interface ScenarioChartV1Props {
  scenarioEvents: ScenarioEvents
  interval?: Plot.RangeInterval
  cumulative?: boolean
}

export function ScenarioChartV1({ scenarioEvents, interval, cumulative }: ScenarioChartV1Props): React.JSX.Element {
  const { period, budgetEvents } = scenarioEvents

  const processedData = budgetEvents
    .map((budgetEvent) => {
      return budgetEvent.events.map((event) => ({
        date: new Date(event.date),
        amount: event.value,
        name: budgetEvent.budget.name,
      }))
    })
    .flat()

  return (
    <ResponsiveContainer>
      {({ width, height }) => (
        <ScenarioChartV1Component
          width={width}
          height={height}
          data={processedData}
          period={period}
          cumulative={cumulative}
          interval={interval}
        />
      )}
    </ResponsiveContainer>
  )
}
