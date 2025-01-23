import { useEffect } from 'react'

import { Header, ScenarioBrushChart, ScenarioBudget, ScenarioGraph } from 'components'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { useAppStore } from 'stores'
import { deepCloneData } from 'utils'

import { appData } from './App.data'

export function App(): React.JSX.Element {
  const load = useAppStore((state) => state.load)

  useEffect(() => {
    load({
      scenarioGraph: deepCloneData(appData.scenarioGraph),
      scenarioMap: deepCloneData(appData.scenarioMap),
      budgetMap: deepCloneData(appData.budgetMap),
    })
  }, [load])

  return (
    <div className="h-screen w-screen bg-slate-950 text-slate-500 selection:bg-violet-600 selection:text-violet-200">
      <Header />
      <div className="h-[calc(100vh-45px)]">
        <PanelGroup direction="horizontal">
          <Panel>
            <PanelGroup direction="vertical">
              <Panel>
                <ScenarioGraph />
              </Panel>
              <PanelResizeHandle className={`border-t border-slate-800`} />
              <Panel className="flex flex-col">
                <ScenarioBrushChart />
              </Panel>
            </PanelGroup>
          </Panel>
          <PanelResizeHandle className={`border-l border-slate-800`} />
          <Panel defaultSize={25}>
            <ScenarioBudget />
          </Panel>
        </PanelGroup>
      </div>
    </div>
  )
}
