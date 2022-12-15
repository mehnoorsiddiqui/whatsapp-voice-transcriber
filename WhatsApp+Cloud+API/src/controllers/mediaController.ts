/**
 * WhatsApp Cloud APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  RetrieveMediaURL,
  retrieveMediaURLSchema,
} from '../models/retrieveMediaURL';
import { string } from '../schema';
import { BaseController } from './baseController';

export class MediaController extends BaseController {
  /**
   * To retrieve your media’s URL, make a **GET** call to **`/{{Media-ID}}`**. Use the returned URL to
   * download the media file. Note that clicking this URL (i.e. performing a generic GET) will not return
   * the media; you must include an access token. see [Download Media](https://developers.facebook.
   * com/docs/whatsapp/cloud-api/reference/media#download-media).
   *
   * #### Response
   *
   * A successful response includes an object with a media URL. The URL is only valid for 5 minutes. To
   * use this URL, see [Download Media](https://developers.facebook.com/docs/whatsapp/cloud-
   * api/reference/media#download-media).
   *
   * @param mediaID
   * @return Response from the API call
   */
  async retrieveMediaURL(
    mediaID: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveMediaURL>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ mediaID: [mediaID, string()] });
    req.appendTemplatePath`/${mapped.mediaID}`;
    return req.callAsJson(retrieveMediaURLSchema, requestOptions);
  }
}
