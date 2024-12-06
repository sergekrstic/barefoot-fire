import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query'
import { CategoryRule, CategoryRulesApiCategoriesIdCategoryRulesPostRequest } from '@fire/pocketsmith-api'

import { usePocketsmithApi } from 'hooks'
import { USER_ID } from '../BarefootFire.defaults'

export function useListCategoryRulesInUser(): UseQueryResult<CategoryRule[], Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['category-rules'],
    queryFn: async () => (await api.categoryRules.usersIdCategoryRulesGet({ id: USER_ID })).data,
  })
}

// Todo: test this function
export function useCreateCategoryRuleInUser(
  args: CategoryRulesApiCategoriesIdCategoryRulesPostRequest,
): UseMutationResult<CategoryRule, Error, CategoryRulesApiCategoriesIdCategoryRulesPostRequest, unknown> {
  const api = usePocketsmithApi()
  // const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['create-category-rule-in-user', args],
    mutationFn: async () => (await api.categoryRules.categoriesIdCategoryRulesPost(args)).data,
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ['get-institution', id] })
    },
  })
}
