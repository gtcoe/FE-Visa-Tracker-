"use client";

import React, { useState, useMemo, useCallback } from 'react';

const FillServiceForm = () => {
  // Split form state into logical groups
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    dateOfBirth: '',
    processingBranch: 'Mumbai',
  });

  const [passportInfo, setPassportInfo] = useState({
    passportNumber: '',
    dateOfIssue: '',
    dateOfExpiry: '',
    issueAt: '',
    noOfExpiredPassport: '',
    expiredPassportNumber: '',
  });

  const [travelInfo, setTravelInfo] = useState({
    travelDate: '2025-02-25',
    personalAppearance: '',
    fileNo: '',
  });

  const [visaInfo, setVisaInfo] = useState({
    visaCountry: 'Netherland',
    visaCategory: 'Business',
    nationality: 'Indian',
    state: 'Delhi',
    entryType: 'Normal',
    remark: '',
  });

  const [addressInfo, setAddressInfo] = useState({
    addressLine1: '',
    addressLine2: '',
    country: '',
    state: '',
    city: '',
    zip: '',
    occupation: '',
    position: '',
  });

  const [miFields, setMiFields] = useState({
    oldNumber: 'CCJYHKNEJ253735'
  });
  
  const [submissionType, setSubmissionType] = useState('tentative');
  const [isFixed, setIsFixed] = useState(false);

  // Memoized derived values
  const isFormValid = useMemo(() => {
    return personalInfo.firstName && 
           passportInfo.passportNumber && 
           visaInfo.visaCountry;
  }, [personalInfo.firstName, passportInfo.passportNumber, visaInfo.visaCountry]);

  // Optimized change handlers with useCallback
  const handlePersonalInfoChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPersonalInfo(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handlePassportInfoChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPassportInfo(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleTravelInfoChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTravelInfo(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleVisaInfoChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setVisaInfo(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleAddressInfoChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAddressInfo(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleMiFieldsChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setMiFields(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', {
      ...personalInfo,
      ...passportInfo,
      ...travelInfo,
      ...visaInfo,
      ...addressInfo,
      ...miFields,
      submissionType,
      isFixed
    });
  }, [personalInfo, passportInfo, travelInfo, visaInfo, addressInfo, miFields, submissionType, isFixed]);

  const handleRadioChange = useCallback((value: string) => {
    setSubmissionType(value);
  }, []);

  const handleCheckboxChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFixed(e.target.checked);
  }, []);

  const handleAddMore = useCallback(() => {
    console.log('Add more visa requests');
  }, []);

  const handleUpdateApplicant = useCallback(() => {
    console.log('Update applicant');
  }, []);

  const handleBack = useCallback(() => {
    console.log('Back button clicked');
  }, []);

  const handleUpdateAndContinue = useCallback(() => {
    console.log('Update and continue');
  }, []);

  // Function to format date for display
  const formatDateForDisplay = useCallback((isoDate: string) => {
    if (!isoDate) return '';
    try {
      const date = new Date(isoDate);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (e) {
      return isoDate;
    }
  }, []);

  return (
    <div className="space-y-6">
      {/* Reference Number */}
      <div className="mx-6 mt-[21px] mb-6  bg-white rounded-2xl border border-[#E6EAF2] shadow-sm overflow-hidden">
        <div className="bg-[#F6F7F9] py-4 px-6 border-b border-gray-200">
          <p className="text-base font-medium text-[#1C1C1C]">Reference No: MMI2345</p>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={personalInfo.firstName}
                onChange={handlePersonalInfoChange}
                placeholder="Enter first name"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A]"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={personalInfo.lastName}
                onChange={handlePersonalInfoChange}
                placeholder="Enter Name"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A]"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Id
              </label>
              <input
                type="email"
                name="emailId"
                value={personalInfo.emailId}
                onChange={handlePersonalInfoChange}
                placeholder="Enter Email id"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A]"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={personalInfo.dateOfBirth}
                onChange={handlePersonalInfoChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none bg-white"
              />
            </div>
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Processing Branch
            </label>
            <select
              name="processingBranch"
              value={personalInfo.processingBranch}
              onChange={handlePersonalInfoChange}
              className="w-full max-w-xs px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none bg-white"
            >
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Passport Details */}
      <div className="mx-6 mt-[21px] mb-6  bg-white rounded-2xl border border-[#E6EAF2] shadow-sm overflow-hidden">
        <div className="bg-[#F6F7F9] py-4 px-6 border-b border-gray-200">
          <p className="text-base font-medium text-[#1C1C1C]">Passport Details</p>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Passport Number
              </label>
              <input
                type="text"
                name="passportNumber"
                value={passportInfo.passportNumber}
                onChange={handlePassportInfoChange}
                placeholder="Enter passport number"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A]"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date of Issue
              </label>
              <input
                type="date"
                name="dateOfIssue"
                value={passportInfo.dateOfIssue}
                onChange={handlePassportInfoChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none bg-white"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date of Expiry
              </label>
              <input
                type="date"
                name="dateOfExpiry"
                value={passportInfo.dateOfExpiry}
                onChange={handlePassportInfoChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none bg-white"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Issue At
              </label>
              <input
                type="text"
                name="issueAt"
                value={passportInfo.issueAt}
                onChange={handlePassportInfoChange}
                placeholder="Enter issue location"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A]"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                No of Expired Passport
              </label>
              <select
                name="noOfExpiredPassport"
                value={passportInfo.noOfExpiredPassport}
                onChange={handlePassportInfoChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none bg-white"
              >
                <option value="">Select</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3+</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expired Passport Number
              </label>
              <input
                type="text"
                name="expiredPassportNumber"
                value={passportInfo.expiredPassportNumber}
                onChange={handlePassportInfoChange}
                placeholder="Enter expired passport number"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A]"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Travel Details */}
      <div className="mx-6 mt-[21px] mb-6 bg-white rounded-2xl border border-[#E6EAF2] shadow-sm overflow-hidden">
        <div className="bg-[#F6F7F9] py-4 px-6 border-b border-gray-200">
          <p className="text-base font-medium text-[#1C1C1C]">Travel Details</p>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Travel Date<span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="travelDate"
                value={travelInfo.travelDate}
                onChange={handleTravelInfoChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none bg-white"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Personal Appearance/Interview Date
              </label>
              <input
                type="date"
                name="personalAppearance"
                value={travelInfo.personalAppearance}
                onChange={handleTravelInfoChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none bg-white"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                File No/Company Name
              </label>
              <input
                type="text"
                name="fileNo"
                value={travelInfo.fileNo}
                onChange={handleTravelInfoChange}
                placeholder="Enter name"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A]"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-8 mt-4">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="tentative"
                checked={submissionType === 'tentative'}
                onChange={() => handleRadioChange('tentative')}
                className="h-4 w-4 text-[#0B498B] focus:ring-[#0B498B]"
              />
              <label htmlFor="tentative" className="text-sm font-medium text-gray-700">
                Tentative
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="fixed"
                checked={submissionType === 'fixed'}
                onChange={() => handleRadioChange('fixed')}
                className="h-4 w-4 text-[#0B498B] focus:ring-[#0B498B]"
              />
              <label htmlFor="fixed" className="text-sm font-medium text-gray-700">
                Fixed
              </label>
            </div>
            
            <div className="ml-12 text-sm font-medium text-gray-700">
              Priority Submission
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="isFixed"
                checked={isFixed}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-[#0B498B] focus:ring-[#0B498B] rounded"
              />
              <label htmlFor="isFixed" className="text-sm font-medium text-gray-700">
                Fixed
              </label>
            </div>
          </div>
        </div>
      </div>
      
      {/* Visa Requests */}
      <div className="mx-6 mt-[21px] mb-6 bg-white rounded-2xl border border-[#E6EAF2] shadow-sm overflow-hidden">
        <div className="bg-[#F6F7F9] py-4 px-6 border-b border-gray-200">
          <p className="text-base font-medium text-[#1C1C1C]">Visa Requests</p>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Visa Country<span className="text-red-500">*</span>
              </label>
              <select
                name="visaCountry"
                value={visaInfo.visaCountry}
                onChange={handleVisaInfoChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none bg-white"
              >
                <option value="Netherland">Netherland</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Visa Category<span className="text-red-500">*</span>
              </label>
              <select
                name="visaCategory"
                value={visaInfo.visaCategory}
                onChange={handleVisaInfoChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none bg-white"
              >
                <option value="Business">Business</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nationality<span className="text-red-500">*</span>
              </label>
              <select
                name="nationality"
                value={visaInfo.nationality}
                onChange={handleVisaInfoChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none bg-white"
              >
                <option value="Indian">Indian</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State<span className="text-red-500">*</span>
              </label>
              <select
                name="state"
                value={visaInfo.state}
                onChange={handleVisaInfoChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none bg-white"
              >
                <option value="Delhi">Delhi</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Entry Type<span className="text-red-500">*</span>
              </label>
              <select
                name="entryType"
                value={visaInfo.entryType}
                onChange={handleVisaInfoChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none bg-white"
              >
                <option value="Normal">Normal</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Remark
              </label>
              <input
                type="text"
                name="remark"
                value={visaInfo.remark}
                onChange={handleVisaInfoChange}
                placeholder=""
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A]"
              />
            </div>
          </div>
          
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={handleAddMore}
              className="bg-[#0B498B] text-white px-4 py-2 rounded-md hover:bg-[#083968] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B498B] focus:ring-opacity-50 font-medium"
            >
              Add More
            </button>
          </div>
        </div>
      </div>
      
      {/* Address Details */}
      <div className="mx-6 mt-[21px] mb-6 bg-white rounded-2xl border border-[#E6EAF2] shadow-sm overflow-hidden">
        <div className="bg-[#F6F7F9] py-4 px-6 border-b border-gray-200">
          <p className="text-base font-medium text-[#1C1C1C]">Address Details</p>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address Line 1
              </label>
              <input
                type="text"
                name="addressLine1"
                value={addressInfo.addressLine1}
                onChange={handleAddressInfoChange}
                placeholder="Enter first name"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A]"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address Line 2
              </label>
              <input
                type="text"
                name="addressLine2"
                value={addressInfo.addressLine2}
                onChange={handleAddressInfoChange}
                placeholder="Enter Name"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A]"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <select
                name="country"
                value={addressInfo.country}
                onChange={handleAddressInfoChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none bg-white"
              >
                <option value="">Select</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State
              </label>
              <select
                name="state"
                value={addressInfo.state}
                onChange={handleAddressInfoChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none bg-white"
              >
                <option value="">Select</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <select
                name="city"
                value={addressInfo.city}
                onChange={handleAddressInfoChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none bg-white"
              >
                <option value="">Select</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Zip
              </label>
              <input
                type="text"
                name="zip"
                value={addressInfo.zip}
                onChange={handleAddressInfoChange}
                placeholder="Enter Zip"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A]"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Occupation
              </label>
              <input
                type="text"
                name="occupation"
                value={addressInfo.occupation}
                onChange={handleAddressInfoChange}
                placeholder="Enter Occupation"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A]"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Position
              </label>
              <input
                type="text"
                name="position"
                value={addressInfo.position}
                onChange={handleAddressInfoChange}
                placeholder="Enter Position"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A]"
              />
            </div>
          </div>
          
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={handleUpdateApplicant}
              className="bg-[#0B498B] text-white px-4 py-2 rounded-md hover:bg-[#083968] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B498B] focus:ring-opacity-50 font-medium"
            >
              Update Applicant
            </button>
          </div>
        </div>
      </div>
      
      {/* MI Fields */}
      <div className="mx-6 mt-[21px] mb-6 bg-white rounded-2xl border border-[#E6EAF2] shadow-sm overflow-hidden">
        <div className="bg-[#F6F7F9] py-4 px-6 border-b border-gray-200">
          <p className="text-base font-medium text-[#1C1C1C]">MI Fields</p>
        </div>
        
        <div className="p-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Old Number*
            </label>
            <input
              type="text"
              name="oldNumber"
              value={miFields.oldNumber}
              onChange={handleMiFieldsChange}
              className="w-full max-w-md px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A]"
              readOnly
            />
          </div>
        </div>
      </div>
      
      {/* Bottom Buttons */}
      <div className="flex justify-between items-center">
        <button
          type="button"
          onClick={handleBack}
          className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B498B]"
        >
          Back
        </button>
        
        <button
          type="button"
          onClick={handleUpdateAndContinue}
          className="bg-[#0B498B] text-white px-6 py-2 rounded-md hover:bg-[#083968] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B498B] focus:ring-opacity-50 font-medium"
          disabled={!isFormValid}
        >
          Update & Continue
        </button>
      </div>
    </div>
  );
};

export default React.memo(FillServiceForm); 