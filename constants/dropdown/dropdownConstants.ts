/**
 * Dropdown Constants
 * 
 * This file contains all dropdown options used across the application.
 * Each option has a numeric ID (starting from 1) and a display label.
 */

// Customer/Pax Type Options
export enum CUSTOMER_TYPE {
  CORPORATE = 1,
  AGENT = 2,
  WALK_IN = 3
}

export const CUSTOMER_TYPE_LABELS: Record<CUSTOMER_TYPE, string> = {
  [CUSTOMER_TYPE.CORPORATE]: 'Corporate',
  [CUSTOMER_TYPE.AGENT]: 'Agent',
  [CUSTOMER_TYPE.WALK_IN]: 'Walk In'
};


// State Options
export enum STATE {
  DELHI = 1,
  MAHARASHTRA = 2,
  KARNATAKA = 3
}

export const STATE_LABELS: Record<STATE, string> = {
  [STATE.DELHI]: 'Delhi',
  [STATE.MAHARASHTRA]: 'Maharashtra',
  [STATE.KARNATAKA]: 'Karnataka'
};

// Citizenship Options
export enum CITIZENSHIP {
  INDIAN = 1,
  AMERICAN = 2,
  BRITISH = 3,
  CANADIAN = 4,
  BANGLADESHI = 5,
  BRITISH_NATIONAL = 6,
  CHINESE = 7,
  ITALIAN = 8,
  JAPANESE = 9,
  MALAYSIAN = 10,
  NEPALESE = 11,
  SINGAPOREAN = 12,
  SRI_LANKAN = 13,
  US_NATIONAL = 14
}

export const CITIZENSHIP_LABELS: Record<CITIZENSHIP, string> = {
  [CITIZENSHIP.INDIAN]: 'Indian',
  [CITIZENSHIP.AMERICAN]: 'American',
  [CITIZENSHIP.BRITISH]: 'British',
  [CITIZENSHIP.CANADIAN]: 'Canadian',
  [CITIZENSHIP.BANGLADESHI]: 'Bangladeshi',
  [CITIZENSHIP.BRITISH_NATIONAL]: 'British National',
  [CITIZENSHIP.CHINESE]: 'Chinese',
  [CITIZENSHIP.ITALIAN]: 'Italian',
  [CITIZENSHIP.JAPANESE]: 'Japanese',
  [CITIZENSHIP.MALAYSIAN]: 'Malaysian',
  [CITIZENSHIP.NEPALESE]: 'Nepalese',
  [CITIZENSHIP.SINGAPOREAN]: 'Singaporean',
  [CITIZENSHIP.SRI_LANKAN]: 'Sri Lankan',
  [CITIZENSHIP.US_NATIONAL]: 'US National'
};

// Service Options
export enum SERVICE {
  VISA = 1,
  STUDY_VISA = 2,
  TRAVEL_INSURANCE = 3,
  ATTESTATION_LEGALIZATION = 4,
  PAN = 5,
  PASSPORT = 6,
  OCI_PIO = 7,
  FRRO = 8,
  MEET_ASSIST = 9,
  RETURNING_RESIDENTS = 10
}

export const SERVICE_LABELS: Record<SERVICE, string> = {
  [SERVICE.VISA]: 'Visa',
  [SERVICE.STUDY_VISA]: 'Study Visa',
  [SERVICE.TRAVEL_INSURANCE]: 'Travel Insurance',
  [SERVICE.ATTESTATION_LEGALIZATION]: 'Attestation & Legalization',
  [SERVICE.PAN]: 'PAN',
  [SERVICE.PASSPORT]: 'Passport',
  [SERVICE.OCI_PIO]: 'OCI and PIO',
  [SERVICE.FRRO]: 'FRRO',
  [SERVICE.MEET_ASSIST]: 'Meet and Assist',
  [SERVICE.RETURNING_RESIDENTS]: 'Returning residents'
};

// Service Categories for grouping
export enum SERVICE_CATEGORY {
  VISA_SERVICES = 1,
  DOCUMENT_SERVICES = 2,
  TRAVEL_SERVICES = 3,
  ASSISTANCE_SERVICES = 4
}

export const SERVICE_CATEGORY_LABELS: Record<SERVICE_CATEGORY, string> = {
  [SERVICE_CATEGORY.VISA_SERVICES]: 'Visa Services',
  [SERVICE_CATEGORY.DOCUMENT_SERVICES]: 'Document Services',
  [SERVICE_CATEGORY.TRAVEL_SERVICES]: 'Travel Services',
  [SERVICE_CATEGORY.ASSISTANCE_SERVICES]: 'Assistance Services'
};

