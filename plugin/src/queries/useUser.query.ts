import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { User } from '@fire/pocketsmith-api'

import { usePocketsmithApi } from '../hooks'

export function useUser(): UseQueryResult<User, Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      if (!api) throw new Error('No API key provided')
      return (await api.users.meGet()).data
    },
  })
}
