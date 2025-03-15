// components/StatusForm.tsx
import { useState, useRef, useEffect, useCallback, ChangeEvent } from "react";
import CustomDropdown from "../common/CustomDropdown";

interface FormData {
  applicationId?: string;
  travelersName?: string;
  travelersPassportNo?: string;
  visaBranch?: string;
  entryGenerationBranch?: string;
  customerType?: string;
  applicationDate?: string;
  queue?: string;
  status?: string;
  country?: string;
  [key: string]: string | undefined;
}

interface StatusFormProps {
  onSearch: (data: FormData) => void;
}

interface DropdownOption {
  label: string;
  value: string;
}

// Define a more flexible type for change events
type FormChangeEvent = {
  target: {
    name: string;
    value: string;
  };
};

// Define interfaces for props and event handlers
interface DateInputProps {
  name: string;
  value: string;
  onChange: (e: FormChangeEvent) => void;
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
          setInputValue(value);
        }
      } catch (e) {
        console.log(e);
        setInputValue(value || '');
      }
    } else {
      setInputValue('');
    }
  }, [value]);
  
  // Focus and initialize the date picker when it appears
  useEffect(() => {
    if (showPicker && pickerRef.current) {
      // Set default date to today if no value is present
      if (!value && pickerRef.current) {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        pickerRef.current.value = `${year}-${month}-${day}`;
      }
      
      // Focus the picker
      setTimeout(() => {
        if (pickerRef.current) {
          pickerRef.current.focus();
        }
      }, 50);
    }
  }, [showPicker, value]);
  
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
      <label className="block text-xs text-[#696969] mb-1">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full h-10 px-3 border border-[#E6EAF2] rounded focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-sm placeholder-[#A0A0A0] pr-10"
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
        
        {showPicker && (
          <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg border border-gray-300">
            <input
              ref={pickerRef}
              type="date"
              defaultValue={value || ''}
              onChange={handleDatePickerChange}
              className="w-full px-3 py-2 border-0 focus:outline-none focus:ring-1 focus:ring-[#0B498B]"
              aria-label={`Date picker for ${label}`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const StatusForm = ({ onSearch }: StatusFormProps) => {
  const [formData, setFormData] = useState({
    referenceNo: "",
    customerType: "",
    customer: "",
    travelersName: "",
    travelersPassportNo: "",
    visaBranch: "",
    entryGenerationBranch: "",
    fromDate: "",
    toDate: "",
    queue: "In Transit Queue", // Default value as shown in Figma
    status: "Doc Received", // Default value as shown in Figma
    country: "",
    billingToCompany: "",
  });

  const createOptions = (items: string[]): DropdownOption[] => {
    return items.map(item => ({ label: item, value: item }));
  };

  const customerTypeOptions = createOptions(["Individual", "Corporate", "Family"]);
  const visaBranchOptions = createOptions(["Branch 1", "Branch 2", "Branch 3"]);
  const entryGenerationOptions = createOptions(["Branch 1", "Branch 2", "Branch 3"]);
  const queueOptions = createOptions(["In Transit Queue", "Processing Queue", "Completed Queue"]);
  const statusOptions = createOptions(["Doc Received", "Processing", "Approved", "Rejected"]);
  const countryOptions = createOptions(["United States", "United Kingdom", "Canada", "Australia"]);

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  // Adapter function to convert the DateInput component's onChange handler to work with handleChange
  const handleDateInputChange = (e: FormChangeEvent) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(formData);
  };

  return (
    <div className="px-6 py-6">
      <h3 className="text-lg font-medium text-[#1C1C1C] pb-3 border-b border-[#E6EAF2] mb-6">
        Check Realtime Status Online
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First row - 5 fields as per Figma */}
        <div className="grid grid-cols-5 gap-5">
          <div>
            <label className="block text-xs text-[#696969] mb-1">
              Reference No
            </label>
            <input
              type="text"
              value={formData.referenceNo}
              onChange={(e) => handleChange("referenceNo", e.target.value)}
              className="w-full h-10 px-3 border border-[#E6EAF2] rounded focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-sm placeholder-[#A0A0A0]"
              placeholder="Enter ref no."
            />
          </div>

          <div>
            <label className="block text-xs text-[#696969] mb-1">Customer Type</label>
            <CustomDropdown
              options={customerTypeOptions}
              value={formData.customerType || ''}
              onChange={(value) => handleChange("customerType", value)}
              placeholder="Select"
              className="h-10"
            />
          </div>

          <div>
            <label className="block text-xs text-[#696969] mb-1">
              Customer
            </label>
            <input
              type="text"
              value={formData.customer}
              onChange={(e) => handleChange("customer", e.target.value)}
              className="w-full h-10 px-3 border border-[#E6EAF2] rounded focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-sm placeholder-[#A0A0A0]"
              placeholder="Enter customer"
            />
          </div>

          <div>
            <label className="block text-xs text-[#696969] mb-1">
              Traveler&apos;s Name
            </label>
            <input
              type="text"
              value={formData.travelersName}
              onChange={(e) => handleChange("travelersName", e.target.value)}
              className="w-full h-10 px-3 border border-[#E6EAF2] rounded focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-sm placeholder-[#A0A0A0]"
              placeholder="Enter name"
            />
          </div>

          <div>
            <label className="block text-xs text-[#696969] mb-1">
              Traveler&apos;s Passport No
            </label>
            <input
              type="text"
              value={formData.travelersPassportNo}
              onChange={(e) => handleChange("travelersPassportNo", e.target.value)}
              className="w-full h-10 px-3 border border-[#E6EAF2] rounded focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-sm placeholder-[#A0A0A0]"
              placeholder="Enter passport number"
            />
          </div>
        </div>

        {/* Second row - 5 fields as per Figma */}
        <div className="grid grid-cols-5 gap-5">
          <div>
            <label className="block text-xs text-[#696969] mb-1">
              Visa Branch
            </label>
            <CustomDropdown
              options={visaBranchOptions}
              value={formData.visaBranch || ''}
              onChange={(value) => handleChange("visaBranch", value)}
              placeholder="Select"
              className="h-10"
            />
          </div>

          <div>
            <label className="block text-xs text-[#696969] mb-1">
              Entry Generation Branch
            </label>
            <CustomDropdown
              options={entryGenerationOptions}
              value={formData.entryGenerationBranch || ''}
              onChange={(value) => handleChange("entryGenerationBranch", value)}
              placeholder="Select"
              className="h-10"
            />
          </div>

          <DateInput
            name="fromDate"
            value={formData.fromDate}
            onChange={handleDateInputChange}
            label="From Date"
            placeholder="DD/MM/YYYY"
          />

          <DateInput
            name="toDate"
            value={formData.toDate}
            onChange={handleDateInputChange}
            label="To Date"
            placeholder="DD/MM/YYYY"
          />

          <div>
            <label className="block text-xs text-[#696969] mb-1">Queue</label>
            <CustomDropdown
              options={queueOptions}
              value={formData.queue || ''}
              onChange={(value) => handleChange("queue", value)}
              placeholder="Select"
              className="h-10"
            />
          </div>
        </div>

        {/* Third row - 3 fields + button as per Figma */}
        <div className="grid grid-cols-5 gap-5">
          <div>
            <label className="block text-xs text-[#696969] mb-1">Status</label>
            <CustomDropdown
              options={statusOptions}
              value={formData.status || ''}
              onChange={(value) => handleChange("status", value)}
              placeholder="Select"
              className="h-10"
            />
          </div>

          <div>
            <label className="block text-xs text-[#696969] mb-1">Country</label>
            <CustomDropdown
              options={countryOptions}
              value={formData.country || ''}
              onChange={(value) => handleChange("country", value)}
              placeholder="Select Country"
              className="h-10"
            />
          </div>

          <div>
            <label className="block text-xs text-[#696969] mb-1">
              Billing to Company
            </label>
            <input
              type="text"
              value={formData.billingToCompany}
              onChange={(e) => handleChange("billingToCompany", e.target.value)}
              className="w-full h-10 px-3 border border-[#E6EAF2] rounded focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-sm placeholder-[#A0A0A0]"
              placeholder="Enter company"
            />
          </div>

          <div className="col-span-1"></div>

          <div className="flex justify-end items-end">
            <button
              type="submit"
              className="h-10 bg-[#0B498B] text-white px-5 rounded font-medium hover:bg-[#0A3E75] transition-colors"
            >
              Check Status
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StatusForm;
