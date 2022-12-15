
# Document

## Structure

`Document`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | It is the media object ID. Required when you are not using a link. |
| `link` | `string \| undefined` | Optional | The protocol and URL of the media to be sent. Use only with HTTP/HTTPS URLs. Required when you are not using an uploaded media ID. |
| `caption` | `string \| undefined` | Optional | Describes the specified document media. |
| `filename` | `string \| undefined` | Optional | Describes the filename for the specific document. |

## Example (as JSON)

```json
{
  "id": "<your-media-id>",
  "caption": "<your-document-caption-to-be-sent>",
  "filename": "<your-document-filename>"
}
```

