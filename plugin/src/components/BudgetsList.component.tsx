import { memo } from 'react'
import { BudgetAnalysisPackage, Category } from '@fire/pocketsmith-api'

import { CollapsibleTree } from 'components'
import { useBudgets } from 'queries'

export const BudgetsList = memo(function BudgetsList(): JSX.Element {
  const { data: budgets, isLoading } = useBudgets()

  const rootBudgets = budgets?.filter((budget) => !budget.category?.parent_id)
  const categories = rootBudgets?.map((budget) => budget.category as Category) || []
  const budgetMap =
    budgets?.reduce((acc, budget) => {
      if (!budget.category) return acc
      acc[budget.category.id!] = budget
      return acc
    }, {} as BudgetMap) || {}

  if (isLoading) return <p>Loading...</p>

  if (!rootBudgets) return <p>No budgets found</p>

  return (
    <CollapsibleTree
      tree={categories}
      context={budgetMap}
      renderCollapsibleItemContent={(item: Category, budgetMap: BudgetMap) => <div>{item.title}</div>}
      renderLeafItemContent={(item: Category, budgetMap: BudgetMap) => (
        <div className="fire-section-item">
          <div>{item.title}</div>
          <div>{getForecastAmount(budgetMap[item.id!])}</div>
        </div>
      )}
    />
  )
})

type BudgetMap = Record<number, BudgetAnalysisPackage>

function getForecastAmount(budget: BudgetAnalysisPackage): number | undefined {
  if (!budget) return undefined
  if (budget.income) return budget.income.total_forecast_amount
  if (budget.expense) return budget.expense.total_forecast_amount
  return undefined
}
