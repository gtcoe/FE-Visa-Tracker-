// app/application-tracker/page.tsx
"use client";

import { useState } from "react";
import Head from "next/head";
import {
  Application,
  StatusFormData,
} from "@component/types/application-tracker";
import StatusForm from "@component/components/ApplicationTracker/StatusForm";
import StatusDetails from "@component/components/ApplicationTracker/StatusDetails";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Visaistic | Application Tracker",
//   description: "Visa Application Tracker",
// };

export default function ApplicationTrackerPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [lastSearchParams, setLastSearchParams] =
    useState<StatusFormData | null>(null);

  const handleStatusCheck = async (formData: StatusFormData) => {
    setIsLoading(true);
    setError(null);
    setLastSearchParams(formData);
    await fetchApplications(formData, 1);
  };

  const fetchApplications = async (formData: StatusFormData, page: number) => {
    try {
      // Build query parameters
      const queryParams = new URLSearchParams();

      // Only add parameters that have values
      Object.entries(formData).forEach(([key, value]) => {
        if (value) queryParams.append(key, value);
      });

      // Add pagination
      queryParams.append("page", page.toString());

      // Call API
      const response = await fetch(`/api/status?${queryParams.toString()}`);

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      setApplications(result.applications || []);
      setTotalPages(result.totalPages || 1);
      setCurrentPage(page);
    } catch (error) {
      console.error("Error fetching status:", error);
      setError("Failed to fetch status information. Please try again later.");
      setApplications([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    if (page === currentPage || page < 1 || page > totalPages) return;

    if (lastSearchParams) {
      fetchApplications(lastSearchParams, page);
    }
  };

  // Sample data for initial display - you'd remove this in production
  const sampleApplications: Application[] = [
    {
      refNo: "DEL250097",
      handlingBranch: "Visalatic Delhi",
      entryGenerationBranch: "Visalatic Delhi",
      agentCorporate: "Visalatic India Private Limited",
      billingToCompany: "Fractal Analytics Limited - Ggn",
      referrer: "Sona",
      country: "Spain",
      visaType: "Business",
      status: "Doc Received",
    },
    // Add more sample data as needed
  ];

  return (
    <div className=" bg-[#E6EAF2]">
      <div className="container mx-auto p-4 max-w-7xl">
        <h1 className="text-[#1C1C1C] text-2xl font-bold mb-6">
          Application Tracker
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <StatusForm onSubmit={handleStatusCheck} isLoading={isLoading} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-[#1C1C1C] text-xl font-semibold mb-4">
            Status Details
          </h2>
          <StatusDetails
            applications={
              applications.length > 0 ? applications : sampleApplications
            }
            isLoading={isLoading}
            error={error}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}
