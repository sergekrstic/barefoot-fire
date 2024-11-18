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
import { User, UsersIdGetRequest } from '../generated-api-2-refactored/types/api.types'

// UsersApi - axios parameter creator
export function UsersApiAxiosParamCreator(configuration?: Configuration) {
  return {
    meGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/me`
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
    usersIdGet: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('usersIdGet', 'id', id)
      const localVarPath = `/users/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
    usersIdPut: async (
      id: number,
      usersIdGetRequest?: UsersIdGetRequest,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('usersIdPut', 'id', id)
      const localVarPath = `/users/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
      localVarRequestOptions.data = serializeDataIfNeeded(usersIdGetRequest, localVarRequestOptions, configuration)

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

// UsersApi - functional programming interface
export function UsersApiFp(configuration?: Configuration) {
  const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
  return {
    async meGet(
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.meGet(options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    async usersIdGet(
      id: number,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.usersIdGet(id, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    async usersIdPut(
      id: number,
      usersIdGetRequest?: UsersIdGetRequest,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.usersIdPut(id, usersIdGetRequest, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

// UsersApi - factory interface
export function UsersApiFactory(configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = UsersApiFp(configuration)
  return {
    async meGet(options?: any): AxiosPromise<User> {
      const request = await localVarFp.meGet(options)
      return await request(axios, basePath)
    },
    async usersIdGet(id: number, options?: any): AxiosPromise<User> {
      const request = await localVarFp.usersIdGet(id, options)
      return await request(axios, basePath)
    },
    async usersIdPut(id: number, usersIdGetRequest?: UsersIdGetRequest, options?: any): AxiosPromise<User> {
      const request = await localVarFp.usersIdPut(id, usersIdGetRequest, options)
      return await request(axios, basePath)
    },
  }
}

// UsersApi - object-oriented interface
export class UsersApi extends BaseAPI {
  /**
   * Gets the user that corresponds to the access token used in the request.
   * @summary Get the authorised user
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public async meGet(options?: AxiosRequestConfig) {
    const api = UsersApiFp(this.configuration)
    const request = await api.meGet(options)
    return await request(this.axios, this.basePath)
  }

  /**
   * Gets a user by ID. You must be authorised as the target user in order to make this request.
   * @summary Get user
   * @param {number} id The unique identifier of the user.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public async usersIdGet(id: number, options?: AxiosRequestConfig) {
    const api = UsersApiFp(this.configuration)
    const request = await api.usersIdGet(id, options)
    return await request(this.axios, this.basePath)
  }

  /**
   * Updates the user by their ID. You must be authorised as the target user in order to make this request.
   * @summary Update user
   * @param {number} id The unique identifier of the user.
   * @param {UsersIdGetRequest} [usersIdGetRequest]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public async usersIdPut(id: number, usersIdGetRequest?: UsersIdGetRequest, options?: AxiosRequestConfig) {
    const api = UsersApiFp(this.configuration)
    const request = await api.usersIdPut(id, usersIdGetRequest, options)
    return await request(this.axios, this.basePath)
  }
}
