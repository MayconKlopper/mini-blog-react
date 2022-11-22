import httpServiceInstance from "./http-service-instance-create";
import { ErrorResponse, errorDefaultList, Response } from "./model";

/**
 * @description 
 * Base method for PUT requests
 * @param method EN API method to be consumed. EX: baseURL/{method} = baseURL/access
 ** NOTE: In case of the baseURL is not configured in the application
 * must be passed the entire URL. EX: https://localhost:44336/api/access
 * @param body Object that will be send in the body of request
*/
export async function putAsync<Values>(method: string, body: any): Promise<Values | undefined> {
  try {
    const response: Response = await httpServiceInstance.put(method, body);
    const typedResponse: Values = response.data
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