import { useEffect, useRef } from 'react'

import * as Plot from '@observablehq/plot'

import { ScenarioEvents } from '@fire/forecast-engine'

export interface ScenarioChartV1Props {
  width: number
  height: number
  scenarioEvents: ScenarioEvents
}

export function ScenarioChartV1({ width, height, scenarioEvents }: ScenarioChartV1Props): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const processedData = scenarioEvents.budgetEvents.map((budgetEvent) => {
      return budgetEvent.events.map((event) => ({
        date: new Date(event.date),
        amount: event.value,
        name: budgetEvent.budget.name,
      }))
    })

    const plot = Plot.plot({
      width,
      height,
      marginLeft: 50,
      y: { grid: true },
      marks: [
        Plot.ruleY([0]),
        Plot.rectY(
          processedData.flat(),
          // @ts-expect-error - TS doesn't like the object shorthand
          Plot.binX({ y: 'sum' }, { x: 'date', y: 'amount', fill: 'name', interval: 'month', cumulative: true }),
        ),
      ],
    })

    containerRef.current?.append(plot)
    return (): void => plot.remove()
  }, [height, scenarioEvents.budgetEvents, width])

  return <div ref={containerRef} className="h-full w-full" />
}
