import { VISA_COUNTRY, VISA_CATEGORY, NATIONALITY, STATE } from '@component/constants/dropdown/geographical';
import { API_BASE_URL } from './apiConstants';

// Interface for Checklist items
export interface ChecklistItem {
  id: number;
  country: VISA_COUNTRY;
  category: VISA_CATEGORY;
  nationality: NATIONALITY;
  state: STATE;
  documentList?: string[];
  requirements?: string;
}

// Interface for Checklist search parameters
export interface ChecklistSearchParams {
  country?: number;
  category?: number;
  nationality?: number;
  state?: number;
}

/**
 * Fetch all checklist items
 * @returns Promise with array of checklist items
 */
export const getAllChecklists = async (): Promise<ChecklistItem[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/checklists`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch checklists: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error in getAllChecklists:', error);
    throw error;
  }
};

/**
 * Search checklist items by criteria
 * @param params Search parameters
 * @returns Promise with filtered array of checklist items
 */
export const searchChecklists = async (params: ChecklistSearchParams): Promise<ChecklistItem[]> => {
  try {
    // Build query string from params
    const queryParams = new URLSearchParams();
    
    if (params.country) queryParams.append('country', params.country.toString());
    if (params.category) queryParams.append('category', params.category.toString());
    if (params.nationality) queryParams.append('nationality', params.nationality.toString());
    if (params.state) queryParams.append('state', params.state.toString());
    
    const queryString = queryParams.toString();
    const url = `${API_BASE_URL}/checklists/search${queryString ? `?${queryString}` : ''}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to search checklists: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error in searchChecklists:', error);
    throw error;
  }
};

/**
 * Get a checklist item by ID
 * @param id Checklist item ID
 * @returns Promise with checklist item details
 */
export const getChecklistById = async (id: number): Promise<ChecklistItem> => {
  try {
    const response = await fetch(`${API_BASE_URL}/checklists/${id}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch checklist: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error in getChecklistById:', error);
    throw error;
  }
}; 