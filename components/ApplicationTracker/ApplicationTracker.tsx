"use client";

import { useState } from "react";
import StatusForm from "./StatusForm";
import StatusDetails from "./StatusDetails";
import { ApplicationData } from "@component/types/application-tracker";
import { mockApplications } from "@component/data/mock-applications";

const ApplicationTracker = () => {
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
    <div className="px-[80px]">
      <div className="flex items-center pt-[32px] pb-[24px]">
        <h1 className="text-[#1C1C1C] text-[28px] font-bold mt-0">
          Application Tracker
        </h1>
      </div>

      <div className="bg-white rounded-lg border border-[#E6EAF2] shadow-sm mb-6">
        <StatusForm onSearch={handleSearch} />
      </div>

      {searchData && (
        <div className="bg-white rounded-lg border border-[#E6EAF2] shadow-sm">
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
