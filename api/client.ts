import { Client } from '@component/components/ManageClients/ManageClients';
import config from '@component/constants/config';
import { get, post } from './httpClient';
import { ToastNotifyError } from '@component/components/common/Toast';

// Get API endpoints from config
const { API_ENDPOINTS } = config;

// Helper function to check if code is running in browser
const isBrowser = typeof window !== 'undefined';

// Map backend client data to frontend Client interface
const mapBackendClientToFrontend = (backendClient: any): Client => {
  return {
    clientId: backendClient.id,
    userId: backendClient.user_id,
    type: backendClient.type,
    name: backendClient.owner_name,
    address: backendClient.address || '',
    branches: backendClient.branches || '',
    ownerName: backendClient.owner_name || '',
    ownerPhone: backendClient.owner_phone || '',
    ownerEmail: backendClient.owner_email || '',
    country: backendClient.country || '',
    state: backendClient.state || '',
    city: backendClient.city || '',
    zipCode: backendClient.zipcode || '',
    gstNo: backendClient.gst_number || '',
    billingCycle: backendClient.billing_cycle || '',
    spokeName: backendClient.spoke_name || '',
    spokePhone: backendClient.spoke_phone || '',
    spokeEmail: backendClient.spoke_email || ''
  };
};

// Map frontend Client to backend format
const mapFrontendClientToBackend = (client: Client) => {
  return {
    type: client.type,
    full_name: client.name,
    address: client.address,
    branches: client.branches,
    owner_name: client.ownerName,
    owner_phone: client.ownerPhone,
    owner_email: client.ownerEmail,
    country: client.country,
    state: client.state,
    city: client.city,
    zip_code: client.zipCode,
    gst_number: client.gstNo,
    billing_cycle: client.billingCycle,
    spoke_name: client.spokeName,
    spoke_phone: client.spokePhone,
    spoke_email: client.spokeEmail,
    // We'll need to get this from the current logged-in user
    last_updated_by: 1 // Default value, should be replaced with actual user ID
  };
};

// Function to get all clients
export const getAllClients = async (): Promise<Client[]> => {
  try {
    // Check if clients data exists in cache and is not expired
    if (isBrowser) {
      try {
        const cachedData = sessionStorage.getItem('all-clients');
        if (cachedData) {
          const { data, timestamp } = JSON.parse(cachedData);
          const isExpired = Date.now() - timestamp > 5 * 60 * 1000; // 5 minutes expiration
          
          if (!isExpired && Array.isArray(data)) {
            console.log('Using cached clients list');
            return data;
          }
          console.log('Cached clients list expired or invalid');
        }
      } catch (cacheError) {
        console.error('Error reading from cache:', cacheError);
        // Clear the invalid cache
        sessionStorage.removeItem('all-clients');
      }
    }
    
    // If no cache, expired, or error, fetch from API
    const response = await get<any>(API_ENDPOINTS.GET_ALL_CLIENTS, {requiresAuth: true});

    if (!response.status || !response.data || !response.data.clients_info) {
      throw new Error(response.message || 'Failed to fetch clients');
    }

    // Map backend data to frontend format
    const clientsData = response.data.clients_info.map(mapBackendClientToFrontend);
    
    // Store in cache with timestamp
    if (isBrowser) {
      try {
        sessionStorage.setItem(
          'all-clients', 
          JSON.stringify({
            data: clientsData,
            timestamp: Date.now()
          })
        );
      } catch (storageError) {
        console.error('Error saving to cache:', storageError);
      }
    }
    
    return clientsData;
  } catch (error) {
    console.error('Error fetching clients:', error);
    throw error;
  }
};

// Cache utilities
const invalidateClientCache = () => {
  if (!isBrowser) return;
  
  // Clear the all-clients cache
  sessionStorage.removeItem('all-clients');
  
  // Clear any search caches (all keys starting with 'search-clients-')
  Object.keys(sessionStorage).forEach(key => {
    if (key.startsWith('search-clients-')) {
      sessionStorage.removeItem(key);
    }
  });
  
  console.log('Client cache invalidated');
};

// Function to create a new client
export const createClient = async (client: Client): Promise<boolean> => {
  try {
    const backendClient = mapFrontendClientToBackend(client);
    
    const response = await post<any>(API_ENDPOINTS.CREATE_CLIENT, backendClient, {
      requiresAuth: true
    });

    if (!response.status) {
      ToastNotifyError(response.message || 'Failed to create client');
      return false;
    }

    // Invalidate cache after successful creation
    invalidateClientCache();
    
    return true;
  } catch (error) {
    console.error('Error creating client:', error);
    throw error;
  }
};

