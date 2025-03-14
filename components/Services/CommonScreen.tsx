"use client";

import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { debounce } from 'lodash'; // Add lodash for debouncing

// Lazy load all tab components for code splitting
const FillServiceForm = lazy(() => import('./FillServiceForm'));
const SearchPaxContent = lazy(() => import('./SearchPaxContent'));
const ServiceRequestSummary = lazy(() => import('./ServiceRequestSummary'));

// Create a placeholder loading component
const LoadingFallback = () => (
  <div className="p-6 flex justify-center items-center min-h-[300px]">
    <div className="animate-pulse flex flex-col items-center">
      <div className="h-12 w-12 rounded-full bg-gray-200 mb-4"></div>
      <div className="h-4 w-32 bg-gray-200 rounded"></div>
    </div>
  </div>
);

const SearchPax = () => {
  const router = useRouter();
  const [searchData, setSearchData] = useState({
    paxName: '',
    passportNo: '',
    referenceNo: ''
  });
  const [isSearching, setIsSearching] = useState(false);
  const [activeTab, setActiveTab] = useState('search');
  const [tabsToPreload, setTabsToPreload] = useState<string[]>([]);

  // Preload tabs that are likely to be used next
  useEffect(() => {
    // Preload the adjacent tabs
    const preloadAdjacentTabs = () => {
      if (activeTab === 'search') {
        import('./FillServiceForm'); // Preload the next tab
      } else if (activeTab === 'fill') {
        import('./ServiceRequestSummary'); // Preload the next tab
      }
    };

    // Delay preloading to not compete with current tab rendering
    const timer = setTimeout(preloadAdjacentTabs, 1000);
    return () => clearTimeout(timer);
  }, [activeTab]);

  // Optimize handlers with useCallback to prevent unnecessary re-renders
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  // Debounced search function to reduce unnecessary API calls
  const debouncedSearch = useCallback(
    debounce(async (data: {
      paxName: string;
      passportNo: string;
      referenceNo: string;
    }) => {
      try {
        // Actual API call would go here
        console.log('Searching with data:', data);
        await new Promise(resolve => setTimeout(resolve, 500));
        console.log('Search completed');
      } catch (error) {
        console.error('Error searching for pax:', error);
      } finally {
        setIsSearching(false);
      }
    }, 300), 
    []
  );

  const handleSearch = useCallback(async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsSearching(true);
    debouncedSearch(searchData);
  }, [searchData, debouncedSearch]);

  const handleClear = useCallback(() => {
    setSearchData({
      paxName: '',
      passportNo: '',
      referenceNo: ''
    });
  }, []);

  // Handle tab change with preloading
  const handleTabChange = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);

  // Tab hover handler to initiate preloading
  const handleTabHover = useCallback((tab: string) => {
    if (tab !== activeTab && !tabsToPreload.includes(tab)) {
      setTabsToPreload(prev => [...prev, tab]);
      
      // Dynamically import the component when user hovers
      if (tab === 'fill') {
        import('./FillServiceForm');
      } else if (tab === 'summary') {
        import('./ServiceRequestSummary');
      } else if (tab === 'search') {
        import('./SearchPaxContent');
      }
    }
  }, [activeTab, tabsToPreload]);

  // Function to render the appropriate content based on the active tab
  const renderTabContent = useCallback(() => {
    return (
      <Suspense fallback={<LoadingFallback />}>
        {activeTab === 'search' && (
          <SearchPaxContent
            searchData={searchData}
            setSearchData={setSearchData}
            handleChange={handleChange}
            handleSearch={handleSearch}
            handleClear={handleClear}
            isSearching={isSearching}
          />
        )}
        
        {activeTab === 'fill' && <FillServiceForm />}
        
        {activeTab === 'summary' && <ServiceRequestSummary />}
      </Suspense>
    );
  }, [activeTab, searchData, handleChange, handleSearch, handleClear, isSearching]);

  return (
    <div className="py-6 px-[80px]">
      <h1 className="text-[28px] font-bold text-[#1C1C1C] mb-6">Service Request Form</h1>
      
      {/* Main Container with Tabs and Form */}
      <div className="bg-white rounded-2xl border border-[#E6EAF2] shadow-sm overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <div 
            className={`px-6 py-5 font-medium text-base cursor-pointer ${activeTab === 'search' ? 'text-[#0B498B] border-b-[3px] border-[#0B498B] font-semibold' : 'text-gray-600'}`}
            onClick={() => handleTabChange('search')}
            onMouseEnter={() => handleTabHover('search')}
          >
            Search Pax
          </div>
          <div 
            className={`px-6 py-5 font-medium text-base cursor-pointer ${activeTab === 'fill' ? 'text-[#0B498B] border-b-[3px] border-[#0B498B] font-semibold' : 'text-gray-600'}`}
            onClick={() => handleTabChange('fill')}
            onMouseEnter={() => handleTabHover('fill')}
          >
            Fill Online Service Request Form
          </div>
          <div 
            className={`px-6 py-5 font-medium text-base cursor-pointer ${activeTab === 'summary' ? 'text-[#0B498B] border-b-[3px] border-[#0B498B] font-semibold' : 'text-gray-600'}`}
            onClick={() => handleTabChange('summary')}
            onMouseEnter={() => handleTabHover('summary')}
          >
            Service Request Summary
          </div>
        </div>
        
        {/* Render the content based on the active tab */}
        {renderTabContent()}
      </div>
    </div>
  );
};

export default React.memo(SearchPax); 