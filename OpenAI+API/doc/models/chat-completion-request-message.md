
# Chat Completion Request Message

## Structure

`ChatCompletionRequestMessage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `role` | [`RoleEnum`](../../doc/models/role-enum.md) | Required | - |
| `content` | `string` | Required | The contents of the message |
| `name` | `string \| undefined` | Optional | The name of the user in a multi-user chat |

## Example (as JSON)

```json
{
  "role": "system",
  "content": "content4",
  "name": "name0"
}
```

