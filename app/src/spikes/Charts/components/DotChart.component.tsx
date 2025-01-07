import { useEffect, useRef } from 'react'

import * as Plot from '@observablehq/plot'
import twColors from 'tailwindcss/colors'

export interface DotChartProps {
  width: number
  height: number
  data: Plot.Data
  interval?: Plot.Interval
  color?: string
}

export function DotChart({
  width,
  height,
  data,
  interval,
  color = twColors.violet[700],
}: DotChartProps): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const plot = Plot.marks([
      Plot.ruleY([0]),
      Plot.dotY(data, { x: (d) => new Date(d.date), y: 'amount', fill: color, interval }),
    ]).plot({
      width,
      height,
      marginLeft: 50,
      y: { grid: true },
    })

    containerRef.current?.append(plot)
    return (): void => plot.remove()
  }, [color, data, height, interval, width])

  return <div ref={containerRef} className="h-full w-full" />
}
