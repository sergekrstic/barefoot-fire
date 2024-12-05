import { memo } from 'react'
import { useGetTrendAnalysisForUser } from 'queries'

export const BudgetTrendAnalysis = memo(function BudgetTrendAnalysis(): JSX.Element {
  const { data: budgets, isPending } = useGetTrendAnalysisForUser()

  if (isPending) return <p>Loading...</p>

  if (!budgets) return <p>No budgets found</p>

  console.log(budgets)

  return <div>Budget Trend Analysis</div>
})
