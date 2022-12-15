
# Location

## Structure

`Location`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `latitude` | `string` | Required | Latitude of the location. |
| `longitude` | `string` | Required | Longitude of the location. |
| `name` | `string \| undefined` | Optional | Name of the location. |
| `address` | `string \| undefined` | Optional | Address of the location. Only displayed if name is present. |

## Example (as JSON)

```json
{
  "latitude": "<LOCATION_LATITUDE>",
  "longitude": "<LOCATION_LONGITUDE>",
  "name": "<LOCATION_NAME>",
  "address": "<LOCATION_ADDRESS>"
}
```

