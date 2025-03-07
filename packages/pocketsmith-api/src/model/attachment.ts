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

import type { AttachmentContentTypeMeta } from './attachment-content-type-meta'
import type { AttachmentVariants } from './attachment-variants'

/**
 *
 * @export
 * @interface Attachment
 */
export interface Attachment {
  /**
   * The unique identifier of the attachment
   * @type {number}
   * @memberof Attachment
   */
  id?: number
  /**
   * The title of the attachment. If blank or not provided, the title will be derived from the file name.
   * @type {string}
   * @memberof Attachment
   */
  title?: string
  /**
   * The file name of the attachment.
   * @type {string}
   * @memberof Attachment
   */
  file_name?: string
  /**
   * The type of attachment.
   * @type {string}
   * @memberof Attachment
   */
  type?: string
  /**
   * The content type of the attachment.
   * @type {string}
   * @memberof Attachment
   */
  content_type?: string
  /**
   *
   * @type {AttachmentContentTypeMeta}
   * @memberof Attachment
   */
  content_type_meta?: AttachmentContentTypeMeta
  /**
   * The url of the attachment.
   * @type {string}
   * @memberof Attachment
   */
  original_url?: string
  /**
   *
   * @type {AttachmentVariants}
   * @memberof Attachment
   */
  variants?: AttachmentVariants
  /**
   * When the attachment was created.
   * @type {string}
   * @memberof Attachment
   */
  created_at?: string
  /**
   * When the attachment was last updated.
   * @type {string}
   * @memberof Attachment
   */
  updated_at?: string
}