// Function to search clients by email
export const searchClients = async (email: string): Promise<Client[]> => {
  try {
    // Create a cache key based on the search query
    const cacheKey = `search-clients-${email.trim().toLowerCase()}`;
    
    // Check if search results exist in cache and are not expired
    if (isBrowser) {
      try {
        const cachedData = sessionStorage.getItem(cacheKey);
        if (cachedData) {
          const { data, timestamp } = JSON.parse(cachedData);
          const isExpired = Date.now() - timestamp > 3 * 60 * 1000; // 3 minutes expiration (shorter for search)
          
          if (!isExpired && Array.isArray(data)) {
            console.log('Using cached search results for:', email);
            return data;
          }
          console.log('Cached search results expired or invalid for:', email);
        }
      } catch (cacheError) {
        console.error('Error reading from search cache:', cacheError);
        // Clear the invalid cache
        sessionStorage.removeItem(cacheKey);
      }
    }
    
    // If no cache, expired, or error, fetch from API
    const response = await post<any>(API_ENDPOINTS.SEARCH_CLIENTS, {
      text: email
    },
      {
      requiresAuth: true
    });

    if (!response.status || !response.data || !response.data.clients_info) {
      throw new Error(response.message || 'Failed to search clients');
    }

    // Map backend data to frontend format
    const searchResults = response.data.clients_info.map(mapBackendClientToFrontend);
    
    // Store in cache with timestamp
    if (isBrowser) {
      try {
        sessionStorage.setItem(
          cacheKey, 
          JSON.stringify({
            data: searchResults,
            timestamp: Date.now()
          })
        );
      } catch (storageError) {
        console.error('Error saving to search cache:', storageError);
      }
    }
    
    return searchResults;
  } catch (error) {
    console.error('Error searching clients:', error);
    throw error;
  }
};

// Interface for email data
interface SendEmailPayload {
  emails: string[];
  type?: number;
  data?: {
    visaCountry: number;
    visaCategory: number;
    nationality: number;
    state: number;
  }
}

// Interface for email data
interface SendEmailPayload2 {
  recipientIds: number[];
  subject?: string;
  message?: string;
  checklist?: {
    visaCountry: number;
    visaCategory: number;
    nationality: number;
    state: number;
  }
}

// Function to send emails to clients
export const sendEmailToClients = async (emailData: SendEmailPayload): Promise<boolean> => {
  try {
    const response = await post<any>(API_ENDPOINTS.SEND_EMAIL, emailData, {
      requiresAuth: true
    });

    if (!response.status) {
      throw new Error(response.message || 'Failed to send emails');
    }

    return true;
  } catch (error) {
    console.error('Error sending emails:', error);
    throw error;
  }
};

// Function to get client by user ID
export const getClientById = async (clientId: number): Promise<Client | null> => {
  try {
    // Check if the client data exists in cache and is not expired
    if (isBrowser) {
      try {
        const cachedData = sessionStorage.getItem(`client-${clientId}`);
        if (cachedData) {
          const { data, timestamp } = JSON.parse(cachedData);
          const isExpired = Date.now() - timestamp > 5 * 60 * 1000; // 5 minutes expiration
          
          if (!isExpired && data) {
            console.log('Using cached client data for ID:', clientId);
            return data;
          }
          console.log('Cached client data expired or invalid for ID:', clientId);
        }
      } catch (cacheError) {
        console.error('Error reading from client cache:', cacheError);
        // Clear the invalid cache
        sessionStorage.removeItem(`client-${clientId}`);
      }
    }
    
    // If no cache, expired, or error, fetch from API
    const response = await get<any>(`${API_ENDPOINTS.GET_CLIENT_BY_ID}/${clientId}`, {
      requiresAuth: true
    });
    
    if (!response.status || !response.data || !response.data.client_info || response.data.client_info.length === 0) {
      console.error('No client found for the provided user ID');
      return null;
    }

    // Map backend data to frontend format
    const clientData = mapBackendClientToFrontend(response.data.client_info[0]);
    
    // Store in cache with timestamp
    if (isBrowser) {
      try {
        sessionStorage.setItem(
          `client-${clientId}`, 
          JSON.stringify({
            data: clientData,
            timestamp: Date.now()
          })
        );
      } catch (storageError) {
        console.error('Error saving to client cache:', storageError);
      }
    }
    
    return clientData;
  } catch (error) {
    console.error('Error fetching client by user ID:', error);
    return null;
  }
}; 