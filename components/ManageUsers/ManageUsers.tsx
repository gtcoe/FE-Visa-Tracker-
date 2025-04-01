"use client";

import React, { useState, useEffect, useCallback } from 'react';
import UsersTable from './UsersTable';
import AddUserModal from './AddUserModal';
import StatusChangeModal from './StatusChangeModal';
import { USER_STATUS, USER_TYPE } from '../../constants/userConstants';
import { ToastNotifySuccess, ToastNotifyError } from '../common/Toast';
import { useUserContext, UserContextUser } from '@component/context/UserContext';
import { getAllUsers, createUser, updateUserStatus, searchUsers } from '@component/api/user';

export interface User {
  name: string;
  email: string;
  type: USER_TYPE;
  created_at?: string;
  last_logged_in_at?: string;
  status: USER_STATUS;
}

const ManageUsers = () => {
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searching, setSearching] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(null);
  
  // Use user context
  const { users, setUsers, selectedUser, setSelectedUser } = useUserContext();

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    if (users.length > 0) {
      // If we already have users in the context, don't show loading state
      setLoading(false);
    } else {
      setLoading(true);
    }
    
    try {
      const userData = await getAllUsers();
      
      // Only update if there are actual changes or no existing users
      if (userData) {
        if (users.length === 0 || JSON.stringify(userData) !== JSON.stringify(users)) {
          setUsers(userData);
        }
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      // Only show error if we don't have existing data to display
      if (users.length === 0) {
        ToastNotifyError('Failed to load users. Please try again later.');
        setError('Failed to load users');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleAddUser = async (newUser: User) => {
    try {
      // Close the modal right away for better UX
      setIsAddUserModalOpen(false);
      
      // Call API to create user
      const success = await createUser(newUser);
      
      if (success) {
        ToastNotifySuccess("User added successfully");
        
        // Refetch users to get the updated list, but do it after a small delay
        // to ensure the cache is invalidated
        setTimeout(async () => {
          try {
            const userData = await getAllUsers();
            if (userData) {
              setUsers(userData);
            }
          } catch (error) {
            console.error('Error refreshing users after adding:', error);
          }
        }, 300);
      } else {
        ToastNotifyError("Failed to add user. Please try again.");
      }
    } catch (err) {
      console.error('Failed to add user:', err);
      ToastNotifyError("Failed to add user. Please try again.");
    }
  };

  const handleStatusChange = (user: UserContextUser) => {
    setSelectedUser(user);
    setIsStatusModalOpen(true);
  };

  const confirmStatusChange = async () => {
    if (selectedUser) {
      try {
        // Close modal immediately
        setIsStatusModalOpen(false);
        
        // Update UI immediately (optimistic update)
        const updatedUsers = users.map((user: UserContextUser) => 
          user.id === selectedUser.id 
            ? { ...user, status: selectedUser.status } 
            : user
        );
        setUsers(updatedUsers);
        
        // Store current status in case we need to revert
        const originalStatus = selectedUser.status === USER_STATUS.ACTIVE 
          ? USER_STATUS.INACTIVE 
          : USER_STATUS.ACTIVE;
        
        // Call API to update status
        await updateUserStatus(selectedUser.id!, selectedUser.status);
        
        // Show success notification only after API succeeds
        ToastNotifySuccess("Status updated successfully");
        
        // Refresh users list in background without disrupting UI
        const refreshUsers = async () => {
          try {
            // Set a small delay to allow the cache to be invalidated
            setTimeout(async () => {
              const userData = await getAllUsers();
              // Only update if there are actual changes
              if (userData) {
                const needsUpdate = JSON.stringify(userData) !== JSON.stringify(users);
                if (needsUpdate) {
                  setUsers(userData);
                }
              }
            }, 300);
          } catch (error) {
            console.error('Error refreshing users:', error);
            // Don't show error to user as the main action already succeeded
          }
        };
        
        refreshUsers();
        
      } catch (err) {
        console.error('Failed to update status:', err);
        ToastNotifyError("Failed to update status. Please try again.");
        
        // Revert the optimistic update if API fails
        const revertedUsers = users.map((user: UserContextUser) => 
          user.id === selectedUser.id 
            ? { ...user, status: selectedUser.status === USER_STATUS.ACTIVE ? USER_STATUS.INACTIVE : USER_STATUS.ACTIVE } 
            : user
        );
        setUsers(revertedUsers);
      } finally {
        setSelectedUser(null);
      }
    }
  };

  // Debounced search function
  const debouncedSearch = useCallback(async (query: string) => {
    // This check is redundant now since we handle empty queries in handleSearch
    // but keeping it for safety
    if (query.trim() === '') {
      fetchUsers();
      return;
    }
    
    try {
      const searchResults = await searchUsers(query);
      setUsers(searchResults);
    } catch (error) {
      console.error('Error searching users:', error);
      ToastNotifyError('Failed to search users. Please try again.');
    } finally {
      setSearching(false);
    }
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    // Clear previous timeout
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    
    // If query is empty, immediately fetch all users without debouncing
    if (query.trim() === '') {
      setSearching(false);
      fetchUsers();
      return;
    }
    
    // Set searching state immediately for UX feedback
    setSearching(true);
    
    // Set a new timeout for the actual search
    const timeoutId = setTimeout(() => {
      debouncedSearch(query);
    }, 500); // 500ms delay
    
    setSearchTimeout(timeoutId);
  };

  return (
    <div className="px-[80px]">
      <div className="flex justify-between items-center pt-[32px] pb-[24px]">
        <h1 className="text-[#1C1C1C] text-[28px] font-bold mt-0">Manage Users</h1>
        <button
          onClick={() => setIsAddUserModalOpen(true)}
          className="bg-[#0B498B] w-[145px] h-[40px] text-white px-[32px] py-[8px] rounded-[4px] font-medium"
        >
          Add User
        </button>
      </div>

      {loading ? (
        <div className="text-center py-4">Loading users...</div>
      ) : error ? (
        <div className="text-center py-4 text-red-500">{error}</div>
      ) : (
        <div className="bg-white rounded-lg shadow">
          <div className="flex justify-between items-center">
            <h2 className="px-6 text-black text-lg font-medium py-[20px]">Users Details</h2>
            <div className="px-6 py-[20px] relative">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search by email..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="pl-10 pr-10 border-b border-gray-300 py-2 focus:outline-none focus:border-[#0B498B] w-[250px] text-black placeholder:text-gray-400"
                />
                {searchQuery && (
                  <button 
                    onClick={() => {
                      // Clear search query
                      setSearchQuery('');
                      
                      // Clear any pending search timeout
                      if (searchTimeout) {
                        clearTimeout(searchTimeout);
                      }
                      
                      // Reset searching state
                      setSearching(false);
                      
                      // Fetch all users
                      fetchUsers();
                    }}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    <svg className="w-4 h-4 text-gray-500 hover:text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
              {searching && <span className="ml-2 text-sm text-gray-500">Searching...</span>}
            </div>
          </div>
          <UsersTable 
            users={users} 
            onStatusChange={handleStatusChange}
          />
        </div>
      )}

      {isAddUserModalOpen && (
        <AddUserModal
          onClose={() => setIsAddUserModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}

      {isStatusModalOpen && selectedUser && (
        <StatusChangeModal
          user={selectedUser}
          onCancel={() => setIsStatusModalOpen(false)}
          onConfirm={confirmStatusChange}
        />
      )}
    </div>
  );
};

export default ManageUsers; 