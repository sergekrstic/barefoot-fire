import { useAppStore } from 'stores'

import { ScenarioBudget as ScenarioBudgetComponent } from './ScenarioBudget.component'

export function ScenarioBudget(): React.JSX.Element {
  const selectedScenarioId = useAppStore((state) => state.selectedScenarioId)
  const selectedScenario = useAppStore((state) => state.scenarioMap[selectedScenarioId])
  const addScenario = useAppStore((state) => state.addScenario)
  const updateScenarioName = useAppStore((state) => state.updateScenarioName)

  return (
    <ScenarioBudgetComponent
      scenario={selectedScenario}
      onAddBranch={() => addScenario(selectedScenarioId)}
      onUpdateScenarioName={(value) => updateScenarioName(selectedScenario.id, value)}
    />
  )
}
