import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Client } from './ManageClients';
import CustomDropdown from '../common/CustomDropdown';
import { ToastNotifyError, ToastNotifySuccess } from '../common/Toast/index';
import { 
  COUNTRY, COUNTRY_LABELS, 
  STATE, STATE_LABELS,
  COUNTRY_STATES 
} from '@component/constants/dropdown/geographical';
import { getClientTypeOptions, CLIENT_TYPE } from '@component/constants/clientConstants';
import { createClient } from '@component/api/client';
import { EMAIL_REGEX, PHONE_REGEX, GST_REGEX } from '@component/constants/regex';

// Define the Option type locally to match CustomDropdown's interface
interface Option {
  value: string | number;
  label: string;
}

interface AddClientFormProps {
  onSubmit: (client: Client) => void;
}

// Ensure Client interface has the right property types
interface EnhancedClient extends Client {
  typeOfClient: number;
  country: COUNTRY;
  state: STATE;
}

const AddClientForm = ({ onSubmit }: AddClientFormProps) => {
  const [formData, setFormData] = useState<EnhancedClient>({
    typeOfClient: 2, // Agent as default
    name: '',
    address: '',
    branches: '',
    ownerName: '',
    ownerPhone: '',
    ownerEmail: '',
    country: COUNTRY.INDIA, // Default to India
    state: STATE.DELHI, // Default to Delhi
    city: '',
    zipCode: '',
    gstNo: '',
    billingCycle: '',
    spokeName: '',
    spokePhone: '',
    spokeEmail: '',
    type: 2 // Agent as default
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // State to hold available states based on selected country
  const [availableStates, setAvailableStates] = useState<STATE[]>([]);

  // Initial form data
  const initialFormData: EnhancedClient = {
    typeOfClient: 2, // Agent as default
    name: '',
    address: '',
    branches: '',
    country: COUNTRY.INDIA, // Default to India
    state: STATE.DELHI, // Default to Delhi
    city: '',
    zipCode: '',
    gstNo: '',
    billingCycle: '',
    ownerName: '',
    ownerPhone: '',
    ownerEmail: '',
    spokeName: '',
    spokePhone: '',
    spokeEmail: '',
    type: 2 // Agent as default
  };

  // Update available states when country changes
  useEffect(() => {
    const statesForCountry = COUNTRY_STATES[formData.country] || [];
    setAvailableStates(statesForCountry);
    
    // If current state is not available in new country, reset it
    if (statesForCountry.length > 0 && !statesForCountry.includes(formData.state)) {
      setFormData(prev => ({
        ...prev,
        state: statesForCountry[0]
      }));
    }
  }, [formData.country]);

  const handleSubmit = async () => {
    // Validate required fields
    if (!formData.typeOfClient || !formData.name) {
      ToastNotifyError('Please fill in all required fields');
      return;
    }
    
    // Validate GST for Corporate clients
    if (formData.typeOfClient === CLIENT_TYPE.CORPORATE && !formData.gstNo) {
      ToastNotifyError('GST Number is mandatory for Corporate clients');
      return;
    }
    
    // Validate email formats
    if (formData.ownerEmail && !EMAIL_REGEX.test(formData.ownerEmail)) {
      ToastNotifyError('Invalid Owner Email');
      return;
    }
    
    if (formData.spokeEmail && !EMAIL_REGEX.test(formData.spokeEmail)) {
      ToastNotifyError('Invalid Spoke Email');
      return;
    }
    
    // Validate phone number formats
    if (formData.ownerPhone && !PHONE_REGEX.test(formData.ownerPhone)) {
      ToastNotifyError('Invalid Owner Phone Number');
      return;
    }
    
    if (formData.spokePhone && !PHONE_REGEX.test(formData.spokePhone)) {
      ToastNotifyError('Invalid Spoke Phone Number');
      return;
    }
    
    // Validate GST number format
    if (formData.gstNo && !GST_REGEX.test(formData.gstNo)) {
      ToastNotifyError('Invalid GST Number format');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const clientData: Client = {
        ...formData,
        type: formData.typeOfClient,
        clientId: 0 // This will be assigned by the backend
      };
      
      const isCreated = await createClient(clientData);
      if (isCreated) {
        ToastNotifySuccess('Client created successfully');
        setFormData({...initialFormData});
      }
      
    } catch (error) {
      console.error('Error creating client:', error);
      ToastNotifyError('Failed to create client');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDropdownChange = (name: string) => (value: string | number) => {
    const numericValue = typeof value === 'string' ? parseInt(value, 10) : value;
    
    console.log(`Dropdown changing: ${name} = ${numericValue} (original: ${value}, type: ${typeof value})`);
    
    setFormData(prev => {
      const updated = {
        ...prev,
        [name]: numericValue
      };
      
      return updated;
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Additional debugging for type options
  const typeOptions = getClientTypeOptions(false);
  console.log('Type options raw:', typeOptions);
  // Convert to an array properly formatted for the dropdown
  const formattedTypeOptions = typeOptions.map(option => ({
    value: option.value.toString(), // Ensure value is a string
    label: option.label
  }));
  console.log('Formatted type options:', formattedTypeOptions);

  // Generate country options from the COUNTRY_LABELS mapping
  const countryOptions: Option[] = useMemo(() => {
    return [
      { value: '', label: 'Select Country' },
      ...Object.entries(COUNTRY_LABELS).map(([value, label]) => ({
        value,
        label
      }))
    ];
  }, []);

  // Generate state options based on available states
  const stateOptions: Option[] = useMemo(() => {
    return [
      { value: '', label: 'Select State' },
      ...availableStates.map(stateValue => ({
        value: stateValue.toString(),
        label: STATE_LABELS[stateValue]
      }))
    ];
  }, [availableStates]);

  // City options (we'll keep these hardcoded since they're not in geographical.ts)
  const cityOptions: Option[] = [
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
              name="typeOfClient"
              value={formData.typeOfClient.toString()}
              onChange={(value) => setFormData(prev => ({ ...prev, typeOfClient: Number(value) }))}
              options={formattedTypeOptions}
              className="w-full"
              placeholder="Select Type"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-xs text-[#1C1C1C] mb-2">Company or corporate Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
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
              value={formData.country.toString()}
              onChange={(value) => setFormData(prev => ({ ...prev, country: Number(value) }))}
              options={countryOptions}
              className="w-full"
              placeholder="Select Country"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-xs text-[#1C1C1C] mb-2">State</label>
            <CustomDropdown
              name="state"
              value={formData.state.toString()}
              onChange={(value) => setFormData(prev => ({ ...prev, state: Number(value) }))}
              options={stateOptions}
              className="w-full"
              placeholder="Select State"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-xs text-[#1C1C1C] mb-2">City</label>
            <CustomDropdown
              name="city"
              value={formData.city || ''}
              onChange={(value) => setFormData(prev => ({ ...prev, city: value.toString() }))}
              options={cityOptions}
              className="w-full"
              placeholder="Select City"
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
            <label className="block text-xs text-[#1C1C1C] mb-2">
              GST No{formData.typeOfClient === CLIENT_TYPE.CORPORATE && <span className="text-red-500 ml-1">*</span>}
              {formData.typeOfClient === CLIENT_TYPE.CORPORATE && <span className="text-xs text-gray-500 ml-1">(Required for Corporate)</span>}
            </label>
            <input
              type="text"
              name="gstNo"
              value={formData.gstNo}
              onChange={handleChange}
              placeholder="Enter GST number"
              className={`w-full px-3 py-2 border border-[#E6EAF2] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-none text-[#1C1C1C] text-sm `}
            />
          </div>

          <div className="col-span-1">
            <label className="block text-xs text-[#1C1C1C] mb-2">Billing Cycle</label>
            <input
              type="text"
              name="billingCycle"
              value={formData.billingCycle}
              onChange={handleChange}
              placeholder="Enter billing cycle"
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
          disabled={isSubmitting}
          className="bg-[#0B498B] text-white px-4 py-2 rounded-[8px] font-medium text-sm flex items-center justify-center hover:bg-[#0B498B]/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Saving...' : 'Save Client'}
        </button>
      </div>
    </div>
  );
};

export default AddClientForm; 