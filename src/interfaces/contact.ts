/**
 * Contact information for the exposed API.
 */
export interface Contact {
  /**
   * The identifying name of the contact person/organization.
   */
  name:	string;	
  /**
   * The URL pointing to the contact information. MUST be in the format of a URL.
   */
  url:	string;	
  /**
   * The email address of the contact person/organization. MUST be in the format of an email 
   * address.
   */  
  email:	string;	
}
