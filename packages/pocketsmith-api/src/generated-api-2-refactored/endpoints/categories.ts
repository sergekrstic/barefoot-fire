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
import {
  CategoriesIdDeleteRequest,
  Category,
  UsersIdCategoriesGetRequest,
} from '../generated-api-2-refactored/types/api.types'

/**
 * CategoriesApi - axios parameter creator
 * @export
 */
export const CategoriesApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Deletes a particular category by its ID. This will delete all budgets within the category, and uncategorize all transactions assigned to the category.
     * @summary Delete category
     * @param {number} id The unique identifier of the category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    categoriesIdDelete: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('categoriesIdDelete', 'id', id)
      const localVarPath = `/categories/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
     * Gets a particular category by its ID.
     * @summary Get category
     * @param {number} id The unique identifier of the category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    categoriesIdGet: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('categoriesIdGet', 'id', id)
      const localVarPath = `/categories/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
     * Updates a category by its ID.
     * @summary Update category
     * @param {number} id The unique identifier of the category.
     * @param {CategoriesIdDeleteRequest} [categoriesIdDeleteRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    categoriesIdPut: async (
      id: number,
      categoriesIdDeleteRequest?: CategoriesIdDeleteRequest,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('categoriesIdPut', 'id', id)
      const localVarPath = `/categories/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
        categoriesIdDeleteRequest,
        localVarRequestOptions,
        configuration,
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Lists all categories belonging to a user by their ID.
     * @summary List categories in user
     * @param {number} id The unique identifier of the user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersIdCategoriesGet: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('usersIdCategoriesGet', 'id', id)
      const localVarPath = `/users/{id}/categories`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
     * Creates a category belonging to the user by their ID.
     * @summary Create category in user
     * @param {number} id The unique identifier of the user.
     * @param {UsersIdCategoriesGetRequest} [usersIdCategoriesGetRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersIdCategoriesPost: async (
      id: number,
      usersIdCategoriesGetRequest?: UsersIdCategoriesGetRequest,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('usersIdCategoriesPost', 'id', id)
      const localVarPath = `/users/{id}/categories`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
        usersIdCategoriesGetRequest,
        localVarRequestOptions,
        configuration,
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * CategoriesApi - functional programming interface
 * @export
 */
export const CategoriesApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = CategoriesApiAxiosParamCreator(configuration)
  return {
    /**
     * Deletes a particular category by its ID. This will delete all budgets within the category, and uncategorize all transactions assigned to the category.
     * @summary Delete category
     * @param {number} id The unique identifier of the category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async categoriesIdDelete(
      id: number,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.categoriesIdDelete(id, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Gets a particular category by its ID.
     * @summary Get category
     * @param {number} id The unique identifier of the category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async categoriesIdGet(
      id: number,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Category>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.categoriesIdGet(id, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Updates a category by its ID.
     * @summary Update category
     * @param {number} id The unique identifier of the category.
     * @param {CategoriesIdDeleteRequest} [categoriesIdDeleteRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async categoriesIdPut(
      id: number,
      categoriesIdDeleteRequest?: CategoriesIdDeleteRequest,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Category>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.categoriesIdPut(id, categoriesIdDeleteRequest, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Lists all categories belonging to a user by their ID.
     * @summary List categories in user
     * @param {number} id The unique identifier of the user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async usersIdCategoriesGet(
      id: number,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Category>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.usersIdCategoriesGet(id, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Creates a category belonging to the user by their ID.
     * @summary Create category in user
     * @param {number} id The unique identifier of the user.
     * @param {UsersIdCategoriesGetRequest} [usersIdCategoriesGetRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async usersIdCategoriesPost(
      id: number,
      usersIdCategoriesGetRequest?: UsersIdCategoriesGetRequest,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Category>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.usersIdCategoriesPost(
        id,
        usersIdCategoriesGetRequest,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * CategoriesApi - factory interface
 * @export
 */
export const CategoriesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = CategoriesApiFp(configuration)
  return {
    /**
     * Deletes a particular category by its ID. This will delete all budgets within the category, and uncategorize all transactions assigned to the category.
     * @summary Delete category
     * @param {number} id The unique identifier of the category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    categoriesIdDelete(id: number, options?: any): AxiosPromise<void> {
      return localVarFp.categoriesIdDelete(id, options).then((request) => request(axios, basePath))
    },
    /**
     * Gets a particular category by its ID.
     * @summary Get category
     * @param {number} id The unique identifier of the category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    categoriesIdGet(id: number, options?: any): AxiosPromise<Category> {
      return localVarFp.categoriesIdGet(id, options).then((request) => request(axios, basePath))
    },
    /**
     * Updates a category by its ID.
     * @summary Update category
     * @param {number} id The unique identifier of the category.
     * @param {CategoriesIdDeleteRequest} [categoriesIdDeleteRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    categoriesIdPut(
      id: number,
      categoriesIdDeleteRequest?: CategoriesIdDeleteRequest,
      options?: any,
    ): AxiosPromise<Category> {
      return localVarFp
        .categoriesIdPut(id, categoriesIdDeleteRequest, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Lists all categories belonging to a user by their ID.
     * @summary List categories in user
     * @param {number} id The unique identifier of the user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersIdCategoriesGet(id: number, options?: any): AxiosPromise<Array<Category>> {
      return localVarFp.usersIdCategoriesGet(id, options).then((request) => request(axios, basePath))
    },
    /**
     * Creates a category belonging to the user by their ID.
     * @summary Create category in user
     * @param {number} id The unique identifier of the user.
     * @param {UsersIdCategoriesGetRequest} [usersIdCategoriesGetRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersIdCategoriesPost(
      id: number,
      usersIdCategoriesGetRequest?: UsersIdCategoriesGetRequest,
      options?: any,
    ): AxiosPromise<Category> {
      return localVarFp
        .usersIdCategoriesPost(id, usersIdCategoriesGetRequest, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * CategoriesApi - object-oriented interface
 * @export
 * @class CategoriesApi
 * @extends {BaseAPI}
 */
export class CategoriesApi extends BaseAPI {
  /**
   * Deletes a particular category by its ID. This will delete all budgets within the category, and uncategorize all transactions assigned to the category.
   * @summary Delete category
   * @param {number} id The unique identifier of the category.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CategoriesApi
   */
  public categoriesIdDelete(id: number, options?: AxiosRequestConfig) {
    return CategoriesApiFp(this.configuration)
      .categoriesIdDelete(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Gets a particular category by its ID.
   * @summary Get category
   * @param {number} id The unique identifier of the category.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CategoriesApi
   */
  public categoriesIdGet(id: number, options?: AxiosRequestConfig) {
    return CategoriesApiFp(this.configuration)
      .categoriesIdGet(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Updates a category by its ID.
   * @summary Update category
   * @param {number} id The unique identifier of the category.
   * @param {CategoriesIdDeleteRequest} [categoriesIdDeleteRequest]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CategoriesApi
   */
  public categoriesIdPut(
    id: number,
    categoriesIdDeleteRequest?: CategoriesIdDeleteRequest,
    options?: AxiosRequestConfig,
  ) {
    return CategoriesApiFp(this.configuration)
      .categoriesIdPut(id, categoriesIdDeleteRequest, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Lists all categories belonging to a user by their ID.
   * @summary List categories in user
   * @param {number} id The unique identifier of the user.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CategoriesApi
   */
  public usersIdCategoriesGet(id: number, options?: AxiosRequestConfig) {
    return CategoriesApiFp(this.configuration)
      .usersIdCategoriesGet(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Creates a category belonging to the user by their ID.
   * @summary Create category in user
   * @param {number} id The unique identifier of the user.
   * @param {UsersIdCategoriesGetRequest} [usersIdCategoriesGetRequest]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CategoriesApi
   */
  public usersIdCategoriesPost(
    id: number,
    usersIdCategoriesGetRequest?: UsersIdCategoriesGetRequest,
    options?: AxiosRequestConfig,
  ) {
    return CategoriesApiFp(this.configuration)
      .usersIdCategoriesPost(id, usersIdCategoriesGetRequest, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
