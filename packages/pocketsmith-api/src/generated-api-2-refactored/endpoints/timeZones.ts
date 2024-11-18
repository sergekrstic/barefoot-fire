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
import { TimeZone } from '../generated-api-2-refactored/types/api.types'

/**
 * TimeZonesApi - axios parameter creator
 * @export
 */
export const TimeZonesApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Lists time zones.
     * @summary List time zones
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    timeZonesGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/time_zones`
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
 * TimeZonesApi - functional programming interface
 * @export
 */
export const TimeZonesApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = TimeZonesApiAxiosParamCreator(configuration)
  return {
    /**
     * Lists time zones.
     * @summary List time zones
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async timeZonesGet(
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TimeZone>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.timeZonesGet(options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * TimeZonesApi - factory interface
 * @export
 */
export const TimeZonesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = TimeZonesApiFp(configuration)
  return {
    /**
     * Lists time zones.
     * @summary List time zones
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    timeZonesGet(options?: any): AxiosPromise<Array<TimeZone>> {
      return localVarFp.timeZonesGet(options).then((request) => request(axios, basePath))
    },
  }
}

/**
 * TimeZonesApi - object-oriented interface
 * @export
 * @class TimeZonesApi
 * @extends {BaseAPI}
 */
export class TimeZonesApi extends BaseAPI {
  /**
   * Lists time zones.
   * @summary List time zones
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TimeZonesApi
   */
  public timeZonesGet(options?: AxiosRequestConfig) {
    return TimeZonesApiFp(this.configuration)
      .timeZonesGet(options)
      .then((request) => request(this.axios, this.basePath))
  }
}
