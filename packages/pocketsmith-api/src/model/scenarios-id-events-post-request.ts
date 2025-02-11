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

import { RepeatType } from './event'

/**
 *
 * @export
 * @interface ScenariosIdEventsPostRequest
 */
export interface ScenariosIdEventsPostRequest {
  /**
   * The unique identifier of the category for the event.
   * @type {number}
   * @memberof ScenariosIdEventsPostRequest
   */
  category_id: number
  /**
   * The starting date of the event.
   * @type {string}
   * @memberof ScenariosIdEventsPostRequest
   */
  date: string
  /**
   * The amount of the event. A positive amount is a credit, and a negative amount is a debit.
   * @type {number}
   * @memberof ScenariosIdEventsPostRequest
   */
  amount: number
  /**
   * The repeat type of the event.
   * @type {string}
   * @memberof ScenariosIdEventsPostRequest
   */
  repeat_type: RepeatType
  /**
   * The repeat interval of the event.
   * @type {number}
   * @memberof ScenariosIdEventsPostRequest
   */
  repeat_interval?: number
  /**
   * A note for the event.
   * @type {string}
   * @memberof ScenariosIdEventsPostRequest
   */
  note?: string
}
