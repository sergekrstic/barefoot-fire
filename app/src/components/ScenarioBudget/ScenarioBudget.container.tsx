import { useAppStore } from 'stores'

import { ScenarioBudget as ScenarioBudgetComponent } from './ScenarioBudget.component'

export function ScenarioBudget(): React.JSX.Element {
  const selectedScenarioId = useAppStore((state) => state.ui.selectedScenarioId)
  const selectedScenario = useAppStore((state) => state.data.scenarioMap[selectedScenarioId])
  const actions = useAppStore((state) => state.actions)

  return (
    <ScenarioBudgetComponent
      scenario={selectedScenario}
      onAddBranch={() => actions.addScenario(selectedScenarioId)}
      onUpdateScenarioName={(value) => actions.updateScenarioName(selectedScenario.id, value)}
      onUpdateScenarioStartDate={(value) => {
        actions.updateScenarioStartDate(selectedScenario.id, value)
        actions.refreshChart()
      }}
    />
  )
}
