import { useEffect, useRef } from 'react'

import * as Plot from '@observablehq/plot'

export interface LineChartProps {
  width: number
  height: number
  data: Plot.Data
}

export function LineChart({ width, height, data }: LineChartProps): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const plot = Plot.plot({
      width,
      height,
      marginLeft: 50,
      y: { grid: true },
      marks: [
        Plot.ruleY([0]),
        Plot.line(
          data,
          // @ts-expect-error - TS doesn't like the object shorthand
          Plot.binX({ y: 'sum' }, { x: 'date', y: 'amount', fill: 'name', interval: 'month', cumulative: false }),
        ),
      ],
    })

    containerRef.current?.append(plot)
    return (): void => plot.remove()
  }, [data, height, width])

  return <div ref={containerRef} className="h-full w-full" />
}
