"use client";

import React, { useState, useMemo, useCallback, useRef, useEffect, ChangeEvent } from 'react';

// Define a more flexible type for change events
type FormChangeEvent = {
  target: {
    name: string;
    value: string;
  };
};

// Define interfaces for props and event handlers
interface DateInputProps {
  name: string;
  value: string;
  onChange: (e: FormChangeEvent) => void;
  label: string;
  required?: boolean;
  placeholder?: string;
}

// Custom DateInput component that supports both manual entry and date picker
const DateInput: React.FC<DateInputProps> = ({ 
  name, 
  value, 
  onChange, 
  label, 
  required = false,
  placeholder = "DD/MM/YYYY"
}) => {
  const [inputValue, setInputValue] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hiddenDateInputRef = useRef<HTMLInputElement>(null);
  
  // Convert ISO format to display format (DD/MM/YYYY)
  useEffect(() => {
    if (value) {
      try {
        // If it's already in ISO format, convert to DD/MM/YYYY for display
        if (value.includes('-')) {
          const date = new Date(value);
          if (!isNaN(date.getTime())) {
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            setInputValue(`${day}/${month}/${year}`);
          }
        } else {
          // If it's already in DD/MM/YYYY format, use it directly
          setInputValue(value);
        }
      } catch (e) {
        setInputValue(value || '');
      }
    } else {
      setInputValue('');
    }
  }, [value]);
  
  // Focus and initialize the date picker when it appears
  useEffect(() => {
    if (showPicker && pickerRef.current) {
      // Set default date to today if no value is present
      if (!value && pickerRef.current) {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        pickerRef.current.value = `${year}-${month}-${day}`;
      }
      
      // Focus the picker
      setTimeout(() => {
        if (pickerRef.current) {
          pickerRef.current.focus();
        }
      }, 50);
    }
  }, [showPicker, value]);
  
  // Handle clicking outside to close the date picker
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowPicker(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Handle manual typing in DD/MM/YYYY format
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    setInputValue(rawValue);
    
    // Auto-add slashes while typing (if not deleting)
    if (rawValue.length === 2 && inputValue.length < 2 && !rawValue.includes('/')) {
      setInputValue(rawValue + '/');
    } else if (rawValue.length === 5 && inputValue.length < 5 && rawValue.indexOf('/', 3) === -1) {
      setInputValue(rawValue + '/');
    }
    
    // Convert DD/MM/YYYY to YYYY-MM-DD for the actual value
    if (rawValue.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
      const [day, month, year] = rawValue.split('/');
      const isoDate = `${year}-${month}-${day}`;
      // Create a synthetic event to pass to the parent onChange handler
      const syntheticEvent: FormChangeEvent = {
        target: {
          name,
          value: isoDate
        }
      };
      onChange(syntheticEvent);
    }
  };
  
  // Handle date selection from the picker
  const handleDatePickerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isoDate = e.target.value; // YYYY-MM-DD
    
    // Create a synthetic event to pass to the parent onChange handler
    const syntheticEvent: FormChangeEvent = {
      target: {
        name,
        value: isoDate
      }
    };
    
    onChange(syntheticEvent);
    
    // Convert ISO to DD/MM/YYYY for display
    if (isoDate) {
      const [year, month, day] = isoDate.split('-');
      setInputValue(`${day}/${month}/${year}`);
    }
  };
  
  // Toggle date picker visibility
  const openCalendar = useCallback(() => {
    if (hiddenDateInputRef.current) {
      // Use the native date picker
      hiddenDateInputRef.current.showPicker?.();
    }
  }, []);
  
  // Handle keyboard accessibility
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setShowPicker(false);
    }
  }, []);
  
  return (
    <div ref={containerRef} onKeyDown={handleKeyDown}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] pr-10"
          aria-label={`${label} in format DD/MM/YYYY`}
        />
        <button
          type="button"
          onClick={openCalendar}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Open date picker"
          title="Open date picker"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>
        
        {/* Hidden date input for direct calendar access */}
        <input
          ref={hiddenDateInputRef}
          type="date"
          className="sr-only"
          defaultValue={value || ''}
          onChange={handleDatePickerChange}
          aria-hidden="true"
        />
        
        {showPicker && (
          <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg border border-gray-300">
            <input
              ref={pickerRef}
              type="date"
              defaultValue={value || ''}
              onChange={handleDatePickerChange}
              className="w-full px-3 py-2 border-0 focus:outline-none focus:ring-1 focus:ring-[#0B498B]"
              aria-label={`Date picker for ${label}`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

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

  // Adapter function to convert the form handlers to the DateInput component's handler
  const createDateChangeAdapter = (handler: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void) => {
    return (e: FormChangeEvent) => {
      handler(e as any); // Safe to cast here since our FormChangeEvent has the necessary properties
    };
  };

  return (
    <div className="space-y-6">
      {/* Reference Number */}
      <div className="mx-6 mt-[21px] mb-6  bg-white rounded-2xl border border-[#E6EAF2] shadow-sm overflow-hidden">
        <div className="bg-[#F6F7F9] py-4 px-6 border-b border-gray-200">
          <p className="text-[15px] font-medium text-[#0B498B]">Reference No: MMI2345</p>
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
            
            <DateInput
              name="dateOfBirth"
              value={personalInfo.dateOfBirth}
              onChange={createDateChangeAdapter(handlePersonalInfoChange)}
              label="Date of Birth"
            />

          <div className="mt-4 col-span-1">
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
      </div>
      
      {/* Passport Details */}
      <div className="mx-6 mt-[21px] mb-6  bg-white rounded-2xl border border-[#E6EAF2] shadow-sm overflow-hidden">
        <div className="bg-[#F6F7F9] py-4 px-6 border-b border-gray-200">
          <p className="text-[15px] font-medium text-[#0B498B]">Passport Details</p>
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
            
            <DateInput
              name="dateOfIssue"
              value={passportInfo.dateOfIssue}
              onChange={createDateChangeAdapter(handlePassportInfoChange)}
              label="Date of Issue"
            />
            
            <DateInput
              name="dateOfExpiry"
              value={passportInfo.dateOfExpiry}
              onChange={createDateChangeAdapter(handlePassportInfoChange)}
              label="Date of Expiry"
            />
            
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
          
          <div className="grid grid-cols-4 gap-6 mt-4">
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
          <p className="text-[15px] font-medium text-[#0B498B]">Travel Details</p>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-4 gap-6">
            <DateInput
              name="travelDate"
              value={travelInfo.travelDate}
              onChange={createDateChangeAdapter(handleTravelInfoChange)}
              label="Travel Date"
              required={true}
            />
            
            <DateInput
              name="personalAppearance"
              value={travelInfo.personalAppearance}
              onChange={createDateChangeAdapter(handleTravelInfoChange)}
              label="Personal Appearance/Interview Date"
            />
            
            <div className='col-span-2'>
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
          <p className="text-[15px] font-medium text-[#0B498B]">Visa Requests</p>
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
          
          <div className="grid grid-cols-4 gap-6 mt-4">
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
          <p className="text-[15px] font-medium text-[#0B498B]">Address Details</p>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-4 gap-6">
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
          
          <div className="grid grid-cols-4 gap-6 mt-4">
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
          <p className="text-[15px] font-medium text-[#0B498B]">MI Fields</p>
        </div>
        
        <div className="p-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Olvt Number
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