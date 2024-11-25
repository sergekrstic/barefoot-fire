import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { CategoryRule } from '@fire/pocketsmith-api'

import { USER_ID } from '../BarefootFire.defaults'
import { usePocketsmithApi } from '../hooks/usePocketsmithApi.hook'

export function useCategoryRules(): UseQueryResult<CategoryRule[], Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['category-rules'],
    queryFn: async () => {
      if (!api) throw new Error('No API key provided')
      return (await api.categoryRules.usersIdCategoryRulesGet({ id: USER_ID })).data
    },
  })
}
