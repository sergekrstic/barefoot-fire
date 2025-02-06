import { useAppStore } from 'stores'
import { BudgetType } from 'types'

import { ScenarioBudgetItem as ScenarioBudgetItemComponent } from './ScenarioBudgetItem.component'

export interface ScenarioBudgetItemProps {
  id: string
  type: BudgetType
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
      onAddBudget={(type) => {
        actions.addBudget(scenarioId, budget.id, type)
        actions.calculateScenarioBudgetRollup(scenarioId)
        actions.refreshChart()
      }}
      onUpdateBudget={(newBudget) => {
        actions.updateBudget(budget.id, newBudget)
        actions.calculateScenarioBudgetRollup(scenarioId)
        actions.refreshChart()
      }}
      onDeleteBudget={() => {
        actions.deleteBudget(scenarioId, budget.id)
        actions.calculateScenarioBudgetRollup(scenarioId)
        actions.refreshChart()
      }}
    />
  )
}
