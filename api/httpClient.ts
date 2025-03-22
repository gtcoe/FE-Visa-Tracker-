import config from '@component/constants/config';
import { addAuthHeader } from './auth';

// Get the API base URL from config
const { API_BASE_URL } = config;

// Interface for the API response from backend
export interface ApiResponse<T> {
  status: boolean;
  message?: string;
  data?: T;
  clients_info?: T;
  users_info?: T;
  // Add more fields as needed for different API responses
}

// Basic options for fetch requests
export interface RequestOptions extends RequestInit {
  requiresAuth?: boolean;
}

// Generic function to make API requests
export async function apiRequest<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<ApiResponse<T>> {
  const { requiresAuth = true, headers = {}, ...restOptions } = options;
  
  // Prepare headers
  let requestHeaders: HeadersInit = {
    'Content-Type': 'application/json',
    ...headers
  };
  
  // Add auth header if required
  if (requiresAuth) {
    requestHeaders = addAuthHeader(requestHeaders);
  }
  
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...restOptions,
      headers: requestHeaders
    });
    
    // If the response is not ok, throw an error
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `API request failed with status: ${response.status}`
      );
    }
    
    // Parse the response
    return await response.json();
  } catch (error) {
    console.error(`Error in API request to ${endpoint}:`, error);
    throw error;
  }
}

// HTTP GET request
export function get<T>(endpoint: string, options: RequestOptions = {}): Promise<ApiResponse<T>> {
  return apiRequest<T>(endpoint, {
    method: 'GET',
    ...options
  });
}

// HTTP POST request
export function post<T>(
  endpoint: string,
  data: any,
  options: RequestOptions = {}
): Promise<ApiResponse<T>> {
  return apiRequest<T>(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
    ...options
  });
}

// HTTP PUT request
export function put<T>(
  endpoint: string,
  data: any,
  options: RequestOptions = {}
): Promise<ApiResponse<T>> {
  return apiRequest<T>(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data),
    ...options
  });
}

// HTTP DELETE request
export function del<T>(endpoint: string, options: RequestOptions = {}): Promise<ApiResponse<T>> {
  return apiRequest<T>(endpoint, {
    method: 'DELETE',
    ...options
  });
} 