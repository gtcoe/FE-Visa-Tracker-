"use client";

import React, { useState } from 'react';

interface VisaApplicationRow {
  id: string;
  name: string;
  email: string;
  visaCountry: string;
  visaCategory: string;
  entryType: string;
  remarks: string;
}

// Component for Service Request Summary tab
const ServiceRequestSummary: React.FC = () => {
  // Sample data for the visa applications table
  const [visaApplications, setVisaApplications] = useState<VisaApplicationRow[]>([
    {
      id: '1',
      name: 'Sahil Chopra',
      email: '',
      visaCountry: 'Netherlands',
      visaCategory: 'Business',
      entryType: 'Normal',
      remarks: '',
    }
  ]);

  // State for dispatch details
  const [dispatchDetails, setDispatchDetails] = useState({
    medium1: '',
    medium2: '',
    remark: ''
  });

  const handleDispatchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDispatchDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFinalSubmission = () => {
    console.log('Final submission', { visaApplications, dispatchDetails });
    // Here you would typically send this data to your API
  };

  const handleAddMoreServiceRequest = () => {
    console.log('Add more service request');
    // Navigate to the appropriate screen or open a modal
  };

  const handleEditRow = (id: string) => {
    console.log('Edit row', id);
    // Navigate to edit screen with the row data
  };

  const handleViewRow = (id: string) => {
    console.log('View row', id);
    // Navigate to view screen with the row data
  };

  const handleAddSubRequest = (id: string) => {
    console.log('Add sub request for', id);
    // Navigate to add sub request screen or open a modal
  };

  return (
    <div className="p-0">
      {/* Container with card styling */}
      <div className="bg-white rounded-lg border border-[#E6EAF2] shadow-sm overflow-hidden">
        {/* Reference & Client Information */}
        <div className="rounded-lg border border-[#E6EAF2] m-4">
          <div className="border-b border-[#E6EAF2] px-6 py-4 bg-[#F9FAFB]">
            <div className="flex flex-wrap items-center text-[14px] leading-[20px] font-medium space-x-2">
              <span className="font-medium text-[#0B498B]">Reference No: MMI2345</span>
              <span className="font-medium text-[#0B498B]">•</span>
              <span className="font-medium text-[#0B498B]">Client name: Concentrix - Gurgaon</span>
              <span className="font-medium text-[#0B498B]">•</span>
              <button
                onClick={handleAddMoreServiceRequest}
                className="text-[#D95252] hover:underline font-medium"
              >
                Add More Service Request
              </button>
            </div>
          </div>

          {/* Visa Application Details */}
          <div className="">
            <h3 className="text-[14px] leading-[20px] font-medium text-[#1C1C1C] my-4 mx-6">Visa Application details</h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-[#F9FAFB] text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-t border-[#E6EAF2]">
                    <th className="px-4 py-3 text-center">Application Name</th>
                    <th className="px-4 py-3 text-center">Email ID</th>
                    <th className="px-4 py-3 text-center">Visa Country</th>
                    <th className="px-4 py-3 text-center">Visa Category</th>
                    <th className="px-4 py-3 text-center">Entry Type</th>
                    <th className="px-4 py-3 text-center">Remarks</th>
                    <th className="px-4 py-3 text-center">Edit</th>
                    <th className="px-4 py-3 text-center">View</th>
                    <th className="px-4 py-3 text-center">ADD SUB REQUEST</th>
                  </tr>
                </thead>
                <tbody>
                  {visaApplications.map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50 border-b border-[#E6EAF2] last:border-b-0">
                      <td className="px-4 py-4 text-sm font-medium text-gray-900 text-center">{row.name}</td>
                      <td className="px-4 py-4 text-sm text-gray-500 text-center">{row.email || '-'}</td>
                      <td className="px-4 py-4 text-sm text-gray-500 text-center">{row.visaCountry}</td>
                      <td className="px-4 py-4 text-sm text-gray-500 text-center">{row.visaCategory}</td>
                      <td className="px-4 py-4 text-sm text-gray-500 text-center">{row.entryType}</td>
                      <td className="px-4 py-4 text-sm text-gray-500 text-center">{row.remarks || '-'}</td>
                      <td className="px-4 py-4 text-sm text-center">
                        <button 
                          onClick={() => handleEditRow(row.id)}
                          className="text-[#0B498B] hover:underline font-medium"
                        >
                          Edit
                        </button>
                      </td>
                      <td className="px-4 py-4 text-sm text-center">
                        <button 
                          onClick={() => handleViewRow(row.id)}
                          className="text-[#0B498B] hover:underline font-medium"
                        >
                          View
                        </button>
                      </td>
                      <td className="px-4 py-4 text-sm text-center">
                        <button 
                          onClick={() => handleAddSubRequest(row.id)}
                          className="text-[#0B498B] hover:underline font-medium"
                        >
                          Add sub request
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        

        {/* Dispatch Details */}
        <div className="p-6 pt-2">
          <h3 className="text-[14px] leading-[20px] font-medium text-[#1C1C1C] mb-4">Dispatch Details</h3>
          
          <div className="relative">
            
            <div className="border border-[#E6EAF2] rounded-md p-6 pt-8">
              <div className="grid grid-cols-4 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-normal text-gray-700 mb-2">
                    Dispatch Medium
                  </label>
                  <select
                    name="medium1"
                    value={dispatchDetails.medium1}
                    onChange={handleDispatchChange}
                    className="text-sm w-full h-10 px-3 border border-[#E6EAF2] rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-gray-700 appearance-none bg-white"
                  >
                    <option value="">Select</option>
                    <option value="email">Email</option>
                    <option value="courier">Courier</option>
                    <option value="hand_delivery">Hand Delivery</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-xs font-normal text-gray-700 mb-2">
                    Dispatch Medium No.
                  </label>
                  <input
                    type="text"
                    name="medium2"
                    value={dispatchDetails.medium2}
                    onChange={handleDispatchChange}
                    placeholder="Enter dispatch medium number"
                    className="text-sm w-full h-10 px-3 border border-[#E6EAF2] rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-gray-700 bg-white"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-normal text-gray-700 mb-2">
                  Remark
                </label>
                <textarea
                  name="remark"
                  value={dispatchDetails.remark}
                  onChange={handleDispatchChange}
                  rows={1}
                  className=" text-sm w-full px-3 py-2 border border-[#E6EAF2] rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-gray-700 resize-none"
                  placeholder="Enter remarks here..."
                />
              </div>
            </div>
             {/* Final Submission Button */}
          <div className="flex justify-end mt-6">
            <button
              type="button"
              onClick={handleFinalSubmission}
              className="bg-[#0B498B] text-white px-6 py-2.5 rounded-md hover:bg-[#083968] transition-colors focus:outline-none font-medium w-[183px]"
            >
              Final Submission
            </button>
          </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default React.memo(ServiceRequestSummary); 