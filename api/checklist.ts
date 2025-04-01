import { COUNTRY, VISA_CATEGORY, NATIONALITY, STATE } from '@component/constants/dropdown/geographical';
import { API_BASE_URL } from './apiConstants';

// Helper function to check if code is running in browser
const isBrowser = typeof window !== 'undefined';

// Interface for Checklist items
export interface ChecklistItem {
  id: number;
  country: COUNTRY;
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

// Cache utilities
const invalidateChecklistCache = () => {
  if (!isBrowser) return;
  
  // Clear the all-checklists cache
  sessionStorage.removeItem('all-checklists');
  
  // Clear any search or detail caches
  Object.keys(sessionStorage).forEach(key => {
    if (key.startsWith('checklist-search-') || key.startsWith('checklist-detail-')) {
      sessionStorage.removeItem(key);
    }
  });
  
  console.log('Checklist cache invalidated');
};

/**
 * Fetch all checklist items
 * @returns Promise with array of checklist items
 */
export const getAllChecklists = async (): Promise<ChecklistItem[]> => {
  try {
    // Check if checklists data exists in cache and is not expired
    if (isBrowser) {
      try {
        const cachedData = sessionStorage.getItem('all-checklists');
        if (cachedData) {
          const { data, timestamp } = JSON.parse(cachedData);
          const isExpired = Date.now() - timestamp > 10 * 60 * 1000; // 10 minutes expiration
          
          if (!isExpired && Array.isArray(data)) {
            console.log('Using cached checklists list');
            return data;
          }
          console.log('Cached checklists list expired or invalid');
        }
      } catch (cacheError) {
        console.error('Error reading from cache:', cacheError);
        // Clear the invalid cache
        sessionStorage.removeItem('all-checklists');
      }
    }
    
    // If no cache, expired, or error, fetch from API
    const response = await fetch(`${API_BASE_URL}/checklists`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch checklists: ${response.status}`);
    }
    
    const checklistsData = await response.json();
    
    // Store in cache with timestamp
    if (isBrowser) {
      try {
        sessionStorage.setItem(
          'all-checklists', 
          JSON.stringify({
            data: checklistsData,
            timestamp: Date.now()
          })
        );
      } catch (storageError) {
        console.error('Error saving to cache:', storageError);
      }
    }
    
    return checklistsData;
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
    
    // Create a cache key based on the search query
    const cacheKey = `checklist-search-${queryString}`;
    
    // Check if search results exist in cache and are not expired
    if (isBrowser && queryString) {
      try {
        const cachedData = sessionStorage.getItem(cacheKey);
        if (cachedData) {
          const { data, timestamp } = JSON.parse(cachedData);
          const isExpired = Date.now() - timestamp > 5 * 60 * 1000; // 5 minutes expiration
          
          if (!isExpired && Array.isArray(data)) {
            console.log('Using cached checklist search results');
            return data;
          }
          console.log('Cached checklist search results expired or invalid');
        }
      } catch (cacheError) {
        console.error('Error reading from search cache:', cacheError);
        // Clear the invalid cache
        sessionStorage.removeItem(cacheKey);
      }
    }
    
    // If no cache, expired, or error, fetch from API
    const url = `${API_BASE_URL}/checklists/search${queryString ? `?${queryString}` : ''}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to search checklists: ${response.status}`);
    }
    
    const searchResults = await response.json();
    
    // Store in cache with timestamp
    if (isBrowser && queryString) {
      try {
        sessionStorage.setItem(
          cacheKey, 
          JSON.stringify({
            data: searchResults,
            timestamp: Date.now()
          })
        );
      } catch (storageError) {
        console.error('Error saving to search cache:', storageError);
      }
    }
    
    return searchResults;
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
    // Check if the checklist data exists in cache and is not expired
    if (isBrowser) {
      try {
        const cachedData = sessionStorage.getItem(`checklist-detail-${id}`);
        if (cachedData) {
          const { data, timestamp } = JSON.parse(cachedData);
          const isExpired = Date.now() - timestamp > 15 * 60 * 1000; // 15 minutes expiration
          
          if (!isExpired && data) {
            console.log('Using cached checklist data for ID:', id);
            return data;
          }
          console.log('Cached checklist data expired or invalid for ID:', id);
        }
      } catch (cacheError) {
        console.error('Error reading from checklist cache:', cacheError);
        // Clear the invalid cache
        sessionStorage.removeItem(`checklist-detail-${id}`);
      }
    }
    
    // If no cache, expired, or error, fetch from API
    const response = await fetch(`${API_BASE_URL}/checklists/${id}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch checklist: ${response.status}`);
    }
    
    const checklistData = await response.json();
    
    // Store in cache with timestamp
    if (isBrowser) {
      try {
        sessionStorage.setItem(
          `checklist-detail-${id}`, 
          JSON.stringify({
            data: checklistData,
            timestamp: Date.now()
          })
        );
      } catch (storageError) {
        console.error('Error saving to checklist cache:', storageError);
      }
    }
    
    return checklistData;
  } catch (error) {
    console.error('Error in getChecklistById:', error);
    throw error;
  }
}; 