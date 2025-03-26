"use client";

import React, { memo } from 'react';
import { FORM_MODE } from '@component/constants/formConstants';
import { 
  COUNTRY_LABELS, 
  STATE_LABELS 
} from '@component/constants/dropdown/geographical';

interface AddressInfoProps {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  formMode: FORM_MODE;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const AddressInfoSection: React.FC<AddressInfoProps> = ({
  addressLine1,
  addressLine2,
  city,
  state,
  zipCode,
  country,
  formMode,
  handleChange
}) => {
  return (
    <div className="mx-6 mt-[21px] mb-6 bg-white rounded-2xl border border-[#E6EAF2] shadow-sm overflow-hidden">
      <div className="bg-[#F6F7F9] py-4 px-6 border-b border-gray-200">
        <p className="text-[15px] font-medium text-[#0B498B]">Address Information</p>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address Line 1<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="addressLine1"
              value={addressLine1}
              onChange={handleChange}
              placeholder="Enter address line 1"
              className={`w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] ${formMode === FORM_MODE.VIEW ? 'bg-gray-100' : 'bg-white'}`}
              readOnly={formMode === FORM_MODE.VIEW}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address Line 2
            </label>
            <input
              type="text"
              name="addressLine2"
              value={addressLine2 || ''}
              onChange={handleChange}
              placeholder="Enter address line 2"
              className={`w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] ${formMode === FORM_MODE.VIEW ? 'bg-gray-100' : 'bg-white'}`}
              readOnly={formMode === FORM_MODE.VIEW}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="city"
              value={city}
              onChange={handleChange}
              placeholder="Enter city"
              className={`w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] ${formMode === FORM_MODE.VIEW ? 'bg-gray-100' : 'bg-white'}`}
              readOnly={formMode === FORM_MODE.VIEW}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              State<span className="text-red-500">*</span>
            </label>
            <select
              name="state"
              value={state}
              onChange={handleChange}
              className={`w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none ${formMode === FORM_MODE.VIEW ? 'bg-gray-100' : 'bg-white'}`}
              disabled={formMode === FORM_MODE.VIEW}
            >
              {Object.entries(STATE_LABELS).map(([value, label]) => (
                <option key={`state-${value}`} value={label}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Zip Code<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="zipCode"
              value={zipCode}
              onChange={handleChange}
              placeholder="Enter zip code"
              className={`w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] ${formMode === FORM_MODE.VIEW ? 'bg-gray-100' : 'bg-white'}`}
              readOnly={formMode === FORM_MODE.VIEW}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Country<span className="text-red-500">*</span>
            </label>
            <select
              name="country"
              value={country}
              onChange={handleChange}
              className={`w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none ${formMode === FORM_MODE.VIEW ? 'bg-gray-100' : 'bg-white'}`}
              disabled={formMode === FORM_MODE.VIEW}
            >
              {Object.entries(COUNTRY_LABELS).map(([value, label]) => (
                <option key={`country-${value}`} value={label}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(AddressInfoSection); 