
# Send Message Response

## Structure

`SendMessageResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messagingProduct` | `string` | Required | - |
| `contacts` | [`ResponseContact[]`](../../doc/models/response-contact.md) | Required | - |
| `messages` | [`ResponseMessage[]`](../../doc/models/response-message.md) | Required | - |

## Example (as JSON)

```json
{
  "messaging_product": "whatsapp",
  "contacts": [
    {
      "input": "48XXXXXXXXX",
      "wa_id": "48XXXXXXXXX "
    }
  ],
  "messages": [
    {
      "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
    }
  ]
}
```

