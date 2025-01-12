import { useEffect, useRef } from 'react'

import * as Plot from '@observablehq/plot'
import { chartColors } from 'config'
import moment from 'moment'
import twColors from 'tailwindcss/colors'
import { TimeSeriesData } from 'types'

import { Periods } from '@fire/forecast-engine'

export interface DifferenceChartProps {
  width: number
  height: number
  timeseries: TimeSeriesData
  periods: Periods
}

export function DifferenceChart({ width, height, timeseries, periods }: DifferenceChartProps): React.JSX.Element {
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
        fill: twColors.slate[500],
        stroke: twColors.slate[950],
        dx: 1,
        dy: -17,
      }),
      Plot.differenceY(
        timeseries,
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
      Plot.lineY(timeseries, {
        x: (d) => new Date(d.date),
        y: 'amount',
        stroke: (d) => (d.name === 'highlighted' ? chartColors.primaryLight : chartColors.secondary),
        marker: 'dot',
        channels: { amount: { label: '', value: 'amount' }, date: { label: '', value: 'date' } },
        tip: {
          stroke: twColors.slate[700],
          fill: twColors.slate[800],
          fillOpacity: 0.9,
          format: {
            x: false,
            y: false,
            z: false,
            amount: (d) => d.toLocaleString('en-AU', { style: 'currency', currency: 'AUD' }),
            date: (d) => moment(d).format('D MMMM, YYYY'),
          },
        },
      }),
    ]).plot({
      width,
      height,
      marginLeft: 50,
      y: { grid: true },
    })

    containerRef.current?.append(plot)
    return (): void => plot.remove()
  }, [timeseries, height, width, periods])

  return <div ref={containerRef} className="h-full w-full" />
}
