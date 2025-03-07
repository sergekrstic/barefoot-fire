/* tslint:disable */
/* eslint-disable */
/**
 * PocketSmith
 * The PocketSmith API
 *
 * The version of the OpenAPI document: 2.0
 * Contact: api@pocketsmith.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from '../configuration'
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios'
import globalAxios from 'axios'
import { DUMMY_BASE_URL, setApiKeyToObject, setSearchParams, toPathString, createRequestFunction } from '../common'
import { BASE_PATH, type RequestArgs, BaseAPI, operationServerMap } from '../base'
import type { TimeZone } from '../model'

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
    timeZonesGet: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/time_zones`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication developerKey required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Developer-Key', configuration)

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

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
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TimeZone>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.timeZonesGet(options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['TimeZonesApi.timeZonesGet']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath)
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
    timeZonesGet(options?: RawAxiosRequestConfig): AxiosPromise<Array<TimeZone>> {
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
  public timeZonesGet(options?: RawAxiosRequestConfig) {
    return TimeZonesApiFp(this.configuration)
      .timeZonesGet(options)
      .then((request) => request(this.axios, this.basePath))
  }
}
