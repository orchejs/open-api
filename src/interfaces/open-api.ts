import { Info } from './info';
import { Server } from './server';
import { Paths } from './paths';
import { Components } from './components';
import { SecurityRequirement } from './security-requirement';
import { Tag } from './tag';
import { ExternalDocumentation } from './external-documentation';

/**
 * OpenApi Interface. Text and object extracted from the Open Api Specification.
 *
 * This is the root document object of the OpenAPI document.
 *
 * source: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#oasObject
 */
export interface OpenApi {
  /**
   * REQUIRED. This string MUST be the semantic version number of the OpenAPI Specification
   * version that the OpenAPI document uses. The openapi field SHOULD be used by tooling
   * specifications and clients to interpret the OpenAPI document. This is not related to
   * the API info.version string.
   */
  openapi: string;
  /**
   * REQUIRED. Provides metadata about the API. The metadata MAY be used by tooling as required.
   */
  info: Info;
  /**
   * An array of Server Objects, which provide connectivity information to a target server.
   * If the servers property is not provided, or is an empty array, the default value would be
   * a Server Object with a url value of /.
   */
  servers?: Server[];
  /**
   * REQUIRED. The available paths and operations for the API.
   */
  paths: Paths;
  /**
   * An element to hold various schemas for the specification.
   */
  components?: Components;
  /**
   * A declaration of which security mechanisms can be used across the API. The list of values
   * includes alternative security requirement objects that can be used. Only one of the security
   * requirement objects need to be satisfied to authorize a request. Individual operations can
   * override this definition.
   */
  security?: SecurityRequirement[];
  /**
   * A list of tags used by the specification with additional metadata. The order of the tags
   * can be used to reflect on their order by the parsing tools. Not all tags that are used by
   * the Operation Object must be declared. The tags that are not declared MAY be organized
   * randomly or based on the tools' logic. Each tag name in the list MUST be unique.
   */
  tags?: Tag[];
  /**
   * Additional external documentation.
   */
  externalDocs?: ExternalDocumentation;
}
