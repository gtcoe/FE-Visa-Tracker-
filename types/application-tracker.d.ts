// types/index.ts

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

// Application data from API response
export interface ApplicationData {
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
  applications: ApplicationData[];
  totalPages: number;
  currentPage: number;
  totalCount: number;
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
