"use client";

import React, { memo } from 'react';
import { FORM_MODE } from '@component/constants/formConstants';
import { GENDER_OPTIONS, MARITAL_STATUS_OPTIONS } from '@component/constants/dropdown/personalInfo';

interface PersonalInfoProps {
  firstName: string;
  lastName: string;
  middleName: string;
  gender: string;
  dob: string;
  mobile: string;
  email: string;
  altEmail: string;
  maritalStatus: string;
  formMode: FORM_MODE;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const PersonalInfoSection: React.FC<PersonalInfoProps> = ({
  firstName,
  lastName,
  middleName,
  gender,
  dob,
  mobile,
  email,
  altEmail,
  maritalStatus,
  formMode,
  handleChange
}) => {
  // Convert YYYY-MM-DD to MM/DD/YYYY for display
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    
    try {
      const [year, month, day] = dateString.split('-');
      return `${month}/${day}/${year}`;
    } catch (e) {
      return dateString;
    }
  };

  // Convert MM/DD/YYYY to YYYY-MM-DD for input value
  const formatDateForInput = (dateString: string) => {
    if (!dateString) return '';
    
    try {
      if (dateString.includes('-')) {
        return dateString;
      }
      
      const [month, day, year] = dateString.split('/');
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    } catch (e) {
      return dateString;
    }
  };

  return (
    <div className="mx-6 mt-[21px] mb-6 bg-white rounded-2xl border border-[#E6EAF2] shadow-sm overflow-hidden">
      <div className="bg-[#F6F7F9] py-4 px-6 border-b border-gray-200">
        <p className="text-[15px] font-medium text-[#0B498B]">Personal Information</p>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-3 gap-6 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              placeholder="Enter first name"
              className={`w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] ${formMode === FORM_MODE.VIEW ? 'bg-gray-100' : 'bg-white'}`}
              readOnly={formMode === FORM_MODE.VIEW}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Middle Name
            </label>
            <input
              type="text"
              name="middleName"
              value={middleName || ''}
              onChange={handleChange}
              placeholder="Enter middle name"
              className={`w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] ${formMode === FORM_MODE.VIEW ? 'bg-gray-100' : 'bg-white'}`}
              readOnly={formMode === FORM_MODE.VIEW}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              placeholder="Enter last name"
              className={`w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] ${formMode === FORM_MODE.VIEW ? 'bg-gray-100' : 'bg-white'}`}
              readOnly={formMode === FORM_MODE.VIEW}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-6 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gender<span className="text-red-500">*</span>
            </label>
            <select
              name="gender"
              value={gender}
              onChange={handleChange}
              className={`w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none ${formMode === FORM_MODE.VIEW ? 'bg-gray-100' : 'bg-white'}`}
              disabled={formMode === FORM_MODE.VIEW}
            >
              {Object.entries(GENDER_OPTIONS).map(([value, label]) => (
                <option key={`gender-${value}`} value={label}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date of Birth<span className="text-red-500">*</span>
            </label>
            {formMode === FORM_MODE.VIEW ? (
              <input
                type="text"
                value={formatDate(dob)}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] bg-gray-100"
                readOnly
              />
            ) : (
              <input
                type="date"
                name="dob"
                value={formatDateForInput(dob)}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A]"
              />
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Marital Status<span className="text-red-500">*</span>
            </label>
            <select
              name="maritalStatus"
              value={maritalStatus}
              onChange={handleChange}
              className={`w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none ${formMode === FORM_MODE.VIEW ? 'bg-gray-100' : 'bg-white'}`}
              disabled={formMode === FORM_MODE.VIEW}
            >
              {Object.entries(MARITAL_STATUS_OPTIONS).map(([value, label]) => (
                <option key={`marital-status-${value}`} value={label}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mobile Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="mobile"
              value={mobile}
              onChange={handleChange}
              placeholder="Enter mobile number"
              className={`w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] ${formMode === FORM_MODE.VIEW ? 'bg-gray-100' : 'bg-white'}`}
              readOnly={formMode === FORM_MODE.VIEW}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter email address"
              className={`w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] ${formMode === FORM_MODE.VIEW ? 'bg-gray-100' : 'bg-white'}`}
              readOnly={formMode === FORM_MODE.VIEW}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Alternate Email
            </label>
            <input
              type="email"
              name="altEmail"
              value={altEmail || ''}
              onChange={handleChange}
              placeholder="Enter alternate email"
              className={`w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] ${formMode === FORM_MODE.VIEW ? 'bg-gray-100' : 'bg-white'}`}
              readOnly={formMode === FORM_MODE.VIEW}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(PersonalInfoSection); 