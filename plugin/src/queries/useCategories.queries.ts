import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query'
import {
  CategoriesApiCategoriesIdDeleteRequest,
  CategoriesApiCategoriesIdGetRequest,
  CategoriesApiCategoriesIdPutRequest,
  CategoriesApiUsersIdCategoriesGetRequest,
  CategoriesApiUsersIdCategoriesPostRequest,
  Category,
} from '@fire/pocketsmith-api'

import { usePocketsmithApi } from 'hooks'
import { useAuthorisedUser } from 'queries'

// Todo: test this function
export function useGetCategory(args: CategoriesApiCategoriesIdGetRequest): UseQueryResult<Category[], Error> {
  const api = usePocketsmithApi()
  const { data: user } = useAuthorisedUser()

  return useQuery({
    queryKey: ['get-category', args],
    queryFn: async () => (await api.categories.categoriesIdGet(args)).data,
    enabled: !!user,
  })
}

// Todo: test this function
export function useUpdateCategory(
  args: CategoriesApiCategoriesIdPutRequest,
): UseMutationResult<Category, Error, CategoriesApiCategoriesIdPutRequest, unknown> {
  const api = usePocketsmithApi()
  // const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['update-category', args],
    mutationFn: async () => (await api.categories.categoriesIdPut(args)).data,
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ['get-institution', id] })
    },
  })
}

// Todo: test this function
export function useDeleteCategory(
  args: CategoriesApiCategoriesIdDeleteRequest,
): UseMutationResult<void, Error, CategoriesApiCategoriesIdDeleteRequest, unknown> {
  const api = usePocketsmithApi()
  // const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['delete-category', args],
    mutationFn: async () => (await api.categories.categoriesIdDelete(args)).data,
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ['get-institution', id] })
    },
  })
}

export function useListCategoriesInUser(
  args: CategoriesApiUsersIdCategoriesGetRequest,
): UseQueryResult<Category[], Error> {
  const api = usePocketsmithApi()
  // const { data: user } = useAuthorisedUser()

  return useQuery({
    queryKey: ['list-categories-in-user', args],
    queryFn: async () => (await api.categories.usersIdCategoriesGet(args)).data,
    // enabled: !!user,
  })
}

// Todo: test this function
export function useCreateCategoryInUser(
  args: CategoriesApiUsersIdCategoriesPostRequest,
): UseMutationResult<Category, Error, CategoriesApiUsersIdCategoriesPostRequest, unknown> {
  const api = usePocketsmithApi()
  // const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['create-category-in-user', args],
    mutationFn: async () => (await api.categories.usersIdCategoriesPost(args)).data,
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ['get-institution', id] })
    },
  })
}
