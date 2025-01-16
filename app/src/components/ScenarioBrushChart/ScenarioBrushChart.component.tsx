import { useMemo } from 'react'

import { ScenarioChart, TimelineScrubber } from 'components'
import moment from 'moment'
import { useAppStore } from 'stores'
import { Selection } from 'types'
import { preprocessPlotData } from 'utils'

const initialSelection: Selection = [0, 100]

export function ScenarioBrushChart(): React.JSX.Element {
  const selection = useAppStore((state) => state.selection)
  const setSelection = useAppStore((state) => state.setSelection)
  const scenarioStartEvents = useAppStore((state) => state.scenarioStartEvents)
  const highlightedPlotData = useAppStore((state) => state.highlightedPlotData)
  const pinnedPlotData = useAppStore((state) => state.pinnedPlotData)

  const processedPlotData = useMemo(() => {
    const cumulative = true
    const interval = 'month'
    const processedHighlighted = preprocessPlotData({ data: highlightedPlotData, interval, cumulative })
    const processedPinned = pinnedPlotData ? preprocessPlotData({ data: pinnedPlotData, interval, cumulative }) : []
    const processedTimeseries = [...processedHighlighted, ...processedPinned].sort((a, b) =>
      moment(a.date).diff(b.date),
    )
    return processedTimeseries
  }, [highlightedPlotData, pinnedPlotData])

  return (
    <>
      <TimelineScrubber
        type={pinnedPlotData ? 'difference' : 'area'}
        data={processedPlotData}
        initialSelection={initialSelection}
        onUpdateSelection={setSelection}
      />
      <ScenarioChart
        type={pinnedPlotData ? 'difference' : 'area'}
        timeseries={processedPlotData}
        scenarioEvents={scenarioStartEvents}
        selection={selection}
      />
    </>
  )
}
