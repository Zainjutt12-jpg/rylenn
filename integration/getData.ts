import axios from 'axios';

/**
 * Axios GET request function with query params support.
 * @param url - API endpoint
 * @param params - query parameters
 */

export const fetchDataWithParams = async <T>(url: string, params?: Record<string, any>): Promise<T> => {
  try {
    const response = await axios.get<T>(url, { params });
    return response.data;
  } catch (error: any) {
    console.error('GET request failed:', error.message);
    throw error;
  }
};
