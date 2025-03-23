"use client";

import React, { useState, useMemo, useCallback, useRef, useEffect, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { addApplicationStep3, Step3RequestPayload } from '@component/api/application';
import { 
  COUNTRY, COUNTRY_LABELS, 
  STATE, STATE_LABELS, 
  VISA_COUNTRY, VISA_COUNTRY_LABELS, 
  VISA_CATEGORY, VISA_CATEGORY_LABELS,
  NATIONALITY, NATIONALITY_LABELS,
  ENTRY_TYPE, ENTRY_TYPE_LABELS,
  PROCESSING_BRANCH, PROCESSING_BRANCH_LABELS
} from '@component/constants/dropdown/geographical';

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
  handleTabChange?: (tabName: string) => void;
}

// Custom DateInput component that supports both manual entry and date picker
const DateInput: React.FC<DateInputProps> = ({ 
  name, 
  value, 
  onChange, 
  handleTabChange,
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

const FillServiceForm = ({ handleTabChange }: { handleTabChange: (tabName: string) => void }) => {
  const router = useRouter();
  const [applicationId, setApplicationId] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Try to get application ID from localStorage or URL
  useEffect(() => {
    // Check localStorage for application ID
    const storedAppId = localStorage.getItem('applicationId');
    console.log('==========>storedAppId', storedAppId);
    if (storedAppId) {
      console.log('==========>storedAppId2', storedAppId);
      setApplicationId(parseInt(storedAppId, 10));
    }
    
    // You could also check URL params if available
  }, []);
  
  // Split form state into logical groups
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    dateOfBirth: '',
    processingBranch: PROCESSING_BRANCH_LABELS[PROCESSING_BRANCH.VISAISTIC_DELHI],
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

  const [visaRequests, setVisaRequests] = useState([
    {
      visaCountry: VISA_COUNTRY_LABELS[VISA_COUNTRY.NETHERLAND],
      visaCategory: VISA_CATEGORY_LABELS[VISA_CATEGORY.BUSINESS],
      nationality: NATIONALITY_LABELS[NATIONALITY.INDIAN],
      state: STATE_LABELS[STATE.DELHI],
      entryType: ENTRY_TYPE_LABELS[ENTRY_TYPE.NORMAL],
      remark: '',
    }
  ]);

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
    oldNumber: ''
  });
  
  const [submissionType, setSubmissionType] = useState('tentative');
  const [isFixed, setIsFixed] = useState(false);

  // Memoized derived values
  const isFormValid = useMemo(() => {
    return personalInfo.firstName && 
           passportInfo.passportNumber && 
           visaRequests.every(request => request.visaCountry);
  }, [personalInfo.firstName, passportInfo.passportNumber, visaRequests]);

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

  const handleVisaInfoChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, index: number) => {
    const { name, value } = e.target;
    setVisaRequests(prev => {
      const newRequests = [...prev];
      newRequests[index] = {
        ...newRequests[index],
        [name]: value
      };
      return newRequests;
    });
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

  // Define mappings for dropdowns to numeric values required by API
  const countryMap = useMemo(() => 
    Object.entries(COUNTRY_LABELS).reduce((acc, [numValue, label]) => {
      acc[label] = parseInt(numValue, 10);
      return acc;
    }, {} as Record<string, number>)
  , []);
  
  const stateMap = useMemo(() => 
    Object.entries(STATE_LABELS).reduce((acc, [numValue, label]) => {
      acc[label] = parseInt(numValue, 10);
      return acc;
    }, {} as Record<string, number>)
  , []);
  
  const processingBranchMap = useMemo(() => ({
    [PROCESSING_BRANCH_LABELS[PROCESSING_BRANCH.VISAISTIC_DELHI]]: PROCESSING_BRANCH.VISAISTIC_DELHI
  }), []);
  
  const visaCountryMap = useMemo(() => ({
    [VISA_COUNTRY_LABELS[VISA_COUNTRY.NETHERLAND]]: VISA_COUNTRY.NETHERLAND
  }), []);
  
  const visaCategoryMap = useMemo(() => ({
    [VISA_CATEGORY_LABELS[VISA_CATEGORY.BUSINESS]]: VISA_CATEGORY.BUSINESS
  }), []);
  
  const nationalityMap = useMemo(() => ({
    [NATIONALITY_LABELS[NATIONALITY.INDIAN]]: NATIONALITY.INDIAN
  }), []);
  
  const entryTypeMap = useMemo(() => ({
    [ENTRY_TYPE_LABELS[ENTRY_TYPE.NORMAL]]: ENTRY_TYPE.NORMAL
  }), []);
  
  const handleRadioChange = useCallback((value: string) => {
    setSubmissionType(value);
  }, []);
  
  const handleCheckboxChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFixed(e.target.checked);
  }, []);
  
  const handleAddMore = useCallback(() => {
    setVisaRequests(prev => [
      ...prev,
      {
        visaCountry: VISA_COUNTRY_LABELS[VISA_COUNTRY.NETHERLAND],
        visaCategory: VISA_CATEGORY_LABELS[VISA_CATEGORY.BUSINESS],
        nationality: NATIONALITY_LABELS[NATIONALITY.INDIAN],
        state: STATE_LABELS[STATE.DELHI],
        entryType: ENTRY_TYPE_LABELS[ENTRY_TYPE.NORMAL],
        remark: ''
      }
    ]);
  }, []);
  
  // Modified handleSubmit with API integration
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Force applicationId to be a number - default to 0 if null (API will handle this)
    const appId = applicationId || 0;
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Prepare payload according to API requirements
      const payload: Step3RequestPayload = {
        personal_info: {
          first_name: personalInfo.firstName,
          last_name: personalInfo.lastName,
          email_id: personalInfo.emailId,
          date_of_birth: personalInfo.dateOfBirth,
          processing_branch: processingBranchMap[personalInfo.processingBranch] || 1
        },
        passport_info: {
          passport_number: passportInfo.passportNumber,
          date_of_issue: passportInfo.dateOfIssue,
          date_of_expiry: passportInfo.dateOfExpiry,
          issue_at: passportInfo.issueAt,
          no_of_expired_passport: parseInt(passportInfo.noOfExpiredPassport, 10) || 0,
          expired_passport_number: passportInfo.expiredPassportNumber
        },
        travel_info: {
          travel_date: travelInfo.travelDate,
          interview_date: travelInfo.personalAppearance || travelInfo.travelDate, // Fallback to travel date if no interview date
          file_no: travelInfo.fileNo,
          is_travel_date_tentative: submissionType === 'tentative' ? 1 : 0,
          priority_submission: isFixed ? 1 : 0
        },
        visa_requests: visaRequests.map(request => ({
          visa_country: visaCountryMap[request.visaCountry] || 1,
          visa_category: visaCategoryMap[request.visaCategory] || 1,
          nationality: nationalityMap[request.nationality] || 1,
          state: stateMap[request.state] || 6, // Default to Delhi
          entry_type: entryTypeMap[request.entryType] || 1,
          remark: request.remark
        })),
        address_info: {
          address_line1: addressInfo.addressLine1,
          address_line2: addressInfo.addressLine2,
          country: countryMap[addressInfo.country] || 1, // Default to India
          state: stateMap[addressInfo.state] || 6, // Default to Delhi
          city: parseInt(addressInfo.city, 10) || 1, // Default to first city
          zip: addressInfo.zip,
          occupation: addressInfo.occupation,
          position: addressInfo.position
        },
        mi_fields: {
          olvt_number: miFields.oldNumber
        },
        application_id: appId,
        is_sub_request: 0
      };
      
      // Submit to API
      const response = await addApplicationStep3(payload);
      
      if (response.status) {
        // Success handling - proceed to next step
        console.log('Step 3 data submitted successfully:', response.data);
        
        // Store the response data in localStorage for use in summary page
        if (response.data && response.data.application_requests) {
          localStorage.setItem('applicationInfo', JSON.stringify(response.data.application_requests));
        }
        
        // Navigate to next step or show success message
        handleTabChange('summary');
      } else {
        setError(response.message || 'Failed to submit application. Please try again.');
      }
    } catch (error: any) {
      setError(error.message || 'An error occurred while submitting the form. Please try again.');
      console.error('Error submitting step 3 data:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [
    applicationId,
    personalInfo,
    passportInfo,
    travelInfo,
    visaRequests,
    addressInfo,
    miFields,
    submissionType,
    isFixed,
    router,
    countryMap,
    stateMap,
    processingBranchMap,
    visaCountryMap,
    visaCategoryMap,
    nationalityMap,
    entryTypeMap,
    handleTabChange
  ]);
  
  const handleUpdateApplicant = useCallback(async () => {
    try {
      await handleSubmit({ preventDefault: () => {} } as React.FormEvent);
    } catch (error) {
      console.error('Error in handleUpdateApplicant:', error);
    }
  }, [handleSubmit]);
  
  const handleBack = useCallback(() => {
    router.back();
  }, [router]);
  
  const handleUpdateAndContinue = useCallback(async () => {
    try {
      await handleSubmit({ preventDefault: () => {} } as React.FormEvent);
    } catch (error) {
      console.error('Error in handleUpdateAndContinue:', error);
    }
  }, [handleSubmit]);

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

  // Define processing branch options (with only Visaistic - Delhi)
  const processingBranchOptions = useMemo(() => [
    { value: PROCESSING_BRANCH_LABELS[PROCESSING_BRANCH.VISAISTIC_DELHI], 
      label: PROCESSING_BRANCH_LABELS[PROCESSING_BRANCH.VISAISTIC_DELHI] }
  ], []);

  // Define country options from constants
  const countryOptions = useMemo(() => [
    { value: '', label: 'Select' },
    ...Object.entries(COUNTRY_LABELS).map(([value, label]) => ({
      value: label,
      label: label
    }))
  ], []);
  
  // Define Indian state options from constants
  const indianStateOptions = useMemo(() => [
    { value: '', label: 'Select' },
    ...Object.entries(STATE_LABELS).map(([value, label]) => ({
      value: label,
      label: label
    }))
  ], []);

  return (
    <div className="space-y-6">
      {/* Display error message if any */}
      {error && (
        <div className="mx-6 mt-[21px] mb-6 bg-red-50 border border-red-200 rounded-md p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Reference Number */}
      <div className="mx-6 mt-[21px] mb-6  bg-white rounded-2xl border border-[#E6EAF2] shadow-sm overflow-hidden">
        <div className="bg-[#F6F7F9] py-4 px-6 border-b border-gray-200">
          <p className="text-[15px] font-medium text-[#0B498B]">{`Reference No: ${localStorage.getItem('referenceNumber')}`}</p>
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
              handleTabChange={handleTabChange}
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
              {processingBranchOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
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
              handleTabChange={handleTabChange}
            />
            
            <DateInput
              name="dateOfExpiry"
              value={passportInfo.dateOfExpiry}
              onChange={createDateChangeAdapter(handlePassportInfoChange)}
              label="Date of Expiry"
              handleTabChange={handleTabChange}
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
              handleTabChange={handleTabChange}
            />
            
            <DateInput
              name="personalAppearance"
              value={travelInfo.personalAppearance}
              onChange={createDateChangeAdapter(handleTravelInfoChange)}
              label="Personal Appearance/Interview Date"
              handleTabChange={handleTabChange}
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
      {visaRequests.map((request, index) => (
        <div key={`visa-request-${index}`} className="mx-6 mt-[21px] mb-6 bg-white rounded-2xl border border-[#E6EAF2] shadow-sm overflow-hidden">
          <div className="bg-[#F6F7F9] py-4 px-6 border-b border-gray-200">
            <p className="text-[15px] font-medium text-[#0B498B]">Visa Request {visaRequests.length > 1 ? index + 1 : ''}</p>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Visa Country<span className="text-red-500">*</span>
                </label>
                <select
                  name="visaCountry"
                  value={request.visaCountry}
                  onChange={(e) => handleVisaInfoChange(e, index)}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none bg-white"
                >
                  {Object.entries(VISA_COUNTRY_LABELS).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Visa Category<span className="text-red-500">*</span>
                </label>
                <select
                  name="visaCategory"
                  value={request.visaCategory}
                  onChange={(e) => handleVisaInfoChange(e, index)}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none bg-white"
                >
                  {Object.entries(VISA_CATEGORY_LABELS).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nationality<span className="text-red-500">*</span>
                </label>
                <select
                  name="nationality"
                  value={request.nationality}
                  onChange={(e) => handleVisaInfoChange(e, index)}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none bg-white"
                >
                  {Object.entries(NATIONALITY_LABELS).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State<span className="text-red-500">*</span>
                </label>
                <select
                  name="state"
                  value={request.state}
                  onChange={(e) => handleVisaInfoChange(e, index)}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none bg-white"
                >
                  {Object.entries(STATE_LABELS).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
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
                  value={request.entryType}
                  onChange={(e) => handleVisaInfoChange(e, index)}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none bg-white"
                >
                  {Object.entries(ENTRY_TYPE_LABELS).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Remark
                </label>
                <input
                  type="text"
                  name="remark"
                  value={request.remark}
                  onChange={(e) => handleVisaInfoChange(e, index)}
                  placeholder=""
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A]"
                />
              </div>
              
              <div className="col-span-2 flex items-end justify-end">
                {index === visaRequests.length - 1 && (
                  <button
                    type="button"
                    onClick={handleAddMore}
                    className="bg-[#0B498B] text-white px-6 py-2.5 rounded-md hover:bg-[#083968] transition-colors focus:outline-none focus:ring-1 focus:ring-[#0B498B] font-medium"
                  >
                    Add More
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
      
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
                {countryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
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
                {indianStateOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
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
              placeholder="Enter Olvt number"
              className="w-full max-w-md px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A]"
            />
          </div>
        </div>
      </div>
      
      {/* Bottom Buttons */}
      <div className="flex justify-end items-center mx-6 pb-8 pt-4 space-x-4">
        <button
          type="button"
          onClick={handleBack}
          className="px-8 py-2.5 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#0B498B] font-medium"
          disabled={isSubmitting}
        >
          Back
        </button>
        
        <button
          type="button"
          onClick={handleUpdateAndContinue}
          className="bg-[#0B498B] text-white px-8 py-2.5 rounded-md hover:bg-[#083968] transition-colors focus:outline-none focus:ring-1 focus:ring-[#0B498B] font-medium"
          disabled={!isFormValid || isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Update & Continue'}
        </button>
      </div>
    </div>
  );
};

export default React.memo(FillServiceForm); 