import { memo } from 'react'
import { useGetBudgetSummaryForUser } from 'queries'
import { USER_ID } from 'BarefootFire.defaults'

export const BudgetSummary = memo(function BudgetSummary(): React.JSX.Element {
  const { data: budgets, isPending } = useGetBudgetSummaryForUser({
    id: USER_ID,
    period: 'months',
    interval: 1,
    startDate: '2024-01-01',
    endDate: '2024-12-31',
  })

  if (isPending) return <p>Loading...</p>

  if (!budgets) return <p>No budgets found</p>

  console.log(budgets)

  return <div>Budget Summary</div>
})
