import { useEffect, useRef, useState } from 'react'

import * as Plot from '@observablehq/plot'
import { DragVerticalIcon } from 'assets'
import { ResponsiveContainer } from 'components'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import twColors from 'tailwindcss/colors'

export interface TimelineScrubberProps {
  data?: Plot.Data
  initialSelection?: [number, number]
  onSelectionChange?: (selection: [number, number]) => void
}

export function TimelineScrubber({
  data,
  initialSelection = [0, 100],
  onSelectionChange,
}: TimelineScrubberProps): React.JSX.Element {
  const [start, setStart] = useState(initialSelection[0])
  const [end, setEnd] = useState(initialSelection[1])

  const handleStartChange = (value: number): void => {
    if (onSelectionChange) {
      setStart(value)
      onSelectionChange([value, end])
    }
  }

  const handleEndChange = (value: number): void => {
    if (onSelectionChange) {
      setEnd(value)
      onSelectionChange([start, value])
    }
  }

  return (
    <div className="relative flex h-40 w-full items-center justify-center border-y border-slate-800 bg-slate-900">
      <ResponsiveContainer>
        {({ width, height }) => <TimelineChart width={width} height={height} data={data} />}
      </ResponsiveContainer>
      {data && Array.from(data).length !== 0 && (
        <PanelGroup className="absolute bottom-0 left-0 right-0 top-0 flex" direction="horizontal">
          {/* <Panel className="bg-slate-800/40" /> */}
          {/* <Panel className="border-r border-t border-white/10 bg-white/5 backdrop-blur-[1px]" /> */}
          {/* <Panel className="bg-gradient-to-tr from-white/5 to-white/15" /> */}
          {/* <Panel className="border-r border-t border-white/10 bg-gradient-to-tr from-white/5 to-white/10 backdrop-blur-[1px]" /> */}
          {/* <Panel className="border-r border-t border-slate-500/30 bg-gradient-to-tr from-slate-600/5 to-slate-600/20 backdrop-blur-[1px]" /> */}
          <Panel
            // Apply subtle glass effect, see: https://css.glass
            className="bg-gradient-to-tr from-slate-600/5 to-slate-600/20 backdrop-blur-[1px]"
            defaultSize={start}
            onResize={handleStartChange}
          />
          {/* <PanelResizeHandle className="w-1 bg-slate-700" /> */}
          <PanelResizeHandle className="flex w-1 flex-col items-center justify-center bg-slate-700">
            <DragVerticalIcon className="pl-[1px] text-slate-950" size={16} />
          </PanelResizeHandle>
          <Panel className="cursor-grabx border border-slate-700" minSize={0} />
          <PanelResizeHandle className="flex w-1 flex-col items-center justify-center bg-slate-700">
            <DragVerticalIcon className="pr-[1px] text-slate-950" size={16} />
          </PanelResizeHandle>
          <Panel
            // Apply subtle glass effect, see: https://css.glass
            className="bg-gradient-to-tr from-slate-600/5 to-slate-600/20 backdrop-blur-[1px]"
            defaultSize={100 - end}
            onResize={handleEndChange}
          />
        </PanelGroup>
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
