
# Parameter

## Structure

`Parameter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`ParameterTypeEnum`](../../doc/models/parameter-type-enum.md) | Required | - |
| `text` | `string \| undefined` | Optional | Required when type=text. The message’s text. For the header component, the character limit is 60 characters. For the body component, the character limit is 1024 characters. |
| `currency` | [`Currency \| undefined`](../../doc/models/currency.md) | Optional | - |
| `dateTime` | [`DateTimeObject \| undefined`](../../doc/models/date-time-object.md) | Optional | - |
| `image` | [`Image \| undefined`](../../doc/models/image.md) | Optional | - |
| `document` | [`Document \| undefined`](../../doc/models/document.md) | Optional | - |
| `video` | [`Video \| undefined`](../../doc/models/video.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "text",
  "text": "text-string"
}
```

