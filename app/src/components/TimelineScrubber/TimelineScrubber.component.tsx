import * as Plot from '@observablehq/plot'
import { ResponsiveContainer } from 'components'
import { TimeScrubberSelection } from 'types'

import { TimelineAreaChart, TimelineDifferenceChart, TimelineSelector } from './components'

export interface TimelineScrubberProps {
  type: 'area' | 'difference'
  data?: Plot.Data
  selection: TimeScrubberSelection
  onUpdateSelection?: (selection: TimeScrubberSelection) => void
}

export function TimelineScrubber({
  data,
  type,
  selection,
  onUpdateSelection,
}: TimelineScrubberProps): React.JSX.Element {
  const disabled = data && Array.from(data).length < 2

  return (
    <div className="relative h-20 bg-slate-900">
      {!disabled && (
        <ResponsiveContainer>
          {({ width, height }) =>
            type === 'area' ? (
              <TimelineAreaChart width={width} height={height} data={data} />
            ) : (
              <TimelineDifferenceChart width={width} height={height} data={data} />
            )
          }
        </ResponsiveContainer>
      )}
      <div className="absolute bottom-0 left-0 right-0 top-0">
        <TimelineSelector selection={selection} onUpdateSelection={onUpdateSelection} disabled={disabled} />
      </div>
    </div>
  )
}
