// types/application-tracker.ts

// Form data interface
export interface StatusFormData {
  refNo: string;
  branch: string;
  agent: string;
  billTo: string;
  referer: string;
  applicant: string;
  country: string;
  visaType: string;
  contactNo: string;
  status: string;
  dateFrom: string;
  dateTo: string;
}

// Invoice status enum
export enum INVOICE_STATUS {
  NOT_GENERATED = 0,
  GENERATED = 1,
  PAID = 2,
  PARTIALLY_PAID = 3,
  OVERDUE = 4
}

// Application data from API response
export interface ApplicationData {
  id: number;
  application_id: number;
  reference_number: string;
  pax_type: number;
  country_of_residence: number;
  client_user_id: number;
  state_of_residence: number;
  citizenship: number;
  service_type: number;
  referrer: string;
  file_number_1: string;
  travel_date: string;
  is_travel_date_tentative: number;
  priority_submission: number;
  interview_date: string;
  file_number_2: string;
  external_status: number;
  status: number;
  queue: number;
  dispatch_medium: number;
  dispatch_medium_number: string;
  remarks: string;
  olvt_number: string;
  team_remarks: string;
  client_remarks: string;
  billing_remarks: string;
  last_updated_by: number;
  created_at: string;
  updated_at: string;
  first_name: string;
  last_name: string;
  email: string;
  dob: string;
  phone: string;
  processing_branch: number;
  passport_number: string;
  passport_date_of_issue: string;
  passport_date_of_expiry: string;
  passport_issue_at: string;
  count_of_expired_passport: number;
  expired_passport_number: string;
  address_line_1: string;
  address_line_2: string;
  country: number;
  state: number;
  city: string;
  zip: string;
  occupation: string;
  position: string;
  user_id: number;
  name: string;
  type: number;
  address: string;
  branches: string;
  gst_number: string;
  owner_name: string;
  owner_phone: string;
  owner_email: string;
  spoke_name: string;
  spoke_phone: string;
  spoke_email: string;
  billing_cycle: string;
  zipcode: string;
  visa_country: number;
  visa_category: number;
  nationality: number;
  entry_type: number;
  updated_by_email: string;
  
  // Date fields for application tracking
  dox_received_at?: string;
  submission_at?: string;
  collection_at?: string;
  
  // Billing and invoice related fields
  invoice_status?: INVOICE_STATUS;
  visa_fee?: number;
  visa_fee_currency?: string;
  
  // Fields for visa fee history
  visa_fee_history?: VisaFeeHistoryItem[];
  
  // For backward compatibility with UI - can be computed properties
  refNo?: string;
  handlingBranch?: string;
  entryGenerationBranch?: string;
  agentCorporate?: string;
  billingToCompany?: string;
  visaType?: string;
}

// Interface for visa fee history items
export interface VisaFeeHistoryItem {
  id: number;
  application_id: number;
  fee_amount: number;
  fee_currency: string;
  updated_by: number;
  updated_by_email: string;
  updated_at: string;
}

// API response structure
export interface StatusResponse {
  status: boolean;
  statusCode: number;
  data: {
    applications: ApplicationData[];
  }
}

export interface StatusDetailsProps {
  applications: ApplicationData[];
  isLoading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface StatusFormProps {
  onSearch: (data: any) => void;
} 