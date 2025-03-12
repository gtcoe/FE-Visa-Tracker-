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

  // Function to get appropriate status badge styles
  const getStatusBadgeStyles = (status: string) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'in process':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'submitted':
        return 'bg-blue-100 text-blue-800';
      case 'doc received':
        return 'bg-purple-100 text-purple-800';
      case 'ready for collection':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Generate pagination numbers
  const getPageNumbers = () => {
    let pages = [];
    const totalPagesCount = Math.min(totalPages, 20);
    
    for (let i = 1; i <= totalPagesCount; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  return (
    <div className="px-6 pb-6">
      <div className="overflow-x-auto -mx-6">
        <table className="min-w-full">
          <thead>
            <tr className="bg-[#F9FAFB] border-b border-[#E6EAF2]">
              <th className="py-3 px-4 text-left text-xs font-medium text-[#696969] uppercase">Ref No</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-[#696969] uppercase">Handling Branch</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-[#696969] uppercase">Entry Generation Branch</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-[#696969] uppercase">Agent/ Corporate</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-[#696969] uppercase">Billing to Company</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-[#696969] uppercase">Referrer</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-[#696969] uppercase">Country</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-[#696969] uppercase">Visa Type</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-[#696969] uppercase">Status</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-[#696969] uppercase">Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={`${app.refNo}-${index}`} className="border-b border-[#E6EAF2]">
                <td className="px-4 py-4 text-sm text-[#0B498B] font-medium">{app.refNo}</td>
                <td className="px-4 py-4 text-sm text-[#1C1C1C]">{app.handlingBranch}</td>
                <td className="px-4 py-4 text-sm text-[#1C1C1C]">{app.entryGenerationBranch}</td>
                <td className="px-4 py-4 text-sm text-[#1C1C1C]">{app.agentCorporate}</td>
                <td className="px-4 py-4 text-sm text-[#1C1C1C]">{app.billingToCompany}</td>
                <td className="px-4 py-4 text-sm text-[#1C1C1C]">{app.referrer}</td>
                <td className="px-4 py-4 text-sm text-[#1C1C1C]">{app.country}</td>
                <td className="px-4 py-4 text-sm text-[#1C1C1C]">{app.visaType}</td>
                <td className="px-4 py-4">
                  <span className={`px-3 py-1 inline-flex text-xs font-medium rounded-full ${getStatusBadgeStyles(app.status)}`}>
                    {app.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-[#0B498B] font-medium uppercase">
                  Edit
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center mt-6">
        <div className="inline-flex items-center">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center h-8 px-3 text-sm text-[#0B498B] border border-[#E6EAF2] rounded mr-2 hover:bg-[#F9FAFB] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Prev
          </button>

          <div className="flex">
            {getPageNumbers().map((page) => (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`w-8 h-8 flex items-center justify-center text-sm border mx-[2px] transition-colors ${
                  page === currentPage
                    ? "bg-[#0B498B] text-white border-[#0B498B]"
                    : "bg-white text-[#1C1C1C] border-[#E6EAF2] hover:bg-[#F9FAFB]"
                } rounded`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center h-8 px-3 text-sm text-[#0B498B] border border-[#E6EAF2] rounded ml-2 hover:bg-[#F9FAFB] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusDetails;
