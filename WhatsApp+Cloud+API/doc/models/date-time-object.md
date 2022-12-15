
# Date Time Object

## Structure

`DateTimeObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fallbackValue` | `string` | Required | Default text. For Cloud API, we always use the fallback value, and we do not attempt to localize using other optional fields. |
| `dayOfWeek` | `number \| undefined` | Optional | - |
| `year` | `number \| undefined` | Optional | - |
| `month` | `number \| undefined` | Optional | - |
| `dayOfMonth` | `number \| undefined` | Optional | - |
| `hour` | `number \| undefined` | Optional | - |
| `minute` | `number \| undefined` | Optional | - |
| `calendar` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "fallback_value": "February 25, 1977",
  "day_of_week": 5,
  "year": 1977,
  "month": 2,
  "day_of_month": 25,
  "hour": 15,
  "minute": 33,
  "calendar": "GREGORIAN"
}
```

