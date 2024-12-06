import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query'
import {
  BudgetAnalysisPackage,
  BudgetingApiUsersIdBudgetSummaryGetRequest,
  BudgetingApiUsersIdForecastCacheDeleteRequest,
  BudgetingApiUsersIdTrendAnalysisGetRequest,
  Category,
} from '@fire/pocketsmith-api'

import { usePocketsmithApi } from 'hooks'
import { USER_ID } from '../BarefootFire.defaults'

export type BudgetMap = Record<number, BudgetAnalysisPackage>

export interface BudgetsData {
  rootBudgets: BudgetAnalysisPackage[]
  categories: Category[]
  budgetMap: BudgetMap
}

export function useListBudgetsInUser(): UseQueryResult<BudgetsData, Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['budget-list-in-user'],
    queryFn: async () => {
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

export function useGetBudgetSummaryForUser(
  args: BudgetingApiUsersIdBudgetSummaryGetRequest,
): UseQueryResult<BudgetAnalysisPackage, Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['budget-summary'],
    queryFn: async () => (await api.budgeting.usersIdBudgetSummaryGet(args)).data,
  })
}

export function useGetTrendAnalysisForUser(
  args: BudgetingApiUsersIdTrendAnalysisGetRequest,
): UseQueryResult<BudgetAnalysisPackage, Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['budget-trend-analysis'],
    queryFn: async () => (await api.budgeting.usersIdTrendAnalysisGet(args)).data,
  })
}

// Todo: test this function
export function useDeleteForecastCacheForUser(
  args: BudgetingApiUsersIdForecastCacheDeleteRequest,
): UseMutationResult<void, Error, BudgetingApiUsersIdForecastCacheDeleteRequest, unknown> {
  const api = usePocketsmithApi()
  // const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['create-event-in-scenario', args],
    mutationFn: async () => (await api.budgeting.usersIdForecastCacheDelete(args)).data,
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ['get-institution', id] })
    },
  })
}
