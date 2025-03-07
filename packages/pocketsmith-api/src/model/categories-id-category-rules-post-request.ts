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
 * @interface CategoriesIdCategoryRulesPostRequest
 */
export interface CategoriesIdCategoryRulesPostRequest {
  /**
   * The keyword/s to match the transaction payees.
   * @type {string}
   * @memberof CategoriesIdCategoryRulesPostRequest
   */
  payee_matches: string
  /**
   * Apply the created category rule to all uncategorised transactions.
   * @type {boolean}
   * @memberof CategoriesIdCategoryRulesPostRequest
   */
  apply_to_uncategorised?: boolean
  /**
   * Apply the created category rule to all transactions.
   * @type {boolean}
   * @memberof CategoriesIdCategoryRulesPostRequest
   */
  apply_to_all?: boolean
}
