import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { BudgetAnalysisPackage } from '@fire/pocketsmith-api'

import { usePocketsmithApi } from '../hooks'
import { USER_ID } from '../BarefootFire.defaults'

export function useBudgets(): UseQueryResult<BudgetAnalysisPackage[], Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['budgets'],
    queryFn: async () => {
      if (!api) throw new Error('No API key provided')
      return (await api.budgeting.usersIdBudgetGet({ id: USER_ID })).data
    },
  })
}
