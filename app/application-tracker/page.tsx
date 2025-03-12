// app/application-tracker/page.tsx
"use client";

import { useState } from "react";
import StatusForm from "@component/components/ApplicationTracker/StatusForm";
import StatusDetails from "@component/components/ApplicationTracker/StatusDetails";
import { ApplicationData, StatusFormData } from "@component/types/application-tracker";
import { mockApplications } from "@component/data/mock-applications";

export default function ApplicationTrackerPage() {
  const [searchData, setSearchData] = useState<any>(null);
  const [applications, setApplications] = useState<ApplicationData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const handleSearch = (data: any) => {
    setIsLoading(true);
    setError(null);

    // Simulate API call with a timeout
    setTimeout(() => {
      try {
        // For demo purposes, we're using mock data
        const filteredApplications = mockApplications;
        setApplications(filteredApplications);
        setTotalPages(Math.ceil(filteredApplications.length / 10));
        setCurrentPage(1);
        setSearchData(data);
      } catch (err) {
        setError("An error occurred while fetching data. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }, 1000);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // In a real app, you would fetch the specific page from the backend
    // For now, we'll just update the current page state
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <div className="container mx-auto max-w-[1440px] py-6">
        <h1 className="text-[28px] font-bold text-[#1C1C1C] px-6 mb-6">
          Application Tracker
        </h1>

        <div className="bg-white rounded-lg border border-[#E6EAF2] shadow-sm mb-6">
          <StatusForm onSearch={handleSearch} />
        </div>

        {searchData && (
          <div className="bg-white rounded-lg border border-[#E6EAF2] shadow-sm">
            <div className="px-6 pt-6 pb-3 border-b border-[#E6EAF2]">
              <h3 className="text-lg font-medium text-[#1C1C1C]">
                Application Status
              </h3>
            </div>
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
    </div>
  );
}
