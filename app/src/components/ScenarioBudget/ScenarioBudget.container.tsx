import { useAppStore } from 'stores'
import { RollupFrequency } from 'types'

import { ScenarioBudget as ScenarioBudgetComponent } from './ScenarioBudget.component'

export function ScenarioBudget(): React.JSX.Element {
  const selectedScenarioId = useAppStore((state) => state.ui.selectedScenarioId)
  const selectedScenario = useAppStore((state) => state.data.scenarioMap[selectedScenarioId])
  const highlightedPath = useAppStore((state) => state.ui.highlightedPath)
  const rollupFrequency = useAppStore((state) => state.ui.rollupFrequency)
  const actions = useAppStore((state) => state.actions)

  return (
    <ScenarioBudgetComponent
      scenario={selectedScenario}
      rollupFrequency={rollupFrequency}
      onSelectRollupFrequency={(value) => {
        actions.selectRollupFrequency(value as RollupFrequency)
        actions.calculateScenarioBudgetRollup(selectedScenarioId)
      }}
      onAddBranch={() => {
        const newScenarioId = actions.addScenario(selectedScenarioId)
        actions.selectScenario(newScenarioId)
      }}
      onUpdateScenarioName={(value) => {
        actions.updateScenarioName(selectedScenario.id, value)
      }}
      onUpdateScenarioStartDate={(value) => {
        actions.updateScenarioStartDate(selectedScenario.id, value)
        actions.refreshChart()
      }}
      onDeleteScenario={() => {
        // Select the previous scenario before deleting the selected scenario
        const previousScenario = highlightedPath[highlightedPath.length - 2]
        actions.selectScenario(previousScenario)
        actions.deleteScenario(selectedScenario.id)
        actions.refreshChart()
      }}
      onAddBudget={(parentId, type) => {
        actions.addBudget(selectedScenarioId, parentId, type)
      }}
    />
  )
}
