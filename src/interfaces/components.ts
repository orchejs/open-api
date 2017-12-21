/**
 * Holds a set of reusable objects for different aspects of the OAS. All objects defined within the 
 * components object will have no effect on the API unless they are explicitly referenced from 
 * properties outside the components object.
 */
export interface Components {
  /**
   * An object to hold reusable Schema Objects.
   */
  schemas: any; 
  /**
   * An object to hold reusable Response Objects.
   */
  responses: any; 
  /**
   * An object to hold reusable Parameter Objects.
   */
  parameters: any; 
  /**
   * An object to hold reusable Example Objects.
   */
  examples: any; 
  /**
   * An object to hold reusable Request Body Objects.
   */
  requestBodies: any; 	
  /**
   * An object to hold reusable Header Objects.
   */
  headers: any; 
  /**
   * 	An object to hold reusable Security Scheme Objects.
   */
  securitySchemes: any; 
  /**
   * An object to hold reusable Link Objects.
   */
  links: any; 
  /**
   * An object to hold reusable Callback Objects.
   */
  callbacks: any; 
}