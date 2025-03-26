"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { FORM_MODE } from '@component/constants/formConstants';
import { nanoid } from 'nanoid';
// Import the optimized form
import FillServiceForm from './FillServiceForm.optimized';
import { PROCESSING_BRANCH_LABELS, PROCESSING_BRANCH } from '@component/constants/dropdown/geographical';

// Default state for visa requests
const DEFAULT_VISA_REQUEST = {
  visaCountry: "",
  visaCategory: "",
  nationality: "",
  state: "",
  entryType: "",
  remark: "",
};

// Default state for personal info
const DEFAULT_PERSONAL_INFO = {
  firstName: "",
  lastName: "",
  emailId: "",
  dateOfBirth: "",
  processingBranch: PROCESSING_BRANCH_LABELS[PROCESSING_BRANCH.VISAISTIC_DELHI],
};

const CommonScreenOptimized = () => {
  const router = useRouter();
  
  // State for the current active tab
  const [activeTab, setActiveTab] = useState<string>('fill-service');
  
  // State for visa requests (allowing for multiple)
  const [visaRequests, setVisaRequests] = useState<any[]>([{ ...DEFAULT_VISA_REQUEST }]);
  
  // State for personal information
  const [personalInfo, setPersonalInfo] = useState<any>({ ...DEFAULT_PERSONAL_INFO });
  
  // Generate a unique reference number
  const [referNumber, setReferNumber] = useState<string>('');
  
  // On component mount, generate a reference number if needed
  useEffect(() => {
    // Check if we have a stored reference number
    const storedReferNumber = localStorage.getItem('serviceReferenceNumber');
    
    if (storedReferNumber) {
      setReferNumber(storedReferNumber);
    } else {
      // Generate a new reference number
      const newReferNumber = `REF${nanoid(8)}`;
      setReferNumber(newReferNumber);
      localStorage.setItem('serviceReferenceNumber', newReferNumber);
    }
    
    // Attempt to load saved data
    const loadSavedData = () => {
      try {
        // Load personal info
        const savedPersonalInfo = localStorage.getItem('personalInfo');
        if (savedPersonalInfo) {
          setPersonalInfo(JSON.parse(savedPersonalInfo));
        }
        
        // Load visa requests (the optimized component will handle this itself)
      } catch (error) {
        console.error('Error loading saved data:', error);
      }
    };
    
    loadSavedData();
  }, []);
  
  // Save personal info when it changes
  useEffect(() => {
    try {
      localStorage.setItem('personalInfo', JSON.stringify(personalInfo));
    } catch (error) {
      console.error('Error saving personal info:', error);
    }
  }, [personalInfo]);
  
  // Handle tab change
  const handleTabChange = useCallback((tabName: string) => {
    console.log(`Changing tab to: ${tabName}`);
    setActiveTab(tabName);
  }, []);
  
  // Handle personal info changes
  const handlePersonalInfoChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log(`Updating personal info field: ${name} with value: ${value}`);
    
    setPersonalInfo((prev: typeof DEFAULT_PERSONAL_INFO) => ({
      ...prev,
      [name]: value
    }));
  }, []);
  
  // Handle adding more visa requests
  const handleAddMore = useCallback(() => {
    console.log('Parent: Adding a new visa request');
    
    // This just logs - the actual state update happens in the child component
    // This ensures we avoid conflicts with the state management
  }, []);
  
  // Render the proper tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case 'fill-service':
        return (
          <FillServiceForm
            formMode={FORM_MODE.EDIT}
            visaRequests={visaRequests}
            setVisaRequests={setVisaRequests}
            handleAddMore={handleAddMore}
            handlePersonalInfoChange={handlePersonalInfoChange}
            handleTabChange={handleTabChange}
            personalInfo={personalInfo}
            referNumber={referNumber}
          />
        );
      case 'upload-documents':
        return (
          <div className="p-6">
            <h2 className="text-xl font-medium">Upload Documents</h2>
            <p>Document upload functionality will be implemented here.</p>
            <div className="mt-4">
              <button
                type="button"
                onClick={() => handleTabChange('fill-service')}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md mr-4"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => handleTabChange('payment')}
                className="bg-[#0B498B] text-white px-4 py-2 rounded-md"
              >
                Next
              </button>
            </div>
          </div>
        );
      case 'payment':
        return (
          <div className="p-6">
            <h2 className="text-xl font-medium">Payment</h2>
            <p>Payment functionality will be implemented here.</p>
            <div className="mt-4">
              <button
                type="button"
                onClick={() => handleTabChange('upload-documents')}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md mr-4"
              >
                Back
              </button>
              <button
                type="button"
                className="bg-[#0B498B] text-white px-4 py-2 rounded-md"
              >
                Complete Payment
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-screen bg-[#F4F6F9]">
      {/* Navigation tabs */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex -mb-px">
            <button
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm mx-4 ${
                activeTab === 'fill-service'
                  ? 'border-[#0B498B] text-[#0B498B]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => handleTabChange('fill-service')}
            >
              Fill Service Form
            </button>
            <button
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm mx-4 ${
                activeTab === 'upload-documents'
                  ? 'border-[#0B498B] text-[#0B498B]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => handleTabChange('upload-documents')}
            >
              Upload Documents
            </button>
            <button
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm mx-4 ${
                activeTab === 'payment'
                  ? 'border-[#0B498B] text-[#0B498B]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => handleTabChange('payment')}
            >
              Payment
            </button>
          </nav>
        </div>
      </div>
      
      {/* Tab content */}
      <div className="max-w-7xl mx-auto">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default CommonScreenOptimized; 