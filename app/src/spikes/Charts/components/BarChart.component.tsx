import { useEffect, useRef } from 'react'

import * as Plot from '@observablehq/plot'
import twColors from 'tailwindcss/colors'

export interface BarChartProps {
  width: number
  height: number
  data: Plot.Data
  color?: string
  interval: Plot.Interval
}

export function BarChart({
  width,
  height,
  data,
  interval,
  color = twColors.violet[700],
}: BarChartProps): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const plot = Plot.marks([
      Plot.ruleY([0]),
      Plot.rectY(data, { x: (d) => new Date(d.date), y: 'amount', interval, fill: color }),
    ]).plot({ width, height, marginLeft: 50, y: { grid: true } })

    containerRef.current?.append(plot)
    return (): void => plot.remove()
  }, [color, data, height, interval, width])

  return <div ref={containerRef} className="h-full w-full" />
}
