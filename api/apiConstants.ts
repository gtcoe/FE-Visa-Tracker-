// Base URL for API requests
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api';

// API Endpoints
export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH_TOKEN: '/auth/refresh-token',
  },
  
  // User endpoints
  USERS: {
    LIST: '/users',
    DETAIL: (id: number) => `/users/${id}`,
    CREATE: '/users',
    UPDATE: (id: number) => `/users/${id}`,
    DELETE: (id: number) => `/users/${id}`,
    STATUS: (id: number) => `/users/${id}/status`,
  },
  
  // Client endpoints
  CLIENTS: {
    LIST: '/clients',
    DETAIL: (id: number) => `/clients/${id}`,
    CREATE: '/clients',
    UPDATE: (id: number) => `/clients/${id}`,
    DELETE: (id: number) => `/clients/${id}`,
  },
  
  // Application endpoints
  APPLICATIONS: {
    LIST: '/applications',
    SEARCH: '/applications/search',
    DETAIL: (id: number) => `/applications/${id}`,
    CREATE: '/applications',
    UPDATE: (id: number) => `/applications/${id}`,
    DELETE: (id: number) => `/applications/${id}`,
    STEP1: '/applications/step1',
    STEP2: '/applications/step2',
    STEP3: '/applications/step3',
    STEP4: '/applications/step4',
  },
  
  // Checklist endpoints
  CHECKLISTS: {
    LIST: '/checklists',
    SEARCH: '/checklists/search',
    DETAIL: (id: number) => `/checklists/${id}`,
  },
};

// Default headers for API requests
export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
};

// Request timeout in milliseconds
export const REQUEST_TIMEOUT = 30000; // 30 seconds 