import { ExternalDocumentation } from './external-documentation';

/**
 * Adds metadata to a single tag that is used by the Operation Object. It is not mandatory to have
 * a Tag Object per tag defined in the Operation Object instances.
 *
 * source: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#tagObject
 */
export interface Tag {
  /**
   * REQUIRED. The name of the tag.
   */
  name: string;
  /**
   * A short description for the tag. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;
  /**
   * Additional external documentation for this tag.
   */
  externalDocs?: ExternalDocumentation;
}
