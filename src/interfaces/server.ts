import { ServerVariable } from './server-variable';

/**
 * An object representing a Server.
 *
 * source: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#serverObject
 */
export interface Server {
  /**
   * REQUIRED. A URL to the target host. This URL supports Server Variables and MAY be relative, to
   * indicate that the host location is relative to the location where the OpenAPI document is
   * being served. Variable substitutions will be made when a variable is named in {brackets}.
   */
  url: string;
  /**
   * An optional string describing the host designated by the URL. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;
  /**
   * 	A map between a variable name and its value. The value is used for substitution in the server's URL template.
   */
  variables?: Map<string, ServerVariable>;
}
