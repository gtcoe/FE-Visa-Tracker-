import React, { useState } from 'react';
import { Client } from './ManageClients';
import CustomDropdown, { DropdownOption } from '../common/CustomDropdown';
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
    console.log("===>handleSubmit");
    // Validation
    if (!formData.name) {
      console.log("===>name");
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

  const handleDropdownChange = (name: string) => (value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: name === 'type' ? Number(value) : value
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const typeOptions: DropdownOption[] = [
    { value: '1', label: 'Corporate' },
    { value: '2', label: 'Agent' }
  ];

  const countryOptions: DropdownOption[] = [
    { value: '', label: 'Select Country' },
    { value: 'India', label: 'India' },
    { value: 'USA', label: 'USA' },
    { value: 'UK', label: 'UK' }
  ];

  const stateOptions: DropdownOption[] = [
    { value: '', label: 'Select State' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Maharashtra', label: 'Maharashtra' }
  ];

  const cityOptions: DropdownOption[] = [
    { value: '', label: 'Select City' },
    { value: 'New Delhi', label: 'New Delhi' },
    { value: 'Mumbai', label: 'Mumbai' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-base font-medium mb-4 text-[#1C1C1C]">Client Details</h2>
        <div className="grid grid-cols-5 gap-x-[25px] gap-y-4">
          <div className="col-span-1">
            <label className="block text-xs text-[#1C1C1C] mb-2">Type</label>
            <CustomDropdown
              name="type"
              value={formData.type.toString()}
              onChange={handleDropdownChange('type')}
              options={typeOptions}
              placeholderColor="#1C1C1C"
              optionColor="#1C1C1C"
              className="w-full"
              placeholder="Select Type"
            />
          </div>
          
          <div className="col-span-1">
            <label className="block text-xs text-[#1C1C1C] mb-2">Client Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter client name"
              className="w-full px-3 py-2 border border-[#E6EAF2] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-none text-[#1C1C1C] text-sm"
            />
          </div>
          
          <div className="col-span-3">
            <label className="block text-xs text-[#1C1C1C] mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
              className="w-full px-3 py-2 border border-[#E6EAF2] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-none text-[#1C1C1C] text-sm"
            />
          </div>
          
          <div className="col-span-1">
            <label className="block text-xs text-[#1C1C1C] mb-2 ">Branches</label>
            <input
              type="text"
              name="branches"
              value={formData.branches}
              onChange={handleChange}
              placeholder="Enter branches"
              className="w-full px-3 py-2 border border-[#E6EAF2] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-none text-[#1C1C1C] text-sm"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-xs text-[#1C1C1C] mb-2">Country</label>
            <CustomDropdown
              name="country"
              value={formData.country || ''}
              onChange={handleDropdownChange('country')}
              options={countryOptions}
              className="w-full"
              placeholder="Select Country"
              placeholderColor="#6A6A6A"
              optionColor="#1C1C1C"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-xs text-[#1C1C1C] mb-2">State</label>
            <CustomDropdown
              name="state"
              value={formData.state || ''}
              onChange={handleDropdownChange('state')}
              options={stateOptions}
              className="w-full"
              placeholder="Select State"
              placeholderColor="#6A6A6A"
              optionColor="#1C1C1C"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-xs text-[#1C1C1C] mb-2">City</label>
            <CustomDropdown
              name="city"
              value={formData.city || ''}
              onChange={handleDropdownChange('city')}
              options={cityOptions}
              className="w-full"
              placeholder="Select City"
              placeholderColor="#6A6A6A"
              optionColor="#1C1C1C"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-xs text-[#1C1C1C] mb-2">Zip code</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              placeholder="Enter zip code"
              className="w-full px-3 py-2 border border-[#E6EAF2] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-none text-[#1C1C1C] text-sm"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-xs text-[#1C1C1C] mb-2">GST No</label>
            <input
              type="text"
              name="gstNo"
              value={formData.gstNo}
              onChange={handleChange}
              placeholder="Enter GST number"
              className="w-full px-3 py-2 border border-[#E6EAF2] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-none text-[#1C1C1C] text-sm"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-xs text-[#1C1C1C] mb-2">Billing Cycle</label>
            <input
              type="text"
              name="billingCycle"
              value={formData.billingCycle}
              onChange={handleChange}
              placeholder="Enter email address"
              className="w-full px-3 py-2 border border-[#E6EAF2] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-none text-[#1C1C1C] text-sm"
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-base font-medium mb-4 text-[#1C1C1C]">Owner Details</h2>
        <div className="grid grid-cols-5 gap-x-4 gap-y-4">
          <div className="col-span-1">
            <label className="block text-xs text-[#1C1C1C] mb-2">Owner Name</label>
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              placeholder="Enter owner name"
              className="w-full px-3 py-2 border border-[#E6EAF2] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-none text-[#1C1C1C] text-sm"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-xs text-[#1C1C1C] mb-2">Owner Phone Number</label>
            <input
              type="text"
              name="ownerPhone"
              value={formData.ownerPhone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full px-3 py-2 border border-[#E6EAF2] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-none text-[#1C1C1C] text-sm"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-xs text-[#1C1C1C] mb-2">Owner Email Id</label>
            <input
              type="email"
              name="ownerEmail"
              value={formData.ownerEmail}
              onChange={handleChange}
              placeholder="Enter email address"
              className="w-full px-3 py-2 border border-[#E6EAF2] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-none text-[#1C1C1C] text-sm"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-xs text-[#1C1C1C] mb-2">Spoke Name</label>
            <input
              type="text"
              name="spokeName"
              value={formData.spokeName}
              onChange={handleChange}
              placeholder="Enter spoke name"
              className="w-full px-3 py-2 border border-[#E6EAF2] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-none text-[#1C1C1C] text-sm"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-xs text-[#1C1C1C] mb-2">Spoke Phone Number</label>
            <input
              type="text"
              name="spokePhone"
              value={formData.spokePhone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full px-3 py-2 border border-[#E6EAF2] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-none text-[#1C1C1C] text-sm"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-xs text-[#1C1C1C] mb-2">Spoke Email Id</label>
            <input
              type="email"
              name="spokeEmail"
              value={formData.spokeEmail}
              onChange={handleChange}
              placeholder="Enter email address"
              className="w-full px-3 py-2 border border-[#E6EAF2] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-none text-[#1C1C1C] text-sm"
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
  );
};

export default AddClientForm; 