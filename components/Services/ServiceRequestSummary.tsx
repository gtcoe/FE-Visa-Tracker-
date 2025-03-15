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

  const handleDispatchChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>) => {
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
    <div className="space-y-6 p-6">
      {/* Reference & Client Information */}
      <div className="bg-[#F8F9FB] p-4 rounded-lg">
        <div className="flex flex-wrap items-center text-sm font-medium space-x-2">
          <span className="text-gray-700">Reference No: MMI2345</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-700">Client name: Concentrix - Gurgaon</span>
          <span className="text-gray-400">•</span>
          <button
            onClick={handleAddMoreServiceRequest}
            className="text-[#0B498B] hover:underline"
          >
            Add More Service Request
          </button>
        </div>
      </div>

      {/* Visa Application Details */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-4">Visa Application details</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#F6F7F9] text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <th className="px-6 py-3">Application Name</th>
                <th className="px-6 py-3">Email ID</th>
                <th className="px-6 py-3">Visa Country</th>
                <th className="px-6 py-3">Visa Category</th>
                <th className="px-6 py-3">Entry Type</th>
                <th className="px-6 py-3">Remarks</th>
                <th className="px-6 py-3">Edit</th>
                <th className="px-6 py-3">View</th>
                <th className="px-6 py-3">ADD SUB REQUEST</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {visaApplications.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.email || '-'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.visaCountry}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.visaCategory}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.entryType}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.remarks || '-'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button 
                      onClick={() => handleEditRow(row.id)}
                      className="text-[#0B498B] hover:underline"
                    >
                      Edit
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button 
                      onClick={() => handleViewRow(row.id)}
                      className="text-[#0B498B] hover:underline"
                    >
                      View
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button 
                      onClick={() => handleAddSubRequest(row.id)}
                      className="text-[#0B498B] hover:underline"
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

      {/* Dispatch Details */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-4">Dispatch Details</h3>
        
        <div className="grid grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Dispatch Medium
            </label>
            <select
              name="medium1"
              value={dispatchDetails.medium1}
              onChange={handleDispatchChange}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-gray-700 appearance-none bg-white"
            >
              <option value="">Select</option>
              <option value="email">Email</option>
              <option value="courier">Courier</option>
              <option value="hand_delivery">Hand Delivery</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Dispatch Medium
            </label>
            <select
              name="medium2"
              value={dispatchDetails.medium2}
              onChange={handleDispatchChange}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-gray-700 appearance-none bg-white"
            >
              <option value="">Select</option>
              <option value="email">Email</option>
              <option value="courier">Courier</option>
              <option value="hand_delivery">Hand Delivery</option>
            </select>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Remark
          </label>
          <textarea
            name="remark"
            value={dispatchDetails.remark}
            onChange={handleDispatchChange}
            rows={4}
            className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-gray-700"
            placeholder="Enter remarks here..."
          />
        </div>
      </div>

      {/* Final Submission Button */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleFinalSubmission}
          className="bg-[#0B498B] text-white px-8 py-2.5 rounded-md hover:bg-[#083968] transition-colors focus:outline-none focus:ring-1 focus:ring-[#0B498B] font-medium"
        >
          Final Submission
        </button>
      </div>
    </div>
  );
};

export default React.memo(ServiceRequestSummary); 