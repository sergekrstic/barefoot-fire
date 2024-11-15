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
	Transaction,
	TransactionAccountsIdTransactionsGetRequest,
	TransactionsIdDeleteRequest,
} from "../types/types";

/**
 * TransactionsApi - axios parameter creator
 * @export
 */
export const TransactionsApiAxiosParamCreator = function (
	configuration?: Configuration,
) {
	return {
		/**
		 * Lists transactions belonging to an account by its ID.
		 * @summary List transactions in account
		 * @param {number} id The unique identifier of the account.
		 * @param {string} [startDate] Limit to transactions on or after this date. Required if end_date is provided. If not provided, defaults to the furtherest date allowed by the user\&#39;s subscription.
		 * @param {string} [endDate] Limit to transactions on or before this date. Required if start_date is provided. If not provided, defaults to today\&#39;s date.
		 * @param {string} [updatedSince] Limit to transactions updated since an ISO 8601 timestamp.
		 * @param {number} [uncategorised] Limit to uncategorised transactions.
		 * @param {'debit' | 'credit'} [type] Limit to transactions of this type.
		 * @param {number} [needsReview] Limit to transactions that need to be reviewed.
		 * @param {string} [search] Limit to transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in ISO 8601 format.
		 * @param {number} [page] Choose a particular page of the results.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		accountsIdTransactionsGet: async (
			id: number,
			startDate?: string,
			endDate?: string,
			updatedSince?: string,
			uncategorised?: number,
			type?: "debit" | "credit",
			needsReview?: number,
			search?: string,
			page?: number,
			options: AxiosRequestConfig = {},
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("accountsIdTransactionsGet", "id", id);
			const localVarPath = `/accounts/{id}/transactions`.replace(
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

			if (startDate !== undefined) {
				localVarQueryParameter["start_date"] = startDate;
			}

			if (endDate !== undefined) {
				localVarQueryParameter["end_date"] = endDate;
			}

			if (updatedSince !== undefined) {
				localVarQueryParameter["updated_since"] = updatedSince;
			}

			if (uncategorised !== undefined) {
				localVarQueryParameter["uncategorised"] = uncategorised;
			}

			if (type !== undefined) {
				localVarQueryParameter["type"] = type;
			}

			if (needsReview !== undefined) {
				localVarQueryParameter["needs_review"] = needsReview;
			}

			if (search !== undefined) {
				localVarQueryParameter["search"] = search;
			}

			if (page !== undefined) {
				localVarQueryParameter["page"] = page;
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
		 * Lists transactions belonging to one or more categories by their IDs.
		 * @summary List transactions in categories
		 * @param {string} id A comma-separated list of category IDs.
		 * @param {string} [startDate] Limit to transactions on or after this date. Required if end_date is provided. If not provided, defaults to the furtherest date allowed by the user\&#39;s subscription.
		 * @param {string} [endDate] Limit to transactions on or before this date. Required if start_date is provided. If not provided, defaults to today\&#39;s date.
		 * @param {string} [updatedSince] Limit to transactions updated since an ISO 8601 timestamp.
		 * @param {number} [uncategorised] Limit to uncategorised transactions.
		 * @param {'debit' | 'credit'} [type] Limit to transactions of this type.
		 * @param {number} [needsReview] Limit to transactions that need to be reviewed.
		 * @param {string} [search] Limit to transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in ISO 8601 format.
		 * @param {number} [page] Choose a particular page of the results.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		categoriesIdTransactionsGet: async (
			id: string,
			startDate?: string,
			endDate?: string,
			updatedSince?: string,
			uncategorised?: number,
			type?: "debit" | "credit",
			needsReview?: number,
			search?: string,
			page?: number,
			options: AxiosRequestConfig = {},
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("categoriesIdTransactionsGet", "id", id);
			const localVarPath = `/categories/{id}/transactions`.replace(
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

			if (startDate !== undefined) {
				localVarQueryParameter["start_date"] = startDate;
			}

			if (endDate !== undefined) {
				localVarQueryParameter["end_date"] = endDate;
			}

			if (updatedSince !== undefined) {
				localVarQueryParameter["updated_since"] = updatedSince;
			}

			if (uncategorised !== undefined) {
				localVarQueryParameter["uncategorised"] = uncategorised;
			}

			if (type !== undefined) {
				localVarQueryParameter["type"] = type;
			}

			if (needsReview !== undefined) {
				localVarQueryParameter["needs_review"] = needsReview;
			}

			if (search !== undefined) {
				localVarQueryParameter["search"] = search;
			}

			if (page !== undefined) {
				localVarQueryParameter["page"] = page;
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
		 * Lists transactions belonging to a transaction account by its ID.
		 * @summary List transactions in transaction account
		 * @param {number} id The unique identifier of the transaction account.
		 * @param {string} [startDate] Limit to transactions on or after this date. Required if end_date is provided. If not provided, defaults to the furtherest date allowed by the user\&#39;s subscription.
		 * @param {string} [endDate] Limit to transactions on or before this date. Required if start_date is provided. If not provided, defaults to today\&#39;s date.
		 * @param {string} [updatedSince] Limit to transactions updated since an ISO 8601 timestamp.
		 * @param {number} [uncategorised] Limit to uncategorised transactions.
		 * @param {'debit' | 'credit'} [type] Limit to transactions of this type.
		 * @param {number} [needsReview] Limit to transactions that need to be reviewed.
		 * @param {string} [search] Limit to transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in ISO 8601 format.
		 * @param {number} [page] Choose a particular page of the results.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		transactionAccountsIdTransactionsGet: async (
			id: number,
			startDate?: string,
			endDate?: string,
			updatedSince?: string,
			uncategorised?: number,
			type?: "debit" | "credit",
			needsReview?: number,
			search?: string,
			page?: number,
			options: AxiosRequestConfig = {},
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("transactionAccountsIdTransactionsGet", "id", id);
			const localVarPath = `/transaction_accounts/{id}/transactions`.replace(
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

			if (startDate !== undefined) {
				localVarQueryParameter["start_date"] = startDate;
			}

			if (endDate !== undefined) {
				localVarQueryParameter["end_date"] = endDate;
			}

			if (updatedSince !== undefined) {
				localVarQueryParameter["updated_since"] = updatedSince;
			}

			if (uncategorised !== undefined) {
				localVarQueryParameter["uncategorised"] = uncategorised;
			}

			if (type !== undefined) {
				localVarQueryParameter["type"] = type;
			}

			if (needsReview !== undefined) {
				localVarQueryParameter["needs_review"] = needsReview;
			}

			if (search !== undefined) {
				localVarQueryParameter["search"] = search;
			}

			if (page !== undefined) {
				localVarQueryParameter["page"] = page;
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
		 * Creates a transaction in a transaction account by its ID.
		 * @summary Create a transaction in transaction account
		 * @param {number} id The unique identifier of the transaction account.
		 * @param {TransactionAccountsIdTransactionsGetRequest} [transactionAccountsIdTransactionsGetRequest]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		transactionAccountsIdTransactionsPost: async (
			id: number,
			transactionAccountsIdTransactionsGetRequest?: TransactionAccountsIdTransactionsGetRequest,
			options: AxiosRequestConfig = {},
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("transactionAccountsIdTransactionsPost", "id", id);
			const localVarPath = `/transaction_accounts/{id}/transactions`.replace(
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
				transactionAccountsIdTransactionsGetRequest,
				localVarRequestOptions,
				configuration,
			);

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions,
			};
		},
		/**
		 * Deletes a transaction and all its data by ID.
		 * @summary Delete transaction
		 * @param {number} id The unique identifier of the transaction.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		transactionsIdDelete: async (
			id: number,
			options: AxiosRequestConfig = {},
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("transactionsIdDelete", "id", id);
			const localVarPath = `/transactions/{id}`.replace(
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
		 * Gets a transaction by its ID.
		 * @summary Get a transaction
		 * @param {number} id The unique identifier of the transaction.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		transactionsIdGet: async (
			id: number,
			options: AxiosRequestConfig = {},
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("transactionsIdGet", "id", id);
			const localVarPath = `/transactions/{id}`.replace(
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
		 * Updates a transaction by its ID.
		 * @summary Update a transaction
		 * @param {number} id The unique identifier of the transaction.
		 * @param {TransactionsIdDeleteRequest} [transactionsIdDeleteRequest]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		transactionsIdPut: async (
			id: number,
			transactionsIdDeleteRequest?: TransactionsIdDeleteRequest,
			options: AxiosRequestConfig = {},
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("transactionsIdPut", "id", id);
			const localVarPath = `/transactions/{id}`.replace(
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
				transactionsIdDeleteRequest,
				localVarRequestOptions,
				configuration,
			);

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions,
			};
		},
		/**
		 * Lists transactions belonging to a user by their ID.
		 * @summary List transactions in user
		 * @param {number} id The unique identifier of the account.
		 * @param {string} [startDate] Limit to transactions on or after this date. Required if end_date is provided. If not provided, defaults to the furtherest date allowed by the user\&#39;s subscription.
		 * @param {string} [endDate] Limit to transactions on or before this date. Required if start_date is provided. If not provided, defaults to today\&#39;s date.
		 * @param {string} [updatedSince] Limit to transactions updated since an ISO 8601 timestamp.
		 * @param {number} [uncategorised] Limit to uncategorised transactions.
		 * @param {'debit' | 'credit'} [type] Limit to transactions of this type.
		 * @param {number} [needsReview] Limit to transactions that need to be reviewed.
		 * @param {string} [search] Limit to transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in ISO 8601 format.
		 * @param {number} [page] Choose a particular page of the results.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		usersIdTransactionsGet: async (
			id: number,
			startDate?: string,
			endDate?: string,
			updatedSince?: string,
			uncategorised?: number,
			type?: "debit" | "credit",
			needsReview?: number,
			search?: string,
			page?: number,
			options: AxiosRequestConfig = {},
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("usersIdTransactionsGet", "id", id);
			const localVarPath = `/users/{id}/transactions`.replace(
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

			if (startDate !== undefined) {
				localVarQueryParameter["start_date"] = startDate;
			}

			if (endDate !== undefined) {
				localVarQueryParameter["end_date"] = endDate;
			}

			if (updatedSince !== undefined) {
				localVarQueryParameter["updated_since"] = updatedSince;
			}

			if (uncategorised !== undefined) {
				localVarQueryParameter["uncategorised"] = uncategorised;
			}

			if (type !== undefined) {
				localVarQueryParameter["type"] = type;
			}

			if (needsReview !== undefined) {
				localVarQueryParameter["needs_review"] = needsReview;
			}

			if (search !== undefined) {
				localVarQueryParameter["search"] = search;
			}

			if (page !== undefined) {
				localVarQueryParameter["page"] = page;
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
	};
};

/**
 * TransactionsApi - functional programming interface
 * @export
 */
export const TransactionsApiFp = function (configuration?: Configuration) {
	const localVarAxiosParamCreator =
		TransactionsApiAxiosParamCreator(configuration);
	return {
		/**
		 * Lists transactions belonging to an account by its ID.
		 * @summary List transactions in account
		 * @param {number} id The unique identifier of the account.
		 * @param {string} [startDate] Limit to transactions on or after this date. Required if end_date is provided. If not provided, defaults to the furtherest date allowed by the user\&#39;s subscription.
		 * @param {string} [endDate] Limit to transactions on or before this date. Required if start_date is provided. If not provided, defaults to today\&#39;s date.
		 * @param {string} [updatedSince] Limit to transactions updated since an ISO 8601 timestamp.
		 * @param {number} [uncategorised] Limit to uncategorised transactions.
		 * @param {'debit' | 'credit'} [type] Limit to transactions of this type.
		 * @param {number} [needsReview] Limit to transactions that need to be reviewed.
		 * @param {string} [search] Limit to transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in ISO 8601 format.
		 * @param {number} [page] Choose a particular page of the results.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async accountsIdTransactionsGet(
			id: number,
			startDate?: string,
			endDate?: string,
			updatedSince?: string,
			uncategorised?: number,
			type?: "debit" | "credit",
			needsReview?: number,
			search?: string,
			page?: number,
			options?: AxiosRequestConfig,
		): Promise<
			(
				axios?: AxiosInstance,
				basePath?: string,
			) => AxiosPromise<Array<Transaction>>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.accountsIdTransactionsGet(
					id,
					startDate,
					endDate,
					updatedSince,
					uncategorised,
					type,
					needsReview,
					search,
					page,
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
		 * Lists transactions belonging to one or more categories by their IDs.
		 * @summary List transactions in categories
		 * @param {string} id A comma-separated list of category IDs.
		 * @param {string} [startDate] Limit to transactions on or after this date. Required if end_date is provided. If not provided, defaults to the furtherest date allowed by the user\&#39;s subscription.
		 * @param {string} [endDate] Limit to transactions on or before this date. Required if start_date is provided. If not provided, defaults to today\&#39;s date.
		 * @param {string} [updatedSince] Limit to transactions updated since an ISO 8601 timestamp.
		 * @param {number} [uncategorised] Limit to uncategorised transactions.
		 * @param {'debit' | 'credit'} [type] Limit to transactions of this type.
		 * @param {number} [needsReview] Limit to transactions that need to be reviewed.
		 * @param {string} [search] Limit to transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in ISO 8601 format.
		 * @param {number} [page] Choose a particular page of the results.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async categoriesIdTransactionsGet(
			id: string,
			startDate?: string,
			endDate?: string,
			updatedSince?: string,
			uncategorised?: number,
			type?: "debit" | "credit",
			needsReview?: number,
			search?: string,
			page?: number,
			options?: AxiosRequestConfig,
		): Promise<
			(
				axios?: AxiosInstance,
				basePath?: string,
			) => AxiosPromise<Array<Transaction>>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.categoriesIdTransactionsGet(
					id,
					startDate,
					endDate,
					updatedSince,
					uncategorised,
					type,
					needsReview,
					search,
					page,
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
		 * Lists transactions belonging to a transaction account by its ID.
		 * @summary List transactions in transaction account
		 * @param {number} id The unique identifier of the transaction account.
		 * @param {string} [startDate] Limit to transactions on or after this date. Required if end_date is provided. If not provided, defaults to the furtherest date allowed by the user\&#39;s subscription.
		 * @param {string} [endDate] Limit to transactions on or before this date. Required if start_date is provided. If not provided, defaults to today\&#39;s date.
		 * @param {string} [updatedSince] Limit to transactions updated since an ISO 8601 timestamp.
		 * @param {number} [uncategorised] Limit to uncategorised transactions.
		 * @param {'debit' | 'credit'} [type] Limit to transactions of this type.
		 * @param {number} [needsReview] Limit to transactions that need to be reviewed.
		 * @param {string} [search] Limit to transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in ISO 8601 format.
		 * @param {number} [page] Choose a particular page of the results.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async transactionAccountsIdTransactionsGet(
			id: number,
			startDate?: string,
			endDate?: string,
			updatedSince?: string,
			uncategorised?: number,
			type?: "debit" | "credit",
			needsReview?: number,
			search?: string,
			page?: number,
			options?: AxiosRequestConfig,
		): Promise<
			(
				axios?: AxiosInstance,
				basePath?: string,
			) => AxiosPromise<Array<Transaction>>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.transactionAccountsIdTransactionsGet(
					id,
					startDate,
					endDate,
					updatedSince,
					uncategorised,
					type,
					needsReview,
					search,
					page,
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
		 * Creates a transaction in a transaction account by its ID.
		 * @summary Create a transaction in transaction account
		 * @param {number} id The unique identifier of the transaction account.
		 * @param {TransactionAccountsIdTransactionsGetRequest} [transactionAccountsIdTransactionsGetRequest]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async transactionAccountsIdTransactionsPost(
			id: number,
			transactionAccountsIdTransactionsGetRequest?: TransactionAccountsIdTransactionsGetRequest,
			options?: AxiosRequestConfig,
		): Promise<
			(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Transaction>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.transactionAccountsIdTransactionsPost(
					id,
					transactionAccountsIdTransactionsGetRequest,
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
		 * Deletes a transaction and all its data by ID.
		 * @summary Delete transaction
		 * @param {number} id The unique identifier of the transaction.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async transactionsIdDelete(
			id: number,
			options?: AxiosRequestConfig,
		): Promise<
			(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.transactionsIdDelete(id, options);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration,
			);
		},
		/**
		 * Gets a transaction by its ID.
		 * @summary Get a transaction
		 * @param {number} id The unique identifier of the transaction.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async transactionsIdGet(
			id: number,
			options?: AxiosRequestConfig,
		): Promise<
			(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Transaction>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.transactionsIdGet(id, options);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration,
			);
		},
		/**
		 * Updates a transaction by its ID.
		 * @summary Update a transaction
		 * @param {number} id The unique identifier of the transaction.
		 * @param {TransactionsIdDeleteRequest} [transactionsIdDeleteRequest]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async transactionsIdPut(
			id: number,
			transactionsIdDeleteRequest?: TransactionsIdDeleteRequest,
			options?: AxiosRequestConfig,
		): Promise<
			(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Transaction>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.transactionsIdPut(
					id,
					transactionsIdDeleteRequest,
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
		 * Lists transactions belonging to a user by their ID.
		 * @summary List transactions in user
		 * @param {number} id The unique identifier of the account.
		 * @param {string} [startDate] Limit to transactions on or after this date. Required if end_date is provided. If not provided, defaults to the furtherest date allowed by the user\&#39;s subscription.
		 * @param {string} [endDate] Limit to transactions on or before this date. Required if start_date is provided. If not provided, defaults to today\&#39;s date.
		 * @param {string} [updatedSince] Limit to transactions updated since an ISO 8601 timestamp.
		 * @param {number} [uncategorised] Limit to uncategorised transactions.
		 * @param {'debit' | 'credit'} [type] Limit to transactions of this type.
		 * @param {number} [needsReview] Limit to transactions that need to be reviewed.
		 * @param {string} [search] Limit to transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in ISO 8601 format.
		 * @param {number} [page] Choose a particular page of the results.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async usersIdTransactionsGet(
			id: number,
			startDate?: string,
			endDate?: string,
			updatedSince?: string,
			uncategorised?: number,
			type?: "debit" | "credit",
			needsReview?: number,
			search?: string,
			page?: number,
			options?: AxiosRequestConfig,
		): Promise<
			(
				axios?: AxiosInstance,
				basePath?: string,
			) => AxiosPromise<Array<Transaction>>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.usersIdTransactionsGet(
					id,
					startDate,
					endDate,
					updatedSince,
					uncategorised,
					type,
					needsReview,
					search,
					page,
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
 * TransactionsApi - factory interface
 * @export
 */
export const TransactionsApiFactory = function (
	configuration?: Configuration,
	basePath?: string,
	axios?: AxiosInstance,
) {
	const localVarFp = TransactionsApiFp(configuration);
	return {
		/**
		 * Lists transactions belonging to an account by its ID.
		 * @summary List transactions in account
		 * @param {number} id The unique identifier of the account.
		 * @param {string} [startDate] Limit to transactions on or after this date. Required if end_date is provided. If not provided, defaults to the furtherest date allowed by the user\&#39;s subscription.
		 * @param {string} [endDate] Limit to transactions on or before this date. Required if start_date is provided. If not provided, defaults to today\&#39;s date.
		 * @param {string} [updatedSince] Limit to transactions updated since an ISO 8601 timestamp.
		 * @param {number} [uncategorised] Limit to uncategorised transactions.
		 * @param {'debit' | 'credit'} [type] Limit to transactions of this type.
		 * @param {number} [needsReview] Limit to transactions that need to be reviewed.
		 * @param {string} [search] Limit to transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in ISO 8601 format.
		 * @param {number} [page] Choose a particular page of the results.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		accountsIdTransactionsGet(
			id: number,
			startDate?: string,
			endDate?: string,
			updatedSince?: string,
			uncategorised?: number,
			type?: "debit" | "credit",
			needsReview?: number,
			search?: string,
			page?: number,
			options?: any,
		): AxiosPromise<Array<Transaction>> {
			return localVarFp
				.accountsIdTransactionsGet(
					id,
					startDate,
					endDate,
					updatedSince,
					uncategorised,
					type,
					needsReview,
					search,
					page,
					options,
				)
				.then((request) => request(axios, basePath));
		},
		/**
		 * Lists transactions belonging to one or more categories by their IDs.
		 * @summary List transactions in categories
		 * @param {string} id A comma-separated list of category IDs.
		 * @param {string} [startDate] Limit to transactions on or after this date. Required if end_date is provided. If not provided, defaults to the furtherest date allowed by the user\&#39;s subscription.
		 * @param {string} [endDate] Limit to transactions on or before this date. Required if start_date is provided. If not provided, defaults to today\&#39;s date.
		 * @param {string} [updatedSince] Limit to transactions updated since an ISO 8601 timestamp.
		 * @param {number} [uncategorised] Limit to uncategorised transactions.
		 * @param {'debit' | 'credit'} [type] Limit to transactions of this type.
		 * @param {number} [needsReview] Limit to transactions that need to be reviewed.
		 * @param {string} [search] Limit to transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in ISO 8601 format.
		 * @param {number} [page] Choose a particular page of the results.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		categoriesIdTransactionsGet(
			id: string,
			startDate?: string,
			endDate?: string,
			updatedSince?: string,
			uncategorised?: number,
			type?: "debit" | "credit",
			needsReview?: number,
			search?: string,
			page?: number,
			options?: any,
		): AxiosPromise<Array<Transaction>> {
			return localVarFp
				.categoriesIdTransactionsGet(
					id,
					startDate,
					endDate,
					updatedSince,
					uncategorised,
					type,
					needsReview,
					search,
					page,
					options,
				)
				.then((request) => request(axios, basePath));
		},
		/**
		 * Lists transactions belonging to a transaction account by its ID.
		 * @summary List transactions in transaction account
		 * @param {number} id The unique identifier of the transaction account.
		 * @param {string} [startDate] Limit to transactions on or after this date. Required if end_date is provided. If not provided, defaults to the furtherest date allowed by the user\&#39;s subscription.
		 * @param {string} [endDate] Limit to transactions on or before this date. Required if start_date is provided. If not provided, defaults to today\&#39;s date.
		 * @param {string} [updatedSince] Limit to transactions updated since an ISO 8601 timestamp.
		 * @param {number} [uncategorised] Limit to uncategorised transactions.
		 * @param {'debit' | 'credit'} [type] Limit to transactions of this type.
		 * @param {number} [needsReview] Limit to transactions that need to be reviewed.
		 * @param {string} [search] Limit to transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in ISO 8601 format.
		 * @param {number} [page] Choose a particular page of the results.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		transactionAccountsIdTransactionsGet(
			id: number,
			startDate?: string,
			endDate?: string,
			updatedSince?: string,
			uncategorised?: number,
			type?: "debit" | "credit",
			needsReview?: number,
			search?: string,
			page?: number,
			options?: any,
		): AxiosPromise<Array<Transaction>> {
			return localVarFp
				.transactionAccountsIdTransactionsGet(
					id,
					startDate,
					endDate,
					updatedSince,
					uncategorised,
					type,
					needsReview,
					search,
					page,
					options,
				)
				.then((request) => request(axios, basePath));
		},
		/**
		 * Creates a transaction in a transaction account by its ID.
		 * @summary Create a transaction in transaction account
		 * @param {number} id The unique identifier of the transaction account.
		 * @param {TransactionAccountsIdTransactionsGetRequest} [transactionAccountsIdTransactionsGetRequest]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		transactionAccountsIdTransactionsPost(
			id: number,
			transactionAccountsIdTransactionsGetRequest?: TransactionAccountsIdTransactionsGetRequest,
			options?: any,
		): AxiosPromise<Transaction> {
			return localVarFp
				.transactionAccountsIdTransactionsPost(
					id,
					transactionAccountsIdTransactionsGetRequest,
					options,
				)
				.then((request) => request(axios, basePath));
		},
		/**
		 * Deletes a transaction and all its data by ID.
		 * @summary Delete transaction
		 * @param {number} id The unique identifier of the transaction.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		transactionsIdDelete(id: number, options?: any): AxiosPromise<void> {
			return localVarFp
				.transactionsIdDelete(id, options)
				.then((request) => request(axios, basePath));
		},
		/**
		 * Gets a transaction by its ID.
		 * @summary Get a transaction
		 * @param {number} id The unique identifier of the transaction.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		transactionsIdGet(id: number, options?: any): AxiosPromise<Transaction> {
			return localVarFp
				.transactionsIdGet(id, options)
				.then((request) => request(axios, basePath));
		},
		/**
		 * Updates a transaction by its ID.
		 * @summary Update a transaction
		 * @param {number} id The unique identifier of the transaction.
		 * @param {TransactionsIdDeleteRequest} [transactionsIdDeleteRequest]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		transactionsIdPut(
			id: number,
			transactionsIdDeleteRequest?: TransactionsIdDeleteRequest,
			options?: any,
		): AxiosPromise<Transaction> {
			return localVarFp
				.transactionsIdPut(id, transactionsIdDeleteRequest, options)
				.then((request) => request(axios, basePath));
		},
		/**
		 * Lists transactions belonging to a user by their ID.
		 * @summary List transactions in user
		 * @param {number} id The unique identifier of the account.
		 * @param {string} [startDate] Limit to transactions on or after this date. Required if end_date is provided. If not provided, defaults to the furtherest date allowed by the user\&#39;s subscription.
		 * @param {string} [endDate] Limit to transactions on or before this date. Required if start_date is provided. If not provided, defaults to today\&#39;s date.
		 * @param {string} [updatedSince] Limit to transactions updated since an ISO 8601 timestamp.
		 * @param {number} [uncategorised] Limit to uncategorised transactions.
		 * @param {'debit' | 'credit'} [type] Limit to transactions of this type.
		 * @param {number} [needsReview] Limit to transactions that need to be reviewed.
		 * @param {string} [search] Limit to transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in ISO 8601 format.
		 * @param {number} [page] Choose a particular page of the results.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		usersIdTransactionsGet(
			id: number,
			startDate?: string,
			endDate?: string,
			updatedSince?: string,
			uncategorised?: number,
			type?: "debit" | "credit",
			needsReview?: number,
			search?: string,
			page?: number,
			options?: any,
		): AxiosPromise<Array<Transaction>> {
			return localVarFp
				.usersIdTransactionsGet(
					id,
					startDate,
					endDate,
					updatedSince,
					uncategorised,
					type,
					needsReview,
					search,
					page,
					options,
				)
				.then((request) => request(axios, basePath));
		},
	};
};

/**
 * TransactionsApi - object-oriented interface
 * @export
 * @class TransactionsApi
 * @extends {BaseAPI}
 */
export class TransactionsApi extends BaseAPI {
	/**
	 * Lists transactions belonging to an account by its ID.
	 * @summary List transactions in account
	 * @param {number} id The unique identifier of the account.
	 * @param {string} [startDate] Limit to transactions on or after this date. Required if end_date is provided. If not provided, defaults to the furtherest date allowed by the user\&#39;s subscription.
	 * @param {string} [endDate] Limit to transactions on or before this date. Required if start_date is provided. If not provided, defaults to today\&#39;s date.
	 * @param {string} [updatedSince] Limit to transactions updated since an ISO 8601 timestamp.
	 * @param {number} [uncategorised] Limit to uncategorised transactions.
	 * @param {'debit' | 'credit'} [type] Limit to transactions of this type.
	 * @param {number} [needsReview] Limit to transactions that need to be reviewed.
	 * @param {string} [search] Limit to transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in ISO 8601 format.
	 * @param {number} [page] Choose a particular page of the results.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof TransactionsApi
	 */
	public accountsIdTransactionsGet(
		id: number,
		startDate?: string,
		endDate?: string,
		updatedSince?: string,
		uncategorised?: number,
		type?: "debit" | "credit",
		needsReview?: number,
		search?: string,
		page?: number,
		options?: AxiosRequestConfig,
	) {
		return TransactionsApiFp(this.configuration)
			.accountsIdTransactionsGet(
				id,
				startDate,
				endDate,
				updatedSince,
				uncategorised,
				type,
				needsReview,
				search,
				page,
				options,
			)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Lists transactions belonging to one or more categories by their IDs.
	 * @summary List transactions in categories
	 * @param {string} id A comma-separated list of category IDs.
	 * @param {string} [startDate] Limit to transactions on or after this date. Required if end_date is provided. If not provided, defaults to the furtherest date allowed by the user\&#39;s subscription.
	 * @param {string} [endDate] Limit to transactions on or before this date. Required if start_date is provided. If not provided, defaults to today\&#39;s date.
	 * @param {string} [updatedSince] Limit to transactions updated since an ISO 8601 timestamp.
	 * @param {number} [uncategorised] Limit to uncategorised transactions.
	 * @param {'debit' | 'credit'} [type] Limit to transactions of this type.
	 * @param {number} [needsReview] Limit to transactions that need to be reviewed.
	 * @param {string} [search] Limit to transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in ISO 8601 format.
	 * @param {number} [page] Choose a particular page of the results.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof TransactionsApi
	 */
	public categoriesIdTransactionsGet(
		id: string,
		startDate?: string,
		endDate?: string,
		updatedSince?: string,
		uncategorised?: number,
		type?: "debit" | "credit",
		needsReview?: number,
		search?: string,
		page?: number,
		options?: AxiosRequestConfig,
	) {
		return TransactionsApiFp(this.configuration)
			.categoriesIdTransactionsGet(
				id,
				startDate,
				endDate,
				updatedSince,
				uncategorised,
				type,
				needsReview,
				search,
				page,
				options,
			)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Lists transactions belonging to a transaction account by its ID.
	 * @summary List transactions in transaction account
	 * @param {number} id The unique identifier of the transaction account.
	 * @param {string} [startDate] Limit to transactions on or after this date. Required if end_date is provided. If not provided, defaults to the furtherest date allowed by the user\&#39;s subscription.
	 * @param {string} [endDate] Limit to transactions on or before this date. Required if start_date is provided. If not provided, defaults to today\&#39;s date.
	 * @param {string} [updatedSince] Limit to transactions updated since an ISO 8601 timestamp.
	 * @param {number} [uncategorised] Limit to uncategorised transactions.
	 * @param {'debit' | 'credit'} [type] Limit to transactions of this type.
	 * @param {number} [needsReview] Limit to transactions that need to be reviewed.
	 * @param {string} [search] Limit to transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in ISO 8601 format.
	 * @param {number} [page] Choose a particular page of the results.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof TransactionsApi
	 */
	public transactionAccountsIdTransactionsGet(
		id: number,
		startDate?: string,
		endDate?: string,
		updatedSince?: string,
		uncategorised?: number,
		type?: "debit" | "credit",
		needsReview?: number,
		search?: string,
		page?: number,
		options?: AxiosRequestConfig,
	) {
		return TransactionsApiFp(this.configuration)
			.transactionAccountsIdTransactionsGet(
				id,
				startDate,
				endDate,
				updatedSince,
				uncategorised,
				type,
				needsReview,
				search,
				page,
				options,
			)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Creates a transaction in a transaction account by its ID.
	 * @summary Create a transaction in transaction account
	 * @param {number} id The unique identifier of the transaction account.
	 * @param {TransactionAccountsIdTransactionsGetRequest} [transactionAccountsIdTransactionsGetRequest]
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof TransactionsApi
	 */
	public transactionAccountsIdTransactionsPost(
		id: number,
		transactionAccountsIdTransactionsGetRequest?: TransactionAccountsIdTransactionsGetRequest,
		options?: AxiosRequestConfig,
	) {
		return TransactionsApiFp(this.configuration)
			.transactionAccountsIdTransactionsPost(
				id,
				transactionAccountsIdTransactionsGetRequest,
				options,
			)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Deletes a transaction and all its data by ID.
	 * @summary Delete transaction
	 * @param {number} id The unique identifier of the transaction.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof TransactionsApi
	 */
	public transactionsIdDelete(id: number, options?: AxiosRequestConfig) {
		return TransactionsApiFp(this.configuration)
			.transactionsIdDelete(id, options)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Gets a transaction by its ID.
	 * @summary Get a transaction
	 * @param {number} id The unique identifier of the transaction.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof TransactionsApi
	 */
	public transactionsIdGet(id: number, options?: AxiosRequestConfig) {
		return TransactionsApiFp(this.configuration)
			.transactionsIdGet(id, options)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Updates a transaction by its ID.
	 * @summary Update a transaction
	 * @param {number} id The unique identifier of the transaction.
	 * @param {TransactionsIdDeleteRequest} [transactionsIdDeleteRequest]
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof TransactionsApi
	 */
	public transactionsIdPut(
		id: number,
		transactionsIdDeleteRequest?: TransactionsIdDeleteRequest,
		options?: AxiosRequestConfig,
	) {
		return TransactionsApiFp(this.configuration)
			.transactionsIdPut(id, transactionsIdDeleteRequest, options)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Lists transactions belonging to a user by their ID.
	 * @summary List transactions in user
	 * @param {number} id The unique identifier of the account.
	 * @param {string} [startDate] Limit to transactions on or after this date. Required if end_date is provided. If not provided, defaults to the furtherest date allowed by the user\&#39;s subscription.
	 * @param {string} [endDate] Limit to transactions on or before this date. Required if start_date is provided. If not provided, defaults to today\&#39;s date.
	 * @param {string} [updatedSince] Limit to transactions updated since an ISO 8601 timestamp.
	 * @param {number} [uncategorised] Limit to uncategorised transactions.
	 * @param {'debit' | 'credit'} [type] Limit to transactions of this type.
	 * @param {number} [needsReview] Limit to transactions that need to be reviewed.
	 * @param {string} [search] Limit to transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in ISO 8601 format.
	 * @param {number} [page] Choose a particular page of the results.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof TransactionsApi
	 */
	public usersIdTransactionsGet(
		id: number,
		startDate?: string,
		endDate?: string,
		updatedSince?: string,
		uncategorised?: number,
		type?: "debit" | "credit",
		needsReview?: number,
		search?: string,
		page?: number,
		options?: AxiosRequestConfig,
	) {
		return TransactionsApiFp(this.configuration)
			.usersIdTransactionsGet(
				id,
				startDate,
				endDate,
				updatedSince,
				uncategorised,
				type,
				needsReview,
				search,
				page,
				options,
			)
			.then((request) => request(this.axios, this.basePath));
	}
}
