import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { Category } from '@fire/pocketsmith-api'

import { USER_ID } from '../BarefootFire.defaults'
import { usePocketsmithApi } from '../hooks/usePocketsmithApi.hook'

export function useCategories(): UseQueryResult<Category[], Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      if (!api) throw new Error('No API key provided')
      return (await api.categories.usersIdCategoriesGet({ id: USER_ID })).data
    },
  })
}
