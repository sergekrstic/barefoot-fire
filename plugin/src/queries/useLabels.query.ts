import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { USER_ID } from '../BarefootFire.defaults'
import { usePocketsmithApi } from '../hooks/usePocketsmithApi.hook'
// import { useUser } from './useUser.hook'

export function useLabels(): UseQueryResult<string[], Error> {
  const api = usePocketsmithApi()
  // const { data: user } = useUser()

  return useQuery({
    queryKey: ['labels'],
    queryFn: async () => {
      if (!api) throw new Error('No API key provided')
      // if (!user) return []
      // return (await api.labels.usersIdLabelsGet({ id: user.id! })).data
      return (await api.labels.usersIdLabelsGet({ id: USER_ID })).data
    },
  })
}
