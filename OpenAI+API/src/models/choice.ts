/**
 * OpenAI APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  ChatCompletionResponseMessage,
  chatCompletionResponseMessageSchema,
} from './chatCompletionResponseMessage';

export interface Choice {
  index?: number;
  message?: ChatCompletionResponseMessage;
  finishReason?: string | null;
}

export const choiceSchema: Schema<Choice> = object({
  index: ['index', optional(number())],
  message: [
    'message',
    optional(lazy(() => chatCompletionResponseMessageSchema)),
  ],
  finishReason: ['finish_reason', optional(nullable(string()))],
});
