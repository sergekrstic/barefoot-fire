import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query'
import {
  Account,
  AccountsApiAccountsIdDeleteRequest,
  AccountsApiAccountsIdGetRequest,
  AccountsApiAccountsIdPutRequest,
  AccountsApiInstitutionsIdAccountsGetRequest,
  AccountsApiUsersIdAccountsGetRequest,
  AccountsApiUsersIdAccountsPostRequest,
} from '@fire/pocketsmith-api'

import { usePocketsmithApi } from 'hooks'

// Todo: test this function
export function useGetAccount({ id }: AccountsApiAccountsIdGetRequest): UseQueryResult<Account, Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['get-account', id],
    queryFn: async () => {
      if (!api) throw new Error('No API key provided')
      return (await api.accounts.accountsIdGet({ id })).data
    },
  })
}

// Todo: test this function
export function useUpdateAccount(
  args: AccountsApiAccountsIdPutRequest,
): UseMutationResult<Account, Error, AccountsApiAccountsIdPutRequest, unknown> {
  const api = usePocketsmithApi()
  // const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['update-account', args],
    mutationFn: async () => {
      if (!api) throw new Error('No API key provided')
      return (await api.accounts.accountsIdPut(args)).data
    },
    onSuccess: () => {
      // Todo: invalidate the query
      // queryClient.invalidateQueries({ queryKey: ['get-institution', id] })
    },
  })
}

// Todo: test this function
export function useDeleteAccount(
  args: AccountsApiAccountsIdDeleteRequest,
): UseMutationResult<void, Error, AccountsApiAccountsIdDeleteRequest, unknown> {
  const api = usePocketsmithApi()
  // const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['delete-account', args],
    mutationFn: async () => {
      if (!api) throw new Error('No API key provided')
      return (await api.accounts.accountsIdDelete(args)).data
    },
    onSuccess: () => {
      // Todo: invalidate the query
      // queryClient.invalidateQueries({ queryKey: ['get-institution', id] })
    },
  })
}

// Todo: test this function
export function useListAccountsInUser(args: AccountsApiUsersIdAccountsGetRequest): UseQueryResult<Account[], Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['list-accounts-in-user', args],
    queryFn: async () => {
      if (!api) throw new Error('No API key provided')
      return (await api.accounts.usersIdAccountsGet(args)).data
    },
  })
}

// Todo: test this function
export function useUpdateAccountsDisplayOrder(
  args: AccountsApiUsersIdAccountsPostRequest,
): UseMutationResult<Account[], Error, AccountsApiUsersIdAccountsPostRequest, unknown> {
  const api = usePocketsmithApi()
  // const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['update-accounts-display-order', args],
    mutationFn: async () => {
      if (!api) throw new Error('No API key provided')
      return (await api.accounts.usersIdAccountsPut(args)).data
    },
    onSuccess: () => {
      // Todo: invalidate the query
      // queryClient.invalidateQueries({ queryKey: ['get-institution', id] })
    },
  })
}

// Todo: useCreateAccountInUser

export function useListAccountsInInstitution(
  args: AccountsApiInstitutionsIdAccountsGetRequest,
): UseQueryResult<Account[], Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['list-accounts', args],
    queryFn: async () => {
      if (!api) throw new Error('No API key provided')
      return (await api.accounts.institutionsIdAccountsGet(args)).data
    },
  })
}
