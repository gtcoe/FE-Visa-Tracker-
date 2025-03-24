"use client";

import React, { useEffect, useState } from 'react';

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
}

// Component for Search Pax tab
const SearchPaxContent: React.FC<SearchPaxContentProps> = ({
  searchData,
  setSearchData,
  handleChange,
  handleSearch,
  handleClear,
  isSearching
}) => {
  const [referenceNumber, setReferenceNumber] = useState<string>('');
  
  // Only access localStorage on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setReferenceNumber(localStorage.getItem('referenceNumber') || '');
    }
  }, []);

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
    </>
  );
};

export default React.memo(SearchPaxContent); 