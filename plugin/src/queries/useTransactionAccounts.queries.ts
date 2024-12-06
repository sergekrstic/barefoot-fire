import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query'

import { usePocketsmithApi } from '../hooks'
import {
  TransactionAccount,
  TransactionAccountsApiTransactionAccountsIdGetRequest,
  TransactionAccountsApiTransactionAccountsIdPutRequest,
  TransactionAccountsApiUsersIdTransactionAccountsGetRequest,
} from '@fire/pocketsmith-api'

// Todo: test this function
export function useGetTransactionAccount(
  args: TransactionAccountsApiTransactionAccountsIdGetRequest,
): UseQueryResult<TransactionAccount, Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['get-transaction-account', args],
    queryFn: async () => (await api.transactionAccounts.transactionAccountsIdGet(args)).data,
  })
}

// Todo: test this function
export function useUpdateTransactionAccount(
  args: TransactionAccountsApiTransactionAccountsIdPutRequest,
): UseMutationResult<TransactionAccount, Error, TransactionAccountsApiTransactionAccountsIdPutRequest, unknown> {
  const api = usePocketsmithApi()
  // const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['update-transaction-account', args],
    mutationFn: async () => (await api.transactionAccounts.transactionAccountsIdPut(args)).data,
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ['get-institution', id] })
    },
  })
}

// Todo: test this function
export function useListTransactionAccountsInUser(
  args: TransactionAccountsApiUsersIdTransactionAccountsGetRequest,
): UseQueryResult<TransactionAccount, Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['list-transaction-account-in-user', args],
    queryFn: async () => (await api.transactionAccounts.usersIdTransactionAccountsGet(args)).data,
  })
}
