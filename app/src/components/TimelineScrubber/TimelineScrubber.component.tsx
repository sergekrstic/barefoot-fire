import { useEffect, useRef, useState } from 'react'

import * as Plot from '@observablehq/plot'
import { ResponsiveContainer } from 'components'
import twColors from 'tailwindcss/colors'

export interface TimelineScrubberProps {
  data?: Plot.Data
  initialSelection?: [number, number]
  // selection?: [Date, Date]
}

export function TimelineScrubber({ data, initialSelection = [0, 1] }: TimelineScrubberProps): React.JSX.Element {
  // const [selection, setSelection] = useState(initialSelection)
  const [selection] = useState(initialSelection)
  const [start, end] = selection

  const handleSelectionMouseDown = (event: React.MouseEvent<HTMLDivElement>): void => {
    console.log('handleSelectionMouseDown', event)
  }

  const handleSelectionMouseMove = (event: React.MouseEvent<HTMLDivElement>): void => {
    console.log('handleSelectionMouseMove', event)
  }

  const handleSelectionMouseUp = (event: React.MouseEvent<HTMLDivElement>): void => {
    console.log('handleSelectionMouseUp', event)
  }

  return (
    <div className="relative flex h-40 w-full items-center justify-center border-y border-slate-800 bg-slate-900">
      <ResponsiveContainer>
        {({ width, height }) => <TimelineChart width={width} height={height} data={data} />}
      </ResponsiveContainer>
      {data && Array.from(data).length !== 0 && (
        <div className="absolute bottom-0 left-0 right-0 top-0 flex">
          <div className="bg-slate-800/40" style={{ width: `${start * 100}%` }}></div>
          <div className="flex grow cursor-grab border border-slate-700">
            <div
              className="w-1 cursor-col-resize bg-slate-700"
              onMouseDown={handleSelectionMouseDown}
              onMouseMove={handleSelectionMouseMove}
              onMouseUp={handleSelectionMouseUp}
            ></div>
            <div className="flex grow"></div>
            <div className="w-1 cursor-col-resize bg-slate-700"></div>
          </div>
          <div className="bg-slate-800/40" style={{ width: `${(1 - end) * 100}%` }}></div>
        </div>
      )}
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
