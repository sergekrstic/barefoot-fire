import { memo } from 'react'
import { useGetTrendAnalysisForUser } from 'queries'
import { USER_ID } from 'BarefootFire.defaults'

export const BudgetTrendAnalysis = memo(function BudgetTrendAnalysis(): React.JSX.Element {
  const { data: budgets, isPending } = useGetTrendAnalysisForUser({
    id: USER_ID,
    period: 'months',
    interval: 1,
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    categories: '619280', // I. Salary
    scenarios: '1351127', // ANZ Group
  })

  if (isPending) return <p>Loading...</p>

  if (!budgets) return <p>No budgets found</p>

  console.log(budgets)

  return <div>Budget Trend Analysis</div>
})
