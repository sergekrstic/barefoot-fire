import { useMutation, UseMutationResult, useQuery, useQueryClient, UseQueryResult } from '@tanstack/react-query'
import { User, UsersApiUsersIdGetRequest, UsersApiUsersIdPutRequest } from '@fire/pocketsmith-api'

import { usePocketsmithApi } from '../hooks'

export function useAuthorisedUser(): UseQueryResult<User, Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['authorised-user'],
    queryFn: async () => (await api.users.meGet()).data,
  })
}

// Todo: test this function
export function useUser({ id }: UsersApiUsersIdGetRequest): UseQueryResult<User, Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['user', id],
    queryFn: async () => (await api.users.usersIdGet({ id })).data,
  })
}

// Todo: test this function
export function useUpdateUser({
  id,
  usersIdPutRequest,
}: UsersApiUsersIdPutRequest): UseMutationResult<User, Error, UsersApiUsersIdPutRequest, unknown> {
  const api = usePocketsmithApi()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async () => (await api.users.usersIdPut({ id, usersIdPutRequest })).data,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', id] })
    },
  })
}
