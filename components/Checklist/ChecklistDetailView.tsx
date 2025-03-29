"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';
import { 
  VISA_COUNTRY_LABELS, 
  VISA_CATEGORY_LABELS,
  NATIONALITY_LABELS,
  STATE_LABELS 
} from '@component/constants/dropdown/geographical';
import { searchClients } from '@component/api/client';
import { Client } from '@component/components/ManageClients/ManageClients';

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

interface SelectedClient {
  id: number;
  email: string;
  selected: boolean;
}

const ChecklistDetailView: React.FC<ChecklistDetailsProps> = ({
  visaCountry,
  visaCategory,
  nationality,
  state,
  details
}) => {
  // State for client search
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<Client[]>([]);
  const [selectedClients, setSelectedClients] = useState<SelectedClient[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Debounced search function
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce(async (query: string) => {
      if (!query || query.trim().length < 1) return;
      
      setIsSearching(true);
      setError(null);
      
      try {
        const results = await searchClients(query);
        setSearchResults(results);
      } catch (error) {
        setError('Error searching clients');
        console.error('Error searching clients:', error);
      } finally {
        setIsSearching(false);
      }
    }, 500),
    []
  );

  // Handle input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query && query.trim().length >= 1) {
      debouncedSearch(query);
    } else {
      setSearchResults([]);
    }
  };

  // Handle selecting a client
  const handleSelectClient = (client: Client) => {
    // Skip if client doesn't have an ID or is already selected
    if (!client.clientId || selectedClients.some(c => c.id === client.clientId)) return;
    
    const id = Number(client.clientId); // Ensure it's a number
    if (isNaN(id)) return; // Skip if conversion to number failed
    
    setSelectedClients(prev => [
      ...prev,
      { id, email: client.ownerEmail || 'No email', selected: true }
    ]);
    
    // Clear search results and query
    setSearchResults([]);
    setSearchQuery('');
  };

  // Handle removing a selected client
  const handleRemoveClient = (clientId: number) => {
    setSelectedClients(prev => prev.filter(client => client.id !== clientId));
  };

  // Handle sending emails
  const handleSendMail = () => {
    if (selectedClients.length === 0) {
      setError('Please select at least one client.');
      return;
    }
    
    console.log('Sending mail to:', selectedClients);
    // Implement mail sending functionality here
    alert('Mail sending feature will be implemented soon.');
  };

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-grow">
        {/* Left Sidebar */}
        <div className="w-80 bg-white border-r border-gray-200 p-4 flex flex-col">
          <div className="mb-6">
            <h3 className="text-red-600 font-medium py-1">Diplomatic Representation</h3>
            <h3 className="text-red-600 font-medium py-1">Outsourced Visa Application Centres</h3>
            <h3 className="text-red-600 font-medium py-1">Holiday List</h3>
            <h3 className="text-red-600 font-medium py-1">Visa Country Info</h3>
          </div>
          
          <div className="relative mb-2">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search Contact email id"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md text-gray-500"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          
          {/* Loading indicator */}
          {isSearching && (
            <div className="flex justify-center py-2">
              <div className="animate-spin h-5 w-5 border-2 border-[#0B498B] border-t-transparent rounded-full"></div>
            </div>
          )}
          
          {/* Search results dropdown */}
          {searchResults.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-md shadow-sm mt-1 mb-4 max-h-40 overflow-y-auto">
              {searchResults.map(client => (
                <div 
                  key={client.clientId} 
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-900"
                  onClick={() => handleSelectClient(client)}
                >
                  {client.ownerEmail || 'No email provided'}
                </div>
              ))}
            </div>
          )}
          
          {/* Error message */}
          {error && (
            <div className="text-red-500 text-sm mb-2">
              {error}
            </div>
          )}

          {/* Selected clients */}
          {selectedClients.length > 0 && (
            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-2">{selectedClients.length} Contact selected</p>
              {selectedClients.map((client) => (
                <div key={client.id} className="flex items-center justify-between bg-gray-100 px-2 py-1 rounded mb-1">
                  <span className="text-sm text-gray-900">{client.email}</span>
                  <button 
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => handleRemoveClient(client.id)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
          
          {/* Send Mail button right-aligned */}
          <div className="flex justify-end mb-6">
            <button 
              className="bg-[#0B498B] text-white py-2 px-4 rounded-md font-medium w-32 hover:bg-[#083968] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              onClick={handleSendMail}
              disabled={selectedClients.length === 0}
            >
              Send Mail
            </button>
          </div>
          
          {/* Rest of sidebar content would go here */}
          <div className="mt-auto">
            {/* This is where any content that should stick to the bottom would go */}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-white">
          {/* Header Information */}
          <div className="mb-5">
            <div className="flex flex-wrap gap-12 mb-3">
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
            <h2 className="text-sm font-semibold text-gray-800">Visa Notes & Fees</h2>
          </div>

          {/* Requirements List - Styled to match expected UI */}
          <div className="mb-6">
            <ol className="list-decimal pl-4 space-y-2">
              {details.requirements.map((req) => (
                <li key={req.id} className="pl-1 text-sm text-gray-800 leading-relaxed">
                  {req.text}
                  {req.subItems && (
                    <ol className="mt-1 space-y-1 ml-0">
                      {req.subItems.map((subItem, index) => (
                        <li key={index} className="flex">
                          <span className="text-gray-800 mr-1">{String.fromCharCode(97 + index)})</span>
                          <span className="text-gray-800">{subItem}</span>
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
              <p className="text-gray-800 text-sm italic">Please note: Photograph should not be more than 3 months old, scanned/stapled and should not be used in any of the previous visas</p>
            </div>
          )}

          {/* Fees Table */}
          <div className="mb-6">
            <h3 className="text-gray-800 font-medium mb-2">Visa Charges:</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200">
                <thead>
                  <tr className="bg-white">
                    <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-800 text-sm">Entry Type</th>
                    <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-800 text-sm">Visa Fee</th>
                    <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-800 text-sm">VFS Fee</th>
                    <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-800 text-sm w-[40%]">Remark</th>
                    <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-800 text-sm">Charge Location</th>
                  </tr>
                </thead>
                <tbody>
                  {details.fees.map((fee, index) => (
                    <tr key={index} className="text-sm">
                      <td className="border border-gray-200 px-3 py-2 text-gray-800">{fee.entryType}</td>
                      <td className="border border-gray-200 px-3 py-2 text-gray-800">{fee.visaFee.toFixed(2)}</td>
                      <td className="border border-gray-200 px-3 py-2 text-gray-800">{fee.vesFee.toFixed(2)}</td>
                      <td className="border border-gray-200 px-3 py-2 text-gray-800">{fee.remark}</td>
                      <td className="border border-gray-200 px-3 py-2 text-gray-800">{fee.chargeLocation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer - now outside both sidebar and main content */}
      <div className="bg-white text-[11px] text-gray-500 border-t border-gray-200 pt-3 px-6 py-2">
        Although due care has been taken in compiling the contents of this website, Udaan India Pvt Ltd accepts no liability in respect of any errors or omissions contained or referred to in it. No part of this website may be reproduced in any form or by any means without the prior written permission of Udaan India Pvt Ltd.
      </div>
    </div>
  );
};

export default ChecklistDetailView; 