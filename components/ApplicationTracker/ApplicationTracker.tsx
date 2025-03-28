"use client";

import { useEffect } from "react";
import StatusForm from "./StatusForm";
import StatusDetails from "./StatusDetails";
import { useApplicationContext } from "@component/context/ApplicationContext";
import { searchApplications } from "@component/api/application";
import { ToastNotifyError } from "@component/components/common/Toast";

const ApplicationTracker = () => {
  const {
    applications,
    setApplications,
    searchParams,
    setSearchParams,
    isLoading,
    setIsLoading,
    error,
    setError,
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages
  } = useApplicationContext();

  // Handle search form submission
  const handleSearch = async (formData: any) => {
    setIsLoading(true);
    setSearchParams(formData);
    
    try {
      // Call the API service to search applications
      const results = await searchApplications({
        reference_number: formData.refNo || '',
        branch: formData.branch || '',
        agent: formData.agent || '',
        bill_to: formData.billTo || '',
        referrer: formData.referer || '',
        applicant: formData.applicant || '',
        country: formData.country || '',
        visa_type: formData.visaType || '',
        status: formData.status || '',
        from_date: formData.dateFrom || '',
        to_date: formData.dateTo || ''
      });
      
      setApplications(results);
      setTotalPages(Math.ceil(results.length / 10)); // Assuming 10 items per page
      setCurrentPage(1);
    } catch (error) {
      console.error('Error during search:', error);
      if (error instanceof Error) {
        ToastNotifyError(error.message);
      } else {
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
        <StatusForm onSearch={handleSearch} />
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
          />
        </div>
      )}
    </div>
  );
};

export default ApplicationTracker;
