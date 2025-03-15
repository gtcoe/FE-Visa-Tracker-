"use client";

import React, { useState } from 'react';
import UsersTable from './UsersTable';
import AddUserModal from './AddUserModal';
import StatusChangeModal from './StatusChangeModal';
import { USER_STATUS, USER_TYPE } from '../../constants/userConstants';
import { ToastNotifySuccess } from '../common/Toast';

export interface User {
  name: string;
  email: string;
  type: USER_TYPE;
  created_at?: string;
  last_logged_in_at?: string;
  status: USER_STATUS;
}

const ManageUsers = () => {
  const [users, setUsers] = useState<User[]>([
    {
      name: 'Kartik Chopra',
      email: 'kartik@gmail.com',
      type: USER_TYPE.MANAGER,
      created_at: '12 Jan, 2025',
      last_logged_in_at: '12 Jan, 2025',
      status: USER_STATUS.ACTIVE
    },
    {
        name: 'Kartik Chopra',
        email: 'kartik@gmail.com',
        type: USER_TYPE.ADMIN,
        created_at: '12 Jan, 2025',
        last_logged_in_at: '12 Jan, 2025',
        status: USER_STATUS.ACTIVE
      },
      {
        name: 'Kartik Chopra',
        email: 'kartik@gmail.com',
        type: USER_TYPE.MANAGER,
        created_at: '12 Jan, 2025',
        last_logged_in_at: '12 Jan, 2025',
        status: USER_STATUS.INACTIVE
      },
      {
        name: 'Kartik Chopra',
        email: 'kartik@gmail.com',
        type: USER_TYPE.ADMIN,
        created_at: '12 Jan, 2025',
        last_logged_in_at: '12 Jan, 2025',
        status: USER_STATUS.INACTIVE
      },

    // Add more initial users as needed
  ]);

  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleAddUser = (newUser: User) => {
    // todo call api to save details
    setIsAddUserModalOpen(false);
    ToastNotifySuccess("User added successfully");
  };

  const handleStatusChange = (user: User) => {
    setSelectedUser(user);
    setIsStatusModalOpen(true);
  };


  const confirmStatusChange = () => {
    if (selectedUser) {
      // todo call api to update status
      setIsStatusModalOpen(false);
      setSelectedUser(null);
      ToastNotifySuccess("Status updated successfully");
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

      <UsersTable 
            users={users} 
            onStatusChange={handleStatusChange}
        />
      

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