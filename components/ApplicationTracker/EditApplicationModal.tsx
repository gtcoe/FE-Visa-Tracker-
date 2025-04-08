import { useState, useEffect, useRef, useCallback, ChangeEvent } from 'react';
import { ApplicationData } from '@component/types/application-tracker';
import { COUNTRY, VISA_CATEGORY } from '@component/constants/dropdown/geographical';
import { formatDate } from '@component/utils/dateUtils';
import { APPLICATION_EXTERNAL_STATUS, APPLICATION_QUEUES, STATUS_DISPLAY_MAP, QUEUE_DISPLAY_MAP, QUEUE_TO_STATUS } from '@component/constants/appConstants';
import { getStatusIdFromDisplay, getQueueIdFromDisplay, getStatusOptionsForQueue } from '@component/utils/mapUtils';
import { ToastNotifyError } from '../common/Toast';

interface EditApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  application: ApplicationData | null;
  onSave: (updatedApplication: any) => Promise<void>;
}

// Define a more flexible type for change events
type FormChangeEvent = {
  target: {
    name: string;
    value: string;
  };
};

// Define a type that accepts our complex handleChange function
type ChangeHandler = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> | FormChangeEvent | string, 
  valueOrKey?: any
) => void;

// Define interfaces for DateInput props
interface DateInputProps {
  name: string;
  value: string;
  onChange: ChangeHandler;
  label: string;
  required?: boolean;
  placeholder?: string;
}

