/**
 * Type definitions for Application data received from the step3 API
 */

// Personal Information
export interface PersonalInfo {
  first_name: string;
  last_name: string;
  email_id: string;
  date_of_birth: string;
  processing_branch: number;
}

// Passport Information
export interface PassportInfo {
  passport_number: string;
  date_of_issue: string;
  date_of_expiry: string;
  issue_at: string;
  no_of_expired_passport: number;
  expired_passport_number: string;
}

// Travel Information
export interface TravelInfo {
  travel_date: string;
  interview_date: string;
  file_no: string;
  is_travel_date_tentative: number; // 0 or 1 (boolean)
  priority_submission: number; // 0 or 1 (boolean)
}

// Visa Request
export interface VisaRequest {
  visa_country: number;
  visa_category: number;
  nationality: number;
  state: number;
  entry_type: number;
  remark?: string;
}

// Address Information
export interface AddressInfo {
  address_line1: string;
  address_line2?: string;
  country: number;
  state: number;
  city: number;
  zip: string;
  occupation: string;
  position: string;
}

// MI Fields
export interface MIFields {
  olvt_number: string;
}

// Application Request Data
export interface ApplicationRequestData {
  personal_info: PersonalInfo;
  passport_info: PassportInfo;
  travel_info: TravelInfo;
  visa_requests: VisaRequest[];
  address_info: AddressInfo;
  mi_fields: MIFields;
  application_id: number;
  token_user_id?: number;
  client_user_id?: number;
  client_name?: string;
}

// Step3 API Response Data
export interface Step3ResponseData {
  application_requests: ApplicationRequestData;
}

// Full Step3 API Response
export interface Step3Response {
  status: boolean;
  statusCode: number;
  message: string;
  data: Step3ResponseData;
}

/**
 * Helper function to parse application data from localStorage
 * @returns The parsed application data or null if not found
 */
export function getApplicationInfo(): ApplicationRequestData | null {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    return null;
  }
  
  try {
    const storedData = localStorage.getItem('applicationInfo');
    if (!storedData) return null;
    
    return JSON.parse(storedData) as ApplicationRequestData;
  } catch (error) {
    console.error('Error parsing application info from localStorage:', error);
    return null;
  }
}

/**
 * Helper function to get formatted name from personal info
 * @param personalInfo The personal info object
 * @returns Formatted full name
 */
export function getFullName(personalInfo: PersonalInfo): string {
  return `${personalInfo.first_name} ${personalInfo.last_name}`.trim();
}

/**
 * Helper function to format dates for display
 * @param dateString ISO date string (YYYY-MM-DD)
 * @returns Formatted date string (e.g., "March 12, 2025")
 */
export function formatDateForDisplay(dateString: string): string {
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (e) {
    return dateString;
  }
}

/**
 * Helper function to convert numeric boolean (0/1) to boolean
 * @param value Numeric boolean (0 or 1)
 * @returns true if value is 1, false otherwise
 */
export function numericToBoolean(value: number): boolean {
  return value === 1;
} 