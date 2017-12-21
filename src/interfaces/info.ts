import { Contact } from './contact';
import { License } from './license';
/**
 * The object provides metadata about the API. The metadata MAY be used by the clients if needed, 
 * and MAY be presented in editing or documentation generation tools for convenience.
 */
export interface Info {
  /**
   * REQUIRED. The title of the application.
   */
  title:	string;
  /**
   * A short description of the application. CommonMark syntax MAY be used for rich 
   * text representation.
   */
  description?:	string;
  /**
   * A URL to the Terms of Service for the API. MUST be in the format of a URL.
   */
  termsOfService?:	string;
  /**
   * Object	The contact information for the exposed API.
   */
  contact?:	Contact;
  /**
   * Object	The license information for the exposed API.
   */
  license?:	License;
  /**
   * REQUIRED. The version of the OpenAPI document (which is distinct from the OpenAPI 
   * Specification version or the API implementation version).  
   */ 
  version:	string;	
}