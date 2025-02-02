import { useAppStore } from 'stores'

import { ScenarioBudget as ScenarioBudgetComponent } from './ScenarioBudget.component'

export function ScenarioBudget(): React.JSX.Element {
  const selectedScenarioId = useAppStore((state) => state.ui.selectedScenarioId)
  const selectedScenario = useAppStore((state) => state.data.scenarioMap[selectedScenarioId])
  const highlightedPath = useAppStore((state) => state.ui.highlightedPath)
  const actions = useAppStore((state) => state.actions)

  console.log('highlightedPath =>', highlightedPath)

  return (
    <ScenarioBudgetComponent
      scenario={selectedScenario}
      onAddBranch={() => actions.addScenario(selectedScenarioId)}
      onUpdateScenarioName={(value) => actions.updateScenarioName(selectedScenario.id, value)}
      onUpdateScenarioStartDate={(value) => {
        actions.updateScenarioStartDate(selectedScenario.id, value)
        actions.refreshChart()
      }}
      onDeleteScenario={() => {
        // Todo: figure out how to stop reconstructing of the graph when deleting a scenario
        // Select the previous scenario before deleting the selected scenario
        const previousScenario = highlightedPath[highlightedPath.length - 2]
        actions.selectScenario(previousScenario)
        actions.deleteScenario(selectedScenario.id)
        actions.refreshChart()
      }}
    />
  )
}
