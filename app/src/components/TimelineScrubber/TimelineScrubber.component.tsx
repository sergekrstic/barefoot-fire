import * as Plot from '@observablehq/plot'
import { ResponsiveContainer } from 'components'
import { Selection } from 'types'

import { TimelineAreaChart, TimelineDifferenceChart, TimelineSelector } from './components'

export interface TimelineScrubberProps {
  type: 'area' | 'difference'
  data?: Plot.Data
  initialSelection?: Selection
  onUpdateSelection?: (selection: Selection) => void
}

export function TimelineScrubber({
  data,
  type,
  initialSelection,
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
        <TimelineSelector
          initialSelection={initialSelection}
          onUpdateSelection={onUpdateSelection}
          disabled={disabled}
        />
      </div>
    </div>
  )
}
