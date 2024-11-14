import globalAxios, {
	AxiosPromise,
	AxiosInstance,
	AxiosRequestConfig,
} from "axios";

import { BASE_PATH, RequestArgs, BaseAPI, RequiredError } from "../base";
import {
	DUMMY_BASE_URL,
	assertParamExists,
	setApiKeyToObject,
	setSearchParams,
	serializeDataIfNeeded,
	toPathString,
	createRequestFunction,
} from "../shared/common";
import { Configuration } from "../shared/configuration";
import {
	CategoriesIdCategoryRulesPostRequest,
	CategoryRule,
} from "../types/types";

/**
 * CategoryRulesApi - axios parameter creator
 * @export
 */
export const CategoryRulesApiAxiosParamCreator = function (
	configuration?: Configuration
) {
	return {
		/**
		 * Creates a rule to allocate a category to transactions.
		 * @summary Create category rule in category
		 * @param {number} id The unique identifier of the category.
		 * @param {CategoriesIdCategoryRulesPostRequest} [categoriesIdCategoryRulesPostRequest]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		categoriesIdCategoryRulesPost: async (
			id: number,
			categoriesIdCategoryRulesPostRequest?: CategoriesIdCategoryRulesPostRequest,
			options: AxiosRequestConfig = {}
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("categoriesIdCategoryRulesPost", "id", id);
			const localVarPath = `/categories/{id}/category_rules`.replace(
				`{${"id"}}`,
				encodeURIComponent(String(id))
			);
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
			let baseOptions;
			if (configuration) {
				baseOptions = configuration.baseOptions;
			}

			const localVarRequestOptions = {
				method: "POST",
				...baseOptions,
				...options,
			};
			const localVarHeaderParameter = {} as any;
			const localVarQueryParameter = {} as any;

			// authentication developerKey required
			await setApiKeyToObject(
				localVarHeaderParameter,
				"X-Developer-Key",
				configuration
			);

			localVarHeaderParameter["Content-Type"] = "application/json";

			setSearchParams(localVarUrlObj, localVarQueryParameter);
			let headersFromBaseOptions =
				baseOptions && baseOptions.headers ? baseOptions.headers : {};
			localVarRequestOptions.headers = {
				...localVarHeaderParameter,
				...headersFromBaseOptions,
				...options.headers,
			};
			localVarRequestOptions.data = serializeDataIfNeeded(
				categoriesIdCategoryRulesPostRequest,
				localVarRequestOptions,
				configuration
			);

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions,
			};
		},
		/**
		 * Lists all category rules belonging to a user by their ID.
		 * @summary List category rules in user
		 * @param {number} id The unique identifier of the user.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		usersIdCategoryRulesGet: async (
			id: number,
			options: AxiosRequestConfig = {}
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("usersIdCategoryRulesGet", "id", id);
			const localVarPath = `/users/{id}/category_rules`.replace(
				`{${"id"}}`,
				encodeURIComponent(String(id))
			);
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
			let baseOptions;
			if (configuration) {
				baseOptions = configuration.baseOptions;
			}

			const localVarRequestOptions = {
				method: "GET",
				...baseOptions,
				...options,
			};
			const localVarHeaderParameter = {} as any;
			const localVarQueryParameter = {} as any;

			// authentication developerKey required
			await setApiKeyToObject(
				localVarHeaderParameter,
				"X-Developer-Key",
				configuration
			);

			setSearchParams(localVarUrlObj, localVarQueryParameter);
			let headersFromBaseOptions =
				baseOptions && baseOptions.headers ? baseOptions.headers : {};
			localVarRequestOptions.headers = {
				...localVarHeaderParameter,
				...headersFromBaseOptions,
				...options.headers,
			};

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions,
			};
		},
	};
};

/**
 * CategoryRulesApi - functional programming interface
 * @export
 */
export const CategoryRulesApiFp = function (configuration?: Configuration) {
	const localVarAxiosParamCreator =
		CategoryRulesApiAxiosParamCreator(configuration);
	return {
		/**
		 * Creates a rule to allocate a category to transactions.
		 * @summary Create category rule in category
		 * @param {number} id The unique identifier of the category.
		 * @param {CategoriesIdCategoryRulesPostRequest} [categoriesIdCategoryRulesPostRequest]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async categoriesIdCategoryRulesPost(
			id: number,
			categoriesIdCategoryRulesPostRequest?: CategoriesIdCategoryRulesPostRequest,
			options?: AxiosRequestConfig
		): Promise<
			(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CategoryRule>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.categoriesIdCategoryRulesPost(
					id,
					categoriesIdCategoryRulesPostRequest,
					options
				);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration
			);
		},
		/**
		 * Lists all category rules belonging to a user by their ID.
		 * @summary List category rules in user
		 * @param {number} id The unique identifier of the user.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async usersIdCategoryRulesGet(
			id: number,
			options?: AxiosRequestConfig
		): Promise<
			(
				axios?: AxiosInstance,
				basePath?: string
			) => AxiosPromise<Array<CategoryRule>>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.usersIdCategoryRulesGet(id, options);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration
			);
		},
	};
};

/**
 * CategoryRulesApi - factory interface
 * @export
 */
export const CategoryRulesApiFactory = function (
	configuration?: Configuration,
	basePath?: string,
	axios?: AxiosInstance
) {
	const localVarFp = CategoryRulesApiFp(configuration);
	return {
		/**
		 * Creates a rule to allocate a category to transactions.
		 * @summary Create category rule in category
		 * @param {number} id The unique identifier of the category.
		 * @param {CategoriesIdCategoryRulesPostRequest} [categoriesIdCategoryRulesPostRequest]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		categoriesIdCategoryRulesPost(
			id: number,
			categoriesIdCategoryRulesPostRequest?: CategoriesIdCategoryRulesPostRequest,
			options?: any
		): AxiosPromise<CategoryRule> {
			return localVarFp
				.categoriesIdCategoryRulesPost(
					id,
					categoriesIdCategoryRulesPostRequest,
					options
				)
				.then((request) => request(axios, basePath));
		},
		/**
		 * Lists all category rules belonging to a user by their ID.
		 * @summary List category rules in user
		 * @param {number} id The unique identifier of the user.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		usersIdCategoryRulesGet(
			id: number,
			options?: any
		): AxiosPromise<Array<CategoryRule>> {
			return localVarFp
				.usersIdCategoryRulesGet(id, options)
				.then((request) => request(axios, basePath));
		},
	};
};

/**
 * CategoryRulesApi - object-oriented interface
 * @export
 * @class CategoryRulesApi
 * @extends {BaseAPI}
 */
export class CategoryRulesApi extends BaseAPI {
	/**
	 * Creates a rule to allocate a category to transactions.
	 * @summary Create category rule in category
	 * @param {number} id The unique identifier of the category.
	 * @param {CategoriesIdCategoryRulesPostRequest} [categoriesIdCategoryRulesPostRequest]
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof CategoryRulesApi
	 */
	public categoriesIdCategoryRulesPost(
		id: number,
		categoriesIdCategoryRulesPostRequest?: CategoriesIdCategoryRulesPostRequest,
		options?: AxiosRequestConfig
	) {
		return CategoryRulesApiFp(this.configuration)
			.categoriesIdCategoryRulesPost(
				id,
				categoriesIdCategoryRulesPostRequest,
				options
			)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Lists all category rules belonging to a user by their ID.
	 * @summary List category rules in user
	 * @param {number} id The unique identifier of the user.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof CategoryRulesApi
	 */
	public usersIdCategoryRulesGet(id: number, options?: AxiosRequestConfig) {
		return CategoryRulesApiFp(this.configuration)
			.usersIdCategoryRulesGet(id, options)
			.then((request) => request(this.axios, this.basePath));
	}
}
