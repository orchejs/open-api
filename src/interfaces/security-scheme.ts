import { OAuthFlows } from './oauth-flows';

/**
 * Defines a security scheme that can be used by the operations. Supported schemes are HTTP
 * authentication, an API key (either as a header or as a query parameter), OAuth2's common flows
 * (implicit, password, application and access code) as defined in RFC6749, and OpenID Connect
 * Discovery.
 *
 * source: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#securitySchemeObject
 */
export interface SecurityScheme {
  /**
   * REQUIRED. The type of the security scheme. Valid values are "apiKey", "http", "oauth2",
   * "openIdConnect".
   */
  type: string;
  /**
   * A short description for security scheme. CommonMark syntax MAY be used for rich
   * text representation.
   */
  description?: string;
  /**
   * REQUIRED. The name of the header, query or cookie parameter to
   * be used.
   */
  name: string;
  /**
   * REQUIRED. The location of the API key. Valid values are "query", "header" or
   * "cookie".
   */
  in: string;
  /**
   * REQUIRED. The name of the HTTP Authorization scheme to be used in the Authorization header as
   * defined in RFC7235.
   */
  scheme: string;
  /**
   * A hint to the client to identify how the bearer token is formatted. Bearer tokens are usually
   * generated by an authorization server, so this information is primarily for
   * documentation purposes.
   */
  bearerFormat?: string;
  /**
   * REQUIRED. An object containing configuration information for the flow
   * types supported.
   */
  flows: OAuthFlows;
  /**
   * REQUIRED. OpenId Connect URL to discover OAuth2 configuration values. This MUST be in the form
   * of a URL.
   */
  openIdConnectUrl: string;
}
