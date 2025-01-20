import { useAppStore } from 'stores'

import { ScenarioBudgetItem as ScenarioBudgetItemComponent } from './ScenarioBudgetItem.component'

export interface ScenarioBudgetItemProps {
  id: string
  type: 'parent' | 'leaf'
}

export function ScenarioBudgetItem({ id, type }: ScenarioBudgetItemProps): React.JSX.Element {
  const budget = useAppStore((state) => state.budgetMap[id])

  return <ScenarioBudgetItemComponent type={type} budget={budget} />
}
