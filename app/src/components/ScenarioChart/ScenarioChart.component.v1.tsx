import { useEffect, useRef } from 'react'

import * as Plot from '@observablehq/plot'

import { Period } from '@fire/forecast-engine'

export interface ScenarioChartV1Props {
  width: number
  height: number
  data: Plot.Data
  period: Period
  interval?: Plot.RangeInterval
  cumulative?: boolean
}

export function ScenarioChartV1({
  width,
  height,
  data,
  period,
  interval = 'month',
  cumulative = false,
}: ScenarioChartV1Props): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const plot = Plot.marks([
      Plot.ruleY([0]),
      Plot.rectY(
        data,
        // @ts-expect-error - TS doesn't like the object shorthand
        Plot.binX({ y: 'sum' }, { x: 'date', y: 'amount', fill: 'name', interval, cumulative }),
      ),
    ]).plot({
      width,
      height,
      marginLeft: 50,
      y: { grid: true },
      x: { domain: [new Date(period.startDate), new Date(period.endDate)] },
    })

    containerRef.current?.append(plot)
    return (): void => plot.remove()
  }, [cumulative, data, height, interval, period.endDate, period.startDate, width])

  return <div ref={containerRef} className="h-full w-full" />
}
