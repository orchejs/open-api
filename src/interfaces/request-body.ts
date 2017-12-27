import { MediaType } from './media-type';

/**
 * Describes a single request body.
 *
 * source: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#requestBodyObject
 */
export interface RequestBody {
  /**
   * A brief description of the request body. This could contain examples of use. CommonMark syntax
   * MAY be used for rich text representation.
   */
  description?: string;
  /**
   * REQUIRED. The content of the request body. The key is a media type or media type range and the
   * value describes it. For requests that match multiple keys, only the most specific key is
   * applicable. e.g. text/plain overrides text.
   */
  content: Map<string, MediaType>;
  /**
   * Determines if the request body is required in the request. Defaults to false.
   */
  required?: boolean;
}
