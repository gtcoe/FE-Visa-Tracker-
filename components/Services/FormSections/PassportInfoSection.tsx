"use client";

import React, { memo } from 'react';
import { FORM_MODE } from '@component/constants/formConstants';
import DateInput from './DateInput';

interface PassportInfoProps {
  passportInfo: {
    passportNumber: string;
    dateOfIssue: string;
    dateOfExpiry: string;
    issueAt: string;
    noOfExpiredPassport: string;
    expiredPassportNumber: string;
  };
  handlePassportInfoChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  createDateChangeAdapter: (handler: any) => any;
  handleTabChange: (tabName: string) => void;
  formMode: FORM_MODE;
}

const PassportInfoSection: React.FC<PassportInfoProps> = ({
  passportInfo,
  handlePassportInfoChange,
  createDateChangeAdapter,
  handleTabChange,
  formMode
}) => {
  return (
    <div className="mx-6 mt-[21px] mb-6 bg-white rounded-2xl border border-[#E6EAF2] shadow-sm overflow-hidden">
      <div className="bg-[#F6F7F9] py-4 px-6 border-b border-gray-200">
        <p className="text-[15px] font-medium text-[#0B498B]">Passport Details</p>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-4 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Passport Number
            </label>
            <input
              type="text"
              name="passportNumber"
              value={passportInfo.passportNumber}
              onChange={handlePassportInfoChange}
              placeholder="Enter passport number"
              className={`w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] ${formMode === FORM_MODE.VIEW ? 'bg-gray-100' : 'bg-white'}`}
              readOnly={formMode === FORM_MODE.VIEW}
            />
          </div>
          
          <DateInput
            name="dateOfIssue"
            value={passportInfo.dateOfIssue}
            onChange={createDateChangeAdapter(handlePassportInfoChange)}
            label="Date of Issue"
            readOnly={formMode === FORM_MODE.VIEW}
          />
          
          <DateInput
            name="dateOfExpiry"
            value={passportInfo.dateOfExpiry}
            onChange={createDateChangeAdapter(handlePassportInfoChange)}
            label="Date of Expiry"
            readOnly={formMode === FORM_MODE.VIEW}
          />
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Issue At
            </label>
            <input
              type="text"
              name="issueAt"
              value={passportInfo.issueAt}
              onChange={handlePassportInfoChange}
              placeholder="Enter issue location"
              className={`w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] ${formMode === FORM_MODE.VIEW ? 'bg-gray-100' : 'bg-white'}`}
              readOnly={formMode === FORM_MODE.VIEW}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-6 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              No of Expired Passport
            </label>
            <select
              name="noOfExpiredPassport"
              value={passportInfo.noOfExpiredPassport}
              onChange={handlePassportInfoChange}
              className={`w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none ${formMode === FORM_MODE.VIEW ? 'bg-gray-100' : 'bg-white'}`}
              disabled={formMode === FORM_MODE.VIEW}
            >
              <option key="exp-passport-empty" value="">Select</option>
              <option key="exp-passport-0" value="0">0</option>
              <option key="exp-passport-1" value="1">1</option>
              <option key="exp-passport-2" value="2">2</option>
              <option key="exp-passport-3" value="3">3+</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expired Passport Number
            </label>
            <input
              type="text"
              name="expiredPassportNumber"
              value={passportInfo.expiredPassportNumber}
              onChange={handlePassportInfoChange}
              placeholder="Enter expired passport number"
              className={`w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] ${formMode === FORM_MODE.VIEW ? 'bg-gray-100' : 'bg-white'}`}
              readOnly={formMode === FORM_MODE.VIEW}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(PassportInfoSection); 