import { useEffect, useRef } from 'react'

import * as Plot from '@observablehq/plot'

export interface StackedAreaChartV2Props {
  width: number
  height: number
  data: Plot.Data
}

export function StackedAreaChartV2({ width, height, data }: StackedAreaChartV2Props): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const plot = Plot.marks([
      Plot.ruleY([0]),
      // Plot.areaY(data, { x: (d) => new Date(d.date), y: 'amount', fill: 'name' }),
      Plot.areaY(
        data,
        Plot.stackY(
          // { order: 'sum', reverse: false },
          // { order: 'appearance', reverse: false },
          // { order: 'value', reverse: false },
          { order: 'inside-out', reverse: false },
          { x: (d) => new Date(d.date), y: 'amount', fill: 'name', opacity: 0.5 },
        ),
      ),
      Plot.lineY(data, { x: (d) => new Date(d.date), y: 'amount', stroke: 'name' }),
    ]).plot({
      width,
      height,
      marginLeft: 50,
      y: { grid: true },
    })

    containerRef.current?.append(plot)
    return (): void => plot.remove()
  }, [data, height, width])

  return <div ref={containerRef} className="h-full w-full" />
}
