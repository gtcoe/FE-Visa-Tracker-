"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { FORM_MODE } from '@component/constants/formConstants';
import PersonalInfoSection from './FormSections/PersonalInfoSection';
import AddressInfoSection from './FormSections/AddressInfoSection';
import VisaRequestSection from './FormSections/VisaRequestSection';
import DateInput from './FormSections/DateInput';
import {
  PROCESSING_BRANCH,
  PROCESSING_BRANCH_LABELS,
} from '@component/constants/dropdown/geographical';

const DEFAULT_VISA_REQUEST = {
  visaCountry: "",
  visaCategory: "",
  nationality: "",
  state: "",
  entryType: "",
  remark: "",
};

interface FillServiceFormProps {
  formMode: FORM_MODE;
  visaRequests: any[];
  setVisaRequests: React.Dispatch<React.SetStateAction<any[]>>;
  handleAddMore: () => void;
  handlePersonalInfoChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleTabChange: (tabName: string) => void;
  personalInfo: {
    firstName: string;
    lastName: string;
    emailId: string;
    dateOfBirth: string;
    processingBranch: string;
  };
  referNumber: string;
}

const FillServiceForm: React.FC<FillServiceFormProps> = ({
  formMode,
  visaRequests,
  setVisaRequests,
  handleAddMore,
  handlePersonalInfoChange,
  handleTabChange,
  personalInfo,
  referNumber,
}) => {
  const [personalDetails, setPersonalDetails] = useState({
    firstName: personalInfo.firstName || '',
    lastName: personalInfo.lastName || '',
    middleName: '',
    gender: 'Male',
    dob: personalInfo.dateOfBirth || '',
    mobile: '',
    email: personalInfo.emailId || '',
    altEmail: '',
    maritalStatus: 'Single',
  });

  const [addressInfo, setAddressInfo] = useState({
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'India',
  });

  const [travelInfo, setTravelInfo] = useState({
    travelDate: '',
    personalAppearance: '',
    fileNo: '',
    submissionType: 'tentative',
    isFixed: false,
  });

  const [passportInfo, setPassportInfo] = useState({
    passportNumber: '',
    dateOfIssue: '',
    dateOfExpiry: '',
    placeOfIssue: '',
    prevPassports: '0',
    prevPassportNumber: '',
  });

  useEffect(() => {
    // Update personalDetails when personalInfo props change
    setPersonalDetails(prev => ({
      ...prev,
      firstName: personalInfo.firstName || prev.firstName,
      lastName: personalInfo.lastName || prev.lastName,
      email: personalInfo.emailId || prev.email,
      dob: personalInfo.dateOfBirth || prev.dob,
    }));

    // Load data from localStorage if needed
    const loadDataFromStorage = async () => {
      try {
        // Define what data needs to be loaded
        const storedVisaRequests = localStorage.getItem('visaRequests');
        const storedPersonalDetails = localStorage.getItem('personalDetails');
        const storedAddressInfo = localStorage.getItem('addressInfo');
        const storedTravelInfo = localStorage.getItem('travelInfo');
        const storedPassportInfo = localStorage.getItem('passportInfo');

        // Parse and set visa requests if they exist
        if (storedVisaRequests) {
          const parsedRequests = JSON.parse(storedVisaRequests);
          if (Array.isArray(parsedRequests) && parsedRequests.length > 0) {
            setVisaRequests(parsedRequests);
            console.log('Loaded visa requests from storage:', parsedRequests);
          }
        }

        // Parse and set personal details if they exist
        if (storedPersonalDetails) {
          const parsedDetails = JSON.parse(storedPersonalDetails);
          setPersonalDetails(prev => ({
            ...prev,
            ...parsedDetails,
          }));
        }

        // Parse and set address info if it exists
        if (storedAddressInfo) {
          setAddressInfo(JSON.parse(storedAddressInfo));
        }

        // Parse and set travel info if it exists
        if (storedTravelInfo) {
          setTravelInfo(JSON.parse(storedTravelInfo));
        }

        // Parse and set passport info if it exists
        if (storedPassportInfo) {
          setPassportInfo(JSON.parse(storedPassportInfo));
        }
      } catch (error) {
        console.error('Error loading data from storage:', error);
      }
    };

    loadDataFromStorage();
  }, [personalInfo, setVisaRequests]);

  // Save all data to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('visaRequests', JSON.stringify(visaRequests));
      localStorage.setItem('personalDetails', JSON.stringify(personalDetails));
      localStorage.setItem('addressInfo', JSON.stringify(addressInfo));
      localStorage.setItem('travelInfo', JSON.stringify(travelInfo));
      localStorage.setItem('passportInfo', JSON.stringify(passportInfo));
    } catch (error) {
      console.error('Error saving data to storage:', error);
    }
  }, [visaRequests, personalDetails, addressInfo, travelInfo, passportInfo]);

  // Handle personal details changes
  const handlePersonalDetailsChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPersonalDetails(prev => ({
      ...prev,
      [name]: value
    }));

    // Also update the parent component if needed
    if (['firstName', 'lastName', 'email'].includes(name)) {
      const mappedName = name === 'email' ? 'emailId' : name;
      handlePersonalInfoChange({
        ...e,
        target: {
          ...e.target,
          name: mappedName
        }
      });
    }
  }, [handlePersonalInfoChange]);

  // Handle address info changes
  const handleAddressInfoChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAddressInfo(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  // Handle travel info changes
  const handleTravelInfoChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setTravelInfo(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  }, []);

  // Handle passport info changes
  const handlePassportInfoChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPassportInfo(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  // Handle visa info changes
  const handleVisaInfoChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, index: number) => {
    const { name, value } = e.target;
    
    console.log(`Changing visa field: ${name} at index ${index} to value: ${value}`);
    
    setVisaRequests(prev => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        [name]: value
      };
      return updated;
    });
  }, [setVisaRequests]);

  // Handle removing a visa request
  const handleRemoveVisaRequest = useCallback((index: number) => {
    setVisaRequests(prev => prev.filter((_, i) => i !== index));
  }, [setVisaRequests]);

  // Handle adding a new visa request
  const handleAddNewVisaRequest = useCallback(() => {
    console.log('Adding new visa request');
    
    try {
      // Update the state directly
      setVisaRequests(prev => [...prev, { ...DEFAULT_VISA_REQUEST }]);
      
      // Call the parent's handleAddMore function
      handleAddMore();
      
      console.log('New visa request added');
    } catch (error) {
      console.error('Error adding new visa request:', error);
    }
  }, [handleAddMore, setVisaRequests]);

  // Date change adapter for parent components
  const createDateChangeAdapter = useCallback((handler: any) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      handler({
        target: {
          name: e.target.name,
          value: e.target.value
        }
      });
    };
  }, []);

  // Adapts the DOB change to update personalInfo in parent
  const handleDOBChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    // Update local state
    setPersonalDetails(prev => ({
      ...prev,
      dob: e.target.value
    }));

    // Update parent state
    handlePersonalInfoChange({
      ...e,
      target: {
        ...e.target,
        name: 'dateOfBirth',
        value: e.target.value
      }
    });
  }, [handlePersonalInfoChange]);

  // Render the reference number section
  const renderReferenceSection = () => (
    <div className="mx-6 mt-[21px] mb-6 bg-white rounded-2xl border border-[#E6EAF2] shadow-sm overflow-hidden">
      <div className="bg-[#F6F7F9] py-4 px-6 border-b border-gray-200">
        <p className="text-[15px] font-medium text-[#0B498B]">
          {`Reference No: ${localStorage.getItem('serviceReferenceNumber') ? localStorage.getItem('serviceReferenceNumber') : referNumber}`}
        </p>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-4 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Processing Branch
            </label>
            <select
              name="processingBranch"
              value={personalInfo.processingBranch}
              onChange={handlePersonalInfoChange}
              className={`w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none ${formMode === FORM_MODE.VIEW ? 'bg-gray-100' : 'bg-white'}`}
              disabled={formMode === FORM_MODE.VIEW}
            >
              <option value={PROCESSING_BRANCH_LABELS[PROCESSING_BRANCH.VISAISTIC_DELHI]}>
                {PROCESSING_BRANCH_LABELS[PROCESSING_BRANCH.VISAISTIC_DELHI]}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-full bg-[#F4F6F9] pb-8">
      {/* Reference and Processing Branch Section */}
      {renderReferenceSection()}
      
      {/* Personal Information Section */}
      <PersonalInfoSection
        firstName={personalDetails.firstName}
        lastName={personalDetails.lastName}
        middleName={personalDetails.middleName}
        gender={personalDetails.gender}
        dob={personalDetails.dob}
        mobile={personalDetails.mobile}
        email={personalDetails.email}
        altEmail={personalDetails.altEmail}
        maritalStatus={personalDetails.maritalStatus}
        formMode={formMode}
        handleChange={handlePersonalDetailsChange}
      />
      
      {/* Address Information Section */}
      <AddressInfoSection
        addressLine1={addressInfo.addressLine1}
        addressLine2={addressInfo.addressLine2}
        city={addressInfo.city}
        state={addressInfo.state}
        zipCode={addressInfo.zipCode}
        country={addressInfo.country}
        formMode={formMode}
        handleChange={handleAddressInfoChange}
      />
      
      {/* Visa Requests Sections */}
      {visaRequests.map((request, index) => (
        <VisaRequestSection
          key={`visa-request-${index}`}
          request={request}
          index={index}
          totalRequests={visaRequests.length}
          handleVisaInfoChange={handleVisaInfoChange}
          handleRemoveVisaRequest={handleRemoveVisaRequest}
          handleAddNewVisaRequest={handleAddNewVisaRequest}
          formMode={formMode}
        />
      ))}
      
      {/* Navigation Buttons */}
      <div className="flex justify-end mx-6 mt-8">
        <button
          type="button"
          onClick={() => handleTabChange('upload-documents')}
          className="bg-[#0B498B] text-white px-10 py-2.5 rounded-md hover:bg-[#083968] transition-colors focus:outline-none focus:ring-1 focus:ring-[#0B498B] font-medium"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default React.memo(FillServiceForm); 