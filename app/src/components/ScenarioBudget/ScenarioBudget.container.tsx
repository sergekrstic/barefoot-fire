import { useAppStore } from 'stores'

import { ScenarioBudget as ScenarioBudgetComponent } from './ScenarioBudget.component'

export function ScenarioBudget(): React.JSX.Element {
  const selectedBudget = useAppStore((state) => state.selectedBudget)

  return <ScenarioBudgetComponent budget={selectedBudget} />
}
