// types/index.ts

// Form data interface
export interface StatusFormData {
  referenceNo: string;
  customerType: string;
  customer: string;
  travelerName: string;
  travelerPassportNo: string;
  visaBranch: string;
  entryGenerationBranch: string;
  fromDate: string;
  toDate: string;
  queue: string;
  status: string;
  country: string;
  billingToCompany: string;
}

// Application data from API response
export interface Application {
  refNo: string;
  handlingBranch: string;
  entryGenerationBranch: string;
  agentCorporate: string;
  billingToCompany: string;
  referrer: string;
  country: string;
  visaType: string;
  status: string;
}

// API response structure
export interface StatusResponse {
  applications: Application[];
  totalPages: number;
  currentPage: number;
  totalCount: number;
}

export interface StatusDetailsProps {
  applications: Application[];
  isLoading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
