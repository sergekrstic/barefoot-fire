import { BudgetPropertiesPanel, ScenarioChart, ScenarioGraph, TimelineScrubber } from './components'

export function App() {
  return (
    <div className="flex h-screen w-screen bg-emerald-200">
      <div className="flex h-full w-3/4 flex-col items-center justify-center">
        <ScenarioGraph />
        <ScenarioChart />
        <TimelineScrubber />
      </div>
      <div className="flex h-full w-1/4 items-center justify-center">
        <BudgetPropertiesPanel />
      </div>
    </div>
  )
}
