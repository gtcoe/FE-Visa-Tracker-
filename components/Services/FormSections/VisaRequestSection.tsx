"use client";

import React, { memo } from 'react';
import { FORM_MODE } from '@component/constants/formConstants';
import { 
  VISA_COUNTRY_LABELS, 
  VISA_CATEGORY_LABELS,
  NATIONALITY_LABELS,
  STATE_LABELS,
  ENTRY_TYPE_LABELS
} from '@component/constants/dropdown/geographical';

interface VisaRequestProps {
  request: {
    visaCountry: string;
    visaCategory: string;
    nationality: string;
    state: string;
    entryType: string;
    remark: string;
  };
  index: number;
  totalRequests: number;
  handleVisaInfoChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, index: number) => void;
  handleRemoveVisaRequest: (index: number) => void;
  handleAddNewVisaRequest: () => void;
  formMode: FORM_MODE;
}

const VisaRequestSection: React.FC<VisaRequestProps> = ({
  request,
  index,
  totalRequests,
  handleVisaInfoChange,
  handleRemoveVisaRequest,
  handleAddNewVisaRequest,
  formMode
}) => {
  return (
    <div className="mx-6 mt-[21px] mb-6 bg-white rounded-2xl border border-[#E6EAF2] shadow-sm overflow-hidden relative">
      <div className="bg-[#F6F7F9] py-4 px-6 border-b border-gray-200 flex justify-between items-center">
        <p className="text-[15px] font-medium text-[#0B498B]">Visa Request {totalRequests > 1 ? index + 1 : ''}</p>
        {totalRequests > 1 && formMode !== FORM_MODE.VIEW && (
          <button
            type="button"
            onClick={() => handleRemoveVisaRequest(index)}
            className="text-gray-500 hover:text-red-500 transition-colors focus:outline-none"
            aria-label={`Remove visa request ${index + 1}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-4 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Visa Country<span className="text-red-500">*</span>
            </label>
            <select
              name="visaCountry"
              value={request.visaCountry}
              onChange={(e) => handleVisaInfoChange(e, index)}
              className={`w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none ${formMode === FORM_MODE.VIEW ? 'bg-gray-100' : 'bg-white'}`}
              disabled={formMode === FORM_MODE.VIEW}
            >
              {Object.entries(VISA_COUNTRY_LABELS).map(([value, label]) => (
                <option key={`visa-country-${index}-${value}`} value={label}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Visa Category<span className="text-red-500">*</span>
            </label>
            <select
              name="visaCategory"
              value={request.visaCategory}
              onChange={(e) => handleVisaInfoChange(e, index)}
              className={`w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none ${formMode === FORM_MODE.VIEW ? 'bg-gray-100' : 'bg-white'}`}
              disabled={formMode === FORM_MODE.VIEW}
            >
              {Object.entries(VISA_CATEGORY_LABELS).map(([value, label]) => (
                <option key={`visa-category-${index}-${value}`} value={label}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nationality<span className="text-red-500">*</span>
            </label>
            <select
              name="nationality"
              value={request.nationality}
              onChange={(e) => handleVisaInfoChange(e, index)}
              className={`w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none ${formMode === FORM_MODE.VIEW ? 'bg-gray-100' : 'bg-white'}`}
              disabled={formMode === FORM_MODE.VIEW}
            >
              {Object.entries(NATIONALITY_LABELS).map(([value, label]) => (
                <option key={`nationality-${index}-${value}`} value={label}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              State<span className="text-red-500">*</span>
            </label>
            <select
              name="state"
              value={request.state}
              onChange={(e) => handleVisaInfoChange(e, index)}
              className={`w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none ${formMode === FORM_MODE.VIEW ? 'bg-gray-100' : 'bg-white'}`}
              disabled={formMode === FORM_MODE.VIEW}
            >
              {Object.entries(STATE_LABELS).map(([value, label]) => (
                <option key={`visa-state-${index}-${value}`} value={label}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-6 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Entry Type<span className="text-red-500">*</span>
            </label>
            <select
              name="entryType"
              value={request.entryType}
              onChange={(e) => handleVisaInfoChange(e, index)}
              className={`w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none ${formMode === FORM_MODE.VIEW ? 'bg-gray-100' : 'bg-white'}`}
              disabled={formMode === FORM_MODE.VIEW}
            >
              {Object.entries(ENTRY_TYPE_LABELS).map(([value, label]) => (
                <option key={`entry-type-${index}-${value}`} value={label}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Remark
            </label>
            <input
              type="text"
              name="remark"
              value={request.remark || ''}
              onChange={(e) => handleVisaInfoChange(e, index)}
              placeholder="Enter remarks here"
              className={`w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] ${formMode === FORM_MODE.VIEW ? 'bg-gray-100' : 'bg-white'}`}
              readOnly={formMode === FORM_MODE.VIEW}
            />
          </div>
          
          <div className="col-span-2 flex items-end justify-end">
            {index === totalRequests - 1 && formMode !== FORM_MODE.VIEW && (
              <button
                type="button"
                onClick={handleAddNewVisaRequest}
                className="bg-[#0B498B] text-white px-6 py-2.5 rounded-md hover:bg-[#083968] transition-colors focus:outline-none focus:ring-1 focus:ring-[#0B498B] font-medium"
              >
                Add More
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(VisaRequestSection); 