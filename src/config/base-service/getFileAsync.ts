import { ResponseType, AxiosRequestConfig } from 'axios'
import httpServiceInstance from "./http-service-instance-create";
import { ErrorResponse, errorDefaultList } from "./model";

/**
 * @description
 * Base method for GET requests specified to get files (blobs)
 * @param method API method to be consumed. EX: baseURL/{method} = baseURL/access
 ** NOTE: In case of the baseURL is not configured in the application
 * must be passed the entire URL. EX: https://localhost:44336/api/access
 * @param params The URL parameters to be sent with the request
 ** NOTE: params that are null or undefined are not rendered in the URL.
 ** EX: { ID: 12345 }
 */
export async function getFileAsync(method: string, params?: any): Promise<any | undefined> {
  const responseType: ResponseType = 'blob';
  const axiosRequestConfig: AxiosRequestConfig = { responseType: responseType, params: params };
  try {
    return await httpServiceInstance.get(method, axiosRequestConfig);
  } catch (error: any) {
    const errorResponse: ErrorResponse = {
      errors: error?.response?.data?.errors || errorDefaultList,
      statusCode: error?.response?.data?.statusCode,
      message: error?.response?.data?.message
    }
    return Promise.reject(errorResponse);
  }
}