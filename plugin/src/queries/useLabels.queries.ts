import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { LabelsApiUsersIdLabelsGetRequest } from '@fire/pocketsmith-api'
import { usePocketsmithApi } from 'hooks'

export function useListLabelsInUser(args: LabelsApiUsersIdLabelsGetRequest): UseQueryResult<string[], Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['list-labels-in-user', args],
    queryFn: async () => (await api.labels.usersIdLabelsGet(args)).data,
  })
}
