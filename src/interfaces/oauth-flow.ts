/**
 * Configuration details for a supported OAuth Flow
 *
 * source: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#oauthFlowObject
 */
export interface OAuthFlow {
  /**
   * REQUIRED. The authorization URL to be used for this flow. This MUST be in the form of a URL.
   */
  authorizationUrl: string;
  /**
   * REQUIRED. The token URL to be used for this flow. This MUST be in the form of a URL.
   */
  tokenUrl: string;
  /**
   * The URL to be used for obtaining refresh tokens. This MUST be in the form of a URL.
   */
  refreshUrl?: string;
  /**
   * REQUIRED. The available scopes for the OAuth2 security scheme. A map between the scope name
   * and a short description for it.
   */
  scopes: Map<string, string>;
}
