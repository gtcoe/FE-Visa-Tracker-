import { User } from '@component/components/ManageUsers/ManageUsers';
import config from '@component/constants/config';
import { get, post } from './httpClient';
import { UserContextUser } from '@component/context/UserContext';

// Get API endpoints from config
const { API_ENDPOINTS } = config;

// Helper function to check if code is running in browser
const isBrowser = typeof window !== 'undefined';

// Cache utilities
const invalidateUserCache = () => {
  if (!isBrowser) return;
  
  // Clear the all-users cache
  sessionStorage.removeItem('all-users');
  
  // Clear any search caches (all keys starting with 'search-users-')
  Object.keys(sessionStorage).forEach(key => {
    if (key.startsWith('search-users-')) {
      sessionStorage.removeItem(key);
    }
  });
  
  console.log('User cache invalidated');
};

// Map backend user data to frontend User interface
const mapBackendUserToFrontend = (backendUser: any): UserContextUser => {
  return {
    id: backendUser.id,
    name: backendUser.name || '',
    email: backendUser.email || '',
    type: backendUser.type,
    status: backendUser.status,
    created_at: backendUser.created_at || null,
    last_logged_in_at: backendUser.last_logged_in_at || null
  };
};

// Map frontend User to backend format
const mapFrontendUserToBackend = (user: User) => {
  return {
    name: user.name,
    email: user.email,
    type: user.type,
    status: user.status,
    // We'll need to get this from the current logged-in user
    last_updated_by: 1 // Default value, should be replaced with actual user ID
  };
};

// Function to get all users
export const getAllUsers = async (): Promise<UserContextUser[]> => {
  try {
    // Check if users data exists in cache and is not expired
    if (isBrowser) {
      try {
        const cachedData = sessionStorage.getItem('all-users');
        if (cachedData) {
          const { data, timestamp } = JSON.parse(cachedData);
          const isExpired = Date.now() - timestamp > 5 * 60 * 1000; // 5 minutes expiration
          
          if (!isExpired && Array.isArray(data)) {
            console.log('Using cached users list');
            return data;
          }
          console.log('Cached users list expired or invalid');
        }
      } catch (cacheError) {
        console.error('Error reading from user cache:', cacheError);
        // Clear the invalid cache
        sessionStorage.removeItem('all-users');
      }
    }
    
    // If no cache, expired, or error, fetch from API
    const response = await get<any>(API_ENDPOINTS.GET_ALL_USERS, { requiresAuth: true });
    console.log("User response:", response);

    if (!response.status || !response.data || !response.data.users_info) {
      throw new Error(response.message || 'Failed to fetch users');
    }

    // Map backend data to frontend format
    const usersData = response.data.users_info.map(mapBackendUserToFrontend);
    
    // Store in cache with timestamp
    if (isBrowser) {
      try {
        sessionStorage.setItem(
          'all-users', 
          JSON.stringify({
            data: usersData,
            timestamp: Date.now()
          })
        );
      } catch (storageError) {
        console.error('Error saving to user cache:', storageError);
      }
    }
    
    return usersData;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Function to create a new user
export const createUser = async (user: User): Promise<boolean> => {
  try {
    const backendUser = mapFrontendUserToBackend(user);
    
    const response = await post<any>(API_ENDPOINTS.CREATE_USER, backendUser);

    if (!response.status) {
      throw new Error(response.message || 'Failed to create user');
    }

    // Invalidate cache after successful creation
    invalidateUserCache();

    return true;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

// Function to update a user's status
export const updateUserStatus = async (userId: number | string, status: number): Promise<boolean> => {
  try {
    const data = {
      user_id: userId,
      status: status,
      last_updated_by: 1 // Default value, should be replaced with actual user ID
    };
    
    const response = await post<any>(API_ENDPOINTS.UPDATE_STATUS_USER, data);

    if (!response.status) {
      throw new Error(response.message || 'Failed to update user status');
    }

    // Invalidate cache after successful status update
    invalidateUserCache();
    
    // Also invalidate this specific user's cache if it exists
    if (isBrowser) {
      try {
        sessionStorage.removeItem(`user-${userId}`);
      } catch (error) {
        console.error('Error removing specific user cache:', error);
      }
    }

    return true;
  } catch (error) {
    console.error('Error updating user status:', error);
    throw error;
  }
};

// Function to search users
export const searchUsers = async (searchText: string): Promise<UserContextUser[]> => {
  try {
    // Create a cache key based on the search query
    const cacheKey = `search-users-${searchText.trim().toLowerCase()}`;
    
    // Check if search results exist in cache and are not expired
    if (isBrowser) {
      try {
        const cachedData = sessionStorage.getItem(cacheKey);
        if (cachedData) {
          const { data, timestamp } = JSON.parse(cachedData);
          const isExpired = Date.now() - timestamp > 3 * 60 * 1000; // 3 minutes expiration (shorter for search)
          
          if (!isExpired && Array.isArray(data)) {
            console.log('Using cached search results for:', searchText);
            return data;
          }
          console.log('Cached search results expired or invalid for:', searchText);
        }
      } catch (cacheError) {
        console.error('Error reading from search cache:', cacheError);
        // Clear the invalid cache
        sessionStorage.removeItem(cacheKey);
      }
    }
    
    // If no cache, expired, or error, fetch from API
    const response = await post<any>('/user/search', { text: searchText });

    if (!response.status || !response.data || !response.data.users_info) {
      throw new Error(response.message || 'Failed to search users');
    }

    // Map backend data to frontend format
    const searchResults = response.data.users_info.map(mapBackendUserToFrontend);
    
    // Store in cache with timestamp
    if (isBrowser) {
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
    console.error('Error searching users:', error);
    throw error;
  }
};

// Function to get a user by ID
export const getUserById = async (userId: number): Promise<UserContextUser | null> => {
  try {
    // Check if the user data exists in cache and is not expired
    if (isBrowser) {
      try {
        const cachedData = sessionStorage.getItem(`user-${userId}`);
        if (cachedData) {
          const { data, timestamp } = JSON.parse(cachedData);
          const isExpired = Date.now() - timestamp > 5 * 60 * 1000; // 5 minutes expiration
          
          if (!isExpired && data) {
            console.log('Using cached user data for ID:', userId);
            return data;
          }
          console.log('Cached user data expired or invalid for ID:', userId);
        }
      } catch (cacheError) {
        console.error('Error reading from user cache:', cacheError);
        // Clear the invalid cache
        sessionStorage.removeItem(`user-${userId}`);
      }
    }
    
    // If no cache, expired, or error, fetch from API
    const endpoint = `${API_ENDPOINTS.GET_ALL_USERS}/${userId}`;
    const response = await get<any>(endpoint, {
      requiresAuth: true
    });
    
    if (!response.status || !response.data || !response.data.user_info) {
      console.error('No user found for the provided ID');
      return null;
    }

    // Map backend data to frontend format
    const userData = mapBackendUserToFrontend(response.data.user_info);
    
    // Store in cache with timestamp
    if (isBrowser) {
      try {
        sessionStorage.setItem(
          `user-${userId}`, 
          JSON.stringify({
            data: userData,
            timestamp: Date.now()
          })
        );
      } catch (storageError) {
        console.error('Error saving to user cache:', storageError);
      }
    }
    
    return userData;
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    return null;
  }
}; 