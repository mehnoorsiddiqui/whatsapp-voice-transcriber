
# Button Reply

## Structure

`ButtonReply`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Unique identifier for your button. This ID is returned in the webhook when the button is clicked by the user. |
| `title` | `string` | Required | Button title. It cannot be an empty string and must be unique within the message. Emojis are supported, markdown is not. |

## Example (as JSON)

```json
{
  "id": "id0",
  "title": "title4"
}
```

