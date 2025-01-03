import { BudgetDetails, ScenarioChartV2, ScenarioGraph, TimelineScrubber } from 'components'
import { generateRandomTimeSeriesData } from 'utils'

// import { scenarioEvents } from './App.data'

export function App(): React.JSX.Element {
  const data = generateRandomTimeSeriesData()

  return (
    <div className="flex h-screen w-screen bg-slate-950 text-slate-500">
      <div className="flex h-full w-3/4 flex-col items-center justify-center">
        <ScenarioGraph />
        <TimelineScrubber data={data} initialSelection={[0.4, 0.75]} />
        <ScenarioChartV2 data={data} />
        {/* <ScenarioChartV1 scenarioEvents={scenarioEvents} /> */}
      </div>
      <div className="flex h-full w-1/4 items-center justify-center">
        <BudgetDetails />
      </div>
    </div>
  )
}
