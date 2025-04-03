import { useState, useEffect, useRef } from 'react';
import { ApplicationData } from '@component/types/application-tracker';
import { COUNTRY, VISA_CATEGORY } from '@component/constants/dropdown/geographical';
import { formatDate } from '@component/utils/dateUtils';
import { STATUS_DISPLAY_MAP, QUEUE_DISPLAY_MAP } from '@component/constants/appConstants';

interface EditApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  application: ApplicationData | null;
  onSave: (updatedApplication: any) => Promise<void>;
}

const EditApplicationModal = ({ isOpen, onClose, application, onSave }: EditApplicationModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    applicantName: '',
    country: '',
    serviceType: '',
    referenceId: '',
    lastUpdate: '',
    queue: '',
    status: '',
    teamRemarks: '',
    clientRemarks: '',
    billingRemarks: '',
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (application) {
      setFormData({
        applicantName: `${application.first_name || ''} ${application.last_name || ''}`.trim(),
        country: application.visa_country ? String(application.visa_country) : '',
        serviceType: application.visa_category ? String(application.visa_category) : '',
        referenceId: application.reference_number || '',
        lastUpdate: application.updated_at ? formatDate(application.updated_at) : '',
        queue: application.queue ? String(application.queue) : '',
        status: application.external_status ? String(application.external_status) : '',
        teamRemarks: application.team_remarks || '',
        clientRemarks: application.client_remarks || '',
        billingRemarks: application.billing_remarks || '',
      });
    }
  }, [application]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = ''; // Restore scrolling when modal is closed
    };
  }, [isOpen, onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!application) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const updatedData = {
        id: application.id,
        queue: parseInt(formData.queue),
        external_status: parseInt(formData.status),
        team_remarks: formData.teamRemarks,
        client_remarks: formData.clientRemarks,
        billing_remarks: formData.billingRemarks,
      };
      
      await onSave(updatedData);
      onClose();
    } catch (err) {
      console.error('Error updating application:', err);
      setError(err instanceof Error ? err.message : 'Failed to update application');
    } finally {
      setIsLoading(false);
    }
  };

  const getCountryName = (countryId: number | string) => {
    return COUNTRY[Number(countryId)] || 'Unknown';
  };

  const getServiceTypeName = (categoryId: number | string) => {
    return VISA_CATEGORY[Number(categoryId)] || 'Unknown';
  };

  // Format date in the exact format "3 Apr, 2025"
  const formatDateForDisplay = (dateString: string | undefined): string => {
    if (!dateString) return '';
    
    try {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.toLocaleString('en-US', { month: 'short' });
      const year = date.getFullYear();
      
      return `${day} ${month}, ${year}`;
    } catch (error) {
      console.error('Error formatting date:', error);
      return '';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-25 flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div 
        ref={modalRef}
        className="bg-white w-full max-w-[716px] max-h-[650px] mx-auto"
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center px-6 py-4">
          <h3 className="text-xl font-medium text-gray-900">
            Edit Application
          </h3>
          <button
            type="button"
            className="text-gray-400 hover:text-gray-500"
            onClick={onClose}
          >
            <span className="sr-only">Close</span>
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path 
                d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" 
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-6 py-4">
          {error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div className="grid grid-cols-3 gap-6 mb-4">
            <div>
              <div className="text-sm font-medium text-gray-700 mb-1">Applicant Name</div>
              <input
                type="text"
                name="applicantName"
                value={formData.applicantName}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-50 text-gray-500"
              />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-700 mb-1">Country</div>
              <input
                type="text"
                name="country"
                value={getCountryName(formData.country)}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-50 text-gray-500"
              />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-700 mb-1">Service Type</div>
              <input
                type="text"
                name="serviceType"
                value={getServiceTypeName(formData.serviceType)}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-50 text-gray-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-4">
            <div className="col-span-1">
              <div className="text-sm font-medium text-gray-700 mb-1">Reference ID</div>
              <input
                type="text"
                name="referenceId"
                value={formData.referenceId}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-50 text-gray-500"
              />
            </div>
            <div className="col-span-1">
              <div className="text-sm font-medium text-gray-700 mb-1">Last Update</div>
              <input
                type="text"
                name="lastUpdate"
                value={formData.lastUpdate}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-50 text-gray-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-4">
            <div className="col-span-1">
              <div className="text-sm font-medium text-gray-700 mb-1">Queue</div>
              <div className="relative">
                <select
                  name="queue"
                  value={formData.queue}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded appearance-none pr-8 focus:outline-none"
                >
                  {Object.entries(QUEUE_DISPLAY_MAP).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path d="M6 9L1 4h10L6 9z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="text-sm font-medium text-gray-700 mb-1">Status</div>
              <div className="relative">
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded appearance-none pr-8 focus:outline-none"
                >
                  {Object.entries(STATUS_DISPLAY_MAP).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path d="M6 9L1 4h10L6 9z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="text-sm font-medium text-gray-700 mb-1">Team Remarks</div>
            <textarea
              name="teamRemarks"
              value={formData.teamRemarks}
              onChange={handleChange}
              rows={1}
              className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 focus:outline-none placeholder-[#8A8A8A]"
              placeholder="Previous remarks"
            ></textarea>
          </div>

          <div className="mb-4">
            <div className="text-sm font-medium text-gray-700 mb-1">Client Remarks</div>
            <textarea
              name="clientRemarks"
              value={formData.clientRemarks}
              onChange={handleChange}
              rows={1}
              className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 focus:outline-none placeholder-[#8A8A8A]"
              placeholder="Previous remarks"
            ></textarea>
          </div>

          <div className="mb-4">
            <div className="text-sm font-medium text-gray-700 mb-1">Billing Remarks</div>
            <textarea
              name="billingRemarks"
              value={formData.billingRemarks}
              onChange={handleChange}
              rows={1}
              className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 focus:outline-none placeholder-[#8A8A8A]"
              placeholder="Previous remarks"
            ></textarea>
          </div>

          {/* Last update info and Save button in the same row */}
          <div className="flex justify-between items-center border-t border-gray-200 pt-4 mt-2">
            <div className="text-sm text-gray-500">
              <div>Last Update on : {application?.updated_at ? formatDateForDisplay(application.updated_at) : '3 Apr, 2025'}</div>
              <div>Last Update by : {application?.updated_by_email || 'garvittyagicoe@gmail.com'}</div>
            </div>
            
            <button
              type="button"
              className="px-6 py-2 bg-[#0B498B] text-white rounded text-base font-medium focus:outline-none"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditApplicationModal; 