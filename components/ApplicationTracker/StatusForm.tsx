// components/StatusForm.tsx
import { useState } from "react";
import CustomDropdown from "../common/CustomDropdown";

interface StatusFormProps {
  onSearch: (data: any) => void;
}

interface DropdownOption {
  label: string;
  value: string;
}

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
              Traveler's Name
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
              Traveler's Passport No
            </label>
            <input
              type="text"
              value={formData.travelersPassportNo}
              onChange={(e) => handleChange("travelersPassportNo", e.target.value)}
              className="w-full h-10 px-3 border border-[#E6EAF2] rounded focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-sm placeholder-[#A0A0A0]"
              placeholder="Enter passport no."
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

          <div>
            <label className="block text-xs text-[#696969] mb-1">
              From Date
            </label>
            <div className="relative">
              <input
                type="date"
                value={formData.fromDate}
                onChange={(e) => handleChange("fromDate", e.target.value)}
                className="w-full h-10 px-3 border border-[#E6EAF2] rounded focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-sm placeholder-[#A0A0A0] date-input"
                placeholder="dd/mm/yyyy"
                style={{ 
                  colorScheme: 'light',
                  appearance: 'none',
                  WebkitAppearance: 'none',
                  MozAppearance: 'none'
                }}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6667 2.66675H3.33333C2.59695 2.66675 2 3.2637 2 4.00008V13.3334C2 14.0698 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0698 14 13.3334V4.00008C14 3.2637 13.403 2.66675 12.6667 2.66675Z" stroke="#A0A0A0" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.6667 1.33325V3.99992" stroke="#A0A0A0" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.33325 1.33325V3.99992" stroke="#A0A0A0" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 6.66675H14" stroke="#A0A0A0" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs text-[#696969] mb-1">
              To Date
            </label>
            <div className="relative">
              <input
                type="date"
                value={formData.toDate}
                onChange={(e) => handleChange("toDate", e.target.value)}
                className="w-full h-10 px-3 border border-[#E6EAF2] rounded focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-sm placeholder-[#A0A0A0] date-input"
                placeholder="dd/mm/yyyy"
                style={{ 
                  colorScheme: 'light',
                  appearance: 'none',
                  WebkitAppearance: 'none',
                  MozAppearance: 'none'
                }}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6667 2.66675H3.33333C2.59695 2.66675 2 3.2637 2 4.00008V13.3334C2 14.0698 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0698 14 13.3334V4.00008C14 3.2637 13.403 2.66675 12.6667 2.66675Z" stroke="#A0A0A0" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.6667 1.33325V3.99992" stroke="#A0A0A0" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.33325 1.33325V3.99992" stroke="#A0A0A0" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 6.66675H14" stroke="#A0A0A0" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

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
