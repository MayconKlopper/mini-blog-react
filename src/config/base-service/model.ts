/**
 * @description
 * Interface that represents a HTTP response of axios library
 * @property {any} data
 * -- The response data that was provided by the server
 * @property {number} status
 * -- The HTTP status code from server response
 * @property {string} statusText
 * -- The HTTP status message from server response
 ** As of HTTP/2 text is blank or unsurpported. (HTTP/2 RFC: https://www.rfc-editor.org/rfc/rfc7540#section-8.1.2.4)
 * @property {any} headers
 * -- The HTTP headers that the server responded with
 ** All header names are lower cased and can be accessed using the bracket notation (kebab case)
 ** Example: response.headers['content-type']
 * @property {any} config
 * -- Is the config that was provided to axios for the request
 * @property {any} request
 * -- Is the request that generated this response
 */
export interface Response {
  data: any,
  status: number,
  statusText: string,
  headers: any,
  config: any,
  request: any
}

/**
 * @description
 * Interface that represents an error message from the server
 * @property {string} code
 * -- The error's code (ID)
 * @property {string} message
 * -- The error's message
 */
export interface ErrorMessage {
  code: string,
  message: string
}

/**
 * @description
 * Interface that represents an error object from HTTP request
 * @property {ErrorMessage[]} errors
 * -- List of costumized errors
 * @property {any | undefined} data
 * -- data in the response
 * @property {number} statusCode
 * -- HTTP Status Code
 * @property {string} message
 * -- Error's message in the response
 */
export interface ErrorResponse {
  errors: ErrorMessage[],
  data?: any,
  statusCode: number,
  message: string
}

export const errorDefaultList: Array<ErrorMessage> = [
  {
    code: 'generic',
    message: import.meta.env.VITE_GENERIC_ERROR_MESSAGE
  }
];
