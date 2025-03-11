import React, { useState } from 'react';
import { User } from './ManageUsers';
import { USER_STATUS, USER_TYPE, USER_TYPE_REVERSE_MANAGE_USERS, USER_STATUS_REVERSE } from '../../constants/userConstants';
import { ToastNotifySuccess, ToastNotifyError } from '../common/Toast';
import { EMAIL_REGEX } from '../../constants/regex';
import DropdownArrow from '../common/DropdownArrow';

interface AddUserModalProps {
  onClose: () => void;
  onSubmit: (user: User) => void;
}

const AddUserModal = ({ onClose, onSubmit }: AddUserModalProps) => {
  const [formData, setFormData] = useState<User>({
    name: '',
    email: '',
    type: USER_TYPE.MANAGER,
    status: USER_STATUS.ACTIVE,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.length === 0) {
        ToastNotifyError("Missing Name");
        return;
    } else if (formData.email.length === 0) {
        ToastNotifyError("Missing Email");
        return;
    } else if (!EMAIL_REGEX.test(formData.email)) {
        ToastNotifyError("Invalid Email");
        return;
    } else if (formData.type < USER_TYPE.ADMIN || formData.type > USER_TYPE.CLIENT) {
        ToastNotifyError("Invalid Ownership");
        return;
    } else if (formData.status < USER_STATUS.ACTIVE || formData.status > USER_STATUS.INACTIVE) {
        ToastNotifyError("Invalid Status");
        return;
    }
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
      <div className="bg-white w-[550px] h-[340px] relative">
        <div className="flex justify-between items-center p-8 pb-[30px]">
          <h2 className="text-xl font-medium text-[#1C1C1C]">Add User</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 pt-[2px]">
            ✕
          </button>
        </div>

        <div className="p-8 pt-0">
          <div className="grid grid-cols-2 gap-x-6 gap-y-[28px] mb-6">
            <div>
              <label className="block text-xs font-normal text-[#1C1C1C] mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter Name"
                className="w-full p-2 border border-[#E6EAF2] rounded-[4px] focus:outline-none focus:border-[#0B498B] text-black placeholder:text-[#8A8A8A] placeholder:text-sm placeholder:font-normal  px-[16px] py-[8px] text-sm font-normal"
              />
            </div>
            <div>
              <label className="block text-xs font-normal text-[#1C1C1C] mb-2">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter Email"
                className="w-full p-2 border border-[#E6EAF2] rounded-[4px] focus:outline-none focus:border-[#0B498B] text-black placeholder:text-[#969696] placeholder:text-sm placeholder:font-normal  px-[16px] py-[8px] text-sm font-normal"
              />
            </div>
            <div>
              <label className="block text-xs font-normal text-[#1C1C1C] mb-2">Status</label>
              <div className="relative">
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: Number(e.target.value) as USER_STATUS })}
                  className="w-full p-2 border border-[#E6EAF2] rounded-[4px] focus:outline-none focus:border-[#0B498B] text-black appearance-none bg-white text-sm font-normal px-[16px] py-[8px] cursor-pointer"
                >
                  {Object.entries(USER_STATUS_REVERSE).map(([key, value]) => (
                    <option key={key} value={key} className="text-sm font-normal">
                      {value}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <DropdownArrow />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-xs font-normal text-[#1C1C1C] mb-2">Ownership</label>
              <div className="relative">
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: Number(e.target.value) as USER_TYPE })}
                  className="w-full p-2 border border-[#E6EAF2] rounded-[4px] focus:outline-none focus:border-[#0B498B] text-black appearance-none bg-white text-sm font-normal px-[16px] py-[8px] cursor-pointer"
                >
                  {Object.entries(USER_TYPE_REVERSE_MANAGE_USERS).map(([key, value]) => (
                    <option key={key} value={key} className="text-sm font-normal">
                      {value}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <DropdownArrow />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              className="bg-[#0B498B] text-white px-4 rounded-[4px] font-medium w-[115px] h-[36px] text-sm flex items-center justify-center"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal; 