/**
 * Dropdown Constants
 * 
 * This file contains all dropdown options used across the application.
 * Each option has a numeric ID (starting from 1) and a display label.
 */

// Customer/Pax Type Options
export enum CUSTOMER_TYPE {
  CORPORATE = 1,
  INDIVIDUAL = 2,
  FAMILY = 3
}

export const CUSTOMER_TYPE_LABELS: Record<CUSTOMER_TYPE, string> = {
  [CUSTOMER_TYPE.CORPORATE]: 'Corporate',
  [CUSTOMER_TYPE.INDIVIDUAL]: 'Individual',
  [CUSTOMER_TYPE.FAMILY]: 'Family'
};

// Country Options
export enum COUNTRY {
  INDIA = 1,
  USA = 2,
  UK = 3,
  CANADA = 4,
  AUSTRALIA = 5
}

export const COUNTRY_LABELS: Record<COUNTRY, string> = {
  [COUNTRY.INDIA]: 'India',
  [COUNTRY.USA]: 'USA',
  [COUNTRY.UK]: 'UK',
  [COUNTRY.CANADA]: 'Canada',
  [COUNTRY.AUSTRALIA]: 'Australia'
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
  CANADIAN = 4
}

export const CITIZENSHIP_LABELS: Record<CITIZENSHIP, string> = {
  [CITIZENSHIP.INDIAN]: 'Indian',
  [CITIZENSHIP.AMERICAN]: 'American',
  [CITIZENSHIP.BRITISH]: 'British',
  [CITIZENSHIP.CANADIAN]: 'Canadian'
};

// Service Options
export enum SERVICE {
  VISA = 1,
  PASSPORT = 2,
  TRAVEL = 3
}

export const SERVICE_LABELS: Record<SERVICE, string> = {
  [SERVICE.VISA]: 'Visa',
  [SERVICE.PASSPORT]: 'Passport',
  [SERVICE.TRAVEL]: 'Travel'
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