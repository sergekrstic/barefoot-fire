import {
  Event,
  EventsApiEventsIdDeleteRequest,
  EventsApiEventsIdGetRequest,
  EventsApiEventsIdPutRequest,
  EventsApiScenariosIdEventsGetRequest,
  EventsApiScenariosIdEventsPostRequest,
  EventsApiUsersIdEventsGetRequest,
} from '@fire/pocketsmith-api'
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query'
import { usePocketsmithApi } from 'hooks'

// Todo: test this function
export function useGetEvent(args: EventsApiEventsIdGetRequest): UseQueryResult<Event, Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['get-event', args],
    queryFn: async () => (await api.events.eventsIdGet(args)).data,
  })
}

// Todo: test this function
export function useUpdateEvent(
  args: EventsApiEventsIdPutRequest,
): UseMutationResult<Event, Error, EventsApiEventsIdPutRequest, unknown> {
  const api = usePocketsmithApi()
  // const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['update-event', args],
    mutationFn: async () => (await api.events.eventsIdPut(args)).data,
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ['get-institution', id] })
    },
  })
}

// Todo: test this function
export function useDeleteEvent(
  args: EventsApiEventsIdDeleteRequest,
): UseMutationResult<void, Error, EventsApiEventsIdDeleteRequest, unknown> {
  const api = usePocketsmithApi()
  // const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['delete-event', args],
    mutationFn: async () => (await api.events.eventsIdDelete(args)).data,
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ['get-institution', id] })
    },
  })
}

// Todo: test this function
export function useListEventsInUser(args: EventsApiUsersIdEventsGetRequest): UseQueryResult<Event, Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['list-events-in-user', args],
    queryFn: async () => (await api.events.usersIdEventsGet(args)).data,
  })
}

// Todo: test this function
export function useListEventsInScenario(args: EventsApiScenariosIdEventsGetRequest): UseQueryResult<Event, Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['list-events-in-scenario', args],
    queryFn: async () => (await api.events.scenariosIdEventsGet(args)).data,
  })
}

// Todo: test this function
export function useCreateEventInScenario(
  args: EventsApiScenariosIdEventsPostRequest,
): UseMutationResult<Event, Error, EventsApiScenariosIdEventsPostRequest, unknown> {
  const api = usePocketsmithApi()
  // const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['create-event-in-scenario', args],
    mutationFn: async () => (await api.events.scenariosIdEventsPost(args)).data,
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ['get-institution', id] })
    },
  })
}
