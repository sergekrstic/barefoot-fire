import { useEffect, useRef } from 'react'

import * as Plot from '@observablehq/plot'
import twColors from 'tailwindcss/colors'

export interface AreaChartProps {
  width: number
  height: number
  data: Plot.Data
  color?: string
  opacity?: number
}

export function AreaChart({
  width,
  height,
  data,
  color = twColors.violet[700],
  opacity,
}: AreaChartProps): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const plot = Plot.marks([
      Plot.ruleY([0]),
      Plot.areaY(data, { x: (d) => new Date(d.date), y: 'amount', fill: color, opacity }),
    ]).plot({ width, height, marginLeft: 50, y: { grid: true } })

    containerRef.current?.append(plot)
    return (): void => plot.remove()
  }, [color, data, height, opacity, width])

  return <div ref={containerRef} className="h-full w-full" />
}
