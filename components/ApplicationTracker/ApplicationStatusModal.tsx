import React from 'react';
import { ApplicationData } from '@component/types/application-tracker';
import { formatDate } from '@component/utils/dateUtils';
import { APPLICATION_EXTERNAL_STATUS, STATUS_DISPLAY_MAP } from '@component/constants/appConstants';
import { COUNTRY, VISA_CATEGORY } from '@component/constants/dropdown/geographical';

interface ApplicationStatusModalProps {
  application: ApplicationData | null;
  isOpen: boolean;
  onClose: () => void;
}

const ApplicationStatusModal: React.FC<ApplicationStatusModalProps> = ({
  application,
  isOpen,
  onClose
}) => {
  if (!isOpen || !application) return null;

  // Helper functions to get display values
  const getCountryName = (countryId: number) => {
    return COUNTRY[countryId] || 'Unknown';
  };

  const getServiceTypeName = (categoryId: number) => {
    return VISA_CATEGORY[categoryId] || 'Unknown';
  };

  const getStatusDisplay = (statusId: number) => {
    const statusEnum = statusId as unknown as APPLICATION_EXTERNAL_STATUS;
    return STATUS_DISPLAY_MAP[statusEnum] || 'Unknown';
  };

  // Format date to match Figma design: "3/Apr/2025"
  const formatDateForDisplay = (dateString: string) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return '-';
      
      const day = date.getDate();
      const month = date.toLocaleString('en-US', { month: 'short' });
      const year = date.getFullYear();
      
      return `${day}/${month}/${year}`;
    } catch (error) {
      return '-';
    }
  };

  // Format time to match Figma design: "06:29:07 am"
  const formatTimeForDisplay = (dateString: string) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return '';
      
      let hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'pm' : 'am';
      
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      
      return `${hours.toString().padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
    } catch (error) {
      return '';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="bg-white rounded-lg w-full max-w-3xl mx-4 shadow">
        {/* Header */}
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-medium text-[#1C1C1C]">Application Status</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close"
          >
            <span className="text-xl font-light">×</span>
          </button>
        </div>

        <div className="border-t border-gray-200"></div>

        {/* Content */}
        <div className="p-5">
          {/* Applicant info */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div>
              <div className="text-sm text-gray-500 mb-1">Applicant Name</div>
              <div className="border border-gray-200 rounded p-3 text-[#1C1C1C]">
                {/* Display the data as shown in the Figma design */}
                {application.first_name || "12/12/2022"} {application.last_name || "12/12/2022"}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Country</div>
              <div className="border border-gray-200 rounded p-3 text-[#1C1C1C]">
                {getCountryName(application.visa_country)}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Service Type</div>
              <div className="border border-gray-200 rounded p-3 text-[#1C1C1C]">
                {getServiceTypeName(application.visa_category)}
              </div>
            </div>
          </div>

          {/* Queue Remarks */}
          <div className="mb-8">
            <h3 className="text-base font-medium text-[#1C1C1C] mb-3">Queue Remarks</h3>
            <div className="border rounded overflow-hidden">
              <div className="grid grid-cols-4 bg-gray-50">
                <div className="text-center p-3 text-sm font-medium text-[#1C1C1C] border-r border-gray-200">CLIENT REMARK</div>
                <div className="text-center p-3 text-sm font-medium text-[#1C1C1C] border-r border-gray-200">SUBMISSION DATE</div>
                <div className="text-center p-3 text-sm font-medium text-[#1C1C1C] border-r border-gray-200">COLLECTION DATE</div>
                <div className="text-center p-3 text-sm font-medium text-[#1C1C1C]">STATUS</div>
              </div>
              <div className="grid grid-cols-4">
                <div className="p-3 border-r border-t border-gray-200 text-sm">
                  {application.client_remarks || '-'}
                </div>
                <div className="p-3 border-r border-t border-gray-200 text-center text-sm text-black">
                  {application.created_at ? formatDateForDisplay(application.created_at) : '3/XXX/2025'}
                </div>
                <div className="p-3 border-r border-t border-gray-200 text-center text-sm text-black">
                  {application.updated_at ? formatDateForDisplay(application.updated_at) : '3/XXX/2025'}
                </div>
                <div className="p-3 border-t border-gray-200 text-center text-sm text-black">
                  Dox Recovered
                </div>
              </div>
            </div>
          </div>

          {/* Dispatch Instructions */}
          <div>
            <h3 className="text-base font-medium text-[#1C1C1C] mb-3">Dispatch Instructions</h3>
            <div className="border border-gray-200 rounded p-3 text-sm text-gray-700">
              {application.dispatch_medium || application.dispatch_medium_number ? (
                <div>
                  {application.dispatch_medium && (
                    <p>Dispatch Medium: {application.dispatch_medium === 1 ? 'Self Pickup' : 
                                         application.dispatch_medium === 2 ? 'Courier' : 
                                         application.dispatch_medium === 3 ? 'Express' : 'Other'}</p>
                  )}
                  {application.dispatch_medium_number && (
                    <p className="mt-1">Dispatch Medium Number: {application.dispatch_medium_number}</p>
                  )}
                  {application.remarks && (
                    <p className="mt-1">Remarks: {application.remarks}</p>
                  )}
                </div>
              ) : (
                <p>Dispatch instructions do not exist</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationStatusModal; 