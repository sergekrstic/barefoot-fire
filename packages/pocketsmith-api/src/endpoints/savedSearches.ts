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
import { SavedSearch } from "../types/api.types";

/**
 * SavedSearchesApi - axios parameter creator
 * @export
 */
export const SavedSearchesApiAxiosParamCreator = function (
	configuration?: Configuration,
) {
	return {
		/**
		 * Lists saved searches belonging to a user by their ID.
		 * @summary List saved searches in user
		 * @param {number} id The unique identifier of the user.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		usersIdSavedSearchesGet: async (
			id: number,
			options: AxiosRequestConfig = {},
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("usersIdSavedSearchesGet", "id", id);
			const localVarPath = `/users/{id}/saved_searches`.replace(
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
	};
};

/**
 * SavedSearchesApi - functional programming interface
 * @export
 */
export const SavedSearchesApiFp = function (configuration?: Configuration) {
	const localVarAxiosParamCreator =
		SavedSearchesApiAxiosParamCreator(configuration);
	return {
		/**
		 * Lists saved searches belonging to a user by their ID.
		 * @summary List saved searches in user
		 * @param {number} id The unique identifier of the user.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async usersIdSavedSearchesGet(
			id: number,
			options?: AxiosRequestConfig,
		): Promise<
			(
				axios?: AxiosInstance,
				basePath?: string,
			) => AxiosPromise<Array<SavedSearch>>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.usersIdSavedSearchesGet(id, options);
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
 * SavedSearchesApi - factory interface
 * @export
 */
export const SavedSearchesApiFactory = function (
	configuration?: Configuration,
	basePath?: string,
	axios?: AxiosInstance,
) {
	const localVarFp = SavedSearchesApiFp(configuration);
	return {
		/**
		 * Lists saved searches belonging to a user by their ID.
		 * @summary List saved searches in user
		 * @param {number} id The unique identifier of the user.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		usersIdSavedSearchesGet(
			id: number,
			options?: any,
		): AxiosPromise<Array<SavedSearch>> {
			return localVarFp
				.usersIdSavedSearchesGet(id, options)
				.then((request) => request(axios, basePath));
		},
	};
};

/**
 * SavedSearchesApi - object-oriented interface
 * @export
 * @class SavedSearchesApi
 * @extends {BaseAPI}
 */
export class SavedSearchesApi extends BaseAPI {
	/**
	 * Lists saved searches belonging to a user by their ID.
	 * @summary List saved searches in user
	 * @param {number} id The unique identifier of the user.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof SavedSearchesApi
	 */
	public usersIdSavedSearchesGet(id: number, options?: AxiosRequestConfig) {
		return SavedSearchesApiFp(this.configuration)
			.usersIdSavedSearchesGet(id, options)
			.then((request) => request(this.axios, this.basePath));
	}
}
