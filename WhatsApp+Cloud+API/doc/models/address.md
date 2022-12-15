
# Address

## Structure

`Address`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `street` | `string \| undefined` | Optional | Street number and name |
| `city` | `string \| undefined` | Optional | City name. |
| `state` | `string \| undefined` | Optional | State abbreviation. |
| `zip` | `string \| undefined` | Optional | ZIP code. |
| `country` | `string \| undefined` | Optional | Full country name. |
| `countryCode` | `string \| undefined` | Optional | Two-letter country abbreviation. |
| `type` | [`PersonalInformationTypeEnum \| undefined`](../../doc/models/personal-information-type-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "street": "<ADDRESS_STREET>",
  "city": "<ADDRESS_CITY>",
  "state": "<ADDRESS_STATE>",
  "zip": "<ADDRESS_ZIP>",
  "country": "<ADDRESS_COUNTRY>",
  "country_code": "<ADDRESS_COUNTRY_CODE>",
  "type": "HOME"
}
```

