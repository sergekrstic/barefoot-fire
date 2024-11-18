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
 * @interface UsersIdAttachmentsPostRequest
 */
export interface UsersIdAttachmentsPostRequest {
  /**
   * The title of the attachment. If the title is blank or not provided, the title will derived from the file name.
   * @type {string}
   * @memberof UsersIdAttachmentsPostRequest
   */
  title?: string
  /**
   * The file name of the attachment.
   * @type {string}
   * @memberof UsersIdAttachmentsPostRequest
   */
  file_name?: string
  /**
   * The base64-encoded contents of the source file. The supported file types are png, jpg, pdf, xls, xlsx, doc, docx.
   * @type {string}
   * @memberof UsersIdAttachmentsPostRequest
   */
  file_data?: string
}