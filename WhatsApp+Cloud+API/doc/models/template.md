
# Template

## Structure

`Template`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | Name of the template. |
| `language` | [`Language`](../../doc/models/language.md) | Required | - |
| `components` | [`Component[] \| undefined`](../../doc/models/component.md) | Optional | Array of components objects containing the parameters of the message. |

## Example (as JSON)

```json
{
  "name": "hello_world",
  "language": {
    "code": "en_US"
  }
}
```

