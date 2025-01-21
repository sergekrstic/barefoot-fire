import { useAppStore } from 'stores'

import { ScenarioBudgetItem as ScenarioBudgetItemComponent } from './ScenarioBudgetItem.component'

export interface ScenarioBudgetItemProps {
  id: string
  type: 'parent' | 'leaf'
}

export function ScenarioBudgetItem({ id, type }: ScenarioBudgetItemProps): React.JSX.Element {
  const budget = useAppStore((state) => state.budgetMap[id])
  const updateBudget = useAppStore((state) => state.updateBudget)

  // console.log({ budget })

  return (
    <ScenarioBudgetItemComponent
      type={type}
      budget={budget}
      onUpdateName={(name) => updateBudget(budget.id, { name })}
      onUpdateAmount={(amount) => updateBudget(budget.id, { amount })}
    />
  )
}
