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
      onUpdateName={(name) => {
        actions.updateBudget(budget.id, { name })
        actions.refreshChart()
      }}
      onUpdateAmount={(amount) => {
        actions.updateBudget(budget.id, { amount })
        actions.refreshChart()
      }}
      onDelete={() => {
        actions.deleteBudget(scenarioId, budget.id)
        actions.refreshChart()
      }}
    />
  )
}
