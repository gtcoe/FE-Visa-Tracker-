import config from '@component/constants/config';
import { post } from './httpClient';

// Get the API base URL and endpoints from config
const { API_BASE_URL, AUTH_TOKEN_KEY, API_ENDPOINTS, USER_ID_KEY, USER_TYPE_KEY, LOGIN_STATUS_KEY } = config;

// Interface for the API response from backend
interface ApiResponse<T> {
  status: boolean;
  message?: string;
  data?: T;
}

// Interface for login credentials
interface LoginCredentials {
  email: string;
  password: string;
}

// Interface for login response data structure
interface LoginResponseData {
  status: boolean;
  message?: string;
  data?: {
    token: string;
    user_id: number;
    user_type: number;
    login_status: number;
  };
}

// Function to log in a user
export const login = async (credentials: LoginCredentials): Promise<LoginResponseData> => {
  try {
    const response = await post<{
      token: string;
      user_id: number;
      user_type: number;
      login_status: number;
    }>(API_ENDPOINTS.LOGIN, credentials, {
      requiresAuth: false // Login doesn't require authentication
    });

    if (!response) {
      throw new Error('Something went wrong. Please try again later.');
    }

    return response as LoginResponseData;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

// Function to log out a user
export const logout = (): void => {
  // Clear localStorage
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(USER_ID_KEY);
  localStorage.removeItem(USER_TYPE_KEY);
  localStorage.removeItem(LOGIN_STATUS_KEY);
  
  // Clear cookies
  document.cookie = `${AUTH_TOKEN_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  document.cookie = `${USER_TYPE_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  document.cookie = `${USER_ID_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  document.cookie = `${LOGIN_STATUS_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
};

// Function to check if a user is logged in
export const isLoggedIn = (): boolean => {
  return !!localStorage.getItem(AUTH_TOKEN_KEY);
};

// Function to get the current JWT token
export const getToken = (): string | null => {
  // Remove hardcoded token - use only localStorage
  return localStorage.getItem(AUTH_TOKEN_KEY);
};

// Function to add the auth token to request headers
export const addAuthHeader = (headers: HeadersInit = {}): HeadersInit => {
  const token = getToken();
  if (token) {
    return {
      ...headers,
      'auth_token': `${token}`
    };
  }
  return headers;
};

export const requestNewPassword = async (email: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/requestNewPassword`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error requesting new password:', error);
    throw error;
  }
}; 