import {
  Transaction,
  TransactionsApiAccountsIdTransactionsGetRequest,
  TransactionsApiCategoriesIdTransactionsGetRequest,
  TransactionsApiTransactionAccountsIdTransactionsGetRequest,
  TransactionsApiTransactionAccountsIdTransactionsPostRequest,
  TransactionsApiTransactionsIdDeleteRequest,
  TransactionsApiTransactionsIdGetRequest,
  TransactionsApiTransactionsIdPutRequest,
  TransactionsApiUsersIdTransactionsGetRequest,
} from '@fire/pocketsmith-api'
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query'
import { usePocketsmithApi } from 'hooks'

// Todo: test this function
export function useGetTransaction(args: TransactionsApiTransactionsIdGetRequest): UseQueryResult<Transaction, Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['get-transaction', args],
    queryFn: async () => (await api.transactions.transactionsIdGet(args)).data,
  })
}

// Todo: test this function
export function useUpdateTransaction(
  args: TransactionsApiTransactionsIdPutRequest,
): UseMutationResult<Transaction, Error, TransactionsApiTransactionsIdPutRequest, unknown> {
  const api = usePocketsmithApi()
  // const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['update-transaction', args],
    mutationFn: async () => (await api.transactions.transactionsIdPut(args)).data,
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ['get-institution', id] })
    },
  })
}

// Todo: test this function
export function useDeleteTransaction(
  args: TransactionsApiTransactionsIdDeleteRequest,
): UseMutationResult<void, Error, TransactionsApiTransactionsIdDeleteRequest, unknown> {
  const api = usePocketsmithApi()
  // const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['delete-transaction', args],
    mutationFn: async () => (await api.transactions.transactionsIdDelete(args)).data,
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ['get-institution', id] })
    },
  })
}

// Todo: test this function
export function useListTransactionsInUser(
  args: TransactionsApiUsersIdTransactionsGetRequest,
): UseQueryResult<Transaction[], Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['list-transactions-in-user', args],
    queryFn: async () => (await api.transactions.usersIdTransactionsGet(args)).data,
  })
}

// Todo: test this function
export function useListTransactionsInAccount(
  args: TransactionsApiAccountsIdTransactionsGetRequest,
): UseQueryResult<Transaction[], Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['list-transactions-in-account', args],
    queryFn: async () => (await api.transactions.accountsIdTransactionsGet(args)).data,
  })
}

// Todo: test this function
export function useListTransactionsInCategory(
  args: TransactionsApiCategoriesIdTransactionsGetRequest,
): UseQueryResult<Transaction[], Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['list-transactions-in-category', args],
    queryFn: async () => (await api.transactions.categoriesIdTransactionsGet(args)).data,
  })
}

// Todo: test this function
export function useListTransactionsInTransactionAccount(
  args: TransactionsApiTransactionAccountsIdTransactionsGetRequest,
): UseQueryResult<Transaction[], Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['list-transactions-in-category', args],
    queryFn: async () => (await api.transactions.transactionAccountsIdTransactionsGet(args)).data,
  })
}

// Todo: test this function
export function useCreateTransactionInTransactionAccount(
  args: TransactionsApiTransactionAccountsIdTransactionsPostRequest,
): UseMutationResult<Transaction, Error, TransactionsApiTransactionAccountsIdTransactionsPostRequest, unknown> {
  const api = usePocketsmithApi()
  // const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['update-transaction-account', args],
    mutationFn: async () => (await api.transactions.transactionAccountsIdTransactionsPost(args)).data,
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ['get-institution', id] })
    },
  })
}
