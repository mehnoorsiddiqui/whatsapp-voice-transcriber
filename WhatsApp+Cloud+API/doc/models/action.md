
# Action

## Structure

`Action`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `button` | `string \| undefined` | Optional | Required for List Messages. Button content. It cannot be an empty string and must be unique within the message. Emojis are supported, markdown is not.<br>**Constraints**: *Maximum Length*: `20` |
| `buttons` | [`Button[] \| undefined`](../../doc/models/button.md) | Optional | Required for Reply Buttons. You can have up to 3 buttons. You cannot have leading or trailing spaces when setting the ID.<br>**Constraints**: *Maximum Items*: `3` |
| `sections` | [`Section[] \| undefined`](../../doc/models/section.md) | Optional | Required for List Messages.<br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `10` |

## Example (as JSON)

```json
{
  "button": "Send",
  "sections": [
    {
      "title": "<List Category Item>",
      "rows": [
        {
          "id": "<Item ID>",
          "title": "<Item Title>",
          "description": "<Item Description>"
        },
        {
          "id": "<Item ID>",
          "title": "<Item Title>",
          "description": "<Item Description>"
        }
      ]
    },
    {
      "title": "<List Item>",
      "rows": [
        {
          "id": "<Item ID>",
          "title": "<Item Title>",
          "description": "<Item Description>"
        },
        {
          "id": "<Item ID>",
          "title": "<Item Title>",
          "description": "<Item Description>"
        }
      ]
    }
  ]
}
```

