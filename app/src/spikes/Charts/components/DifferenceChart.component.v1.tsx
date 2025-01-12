import { useEffect, useRef } from 'react'

import * as Plot from '@observablehq/plot'

export interface DifferenceChartV1Props {
  width: number
  height: number
  data: Plot.Data
  color?: string
  smooth?: boolean
}

export function DifferenceChartV1({ width, height, data }: DifferenceChartV1Props): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const plot = Plot.marks([
      Plot.ruleY([0]),
      Plot.differenceY(data, {
        x: (d) => new Date(d.date),
        y: 'amount',
        positiveFill: 'green',
        negativeFill: 'red',
        fillOpacity: 0.3,
      }),
      Plot.lineY(data, {
        x: (d) => new Date(d.date),
        y: 'amount',
        stroke: 'name',
      }),
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
