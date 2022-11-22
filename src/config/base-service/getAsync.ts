import httpServiceInstance from "./http-service-instance-create";
import { ErrorResponse, errorDefaultList, Response } from "./model";

/**
 * @description
 * Base method for GET requests
 * @param method API method to be consumed. EX: baseURL/{method} = baseURL/access
 ** NOTE: In case of the baseURL is not configured in the application
 * must be passed the entire URL. EX: https://localhost:44336/api/access
*/
export async function getAsync<Values>(method: string): Promise<Values | undefined>;

/**
 * @description
 * Base method for GET requests
 * @param method API method to be consumed. EX: baseURL/{method} = baseURL/access
 ** NOTE: In case of the baseURL is not configured in the application
 * must be passed the entire URL. EX: https://localhost:44336/api/access
 * @param params The URL parameters to be sent with the request
 ** NOTE: params that are null or undefined are not rendered in the URL.
 ** EX: { ID: 12345 }
*/
export async function getAsync<Values>(method: string, params: any): Promise<Values | undefined>;

export async function getAsync<Values>(method: string, params?: any): Promise<Values | undefined> {
  try {
    const response: Response = await httpServiceInstance.get(method, params);
    const typedResponse: Values = response.data;
    return typedResponse;
  } catch (error: any) {
    const errorResponse: ErrorResponse = {
      errors: error?.response?.data?.errors || errorDefaultList,
      statusCode: error?.response?.data?.statusCode,
      message: error?.response?.data?.message
    }
    return Promise.reject(errorResponse);
  }
}