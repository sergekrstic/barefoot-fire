/* tslint:disable */
/* eslint-disable */
/**
 * PocketSmith
 * The PocketSmith API
 *
 * The version of the OpenAPI document: 2.0
 * Contact: api@pocketsmith.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface User
 */
export interface User {
  /**
   * The unique identifier of the user.
   * @type {number}
   * @memberof User
   */
  id?: number
  /**
   * The user\'s username.
   * @type {string}
   * @memberof User
   */
  login?: string
  /**
   * The full name of the user, although not all users will have a name set.
   * @type {string}
   * @memberof User
   */
  name?: string
  /**
   * The user\'s email address.
   * @type {string}
   * @memberof User
   */
  email?: string
  /**
   * The URL to the user\'s avatar.
   * @type {string}
   * @memberof User
   */
  avatar_url?: string
  /**
   * Whether the user has opted in to beta features.
   * @type {boolean}
   * @memberof User
   */
  beta_user?: boolean
  /**
   * The user\'s time zone.
   * @type {string}
   * @memberof User
   */
  time_zone?: string
  /**
   * The day of the week the user wishes their calendars to start on. A number between 0 and 6, where 0 is Sunday and 6 is Saturday.
   * @type {number}
   * @memberof User
   */
  week_start_day?: number
  /**
   * Whether the user wants to review new transactions, transfer transactions or categorisation.
   * @type {boolean}
   * @memberof User
   */
  is_reviewing_transactions?: boolean
  /**
   * The user\'s base currency.
   * @type {string}
   * @memberof User
   */
  base_currency_code?: string
  /**
   * Whether the user wants to see all accounts in their base currency instead of the native account currency.
   * @type {boolean}
   * @memberof User
   */
  always_show_base_currency?: boolean
  /**
   * Whether the user has multiple currencies in use across their account.
   * @type {boolean}
   * @memberof User
   */
  using_multiple_currencies?: boolean
  /**
   * The user\'s total number of available accounts.
   * @type {number}
   * @memberof User
   */
  available_accounts?: number
  /**
   * The user\'s total number of available budgets.
   * @type {number}
   * @memberof User
   */
  available_budgets?: number
  /**
   * When the user\'s forecast was last updated.
   * @type {string}
   * @memberof User
   */
  forecast_last_updated_at?: string
  /**
   * When the user\'s forecast was last accessed.
   * @type {string}
   * @memberof User
   */
  forecast_last_accessed_at?: string
  /**
   * The date that the user\'s forecast starts.
   * @type {string}
   * @memberof User
   */
  forecast_start_date?: string
  /**
   * The date that the user\'s forecast ends.
   * @type {string}
   * @memberof User
   */
  forecast_end_date?: string
  /**
   * Whether the user\'s forecast recalculation should be deferred.
   * @type {boolean}
   * @memberof User
   */
  forecast_defer_recalculate?: boolean
  /**
   * Whether the user\'s forecast needs to be recalculated.
   * @type {boolean}
   * @memberof User
   */
  forecast_needs_recalculate?: boolean
  /**
   * When the user last logged into PocketSmith.
   * @type {string}
   * @memberof User
   */
  last_logged_in_at?: string
  /**
   * When the user last interacted with PocketSmith, via any application or the API.
   * @type {string}
   * @memberof User
   */
  last_activity_at?: string
  /**
   * When the user signed up.
   * @type {string}
   * @memberof User
   */
  created_at?: string
  /**
   * When the user was last updated.
   * @type {string}
   * @memberof User
   */
  updated_at?: string
}
