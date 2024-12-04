import { Fragment, memo, useState } from 'react'
import { BudgetAnalysisPackage, Category } from '@fire/pocketsmith-api'

import { ChevronDownIcon, ChevronRightIcon } from 'assets'
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

  return <BudgetTree categories={categories} budgetMap={budgetMap} level={0} />
})

type BudgetMap = Record<number, BudgetAnalysisPackage>

interface BudgetTreeProps {
  categories: Category[]
  budgetMap: BudgetMap
  level: number
}

function BudgetTree({ categories, budgetMap, level }: BudgetTreeProps): JSX.Element {
  const [showNested, setShowNested] = useState<Record<number, boolean>>({})

  const toggleNested = (id: number): void => {
    setShowNested({ ...showNested, [id]: !showNested[id] })
  }

  return (
    <Fragment>
      {categories.map((parent) => {
        const isParent = parent.children && parent.children.length > 0

        return (
          <div key={parent.id} style={{ padding: `8px 0px 0px` }}>
            {/* Display the parent */}
            {isParent && (
              <div style={{ display: 'flex', flexDirection: 'row' }} onClick={() => toggleNested(parent.id!)}>
                <div style={{ paddingLeft: `${(level - 0) * 16}px` }} />
                {showNested[parent.id!] ? <ChevronDownIcon size={16} /> : <ChevronRightIcon size={16} />}
                <div style={{ paddingLeft: '4px' }}>{parent.title}</div>
              </div>
            )}
            {/* Display the children */}
            {isParent && (
              <div style={{ display: showNested[parent.id!] ? 'block' : 'none' }}>
                {parent.children && <BudgetTree categories={parent.children} budgetMap={budgetMap} level={level + 1} />}
              </div>
            )}
            {/* Display the child */}
            {!isParent && (
              <div style={{ paddingLeft: `${(level + 1) * (16 + 4)}px` }}>
                <div className="fire-section-item">
                  <div>{parent.title}</div>
                  <div>{getForecastAmount(budgetMap[parent.id!])}</div>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </Fragment>
  )
}

function getForecastAmount(budget: BudgetAnalysisPackage): number | undefined {
  if (!budget) return undefined
  if (budget.income) return budget.income.total_forecast_amount
  if (budget.expense) return budget.expense.total_forecast_amount
  return undefined
}
