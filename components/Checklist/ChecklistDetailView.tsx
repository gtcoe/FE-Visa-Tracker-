"use client";

import React from 'react';
import { 
  VISA_COUNTRY_LABELS, 
  VISA_CATEGORY_LABELS,
  NATIONALITY_LABELS,
  STATE_LABELS 
} from '@component/constants/dropdown/geographical';

interface ChecklistDetailsProps {
  visaCountry: number;
  visaCategory: number;
  nationality: number;
  state: number;
  details: ChecklistDetail;
}

export interface ChecklistDetail {
  notes: string[];
  requirements: ChecklistRequirement[];
  fees: {
    entryType: string;
    visaFee: number;
    vesFee: number;
    remark: string;
    chargeLocation: string;
  }[];
}

interface ChecklistRequirement {
  id: number;
  text: string;
  subItems?: string[];
}

const ChecklistDetailView: React.FC<ChecklistDetailsProps> = ({
  visaCountry,
  visaCategory,
  nationality,
  state,
  details
}) => {
  // Sample emails for the second image example
  const selectedEmails = [
    { email: 'kartik.chopra@gmail.com', selected: true },
    { email: 'jsnegi@gmail.com', selected: true }
  ];

  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 p-4 flex flex-col">
        <div className="mb-6">
          <h3 className="text-red-600 font-medium py-1">Diplomatic Representation</h3>
          <h3 className="text-red-600 font-medium py-1">Outsourced Visa Application Centres</h3>
          <h3 className="text-red-600 font-medium py-1">Holiday List</h3>
          <h3 className="text-red-600 font-medium py-1">Visa Country Info</h3>
        </div>
        
        <div className="relative mb-6">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search Contact email id"
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md text-gray-400"
          />
        </div>

        {/* Selected contacts - visible in second image */}
        {visaCountry === 3 && visaCategory === 2 && (
          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-2">2 Contact selected</p>
            {selectedEmails.map((contact, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-100 px-2 py-1 rounded mb-1">
                <span className="text-sm">{contact.email}</span>
                <span className="text-gray-500">×</span>
              </div>
            ))}
          </div>
        )}
        
        {/* Send Mail button right-aligned */}
        <div className="flex justify-end mb-6">
          <button className="bg-[#0B498B] text-white py-2 px-4 rounded-md font-medium w-32">
            Send Mail
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-white">
        {/* Header Information */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-10 mb-4">
            <div className="text-[#1976d2]">
              <span className="font-medium">Visa Country</span>
              <span className="mx-1">:</span>
              <span className="font-semibold ml-1">{VISA_COUNTRY_LABELS[visaCountry as keyof typeof VISA_COUNTRY_LABELS]}</span>
            </div>
            <div className="text-[#1976d2]">
              <span className="font-medium">Visa Category</span>
              <span className="mx-1">:</span>
              <span className="font-semibold ml-1">{VISA_CATEGORY_LABELS[visaCategory as keyof typeof VISA_CATEGORY_LABELS]}</span>
            </div>
            <div className="text-[#1976d2]">
              <span className="font-medium">Nationality</span>
              <span className="mx-1">:</span>
              <span className="font-semibold ml-1">{NATIONALITY_LABELS[nationality as keyof typeof NATIONALITY_LABELS]}</span>
            </div>
          </div>
          <h2 className="text-sm font-normal mb-6">Visa Notes & Fees</h2>
        </div>

        {/* Requirements List - Styled to match expected UI */}
        <div className="mb-8">
          <ol className="list-decimal space-y-4">
            {details.requirements.map((req) => (
              <li key={req.id} className="ml-4">
                <span>{req.text}</span>
                {req.subItems && (
                  <ol className="list-none mt-1 space-y-1">
                    {req.subItems.map((subItem, index) => (
                      <li key={index} className="ml-4">
                        {/* Using lowercase letters a), b), etc. for sub-items */}
                        <span className="text-gray-600">
                          {String.fromCharCode(97 + index)}) {subItem}
                        </span>
                      </li>
                    ))}
                  </ol>
                )}
              </li>
            ))}
          </ol>
        </div>

        {/* Special note visible in second image */}
        {visaCountry === 3 && visaCategory === 2 && (
          <div className="mb-4">
            <p className="text-gray-700">Please note: Photograph should not be more than 3 months old,scanned/stapled and should not be used in any of the previous visas</p>
          </div>
        )}

        {/* Fees Table */}
        <div className="mb-8">
          <h3 className="font-medium mb-3">Visa Charges:</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-white">
                  <th className="border border-gray-300 px-4 py-2 text-left font-medium">Entry Type</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-medium">Visa Fee</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-medium">VFS Fee</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-medium">Remark</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-medium">Charge Location</th>
                </tr>
              </thead>
              <tbody>
                {details.fees.map((fee, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">{fee.entryType}</td>
                    <td className="border border-gray-300 px-4 py-2">{fee.visaFee.toFixed(2)}</td>
                    <td className="border border-gray-300 px-4 py-2">{fee.vesFee.toFixed(2)}</td>
                    <td className="border border-gray-300 px-4 py-2">{fee.remark}</td>
                    <td className="border border-gray-300 px-4 py-2">{fee.chargeLocation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-xs text-gray-500 mt-8 border-t pt-4">
          Although due care has been taken in compiling the contents of this website, Udaan India Pvt Ltd accepts no liability in respect of any errors or omissions contained or referred to in it. No part of this website may be reproduced in any form or by any means without the prior written permission of Udaan India Pvt Ltd.
        </div>
      </div>

      {/* User Avatar */}
      <div className="absolute top-6 right-6">
        <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium">
          J
        </div>
      </div>
    </div>
  );
};

export default ChecklistDetailView; 