import { useEffect, useRef } from 'react'

import * as Plot from '@observablehq/plot'
import { chartColors } from 'config'

export interface TimelineDifferenceChartProps {
  width: number
  height: number
  data?: Plot.Data
}

export function TimelineDifferenceChart({ width, height, data }: TimelineDifferenceChartProps): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const plot = Plot.marks([
      Plot.ruleY([0]),
      Plot.differenceY(
        data,
        Plot.groupX(
          {
            y1: Plot.find((d) => d.name === 'highlighted'),
            y2: Plot.find((d) => d.name === 'pinned'),
          },
          {
            x: (d) => new Date(d.date),
            y: 'amount',
            positiveFill: chartColors.secondary,
            negativeFill: chartColors.primary,
            fillOpacity: 0.2,
          },
        ),
      ),
      Plot.lineY(data, {
        x: (d) => new Date(d.date),
        y: 'amount',
        stroke: (d) => (d.name === 'highlighted' ? chartColors.primaryLight : chartColors.secondary),
      }),
    ]).plot({ width, height, marginLeft: 0, marginRight: 0, marginTop: 16, y: { axis: null } })

    containerRef.current?.append(plot)
    return (): void => plot.remove()
  }, [data, height, width])

  return <div ref={containerRef} className="h-full w-full" />
}
