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
	Account,
	AccountsIdDeleteRequest,
	UsersIdAccountsGetRequest,
	UsersIdAccountsGetRequest1,
} from "../types/types";

// AccountsApi - axios parameter creator
export const AccountsApiAxiosParamCreator = function (
	configuration?: Configuration
) {
	return {
		accountsIdDelete: async (
			id: number,
			options: AxiosRequestConfig = {}
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("accountsIdDelete", "id", id);
			const localVarPath = `/accounts/{id}`.replace(
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
				method: "DELETE",
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
		accountsIdGet: async (
			id: number,
			options: AxiosRequestConfig = {}
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("accountsIdGet", "id", id);
			const localVarPath = `/accounts/{id}`.replace(
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
		accountsIdPut: async (
			id: number,
			accountsIdDeleteRequest?: AccountsIdDeleteRequest,
			options: AxiosRequestConfig = {}
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("accountsIdPut", "id", id);
			const localVarPath = `/accounts/{id}`.replace(
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
				method: "PUT",
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
				accountsIdDeleteRequest,
				localVarRequestOptions,
				configuration
			);

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions,
			};
		},
		institutionsIdAccountsGet: async (
			id: number,
			options: AxiosRequestConfig = {}
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("institutionsIdAccountsGet", "id", id);
			const localVarPath = `/institutions/{id}/accounts`.replace(
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
		usersIdAccountsGet: async (
			id: number,
			options: AxiosRequestConfig = {}
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("usersIdAccountsGet", "id", id);
			const localVarPath = `/users/{id}/accounts`.replace(
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
		usersIdAccountsPost: async (
			id: number,
			usersIdAccountsGetRequest1?: UsersIdAccountsGetRequest1,
			options: AxiosRequestConfig = {}
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("usersIdAccountsPost", "id", id);
			const localVarPath = `/users/{id}/accounts`.replace(
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
				usersIdAccountsGetRequest1,
				localVarRequestOptions,
				configuration
			);

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions,
			};
		},
		usersIdAccountsPut: async (
			id: number,
			usersIdAccountsGetRequest?: UsersIdAccountsGetRequest,
			options: AxiosRequestConfig = {}
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("usersIdAccountsPut", "id", id);
			const localVarPath = `/users/{id}/accounts`.replace(
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
				method: "PUT",
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
				usersIdAccountsGetRequest,
				localVarRequestOptions,
				configuration
			);

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions,
			};
		},
	};
};

// AccountsApi - functional programming interface
export function AccountsApiFp(configuration?: Configuration) {
	const localVarAxiosParamCreator = AccountsApiAxiosParamCreator(configuration);
	return {
		async accountsIdDelete(
			id: number,
			options?: AxiosRequestConfig
		): Promise<
			(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.accountsIdDelete(id, options);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration
			);
		},
		async accountsIdGet(
			id: number,
			options?: AxiosRequestConfig
		): Promise<
			(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Account>
		> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.accountsIdGet(
				id,
				options
			);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration
			);
		},
		async accountsIdPut(
			id: number,
			accountsIdDeleteRequest?: AccountsIdDeleteRequest,
			options?: AxiosRequestConfig
		): Promise<
			(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Account>
		> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.accountsIdPut(
				id,
				accountsIdDeleteRequest,
				options
			);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration
			);
		},
		async institutionsIdAccountsGet(
			id: number,
			options?: AxiosRequestConfig
		): Promise<
			(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Account>>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.institutionsIdAccountsGet(id, options);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration
			);
		},
		async usersIdAccountsGet(
			id: number,
			options?: AxiosRequestConfig
		): Promise<
			(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Account>>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.usersIdAccountsGet(id, options);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration
			);
		},
		async usersIdAccountsPost(
			id: number,
			usersIdAccountsGetRequest1?: UsersIdAccountsGetRequest1,
			options?: AxiosRequestConfig
		): Promise<
			(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Account>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.usersIdAccountsPost(
					id,
					usersIdAccountsGetRequest1,
					options
				);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration
			);
		},
		async usersIdAccountsPut(
			id: number,
			usersIdAccountsGetRequest?: UsersIdAccountsGetRequest,
			options?: AxiosRequestConfig
		): Promise<
			(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Account>>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.usersIdAccountsPut(
					id,
					usersIdAccountsGetRequest,
					options
				);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration
			);
		},
	};
}

