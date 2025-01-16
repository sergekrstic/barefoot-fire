import { useEffect, useRef } from 'react'

import * as Plot from '@observablehq/plot'
import { chartColors } from 'config'
import { ScenarioStartEvents, TimeSeriesData } from 'types'

import { createBasePlotMarks, plotBaseConfig, plotTipConfig } from './ScenarioChart.config'

export interface DifferenceChartProps {
  width: number
  height: number
  timeseries: TimeSeriesData
  scenarioEvents: ScenarioStartEvents
}

export function DifferenceChart({
  width,
  height,
  timeseries,
  scenarioEvents,
}: DifferenceChartProps): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const plot = Plot.marks([
      ...createBasePlotMarks(scenarioEvents),
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
        tip: plotTipConfig,
      }),
    ]).plot({ ...plotBaseConfig, width, height })

    containerRef.current?.append(plot)
    return (): void => plot.remove()
  }, [timeseries, height, width, scenarioEvents])

  return <div ref={containerRef} className="h-full w-full" />
}
