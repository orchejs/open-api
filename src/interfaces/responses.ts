import { Response } from './response';
import { Reference } from './reference';

/**
 * A container for the expected responses of an operation. The container maps a HTTP response code
 * to the expected response.
 *
 * The documentation is not necessarily expected to cover all possible HTTP response codes because
 * they may not be known in advance. However, documentation is expected to cover a successful
 * operation response and any known errors.
 *
 * The default MAY be used as a default response object for all HTTP codes that are not covered
 * individually by the specification.
 *
 * The Responses Object MUST contain at least one response code, and it SHOULD be the response
 * for a successful operation call.
 *
 * source: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#responsesObject
 */
export interface Responses {
  [responseType: string]: Response | Reference;
}
