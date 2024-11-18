import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios'

import { BASE_PATH, RequestArgs, BaseAPI, RequiredError } from '../generated-api-2-refactored/shared/base'
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from '../generated-api-2-refactored/shared/common'
import { Configuration } from '../generated-api-2-refactored/shared/configuration'
import { EventsIdDeleteRequest, ScenariosIdEventsGetRequest } from '../generated-api-2-refactored/types/api.types'

/**
 * EventsApi - axios parameter creator
 * @export
 */
export const EventsApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Deletes an event by its ID.
     * @summary Delete event
     * @param {string} id The unique identifier of the event.
     * @param {'one' | 'forward' | 'all'} behaviour Whether the delete applies only to this event, to all events within the series from this event or to all events within the series.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventsIdDelete: async (
      id: string,
      behaviour: 'one' | 'forward' | 'all',
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eventsIdDelete', 'id', id)
      // verify required parameter 'behaviour' is not null or undefined
      assertParamExists('eventsIdDelete', 'behaviour', behaviour)
      const localVarPath = `/events/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: 'DELETE',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication developerKey required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Developer-Key', configuration)

      if (behaviour !== undefined) {
        localVarQueryParameter['behaviour'] = behaviour
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Gets a particular event by its ID.
     * @summary Get event
     * @param {string} id The unique identifier of the event.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventsIdGet: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eventsIdGet', 'id', id)
      const localVarPath = `/events/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication developerKey required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Developer-Key', configuration)

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Updates an event by its ID.
     * @summary Update event
     * @param {string} id The unique identifier of the event.
     * @param {EventsIdDeleteRequest} [eventsIdDeleteRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventsIdPut: async (
      id: string,
      eventsIdDeleteRequest?: EventsIdDeleteRequest,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eventsIdPut', 'id', id)
      const localVarPath = `/events/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: 'PUT',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication developerKey required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Developer-Key', configuration)

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(eventsIdDeleteRequest, localVarRequestOptions, configuration)

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Lists events belonging to a scenario by their ID.
     * @summary List events in scenario.
     * @param {number} id The unique identifier of the scenario.
     * @param {string} startDate Return the events from and including this date.
     * @param {string} endDate Return the events until and including this date.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scenariosIdEventsGet: async (
      id: number,
      startDate: string,
      endDate: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('scenariosIdEventsGet', 'id', id)
      // verify required parameter 'startDate' is not null or undefined
      assertParamExists('scenariosIdEventsGet', 'startDate', startDate)
      // verify required parameter 'endDate' is not null or undefined
      assertParamExists('scenariosIdEventsGet', 'endDate', endDate)
      const localVarPath = `/scenarios/{id}/events`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication developerKey required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Developer-Key', configuration)

      if (startDate !== undefined) {
        localVarQueryParameter['start_date'] = startDate
      }

      if (endDate !== undefined) {
        localVarQueryParameter['end_date'] = endDate
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Creates an event in a scenario by its ID.
     * @summary Create event in scenario
     * @param {number} id The unique identifier of the scenario.
     * @param {ScenariosIdEventsGetRequest} [scenariosIdEventsGetRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scenariosIdEventsPost: async (
      id: number,
      scenariosIdEventsGetRequest?: ScenariosIdEventsGetRequest,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('scenariosIdEventsPost', 'id', id)
      const localVarPath = `/scenarios/{id}/events`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication developerKey required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Developer-Key', configuration)

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        scenariosIdEventsGetRequest,
        localVarRequestOptions,
        configuration,
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Lists events belonging to a user by their ID.
     * @summary List events in user.
     * @param {number} id The unique identifier of the user.
     * @param {string} startDate Return the events from and including this date.
     * @param {string} endDate Return the events until and including this date.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersIdEventsGet: async (
      id: number,
      startDate: string,
      endDate: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('usersIdEventsGet', 'id', id)
      // verify required parameter 'startDate' is not null or undefined
      assertParamExists('usersIdEventsGet', 'startDate', startDate)
      // verify required parameter 'endDate' is not null or undefined
      assertParamExists('usersIdEventsGet', 'endDate', endDate)
      const localVarPath = `/users/{id}/events`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication developerKey required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Developer-Key', configuration)

      if (startDate !== undefined) {
        localVarQueryParameter['start_date'] = startDate
      }

      if (endDate !== undefined) {
        localVarQueryParameter['end_date'] = endDate
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * EventsApi - functional programming interface
 * @export
 */
export const EventsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = EventsApiAxiosParamCreator(configuration)
  return {
    /**
     * Deletes an event by its ID.
     * @summary Delete event
     * @param {string} id The unique identifier of the event.
     * @param {'one' | 'forward' | 'all'} behaviour Whether the delete applies only to this event, to all events within the series from this event or to all events within the series.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eventsIdDelete(
      id: string,
      behaviour: 'one' | 'forward' | 'all',
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.eventsIdDelete(id, behaviour, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Gets a particular event by its ID.
     * @summary Get event
     * @param {string} id The unique identifier of the event.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eventsIdGet(
      id: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Event>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.eventsIdGet(id, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Updates an event by its ID.
     * @summary Update event
     * @param {string} id The unique identifier of the event.
     * @param {EventsIdDeleteRequest} [eventsIdDeleteRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eventsIdPut(
      id: string,
      eventsIdDeleteRequest?: EventsIdDeleteRequest,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Event>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.eventsIdPut(id, eventsIdDeleteRequest, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Lists events belonging to a scenario by their ID.
     * @summary List events in scenario.
     * @param {number} id The unique identifier of the scenario.
     * @param {string} startDate Return the events from and including this date.
     * @param {string} endDate Return the events until and including this date.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async scenariosIdEventsGet(
      id: number,
      startDate: string,
      endDate: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Event>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.scenariosIdEventsGet(id, startDate, endDate, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Creates an event in a scenario by its ID.
     * @summary Create event in scenario
     * @param {number} id The unique identifier of the scenario.
     * @param {ScenariosIdEventsGetRequest} [scenariosIdEventsGetRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async scenariosIdEventsPost(
      id: number,
      scenariosIdEventsGetRequest?: ScenariosIdEventsGetRequest,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Event>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.scenariosIdEventsPost(
        id,
        scenariosIdEventsGetRequest,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Lists events belonging to a user by their ID.
     * @summary List events in user.
     * @param {number} id The unique identifier of the user.
     * @param {string} startDate Return the events from and including this date.
     * @param {string} endDate Return the events until and including this date.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async usersIdEventsGet(
      id: number,
      startDate: string,
      endDate: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Event>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.usersIdEventsGet(id, startDate, endDate, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * EventsApi - factory interface
 * @export
 */
export const EventsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = EventsApiFp(configuration)
  return {
    /**
     * Deletes an event by its ID.
     * @summary Delete event
     * @param {string} id The unique identifier of the event.
     * @param {'one' | 'forward' | 'all'} behaviour Whether the delete applies only to this event, to all events within the series from this event or to all events within the series.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventsIdDelete(id: string, behaviour: 'one' | 'forward' | 'all', options?: any): AxiosPromise<void> {
      return localVarFp.eventsIdDelete(id, behaviour, options).then((request) => request(axios, basePath))
    },
    /**
     * Gets a particular event by its ID.
     * @summary Get event
     * @param {string} id The unique identifier of the event.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventsIdGet(id: string, options?: any): AxiosPromise<Event> {
      return localVarFp.eventsIdGet(id, options).then((request) => request(axios, basePath))
    },
    /**
     * Updates an event by its ID.
     * @summary Update event
     * @param {string} id The unique identifier of the event.
     * @param {EventsIdDeleteRequest} [eventsIdDeleteRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventsIdPut(id: string, eventsIdDeleteRequest?: EventsIdDeleteRequest, options?: any): AxiosPromise<Event> {
      return localVarFp.eventsIdPut(id, eventsIdDeleteRequest, options).then((request) => request(axios, basePath))
    },
    /**
     * Lists events belonging to a scenario by their ID.
     * @summary List events in scenario.
     * @param {number} id The unique identifier of the scenario.
     * @param {string} startDate Return the events from and including this date.
     * @param {string} endDate Return the events until and including this date.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scenariosIdEventsGet(id: number, startDate: string, endDate: string, options?: any): AxiosPromise<Array<Event>> {
      return localVarFp
        .scenariosIdEventsGet(id, startDate, endDate, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Creates an event in a scenario by its ID.
     * @summary Create event in scenario
     * @param {number} id The unique identifier of the scenario.
     * @param {ScenariosIdEventsGetRequest} [scenariosIdEventsGetRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scenariosIdEventsPost(
      id: number,
      scenariosIdEventsGetRequest?: ScenariosIdEventsGetRequest,
      options?: any,
    ): AxiosPromise<Event> {
      return localVarFp
        .scenariosIdEventsPost(id, scenariosIdEventsGetRequest, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Lists events belonging to a user by their ID.
     * @summary List events in user.
     * @param {number} id The unique identifier of the user.
     * @param {string} startDate Return the events from and including this date.
     * @param {string} endDate Return the events until and including this date.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersIdEventsGet(id: number, startDate: string, endDate: string, options?: any): AxiosPromise<Array<Event>> {
      return localVarFp.usersIdEventsGet(id, startDate, endDate, options).then((request) => request(axios, basePath))
    },
  }
}

/**
 * EventsApi - object-oriented interface
 * @export
 * @class EventsApi
 * @extends {BaseAPI}
 */
export class EventsApi extends BaseAPI {
  /**
   * Deletes an event by its ID.
   * @summary Delete event
   * @param {string} id The unique identifier of the event.
   * @param {'one' | 'forward' | 'all'} behaviour Whether the delete applies only to this event, to all events within the series from this event or to all events within the series.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventsApi
   */
  public eventsIdDelete(id: string, behaviour: 'one' | 'forward' | 'all', options?: AxiosRequestConfig) {
    return EventsApiFp(this.configuration)
      .eventsIdDelete(id, behaviour, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Gets a particular event by its ID.
   * @summary Get event
   * @param {string} id The unique identifier of the event.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventsApi
   */
  public eventsIdGet(id: string, options?: AxiosRequestConfig) {
    return EventsApiFp(this.configuration)
      .eventsIdGet(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Updates an event by its ID.
   * @summary Update event
   * @param {string} id The unique identifier of the event.
   * @param {EventsIdDeleteRequest} [eventsIdDeleteRequest]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventsApi
   */
  public eventsIdPut(id: string, eventsIdDeleteRequest?: EventsIdDeleteRequest, options?: AxiosRequestConfig) {
    return EventsApiFp(this.configuration)
      .eventsIdPut(id, eventsIdDeleteRequest, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Lists events belonging to a scenario by their ID.
   * @summary List events in scenario.
   * @param {number} id The unique identifier of the scenario.
   * @param {string} startDate Return the events from and including this date.
   * @param {string} endDate Return the events until and including this date.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventsApi
   */
  public scenariosIdEventsGet(id: number, startDate: string, endDate: string, options?: AxiosRequestConfig) {
    return EventsApiFp(this.configuration)
      .scenariosIdEventsGet(id, startDate, endDate, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Creates an event in a scenario by its ID.
   * @summary Create event in scenario
   * @param {number} id The unique identifier of the scenario.
   * @param {ScenariosIdEventsGetRequest} [scenariosIdEventsGetRequest]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventsApi
   */
  public scenariosIdEventsPost(
    id: number,
    scenariosIdEventsGetRequest?: ScenariosIdEventsGetRequest,
    options?: AxiosRequestConfig,
  ) {
    return EventsApiFp(this.configuration)
      .scenariosIdEventsPost(id, scenariosIdEventsGetRequest, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Lists events belonging to a user by their ID.
   * @summary List events in user.
   * @param {number} id The unique identifier of the user.
   * @param {string} startDate Return the events from and including this date.
   * @param {string} endDate Return the events until and including this date.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventsApi
   */
  public usersIdEventsGet(id: number, startDate: string, endDate: string, options?: AxiosRequestConfig) {
    return EventsApiFp(this.configuration)
      .usersIdEventsGet(id, startDate, endDate, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
