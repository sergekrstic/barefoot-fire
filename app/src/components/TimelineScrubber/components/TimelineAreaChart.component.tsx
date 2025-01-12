import { useEffect, useRef } from 'react'

import * as Plot from '@observablehq/plot'
import { chartColors } from 'config'

export interface TimelineAreaChartProps {
  width: number
  height: number
  data?: Plot.Data
}

export function TimelineAreaChart({ width, height, data }: TimelineAreaChartProps): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const plot = Plot.marks([
      Plot.ruleY([0]),
      Plot.areaY(data, { x: (d) => new Date(d.date), y: 'amount', fill: chartColors.primary, opacity: 0.5 }),
      Plot.lineY(data, { x: (d) => new Date(d.date), y: 'amount', stroke: chartColors.primary }),
    ]).plot({ width, height, marginLeft: 0, marginRight: 0, marginTop: 16, y: { axis: null } })

    containerRef.current?.append(plot)
    return (): void => plot.remove()
  }, [data, height, width])

  return <div ref={containerRef} className="h-full w-full" />
}
