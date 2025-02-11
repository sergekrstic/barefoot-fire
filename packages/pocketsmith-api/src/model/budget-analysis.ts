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

import type { Period } from './period'

/**
 *
 * @export
 * @interface BudgetAnalysis
 */
export interface BudgetAnalysis {
  /**
   * The start date of the budget analysis.
   * @type {string}
   * @memberof BudgetAnalysis
   */
  start_date?: string
  /**
   * The end date of the budget analysis.
   * @type {string}
   * @memberof BudgetAnalysis
   */
  end_date?: string
  /**
   * The currency of the budget analysis.
   * @type {string}
   * @memberof BudgetAnalysis
   */
  currency_code?: string
  /**
   * The total actual (transactions) amount across all periods.
   * @type {number}
   * @memberof BudgetAnalysis
   */
  total_actual_amount?: number
  /**
   * The average actual (transactions) amount across all periods.
   * @type {number}
   * @memberof BudgetAnalysis
   */
  average_actual_amount?: number
  /**
   * The total budgeted amount across all periods.
   * @type {number}
   * @memberof BudgetAnalysis
   */
  total_forecast_amount?: number
  /**
   * The average budgeted amount across all periods.
   * @type {number}
   * @memberof BudgetAnalysis
   */
  average_forecast_amount?: number
  /**
   * The total amount the budget was exceeded across all periods.
   * @type {number}
   * @memberof BudgetAnalysis
   */
  total_over_by?: number
  /**
   * The total amount the budget was under by across all periods.
   * @type {number}
   * @memberof BudgetAnalysis
   */
  total_under_by?: number
  /**
   * The period analyses that this budget analysis comprises.
   * @type {Array<Period>}
   * @memberof BudgetAnalysis
   */
  periods?: Array<Period>
}
