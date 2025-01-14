import { useEffect, useRef } from 'react'

import * as Plot from '@observablehq/plot'
// @ts-expect-error - htl is not typed
import * as htl from 'htl'
import twColors from 'tailwindcss/colors'
import { TimeSeriesData } from 'types'

import { Periods } from '@fire/forecast-engine'

import { createBasePlotMarks, plotBaseConfig, plotTipConfig } from './ScenarioChart.config'

export interface AreaChartProps {
  width: number
  height: number
  timeseries: TimeSeriesData
  periods: Periods
  color?: string
  opacity?: number
}

export function AreaChart({
  width,
  height,
  timeseries,
  periods,
  color = twColors.violet[700],
  opacity = 0.5,
}: AreaChartProps): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const plot = Plot.marks([
      (): SVGElement => htl.svg`<defs>
        <linearGradient id="gradient" gradientTransform="rotate(90)">
          <stop offset="20%" stop-color="${color}" stop-opacity="0.5" />
          <stop offset="100%" stop-color="${color}" stop-opacity="0" />
        </linearGradient>
      </defs>`,
      ...createBasePlotMarks(periods),
      Plot.areaY(timeseries, {
        x: (d) => new Date(d.date),
        y: 'amount',
        fill: 'url(#gradient)',
        opacity,
      }),
      Plot.lineY(timeseries, {
        x: (d) => new Date(d.date),
        y: 'amount',
        stroke: color,
        marker: 'dot',
        channels: { amount: { label: '', value: 'amount' }, date: { label: '', value: 'date' } },
        tip: plotTipConfig,
      }),
    ]).plot({ ...plotBaseConfig, width, height })

    containerRef.current?.append(plot)
    return (): void => plot.remove()
  }, [color, timeseries, height, opacity, periods, width])

  return <div ref={containerRef} className="h-full w-full" />
}
