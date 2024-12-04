import { memo } from 'react'
import { useBudgets } from 'queries'

export const BudgetsList = memo(function BudgetsList(): JSX.Element {
  const { data: budgets, isLoading } = useBudgets()

  const rootBudgets = budgets?.filter((budget) => !budget.category?.parent_id)

  if (isLoading) return <p>Loading...</p>

  if (!rootBudgets) return <p>No budgets found</p>

  return (
    <>
      {rootBudgets.map((budget) => (
        <div key={budget.category?.id}>{budget.category?.title}</div>
      ))}
    </>
  )
})
