import { useAppStore } from 'stores'

import { ScenarioBudget as ScenarioBudgetComponent } from './ScenarioBudget.component'

export function ScenarioBudget(): React.JSX.Element {
  const selectedScenarioId = useAppStore((state) => state.selectedScenarioId)
  const selectedBudget = useAppStore((state) => state.scenarioMap[selectedScenarioId])
  const addScenario = useAppStore((state) => state.addScenario)

  return <ScenarioBudgetComponent budgetTree={selectedBudget} onAddBranch={addScenario} />
}
