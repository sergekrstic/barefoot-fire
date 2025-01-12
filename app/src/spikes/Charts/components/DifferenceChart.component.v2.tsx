import { useEffect, useRef } from 'react'

import * as Plot from '@observablehq/plot'

export interface DifferenceChartV2Props {
  width: number
  height: number
  data: Plot.Data
  primaryColor?: string
  secondaryColor?: string
}

export function DifferenceChartV2({
  width,
  height,
  data,
  primaryColor,
  secondaryColor,
}: DifferenceChartV2Props): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const plot = Plot.marks([
      Plot.ruleY([0]),
      // Plot.differenceY(data, {
      //   x: (d) => new Date(d.date),
      //   y: 'amount',
      //   positiveFill: 'green',
      //   negativeFill: 'red',
      //   fillOpacity: 0.3,
      // }),
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
            positiveFill: secondaryColor || 'green',
            negativeFill: primaryColor || 'red',
            fillOpacity: 0.3,
          },
        ),
      ),
      Plot.lineY(data, {
        x: (d) => new Date(d.date),
        y: 'amount',
        stroke: (d) => (d.name === 'highlighted' ? primaryColor : secondaryColor),
        // tip: true,
      }),
    ]).plot({
      width,
      height,
      marginLeft: 50,
      y: { grid: true },
    })

    containerRef.current?.append(plot)
    return (): void => plot.remove()
  }, [data, height, primaryColor, secondaryColor, width])

  return <div ref={containerRef} className="h-full w-full" />
}
