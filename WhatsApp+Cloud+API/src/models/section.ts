/**
 * WhatsApp Cloud APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { Row, rowSchema } from './row';

export interface Section {
  /** Required if the message has more than one section. Title of the section. */
  title?: string;
  /** Required for List Messages. Contains a list of rows. You can have a total of 10 rows across your sections. Each row must have a title (Maximum length: 24 characters) and an ID (Maximum length: 200 characters). You can add a description (Maximum length: 72 characters), but it is optional. */
  rows?: Row[];
}

export const sectionSchema: Schema<Section> = object({
  title: ['title', optional(string())],
  rows: ['rows', optional(array(lazy(() => rowSchema)))],
});