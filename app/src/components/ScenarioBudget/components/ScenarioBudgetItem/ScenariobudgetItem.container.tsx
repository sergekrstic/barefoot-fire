import { useAppStore } from 'stores'

import { ScenarioBudgetItem as ScenarioBudgetItemComponent } from './ScenarioBudgetItem.component'

export interface ScenarioBudgetItemProps {
  id: string
  type: 'parent' | 'leaf'
}

export function ScenarioBudgetItem({ id, type }: ScenarioBudgetItemProps): React.JSX.Element {
  const budget = useAppStore((state) => state.budgetMap[id])
  const updateBudgetName = useAppStore((state) => state.updateBudgetName)
  const updateBudgetAmount = useAppStore((state) => state.updateBudgetAmount)

  return (
    <ScenarioBudgetItemComponent
      type={type}
      budget={budget}
      onNameChange={(name) => updateBudgetName(budget.id, name)}
      onAmountChange={(amount) => updateBudgetAmount(budget.id, amount)}
    />
  )
}
