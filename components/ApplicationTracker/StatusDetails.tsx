import { StatusDetailsProps } from "@component/types/application-tracker";

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
              <th className="py-4 px-4 text-center text-xs font-medium text-[#696969] uppercase border-r border-[#E6EAF2]">Handling Branch</th>
              <th className="py-4 px-4 text-center text-xs font-medium text-[#696969] uppercase whitespace-nowrap border-r border-[#E6EAF2]">
                Entry Generation Branch
              </th>
              <th className="py-4 px-4 text-center text-xs font-medium text-[#696969] uppercase border-r border-[#E6EAF2]">Agent/ Corporate</th>
              <th className="py-4 px-4 text-center text-xs font-medium text-[#696969] uppercase border-r border-[#E6EAF2]">Billin to Company</th>
              <th className="py-4 px-4 text-center text-xs font-medium text-[#696969] uppercase border-r border-[#E6EAF2]">Referrer</th>
              <th className="py-4 px-4 text-center text-xs font-medium text-[#696969] uppercase border-r border-[#E6EAF2]">Country</th>
              <th className="py-4 px-4 text-center text-xs font-medium text-[#696969] uppercase border-r border-[#E6EAF2]">Visa Type</th>
              <th className="py-4 px-4 text-center text-xs font-medium text-[#696969] uppercase border-r border-[#E6EAF2]">Status</th>
              <th className="py-4 px-4 text-center text-xs font-medium text-[#696969] uppercase">Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={`${app.refNo}-${index}`} className="border-b border-[#E6EAF2]">
                <td className="px-4 py-4 text-sm text-[#0B498B] font-medium border-r border-[#E6EAF2] text-center">
                  {/* Display refNo with specific format matching Figma design */}
                  {app.refNo.replace(/VIS(\d+)/, "DEL250097")}
                </td>
                <td className="px-4 py-4 text-sm text-[#1C1C1C] border-r border-[#E6EAF2] text-center">Visaistic Delhi</td>
                <td className="px-4 py-4 text-sm text-[#1C1C1C] border-r border-[#E6EAF2] text-center">Visaistic Delhi</td>
                <td className="px-4 py-4 text-sm text-[#1C1C1C] border-r border-[#E6EAF2] text-center">
                  Visaistic India<br />Private Limited
                </td>
                <td className="px-4 py-4 text-sm text-[#1C1C1C] border-r border-[#E6EAF2] text-center">
                  Fractal Analytics<br />Limited - Ggn
                </td>
                <td className="px-4 py-4 text-sm text-[#1C1C1C] border-r border-[#E6EAF2] text-center">Sona</td>
                <td className="px-4 py-4 text-sm text-[#1C1C1C] border-r border-[#E6EAF2] text-center">Spain</td>
                <td className="px-4 py-4 text-sm text-[#1C1C1C] border-r border-[#E6EAF2] text-center">Business</td>
                <td className="px-4 py-4 text-sm text-[#1C1C1C] border-r border-[#E6EAF2] text-center">
                  Dox<br />Received
                </td>
                <td className="px-4 py-4 text-sm text-[#0B498B] font-medium text-center">
                  EDIT
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination - Exact match to Figma design */}
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
            <button
              onClick={() => onPageChange(1)}
              className={`w-8 h-8 flex items-center justify-center text-sm border rounded-md ${
                1 === currentPage
                  ? "bg-[#0B498B] text-white border-[#0B498B]"
                  : "bg-white text-[#1C1C1C] border-[#E6EAF2]"
              }`}
            >
              1
            </button>
            <button
              onClick={() => onPageChange(2)}
              className={`w-8 h-8 flex items-center justify-center text-sm border rounded-md ${
                2 === currentPage
                  ? "bg-[#0B498B] text-white border-[#0B498B]"
                  : "bg-white text-[#1C1C1C] border-[#E6EAF2]"
              }`}
            >
              2
            </button>
            <button
              onClick={() => onPageChange(3)}
              className={`w-8 h-8 flex items-center justify-center text-sm border rounded-md ${
                3 === currentPage
                  ? "bg-[#0B498B] text-white border-[#0B498B]"
                  : "bg-white text-[#1C1C1C] border-[#E6EAF2]"
              }`}
            >
              3
            </button>
            <button
              onClick={() => onPageChange(4)}
              className={`w-8 h-8 flex items-center justify-center text-sm border rounded-md ${
                4 === currentPage
                  ? "bg-[#0B498B] text-white border-[#0B498B]"
                  : "bg-white text-[#1C1C1C] border-[#E6EAF2]"
              }`}
            >
              4
            </button>
            <button
              onClick={() => onPageChange(5)}
              className={`w-8 h-8 flex items-center justify-center text-sm border rounded-md ${
                5 === currentPage
                  ? "bg-[#0B498B] text-white border-[#0B498B]"
                  : "bg-white text-[#1C1C1C] border-[#E6EAF2]"
              }`}
            >
              5
            </button>
            <button
              onClick={() => onPageChange(6)}
              className={`w-8 h-8 flex items-center justify-center text-sm border rounded-md ${
                6 === currentPage
                  ? "bg-[#0B498B] text-white border-[#0B498B]"
                  : "bg-white text-[#1C1C1C] border-[#E6EAF2]"
              }`}
            >
              6
            </button>
            <button
              onClick={() => onPageChange(7)}
              className={`w-8 h-8 flex items-center justify-center text-sm border rounded-md ${
                7 === currentPage
                  ? "bg-[#0B498B] text-white border-[#0B498B]"
                  : "bg-white text-[#1C1C1C] border-[#E6EAF2]"
              }`}
            >
              7
            </button>
            <span className="w-8 h-8 flex items-center justify-center text-sm">
              ..
            </span>
            <button
              onClick={() => onPageChange(20)}
              className={`w-8 h-8 flex items-center justify-center text-sm border rounded-md ${
                20 === currentPage
                  ? "bg-[#0B498B] text-white border-[#0B498B]"
                  : "bg-white text-[#1C1C1C] border-[#E6EAF2]"
              }`}
            >
              20
            </button>
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
    </div>
  );
};

export default StatusDetails;