// Service to Category mapping
export const SERVICE_CATEGORIES: Record<SERVICE, SERVICE_CATEGORY> = {
  [SERVICE.VISA]: SERVICE_CATEGORY.VISA_SERVICES,
  [SERVICE.STUDY_VISA]: SERVICE_CATEGORY.VISA_SERVICES,
  [SERVICE.TRAVEL_INSURANCE]: SERVICE_CATEGORY.TRAVEL_SERVICES,
  [SERVICE.ATTESTATION_LEGALIZATION]: SERVICE_CATEGORY.DOCUMENT_SERVICES,
  [SERVICE.PAN]: SERVICE_CATEGORY.DOCUMENT_SERVICES,
  [SERVICE.PASSPORT]: SERVICE_CATEGORY.DOCUMENT_SERVICES,
  [SERVICE.OCI_PIO]: SERVICE_CATEGORY.DOCUMENT_SERVICES,
  [SERVICE.FRRO]: SERVICE_CATEGORY.VISA_SERVICES,
  [SERVICE.MEET_ASSIST]: SERVICE_CATEGORY.ASSISTANCE_SERVICES,
  [SERVICE.RETURNING_RESIDENTS]: SERVICE_CATEGORY.ASSISTANCE_SERVICES
};

// Referrer Options
export enum REFERRER {
  AGENT = 1,
  FRIEND = 2,
  ONLINE = 3
}

export const REFERRER_LABELS: Record<REFERRER, string> = {
  [REFERRER.AGENT]: 'Agent',
  [REFERRER.FRIEND]: 'Friend',
  [REFERRER.ONLINE]: 'Online'
};

// File Number Options
export enum FILE_NO {
  FILE1 = 1,
  FILE2 = 2,
  COMPANY1 = 3
}

export const FILE_NO_LABELS: Record<FILE_NO, string> = {
  [FILE_NO.FILE1]: 'File 1',
  [FILE_NO.FILE2]: 'File 2',
  [FILE_NO.COMPANY1]: 'Company 1'
};

// Branch Options
export enum BRANCH {
  BRANCH1 = 1,
  BRANCH2 = 2,
  BRANCH3 = 3
}

export const BRANCH_LABELS: Record<BRANCH, string> = {
  [BRANCH.BRANCH1]: 'Branch 1',
  [BRANCH.BRANCH2]: 'Branch 2',
  [BRANCH.BRANCH3]: 'Branch 3'
};

// Queue Options
export enum QUEUE {
  IN_TRANSIT = 1,
  PROCESSING = 2,
  COMPLETED = 3
}

export const QUEUE_LABELS: Record<QUEUE, string> = {
  [QUEUE.IN_TRANSIT]: 'In Transit Queue',
  [QUEUE.PROCESSING]: 'Processing Queue',
  [QUEUE.COMPLETED]: 'Completed Queue'
};

// Status Options
export enum STATUS {
  DOC_RECEIVED = 1,
  PROCESSING = 2,
  APPROVED = 3,
  REJECTED = 4
}

export const STATUS_LABELS: Record<STATUS, string> = {
  [STATUS.DOC_RECEIVED]: 'Doc Received',
  [STATUS.PROCESSING]: 'Processing',
  [STATUS.APPROVED]: 'Approved',
  [STATUS.REJECTED]: 'Rejected'
};

/**
 * Helper function to convert numeric enums to dropdown options
 * Works with TypeScript enums by filtering out the reverse mapping entries
 */
export function createEnumOptions<T extends number>(enumObject: any, labelsObject: Record<T, string>) {
  // For numeric enums, we need to filter out the reverse mapping that TypeScript adds
  const options = Object.keys(enumObject)
    .filter(key => !isNaN(Number(key))) // Only include numeric keys
    .map(key => {
      const enumValue = Number(key) as T;
      return {
        value: enumValue,
        label: labelsObject[enumValue]
      };
    });
  
  return options;
}

/**
 * Helper function to get the label for a specific enum value
 */
export function getLabelForValue<T extends number | string>(
  value: T | undefined | null,
  labelsObject: Record<T, string>
): string | undefined {
  if (value === undefined || value === null) return undefined;
  return labelsObject[value];
}

/**
 * Helper function to find the enum value for a label
 */
export function getValueForLabel<T extends number | string>(
  label: string | undefined | null,
  labelsObject: Record<T, string>
): T | undefined {
  if (label === undefined || label === null) return undefined;
  
  const entry = Object.entries(labelsObject).find(([_, l]) => l === label);
  if (!entry) return undefined;
  
  return entry[0] as unknown as T;
} 