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
import { TransactionAccount, TransactionAccountsIdGetRequest } from '../generated-api-2-refactored/types/api.types'

/**
 * TransactionAccountsApi - axios parameter creator
 * @export
 */
export const TransactionAccountsApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Gets a transaction account by its ID.
     * @summary Get transaction account
     * @param {number} id The unique identifier of the transaction account.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    transactionAccountsIdGet: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('transactionAccountsIdGet', 'id', id)
      const localVarPath = `/transaction_accounts/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
     * Updates the transaction account by its ID.
     * @summary Update transaction account
     * @param {number} id The unique identifier of the transaction account.
     * @param {TransactionAccountsIdGetRequest} [transactionAccountsIdGetRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    transactionAccountsIdPut: async (
      id: number,
      transactionAccountsIdGetRequest?: TransactionAccountsIdGetRequest,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('transactionAccountsIdPut', 'id', id)
      const localVarPath = `/transaction_accounts/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
      localVarRequestOptions.data = serializeDataIfNeeded(
        transactionAccountsIdGetRequest,
        localVarRequestOptions,
        configuration,
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * List all transaction accounts belonging to a user.
     * @summary List transaction accounts in user
     * @param {number} id The unique identifier of the user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersIdTransactionAccountsGet: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('usersIdTransactionAccountsGet', 'id', id)
      const localVarPath = `/users/{id}/transaction_accounts`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
 * TransactionAccountsApi - functional programming interface
 * @export
 */
export const TransactionAccountsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = TransactionAccountsApiAxiosParamCreator(configuration)
  return {
    /**
     * Gets a transaction account by its ID.
     * @summary Get transaction account
     * @param {number} id The unique identifier of the transaction account.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async transactionAccountsIdGet(
      id: number,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TransactionAccount>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.transactionAccountsIdGet(id, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Updates the transaction account by its ID.
     * @summary Update transaction account
     * @param {number} id The unique identifier of the transaction account.
     * @param {TransactionAccountsIdGetRequest} [transactionAccountsIdGetRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async transactionAccountsIdPut(
      id: number,
      transactionAccountsIdGetRequest?: TransactionAccountsIdGetRequest,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TransactionAccount>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.transactionAccountsIdPut(
        id,
        transactionAccountsIdGetRequest,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * List all transaction accounts belonging to a user.
     * @summary List transaction accounts in user
     * @param {number} id The unique identifier of the user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async usersIdTransactionAccountsGet(
      id: number,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TransactionAccount>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.usersIdTransactionAccountsGet(id, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * TransactionAccountsApi - factory interface
 * @export
 */
export const TransactionAccountsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = TransactionAccountsApiFp(configuration)
  return {
    /**
     * Gets a transaction account by its ID.
     * @summary Get transaction account
     * @param {number} id The unique identifier of the transaction account.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    transactionAccountsIdGet(id: number, options?: any): AxiosPromise<TransactionAccount> {
      return localVarFp.transactionAccountsIdGet(id, options).then((request) => request(axios, basePath))
    },
    /**
     * Updates the transaction account by its ID.
     * @summary Update transaction account
     * @param {number} id The unique identifier of the transaction account.
     * @param {TransactionAccountsIdGetRequest} [transactionAccountsIdGetRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    transactionAccountsIdPut(
      id: number,
      transactionAccountsIdGetRequest?: TransactionAccountsIdGetRequest,
      options?: any,
    ): AxiosPromise<TransactionAccount> {
      return localVarFp
        .transactionAccountsIdPut(id, transactionAccountsIdGetRequest, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * List all transaction accounts belonging to a user.
     * @summary List transaction accounts in user
     * @param {number} id The unique identifier of the user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersIdTransactionAccountsGet(id: number, options?: any): AxiosPromise<Array<TransactionAccount>> {
      return localVarFp.usersIdTransactionAccountsGet(id, options).then((request) => request(axios, basePath))
    },
  }
}

/**
 * TransactionAccountsApi - object-oriented interface
 * @export
 * @class TransactionAccountsApi
 * @extends {BaseAPI}
 */
export class TransactionAccountsApi extends BaseAPI {
  /**
   * Gets a transaction account by its ID.
   * @summary Get transaction account
   * @param {number} id The unique identifier of the transaction account.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TransactionAccountsApi
   */
  public transactionAccountsIdGet(id: number, options?: AxiosRequestConfig) {
    return TransactionAccountsApiFp(this.configuration)
      .transactionAccountsIdGet(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Updates the transaction account by its ID.
   * @summary Update transaction account
   * @param {number} id The unique identifier of the transaction account.
   * @param {TransactionAccountsIdGetRequest} [transactionAccountsIdGetRequest]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TransactionAccountsApi
   */
  public transactionAccountsIdPut(
    id: number,
    transactionAccountsIdGetRequest?: TransactionAccountsIdGetRequest,
    options?: AxiosRequestConfig,
  ) {
    return TransactionAccountsApiFp(this.configuration)
      .transactionAccountsIdPut(id, transactionAccountsIdGetRequest, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * List all transaction accounts belonging to a user.
   * @summary List transaction accounts in user
   * @param {number} id The unique identifier of the user.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TransactionAccountsApi
   */
  public usersIdTransactionAccountsGet(id: number, options?: AxiosRequestConfig) {
    return TransactionAccountsApiFp(this.configuration)
      .usersIdTransactionAccountsGet(id, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
