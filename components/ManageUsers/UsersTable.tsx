import React, { useState, useRef, useEffect } from 'react';
import { User } from './ManageUsers';
import { USER_STATUS, USER_TYPE_REVERSE, USER_STATUS_REVERSE } from '../../constants/userConstants';
import StatusDropdown from '../common/StatusDropdown';
import './UsersTable.css';
import { UserContextUser } from '@component/context/UserContext';
import { formatDate, formatDateWithTime } from '@component/utils/dateUtils';

interface UsersTableProps {
  users: UserContextUser[];
  onStatusChange: (user: UserContextUser) => void;
}

const UsersTable = ({ users, onStatusChange }: UsersTableProps) => {
  const handleStatusChange = (user: UserContextUser, newStatus: USER_STATUS) => {
    onStatusChange({...user, status: newStatus});
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="">
        <h2 className="px-6 text-black text-lg font-medium py-[20px]">Users Details</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-[#F9FAFB] px-6">
              <tr className="border-b border-[#E6EAF2]">
                <th className="text-left py-3 text-[#696969] text-xs font-medium px-6 border-r border-[#E6EAF2] w-[20%]">NAME</th>
                <th className="text-center py-3 text-[#696969] text-xs font-medium border-r border-[#E6EAF2] w-[25%]">EMAIL</th>
                <th className="text-center py-3 text-[#696969] text-xs font-medium border-r border-[#E6EAF2] w-[12.5%]">OWNERSHIP</th>
                <th className="text-center py-3 text-[#696969] text-xs font-medium border-r border-[#E6EAF2] w-[15%]">CREATED DATE</th>
                <th className="text-center py-3 text-[#696969] text-xs font-medium border-r border-[#E6EAF2] w-[15%]">LAST LOGIN</th>
                <th className="text-center py-3 text-[#696969] text-xs font-medium w-[12.5%]">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id || index} className="border-b last:border-b-0">
                  <td className="text-left py-3 text-[#696969] text-xs font-medium px-6 border-r border-[#E6EAF2] w-[20%]">{user.name}</td>
                  <td className="text-center py-3 text-[#696969] text-xs font-medium border-r border-[#E6EAF2] w-[25%]">{user.email}</td>
                  <td className="text-center py-3 text-[#696969] text-xs font-medium border-r border-[#E6EAF2] w-[12.5%]">{USER_TYPE_REVERSE[user.type]}</td>
                  <td className="text-center py-3 text-[#696969] text-xs font-medium border-r border-[#E6EAF2] w-[15%]">{formatDate(user.created_at)}</td>
                  <td className="text-center py-3 text-[#696969] text-xs font-medium border-r border-[#E6EAF2] w-[15%]">{formatDateWithTime(user.last_logged_in_at)}</td>
                  <td className="text-center py-3 text-[#696969] text-xs font-medium w-[12.5%]">
                    <StatusDropdown
                      currentStatus={user.status}
                      onChange={(newStatus) => handleStatusChange(user, newStatus)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersTable; 