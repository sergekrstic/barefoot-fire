import { useEffect, useRef } from 'react'

import * as Plot from '@observablehq/plot'
import { ResponsiveContainer } from 'components'
import twColors from 'tailwindcss/colors'

export interface TimelineScrubberProps {
  data: Plot.Data
}

export function TimelineScrubber({ data }: TimelineScrubberProps): React.JSX.Element {
  return (
    <div className="relative flex h-40 w-full items-center justify-center border-y border-slate-800 bg-slate-900">
      <ResponsiveContainer>
        {({ width, height }) => <TimelineChart width={width} height={height} data={data} />}
      </ResponsiveContainer>
      <div className="absolute bottom-0 left-0 right-0 top-0 flex">
        <div className="w-[40%] bg-slate-800/40"></div>
        <div className="flex grow cursor-grab border border-slate-700">
          <div className="w-1 cursor-col-resize bg-slate-700"></div>
          <div className="flex grow"></div>
          <div className="w-1 cursor-col-resize bg-slate-700"></div>
        </div>
        <div className="w-[25%] bg-slate-800/40"></div>
      </div>
    </div>
  )
}

interface TimelineChartProps {
  width: number
  height: number
  data?: Plot.Data
}

function TimelineChart({ width, height, data }: TimelineChartProps): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const plot = Plot.marks([
      Plot.ruleY([0]),
      Plot.areaY(data, { x: (d) => new Date(d.date), y: 'amount', fill: twColors.amber[400], opacity: 0.5 }),
      Plot.lineY(data, { x: (d) => new Date(d.date), y: 'amount', stroke: twColors.amber[400] }),
    ]).plot({ width, height, marginLeft: 0, marginRight: 0, marginTop: 16, y: { axis: null } })

    containerRef.current?.append(plot)
    return (): void => plot.remove()
  }, [data, height, width])

  return <div ref={containerRef} className="h-full w-full" />
}
