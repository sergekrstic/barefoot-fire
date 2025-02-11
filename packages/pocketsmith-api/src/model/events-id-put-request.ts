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
 * @interface EventsIdPutRequest
 */
export interface EventsIdPutRequest {
  /**
   * Whether the update applies only to this event, to all events within the series from this event or to all events within the series.
   * @type {string}
   * @memberof EventsIdPutRequest
   */
  behaviour: Behaviour
  /**
   * The amount of the event. A positive amount is a credit, and a negative amount is a debit.
   * @type {number}
   * @memberof EventsIdPutRequest
   */
  amount?: number
  /**
   * The repeat type of the event.
   * @type {string}
   * @memberof EventsIdPutRequest
   */
  repeat_type?: RepeatType
  /**
   * The repeat interval of the event.
   * @type {number}
   * @memberof EventsIdPutRequest
   */
  repeat_interval?: number
  /**
   * A note for the event.
   * @type {string}
   * @memberof EventsIdPutRequest
   */
  note?: string
}

export const Behaviour = {
  One: 'one',
  Forward: 'forward',
  All: 'all',
} as const

export type Behaviour = (typeof Behaviour)[keyof typeof Behaviour]
