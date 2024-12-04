import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { BudgetAnalysisPackage, Category } from '@fire/pocketsmith-api'

import { usePocketsmithApi } from '../hooks'
import { USER_ID } from '../BarefootFire.defaults'

export type BudgetMap = Record<number, BudgetAnalysisPackage>

export interface BudgetsData {
  rootBudgets: BudgetAnalysisPackage[]
  categories: Category[]
  budgetMap: BudgetMap
}

export function useBudgets(): UseQueryResult<BudgetsData, Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['budgets'],
    queryFn: async () => {
      if (!api) throw new Error('No API key provided')
      const budgets = (await api.budgeting.usersIdBudgetGet({ id: USER_ID })).data

      const rootBudgets = budgets?.filter((budget) => !budget.category?.parent_id)
      const categories = rootBudgets?.map((budget) => budget.category as Category) || []
      const budgetMap =
        budgets?.reduce((acc, budget) => {
          if (!budget.category) return acc
          acc[budget.category.id!] = budget
          return acc
        }, {} as BudgetMap) || {}

      return {
        rootBudgets,
        categories,
        budgetMap,
      }
    },
  })
}