// Custom DateInput component that supports both manual entry and date picker
const DateInput: React.FC<DateInputProps> = ({ 
  name, 
  value, 
  onChange, 
  label, 
  required = false,
  placeholder = "DD/MM/YYYY"
}) => {
  const [inputValue, setInputValue] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hiddenDateInputRef = useRef<HTMLInputElement>(null);
  
  // Convert ISO format to display format (DD/MM/YYYY)
  useEffect(() => {
    if (value) {
      try {
        // If it's already in ISO format, convert to DD/MM/YYYY for display
        if (value.includes('-')) {
          const date = new Date(value);
          if (!isNaN(date.getTime())) {
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            setInputValue(`${day}/${month}/${year}`);
          }
        } else {
          // If it's already in DD/MM/YYYY format, use it directly
          setInputValue(value || '');
        }
      } catch (e) {
        console.log(e);
        setInputValue(value || '');
      }
    } else {
      setInputValue('');
    }
  }, [value]);
  
  // Handle clicking outside to close the date picker
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowPicker(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Handle manual typing in DD/MM/YYYY format
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    setInputValue(rawValue);
    
    // Auto-add slashes while typing (if not deleting)
    if (rawValue.length === 2 && inputValue.length < 2 && !rawValue.includes('/')) {
      setInputValue(rawValue + '/');
    } else if (rawValue.length === 5 && inputValue.length < 5 && rawValue.indexOf('/', 3) === -1) {
      setInputValue(rawValue + '/');
    }
    
    // Convert DD/MM/YYYY to YYYY-MM-DD for the actual value
    if (rawValue.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
      const [day, month, year] = rawValue.split('/');
      const isoDate = `${year}-${month}-${day}`;
      // Create a synthetic event to pass to the parent onChange handler
      const syntheticEvent: FormChangeEvent = {
        target: {
          name,
          value: isoDate
        }
      };
      onChange(syntheticEvent);
    }
  };
  
  // Handle date selection from the picker
  const handleDatePickerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isoDate = e.target.value; // YYYY-MM-DD
    
    // Create a synthetic event to pass to the parent onChange handler
    const syntheticEvent: FormChangeEvent = {
      target: {
        name,
        value: isoDate
      }
    };
    
    onChange(syntheticEvent);
    
    // Convert ISO to DD/MM/YYYY for display
    if (isoDate) {
      const [year, month, day] = isoDate.split('-');
      setInputValue(`${day}/${month}/${year}`);
    }
  };
  
  // Toggle date picker visibility
  const openCalendar = useCallback(() => {
    if (hiddenDateInputRef.current) {
      // Use the native date picker
      hiddenDateInputRef.current.showPicker?.();
    }
  }, []);
  
  // Handle keyboard accessibility
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setShowPicker(false);
    }
  }, []);
  
  return (
    <div ref={containerRef} onKeyDown={handleKeyDown}>
      <label className="block text-xs font-normal text-[#1C1C1C] mb-2">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <div className="relative mb-7">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full px-4 py-2 border border-[#E6EAF2] rounded focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-sm placeholder-[#A0A0A0] pr-10 text-gray-700"
          aria-label={`${label} in format DD/MM/YYYY`}
        />
        <button
          type="button"
          onClick={openCalendar}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Open date picker"
          title="Open date picker"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6667 2.66675H3.33333C2.59695 2.66675 2 3.2637 2 4.00008V13.3334C2 14.0698 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0698 14 13.3334V4.00008C14 3.2637 13.403 2.66675 12.6667 2.66675Z" stroke="#A0A0A0" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.6667 1.33325V3.99992" stroke="#A0A0A0" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.33325 1.33325V3.99992" stroke="#A0A0A0" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 6.66675H14" stroke="#A0A0A0" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        {/* Hidden date input for direct calendar access */}
        <input
          ref={hiddenDateInputRef}
          type="date"
          className="sr-only"
          defaultValue={value || ''}
          onChange={handleDatePickerChange}
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

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
    doxReceivedAt: '',
    submissionAt: '',
    collectionAt: '',
  });
  
  const [isLoading, setIsLoading] = useState(false);

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
        doxReceivedAt: application.dox_received_at || '',
        submissionAt: application.submission_at || '',
        collectionAt: application.collection_at || '',
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

  const handleChange: ChangeHandler = (e, valueOrKey?) => {
    // Handle different types of change events
    if (typeof e === 'object' && 'target' in e) {
      const { name, value } = e.target;
      
      if (name === 'queue') {
        const queueId = getQueueIdFromDisplay(value as string);
        
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
          status: getStatusIdFromDisplay(value as string)
        }));
      } 
      else {
        // For other fields, use the value directly
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      }
    } 
    // Handle dropdown changes (name, value) format
    else if (typeof e === 'string' && valueOrKey !== undefined) {
      setFormData(prev => ({
        ...prev,
        [e]: valueOrKey
      }));
    }
  };

  const handleSubmit = async () => {
    if (!application) return;
    
    setIsLoading(true);
    
    try {
      // Get the user token ID from localStorage
      const userInfo = localStorage.getItem('userInfo');
      const userId = userInfo ? JSON.parse(userInfo).id : null;
      
      if (!userId) {
        ToastNotifyError('User authentication error');
        return;
      }
      
      const updatedData = {
        id: application.application_id,
        queue: formData.queue,
        external_status: formData.status,
        team_remarks: formData.teamRemarks,
        client_remarks: formData.clientRemarks,
        billing_remarks: formData.billingRemarks,
        dox_received_at: formData.doxReceivedAt,
        submission_at: formData.submissionAt,
        collection_at: formData.collectionAt,
        token_user_id: userId,
      };
      
      await onSave(updatedData);
      onClose();
    } catch (err) {
      console.error('Error updating application:', err);
      ToastNotifyError('Failed to update application');
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

          {/* Remark fields and Date fields in a 2-column layout */}
          <div className="grid grid-cols-2 gap-6 mb-5">
            {/* Left column - Remarks */}
            <div className="space-y-4">
              <div>
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

              <div>
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

              <div>
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
            </div>

            {/* Right column - Date fields */}
            <div className="space-y-4">
              <DateInput
                name="doxReceivedAt"
                value={formData.doxReceivedAt}
                onChange={handleChange}
                label="Dox Received At"
                placeholder="DD/MM/YYYY"
              />

              <DateInput
                name="submissionAt"
                value={formData.submissionAt}
                onChange={handleChange}
                label="Submission At"
                placeholder="DD/MM/YYYY"
              />

              <DateInput
                name="collectionAt"
                value={formData.collectionAt}
                onChange={handleChange}
                label="Collection At"
                placeholder="DD/MM/YYYY"
              />
            </div>
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