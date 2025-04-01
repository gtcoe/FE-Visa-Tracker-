"use client";

import React, { useState } from 'react';
import UsersTable from './UsersTable';
import AddUserModal from './AddUserModal';
import StatusChangeModal from './StatusChangeModal';
import { USER_STATUS, USER_TYPE } from '../../constants/userConstants';
import { ToastNotifySuccess, ToastNotifyError } from '../common/Toast';
import { useUserContext, UserContextUser } from '@component/context/UserContext';
import { useUsers, useCreateUser, useUpdateUserStatus } from '@component/hooks/useUsers';

// Define User interface locally since it's no longer imported
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
  
  // Use user context for selected user
  const { selectedUser, setSelectedUser } = useUserContext();
  
  // Use React Query hooks
  const { 
    data: users = [], 
    isLoading, 
    error 
  } = useUsers();
  
  const createUserMutation = useCreateUser();
  const updateStatusMutation = useUpdateUserStatus();

  const handleAddUser = async (newUser: User) => {
    try {
      // Close the modal right away for better UX
      setIsAddUserModalOpen(false);
      
      // Use the mutation to create a user
      await createUserMutation.mutateAsync(newUser);
      ToastNotifySuccess("User added successfully");
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
        
        // Get the current status to toggle
        const newStatus = selectedUser.status === USER_STATUS.ACTIVE 
          ? USER_STATUS.INACTIVE 
          : USER_STATUS.ACTIVE;
        
        // Use the mutation to update the status
        await updateStatusMutation.mutateAsync({ 
          userId: selectedUser.id!, 
          status: newStatus 
        });
        
        // Show success notification
        ToastNotifySuccess("Status updated successfully");
      } catch (err) {
        console.error('Failed to update status:', err);
        ToastNotifyError("Failed to update status. Please try again.");
      } finally {
        setSelectedUser(null);
      }
    }
  };

  return (
    <div className="px-[80px]">
      <div className="flex justify-between items-center pt-[32px] pb-[24px]">
        <h1 className="text-[#1C1C1C] text-[28px] font-bold  mt-0">Manage Users</h1>
        <button
          onClick={() => setIsAddUserModalOpen(true)}
          className="bg-[#0B498B] w-[145px] h-[40px] text-white px-[32px] py-[8px] rounded-[4px] font-medium"
        >
          Add User
        </button>
      </div>

      {isLoading ? (
        <div className="text-center py-4">Loading users...</div>
      ) : error ? (
        <div className="text-center py-4 text-red-500">An error occurred while loading users</div>
      ) : (
        <UsersTable 
          users={users} 
          onStatusChange={handleStatusChange}
        />
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