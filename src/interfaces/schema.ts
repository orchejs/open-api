import { Discriminator } from './discriminator';
import { Xml } from './xml';
import { ExternalDocumentation } from './external-documentation';

/**
 * The Schema Object allows the definition of input and output data types. These types can be
 * objects, but also primitives and arrays. This object is an extended subset of the JSON Schema
 * Specification Wright Draft 00.
 *
 * For more information about the properties, see JSON Schema Core and JSON Schema Validation.
 * Unless stated otherwise, the property definitions follow the JSON Schema.
 *
 * source: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#schemaObject
 */
export interface Schema {
  /**
   * Allows sending a null value for the defined schema. Default value is false.
   */
  nullable?: boolean;
  /**
   * Adds support for polymorphism. The discriminator is an object name that is used to
   * differentiate between other schemas which may satisfy the payload description.
   * See Composition and Inheritance for more details.
   */
  discriminator?: Discriminator;
  /**
   *Relevant only for Schema "properties" definitions. Declares the property as "read only". 
   This means that it MAY be sent as part of a response but SHOULD NOT be sent as part of the 
   request. If the property is marked as readOnly being true and is in the required list, 
   the required will take effect on the response only. A property MUST NOT be marked as both 
   readOnly and writeOnly being true. Default value is false.
   */
  readOnly?: boolean;
  /**
   * Relevant only for Schema "properties" definitions. Declares the property as "write only".
   * Therefore, it MAY be sent as part of a request but SHOULD NOT be sent as part of the response.
   * If the property is marked as writeOnly being true and is in the required list, the required
   * will take effect on the request only. A property MUST NOT be marked as both readOnly and
   * writeOnly being true. Default value is false.
   */
  writeOnly?: boolean;
  /**
   * This MAY be used only on properties schemas. It has no effect on root schemas. Adds additional
   * metadata to describe the XML representation of this property.
   */
  xml?: Xml;
  /**
   * Additional external documentation for this schema.
   */
  externalDocs?: ExternalDocumentation;
  /**
   * A free-form property to include an example of an instance for this schema. To represent
   * examples that cannot be naturally represented in JSON or YAML, a string value can be used
   * to contain the example with escaping where necessary.
   */
  example?: any;
  /**
   * Specifies that a schema is deprecated and SHOULD be transitioned out of usage. Default value
   * is false.
   */
  deprecated?: boolean;
}
