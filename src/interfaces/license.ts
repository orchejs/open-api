/**
 * License information for the exposed API.
 */
export interface License {
  /**
   * 	REQUIRED. The license name used for the API.
   */
  name:	string;
  /**
   * 	A URL to the license used for the API. MUST be in the format of a URL.
   */
  url?:	string;
}