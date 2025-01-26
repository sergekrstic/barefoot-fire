import { useMemo } from 'react'

import { ScenarioChart, TimelineScrubber } from 'components'
import moment from 'moment'
import { useAppStore } from 'stores'
import { preprocessPlotData } from 'utils'

export function ScenarioBrushChart(): React.JSX.Element {
  const timeScrubberSelection = useAppStore((state) => state.ui.timeScrubberSelection)
  const scenarioStartEvents = useAppStore((state) => state.ui.scenarioStartEvents)
  const highlightedPlotData = useAppStore((state) => state.ui.highlightedPlotData)
  const pinnedPlotData = useAppStore((state) => state.ui.pinnedPlotData)
  const actions = useAppStore((state) => state.actions)

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
        selection={timeScrubberSelection}
        onUpdateSelection={actions.selectChartRange}
      />
      <ScenarioChart
        type={pinnedPlotData ? 'difference' : 'area'}
        timeseries={processedPlotData}
        scenarioEvents={scenarioStartEvents}
        selection={timeScrubberSelection}
      />
    </>
  )
}
