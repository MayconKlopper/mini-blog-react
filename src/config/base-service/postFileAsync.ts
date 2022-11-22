import httpServiceInstance from "./http-service-instance-create";
import { ErrorResponse, errorDefaultList, Response } from "./model";

export async function postFileAsync<Values>(method: string, body: any): Promise<Values | undefined> {
  try {
    const response: Response = await httpServiceInstance.post(method, body, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });
    const typedResponse: Values = response.data
    return typedResponse;
  } catch (error: any) {
    const errorResponse: ErrorResponse = {
      errors: error?.response?.data?.errors || errorDefaultList,
      statusCode: error?.response?.data?.statusCode,
      message: error?.response?.data?.message,
      data: error?.response?.data?.data
    }
    return Promise.reject(errorResponse);
  }
}