// AccountsApi - factory interface
export const AccountsApiFactory = function (
	configuration?: Configuration,
	basePath?: string,
	axios?: AxiosInstance
) {
	const localVarFp = AccountsApiFp(configuration);
	return {
		accountsIdDelete(id: number, options?: any): AxiosPromise<void> {
			return localVarFp
				.accountsIdDelete(id, options)
				.then((request) => request(axios, basePath));
		},
		accountsIdGet(id: number, options?: any): AxiosPromise<Account> {
			return localVarFp
				.accountsIdGet(id, options)
				.then((request) => request(axios, basePath));
		},
		accountsIdPut(
			id: number,
			accountsIdDeleteRequest?: AccountsIdDeleteRequest,
			options?: any
		): AxiosPromise<Account> {
			return localVarFp
				.accountsIdPut(id, accountsIdDeleteRequest, options)
				.then((request) => request(axios, basePath));
		},
		institutionsIdAccountsGet(
			id: number,
			options?: any
		): AxiosPromise<Array<Account>> {
			return localVarFp
				.institutionsIdAccountsGet(id, options)
				.then((request) => request(axios, basePath));
		},
		usersIdAccountsGet(
			id: number,
			options?: any
		): AxiosPromise<Array<Account>> {
			return localVarFp
				.usersIdAccountsGet(id, options)
				.then((request) => request(axios, basePath));
		},
		usersIdAccountsPost(
			id: number,
			usersIdAccountsGetRequest1?: UsersIdAccountsGetRequest1,
			options?: any
		): AxiosPromise<Account> {
			return localVarFp
				.usersIdAccountsPost(id, usersIdAccountsGetRequest1, options)
				.then((request) => request(axios, basePath));
		},
		usersIdAccountsPut(
			id: number,
			usersIdAccountsGetRequest?: UsersIdAccountsGetRequest,
			options?: any
		): AxiosPromise<Array<Account>> {
			return localVarFp
				.usersIdAccountsPut(id, usersIdAccountsGetRequest, options)
				.then((request) => request(axios, basePath));
		},
	};
};

/**
 * AccountsApi - object-oriented interface
 * @export
 * @class AccountsApi
 * @extends {BaseAPI}
 */
export class AccountsApi extends BaseAPI {
	/**
	 * Deletes an account and all its data by ID, optionally merge scenarios into another account.
	 * @summary Delete account
	 * @param {number} id The unique identifier of the account.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof AccountsApi
	 */
	public accountsIdDelete(id: number, options?: AxiosRequestConfig) {
		return AccountsApiFp(this.configuration)
			.accountsIdDelete(id, options)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Gets an account by its ID.
	 * @summary Get account
	 * @param {number} id The unique identifier of the account.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof AccountsApi
	 */
	public accountsIdGet(id: number, options?: AxiosRequestConfig) {
		return AccountsApiFp(this.configuration)
			.accountsIdGet(id, options)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Updates and returns an account by its ID.
	 * @summary Update account
	 * @param {number} id The unique identifier of the account.
	 * @param {AccountsIdDeleteRequest} [accountsIdDeleteRequest]
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof AccountsApi
	 */
	public accountsIdPut(
		id: number,
		accountsIdDeleteRequest?: AccountsIdDeleteRequest,
		options?: AxiosRequestConfig
	) {
		return AccountsApiFp(this.configuration)
			.accountsIdPut(id, accountsIdDeleteRequest, options)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Lists accounts belonging to an institution by its ID.
	 * @summary List accounts in institution
	 * @param {number} id The unique identifier of the institution.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof AccountsApi
	 */
	public institutionsIdAccountsGet(id: number, options?: AxiosRequestConfig) {
		return AccountsApiFp(this.configuration)
			.institutionsIdAccountsGet(id, options)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Lists all accounts belonging to the user by their ID.
	 * @summary List accounts in user
	 * @param {number} id The unique identifier of the user.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof AccountsApi
	 */
	public usersIdAccountsGet(id: number, options?: AxiosRequestConfig) {
		return AccountsApiFp(this.configuration)
			.usersIdAccountsGet(id, options)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Creates and returns an account belonging to the user by their ID.
	 * @summary Create an account in user
	 * @param {number} id The unique identifier of the user.
	 * @param {UsersIdAccountsGetRequest1} [usersIdAccountsGetRequest1]
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof AccountsApi
	 */
	public usersIdAccountsPost(
		id: number,
		usersIdAccountsGetRequest1?: UsersIdAccountsGetRequest1,
		options?: AxiosRequestConfig
	) {
		return AccountsApiFp(this.configuration)
			.usersIdAccountsPost(id, usersIdAccountsGetRequest1, options)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Updates the display order of accounts belonging to the user, by accepting an array of accounts in their new display order.
	 * @summary Update the display order of accounts in user
	 * @param {number} id The unique identifier of the user.
	 * @param {UsersIdAccountsGetRequest} [usersIdAccountsGetRequest]
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof AccountsApi
	 */
	public usersIdAccountsPut(
		id: number,
		usersIdAccountsGetRequest?: UsersIdAccountsGetRequest,
		options?: AxiosRequestConfig
	) {
		return AccountsApiFp(this.configuration)
			.usersIdAccountsPut(id, usersIdAccountsGetRequest, options)
			.then((request) => request(this.axios, this.basePath));
	}
}
