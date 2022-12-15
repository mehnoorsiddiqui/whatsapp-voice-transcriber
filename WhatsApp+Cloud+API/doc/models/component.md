
# Component

## Structure

`Component`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`ComponentTypeEnum`](../../doc/models/component-type-enum.md) | Required | - |
| `subType` | [`SubTypeEnum \| undefined`](../../doc/models/sub-type-enum.md) | Optional | - |
| `parameters` | `unknown[]` | Required | Required when type=button. Array of parameter objects with the content of the message. For components of type=button, see the button parameter object. |
| `index` | `string \| undefined` | Optional | Required when type=button. Not used for the other types. Position index of the button. You can have up to 3 buttons using index values of 0 to 2. |

## Example (as JSON)

```json
{
  "type": "button",
  "parameters": null
}
```

