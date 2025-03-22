// Configuration constants for the application

// API base URL - different for each environment
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8081/api';

// Authentication token key for localStorage/sessionStorage
const AUTH_TOKEN_KEY = 'visaistic_auth_token';

// API endpoints
const API_ENDPOINTS = {
  // Auth
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  
  // Clients
  GET_ALL_CLIENTS: '/client',
  CREATE_CLIENT: '/client/create',
  
  // Users
  GET_ALL_USERS: '/user',
  CREATE_USER: '/user/create',
  UPDATE_USER: '/user/update',
  UPDATE_STATUS_USER: '/user/status',
  
  // Applications
  GET_ALL_APPLICATIONS: '/application',
  CREATE_APPLICATION: '/application/create',
  UPDATE_APPLICATION: '/application/update',
};

// Export configuration
const config = {
  API_BASE_URL,
  AUTH_TOKEN_KEY,
  API_ENDPOINTS
};

export default config; 