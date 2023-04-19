
# Create Image Request

## Structure

`CreateImageRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `prompt` | `string` | Required | A text description of the desired image(s). The maximum length is 1000 characters. |
| `n` | `number \| undefined` | Optional | The number of images to generate. Must be between 1 and 10.<br>**Default**: `1`<br>**Constraints**: `>= 1`, `<= 10` |
| `size` | `unknown \| undefined` | Optional | - |
| `responseFormat` | `unknown \| undefined` | Optional | - |
| `user` | `string \| undefined` | Optional | A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids). |

## Example (as JSON)

```json
{
  "prompt": "A cute baby sea otter",
  "n": 1,
  "user": "user-1234"
}
```

