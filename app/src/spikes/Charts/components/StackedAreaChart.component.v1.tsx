import { useEffect, useRef } from 'react'

import * as Plot from '@observablehq/plot'

export interface StackedAreaChartV1Props {
  width: number
  height: number
  data: Plot.Data
}

export function StackedAreaChartV1({ width, height, data }: StackedAreaChartV1Props): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const plot = Plot.marks([
      Plot.ruleY([0]),
      Plot.areaY(data, { x: (d) => new Date(d.date), y: 'amount', fill: 'name', opacity: 0.5 }),
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
