
# Retrieve Media URL

## Structure

`RetrieveMediaURL`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messagingProduct` | `string` | Required | - |
| `url` | `string` | Required | - |
| `mimeType` | `string` | Required | - |
| `sha256` | `string` | Required | - |
| `fileSize` | `string` | Required | - |
| `id` | `string` | Required | - |

## Example (as JSON)

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

