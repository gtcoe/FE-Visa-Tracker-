import { useState } from "react";
import StatusDetails from "./StatusDetails";
import {
  Application,
  StatusFormData,
} from "@component/types/application-tracker";
import StatusForm from "./StatusForm";

const ApplicationTracker = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleStatusCheck = async (formData: StatusFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      // Build query parameters
      const queryParams = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        if (value) queryParams.append(key, value);
      });

      // Add pagination
      queryParams.append("page", currentPage.toString());

      // Call API
      const response = await fetch(`/api/status?${queryParams.toString()}`);

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      setApplications(result.applications);
      setTotalPages(result.totalPages || 1);
    } catch (error) {
      console.error("Error fetching status:", error);
      setError("Failed to fetch status information. Please try again later.");
      setApplications([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // If applications are already loaded, refetch with new page
    if (applications.length > 0) {
      // You'd need to store the last form data or extract it from the URL
      // For now, we'll leave implementation details
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <h1 className="text-2xl font-bold mb-6">Application Tracker</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6 ">
        <StatusForm onSubmit={handleStatusCheck} isLoading={isLoading} />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-[#1C1C1C] text-xl font-semibold mb-4">
          Status Details
        </h2>
        <StatusDetails
          applications={applications}
          isLoading={isLoading}
          error={error}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ApplicationTracker;
