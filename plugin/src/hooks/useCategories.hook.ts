import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { Category, PocketSmithApi } from '@fire/pocketsmith-api'
import { USER_ID } from '../BarefootFire.defaults'

export function useCategories(api: PocketSmithApi): UseQueryResult<Category[], Error> {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => (await api.categories.usersIdCategoriesGet({ id: USER_ID })).data,
  })
}
