
# Message

## Structure

`Message`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `audio` | [`Audio \| undefined`](../../doc/models/audio.md) | Optional | - |
| `contacts` | [`Contact[] \| undefined`](../../doc/models/contact.md) | Optional | A contact object. Required when type=contacts. |
| `document` | [`Document \| undefined`](../../doc/models/document.md) | Optional | - |
| `image` | [`Image \| undefined`](../../doc/models/image.md) | Optional | - |
| `interactive` | [`Interactive \| undefined`](../../doc/models/interactive.md) | Optional | - |
| `location` | [`Location \| undefined`](../../doc/models/location.md) | Optional | - |
| `messagingProduct` | `string` | Required | Messaging service used for the request. |
| `recipientType` | `string \| undefined` | Optional | Currently, you can only send messages to individuals.<br>**Default**: `'individual'` |
| `sticker` | [`Sticker \| undefined`](../../doc/models/sticker.md) | Optional | - |
| `template` | [`Template \| undefined`](../../doc/models/template.md) | Optional | - |
| `text` | [`Text \| undefined`](../../doc/models/text.md) | Optional | - |
| `to` | `string` | Required | WhatsApp ID or phone number for the person you want to send a message to. |
| `type` | [`MessageTypeEnum \| undefined`](../../doc/models/message-type-enum.md) | Optional | - |
| `video` | [`Video \| undefined`](../../doc/models/video.md) | Optional | - |

## Example (as JSON)

```json
{
  "messaging_product": "whatsapp",
  "to": "{{Recipient-Phone-Number}}",
  "type": "template",
  "template": {
    "name": "hello_world",
    "language": {
      "code": "en_US"
    }
  }
}
```

