"use client";

import React, { useState, useEffect } from 'react';
import UsersTable from './UsersTable';
import AddUserModal from './AddUserModal';
import StatusChangeModal from './StatusChangeModal';
import { USER_STATUS, USER_TYPE } from '../../constants/userConstants';
import { ToastNotifySuccess, ToastNotifyError } from '../common/Toast';
import { useUserContext, UserContextUser } from '@component/context/UserContext';
import { getAllUsers, createUser, updateUserStatus } from '@component/api/user';

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
  
  // Use user context
  const { users, setUsers, selectedUser, setSelectedUser } = useUserContext();

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const userData = await getAllUsers();
      setUsers(userData || []);
    } catch (error) {
      console.error('Error fetching users:', error);
      ToastNotifyError('Failed to load users. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddUser = async (newUser: User) => {
    try {
      // Call API to create user
      await createUser(newUser);
      // Refetch users to get the updated list
      await fetchUsers();
      // Close the modal
      setIsAddUserModalOpen(false);
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
        setIsStatusModalOpen(false);
        await updateUserStatus(selectedUser.id!, selectedUser.status);

        // Refetch users to get the updated list
        await fetchUsers();
        
        setSelectedUser(null);
        ToastNotifySuccess("Status updated successfully");
      } catch (err) {
        console.error('Failed to update status:', err);
        ToastNotifyError("Failed to update status. Please try again.");
        setIsStatusModalOpen(false);
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

      {loading ? (
        <div className="text-center py-4">Loading users...</div>
      ) : error ? (
        <div className="text-center py-4 text-red-500">{error}</div>
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