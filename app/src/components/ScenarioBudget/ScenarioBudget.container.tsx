import { appData } from 'App.data'
import { useAppStore } from 'stores'

import { ScenarioBudget as ScenarioBudgetComponent } from './ScenarioBudget.component'

export function ScenarioBudget(): React.JSX.Element {
  const selectedBudgetId = useAppStore((state) => state.selectedBudgetId)
  const budget = selectedBudgetId ? appData.budgets[selectedBudgetId] : null

  return <ScenarioBudgetComponent budget={budget} />
}
