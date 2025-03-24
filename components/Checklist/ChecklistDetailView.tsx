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
  return (
    <div className="max-w-[1200px] mx-auto p-6 bg-white">
      <div className="border-b pb-4 mb-6">
        <div className="flex flex-wrap gap-4 mb-2">
          <div className="text-blue-600">
            <span className="font-semibold">Visa Country : </span>
            <span>{VISA_COUNTRY_LABELS[visaCountry]}</span>
          </div>
          <div className="text-blue-600">
            <span className="font-semibold">Visa Category : </span>
            <span>{VISA_CATEGORY_LABELS[visaCategory]}</span>
          </div>
          <div className="text-blue-600">
            <span className="font-semibold">Nationality : </span>
            <span>{NATIONALITY_LABELS[nationality]}</span>
          </div>
        </div>
        <h2 className="text-lg font-semibold">Visa Notes & Fees</h2>
      </div>

      {/* Requirements List */}
      <div className="mb-8">
        <ol className="list-decimal pl-6 space-y-4">
          {details.requirements.map((req) => (
            <li key={req.id} className="pl-2">
              {req.text}
              {req.subItems && (
                <ol className="list-[lower-alpha] pl-6 mt-2 space-y-1">
                  {req.subItems.map((subItem, index) => (
                    <li key={index}>{subItem}</li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ol>
      </div>

      {/* Fees Table */}
      <div className="mb-8">
        <h3 className="font-semibold mb-3">Visa Charges:</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Entry Type</th>
                <th className="border border-gray-300 px-4 py-2">Visa Fee</th>
                <th className="border border-gray-300 px-4 py-2">VES Fee</th>
                <th className="border border-gray-300 px-4 py-2">Remark</th>
                <th className="border border-gray-300 px-4 py-2">Charge Location</th>
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
  );
};

export default ChecklistDetailView; 