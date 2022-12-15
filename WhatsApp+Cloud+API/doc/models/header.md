
# Header

## Structure

`Header`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`HeaderTypeEnum`](../../doc/models/header-type-enum.md) | Required | - |
| `text` | `string \| undefined` | Optional | Required if type is set to text. Text for the header. Formatting allows emojis, but not markdown.<br>**Constraints**: *Maximum Length*: `60` |
| `video` | [`Video \| undefined`](../../doc/models/video.md) | Optional | - |
| `image` | [`Image \| undefined`](../../doc/models/image.md) | Optional | - |
| `document` | [`Document \| undefined`](../../doc/models/document.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "text",
  "text": "<Header List Message>"
}
```

