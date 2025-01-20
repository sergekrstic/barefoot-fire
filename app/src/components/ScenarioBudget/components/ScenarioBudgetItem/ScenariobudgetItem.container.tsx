import { useAppStore } from 'stores'
import { BudgetItem } from 'types'

export interface ScenarioBudgetItemProps {
  type: 'parent' | 'leaf'
  item: BudgetItem
}

export function ScenarioBudgetItem({ type, item }: ScenarioBudgetItemProps): React.JSX.Element {
  const budget = useAppStore((state) => state.budgetMap[item.id])

  // Todo: figure out how to render the budget item using global state
  console.log('ScenarioBudgetItem render', { type, budget })

  return <div>ScenarioBudgetItem</div>
}
