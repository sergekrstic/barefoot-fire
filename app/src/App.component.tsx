import { useEffect, useMemo } from 'react'

import { Header, ScenarioBudget, ScenarioChart, ScenarioGraph, TimelineScrubber } from 'components'
import moment from 'moment'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { useAppStore } from 'stores'
import { Selection } from 'types'
import { deepCloneData, preprocessPlotData } from 'utils'

import { appData } from './App.data'

const initialSelection: Selection = [0, 100]

export function App(): React.JSX.Element {
  // Todo: push down state to avoid unnecessary re-renders
  // Todo: figure out how to create a Storybook decorator to handle the state management correctly
  const load = useAppStore((state) => state.load)
  const graphDefinition = useAppStore((state) => state.graphDefinition)
  const highlightedPlotData = useAppStore((state) => state.highlightedPlotData)
  const pinnedPlotData = useAppStore((state) => state.pinnedPlotData)
  const selectedBudget = useAppStore((state) => state.selectedBudget)
  const selection = useAppStore((state) => state.selection)
  const setSelection = useAppStore((state) => state.setSelection)
  const periods = useAppStore((state) => state.periods)

  useEffect(() => {
    load({
      graphDefinition: deepCloneData(appData.graphDefinition),
      scenarioMap: deepCloneData(appData.scenarioMap),
      budgetMap: deepCloneData(appData.budgets),
    })
  }, [load])

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
    <div className="h-screen w-screen bg-slate-950 text-slate-500">
      <Header />
      <div className="h-[calc(100vh-45px)]">
        <PanelGroup direction="horizontal">
          <Panel>
            <PanelGroup direction="vertical">
              <Panel>
                <ScenarioGraph data={graphDefinition} />
              </Panel>
              <PanelResizeHandle className={`border-t border-slate-800`} />
              <Panel className="flex flex-col">
                <TimelineScrubber
                  type={pinnedPlotData ? 'difference' : 'area'}
                  data={processedPlotData}
                  initialSelection={initialSelection}
                  onUpdateSelection={setSelection}
                />
                <ScenarioChart
                  type={pinnedPlotData ? 'difference' : 'area'}
                  timeseries={processedPlotData}
                  periods={periods}
                  selection={selection}
                />
              </Panel>
            </PanelGroup>
          </Panel>
          <PanelResizeHandle className={`border-l border-slate-800`} />
          <Panel defaultSize={25}>
            <ScenarioBudget budget={selectedBudget} />
          </Panel>
        </PanelGroup>
      </div>
    </div>
  )
}
