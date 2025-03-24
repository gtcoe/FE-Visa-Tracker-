"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Client } from './ManageClients';
import { ClientContextClient } from '@component/context/ClientContext';

interface ClientDetailsProps {
  client: Client | ClientContextClient;
}

const ClientDetails: React.FC<ClientDetailsProps> = ({ client }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  // Helper function to handle potentially undefined values
  const displayValue = (value: string | undefined) => {
    return value || '-';
  };

  // Get client type name
  const getClientType = (type: number) => {
    return type === 1 ? 'Corporate' : 'Agent';
  };

  return (
    <div className="p-6 bg-[#E6EAF2]  min-h-screen px-[80px]">
      <h1 className="text-2xl font-bold text-[#1C1C1C] mb-6 ">Client Details</h1>

      {/* Main content */}
      <div className="bg-white rounded-lg border border-[#E6EAF2] shadow-sm overflow-hidden mb-6">
        {/* Client Corporate Details */}
        <div className="border-b border-[#E6EAF2] bg-[#F9FAFB] py-4 px-6">
                <h2 className="text-base font-medium text-[#0B498B]">
                {client.name} Corporate Details
                </h2>
            </div>            
         

          <div className="grid grid-cols-3 gap-x-16 gap-y-5 pt-8 px-6 pb-6">
            <div>
              <h3 className="text-sm font-medium text-[#1C1C1C]">
                {client.name}
              </h3>
              <p className="text-xs text-[#696969] mt-1">Branch Name</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-[#1C1C1C]">
                {displayValue(client.address)}
              </h3>
              <p className="text-xs text-[#696969] mt-1">Branch Address 1</p>
            </div>
            
            {client.branches && (
              <div>
                <h3 className="text-sm font-medium text-[#1C1C1C]">
                  {client.branches}
                </h3>
                <p className="text-xs text-[#696969] mt-1">Branch Address 2</p>
              </div>
            )}

            <div>
              <h3 className="text-sm font-medium text-[#1C1C1C]">
                {displayValue(client.country?.toString())}
              </h3>
              <p className="text-xs text-[#696969] mt-1">Country</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-[#1C1C1C]">
                {displayValue(client.state?.toString())}
              </h3>
              <p className="text-xs text-[#696969] mt-1">State</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-[#1C1C1C]">
                {displayValue(client.city)}
              </h3>
              <p className="text-xs text-[#696969] mt-1">City</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-[#1C1C1C]">
                {displayValue(client.zipCode?.toString())}
              </h3>
              <p className="text-xs text-[#696969] mt-1">Zip Code</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-[#1C1C1C]">
                {getClientType(client.type)}
              </h3>
              <p className="text-xs text-[#696969] mt-1">Business Type</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-[#1C1C1C]">
                {displayValue(client.gstNo)}
              </h3>
              <p className="text-xs text-[#696969] mt-1">GST ID</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-[#1C1C1C]">
                -
              </h3>
              <p className="text-xs text-[#696969] mt-1">PAN</p>
            </div>
          </div>

      </div>

      <div className="bg-white rounded-lg border border-[#E6EAF2] shadow-sm overflow-hidden mb-6">
        {/* Other Details */}
        <div className="p-6">
          <h2 className="text-base font-medium text-[#0B498B] mb-5">Other Details</h2>
          
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#F9FAFB] text-left text-xs font-medium uppercase tracking-wider border-b border-[#E6EAF2]">
                <th className="px-4 py-3 text-[#696969]">Contact Type</th>
                <th className="px-4 py-3 text-[#696969]">Name</th>
                <th className="px-4 py-3 text-[#696969]">Email ID</th>
                <th className="px-4 py-3 text-[#696969]">Designation</th>
                <th className="px-4 py-3 text-[#696969]">Mobile Number</th>
                <th className="px-4 py-3 text-[#696969]">Alt Mobile Number</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E6EAF2]">
                <td className="px-4 py-4 text-sm font-medium text-[#1C1C1C]">
                  Contact Person
                </td>
                <td className="px-4 py-4 text-sm text-[#1C1C1C]">
                  {client.ownerName}
                </td>
                <td className="px-4 py-4 text-sm text-[#1C1C1C]">
                  {client.ownerEmail}
                </td>
                <td className="px-4 py-4 text-sm text-[#1C1C1C]">
                  N/A
                </td>
                <td className="px-4 py-4 text-sm text-[#1C1C1C]">
                  {client.ownerPhone}
                </td>
                <td className="px-4 py-4 text-sm text-[#1C1C1C]">
                  -
                </td>
              </tr>
              <tr>
                  <td className="px-4 py-4 text-sm font-medium text-[#1C1C1C]">
                    Referer
                  </td>
                  <td className="px-4 py-4 text-sm text-[#1C1C1C]">
                    {displayValue(client.spokeName)}
                  </td>
                  <td className="px-4 py-4 text-sm text-[#1C1C1C]">
                    {displayValue(client.spokeEmail)}
                  </td>
                  <td className="px-4 py-4 text-sm text-[#1C1C1C]">
                    N/A
                  </td>
                  <td className="px-4 py-4 text-sm text-[#1C1C1C]">
                    {displayValue(client.spokePhone)}
                  </td>
                  <td className="px-4 py-4 text-sm text-[#1C1C1C]">
                    -
                  </td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>


      {/* Back Button */}
      <div className="flex justify-end">
        <button
          onClick={handleBack}
          className="bg-[#0B498B] text-white px-6 py-2 rounded-md hover:bg-[#083968] transition-colors focus:outline-none font-medium"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ClientDetails; 