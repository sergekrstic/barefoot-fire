import { useEffect, useMemo } from 'react'

import { Header, ScenarioBudget, ScenarioChart, ScenarioGraph, TimelineScrubber } from 'components'
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
  const plotData = useAppStore((state) => state.plotData)
  const selectedBudget = useAppStore((state) => state.selectedBudget)
  const selection = useAppStore((state) => state.selection)
  const setSelection = useAppStore((state) => state.setSelection)

  useEffect(() => {
    load({
      graphDefinition: deepCloneData(appData.graphDefinition),
      scenarioMap: deepCloneData(appData.scenarioMap),
      budgetMap: deepCloneData(appData.budgets),
    })
  }, [load])

  const processedPlotData = useMemo(() => {
    return preprocessPlotData({ data: plotData, interval: 'month', cumulative: true })
  }, [plotData])

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
                  data={processedPlotData}
                  initialSelection={initialSelection}
                  onUpdateSelection={setSelection}
                />
                <ScenarioChart data={processedPlotData} selection={selection} />
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
