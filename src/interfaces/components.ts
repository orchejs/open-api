import { Schema } from './schema';
import { Reference } from './reference';
import { Parameter } from './parameter';
import { Example } from './example';
import { RequestBody } from './request-body';
import { Header } from './header';
import { SecurityScheme } from './security-scheme';
import { Link } from './link';
import { Callback } from './callback';
import { Response } from './response';

/**
 * Holds a set of reusable objects for different aspects of the OAS. All objects defined within the
 * components object will have no effect on the API unless they are explicitly referenced from
 * properties outside the components object.
 *
 * source: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#componentsObject
 */
export interface Components {
  /**
   * An object to hold reusable Schema Objects.
   */
  schemas: Map<string, Schema | Reference>;
  /**
   * An object to hold reusable Response Objects.
   */
  responses: Map<string, Response | Reference>;
  /**
   * An object to hold reusable Parameter Objects.
   */
  parameters: Map<string, Parameter | Reference>;
  /**
   * An object to hold reusable Example Objects.
   */
  examples: Map<string, Example | Reference>;
  /**
   * An object to hold reusable Request Body Objects.
   */
  requestBodies: Map<string, RequestBody | Reference>;
  /**
   * An object to hold reusable Header Objects.
   */
  headers: Map<string, Header | Reference>;
  /**
   * 	An object to hold reusable Security Scheme Objects.
   */
  securitySchemes: Map<string, SecurityScheme | Reference>;
  /**
   * An object to hold reusable Link Objects.
   */
  links: Map<string, Link | Reference>;
  /**
   * An object to hold reusable Callback Objects.
   */
  callbacks: Map<string, Callback | Reference>;
}
