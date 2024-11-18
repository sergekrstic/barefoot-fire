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

/**
 * LabelsApi - axios parameter creator
 * @export
 */
export const LabelsApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Lists labels belonging to a user by their ID.
     * @summary List labels in user
     * @param {number} id The unique identifier of the user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersIdLabelsGet: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('usersIdLabelsGet', 'id', id)
      const localVarPath = `/users/{id}/labels`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
  }
}

/**
 * LabelsApi - functional programming interface
 * @export
 */
export const LabelsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = LabelsApiAxiosParamCreator(configuration)
  return {
    /**
     * Lists labels belonging to a user by their ID.
     * @summary List labels in user
     * @param {number} id The unique identifier of the user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async usersIdLabelsGet(
      id: number,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.usersIdLabelsGet(id, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * LabelsApi - factory interface
 * @export
 */
export const LabelsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = LabelsApiFp(configuration)
  return {
    /**
     * Lists labels belonging to a user by their ID.
     * @summary List labels in user
     * @param {number} id The unique identifier of the user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersIdLabelsGet(id: number, options?: any): AxiosPromise<Array<string>> {
      return localVarFp.usersIdLabelsGet(id, options).then((request) => request(axios, basePath))
    },
  }
}

/**
 * LabelsApi - object-oriented interface
 * @export
 * @class LabelsApi
 * @extends {BaseAPI}
 */
export class LabelsApi extends BaseAPI {
  /**
   * Lists labels belonging to a user by their ID.
   * @summary List labels in user
   * @param {number} id The unique identifier of the user.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LabelsApi
   */
  public usersIdLabelsGet(id: number, options?: AxiosRequestConfig) {
    return LabelsApiFp(this.configuration)
      .usersIdLabelsGet(id, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
