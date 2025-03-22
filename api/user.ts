import { User } from '@component/components/ManageUsers/ManageUsers';
import config from '@component/constants/config';
import { get, post } from './httpClient';
import { UserContextUser } from '@component/context/UserContext';

// Get API endpoints from config
const { API_ENDPOINTS } = config;

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
    const response = await get<any>(API_ENDPOINTS.GET_ALL_USERS, { requiresAuth: true });
    console.log("User response:", response);

    if (!response.status || !response.data || !response.data.users_info) {
      throw new Error(response.message || 'Failed to fetch users');
    }

    // Map backend data to frontend format
    return response.data.users_info.map(mapBackendUserToFrontend);
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

    return true;
  } catch (error) {
    console.error('Error updating user status:', error);
    throw error;
  }
};

// Function to search users
export const searchUsers = async (searchText: string): Promise<UserContextUser[]> => {
  try {
    const response = await post<any>('/user/search', { text: searchText });

    if (!response.status || !response.data || !response.data.users_info) {
      throw new Error(response.message || 'Failed to search users');
    }

    // Map backend data to frontend format
    return response.data.users_info.map(mapBackendUserToFrontend);
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
}; 