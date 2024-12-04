import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { Category } from '@fire/pocketsmith-api'

import { usePocketsmithApi } from '../hooks'
import { USER_ID } from '../BarefootFire.defaults'

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
