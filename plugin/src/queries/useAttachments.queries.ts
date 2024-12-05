import {
  Attachment,
  AttachmentsApiAttachmentsIdDeleteRequest,
  AttachmentsApiAttachmentsIdGetRequest,
  AttachmentsApiAttachmentsIdPutRequest,
  AttachmentsApiTransactionsIdAttachmentsGetRequest,
  AttachmentsApiTransactionsIdAttachmentsPostRequest,
  AttachmentsApiTransactionsTransactionIdAttachmentsAttachmentIdDeleteRequest,
  AttachmentsApiUsersIdAttachmentsGetRequest,
  AttachmentsApiUsersIdAttachmentsPostRequest,
} from '@fire/pocketsmith-api'
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query'
import { usePocketsmithApi } from 'hooks'

// Todo: test this function
export function useGetAttachment(args: AttachmentsApiAttachmentsIdGetRequest): UseQueryResult<Attachment, Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['get-attachment', args],
    queryFn: async () => {
      if (!api) throw new Error('No API key provided')
      return (await api.attachments.attachmentsIdGet(args)).data
    },
  })
}

// Todo: test this function
export function useUpdateAttachment(
  args: AttachmentsApiAttachmentsIdPutRequest,
): UseMutationResult<Attachment, Error, AttachmentsApiAttachmentsIdPutRequest, unknown> {
  const api = usePocketsmithApi()
  // const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['update-attachment', args],
    mutationFn: async () => {
      if (!api) throw new Error('No API key provided')
      return (await api.attachments.attachmentsIdPut(args)).data
    },
    onSuccess: () => {
      // Todo: invalidate the query
      // queryClient.invalidateQueries({ queryKey: ['get-institution', id] })
    },
  })
}

// Todo: test this function
export function useDeleteAttachment(
  args: AttachmentsApiAttachmentsIdDeleteRequest,
): UseMutationResult<void, Error, AttachmentsApiAttachmentsIdDeleteRequest, unknown> {
  const api = usePocketsmithApi()
  // const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['delete-attachment', args],
    mutationFn: async () => {
      if (!api) throw new Error('No API key provided')
      return (await api.attachments.attachmentsIdDelete(args)).data
    },
    onSuccess: () => {
      // Todo: invalidate the query
      // queryClient.invalidateQueries({ queryKey: ['get-institution', id] })
    },
  })
}

// Todo: test this function
export function useListAttachmentsInUser(
  args: AttachmentsApiUsersIdAttachmentsGetRequest,
): UseQueryResult<Attachment[], Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['list-attachments-in-user', args],
    queryFn: async () => {
      if (!api) throw new Error('No API key provided')
      return (await api.attachments.usersIdAttachmentsGet(args)).data
    },
  })
}

// Todo: test this function
export function useCreateAttachmentInUser(
  args: AttachmentsApiUsersIdAttachmentsPostRequest,
): UseMutationResult<Attachment, Error, AttachmentsApiUsersIdAttachmentsPostRequest, unknown> {
  const api = usePocketsmithApi()
  // const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['create-attachment-in-user', args],
    mutationFn: async () => {
      if (!api) throw new Error('No API key provided')
      return (await api.attachments.usersIdAttachmentsPost(args)).data
    },
    onSuccess: () => {
      // Todo: invalidate the query
      // queryClient.invalidateQueries({ queryKey: ['get-institution', id] })
    },
  })
}

// Todo: test this function
export function useListAttachmentsInTransaction(
  args: AttachmentsApiTransactionsIdAttachmentsGetRequest,
): UseQueryResult<Attachment, Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['list-attachments-in-transaction', args],
    queryFn: async () => {
      if (!api) throw new Error('No API key provided')
      return (await api.attachments.transactionsIdAttachmentsGet(args)).data
    },
  })
}

// Todo: test this function
export function useAssignAttachmentToTransaction(
  args: AttachmentsApiTransactionsIdAttachmentsPostRequest,
): UseMutationResult<Attachment, Error, AttachmentsApiTransactionsIdAttachmentsPostRequest, unknown> {
  const api = usePocketsmithApi()
  // const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['assign-attachment-in-transaction', args],
    mutationFn: async () => {
      if (!api) throw new Error('No API key provided')
      return (await api.attachments.transactionsIdAttachmentsPost(args)).data
    },
    onSuccess: () => {
      // Todo: invalidate the query
      // queryClient.invalidateQueries({ queryKey: ['get-institution', id] })
    },
  })
}

// Todo:
export function useUnassignAttachmentInTransaction(
  args: AttachmentsApiTransactionsTransactionIdAttachmentsAttachmentIdDeleteRequest,
): UseMutationResult<
  void,
  Error,
  AttachmentsApiTransactionsTransactionIdAttachmentsAttachmentIdDeleteRequest,
  unknown
> {
  const api = usePocketsmithApi()
  // const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['unassign-attachment-in-transaction', args],
    mutationFn: async () => {
      if (!api) throw new Error('No API key provided')
      return (await api.attachments.transactionsTransactionIdAttachmentsAttachmentIdDelete(args)).data
    },
    onSuccess: () => {
      // Todo: invalidate the query
      // queryClient.invalidateQueries({ queryKey: ['get-institution', id] })
    },
  })
}
