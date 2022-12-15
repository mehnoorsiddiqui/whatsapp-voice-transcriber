# API

```ts
const apiController = new ApiController(client);
```

## Class Name

`ApiController`

## Methods

* [Transcribe File Asr Post](../../doc/controllers/api.md#transcribe-file-asr-post)
* [Language Detection Detect Language Post](../../doc/controllers/api.md#language-detection-detect-language-post)
* [Transcribe File 2 Srt Get Srt Post](../../doc/controllers/api.md#transcribe-file-2-srt-get-srt-post)
* [Transcribe File 2 Vtt Get Vtt Post](../../doc/controllers/api.md#transcribe-file-2-vtt-get-vtt-post)


# Transcribe File Asr Post

Transcribe File

```ts
async transcribeFileAsrPost(
  audioFile: FileWrapper,
  task?: TaskEnum,
  language?: LanguageEnum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `audioFile` | `FileWrapper` | Form, Required | - |
| `task` | [`TaskEnum \| undefined`](../../doc/models/task-enum.md) | Query, Optional | **Default**: `TaskEnum.Transcribe` |
| `language` | [`LanguageEnum \| undefined`](../../doc/models/language-enum.md) | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const audioFile = new FileWrapper(fs.createReadStream('dummy_file'));
const task = 'transcribe';
try {
  const { result, ...httpResponse } = await apiController.transcribeFileAsrPost(audioFile, task);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Validation Error | [`HTTPValidationError`](../../doc/models/http-validation-error.md) |


# Language Detection Detect Language Post

Language Detection

```ts
async languageDetectionDetectLanguagePost(
  audioFile: FileWrapper,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `audioFile` | `FileWrapper` | Form, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const audioFile = new FileWrapper(fs.createReadStream('dummy_file'));
try {
  const { result, ...httpResponse } = await apiController.languageDetectionDetectLanguagePost(audioFile);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Validation Error | [`HTTPValidationError`](../../doc/models/http-validation-error.md) |


# Transcribe File 2 Srt Get Srt Post

Transcribe File2Srt

```ts
async transcribeFile2srtGetSrtPost(
  audioFile: FileWrapper,
  task?: TaskEnum,
  language?: LanguageEnum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `audioFile` | `FileWrapper` | Form, Required | - |
| `task` | [`TaskEnum \| undefined`](../../doc/models/task-enum.md) | Query, Optional | **Default**: `TaskEnum.Transcribe` |
| `language` | [`LanguageEnum \| undefined`](../../doc/models/language-enum.md) | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const audioFile = new FileWrapper(fs.createReadStream('dummy_file'));
const task = 'transcribe';
try {
  const { result, ...httpResponse } = await apiController.transcribeFile2srtGetSrtPost(audioFile, task);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Validation Error | [`HTTPValidationError`](../../doc/models/http-validation-error.md) |


# Transcribe File 2 Vtt Get Vtt Post

Transcribe File2Vtt

```ts
async transcribeFile2vttGetVttPost(
  audioFile: FileWrapper,
  task?: TaskEnum,
  language?: LanguageEnum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `audioFile` | `FileWrapper` | Form, Required | - |
| `task` | [`TaskEnum \| undefined`](../../doc/models/task-enum.md) | Query, Optional | **Default**: `TaskEnum.Transcribe` |
| `language` | [`LanguageEnum \| undefined`](../../doc/models/language-enum.md) | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const audioFile = new FileWrapper(fs.createReadStream('dummy_file'));
const task = 'transcribe';
try {
  const { result, ...httpResponse } = await apiController.transcribeFile2vttGetVttPost(audioFile, task);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Validation Error | [`HTTPValidationError`](../../doc/models/http-validation-error.md) |

