import { useEffect, useRef } from 'react'

import * as Plot from '@observablehq/plot'
// @ts-expect-error - htl is not typed
import * as htl from 'htl'
import moment from 'moment'
import twColors from 'tailwindcss/colors'
import { TimeSeriesData } from 'types'

export interface ScenarioChartV2Props {
  width: number
  height: number
  data: TimeSeriesData
  color?: string
  opacity?: number
}

export function ScenarioChart({
  width,
  height,
  data,
  color = twColors.violet[700],
  opacity = 0.5,
}: ScenarioChartV2Props): React.JSX.Element {
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
      Plot.areaY(data, { x: (d) => new Date(d.date), y: 'amount', fill: 'url(#gradient)', opacity }),
      Plot.lineY(data, {
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
  }, [color, data, height, opacity, width])

  return <div ref={containerRef} className="h-full w-full" />
}
