"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';
import { 
  VISA_COUNTRY_LABELS, 
  VISA_CATEGORY_LABELS,
  NATIONALITY_LABELS,
  STATE_LABELS 
} from '@component/constants/dropdown/geographical';
import { searchClients, sendEmailToClients } from '@component/api/client';
import { Client } from '@component/components/ManageClients/ManageClients';
import { EMAIL_TYPE } from '@component/constants/appConstants';

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
  const [isSendingEmail, setIsSendingEmail] = useState<boolean>(false);
  const [emailSuccess, setEmailSuccess] = useState<boolean>(false);

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
    
    // Don't clear search results or query to allow multiple selections
    // Mark this client as selected in the UI by adding a visual indicator
    const updatedSearchResults = searchResults.map(c => 
      c.clientId === client.clientId 
        ? { ...c, isSelected: true } 
        : c
    );
    setSearchResults(updatedSearchResults);
  };

  // Handle removing a selected client
  const handleRemoveClient = (clientId: number) => {
    setSelectedClients(prev => prev.filter(client => client.id !== clientId));
  };

  // Handle sending emails
  const handleSendMail = async () => {
    if (selectedClients.length === 0) {
      setError('Please select at least one client.');
      return;
    }
    
    setIsSendingEmail(true);
    setEmailSuccess(false);
    setError(null);
    
    try {
      // Format payload according to the SendEmailPayload interface
      const emailPayload = {
        emails: selectedClients.map(client => client.email),
        type: EMAIL_TYPE.DOCUMENT_CHECKLIST,
        data: {
          visaCountry,
          visaCategory,
          nationality,
          state
        }
      };
      
      await sendEmailToClients(emailPayload);
      setEmailSuccess(true);
      setSelectedClients([]);
    } catch (error) {
      setError('Error sending mail. Please try again.');
      console.error('Error sending mail:', error);
    } finally {
      setIsSendingEmail(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-grow">
        {/* Left Sidebar */}
        <div className="w-80 bg-white border-r border-gray-200 p-4 flex flex-col">
          {/* <div className="mb-6">
            <h3 className="text-red-600 font-medium py-1">Diplomatic Representation</h3>
            <h3 className="text-red-600 font-medium py-1">Outsourced Visa Application Centres</h3>
            <h3 className="text-red-600 font-medium py-1">Holiday List</h3>
            <h3 className="text-red-600 font-medium py-1">Visa Country Info</h3>
          </div> */}
          
          <div className="relative mb-2">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search Contact email id"
              className="pl-10 pr-10 py-2 w-full border border-gray-300 rounded-md text-gray-500"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            {searchQuery && (
              <button 
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                onClick={() => {
                  setSearchQuery('');
                  setSearchResults([]);
                }}
                type="button"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            )}
          </div>
          
          {/* Instructional text */}
          {searchQuery && searchResults.length > 0 && (
            <div className="text-xs text-gray-500 mb-1">
              Click on an email to add it to the selected list. You can select multiple contacts.
            </div>
          )}
          
          {/* Loading indicator */}
          {isSearching && (
            <div className="flex justify-center py-2">
              <div className="animate-spin h-5 w-5 border-2 border-[#0B498B] border-t-transparent rounded-full"></div>
            </div>
          )}
          
          {/* Search results dropdown */}
          {searchResults.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-md shadow-sm mt-1 mb-4 max-h-40 overflow-y-auto">
              {searchResults.map(client => {
                // Check if client is already selected
                const isAlreadySelected = selectedClients.some(c => c.id === client.clientId);
                
                return (
                  <div 
                    key={client.clientId} 
                    className={`px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm flex items-center justify-between ${
                      isAlreadySelected ? 'bg-blue-50' : ''
                    }`}
                    onClick={() => !isAlreadySelected && handleSelectClient(client)}
                  >
                    <span className="text-gray-900">{client.ownerEmail || 'No email provided'}</span>
                    {isAlreadySelected && (
                      <span className="text-blue-600 ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          )}
          
          {/* Error message */}
          {error && (
            <div className="text-red-500 text-sm mb-2">
              {error}
            </div>
          )}

          {/* Success message */}
          {emailSuccess && (
            <div className="text-green-500 text-sm mb-2">
              Emails sent successfully!
            </div>
          )}

          {/* Selected clients */}
          {selectedClients.length > 0 && (
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium text-gray-700">Selected Contacts</h3>
                <span className="text-xs bg-[#0B498B] text-white px-2 py-1 rounded-full">
                  {selectedClients.length} {selectedClients.length === 1 ? 'contact' : 'contacts'}
                </span>
              </div>
              <div className="border border-gray-200 rounded-md p-2 max-h-40 overflow-y-auto">
                {selectedClients.map((client) => (
                  <div key={client.id} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded mb-1 hover:bg-gray-100">
                    <span className="text-sm text-gray-900">{client.email}</span>
                    <button 
                      className="text-gray-500 hover:text-red-500 focus:outline-none"
                      onClick={() => handleRemoveClient(client.id)}
                      title="Remove contact"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Send Mail button right-aligned */}
          <div className="flex flex-col mb-6">
            {selectedClients.length > 0 ? (
              <>
                <div className="text-xs text-gray-500 mb-2">
                  The selected contacts will receive an email with the checklist details.
                </div>
                <button 
                  className="bg-[#0B498B] text-white py-2 px-4 rounded-md font-medium hover:bg-[#083968] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                  onClick={handleSendMail}
                  disabled={isSendingEmail}
                >
                  {isSendingEmail ? (
                    <>
                      <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Send Mail</span>
                    </>
                  )}
                </button>
              </>
            ) : (
              <div className="text-sm text-gray-500 italic">
                Select contacts to send the checklist via email
              </div>
            )}
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