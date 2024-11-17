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
import { BudgetAnalysisPackage } from "../types/api.types";

// BudgetingApi - axios parameter creator
export const BudgetingApiAxiosParamCreator = function (
	configuration?: Configuration,
) {
	return {
		/**
		 * Lists the user\'s budget, consisting of one or more budget analysis packages, one per category. Akin to the list on the Budget page in PocketSmith.
		 * @summary List budget for user
		 * @param {number} id The unique identifier of the account.
		 * @param {boolean} [rollUp] Whether parent categories should have their children rolled up into them. When used, the children will still appear in the collection on their own, but their actual and forecast figures will be rolled up to the root parent.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		usersIdBudgetGet: async (
			id: number,
			rollUp?: boolean,
			options: AxiosRequestConfig = {},
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("usersIdBudgetGet", "id", id);
			const localVarPath = `/users/{id}/budget`.replace(
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

			if (rollUp !== undefined) {
				localVarQueryParameter["roll_up"] = rollUp;
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
		 * Get the user\'s budget summary, containing an expense and income analysis for all categories (excluding transfer categories) for the given period and date range. Akin to the overall budget shown on the Budget page in PocketSmith.
		 * @summary Get budget summary for user
		 * @param {number} id The unique identifier of the user.
		 * @param {'weeks' | 'months' | 'years' | 'event'} period The period to analyse in, one of &#x60;weeks&#x60;, &#x60;months&#x60; or &#x60;years&#x60;. Also supported is &#x60;event&#x60;, although event period analysis is only possible when the budget events gathered align, so in this case where all categories are analysed together, it\&#39;s highly unlikely that event period analysis will be possible.
		 * @param {number} interval The period interval, e.g. if the interval is 2 and the period is weeks, the budget will be analysed fortnightly.
		 * @param {string} startDate The date to start analysing the budget from. This will be bumped out to make full periods as necessary.
		 * @param {string} endDate The date to stop analysing the budget from. This will be bumped out to make full periods as necessary.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		usersIdBudgetSummaryGet: async (
			id: number,
			period: "weeks" | "months" | "years" | "event",
			interval: number,
			startDate: string,
			endDate: string,
			options: AxiosRequestConfig = {},
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("usersIdBudgetSummaryGet", "id", id);
			// verify required parameter 'period' is not null or undefined
			assertParamExists("usersIdBudgetSummaryGet", "period", period);
			// verify required parameter 'interval' is not null or undefined
			assertParamExists("usersIdBudgetSummaryGet", "interval", interval);
			// verify required parameter 'startDate' is not null or undefined
			assertParamExists("usersIdBudgetSummaryGet", "startDate", startDate);
			// verify required parameter 'endDate' is not null or undefined
			assertParamExists("usersIdBudgetSummaryGet", "endDate", endDate);
			const localVarPath = `/users/{id}/budget_summary`.replace(
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

			if (period !== undefined) {
				localVarQueryParameter["period"] = period;
			}

			if (interval !== undefined) {
				localVarQueryParameter["interval"] = interval;
			}

			if (startDate !== undefined) {
				localVarQueryParameter["start_date"] = startDate;
			}

			if (endDate !== undefined) {
				localVarQueryParameter["end_date"] = endDate;
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
		 * Delete the user\'s cached forecast by recalculating the forecast.
		 * @summary Delete forecast cache for user
		 * @param {number} id The unique identifier of the user.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		usersIdForecastCacheDelete: async (
			id: number,
			options: AxiosRequestConfig = {},
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("usersIdForecastCacheDelete", "id", id);
			const localVarPath = `/users/{id}/forecast_cache`.replace(
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
		 * Get an income and/or expense budget analysis for the given date range and period across any number of categories and scenarios. Akin to the Trends page in PocketSmith.
		 * @summary Get trend analysis for user
		 * @param {number} id The unique identifier of the user.
		 * @param {'weeks' | 'months' | 'years' | 'event'} period The period to analyse in, one of &#x60;weeks&#x60;, &#x60;months&#x60; or &#x60;years&#x60;. Also supported is &#x60;event&#x60;, although event period analysis is only possible when the budget events gathered align, so in this case where all categories are analysed together, it\&#39;s highly unlikely that event period analysis will be possible.
		 * @param {number} interval The period interval, e.g. if the interval is 2 and the period is weeks, the budget will be analysed fortnightly.
		 * @param {string} startDate The date to start analysing the budget from. This will be bumped out to make full periods as necessary.
		 * @param {string} endDate The date to stop analysing the budget from. This will be bumped out to make full periods as necessary.
		 * @param {string} categories A comma-separated list of category IDs to analyse.
		 * @param {string} scenarios A comma-separated list of scenario IDs to analyse. You\&#39;re likely going to want to include all a user\&#39;s scenarios here, unless you have reason to only analyse for a subset of scenarios. Regardless of what scenarios are analysed, all actuals (transactions) across all accounts will be included.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		usersIdTrendAnalysisGet: async (
			id: number,
			period: "weeks" | "months" | "years" | "event",
			interval: number,
			startDate: string,
			endDate: string,
			categories: string,
			scenarios: string,
			options: AxiosRequestConfig = {},
		): Promise<RequestArgs> => {
			// verify required parameter 'id' is not null or undefined
			assertParamExists("usersIdTrendAnalysisGet", "id", id);
			// verify required parameter 'period' is not null or undefined
			assertParamExists("usersIdTrendAnalysisGet", "period", period);
			// verify required parameter 'interval' is not null or undefined
			assertParamExists("usersIdTrendAnalysisGet", "interval", interval);
			// verify required parameter 'startDate' is not null or undefined
			assertParamExists("usersIdTrendAnalysisGet", "startDate", startDate);
			// verify required parameter 'endDate' is not null or undefined
			assertParamExists("usersIdTrendAnalysisGet", "endDate", endDate);
			// verify required parameter 'categories' is not null or undefined
			assertParamExists("usersIdTrendAnalysisGet", "categories", categories);
			// verify required parameter 'scenarios' is not null or undefined
			assertParamExists("usersIdTrendAnalysisGet", "scenarios", scenarios);
			const localVarPath = `/users/{id}/trend_analysis`.replace(
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

			if (period !== undefined) {
				localVarQueryParameter["period"] = period;
			}

			if (interval !== undefined) {
				localVarQueryParameter["interval"] = interval;
			}

			if (startDate !== undefined) {
				localVarQueryParameter["start_date"] = startDate;
			}

			if (endDate !== undefined) {
				localVarQueryParameter["end_date"] = endDate;
			}

			if (categories !== undefined) {
				localVarQueryParameter["categories"] = categories;
			}

			if (scenarios !== undefined) {
				localVarQueryParameter["scenarios"] = scenarios;
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
 * BudgetingApi - functional programming interface
 * @export
 */
export const BudgetingApiFp = function (configuration?: Configuration) {
	const localVarAxiosParamCreator =
		BudgetingApiAxiosParamCreator(configuration);
	return {
		/**
		 * Lists the user\'s budget, consisting of one or more budget analysis packages, one per category. Akin to the list on the Budget page in PocketSmith.
		 * @summary List budget for user
		 * @param {number} id The unique identifier of the account.
		 * @param {boolean} [rollUp] Whether parent categories should have their children rolled up into them. When used, the children will still appear in the collection on their own, but their actual and forecast figures will be rolled up to the root parent.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async usersIdBudgetGet(
			id: number,
			rollUp?: boolean,
			options?: AxiosRequestConfig,
		): Promise<
			(
				axios?: AxiosInstance,
				basePath?: string,
			) => AxiosPromise<Array<BudgetAnalysisPackage>>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.usersIdBudgetGet(id, rollUp, options);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration,
			);
		},
		/**
		 * Get the user\'s budget summary, containing an expense and income analysis for all categories (excluding transfer categories) for the given period and date range. Akin to the overall budget shown on the Budget page in PocketSmith.
		 * @summary Get budget summary for user
		 * @param {number} id The unique identifier of the user.
		 * @param {'weeks' | 'months' | 'years' | 'event'} period The period to analyse in, one of &#x60;weeks&#x60;, &#x60;months&#x60; or &#x60;years&#x60;. Also supported is &#x60;event&#x60;, although event period analysis is only possible when the budget events gathered align, so in this case where all categories are analysed together, it\&#39;s highly unlikely that event period analysis will be possible.
		 * @param {number} interval The period interval, e.g. if the interval is 2 and the period is weeks, the budget will be analysed fortnightly.
		 * @param {string} startDate The date to start analysing the budget from. This will be bumped out to make full periods as necessary.
		 * @param {string} endDate The date to stop analysing the budget from. This will be bumped out to make full periods as necessary.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async usersIdBudgetSummaryGet(
			id: number,
			period: "weeks" | "months" | "years" | "event",
			interval: number,
			startDate: string,
			endDate: string,
			options?: AxiosRequestConfig,
		): Promise<
			(
				axios?: AxiosInstance,
				basePath?: string,
			) => AxiosPromise<Array<BudgetAnalysisPackage>>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.usersIdBudgetSummaryGet(
					id,
					period,
					interval,
					startDate,
					endDate,
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
		 * Delete the user\'s cached forecast by recalculating the forecast.
		 * @summary Delete forecast cache for user
		 * @param {number} id The unique identifier of the user.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async usersIdForecastCacheDelete(
			id: number,
			options?: AxiosRequestConfig,
		): Promise<
			(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.usersIdForecastCacheDelete(id, options);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration,
			);
		},
		/**
		 * Get an income and/or expense budget analysis for the given date range and period across any number of categories and scenarios. Akin to the Trends page in PocketSmith.
		 * @summary Get trend analysis for user
		 * @param {number} id The unique identifier of the user.
		 * @param {'weeks' | 'months' | 'years' | 'event'} period The period to analyse in, one of &#x60;weeks&#x60;, &#x60;months&#x60; or &#x60;years&#x60;. Also supported is &#x60;event&#x60;, although event period analysis is only possible when the budget events gathered align, so in this case where all categories are analysed together, it\&#39;s highly unlikely that event period analysis will be possible.
		 * @param {number} interval The period interval, e.g. if the interval is 2 and the period is weeks, the budget will be analysed fortnightly.
		 * @param {string} startDate The date to start analysing the budget from. This will be bumped out to make full periods as necessary.
		 * @param {string} endDate The date to stop analysing the budget from. This will be bumped out to make full periods as necessary.
		 * @param {string} categories A comma-separated list of category IDs to analyse.
		 * @param {string} scenarios A comma-separated list of scenario IDs to analyse. You\&#39;re likely going to want to include all a user\&#39;s scenarios here, unless you have reason to only analyse for a subset of scenarios. Regardless of what scenarios are analysed, all actuals (transactions) across all accounts will be included.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async usersIdTrendAnalysisGet(
			id: number,
			period: "weeks" | "months" | "years" | "event",
			interval: number,
			startDate: string,
			endDate: string,
			categories: string,
			scenarios: string,
			options?: AxiosRequestConfig,
		): Promise<
			(
				axios?: AxiosInstance,
				basePath?: string,
			) => AxiosPromise<Array<BudgetAnalysisPackage>>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.usersIdTrendAnalysisGet(
					id,
					period,
					interval,
					startDate,
					endDate,
					categories,
					scenarios,
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
 * BudgetingApi - factory interface
 * @export
 */
export const BudgetingApiFactory = function (
	configuration?: Configuration,
	basePath?: string,
	axios?: AxiosInstance,
) {
	const localVarFp = BudgetingApiFp(configuration);
	return {
		/**
		 * Lists the user\'s budget, consisting of one or more budget analysis packages, one per category. Akin to the list on the Budget page in PocketSmith.
		 * @summary List budget for user
		 * @param {number} id The unique identifier of the account.
		 * @param {boolean} [rollUp] Whether parent categories should have their children rolled up into them. When used, the children will still appear in the collection on their own, but their actual and forecast figures will be rolled up to the root parent.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		usersIdBudgetGet(
			id: number,
			rollUp?: boolean,
			options?: any,
		): AxiosPromise<Array<BudgetAnalysisPackage>> {
			return localVarFp
				.usersIdBudgetGet(id, rollUp, options)
				.then((request) => request(axios, basePath));
		},
		/**
		 * Get the user\'s budget summary, containing an expense and income analysis for all categories (excluding transfer categories) for the given period and date range. Akin to the overall budget shown on the Budget page in PocketSmith.
		 * @summary Get budget summary for user
		 * @param {number} id The unique identifier of the user.
		 * @param {'weeks' | 'months' | 'years' | 'event'} period The period to analyse in, one of &#x60;weeks&#x60;, &#x60;months&#x60; or &#x60;years&#x60;. Also supported is &#x60;event&#x60;, although event period analysis is only possible when the budget events gathered align, so in this case where all categories are analysed together, it\&#39;s highly unlikely that event period analysis will be possible.
		 * @param {number} interval The period interval, e.g. if the interval is 2 and the period is weeks, the budget will be analysed fortnightly.
		 * @param {string} startDate The date to start analysing the budget from. This will be bumped out to make full periods as necessary.
		 * @param {string} endDate The date to stop analysing the budget from. This will be bumped out to make full periods as necessary.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		usersIdBudgetSummaryGet(
			id: number,
			period: "weeks" | "months" | "years" | "event",
			interval: number,
			startDate: string,
			endDate: string,
			options?: any,
		): AxiosPromise<Array<BudgetAnalysisPackage>> {
			return localVarFp
				.usersIdBudgetSummaryGet(
					id,
					period,
					interval,
					startDate,
					endDate,
					options,
				)
				.then((request) => request(axios, basePath));
		},
		/**
		 * Delete the user\'s cached forecast by recalculating the forecast.
		 * @summary Delete forecast cache for user
		 * @param {number} id The unique identifier of the user.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		usersIdForecastCacheDelete(id: number, options?: any): AxiosPromise<void> {
			return localVarFp
				.usersIdForecastCacheDelete(id, options)
				.then((request) => request(axios, basePath));
		},
		/**
		 * Get an income and/or expense budget analysis for the given date range and period across any number of categories and scenarios. Akin to the Trends page in PocketSmith.
		 * @summary Get trend analysis for user
		 * @param {number} id The unique identifier of the user.
		 * @param {'weeks' | 'months' | 'years' | 'event'} period The period to analyse in, one of &#x60;weeks&#x60;, &#x60;months&#x60; or &#x60;years&#x60;. Also supported is &#x60;event&#x60;, although event period analysis is only possible when the budget events gathered align, so in this case where all categories are analysed together, it\&#39;s highly unlikely that event period analysis will be possible.
		 * @param {number} interval The period interval, e.g. if the interval is 2 and the period is weeks, the budget will be analysed fortnightly.
		 * @param {string} startDate The date to start analysing the budget from. This will be bumped out to make full periods as necessary.
		 * @param {string} endDate The date to stop analysing the budget from. This will be bumped out to make full periods as necessary.
		 * @param {string} categories A comma-separated list of category IDs to analyse.
		 * @param {string} scenarios A comma-separated list of scenario IDs to analyse. You\&#39;re likely going to want to include all a user\&#39;s scenarios here, unless you have reason to only analyse for a subset of scenarios. Regardless of what scenarios are analysed, all actuals (transactions) across all accounts will be included.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		usersIdTrendAnalysisGet(
			id: number,
			period: "weeks" | "months" | "years" | "event",
			interval: number,
			startDate: string,
			endDate: string,
			categories: string,
			scenarios: string,
			options?: any,
		): AxiosPromise<Array<BudgetAnalysisPackage>> {
			return localVarFp
				.usersIdTrendAnalysisGet(
					id,
					period,
					interval,
					startDate,
					endDate,
					categories,
					scenarios,
					options,
				)
				.then((request) => request(axios, basePath));
		},
	};
};

/**
 * BudgetingApi - object-oriented interface
 * @export
 * @class BudgetingApi
 * @extends {BaseAPI}
 */
export class BudgetingApi extends BaseAPI {
	/**
	 * Lists the user\'s budget, consisting of one or more budget analysis packages, one per category. Akin to the list on the Budget page in PocketSmith.
	 * @summary List budget for user
	 * @param {number} id The unique identifier of the account.
	 * @param {boolean} [rollUp] Whether parent categories should have their children rolled up into them. When used, the children will still appear in the collection on their own, but their actual and forecast figures will be rolled up to the root parent.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof BudgetingApi
	 */
	public usersIdBudgetGet(
		id: number,
		rollUp?: boolean,
		options?: AxiosRequestConfig,
	) {
		return BudgetingApiFp(this.configuration)
			.usersIdBudgetGet(id, rollUp, options)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Get the user\'s budget summary, containing an expense and income analysis for all categories (excluding transfer categories) for the given period and date range. Akin to the overall budget shown on the Budget page in PocketSmith.
	 * @summary Get budget summary for user
	 * @param {number} id The unique identifier of the user.
	 * @param {'weeks' | 'months' | 'years' | 'event'} period The period to analyse in, one of &#x60;weeks&#x60;, &#x60;months&#x60; or &#x60;years&#x60;. Also supported is &#x60;event&#x60;, although event period analysis is only possible when the budget events gathered align, so in this case where all categories are analysed together, it\&#39;s highly unlikely that event period analysis will be possible.
	 * @param {number} interval The period interval, e.g. if the interval is 2 and the period is weeks, the budget will be analysed fortnightly.
	 * @param {string} startDate The date to start analysing the budget from. This will be bumped out to make full periods as necessary.
	 * @param {string} endDate The date to stop analysing the budget from. This will be bumped out to make full periods as necessary.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof BudgetingApi
	 */
	public usersIdBudgetSummaryGet(
		id: number,
		period: "weeks" | "months" | "years" | "event",
		interval: number,
		startDate: string,
		endDate: string,
		options?: AxiosRequestConfig,
	) {
		return BudgetingApiFp(this.configuration)
			.usersIdBudgetSummaryGet(
				id,
				period,
				interval,
				startDate,
				endDate,
				options,
			)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Delete the user\'s cached forecast by recalculating the forecast.
	 * @summary Delete forecast cache for user
	 * @param {number} id The unique identifier of the user.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof BudgetingApi
	 */
	public usersIdForecastCacheDelete(id: number, options?: AxiosRequestConfig) {
		return BudgetingApiFp(this.configuration)
			.usersIdForecastCacheDelete(id, options)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Get an income and/or expense budget analysis for the given date range and period across any number of categories and scenarios. Akin to the Trends page in PocketSmith.
	 * @summary Get trend analysis for user
	 * @param {number} id The unique identifier of the user.
	 * @param {'weeks' | 'months' | 'years' | 'event'} period The period to analyse in, one of &#x60;weeks&#x60;, &#x60;months&#x60; or &#x60;years&#x60;. Also supported is &#x60;event&#x60;, although event period analysis is only possible when the budget events gathered align, so in this case where all categories are analysed together, it\&#39;s highly unlikely that event period analysis will be possible.
	 * @param {number} interval The period interval, e.g. if the interval is 2 and the period is weeks, the budget will be analysed fortnightly.
	 * @param {string} startDate The date to start analysing the budget from. This will be bumped out to make full periods as necessary.
	 * @param {string} endDate The date to stop analysing the budget from. This will be bumped out to make full periods as necessary.
	 * @param {string} categories A comma-separated list of category IDs to analyse.
	 * @param {string} scenarios A comma-separated list of scenario IDs to analyse. You\&#39;re likely going to want to include all a user\&#39;s scenarios here, unless you have reason to only analyse for a subset of scenarios. Regardless of what scenarios are analysed, all actuals (transactions) across all accounts will be included.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof BudgetingApi
	 */
	public usersIdTrendAnalysisGet(
		id: number,
		period: "weeks" | "months" | "years" | "event",
		interval: number,
		startDate: string,
		endDate: string,
		categories: string,
		scenarios: string,
		options?: AxiosRequestConfig,
	) {
		return BudgetingApiFp(this.configuration)
			.usersIdTrendAnalysisGet(
				id,
				period,
				interval,
				startDate,
				endDate,
				categories,
				scenarios,
				options,
			)
			.then((request) => request(this.axios, this.basePath));
	}
}
