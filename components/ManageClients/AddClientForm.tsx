import React, { useState } from 'react';
import { Client } from './ManageClients';
import DropdownArrow from '../common/DropdownArrow';
import { ToastNotifySuccess, ToastNotifyError } from '../common/Toast';

interface AddClientFormProps {
  onSubmit: (client: Client) => void;
}

const AddClientForm = ({ onSubmit }: AddClientFormProps) => {
  const [formData, setFormData] = useState<Client>({
    type: 2, // Agent as default
    name: '',
    address: '',
    branches: '',
    ownerName: '',
    ownerPhone: '',
    ownerEmail: '',
    country: '',
    state: '',
    city: '',
    zipCode: '',
    gstNo: '',
    billingCycle: '',
    spokeName: '',
    spokePhone: '',
    spokeEmail: ''
  });

  const handleSubmit = () => {
    // Validation
    if (!formData.name) {
      ToastNotifyError("Client name is required");
      return;
    }
    if (!formData.ownerName) {
      ToastNotifyError("Owner name is required");
      return;
    }
    if (!formData.ownerEmail) {
      ToastNotifyError("Owner email is required");
      return;
    }

    onSubmit(formData);
    ToastNotifySuccess("Client added successfully");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'type' ? Number(value) : value
    }));
  };

  return (
    <div className="bg-[#F8FAFC] p-6 rounded-lg">
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-4 text-[#1C1C1C]">Client Details</h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <label className="block text-xs text-[#667085] mb-2">Type</label>
              <div className="relative">
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-[#D0D5DD] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-[#0B498B] text-[#1D2939] text-sm appearance-none"
                >
                  <option value={1}>Corporate</option>
                  <option value={2}>Agent</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <DropdownArrow />
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-xs text-[#667085] mb-2">Client Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter client name"
                className="w-full px-3 py-2 border border-[#D0D5DD] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-[#0B498B] text-[#1D2939] text-sm"
              />
            </div>
            
            <div className="col-span-2">
              <label className="block text-xs text-[#667085] mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
                className="w-full px-3 py-2 border border-[#D0D5DD] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-[#0B498B] text-[#1D2939] text-sm"
              />
            </div>
            
            <div>
              <label className="block text-xs text-[#667085] mb-2">Branches</label>
              <input
                type="text"
                name="branches"
                value={formData.branches}
                onChange={handleChange}
                placeholder="Enter branches"
                className="w-full px-3 py-2 border border-[#D0D5DD] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-[#0B498B] text-[#1D2939] text-sm"
              />
            </div>

            <div>
              <label className="block text-xs text-[#667085] mb-2">Country</label>
              <div className="relative">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-[#D0D5DD] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-[#0B498B] text-[#1D2939] text-sm appearance-none"
                >
                  <option value="">Select</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <DropdownArrow />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs text-[#667085] mb-2">State</label>
              <div className="relative">
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-[#D0D5DD] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-[#0B498B] text-[#1D2939] text-sm appearance-none"
                >
                  <option value="">Select</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Maharashtra">Maharashtra</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <DropdownArrow />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs text-[#667085] mb-2">City</label>
              <div className="relative">
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-[#D0D5DD] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-[#0B498B] text-[#1D2939] text-sm appearance-none"
                >
                  <option value="">Select</option>
                  <option value="New Delhi">New Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <DropdownArrow />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs text-[#667085] mb-2">Zip code</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                placeholder="Enter zip code"
                className="w-full px-3 py-2 border border-[#D0D5DD] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-[#0B498B] text-[#1D2939] text-sm"
              />
            </div>

            <div>
              <label className="block text-xs text-[#667085] mb-2">GST No</label>
              <input
                type="text"
                name="gstNo"
                value={formData.gstNo}
                onChange={handleChange}
                placeholder="Enter GST number"
                className="w-full px-3 py-2 border border-[#D0D5DD] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-[#0B498B] text-[#1D2939] text-sm"
              />
            </div>

            <div>
              <label className="block text-xs text-[#667085] mb-2">Billing Cycle</label>
              <input
                type="text"
                name="billingCycle"
                value={formData.billingCycle}
                onChange={handleChange}
                placeholder="Enter email address"
                className="w-full px-3 py-2 border border-[#D0D5DD] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-[#0B498B] text-[#1D2939] text-sm"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4 text-[#1C1C1C]">Owner Details</h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <label className="block text-xs text-[#667085] mb-2">Owner Name</label>
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                placeholder="Enter owner name"
                className="w-full px-3 py-2 border border-[#D0D5DD] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-[#0B498B] text-[#1D2939] text-sm"
              />
            </div>

            <div>
              <label className="block text-xs text-[#667085] mb-2">Owner Phone Number</label>
              <input
                type="text"
                name="ownerPhone"
                value={formData.ownerPhone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full px-3 py-2 border border-[#D0D5DD] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-[#0B498B] text-[#1D2939] text-sm"
              />
            </div>

            <div>
              <label className="block text-xs text-[#667085] mb-2">Owner Email Id</label>
              <input
                type="email"
                name="ownerEmail"
                value={formData.ownerEmail}
                onChange={handleChange}
                placeholder="Enter email address"
                className="w-full px-3 py-2 border border-[#D0D5DD] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-[#0B498B] text-[#1D2939] text-sm"
              />
            </div>

            <div>
              <label className="block text-xs text-[#667085] mb-2">Spoke Name</label>
              <input
                type="text"
                name="spokeName"
                value={formData.spokeName}
                onChange={handleChange}
                placeholder="Enter spoke name"
                className="w-full px-3 py-2 border border-[#D0D5DD] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-[#0B498B] text-[#1D2939] text-sm"
              />
            </div>

            <div>
              <label className="block text-xs text-[#667085] mb-2">Spoke Phone Number</label>
              <input
                type="text"
                name="spokePhone"
                value={formData.spokePhone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full px-3 py-2 border border-[#D0D5DD] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-[#0B498B] text-[#1D2939] text-sm"
              />
            </div>

            <div>
              <label className="block text-xs text-[#667085] mb-2">Spoke Email Id</label>
              <input
                type="email"
                name="spokeEmail"
                value={formData.spokeEmail}
                onChange={handleChange}
                placeholder="Enter email address"
                className="w-full px-3 py-2 border border-[#D0D5DD] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-[#0B498B] text-[#1D2939] text-sm"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-[#0B498B] text-white px-4 py-2 rounded-[8px] font-medium text-sm flex items-center justify-center hover:bg-[#0B498B]/90 transition-colors"
          >
            Save Client
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddClientForm; 