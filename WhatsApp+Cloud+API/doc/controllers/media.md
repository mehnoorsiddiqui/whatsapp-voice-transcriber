# Media

```ts
const mediaController = new MediaController(client);
```

## Class Name

`MediaController`


# Retrieve Media URL

To retrieve your media’s URL, make a **GET** call to **`/{{Media-ID}}`**. Use the returned URL to download the media file. Note that clicking this URL (i.e. performing a generic GET) will not return the media; you must include an access token. see [Download Media](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/media#download-media).

#### Response

A successful response includes an object with a media URL. The URL is only valid for 5 minutes. To use this URL, see [Download Media](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/media#download-media).

```ts
async retrieveMediaURL(
  mediaID: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveMediaURL>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mediaID` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveMediaURL`](../../doc/models/retrieve-media-url.md)

## Example Usage

```ts
const mediaID = 'Media-ID0';
try {
  const { result, ...httpResponse } = await mediaController.retrieveMediaURL(mediaID);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "messaging_product": "whatsapp",
  "url": "<URL>",
  "mime_type": "image/jpeg",
  "sha256": "<HASH>",
  "file_size": "303833",
  "id": "2621233374848975"
}
```

