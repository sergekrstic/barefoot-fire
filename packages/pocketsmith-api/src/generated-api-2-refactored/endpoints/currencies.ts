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
import { Currency } from '../generated-api-2-refactored/types/api.types'

/**
 * CurrenciesApi - axios parameter creator
 * @export
 */
export const CurrenciesApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Lists currencies supported by PocketSmith.
     * @summary List currencies
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    currenciesGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/currencies`
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
     * Gets a particular currency by its ID.
     * @summary Get currency
     * @param {string} id The unique identifier of the currency.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    currenciesIdGet: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('currenciesIdGet', 'id', id)
      const localVarPath = `/currencies/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
 * CurrenciesApi - functional programming interface
 * @export
 */
export const CurrenciesApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = CurrenciesApiAxiosParamCreator(configuration)
  return {
    /**
     * Lists currencies supported by PocketSmith.
     * @summary List currencies
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async currenciesGet(
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Currency>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.currenciesGet(options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Gets a particular currency by its ID.
     * @summary Get currency
     * @param {string} id The unique identifier of the currency.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async currenciesIdGet(
      id: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Currency>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.currenciesIdGet(id, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * CurrenciesApi - factory interface
 * @export
 */
export const CurrenciesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = CurrenciesApiFp(configuration)
  return {
    /**
     * Lists currencies supported by PocketSmith.
     * @summary List currencies
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    currenciesGet(options?: any): AxiosPromise<Array<Currency>> {
      return localVarFp.currenciesGet(options).then((request) => request(axios, basePath))
    },
    /**
     * Gets a particular currency by its ID.
     * @summary Get currency
     * @param {string} id The unique identifier of the currency.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    currenciesIdGet(id: string, options?: any): AxiosPromise<Currency> {
      return localVarFp.currenciesIdGet(id, options).then((request) => request(axios, basePath))
    },
  }
}

/**
 * CurrenciesApi - object-oriented interface
 * @export
 * @class CurrenciesApi
 * @extends {BaseAPI}
 */
export class CurrenciesApi extends BaseAPI {
  /**
   * Lists currencies supported by PocketSmith.
   * @summary List currencies
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CurrenciesApi
   */
  public currenciesGet(options?: AxiosRequestConfig) {
    return CurrenciesApiFp(this.configuration)
      .currenciesGet(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Gets a particular currency by its ID.
   * @summary Get currency
   * @param {string} id The unique identifier of the currency.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CurrenciesApi
   */
  public currenciesIdGet(id: string, options?: AxiosRequestConfig) {
    return CurrenciesApiFp(this.configuration)
      .currenciesIdGet(id, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
