import config from '@component/constants/config';
import { get, post } from './httpClient';
import { ApplicationData } from '@component/types/application-tracker';

// Get API endpoints from config
const { API_ENDPOINTS } = config;

/**
 * Search for applications based on search criteria
 * @param searchParams Search parameters
 * @returns Promise with search results
 */
export const searchApplications = async (searchParams: any): Promise<ApplicationData[]> => {
  try {
    const response = await post<any>(API_ENDPOINTS.SEARCH_APPLICATIONS, searchParams, { requiresAuth: true });
    
    if (!response.status) {
      throw new Error(response.message || 'Failed to search applications');
    }
    
    return response.data?.applications || [];
  } catch (error) {
    console.error('Error searching applications:', error);
    throw error;
  }
};

/**
 * Add Step 1 data for an application
 * @param applicationData Application data for step 1
 * @returns Promise with creation result
 */
export const addApplicationStep1 = async (applicationData: any): Promise<any> => {
  try {
    const response = await post<any>(API_ENDPOINTS.APPLICATION_STEP1, applicationData, { requiresAuth: true });
    
    if (!response.status) {
      throw new Error(response.message || 'Failed to add application step 1');
    }
    
    return response.data;
  } catch (error) {
    console.error('Error adding application step 1:', error);
    throw error;
  }
};

/**
 * Add Step 2 data for an application
 * @param applicationData Application data for step 2
 * @returns Promise with update result
 */
export const addApplicationStep2 = async (applicationData: any): Promise<any> => {
  try {
    const response = await post<any>(API_ENDPOINTS.APPLICATION_STEP2, applicationData, { requiresAuth: true });
    
    if (!response.status) {
      throw new Error(response.message || 'Failed to add application step 2');
    }
    
    return response.data;
  } catch (error) {
    console.error('Error adding application step 2:', error);
    throw error;
  }
};

/**
 * Add Step 3 data for an application
 * @param applicationData Application data for step 3
 * @returns Promise with update result
 */
export const addApplicationStep3 = async (applicationData: any): Promise<any> => {
  try {
    const response = await post<any>(API_ENDPOINTS.APPLICATION_STEP3, applicationData, { requiresAuth: true });
    
    if (!response.status) {
      throw new Error(response.message || 'Failed to add application step 3');
    }
    
    return response.data;
  } catch (error) {
    console.error('Error adding application step 3:', error);
    throw error;
  }
};

/**
 * Add Step 4 data for an application
 * @param applicationData Application data for step 4
 * @returns Promise with update result
 */
export const addApplicationStep4 = async (applicationData: any): Promise<any> => {
  try {
    const response = await post<any>(API_ENDPOINTS.APPLICATION_STEP4, applicationData, { requiresAuth: true });
    
    if (!response.status) {
      throw new Error(response.message || 'Failed to add application step 4');
    }
    
    return response.data;
  } catch (error) {
    console.error('Error adding application step 4:', error);
    throw error;
  }
};

/**
 * Search for passenger/applicant by passport number, name, or reference
 * @param searchParams Search parameters
 * @returns Promise with search results
 */
export const searchPax = async (searchParams: any): Promise<any[]> => {
  try {
    const response = await post<any>(API_ENDPOINTS.SEARCH_PAX, searchParams, { requiresAuth: true });
    
    if (!response.status) {
      throw new Error(response.message || 'Failed to search applicants');
    }
    
    return response.data?.pax_info || [];
  } catch (error) {
    console.error('Error searching applicants:', error);
    throw error;
  }
}; 