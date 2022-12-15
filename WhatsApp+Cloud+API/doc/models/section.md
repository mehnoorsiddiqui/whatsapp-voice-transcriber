
# Section

## Structure

`Section`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `title` | `string \| undefined` | Optional | Required if the message has more than one section. Title of the section.<br>**Constraints**: *Maximum Length*: `24` |
| `rows` | [`Row[] \| undefined`](../../doc/models/row.md) | Optional | Required for List Messages. Contains a list of rows. You can have a total of 10 rows across your sections. Each row must have a title (Maximum length: 24 characters) and an ID (Maximum length: 200 characters). You can add a description (Maximum length: 72 characters), but it is optional. |

## Example (as JSON)

```json
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
}
```

