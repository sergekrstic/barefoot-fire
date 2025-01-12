import { useEffect, useRef } from 'react'

import * as Plot from '@observablehq/plot'
import twColors from 'tailwindcss/colors'

export interface LineChartWithLabelledPeriodsProps {
  width: number
  height: number
  data: Plot.Data
  periods: { date: string; name: string }[]
  color?: string
  smooth?: boolean
}

export function LineChartWithLabelledPeriods({
  width,
  height,
  data,
  periods,
  color = twColors.violet[700],
  smooth = false,
}: LineChartWithLabelledPeriodsProps): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const plot = Plot.marks([
      Plot.ruleY([0]),
      Plot.ruleX(periods, {
        x: (d) => new Date(d.date),
        stroke: twColors.slate[500],
        opacity: 0.3,
      }),
      Plot.textX(periods, {
        x: (d) => new Date(d.date),
        text: (d) => d.name,
        frameAnchor: 'top',
        textAnchor: 'start',
        opacity: 0.8,
        fill: twColors.slate[500],
        dx: 5,
      }),
      Plot.lineY(data, {
        x: (d) => new Date(d.date),
        y: 'amount',
        stroke: color,
        curve: smooth ? 'natural' : undefined,
        opacity: 0.8,
      }),
    ]).plot({
      width,
      height,
      marginLeft: 50,
      y: { grid: true },
    })

    containerRef.current?.append(plot)
    return (): void => plot.remove()
  }, [color, data, height, periods, smooth, width])

  return <div ref={containerRef} className="h-full w-full" />
}
