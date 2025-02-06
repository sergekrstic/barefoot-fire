import { useAppStore } from 'stores'

import { ScenarioBudgetItem as ScenarioBudgetItemComponent } from './ScenarioBudgetItem.component'

export interface ScenarioBudgetItemProps {
  id: string
  type: 'group' | 'item'
  depth: number
  expanded: boolean
}

export function ScenarioBudgetItem({ id, type, depth, expanded }: ScenarioBudgetItemProps): React.JSX.Element {
  const scenarioId = useAppStore((state) => state.ui.selectedScenarioId)
  const budget = useAppStore((state) => state.data.budgetMap[id])
  const actions = useAppStore((state) => state.actions)

  return (
    <ScenarioBudgetItemComponent
      type={type}
      depth={depth}
      expanded={expanded}
      budget={budget}
      onAddItem={() => {
        actions.addBudget(scenarioId, budget.id)
        actions.refreshChart()
      }}
      onUpdateBudget={(newBudget) => {
        actions.updateBudget(budget.id, newBudget)
        actions.calculateScenarioBudgetRollup(scenarioId)
        actions.refreshChart()
      }}
      onDelete={() => {
        actions.deleteBudget(scenarioId, budget.id)
        actions.refreshChart()
      }}
    />
  )
}
