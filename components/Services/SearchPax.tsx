"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SearchPax = () => {
  const router = useRouter();
  const [searchData, setSearchData] = useState({
    paxName: '',
    passportNo: '',
    referenceNo: ''
  });
  const [isSearching, setIsSearching] = useState(false);
  const [activeTab, setActiveTab] = useState('search');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    
    try {
      // Make API request to search for pax
      // For now, we'll just simulate the API call with a timeout
      console.log('Searching with data:', searchData);
      
      // Simulating API request
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // In a real implementation, you would handle the search results
      // For now, we'll just log it
      console.log('Search completed');
      
    } catch (error) {
      console.error('Error searching for pax:', error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleClear = () => {
    setSearchData({
      paxName: '',
      passportNo: '',
      referenceNo: ''
    });
  };

  return (
    <div className="py-6 px-[80px]">
      <h1 className="text-[28px] font-bold text-[#1C1C1C] mb-6">Service Request Form</h1>
      
      {/* Main Container with Tabs and Form */}
      <div className="bg-white rounded-2xl border border-[#E6EAF2] shadow-sm overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <div 
            className={`px-6 py-5 font-normal text-base cursor-pointer ${activeTab === 'search' ? 'text-[#0B498B] border-b-[3px] border-[#0B498B] font-semibold' : 'text-gray-600'}`}
            onClick={() => setActiveTab('search')}
          >
            Search Pax
          </div>
          <div 
            className={`px-6 py-5 font-normal text-base cursor-pointer ${activeTab === 'fill' ? 'text-[#0B498B] border-b-[3px] border-[#0B498B] font-semibold' : 'text-gray-600'}`}
            onClick={() => setActiveTab('fill')}
          >
            Fill Online Service Request Form
          </div>
          <div 
            className={`px-6 py-5 font-normal text-base cursor-pointer ${activeTab === 'summary' ? 'text-[#0B498B] border-b-[3px] border-[#0B498B] font-semibold' : 'text-gray-600'}`}
            onClick={() => setActiveTab('summary')}
          >
            Service Request Summary
          </div>
        </div>
        
        {/* Form Container */}
        <div className="mx-6 mt-[21px] mb-6 border-[1.5px] border-[#E6EAF2] rounded-2xl">
          {/* Reference No Header with gray background */}
          <div className="bg-[#F6F7F9] py-4 px-6 border-b border-gray-200 rounded-t-2xl">
            <p className="text-base font-medium text-[#1C1C1C]">Reference No:</p>
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
      </div>
    </div>
  );
};

export default SearchPax; 