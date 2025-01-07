import { useMemo } from 'react'

import { Header, ScenarioBudget, ScenarioChartV2, ScenarioGraph, TimelineScrubber } from 'components'
import { preprocessPlotData } from 'utils'

import { appData } from './App.data'

export function App(): React.JSX.Element {
  const plotData = useMemo(() => {
    return preprocessPlotData({ data: appData.plot, interval: 'month', cumulative: true })
  }, [])

  return (
    <div className="h-screen w-screen bg-slate-950 text-slate-500">
      <Header />
      <div className="flex h-[calc(100vh-45px)] w-full flex-row">
        <div className="flex h-full w-3/4 flex-col">
          <ScenarioGraph data={appData.graph} />
          <TimelineScrubber data={plotData} initialSelection={[0, 100]} />
          <ScenarioChartV2 data={plotData} />
        </div>
        <div className="flex h-full w-1/4">
          <ScenarioBudget />
        </div>
      </div>
    </div>
  )
}
