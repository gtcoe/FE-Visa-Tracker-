import { Client } from '@component/components/ManageClients/ManageClients';
import config from '@component/constants/config';
import { get, post } from './httpClient';
import { ToastNotifyError } from '@component/components/common/Toast';

// Get API endpoints from config
const { API_ENDPOINTS } = config;

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
    const response = await get<any>(API_ENDPOINTS.GET_ALL_CLIENTS, {requiresAuth: true});

    if (!response.status || !response.data || !response.data.clients_info) {
      throw new Error(response.message || 'Failed to fetch clients');
    }

    // Map backend data to frontend format
    return response.data.clients_info.map(mapBackendClientToFrontend);
  } catch (error) {
    console.error('Error fetching clients:', error);
    throw error;
  }
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

    return true;
  } catch (error) {
    console.error('Error creating client:', error);
    throw error;
  }
};

// Function to search clients by email
export const searchClients = async (email: string): Promise<Client[]> => {
  try {
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
    return response.data.clients_info.map(mapBackendClientToFrontend);
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
    const response = await get<any>(`${API_ENDPOINTS.GET_CLIENT_BY_ID}/${clientId}`, {
      requiresAuth: true
    });
    
    if (!response.status || !response.data || !response.data.client_info || response.data.client_info.length === 0) {
      console.error('No client found for the provided user ID');
      return null;
    }

    // Map backend data to frontend format (take the first client if multiple are returned)
    return mapBackendClientToFrontend(response.data.client_info[0]);
  } catch (error) {
    console.error('Error fetching client by user ID:', error);
    return null;
  }
}; 