import { memo } from 'react'
import { useBudgetSummary } from 'queries'

export const BudgetSummary = memo(function BudgetSummary(): JSX.Element {
  const { data: budgets, isPending } = useBudgetSummary()

  if (isPending) return <p>Loading...</p>

  if (!budgets) return <p>No budgets found</p>

  console.log(budgets)

  return <div>Budget Summary</div>
})
