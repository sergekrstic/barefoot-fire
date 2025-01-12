import { useEffect, useRef } from 'react'

import * as Plot from '@observablehq/plot'
// @ts-expect-error - htl is not typed
import * as htl from 'htl'
import moment from 'moment'
import twColors from 'tailwindcss/colors'
import { TimeSeriesData } from 'types'

import { Periods } from '@fire/forecast-engine'

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
        fill: twColors.slate[500],
        stroke: twColors.slate[950],
        dx: 1,
        dy: -17,
      }),
      Plot.areaY(timeseries, { x: (d) => new Date(d.date), y: 'amount', fill: 'url(#gradient)', opacity }),
      Plot.lineY(timeseries, {
        x: (d) => new Date(d.date),
        y: 'amount',
        stroke: color,
        marker: 'dot',
        channels: { amount: { label: '', value: 'amount' }, date: { label: '', value: 'date' } },
        tip: {
          stroke: twColors.slate[700],
          fill: twColors.slate[800],
          fillOpacity: 0.9,
          format: {
            x: false,
            y: false,
            amount: (d) => d.toLocaleString('en-AU', { style: 'currency', currency: 'AUD' }),
            date: (d) => moment(d).format('D MMMM, YYYY'),
          },
        },
      }),
    ]).plot({ width, height, marginLeft: 50, y: { grid: true } })

    containerRef.current?.append(plot)
    return (): void => plot.remove()
  }, [color, timeseries, height, opacity, periods, width])

  return <div ref={containerRef} className="h-full w-full" />
}
