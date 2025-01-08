import { useMemo, useState } from 'react'

import { Header, ScenarioBudget, ScenarioChart, ScenarioGraph, TimelineScrubber } from 'components'
import { Selection } from 'types'
import { preprocessPlotData } from 'utils'

import { appData } from './App.data'

const initialSelection: Selection = [0, 100]

export function App(): React.JSX.Element {
  const [selection, setSelection] = useState<Selection>(initialSelection)

  const plotData = useMemo(() => {
    return preprocessPlotData({ data: appData.plot, interval: 'month', cumulative: true })
  }, [])

  return (
    <div className="h-screen w-screen bg-slate-950 text-slate-500">
      <Header />
      <div className="flex h-[calc(100vh-45px)] w-full flex-row">
        <div className="flex h-full w-3/4 flex-col">
          <ScenarioGraph data={appData.graph} />
          <TimelineScrubber data={plotData} initialSelection={initialSelection} onUpdateSelection={setSelection} />
          <ScenarioChart data={plotData} selection={selection} />
        </div>
        <div className="flex h-full w-1/4">
          <ScenarioBudget />
        </div>
      </div>
    </div>
  )
}
