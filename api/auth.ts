import config from '@component/constants/config';
import { post } from './httpClient';

// Get the API base URL and endpoints from config
const { API_BASE_URL, AUTH_TOKEN_KEY, API_ENDPOINTS } = config;

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

// Interface for login response data
interface LoginResponseData {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
    type: number;
    status: number;
  };
}

// Function to log in a user
export const login = async (credentials: LoginCredentials): Promise<LoginResponseData> => {
  try {
    const response = await post<LoginResponseData>(API_ENDPOINTS.LOGIN, credentials, {
      requiresAuth: false // Login doesn't require authentication
    });

    if (!response.status || !response.data) {
      throw new Error(response.message || 'Login failed');
    }

    // Store the token in localStorage
    localStorage.setItem(AUTH_TOKEN_KEY, response.data.token);

    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

// Function to log out a user
export const logout = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
};

// Function to check if a user is logged in
export const isLoggedIn = (): boolean => {
  return !!localStorage.getItem(AUTH_TOKEN_KEY);
};

// Function to get the current JWT token
export const getToken = (): string | null => {

  //todo comment below hardcode set
  localStorage.setItem(AUTH_TOKEN_KEY, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE3NDIwNTgwODMsImV4cCI6MTc0NDY1MDA4M30.ikKSBctjrifQJ47VIGVRRNq4arYEiivkm1MXeElo3DY");
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