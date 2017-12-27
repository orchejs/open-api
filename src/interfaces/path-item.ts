import { Operation } from './operation';
import { Server } from './server';
import { Parameter } from './parameter';
import { Reference } from './reference';

/**
 * Describes the operations available on a single path. A Path Item MAY be empty, due to ACL
 * constraints. The path itself is still exposed to the documentation viewer but they will not
 * know which operations and parameters are available.
 *
 * source: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#operationObject
 */
export interface PathItem {
  /**
   * Allows for an external definition of this path item. The referenced structure MUST be in
   * the format of a Path Item Object. If there are conflicts between the referenced definition
   * and this Path Item's definition, the behavior is undefined.
   */
  $ref?: PathItem;
  /**
   * An optional, string summary, intended to apply to all operations in this path.
   */
  summary?: string;
  /**
   * An optional, string description, intended to apply to all operations in this path.
   * CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;
  /**
   * A definition of a GET operation on this path.
   */
  get?: Operation;
  /**
   * A definition of a PUT operation on this path.
   */
  put?: Operation;
  /**
   * A definition of a POST operation on this path.
   */
  post?: Operation;
  /**
   * A definition of a DELETE operation on this path.
   */
  delete?: Operation;
  /**
   * A definition of a OPTIONS operation on this path.
   */
  options?: Operation;
  /**
   * A definition of a HEAD operation on this path.
   */
  head?: Operation;
  /**
   * A definition of a PATCH operation on this path.
   */
  patch?: Operation;
  /**
   * A definition of a TRACE operation on this path.
   */
  trace?: Operation;
  /**
   * An alternative server array to service all operations in this path.
   */
  servers?: Server[];
  /**
   * A list of parameters that are applicable for all the operations described under this path.
   * These parameters can be overridden at the operation level, but cannot be removed there.
   * The list MUST NOT include duplicated parameters. A unique parameter is defined by a
   * combination of a name and location. The list can use the Reference Object to link to
   * parameters that are defined at the OpenAPI Object's components/parameters.
   */
  parameters?: Parameter[] | Reference[];
}
