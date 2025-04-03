"use client";

import { useEffect, useState } from "react";
import StatusForm from "./StatusForm";
import StatusDetails from "./StatusDetails";
import { useApplicationContext } from "@component/context/ApplicationContext";
import { searchApplications } from "@component/api/application";
import { ToastNotifyError } from "@component/components/common/Toast";
import { ApplicationData, StatusFormData } from "@component/types/application-tracker";
import { 
  PROCESSING_BRANCH_LABELS, 
  VISA_CATEGORY_LABELS, 
  PROCESSING_BRANCH, 
  VISA_CATEGORY 
} from "@component/constants/dropdown/geographical";
import config from '@component/constants/config';

// Define the response type here since we don't have direct access to the API implementation
interface ApiResponse {
  status: boolean;
  statusCode: number;
  data: {
    applications: any[]; // Using any[] since we don't know the exact type returned by the API
  };
}

const ApplicationTracker = () => {
  const { USER_TYPE_KEY } = config;
  const {
    searchParams,
    setSearchParams,
    applications,
    error,
    isLoading,
    currentPage,
    totalPages,
    setCurrentPage,
    setApplications,
    setError,
    setIsLoading,
    setTotalPages
  } = useApplicationContext();

  const [userType, setUserType] = useState<number>(() => {
    // Get user type from localStorage if available
    if (typeof window !== 'undefined') {
      const userTypeStr = localStorage.getItem(USER_TYPE_KEY);
      if (userTypeStr) {
        try {
          const userTypeNum = Number(userTypeStr);
          return userTypeNum || 3; // Default to CLIENT (3) if not found
        } catch (e) {
          return 3; // Default to CLIENT if parsing fails
        }
      }
    }
    return 3; // Default to CLIENT if no user found
  });

  // Map API response to UI display format
  const mapApplicationToDisplayFormat = (application: any): ApplicationData => {
    return {
      ...application,
      // Map fields needed for UI display
      refNo: application.reference_number,
      handlingBranch: PROCESSING_BRANCH_LABELS[application.processing_branch as PROCESSING_BRANCH] || '', // This would need to be mapped from processing_branch
      entryGenerationBranch: PROCESSING_BRANCH_LABELS[application.processing_branch as PROCESSING_BRANCH] || '', // This would need to be mapped from a field
      agentCorporate: application.name,
      billingToCompany: application.owner_name,
      // Map visa_country and visa_category to readable values in the future
      visaType: VISA_CATEGORY_LABELS[application.visa_category as VISA_CATEGORY] || ''
    } as ApplicationData;
  };

  // Handle search form submission
  const handleSearchForm = async (formData: any) => {
    setIsLoading(true);
    setSearchParams(formData);
    
    try {
      // Call the API service to search applications
      const result = await searchApplications({
        reference_number: formData.referenceNo || '',
        customer_type: formData.customerType,
        client_user_id: formData.client_user_id,
        name: formData.travelersName || '',
        passport_number: formData.travelersPassportNo || '',
        visa_branch: formData.visaBranch,
        entry_generation_branch: formData.entryGenerationBranch,
        from_date: formData.fromDate || '',
        to_date: formData.toDate || '',
        queue: formData.queue,
        status: formData.status,
        country: formData.country,
        billing_to_company: formData.billingToCompany || '',
      });
      
      // Safely cast the result to the expected structure
      // const response = result as unknown as ApiResponse;
      
      if (Array.isArray(result)) {
        // Map each application to the display format
        const mappedApplications = result.map(mapApplicationToDisplayFormat);
        setApplications(mappedApplications);
        setTotalPages(Math.ceil(mappedApplications.length / 10)); // Assuming 10 items per page
        setCurrentPage(1);
      } else {
        // Handle unexpected response format
        setApplications([]);
        setError('Received an invalid response format from the server');
      }
    } catch (error) {
      console.error('Error during search:', error);
      setApplications([]);
      if (error instanceof Error) {
        setError(error.message);
        ToastNotifyError(error.message);
      } else {
        setError('An error occurred during search');
        ToastNotifyError('An error occurred during search');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Handle pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // In a real implementation, you might want to fetch a specific page from the API
  };

  return (
    <div className="px-[80px]">
      <div className="flex items-center pt-[32px] pb-[24px]">
        <h1 className="text-[#1C1C1C] text-[28px] font-bold mt-0">
          Application Tracker
        </h1>
      </div>

      <div className="bg-white rounded-2xl border border-[#E6EAF2] shadow-sm mb-6 overflow-hidden">
        <StatusForm onSearch={handleSearchForm} />
      </div>

      {searchParams && (
        <div className="bg-white rounded-2xl border border-[#E6EAF2] shadow-sm overflow-hidden">
          <StatusDetails
            applications={applications}
            isLoading={isLoading}
            error={error}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            userType={userType}
          />
        </div>
      )}
      
      {/* Developer credit footer */}
      <div className="text-center py-6 text-gray-500 text-sm">
        Developed by <a href="https://techkatalyst.com" className="text-[#0B498B] hover:underline">Tech Katalyst</a>
      </div>
    </div>
  );
};

export default ApplicationTracker;
