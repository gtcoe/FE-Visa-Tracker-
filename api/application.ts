import config from '@component/constants/config';
import { get, post, ApiResponse } from './httpClient';
// Comment out the problematic import and use any for now
// import { ApplicationData } from '@component/types/application-tracker';
type ApplicationData = any;

// Get API endpoints from config
const { API_ENDPOINTS } = config;

/**
 * Service Request payload interface
 */
export interface ServiceRequestPayload {
  title?: string;
  pax_type: number;
  country_of_residence: number;
  citizenship: number;
  service_type: number;
  client_id?: number | null;
  client_user_id?: number | null;
  state_of_residence?: number | null;
  referrer?: string | null;
  file_number?: string;
}

/**
 * Service Request response interface
 */
export interface ServiceRequestResponse {
  id: number;
  requestCode: string;
  status?: string;
  createdAt?: string;
  [key: string]: any;
}

/**
 * Step3 Request Interface - Personal Info
 */
export interface Step3PersonalInfo {
  first_name: string;
  last_name: string;
  email_id: string;
  date_of_birth: string;
  processing_branch: number;
}

/**
 * Step3 Request Interface - Passport Info
 */
export interface Step3PassportInfo {
  passport_number: string;
  date_of_issue: string;
  date_of_expiry: string;
  issue_at: string;
  no_of_expired_passport: number;
  expired_passport_number: string;
}

/**
 * Step3 Request Interface - Travel Info
 */
export interface Step3TravelInfo {
  travel_date: string;
  interview_date: string;
  file_no: string;
  is_travel_date_tentative: number;
  priority_submission: number;
}

/**
 * Step3 Request Interface - Visa Request
 */
export interface Step3VisaRequest {
  visa_country: number;
  visa_category: number;
  nationality: number;
  state: number;
  entry_type: number;
  remark?: string;
}

/**
 * Step3 Request Interface - Address Info
 */
export interface Step3AddressInfo {
  address_line1: string;
  address_line2?: string;
  country: number;
  state: number;
  city: number;
  zip: string;
  occupation: string;
  position: string;
}

/**
 * Step3 Request Interface - MI Fields
 */
export interface Step3MIFields {
  olvt_number: string;
}

/**
 * Step3 Request Payload Interface
 */
export interface Step3RequestPayload {
  personal_info: Step3PersonalInfo;
  passport_info: Step3PassportInfo;
  travel_info: Step3TravelInfo;
  visa_requests: Step3VisaRequest[];
  address_info: Step3AddressInfo;
  mi_fields?: Step3MIFields;
  application_id: number;
  token_user_id?: number;
  is_sub_request: number;
  reference_number?: string;
}

/**
 * Step3 Response Interface
 */
export interface Step3Response {
  status: boolean;
  message: string;
  data?: {
    application_id: number;
    reference_number: string;
    status: string;
    [key: string]: any;
  };
}

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
export const addApplicationStep3 = async (applicationData: Step3RequestPayload): Promise<ApiResponse<Step3Response['data']>> => {
  try {
    const response = await post<Step3Response['data']>(API_ENDPOINTS.APPLICATION_STEP3, applicationData, { requiresAuth: true });
    
    if (!response.status) {
      throw new Error(response.message || 'Failed to add application step 3');
    }
    
    return response;
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
    
    return response;
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
    
    return response.data?.passengers_info || [];
  } catch (error) {
    console.error('Error searching applicants:', error);
    throw error;
  }
};

/**
 * Submit a service request
 * Uses the existing application step1 endpoint
 * @param requestData Service request data
 * @returns Promise with the service request response
 */
export const submitServiceRequest = async (requestData: ServiceRequestPayload): Promise<ServiceRequestResponse> => {
  try {
    // Service requests use the application step1 endpoint
    const response = await addApplicationStep1(requestData);
    
    if (!response) {
      throw new Error('Failed to submit service request');
    }
    
    // Map the API response to our ServiceRequestResponse interface
    // The API returns { application_id: number, reference_number: string }
    return {
      id: response.application_id || 0,
      requestCode: response.reference_number || '',
      status: 'pending',
      createdAt: new Date().toISOString(),
      ...response
    };
  } catch (error) {
    console.error('Error submitting service request:', error);
    throw error;
  }
}; 