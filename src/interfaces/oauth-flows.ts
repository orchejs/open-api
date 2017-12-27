import { OAuthFlow } from './oauth-flow';

/**
 * Allows configuration of the supported OAuth Flows.
 *
 * source: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#oauthFlowsObject
 */
export interface OAuthFlows {
  /**
   * Configuration for the OAuth Implicit flow
   */
  implicit?: OAuthFlow;
  /**
   * Configuration for the OAuth Resource Owner Password flow
   */
  password?: OAuthFlow;
  /**
   * Configuration for the OAuth Client Credentials flow. Previously called application in
   * OpenAPI 2.0.
   */
  clientCredentials?: OAuthFlow;
  /**
   * Configuration for the OAuth Authorization Code flow. Previously called accessCode in
   * OpenAPI 2.0.
   */
  authorizationCode?: OAuthFlow;
}
