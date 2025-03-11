import React from 'react';
import { User } from './ManageUsers';
import { USER_STATUS, USER_TYPE_REVERSE, USER_STATUS_REVERSE } from '../../constants/userConstants';
import DropdownArrow from '../common/DropdownArrow';

interface UsersTableProps {
  users: User[];
  onStatusChange: (user: User) => void;
}

const UsersTable = ({ users, onStatusChange }: UsersTableProps) => {
  const handleStatusChange = (user: User, newStatus: USER_STATUS) => {
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
                <tr key={index} className="border-b last:border-b-0">
                  <td className="text-left py-3 text-[#696969] text-xs font-medium px-6 border-r border-[#E6EAF2] w-[20%]">{user.name}</td>
                  <td className="text-center py-3 text-[#696969] text-xs font-medium border-r border-[#E6EAF2] w-[25%]">{user.email}</td>
                  <td className="text-center py-3 text-[#696969] text-xs font-medium border-r border-[#E6EAF2] w-[12.5%]">{USER_TYPE_REVERSE[user.type]}</td>
                  <td className="text-center py-3 text-[#696969] text-xs font-medium border-r border-[#E6EAF2] w-[15%]">{user.created_at}</td>
                  <td className="text-center py-3 text-[#696969] text-xs font-medium border-r border-[#E6EAF2] w-[15%]">{user.last_logged_in_at}</td>
                  <td className="text-center py-3 text-[#696969] text-xs font-medium w-[12.5%]">
                    <div className="relative inline-block">
                      <select 
                        value={user.status}
                        onChange={(e) => handleStatusChange(user, Number(e.target.value) as USER_STATUS)}
                        className={`pl-3 pr-8 py-1 rounded-full text-sm font-medium appearance-none cursor-pointer outline-none focus:outline-none focus:ring-0 focus:border-none border-0
                          ${user.status === USER_STATUS.ACTIVE
                            ? 'text-green-600 bg-green-100'
                            : 'text-red-600 bg-red-100'
                          }`}
                      >
                        <option 
                          value={USER_STATUS.ACTIVE} 
                          className="text-green-600 bg-white text-sm font-normal"
                        >
                          {USER_STATUS_REVERSE[USER_STATUS.ACTIVE]}
                        </option>
                        <option 
                          value={USER_STATUS.INACTIVE} 
                          className="text-red-600 bg-white text-sm font-normal"
                        >
                          {USER_STATUS_REVERSE[USER_STATUS.INACTIVE]}
                        </option>
                      </select>
                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <DropdownArrow />
                      </div>
                    </div>
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