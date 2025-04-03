"use client";

import React, { useEffect, useState } from 'react';
import PassengerSearchResults, { PassengerInfo } from './PassengerSearchResults';
import { STORAGE_KEY, TAB_NAME } from '@component/constants/formConstants';

// Define the types for the SearchPaxContent props
interface SearchPaxContentProps {
  searchData: {
    paxName: string;
    passportNo: string;
    referenceNo: string;
  };
  setSearchData: React.Dispatch<React.SetStateAction<{
    paxName: string;
    passportNo: string;
    referenceNo: string;
  }>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: (e: React.FormEvent) => Promise<void>;
  handleClear: () => void;
  isSearching: boolean;
  searchResults?: {
    passengers_info: PassengerInfo[];
  };
  handleTabChange: (tab: string) => void;
}

// Component for Search Pax tab
const SearchPaxContent: React.FC<SearchPaxContentProps> = ({
  searchData,
  setSearchData,
  handleChange,
  handleSearch,
  handleClear,
  isSearching,
  searchResults,
  handleTabChange
}) => {
  const [referenceNumber, setReferenceNumber] = useState<string>('');
  
  // Only access localStorage on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let storedRefNumber = localStorage.getItem(STORAGE_KEY.SERVICE_REFERENCE_NUMBER) || '';
      if (storedRefNumber === "") {
        const url = new URL(window.location.href);
        storedRefNumber = url.searchParams.get('reference') || '';
        if (storedRefNumber) {
          localStorage.setItem(STORAGE_KEY.SERVICE_REFERENCE_NUMBER, storedRefNumber);
        }
      }
      setReferenceNumber(storedRefNumber);
    }
  }, []);

  // Format date from ISO string to YYYY-MM-DD
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  // Handle using a passenger
  const handleUsePassenger = (passengerId: number) => {
    // Find the selected passenger from search results
    const selectedPassenger = searchResults?.passengers_info.find(
      passenger => passenger.id === passengerId
    );
    
    if (!selectedPassenger) {
      console.error(`Passenger with ID ${passengerId} not found`);
      return;
    }
    
    console.log('Using passenger data:', selectedPassenger);
    
    // Format the passenger data for the application form
    const applicationData = {
      personal_info: {
        first_name: selectedPassenger.first_name,
        last_name: selectedPassenger.last_name,
        email_id: selectedPassenger.email,
        date_of_birth: selectedPassenger.dob,
        phone: selectedPassenger.phone || '',
        processing_branch: selectedPassenger.processing_branch || 1
      },
      passport_info: {
        passport_number: selectedPassenger.passport_number,
        date_of_issue: selectedPassenger.passport_date_of_issue || '',
        date_of_expiry: selectedPassenger.passport_date_of_expiry || '',
        issue_at: selectedPassenger.passport_issue_at || '',
        no_of_expired_passport: selectedPassenger.count_of_expired_passport || 0,
        expired_passport_number: selectedPassenger.expired_passport_number || ''
      },
      address_info: {
        address_line1: selectedPassenger.address_line_1,
        address_line2: selectedPassenger.address_line_2 || '',
        country: selectedPassenger.country,
        state: selectedPassenger.state,
        city: selectedPassenger.city,
        zip: selectedPassenger.zip,
        occupation: selectedPassenger.occupation || '',
        position: selectedPassenger.position || ''
      },
      // Set one default visa request
      visa_requests: [{
        visa_country: 1, // Default Netherlands
        visa_category: 1, // Default Business
        nationality: 1, // Default Indian
        state: 6, // Default Delhi
        entry_type: 1, // Default Normal
        remark: ''
      }],
      // Used to store the reference number across app
      reference_number: referenceNumber || '',
      // Add other required fields with default values
      travel_info: {
        travel_date: '',
        interview_date: '',
        file_no: '',
        is_travel_date_tentative: 0,
        priority_submission: 0
      },
      mi_fields: {
        olvt_number: ''
      },
      application_id: 0, // New application
      status: 0,
      last_updated_by: selectedPassenger.last_updated_by || 0
    };
    
    // Store the application data in localStorage
    localStorage.setItem(STORAGE_KEY.APPLICATION_INFO, JSON.stringify(applicationData));
    
    // Switch to the Fill Service Form tab
    handleTabChange(TAB_NAME.FILL);
  };

  return (
    <>
      {/* Form Container */}
      <div className="mx-6 mt-[21px] mb-6 border-[1.5px] border-[#E6EAF2] rounded-2xl">
        {/* Reference No Header with gray background */}
        <div className="bg-[#F6F7F9] py-4 px-6 border-b border-gray-200 rounded-t-2xl">
          <p className="text-base font-medium text-[#1C1C1C]">{`Reference No: ${referenceNumber}`}</p>
        </div>
        
        {/* Form */}
        <div className="p-6">
          <form onSubmit={handleSearch} className="space-y-8">
            <div className="grid grid-cols-5 gap-8">
              <div>
                <label htmlFor="paxName" className="block text-sm font-medium text-gray-700 mb-2">
                  PAX Name
                </label>
                <input
                  type="text"
                  id="paxName"
                  name="paxName"
                  value={searchData.paxName}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A]"
                />
              </div>
              
              <div>
                <label htmlFor="passportNo" className="block text-sm font-medium text-gray-700 mb-2">
                  Passport No<span className="text-red-500 ml-0.5">*</span>
                </label>
                <input
                  type="text"
                  id="passportNo"
                  name="passportNo"
                  value={searchData.passportNo}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A]"
                />
              </div>
              
              <div>
                <label htmlFor="referenceNo" className="block text-sm font-medium text-gray-700 mb-2">
                  Reference No<span className="text-red-500 ml-0.5">*</span>
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    id="referenceNo"
                    name="referenceNo"
                    value={searchData.referenceNo}
                    onChange={handleChange}
                    placeholder=""
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A]"
                  />
                  <button
                    type="button"
                    onClick={handleClear}
                    className="ml-3 text-sm text-[#0B498B] font-semibold hover:underline"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      
      {/* Search Button Container */}
      <div className="flex justify-end p-6 pt-0">
        <button
          onClick={handleSearch}
          disabled={isSearching}
          className="bg-[#0B498B] text-white px-8 py-2 rounded-md hover:bg-[#083968] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B498B] focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed font-medium"
        >
          {isSearching ? 'Searching...' : 'Search'}
        </button>
      </div>

      {/* Passenger Search Results */}
      {searchResults && searchResults.passengers_info && (
        <PassengerSearchResults 
          passengers={searchResults.passengers_info} 
          onUsePassenger={handleUsePassenger} 
        />
      )}
    </>
  );
};

export default React.memo(SearchPaxContent);