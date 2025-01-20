import { useAppStore } from 'stores'

import { ScenarioBudget as ScenarioBudgetComponent } from './ScenarioBudget.component'

export function ScenarioBudget(): React.JSX.Element {
  const selectedScenarioId = useAppStore((state) => state.selectedScenarioId)
  const selectedBudget = useAppStore((state) => (selectedScenarioId ? state.budgetForest[selectedScenarioId] : null))

  return <ScenarioBudgetComponent budgetTree={selectedBudget} />
}
