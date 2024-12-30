import { useEffect, useRef } from 'react'

import * as Plot from '@observablehq/plot'

export interface BarChartProps {
  width: number
  height: number
  data: Plot.Data
}

export function BarChart({ width, height, data }: BarChartProps): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const plot = Plot.plot({
      width,
      height,
      marginLeft: 50,
      y: { grid: true },
      marks: [
        Plot.ruleY([0]),
        Plot.rectY(
          data,
          // @ts-expect-error - TS doesn't like the object shorthand
          Plot.binX({ y: 'sum' }, { x: 'date', y: 'amount', fill: 'name', interval: 'month', cumulative: true }),
        ),
      ],
    })

    containerRef.current?.append(plot)
    return (): void => plot.remove()
  }, [data, height, width])

  return <div ref={containerRef} className="h-full w-full" />
}
