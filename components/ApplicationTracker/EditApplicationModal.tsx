import { useState, useEffect, useRef } from 'react';
import { ApplicationData } from '@component/types/application-tracker';
import { COUNTRY, VISA_CATEGORY } from '@component/constants/dropdown/geographical';
import { formatDate } from '@component/utils/dateUtils';
import { APPLICATION_EXTERNAL_STATUS, APPLICATION_QUEUES, STATUS_DISPLAY_MAP, QUEUE_DISPLAY_MAP, QUEUE_TO_STATUS } from '@component/constants/appConstants';
import { getStatusIdFromDisplay, getQueueIdFromDisplay, getStatusOptionsForQueue } from '@component/utils/mapUtils';

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
    queue: 0,
    status: 0,
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
        queue: application.queue || APPLICATION_QUEUES.SUBMISSION,
        status: application.external_status || APPLICATION_EXTERNAL_STATUS.UNDER_PROCESS,
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
    
    if (name === 'queue') {
      const queueId = getQueueIdFromDisplay(value);
      
      // When queue changes, we need to also update the status to a valid one for this queue
      const statusOptions = getStatusOptionsForQueue(queueId);
      const firstStatusForQueue = statusOptions.length > 0 ? statusOptions[0].id : APPLICATION_EXTERNAL_STATUS.UNDER_PROCESS;
      
      setFormData(prev => ({
        ...prev,
        queue: queueId,
        // Automatically select the first status for the new queue
        status: firstStatusForQueue
      }));
    } 
    else if (name === 'status') {
      setFormData(prev => ({
        ...prev,
        status: getStatusIdFromDisplay(value)
      }));
    } 
    else {
      // For other fields, use the value directly
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async () => {
    if (!application) return;
    
    setIsLoading(true);
    
    try {
      const updatedData = {
        id: application.application_id,
        queue: formData.queue,
        external_status: formData.status,
        team_remarks: formData.teamRemarks,
        client_remarks: formData.clientRemarks,
        billing_remarks: formData.billingRemarks,
      };
      console.log("updatedData", updatedData);
      
      await onSave(updatedData);
      onClose();
    } catch (err) {
      console.error('Error updating application:', err);
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
        className="bg-white w-full max-w-[716px] mx-auto"
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center px-6 pt-8 pb-6">
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
        <div className="px-6 pt-0 pb-[34px]">
          {error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div className="grid grid-cols-3 gap-4 mb-5">
            <div className="w-full px-4 py-3 border border-[#E7E7E7] rounded-lg bg-white">
              <div className="text-xs font-normal text-[#6A6A6A] mb-[6px]">Applicant Name</div>
              <div className="text-[#1C1C1C]">
                {formData.applicantName}
              </div>
            </div>
            <div className="w-full px-4 py-3 border border-[#E7E7E7] rounded-lg bg-white">
              <div className="text-xs font-normal text-[#6A6A6A] mb-[6px]">Country</div>
              <div className="text-[#1C1C1C]">
                {getCountryName(formData.country)}
              </div>
            </div>
            <div className="w-full px-4 py-3 border border-[#E7E7E7] rounded-lg bg-white">
              <div className="text-xs font-normal text-[#6A6A6A] mb-[6px]">Service Type</div>
              <div className="text-[#1C1C1C]">
                {getServiceTypeName(formData.serviceType)}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-5">
            <div className="w-full px-4 py-3 border border-[#E7E7E7] rounded-lg bg-white">
              <div className="text-xs font-normal text-[#6A6A6A] mb-[6px]">Reference ID</div>
              <div className="text-[#1C1C1C]">
                {formData.referenceId}
              </div>
            </div>
            <div className="w-full px-4 py-3 border border-[#E7E7E7] rounded-lg bg-white">
              <div className="text-xs font-normal text-[#6A6A6A] mb-[6px]">Last Update</div>
              <div className="text-[#1C1C1C]">
                {formData.lastUpdate}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-5">
            <div className="col-span-1">
              <div className="text-xs font-normal text-[#1C1C1C] mb-2">Queue</div>
              <div className="relative">
                <select
                  name="queue"
                  value={QUEUE_DISPLAY_MAP[formData.queue as APPLICATION_QUEUES]}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[#E6EAF2] text-[#1C1C1C] rounded-md appearance-none pr-8 focus:outline-none"
                >
                  {Object.entries(QUEUE_DISPLAY_MAP).map(([key, value]) => (
                    <option key={key} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.86128 5.52827C3.12163 5.26792 3.54374 5.26792 3.80409 5.52827L7.99935 9.72353L12.1946 5.52827C12.455 5.26792 12.8771 5.26792 13.1374 5.52827C13.3978 5.78862 13.3978 6.21073 13.1374 6.47108L8.47075 11.1377C8.34573 11.2628 8.17616 11.333 7.99935 11.333C7.82254 11.333 7.65297 11.2628 7.52795 11.1377L2.86128 6.47108C2.60093 6.21073 2.60093 5.78862 2.86128 5.52827Z" fill="#8A8A8A"/>
</svg>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="text-xs font-normal text-[#1C1C1C] mb-2">Status</div>
              <div className="relative">
                <select
                  name="status"
                  value={STATUS_DISPLAY_MAP[formData.status as APPLICATION_EXTERNAL_STATUS]}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[#E6EAF2] text-[#1C1C1C] rounded-md appearance-none pr-8 focus:outline-none"
                >
                  {getStatusOptionsForQueue(formData.queue as APPLICATION_QUEUES).map(status => (
                    <option key={status.id} value={status.label}>
                      {status.label}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.86128 5.52827C3.12163 5.26792 3.54374 5.26792 3.80409 5.52827L7.99935 9.72353L12.1946 5.52827C12.455 5.26792 12.8771 5.26792 13.1374 5.52827C13.3978 5.78862 13.3978 6.21073 13.1374 6.47108L8.47075 11.1377C8.34573 11.2628 8.17616 11.333 7.99935 11.333C7.82254 11.333 7.65297 11.2628 7.52795 11.1377L2.86128 6.47108C2.60093 6.21073 2.60093 5.78862 2.86128 5.52827Z" fill="#8A8A8A"/>
</svg>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="text-xs font-normal text-[#1C1C1C] mb-2">Team Remarks</div>
            <textarea
              name="teamRemarks"
              value={formData.teamRemarks}
              onChange={handleChange}
              rows={1}
              className="w-full px-4 py-2 border border-[#E6EAF2] rounded text-gray-700 focus:outline-none placeholder-[#8A8A8A]"
              placeholder="Previous remarks"
            ></textarea>
          </div>

          <div className="mb-4">
            <div className="text-xs font-normal text-[#1C1C1C] mb-2">Client Remarks</div>
            <textarea
              name="clientRemarks"
              value={formData.clientRemarks}
              onChange={handleChange}
              rows={1}
              className="w-full px-4 py-2 border border-[#E6EAF2] rounded text-gray-700 focus:outline-none placeholder-[#8A8A8A]"
              placeholder="Previous remarks"
            ></textarea>
          </div>

          <div className="mb-4">
            <div className="text-xs font-normal text-[#1C1C1C] mb-2">Billing Remarks</div>
            <textarea
              name="billingRemarks"
              value={formData.billingRemarks}
              onChange={handleChange}
              rows={1}
              className="w-full px-4 py-2 border border-[#E6EAF2] rounded text-gray-700 focus:outline-none placeholder-[#8A8A8A]"
              placeholder="Previous remarks"
            ></textarea>
          </div>

          {/* Last update info and Save button in the same row */}
          <div className="flex justify-between items-center pt-2">
            <div className="text-xs font-normal text-[#1C1C1C]">
              <div>Last Update on : <span className="text-[#0B498B]">{application?.updated_at ? formatDateForDisplay(application.updated_at) : '3 Apr, 2025'}</span></div>
              <div>Last Update by : <span className="text-[#0B498B]">{application?.updated_by_email || 'garvittyagicoe@gmail.com'}</span></div>
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