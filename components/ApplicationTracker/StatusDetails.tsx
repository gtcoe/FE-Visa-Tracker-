import { StatusDetailsProps } from "@component/types/application-tracker";
import { APPLICATION_EXTERNAL_STATUS, STATUS_DISPLAY_MAP } from "@component/constants/appConstants";
import { COUNTRY, VISA_CATEGORY } from "@component/constants/dropdown/geographical";
import { formatDate } from "@component/utils/dateUtils";

// Mapping functions for display values
const getCountryName = (countryId: number) => {
  return COUNTRY[countryId] || 'Unknown';
};

const getVisaCategory = (categoryId: number) => {
  return VISA_CATEGORY[categoryId] || 'Unknown';
};

const getStatusDisplay = (statusId: number) => {
  // Cast the numeric status ID to the enum type to use as an index in the map
  const statusEnum = statusId as unknown as APPLICATION_EXTERNAL_STATUS;
  return STATUS_DISPLAY_MAP[statusEnum] || 'Unknown';
};

const StatusDetails = ({
  applications,
  isLoading,
  error,
  currentPage,
  totalPages,
  onPageChange,
}: StatusDetailsProps) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <svg
          className="animate-spin h-8 w-8 text-[#0B498B]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mx-6">
        {error}
      </div>
    );
  }

  if (applications.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 mx-6">
        No applications found. Please adjust your search criteria and try again.
      </div>
    );
  }

  // Calculate pagination data
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, applications.length);
  const currentItems = applications.slice(startIndex, endIndex);

  return (
    <div className="pb-6 rounded-2xl overflow-hidden">
      <div className="px-6 pb-4 pt-5">
        <h2 className="text-lg font-medium text-[#1C1C1C]">
          Status Details
        </h2>
      </div>
      
      <div className="overflow-x-auto -mx-0">
        <table className="min-w-full border-collapse border border-[#E6EAF2]">
          <thead>
            <tr className="bg-[#F9FAFB] border-t border-b border-[#E6EAF2]">
              <th className="py-4 px-4 text-center text-xs font-medium text-[#696969] uppercase border-r border-[#E6EAF2]">Ref No</th>
              <th className="py-4 px-4 text-center text-xs font-medium text-[#696969] uppercase border-r border-[#E6EAF2]">Name</th>
              <th className="py-4 px-4 text-center text-xs font-medium text-[#696969] uppercase border-r border-[#E6EAF2]">Client Name</th>
              <th className="py-4 px-4 text-center text-xs font-medium text-[#696969] uppercase border-r border-[#E6EAF2]">Referrer</th>
              <th className="py-4 px-4 text-center text-xs font-medium text-[#696969] uppercase border-r border-[#E6EAF2]">Country</th>
              <th className="py-4 px-4 text-center text-xs font-medium text-[#696969] uppercase border-r border-[#E6EAF2]">Visa Type</th>
              <th className="py-4 px-4 text-center text-xs font-medium text-[#696969] uppercase border-r border-[#E6EAF2]">Travel Date</th>
              <th className="py-4 px-4 text-center text-xs font-medium text-[#696969] uppercase border-r border-[#E6EAF2]">Status</th>
              <th className="py-4 px-4 text-center text-xs font-medium text-[#696969] uppercase border-r border-[#E6EAF2]">Remarks</th>
              <th className="py-4 px-4 text-center text-xs font-medium text-[#696969] uppercase">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((app, index) => (
              <tr key={`${app.id}-${index}`} className="border-b border-[#E6EAF2]">
                <td className="px-4 py-4 text-sm text-[#0B498B] font-medium border-r border-[#E6EAF2] text-center">
                  {app.reference_number}
                </td>
                <td className="px-4 py-4 text-sm text-[#1C1C1C] border-r border-[#E6EAF2] text-center">
                  {app.first_name} {app.last_name}
                </td>
                <td className="px-4 py-4 text-sm text-[#1C1C1C] border-r border-[#E6EAF2] text-center">
                  {app.name}
                </td>
                <td className="px-4 py-4 text-sm text-[#1C1C1C] border-r border-[#E6EAF2] text-center">
                  {app.referrer}
                </td>
                <td className="px-4 py-4 text-sm text-[#1C1C1C] border-r border-[#E6EAF2] text-center">
                  {getCountryName(app.visa_country)}
                </td>
                <td className="px-4 py-4 text-sm text-[#1C1C1C] border-r border-[#E6EAF2] text-center">
                  {getVisaCategory(app.visa_category)}
                </td>
                <td className="px-4 py-4 text-sm text-[#1C1C1C] border-r border-[#E6EAF2] text-center">
                  {formatDate(app.travel_date)}
                  {app.is_travel_date_tentative === 1 && <span className="text-xs text-[#696969] block">(Tentative)</span>}
                </td>
                <td className="px-4 py-4 text-sm text-[#1C1C1C] border-r border-[#E6EAF2] text-center">
                  {getStatusDisplay(app.external_status)}
                </td>
                <td className="px-4 py-4 text-sm text-[#1C1C1C] border-r border-[#E6EAF2] text-center">
                  {app.remarks}
                </td>
                <td className="px-4 py-4 text-sm text-[#0B498B] font-medium text-center">
                  <a href={`/application-details/${app.id}`} className="hover:underline">VIEW</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination - Only show if we have multiple pages */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center mt-8">
          <div className="inline-flex items-center">
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center px-4 py-2 text-sm text-[#1C1C1C] border border-[#E6EAF2] rounded-md mr-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                <path d="M10 12L6 8L10 4" stroke="#1C1C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Prev
            </button>

            <div className="flex space-x-1">
              {/* Generate page buttons dynamically */}
              {Array.from({ length: Math.min(totalPages, 7) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => onPageChange(i + 1)}
                  className={`w-8 h-8 flex items-center justify-center text-sm border rounded-md ${
                    (i + 1) === currentPage
                      ? "bg-[#0B498B] text-white border-[#0B498B]"
                      : "bg-white text-[#1C1C1C] border-[#E6EAF2]"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              
              {/* Show ellipsis if there are more pages */}
              {totalPages > 7 && (
                <>
                  <span className="w-8 h-8 flex items-center justify-center text-sm">
                    ..
                  </span>
                  <button
                    onClick={() => onPageChange(totalPages)}
                    className={`w-8 h-8 flex items-center justify-center text-sm border rounded-md ${
                      totalPages === currentPage
                        ? "bg-[#0B498B] text-white border-[#0B498B]"
                        : "bg-white text-[#1C1C1C] border-[#E6EAF2]"
                    }`}
                  >
                    {totalPages}
                  </button>
                </>
              )}
            </div>

            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center px-4 py-2 text-sm text-[#1C1C1C] border border-[#E6EAF2] rounded-md ml-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                <path d="M6 4L10 8L6 12" stroke="#1C1C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusDetails;
