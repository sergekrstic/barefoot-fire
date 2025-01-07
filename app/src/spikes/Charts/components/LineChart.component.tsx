import { useEffect, useRef } from 'react'

import * as Plot from '@observablehq/plot'
import twColors from 'tailwindcss/colors'

export interface LineChartProps {
  width: number
  height: number
  data: Plot.Data
  color?: string
  smooth?: boolean
}

export function LineChart({
  width,
  height,
  data,
  color = twColors.violet[700],
  smooth = false,
}: LineChartProps): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const plot = Plot.marks([
      Plot.ruleY([0]),
      Plot.lineY(data, {
        x: (d) => new Date(d.date),
        y: 'amount',
        stroke: color,
        curve: smooth ? 'natural' : undefined,
      }),
    ]).plot({
      width,
      height,
      marginLeft: 50,
      y: { grid: true },
    })

    containerRef.current?.append(plot)
    return (): void => plot.remove()
  }, [color, data, height, smooth, width])

  return <div ref={containerRef} className="h-full w-full" />
}

// "publish:storybook": "pnpm build-storybook && tsx scripts/modify-build-urls && rm -rf ../assets && cp -r storybook-static/* ../"

// quantitative, ordinal, temporal, nominal
