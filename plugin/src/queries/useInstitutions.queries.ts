import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query'
import {
  InstitutionsApiInstitutionsIdGetRequest,
  Institution,
  InstitutionsApiInstitutionsIdPutRequest,
  InstitutionsApiInstitutionsIdDeleteRequest,
  InstitutionsApiUsersIdInstitutionsPostRequest,
  InstitutionsApiUsersIdInstitutionsGetRequest,
} from '@fire/pocketsmith-api'

import { usePocketsmithApi } from 'hooks'

// Todo: test this function
export function useGetInstitution({ id }: InstitutionsApiInstitutionsIdGetRequest): UseQueryResult<Institution, Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['get-institution', id],
    queryFn: async () => (await api.institutions.institutionsIdGet({ id })).data,
  })
}

// Todo: test this function
export function useUpdateInstitution({
  id,
  institutionsIdPutRequest,
}: InstitutionsApiInstitutionsIdPutRequest): UseMutationResult<
  Institution,
  Error,
  InstitutionsApiInstitutionsIdPutRequest,
  unknown
> {
  const api = usePocketsmithApi()
  // const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['update-institution', id],
    mutationFn: async () => (await api.institutions.institutionsIdPut({ id, institutionsIdPutRequest })).data,
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ['get-institution', id] })
    },
  })
}

// Todo: test this function
export function useDeleteInstitution({
  id,
  mergeIntoInstitutionId,
}: InstitutionsApiInstitutionsIdDeleteRequest): UseMutationResult<
  void,
  Error,
  InstitutionsApiInstitutionsIdDeleteRequest,
  unknown
> {
  const api = usePocketsmithApi()
  // const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['update-institution', id],
    mutationFn: async () => (await api.institutions.institutionsIdDelete({ id, mergeIntoInstitutionId })).data,
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ['get-institution', id] })
    },
  })
}

// Todo: test this function
export function useCreateInstitutionInUser({
  id,
  usersIdInstitutionsPostRequest,
}: InstitutionsApiUsersIdInstitutionsPostRequest): UseMutationResult<
  Institution,
  Error,
  InstitutionsApiUsersIdInstitutionsPostRequest,
  unknown
> {
  const api = usePocketsmithApi()
  // const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['update-institution', id],
    mutationFn: async () =>
      (await api.institutions.usersIdInstitutionsPost({ id, usersIdInstitutionsPostRequest })).data,
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ['get-institution', id] })
    },
  })
}

// Todo: test this function
export function useListInstitutionsInUser({
  id,
}: InstitutionsApiUsersIdInstitutionsGetRequest): UseQueryResult<Institution, Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['list-institutions', id],
    queryFn: async () => (await api.institutions.usersIdInstitutionsGet({ id })).data,
  })
}
