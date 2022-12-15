
# Interactive

## Structure

`Interactive`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `action` | [`Action`](../../doc/models/action.md) | Required | - |
| `body` | [`Body`](../../doc/models/body.md) | Required | - |
| `footer` | [`Footer \| undefined`](../../doc/models/footer.md) | Optional | - |
| `header` | [`Header \| undefined`](../../doc/models/header.md) | Optional | - |
| `type` | [`InteractiveTypeEnum`](../../doc/models/interactive-type-enum.md) | Required | The type of interactive message you want to send. |

## Example (as JSON)

```json
{
  "type": "list",
  "header": {
    "type": "text",
    "text": "<Header List Message>"
  },
  "body": {
    "text": "<List Body Message>"
  },
  "footer": {
    "text": "<Footer Message>"
  },
  "action": {
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
}
```

