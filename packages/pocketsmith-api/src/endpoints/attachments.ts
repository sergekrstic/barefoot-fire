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
	Attachment,
	AttachmentsIdDeleteRequest,
	TransactionsIdAttachmentsGetRequest,
	UsersIdAttachmentsGetRequest,
} from "../types/types";

// AttachmentsApi - axios parameter creator
export const AttachmentsApiAxiosParamCreator = function (
	configuration?: Configuration,
) {
	return {
		attachmentsIdDelete: async (
			id: number,
			options: AxiosRequestConfig = {},
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("attachmentsIdDelete", "id", id);
			const localVarPath = `/attachments/{id}`.replace(
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
		attachmentsIdGet: async (
			id: number,
			options: AxiosRequestConfig = {},
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("attachmentsIdGet", "id", id);
			const localVarPath = `/attachments/{id}`.replace(
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
		attachmentsIdPut: async (
			id: number,
			attachmentsIdDeleteRequest?: AttachmentsIdDeleteRequest,
			options: AxiosRequestConfig = {},
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("attachmentsIdPut", "id", id);
			const localVarPath = `/attachments/{id}`.replace(
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
				attachmentsIdDeleteRequest,
				localVarRequestOptions,
				configuration,
			);

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions,
			};
		},
		transactionsIdAttachmentsGet: async (
			id: number,
			options: AxiosRequestConfig = {},
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("transactionsIdAttachmentsGet", "id", id);
			const localVarPath = `/transactions/{id}/attachments`.replace(
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
		transactionsIdAttachmentsPost: async (
			id: number,
			transactionsIdAttachmentsGetRequest?: TransactionsIdAttachmentsGetRequest,
			options: AxiosRequestConfig = {},
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("transactionsIdAttachmentsPost", "id", id);
			const localVarPath = `/transactions/{id}/attachments`.replace(
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
				transactionsIdAttachmentsGetRequest,
				localVarRequestOptions,
				configuration,
			);

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions,
			};
		},
		transactionsTransactionIdAttachmentsAttachmentIdDelete: async (
			transactionId: number,
			attachmentId: number,
			options: AxiosRequestConfig = {},
		): Promise<RequestArgs> => {
			// verify required parameter 'transactionId' is not null or undefined
			assertParamExists(
				"transactionsTransactionIdAttachmentsAttachmentIdDelete",
				"transactionId",
				transactionId,
			);
			// verify required parameter 'attachmentId' is not null or undefined
			assertParamExists(
				"transactionsTransactionIdAttachmentsAttachmentIdDelete",
				"attachmentId",
				attachmentId,
			);
			const localVarPath =
				`/transactions/{transaction_id}/attachments/{attachment_id}`
					.replace(
						`{${"transaction_id"}}`,
						encodeURIComponent(String(transactionId)),
					)
					.replace(
						`{${"attachment_id"}}`,
						encodeURIComponent(String(attachmentId)),
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
		usersIdAttachmentsGet: async (
			id: number,
			unassigned?: number,
			options: AxiosRequestConfig = {},
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("usersIdAttachmentsGet", "id", id);
			const localVarPath = `/users/{id}/attachments`.replace(
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

			if (unassigned !== undefined) {
				localVarQueryParameter["unassigned"] = unassigned;
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
		usersIdAttachmentsPost: async (
			id: number,
			usersIdAttachmentsGetRequest?: UsersIdAttachmentsGetRequest,
			options: AxiosRequestConfig = {},
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("usersIdAttachmentsPost", "id", id);
			const localVarPath = `/users/{id}/attachments`.replace(
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
				usersIdAttachmentsGetRequest,
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

// AttachmentsApi - functional programming interface
export const AttachmentsApiFp = function (configuration?: Configuration) {
	const localVarAxiosParamCreator =
		AttachmentsApiAxiosParamCreator(configuration);
	return {
		async attachmentsIdDelete(
			id: number,
			options?: AxiosRequestConfig,
		): Promise<
			(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.attachmentsIdDelete(id, options);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration,
			);
		},
		async attachmentsIdGet(
			id: number,
			options?: AxiosRequestConfig,
		): Promise<
			(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Attachment>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.attachmentsIdGet(id, options);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration,
			);
		},
		async attachmentsIdPut(
			id: number,
			attachmentsIdDeleteRequest?: AttachmentsIdDeleteRequest,
			options?: AxiosRequestConfig,
		): Promise<
			(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Attachment>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.attachmentsIdPut(
					id,
					attachmentsIdDeleteRequest,
					options,
				);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration,
			);
		},
		async transactionsIdAttachmentsGet(
			id: number,
			options?: AxiosRequestConfig,
		): Promise<
			(
				axios?: AxiosInstance,
				basePath?: string,
			) => AxiosPromise<Array<Attachment>>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.transactionsIdAttachmentsGet(
					id,
					options,
				);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration,
			);
		},
		async transactionsIdAttachmentsPost(
			id: number,
			transactionsIdAttachmentsGetRequest?: TransactionsIdAttachmentsGetRequest,
			options?: AxiosRequestConfig,
		): Promise<
			(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Attachment>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.transactionsIdAttachmentsPost(
					id,
					transactionsIdAttachmentsGetRequest,
					options,
				);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration,
			);
		},
		async transactionsTransactionIdAttachmentsAttachmentIdDelete(
			transactionId: number,
			attachmentId: number,
			options?: AxiosRequestConfig,
		): Promise<
			(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.transactionsTransactionIdAttachmentsAttachmentIdDelete(
					transactionId,
					attachmentId,
					options,
				);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration,
			);
		},
		async usersIdAttachmentsGet(
			id: number,
			unassigned?: number,
			options?: AxiosRequestConfig,
		): Promise<
			(
				axios?: AxiosInstance,
				basePath?: string,
			) => AxiosPromise<Array<Attachment>>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.usersIdAttachmentsGet(
					id,
					unassigned,
					options,
				);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration,
			);
		},
		async usersIdAttachmentsPost(
			id: number,
			usersIdAttachmentsGetRequest?: UsersIdAttachmentsGetRequest,
			options?: AxiosRequestConfig,
		): Promise<
			(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Attachment>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.usersIdAttachmentsPost(
					id,
					usersIdAttachmentsGetRequest,
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

// AttachmentsApi - factory interface
export const AttachmentsApiFactory = function (
	configuration?: Configuration,
	basePath?: string,
	axios?: AxiosInstance,
) {
	const localVarFp = AttachmentsApiFp(configuration);
	return {
		attachmentsIdDelete(id: number, options?: any): AxiosPromise<void> {
			return localVarFp
				.attachmentsIdDelete(id, options)
				.then((request) => request(axios, basePath));
		},
		attachmentsIdGet(id: number, options?: any): AxiosPromise<Attachment> {
			return localVarFp
				.attachmentsIdGet(id, options)
				.then((request) => request(axios, basePath));
		},
		attachmentsIdPut(
			id: number,
			attachmentsIdDeleteRequest?: AttachmentsIdDeleteRequest,
			options?: any,
		): AxiosPromise<Attachment> {
			return localVarFp
				.attachmentsIdPut(id, attachmentsIdDeleteRequest, options)
				.then((request) => request(axios, basePath));
		},
		transactionsIdAttachmentsGet(
			id: number,
			options?: any,
		): AxiosPromise<Array<Attachment>> {
			return localVarFp
				.transactionsIdAttachmentsGet(id, options)
				.then((request) => request(axios, basePath));
		},
		transactionsIdAttachmentsPost(
			id: number,
			transactionsIdAttachmentsGetRequest?: TransactionsIdAttachmentsGetRequest,
			options?: any,
		): AxiosPromise<Attachment> {
			return localVarFp
				.transactionsIdAttachmentsPost(
					id,
					transactionsIdAttachmentsGetRequest,
					options,
				)
				.then((request) => request(axios, basePath));
		},
		transactionsTransactionIdAttachmentsAttachmentIdDelete(
			transactionId: number,
			attachmentId: number,
			options?: any,
		): AxiosPromise<void> {
			return localVarFp
				.transactionsTransactionIdAttachmentsAttachmentIdDelete(
					transactionId,
					attachmentId,
					options,
				)
				.then((request) => request(axios, basePath));
		},
		usersIdAttachmentsGet(
			id: number,
			unassigned?: number,
			options?: any,
		): AxiosPromise<Array<Attachment>> {
			return localVarFp
				.usersIdAttachmentsGet(id, unassigned, options)
				.then((request) => request(axios, basePath));
		},
		usersIdAttachmentsPost(
			id: number,
			usersIdAttachmentsGetRequest?: UsersIdAttachmentsGetRequest,
			options?: any,
		): AxiosPromise<Attachment> {
			return localVarFp
				.usersIdAttachmentsPost(id, usersIdAttachmentsGetRequest, options)
				.then((request) => request(axios, basePath));
		},
	};
};

// AttachmentsApi - object-oriented interface
export class AttachmentsApi extends BaseAPI {
	/**
	 * Deletes a particular attachment by its ID.
	 * @summary Delete attachment
	 * @param {number} id The unique identifier of the attachment.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof AttachmentsApi
	 */
	public attachmentsIdDelete(id: number, options?: AxiosRequestConfig) {
		return AttachmentsApiFp(this.configuration)
			.attachmentsIdDelete(id, options)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Gets a particular attachment by its ID.
	 * @summary Get attachment
	 * @param {number} id The unique identifier of the attachment.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof AttachmentsApi
	 */
	public attachmentsIdGet(id: number, options?: AxiosRequestConfig) {
		return AttachmentsApiFp(this.configuration)
			.attachmentsIdGet(id, options)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Updates the title of the attachment.
	 * @summary Update attachment
	 * @param {number} id The unique identifier of the attachment.
	 * @param {AttachmentsIdDeleteRequest} [attachmentsIdDeleteRequest]
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof AttachmentsApi
	 */
	public attachmentsIdPut(
		id: number,
		attachmentsIdDeleteRequest?: AttachmentsIdDeleteRequest,
		options?: AxiosRequestConfig,
	) {
		return AttachmentsApiFp(this.configuration)
			.attachmentsIdPut(id, attachmentsIdDeleteRequest, options)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Lists attachments belonging to a transaction by their ID.
	 * @summary List attachments in transaction
	 * @param {number} id The unique identifier of the transaction.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof AttachmentsApi
	 */
	public transactionsIdAttachmentsGet(
		id: number,
		options?: AxiosRequestConfig,
	) {
		return AttachmentsApiFp(this.configuration)
			.transactionsIdAttachmentsGet(id, options)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Assigns an attachment to the transaction by their ID.
	 * @summary Assigns attachment to transaction
	 * @param {number} id The unique identifier of the transaction.
	 * @param {TransactionsIdAttachmentsGetRequest} [transactionsIdAttachmentsGetRequest]
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof AttachmentsApi
	 */
	public transactionsIdAttachmentsPost(
		id: number,
		transactionsIdAttachmentsGetRequest?: TransactionsIdAttachmentsGetRequest,
		options?: AxiosRequestConfig,
	) {
		return AttachmentsApiFp(this.configuration)
			.transactionsIdAttachmentsPost(
				id,
				transactionsIdAttachmentsGetRequest,
				options,
			)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Unassigns a particular attachment by its ID from the transaction ID. This does not delete the attachment, it only removes its association from the transaction.
	 * @summary Unassigns attachment in transaction
	 * @param {number} transactionId The unique identifier of the transaction.
	 * @param {number} attachmentId The unique identifier of the attachment.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof AttachmentsApi
	 */
	public transactionsTransactionIdAttachmentsAttachmentIdDelete(
		transactionId: number,
		attachmentId: number,
		options?: AxiosRequestConfig,
	) {
		return AttachmentsApiFp(this.configuration)
			.transactionsTransactionIdAttachmentsAttachmentIdDelete(
				transactionId,
				attachmentId,
				options,
			)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Lists attachments belonging to a user by their ID.
	 * @summary Lists attachments in user
	 * @param {number} id The unique identifier of the user.
	 * @param {number} [unassigned] If set, returns unassigned attachments, that are available for assigning to a transaction.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof AttachmentsApi
	 */
	public usersIdAttachmentsGet(
		id: number,
		unassigned?: number,
		options?: AxiosRequestConfig,
	) {
		return AttachmentsApiFp(this.configuration)
			.usersIdAttachmentsGet(id, unassigned, options)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Creates an attachment belonging to the user by their ID.
	 * @summary Create attachment in user
	 * @param {number} id The unique identifier of the user.
	 * @param {UsersIdAttachmentsGetRequest} [usersIdAttachmentsGetRequest]
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof AttachmentsApi
	 */
	public usersIdAttachmentsPost(
		id: number,
		usersIdAttachmentsGetRequest?: UsersIdAttachmentsGetRequest,
		options?: AxiosRequestConfig,
	) {
		return AttachmentsApiFp(this.configuration)
			.usersIdAttachmentsPost(id, usersIdAttachmentsGetRequest, options)
			.then((request) => request(this.axios, this.basePath));
	}
}
