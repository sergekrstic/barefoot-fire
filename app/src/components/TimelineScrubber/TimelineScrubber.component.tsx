import * as Plot from '@observablehq/plot'
import { ResponsiveContainer } from 'components'
import { Selection } from 'types'

import { TimelineChart, TimelineSelector } from './components'

export interface TimelineScrubberProps {
  data?: Plot.Data
  initialSelection?: Selection
  onUpdateSelection?: (selection: Selection) => void
}

export function TimelineScrubber({
  data,
  initialSelection,
  onUpdateSelection,
}: TimelineScrubberProps): React.JSX.Element {
  const hasData = data && Array.from(data).length !== 0

  return (
    <div className="relative flex h-40 w-full items-center justify-center border-y border-slate-800 bg-slate-900">
      <ResponsiveContainer>
        {({ width, height }) => <TimelineChart width={width} height={height} data={data} />}
      </ResponsiveContainer>
      {hasData && (
        <div className="absolute bottom-0 left-0 right-0 top-0 flex">
          <TimelineSelector initialSelection={initialSelection} onUpdateSelection={onUpdateSelection} />
        </div>
      )}
    </div>
  )
}
