"use client";

import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { debounce } from 'lodash'; // Add lodash for debouncing
import { searchPax } from '@component/api/application'; // Import the searchPax API
import { FORM_MODE, TAB_NAME, STORAGE_KEY } from '@component/constants/formConstants';
import { 
  VISA_COUNTRY_LABELS, COUNTRY,
  VISA_CATEGORY, VISA_CATEGORY_LABELS,
  NATIONALITY, NATIONALITY_LABELS,
  STATE, STATE_LABELS,
  ENTRY_TYPE, ENTRY_TYPE_LABELS
} from '@component/constants/dropdown/geographical';
import { PassengerInfo } from './PassengerSearchResults';

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
  const [searchData, setSearchData] = useState({
    paxName: '',
    passportNo: '',
    referenceNo: ''
  });
  const [isSearching, setIsSearching] = useState(false);
  const [activeTab, setActiveTab] = useState<string>(TAB_NAME.SEARCH);
  const [tabsToPreload, setTabsToPreload] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<{passengers_info: PassengerInfo[]} | undefined>(undefined);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [formMode, setFormMode] = useState<FORM_MODE>(FORM_MODE.EDIT); // Default mode is edit
  const [visaRequests, setVisaRequests] = useState<any[]>([
    {
      visaCountry: COUNTRY.NETHERLANDS,
      visaCategory: VISA_CATEGORY.BUSINESS,
      nationality: NATIONALITY.INDIAN,
      state: STATE.DELHI,
      entryType: ENTRY_TYPE.NORMAL,
      remark: '',
    }
  ]);

  const handleAddMore = useCallback(() => {
    console.log('Parent handleAddMore called with current visaRequests length:', visaRequests.length);
    
    // Create a new visa request object
    const newVisaRequest = {
      visaCountry: COUNTRY.NETHERLANDS,
      visaCategory: VISA_CATEGORY.BUSINESS,
      nationality: NATIONALITY.INDIAN,
      state: STATE.DELHI,
      entryType: ENTRY_TYPE.NORMAL,
      remark: ''
    };
    
    // Use functional update to ensure we're working with the latest state
    setVisaRequests(prevRequests => {
      console.log('Previous requests in update function:', prevRequests.length);
      const newRequests = [...prevRequests, newVisaRequest];
      console.log('New requests after adding:', newRequests.length);
      return newRequests;
    });
    
    // Check if the update was applied after a short delay
    setTimeout(() => {
      console.log('Delayed check after update - visaRequests length:', visaRequests.length);
    }, 100);
  }, [
    visaRequests,
    VISA_COUNTRY_LABELS, 
    VISA_CATEGORY_LABELS, 
    NATIONALITY_LABELS, 
    STATE_LABELS, 
    ENTRY_TYPE_LABELS
  ]);

  // Initialize reference number from localStorage or URL query parameter and set active tab
  useEffect(() => {
    console.log('CommonScreen - initialization useEffect');
    // Get reference number from localStorage
    const referenceNumber = localStorage.getItem(STORAGE_KEY.SERVICE_REFERENCE_NUMBER);
    console.log('Found serviceReferenceNumber in localStorage:', referenceNumber);
    if (referenceNumber === "") {
      const url = new URL(window.location.href);
      const referenceNumber = url.searchParams.get('reference');
      if (referenceNumber) {
        localStorage.setItem(STORAGE_KEY.SERVICE_REFERENCE_NUMBER, referenceNumber);
      }
    }
    // Check for active tab in localStorage
    const storedActiveTab = localStorage.getItem(STORAGE_KEY.ACTIVE_TAB);
    console.log('Found activeTab in localStorage:', storedActiveTab);
    if (storedActiveTab && [TAB_NAME.SEARCH, TAB_NAME.FILL, TAB_NAME.SUMMARY].includes(storedActiveTab as TAB_NAME)) {
      console.log('Setting activeTab to:', storedActiveTab);
      setActiveTab(storedActiveTab as TAB_NAME);
      // Clear the activeTab from localStorage to avoid persisting it across refreshes
      localStorage.removeItem(STORAGE_KEY.ACTIVE_TAB);
      console.log('Removed activeTab from localStorage');
    }
  }, []);

  // Preload tabs that are likely to be used next
  useEffect(() => {
    // Preload the adjacent tabs
    const preloadAdjacentTabs = () => {
      if (activeTab === TAB_NAME.SEARCH) {
        import('./FillServiceForm'); // Preload the next tab
      } else if (activeTab === TAB_NAME.FILL) {
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

  // Actual search function that calls the API
  const handleSearch = useCallback(async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsSearching(true);
    setSearchError(null);
    
    try {
      // Validate required fields
      if (!searchData.passportNo && !searchData.referenceNo && !searchData.paxName) {
        throw new Error('Missing Search Criteria.');
      }
      
      // Prepare search parameters for the API
      const searchParams = {
        passport_number: searchData.passportNo || "",
        pax_name: searchData.paxName || "",
        reference_number: searchData.referenceNo || ""
      };
      
      console.log('Searching with params:', searchParams);
      
      // Call the searchPax API
      const apiResponse = await searchPax(searchParams);
      
      console.log('Search API response:', apiResponse);
      
      // Format the data to match our component's expected structure
      const formattedResults = {
        passengers_info: Array.isArray(apiResponse) ? apiResponse.map(pax => ({
          id: pax.id || 0,
          first_name: pax.first_name || '',
          last_name: pax.last_name || '',
          email: pax.email || '',
          dob: pax.dob || '',
          phone: pax.phone || '',
          processing_branch: pax.processing_branch || '',
          passport_number: pax.passport_number || '',
          passport_date_of_issue: pax.passport_date_of_issue || '',
          passport_date_of_expiry: pax.passport_date_of_expiry || '',
          passport_issue_at: pax.passport_issue_at || '',
          count_of_expired_passport: pax.count_of_expired_passport || '',
          expired_passport_number: pax.expired_passport_number || '',
          address_line_1: pax.address_line_1 || '',
          address_line_2: pax.address_line_2 || '',
          city: Number(pax.city) || 0,
          state: Number(pax.state) || 0,
          country: Number(pax.country) || 0,
          zip: pax.zip || '',
          occupation: pax.occupation || '',
          position: pax.position || '',
          last_updated_by: pax.last_updated_by || ''
        })) : []
      };
      
      setSearchResults(formattedResults);
      
      if ((!Array.isArray(apiResponse) || apiResponse.length === 0) && 
          (!formattedResults.passengers_info || formattedResults.passengers_info.length === 0)) {
        setSearchError('No results found');
      }
      
    } catch (error) {
      console.error('Error searching for pax:', error);
      setSearchError(error instanceof Error ? error.message : 'An error occurred while searching');
      setSearchResults({ passengers_info: [] });
    } finally {
      setIsSearching(false);
    }
  }, [searchData]);

  const handleClear = useCallback(() => {
    setSearchData({
      paxName: '',
      passportNo: '',
      referenceNo: ''
    });
    setSearchResults(undefined);
    setSearchError(null);
  }, []);

  // Handle tab change with preloading
  const handleTabChange = useCallback((tab: string) => {
    setActiveTab(tab as TAB_NAME);
  }, []);

  // Tab hover handler to initiate preloading
  const handleTabHover = useCallback((tab: string) => {
    if (tab !== activeTab && !tabsToPreload.includes(tab)) {
      setTabsToPreload(prev => [...prev, tab]);
      
      // Dynamically import the component when user hovers
      if (tab === TAB_NAME.FILL) {
        import('./FillServiceForm');
      } else if (tab === TAB_NAME.SUMMARY) {
        import('./ServiceRequestSummary');
      } else if (tab === TAB_NAME.SEARCH) {
        import('./SearchPaxContent');
      }
    }
  }, [activeTab, tabsToPreload]);

  // Function to render the appropriate content based on the active tab
  const renderTabContent = useCallback(() => {
    return (
      <Suspense fallback={<LoadingFallback />}>
        {activeTab === TAB_NAME.SEARCH && (
          <SearchPaxContent
            searchData={searchData}
            setSearchData={setSearchData}
            handleChange={handleChange}
            handleSearch={handleSearch}
            handleClear={handleClear}
            isSearching={isSearching}
            searchResults={searchResults}
            handleTabChange={handleTabChange}
          />
        )}
        
        {activeTab === TAB_NAME.FILL && (
          <FillServiceForm 
            handleTabChange={handleTabChange} 
            formMode={formMode} 
            setFormMode={setFormMode} 
            handleAddMore={handleAddMore} 
            visaRequests={visaRequests} 
            setVisaRequests={setVisaRequests}
          />
        )}
        
        {activeTab === TAB_NAME.SUMMARY && (
          <ServiceRequestSummary 
            handleTabChange={handleTabChange} 
            formMode={formMode} 
            setFormMode={setFormMode} 
            handleAddMore={handleAddMore}
          />
        )}
      </Suspense>
    );
  }, [
    activeTab, 
    searchData, 
    handleChange, 
    handleSearch, 
    handleClear, 
    isSearching, 
    formMode, 
    visaRequests, // Add visaRequests to dependencies
    setVisaRequests, // Add setVisaRequests to dependencies
    handleAddMore,
    handleTabChange
  ]);

  // Check URL parameters on component mount
  useEffect(() => {
    // Only run in browser, not during SSR
    if (typeof window !== 'undefined') {
      try {
        const url = new URL(window.location.href);
        const activeTabParam = url.searchParams.get('activeTab');
        const prefill = url.searchParams.get('prefill');
        
        // If activeTab parameter is present and valid, set it as the active tab
        if (activeTabParam && Object.values(TAB_NAME).includes(activeTabParam as TAB_NAME)) {
          setActiveTab(activeTabParam);
          
          // Preload the appropriate tab component
          if (activeTabParam === TAB_NAME.FILL) {
            setTabsToPreload(prev => [...prev, TAB_NAME.FILL]);
            import('./FillServiceForm');
          }
        }
      } catch (error) {
        console.error('Error parsing URL parameters:', error);
      }
    }
  }, []);

  return (
    <div className="py-6 px-[80px]">
      <h1 className="text-[28px] font-bold text-[#1C1C1C] mb-6">Service Request Form</h1>
      
      {/* Display search error if any */}
      {searchError && (
        <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded" role="alert">
          <span className="block sm:inline">{searchError}</span>
        </div>
      )}
      
      {/* Main Container with Tabs and Form */}
      <div className="bg-white rounded-2xl border border-[#E6EAF2] shadow-sm overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <div 
            className={`px-6 py-5 font-medium text-base cursor-pointer ${activeTab === TAB_NAME.SEARCH ? 'text-[#0B498B] border-b-[3px] border-[#0B498B] font-semibold' : 'text-gray-600'}`}
            onClick={() => handleTabChange(TAB_NAME.SEARCH)}
            onMouseEnter={() => handleTabHover(TAB_NAME.SEARCH)}
          >
            Search Pax
          </div>
          <div 
            className={`px-6 py-5 font-medium text-base cursor-pointer ${activeTab === TAB_NAME.FILL ? 'text-[#0B498B] border-b-[3px] border-[#0B498B] font-semibold' : 'text-gray-600'}`}
            onClick={() => handleTabChange(TAB_NAME.FILL)}
            onMouseEnter={() => handleTabHover(TAB_NAME.FILL)}
          >
            Fill Online Service Request Form
          </div>
          <div 
            className={`px-6 py-5 font-medium text-base cursor-pointer ${activeTab === TAB_NAME.SUMMARY ? 'text-[#0B498B] border-b-[3px] border-[#0B498B] font-semibold' : 'text-gray-600'}`}
            onClick={() => handleTabChange(TAB_NAME.SUMMARY)}
            onMouseEnter={() => handleTabHover(TAB_NAME.SUMMARY)}
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