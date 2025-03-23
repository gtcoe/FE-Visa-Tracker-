"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ApplicationRequestData, 
  getApplicationInfo, 
  getFullName, 
  formatDateForDisplay 
} from '@component/types/applicationTypes';
import { addApplicationStep4 } from '@component/api/application';
import { 
  VISA_COUNTRY, VISA_COUNTRY_LABELS, 
  VISA_CATEGORY, VISA_CATEGORY_LABELS,
  ENTRY_TYPE, ENTRY_TYPE_LABELS
} from '@component/constants/dropdown/geographical';
import { FORM_MODE, TAB_NAME, STORAGE_KEY } from '@component/constants/formConstants';

// Constants for dispatch mediums
enum DISPATCH_MEDIUM {
  EMAIL = 1,
  COURIER = 2,
  HAND_DELIVERY = 3
}

interface VisaApplicationRow {
  id: string;
  name: string;
  email: string;
  visaCountry: string;
  visaCategory: string;
  entryType: string;
  remarks: string;
}

// Component for Service Request Summary tab
const ServiceRequestSummary: React.FC<{
  handleTabChange?: (tabName: string) => void,
  formMode?: FORM_MODE,
  setFormMode?: React.Dispatch<React.SetStateAction<FORM_MODE>>
  handleAddMore: () => void
}> = ({ handleTabChange, formMode, setFormMode, handleAddMore }) => {
  const router = useRouter();
  
  // State for visa applications
  const [visaApplications, setVisaApplications] = useState<VisaApplicationRow[]>([]);
  // State for loading application data
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [clientName, setClientName] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Effect to load application data from localStorage on mount
  useEffect(() => {
    const loadApplicationData = () => {
      setIsLoading(true);
      
      try {
        // Get application data from localStorage
        const applicationData = getApplicationInfo();
        
        if (applicationData) {
          // Transform the application data to match our VisaApplicationRow structure
          const transformedData: VisaApplicationRow[] = applicationData.visa_requests.map((request, index) => {
            return {
              id: `${applicationData.application_id}`,
              name: getFullName(applicationData.personal_info),
              email: applicationData.personal_info.email_id || '',
              // Convert numeric values to labels using the enums
              visaCountry: VISA_COUNTRY_LABELS[request.visa_country as VISA_COUNTRY] || 'Unknown',
              visaCategory: VISA_CATEGORY_LABELS[request.visa_category as VISA_CATEGORY] || 'Unknown',
              entryType: ENTRY_TYPE_LABELS[request.entry_type as ENTRY_TYPE] || 'Unknown',
              remarks: request.remark || ''
            };
          });
          setClientName(applicationData.client_name || '');
          
          setVisaApplications(transformedData);
        }
      } catch (error) {
        console.error('Error loading application data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadApplicationData();
  }, []);

  // State for dispatch details
  const [dispatchDetails, setDispatchDetails] = useState({
    medium1: '',
    medium2: '',
    remark: ''
  });

  const handleDispatchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDispatchDetails(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user makes changes
    if (error) setError(null);
  };

  // Map dispatch medium from string to numeric value
  const getDispatchMediumValue = (medium: string): number => {
    switch (medium) {
      case 'email':
        return DISPATCH_MEDIUM.EMAIL;
      case 'courier':
        return DISPATCH_MEDIUM.COURIER;
      case 'hand_delivery':
        return DISPATCH_MEDIUM.HAND_DELIVERY;
      default:
        return 0;
    }
  };

  const handleFinalSubmission = async () => {
    // Validate inputs
    if (!dispatchDetails.medium1) {
      setError("Please select a dispatch medium");
      return;
    }
    
    if (!dispatchDetails.medium2) {
      setError("Please enter a dispatch medium number");
      return;
    }
    
    if (!dispatchDetails.remark) {
      setError("Please enter remarks");
      return;
    }
    
    const referenceNumber = localStorage.getItem(STORAGE_KEY.SERVICE_REFERENCE_NUMBER);
    if (!referenceNumber) {
      setError("Reference number not found. Please try again.");
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Prepare payload according to API requirements
      const payload = {
        dispatch_medium: getDispatchMediumValue(dispatchDetails.medium1),
        dispatch_medium_number: dispatchDetails.medium2,
        remarks: dispatchDetails.remark,
        reference_number: referenceNumber,
        token_user_id: localStorage.getItem(STORAGE_KEY.USER_ID) || 0, // Fallback to 0 if not found
      };
      
      // Submit to API
      const response = await addApplicationStep4(payload);
      console.log('=====>Step 4 response:', response);
      
      if (response && response.status) {
        // Success handling
        console.log('Step 4 data submitted successfully:', response);
        
        // Clear localStorage data that's no longer needed
        localStorage.removeItem(STORAGE_KEY.APPLICATION_INFO);
        localStorage.removeItem(STORAGE_KEY.SERVICE_REFERENCE_NUMBER);
        
        // Navigate to dashboard or success page
        router.push('/application-tracker');
      } else {
        setError(response?.message || 'Failed to submit. Please try again.');
      }
    } catch (error: any) {
      setError(error.message || 'An error occurred. Please try again.');
      console.error('Error submitting final data:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddMoreServiceRequest = () => {
    // Navigate to service request screen
    router.push('/services');
  };

  const handleEditRow = (id: string) => {
    // Add null checks before calling potentially undefined functions
    handleTabChange?.(TAB_NAME.FILL);
    setFormMode?.(FORM_MODE.EDIT);

    // console.log('Edit row - START', id);
    // // Store mode in localStorage to indicate edit mode
    // localStorage.setItem(STORAGE_KEY.FORM_MODE, FORM_MODE.EDIT);
    // console.log('Set formMode in localStorage:', localStorage.getItem(STORAGE_KEY.FORM_MODE));
    // // Set the application ID in localStorage
    // localStorage.setItem(STORAGE_KEY.APPLICATION_ID, id);
    // console.log('Set applicationId in localStorage:', localStorage.getItem(STORAGE_KEY.APPLICATION_ID));
    // // Set the active tab to 'fill' to show the FillServiceForm
    // localStorage.setItem(STORAGE_KEY.ACTIVE_TAB, TAB_NAME.FILL);
    // console.log('Set activeTab in localStorage:', localStorage.getItem(STORAGE_KEY.ACTIVE_TAB));
    // // Navigate to services/common page
    // console.log('Navigating to /services/common');
    // router.push('/services/common');
  };

  const handleViewRow = (id: string) => {

    // Add null checks before calling potentially undefined functions
    handleTabChange?.(TAB_NAME.FILL);
    setFormMode?.(FORM_MODE.VIEW);


    
    // console.log('View row - START', id);
    // // Store mode in localStorage to indicate view mode (readonly)
    // localStorage.setItem(STORAGE_KEY.FORM_MODE, FORM_MODE.VIEW);
    // console.log('Set formMode in localStorage:', localStorage.getItem(STORAGE_KEY.FORM_MODE));
    // // Set the application ID in localStorage
    // localStorage.setItem(STORAGE_KEY.APPLICATION_ID, id);
    // console.log('Set applicationId in localStorage:', localStorage.getItem(STORAGE_KEY.APPLICATION_ID));
    // // Set the active tab to 'fill' to show the FillServiceForm
    // localStorage.setItem(STORAGE_KEY.ACTIVE_TAB, TAB_NAME.FILL);
    // console.log('Set activeTab in localStorage:', localStorage.getItem(STORAGE_KEY.ACTIVE_TAB));
    // // Navigate to services/common page
    // console.log('Navigating to /services/common');
    // router.push('/services/common');
  };

  const handleAddSubRequest = (id: string) => {
    handleAddMore()
    handleTabChange?.(TAB_NAME.FILL);
    setFormMode?.(FORM_MODE.EDIT);
    // console.log('Add sub request - START', id);
    // // Store mode in localStorage to indicate add sub request mode
    // localStorage.setItem(STORAGE_KEY.FORM_MODE, FORM_MODE.ADD_SUB_REQUEST);
    // console.log('Set formMode in localStorage:', localStorage.getItem(STORAGE_KEY.FORM_MODE));
    // // Set the application ID in localStorage
    // localStorage.setItem(STORAGE_KEY.APPLICATION_ID, id);
    // console.log('Set applicationId in localStorage:', localStorage.getItem(STORAGE_KEY.APPLICATION_ID));
    // // Set the active tab to 'fill' to show the FillServiceForm
    // localStorage.setItem(STORAGE_KEY.ACTIVE_TAB, TAB_NAME.FILL);
    // console.log('Set activeTab in localStorage:', localStorage.getItem(STORAGE_KEY.ACTIVE_TAB));
    // // Navigate to services/common page
    // console.log('Navigating to /services/common');
    // router.push('/services/common');
  };

  return (
    <div className="p-0">
      {/* Container with card styling */}
      <div className="bg-white rounded-lg border border-[#E6EAF2] shadow-sm overflow-hidden">
        {/* Reference & Client Information */}
        <div className="rounded-lg border border-[#E6EAF2] m-4">
          <div className="border-b border-[#E6EAF2] px-6 py-4 bg-[#F9FAFB]">
            <div className="flex flex-wrap items-center text-[14px] leading-[20px] font-medium space-x-2">
              <span className="font-medium text-[#0B498B]">{`Reference No: ${localStorage.getItem(STORAGE_KEY.SERVICE_REFERENCE_NUMBER)}`}</span>
              <span className="font-medium text-[#0B498B]">•</span>
              <span className="font-medium text-[#0B498B]">Client name: {clientName}</span>
              <span className="font-medium text-[#0B498B]">•</span>
              <button
                onClick={handleAddMoreServiceRequest}
                className="text-[#D95252] hover:underline font-medium"
              >
                Add More Service Request
              </button>
            </div>
          </div>

          {/* Visa Application Details */}
          <div className="">
            <h3 className="text-[14px] leading-[20px] font-medium text-[#1C1C1C] my-4 mx-6">Visa Application details</h3>
            
            <div className="overflow-x-auto">
              {isLoading ? (
                <div className="flex justify-center items-center py-8">
                  <p>Loading application data...</p>
                </div>
              ) : (
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-[#F9FAFB] text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-t border-[#E6EAF2]">
                      <th className="px-4 py-3 text-center">Application Name</th>
                      <th className="px-4 py-3 text-center">Email ID</th>
                      <th className="px-4 py-3 text-center">Visa Country</th>
                      <th className="px-4 py-3 text-center">Visa Category</th>
                      <th className="px-4 py-3 text-center">Entry Type</th>
                      <th className="px-4 py-3 text-center">Remarks</th>
                      <th className="px-4 py-3 text-center">Edit</th>
                      <th className="px-4 py-3 text-center">View</th>
                      <th className="px-4 py-3 text-center">ADD SUB REQUEST</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visaApplications.map((row) => (
                      <tr key={row.id} className="hover:bg-gray-50 border-b border-[#E6EAF2] last:border-b-0">
                        <td className="px-4 py-4 text-sm font-medium text-gray-900 text-center">{row.name}</td>
                        <td className="px-4 py-4 text-sm text-gray-500 text-center">{row.email || '-'}</td>
                        <td className="px-4 py-4 text-sm text-gray-500 text-center">{row.visaCountry}</td>
                        <td className="px-4 py-4 text-sm text-gray-500 text-center">{row.visaCategory}</td>
                        <td className="px-4 py-4 text-sm text-gray-500 text-center">{row.entryType}</td>
                        <td className="px-4 py-4 text-sm text-gray-500 text-center">{row.remarks || '-'}</td>
                        <td className="px-4 py-4 text-sm text-center">
                          <button 
                            onClick={() => handleEditRow(row.id)}
                            className="text-[#0B498B] hover:underline font-medium"
                          >
                            Edit
                          </button>
                        </td>
                        <td className="px-4 py-4 text-sm text-center">
                          <button 
                            onClick={() => handleViewRow(row.id)}
                            className="text-[#0B498B] hover:underline font-medium"
                          >
                            View
                          </button>
                        </td>
                        <td className="px-4 py-4 text-sm text-center">
                          <button 
                            onClick={() => handleAddSubRequest(row.id)}
                            className="text-[#0B498B] hover:underline font-medium"
                          >
                            Add sub request
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
        

        {/* Dispatch Details */}
        <div className="p-6 pt-2">
          <h3 className="text-[14px] leading-[20px] font-medium text-[#1C1C1C] mb-4">Dispatch Details</h3>
          
          <div className="relative">
            {/* Error message */}
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
                {error}
              </div>
            )}
            
            <div className="border border-[#E6EAF2] rounded-md p-6 pt-8">
              <div className="grid grid-cols-4 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-normal text-gray-700 mb-2">
                    Dispatch Medium<span className="text-red-500">*</span>
                  </label>
                  <select
                    name="medium1"
                    value={dispatchDetails.medium1}
                    onChange={handleDispatchChange}
                    className="text-sm w-full h-10 px-3 border border-[#E6EAF2] rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-gray-700 appearance-none bg-white"
                    disabled={isSubmitting}
                  >
                    <option value="">Select</option>
                    <option value="email">Email</option>
                    <option value="courier">Courier</option>
                    <option value="hand_delivery">Hand Delivery</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-xs font-normal text-gray-700 mb-2">
                    Dispatch Medium No.<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="medium2"
                    value={dispatchDetails.medium2}
                    onChange={handleDispatchChange}
                    placeholder="Enter dispatch medium number"
                    className="text-sm w-full h-10 px-3 border border-[#E6EAF2] rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-gray-700 bg-white"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-normal text-gray-700 mb-2">
                  Remark<span className="text-red-500">*</span>
                </label>
                <textarea
                  name="remark"
                  value={dispatchDetails.remark}
                  onChange={handleDispatchChange}
                  rows={1}
                  className="text-sm w-full px-3 py-2 border border-[#E6EAF2] rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-gray-700 resize-none"
                  placeholder="Enter remarks here..."
                  disabled={isSubmitting}
                />
              </div>
            </div>
             {/* Final Submission Button */}
          <div className="flex justify-end mt-6">
            <button
              type="button"
              onClick={handleFinalSubmission}
              disabled={isSubmitting}
              className={`
                bg-[#0B498B] text-white px-6 py-2.5 rounded-md 
                hover:bg-[#083968] transition-colors focus:outline-none 
                font-medium w-[183px] flex items-center justify-center
                ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
              `}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                'Final Submission'
              )}
            </button>
          </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default React.memo(ServiceRequestSummary); 