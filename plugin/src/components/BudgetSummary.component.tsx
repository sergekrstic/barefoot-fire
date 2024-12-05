import { memo } from 'react'
import { useGetBudgetSummaryForUser } from 'queries'

export const BudgetSummary = memo(function BudgetSummary(): JSX.Element {
  const { data: budgets, isPending } = useGetBudgetSummaryForUser()

  if (isPending) return <p>Loading...</p>

  if (!budgets) return <p>No budgets found</p>

  console.log(budgets)

  return <div>Budget Summary</div>
})
