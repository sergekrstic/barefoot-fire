import globalAxios, {
	AxiosPromise,
	AxiosInstance,
	AxiosRequestConfig,
} from "axios";

import { BASE_PATH, RequestArgs, BaseAPI, RequiredError } from "../shared/base";
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
	Institution,
	InstitutionsIdDeleteRequest,
	UsersIdInstitutionsGetRequest,
} from "../types/api.types";

/**
 * InstitutionsApi - axios parameter creator
 * @export
 */
export const InstitutionsApiAxiosParamCreator = function (
	configuration?: Configuration,
) {
	return {
		/**
		 * Deletes an institution and all data within. Alternatively, another institution can be provided to merge the data into to avoid losing it.
		 * @summary Delete institution
		 * @param {number} id The unique identifier of the institution.
		 * @param {number} [mergeIntoInstitutionId] The unique identifier of the institution to merge into.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		institutionsIdDelete: async (
			id: number,
			mergeIntoInstitutionId?: number,
			options: AxiosRequestConfig = {},
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("institutionsIdDelete", "id", id);
			const localVarPath = `/institutions/{id}`.replace(
				`{${"id"}}`,
				encodeURIComponent(String(id)),
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
				configuration,
			);

			if (mergeIntoInstitutionId !== undefined) {
				localVarQueryParameter["merge_into_institution_id"] =
					mergeIntoInstitutionId;
			}

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
		/**
		 * Gets an institution by its ID.
		 * @summary Get institution
		 * @param {number} id The unique identifier of the institution.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		institutionsIdGet: async (
			id: number,
			options: AxiosRequestConfig = {},
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("institutionsIdGet", "id", id);
			const localVarPath = `/institutions/{id}`.replace(
				`{${"id"}}`,
				encodeURIComponent(String(id)),
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
				configuration,
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
		/**
		 * Updates the title and currency code for an institution.
		 * @summary Update institution
		 * @param {number} id The unique identifier of the institution.
		 * @param {InstitutionsIdDeleteRequest} [institutionsIdDeleteRequest]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		institutionsIdPut: async (
			id: number,
			institutionsIdDeleteRequest?: InstitutionsIdDeleteRequest,
			options: AxiosRequestConfig = {},
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("institutionsIdPut", "id", id);
			const localVarPath = `/institutions/{id}`.replace(
				`{${"id"}}`,
				encodeURIComponent(String(id)),
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
				configuration,
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
				institutionsIdDeleteRequest,
				localVarRequestOptions,
				configuration,
			);

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions,
			};
		},
		/**
		 * Lists all the institutions belonging to the user.
		 * @summary List institutions in user
		 * @param {number} id The unique identifier of the user
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		usersIdInstitutionsGet: async (
			id: number,
			options: AxiosRequestConfig = {},
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("usersIdInstitutionsGet", "id", id);
			const localVarPath = `/users/{id}/institutions`.replace(
				`{${"id"}}`,
				encodeURIComponent(String(id)),
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
				configuration,
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
		/**
		 * Creates an institution belonging to a user.
		 * @summary Create institution in user
		 * @param {number} id The unique identifier of the user
		 * @param {UsersIdInstitutionsGetRequest} [usersIdInstitutionsGetRequest]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		usersIdInstitutionsPost: async (
			id: number,
			usersIdInstitutionsGetRequest?: UsersIdInstitutionsGetRequest,
			options: AxiosRequestConfig = {},
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("usersIdInstitutionsPost", "id", id);
			const localVarPath = `/users/{id}/institutions`.replace(
				`{${"id"}}`,
				encodeURIComponent(String(id)),
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
				configuration,
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
				usersIdInstitutionsGetRequest,
				localVarRequestOptions,
				configuration,
			);

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions,
			};
		},
	};
};

/**
 * InstitutionsApi - functional programming interface
 * @export
 */
export const InstitutionsApiFp = function (configuration?: Configuration) {
	const localVarAxiosParamCreator =
		InstitutionsApiAxiosParamCreator(configuration);
	return {
		/**
		 * Deletes an institution and all data within. Alternatively, another institution can be provided to merge the data into to avoid losing it.
		 * @summary Delete institution
		 * @param {number} id The unique identifier of the institution.
		 * @param {number} [mergeIntoInstitutionId] The unique identifier of the institution to merge into.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async institutionsIdDelete(
			id: number,
			mergeIntoInstitutionId?: number,
			options?: AxiosRequestConfig,
		): Promise<
			(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.institutionsIdDelete(
					id,
					mergeIntoInstitutionId,
					options,
				);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration,
			);
		},
		/**
		 * Gets an institution by its ID.
		 * @summary Get institution
		 * @param {number} id The unique identifier of the institution.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async institutionsIdGet(
			id: number,
			options?: AxiosRequestConfig,
		): Promise<
			(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Institution>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.institutionsIdGet(id, options);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration,
			);
		},
		/**
		 * Updates the title and currency code for an institution.
		 * @summary Update institution
		 * @param {number} id The unique identifier of the institution.
		 * @param {InstitutionsIdDeleteRequest} [institutionsIdDeleteRequest]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async institutionsIdPut(
			id: number,
			institutionsIdDeleteRequest?: InstitutionsIdDeleteRequest,
			options?: AxiosRequestConfig,
		): Promise<
			(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Institution>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.institutionsIdPut(
					id,
					institutionsIdDeleteRequest,
					options,
				);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration,
			);
		},
		/**
		 * Lists all the institutions belonging to the user.
		 * @summary List institutions in user
		 * @param {number} id The unique identifier of the user
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async usersIdInstitutionsGet(
			id: number,
			options?: AxiosRequestConfig,
		): Promise<
			(
				axios?: AxiosInstance,
				basePath?: string,
			) => AxiosPromise<Array<Institution>>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.usersIdInstitutionsGet(id, options);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration,
			);
		},
		/**
		 * Creates an institution belonging to a user.
		 * @summary Create institution in user
		 * @param {number} id The unique identifier of the user
		 * @param {UsersIdInstitutionsGetRequest} [usersIdInstitutionsGetRequest]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async usersIdInstitutionsPost(
			id: number,
			usersIdInstitutionsGetRequest?: UsersIdInstitutionsGetRequest,
			options?: AxiosRequestConfig,
		): Promise<
			(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Institution>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.usersIdInstitutionsPost(
					id,
					usersIdInstitutionsGetRequest,
					options,
				);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration,
			);
		},
	};
};

/**
 * InstitutionsApi - factory interface
 * @export
 */
export const InstitutionsApiFactory = function (
	configuration?: Configuration,
	basePath?: string,
	axios?: AxiosInstance,
) {
	const localVarFp = InstitutionsApiFp(configuration);
	return {
		/**
		 * Deletes an institution and all data within. Alternatively, another institution can be provided to merge the data into to avoid losing it.
		 * @summary Delete institution
		 * @param {number} id The unique identifier of the institution.
		 * @param {number} [mergeIntoInstitutionId] The unique identifier of the institution to merge into.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		institutionsIdDelete(
			id: number,
			mergeIntoInstitutionId?: number,
			options?: any,
		): AxiosPromise<void> {
			return localVarFp
				.institutionsIdDelete(id, mergeIntoInstitutionId, options)
				.then((request) => request(axios, basePath));
		},
		/**
		 * Gets an institution by its ID.
		 * @summary Get institution
		 * @param {number} id The unique identifier of the institution.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		institutionsIdGet(id: number, options?: any): AxiosPromise<Institution> {
			return localVarFp
				.institutionsIdGet(id, options)
				.then((request) => request(axios, basePath));
		},
		/**
		 * Updates the title and currency code for an institution.
		 * @summary Update institution
		 * @param {number} id The unique identifier of the institution.
		 * @param {InstitutionsIdDeleteRequest} [institutionsIdDeleteRequest]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		institutionsIdPut(
			id: number,
			institutionsIdDeleteRequest?: InstitutionsIdDeleteRequest,
			options?: any,
		): AxiosPromise<Institution> {
			return localVarFp
				.institutionsIdPut(id, institutionsIdDeleteRequest, options)
				.then((request) => request(axios, basePath));
		},
		/**
		 * Lists all the institutions belonging to the user.
		 * @summary List institutions in user
		 * @param {number} id The unique identifier of the user
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		usersIdInstitutionsGet(
			id: number,
			options?: any,
		): AxiosPromise<Array<Institution>> {
			return localVarFp
				.usersIdInstitutionsGet(id, options)
				.then((request) => request(axios, basePath));
		},
		/**
		 * Creates an institution belonging to a user.
		 * @summary Create institution in user
		 * @param {number} id The unique identifier of the user
		 * @param {UsersIdInstitutionsGetRequest} [usersIdInstitutionsGetRequest]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		usersIdInstitutionsPost(
			id: number,
			usersIdInstitutionsGetRequest?: UsersIdInstitutionsGetRequest,
			options?: any,
		): AxiosPromise<Institution> {
			return localVarFp
				.usersIdInstitutionsPost(id, usersIdInstitutionsGetRequest, options)
				.then((request) => request(axios, basePath));
		},
	};
};

/**
 * InstitutionsApi - object-oriented interface
 * @export
 * @class InstitutionsApi
 * @extends {BaseAPI}
 */
export class InstitutionsApi extends BaseAPI {
	/**
	 * Deletes an institution and all data within. Alternatively, another institution can be provided to merge the data into to avoid losing it.
	 * @summary Delete institution
	 * @param {number} id The unique identifier of the institution.
	 * @param {number} [mergeIntoInstitutionId] The unique identifier of the institution to merge into.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof InstitutionsApi
	 */
	public institutionsIdDelete(
		id: number,
		mergeIntoInstitutionId?: number,
		options?: AxiosRequestConfig,
	) {
		return InstitutionsApiFp(this.configuration)
			.institutionsIdDelete(id, mergeIntoInstitutionId, options)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Gets an institution by its ID.
	 * @summary Get institution
	 * @param {number} id The unique identifier of the institution.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof InstitutionsApi
	 */
	public institutionsIdGet(id: number, options?: AxiosRequestConfig) {
		return InstitutionsApiFp(this.configuration)
			.institutionsIdGet(id, options)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Updates the title and currency code for an institution.
	 * @summary Update institution
	 * @param {number} id The unique identifier of the institution.
	 * @param {InstitutionsIdDeleteRequest} [institutionsIdDeleteRequest]
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof InstitutionsApi
	 */
	public institutionsIdPut(
		id: number,
		institutionsIdDeleteRequest?: InstitutionsIdDeleteRequest,
		options?: AxiosRequestConfig,
	) {
		return InstitutionsApiFp(this.configuration)
			.institutionsIdPut(id, institutionsIdDeleteRequest, options)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Lists all the institutions belonging to the user.
	 * @summary List institutions in user
	 * @param {number} id The unique identifier of the user
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof InstitutionsApi
	 */
	public usersIdInstitutionsGet(id: number, options?: AxiosRequestConfig) {
		return InstitutionsApiFp(this.configuration)
			.usersIdInstitutionsGet(id, options)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Creates an institution belonging to a user.
	 * @summary Create institution in user
	 * @param {number} id The unique identifier of the user
	 * @param {UsersIdInstitutionsGetRequest} [usersIdInstitutionsGetRequest]
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof InstitutionsApi
	 */
	public usersIdInstitutionsPost(
		id: number,
		usersIdInstitutionsGetRequest?: UsersIdInstitutionsGetRequest,
		options?: AxiosRequestConfig,
	) {
		return InstitutionsApiFp(this.configuration)
			.usersIdInstitutionsPost(id, usersIdInstitutionsGetRequest, options)
			.then((request) => request(this.axios, this.basePath));
	}
}
