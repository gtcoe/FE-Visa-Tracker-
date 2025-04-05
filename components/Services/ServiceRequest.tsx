"use client";

import React, { useState, useEffect } from 'react';
import { FiMapPin, FiPhone, FiGlobe } from 'react-icons/fi';
import CustomDropdown from './CustomDropdown';
import GroupedDropdown from './GroupedDropdown';
import SearchableDropdown from './SearchableDropdown';
import { useRouter } from 'next/navigation';
import { 
  CUSTOMER_TYPE, CUSTOMER_TYPE_LABELS,
  CITIZENSHIP, CITIZENSHIP_LABELS,
  SERVICE, SERVICE_LABELS,
  SERVICE_CATEGORY, SERVICE_CATEGORY_LABELS, SERVICE_CATEGORIES,
  createEnumOptions
} from '@component/constants/dropdown/dropdownConstants';
import {
  COUNTRY, COUNTRY_LABELS,
  STATE, STATE_LABELS,
  COUNTRY_STATES
} from '@component/constants/dropdown/geographical';
import { getAllClients } from '@component/api/client';
import { Client as APIClient } from '@component/components/ManageClients/ManageClients';
import { submitServiceRequest, ServiceRequestPayload, ServiceRequestResponse } from '@component/api/application';
import { STORAGE_KEY } from '@component/constants/formConstants';
import { ToastNotifyError } from '@component/components/common/Toast';
import { APPLICATION_STATUS } from '@component/constants/appConstants';

// Local client interface for dropdown
interface Client {
  client_user_id: number;
  name: string;
}

interface FormData {
  title: string;
  paxType: CUSTOMER_TYPE;
  countryOfResidence: COUNTRY;
  client: number | '';
  client_user_id: number | null;
  stateOfResidence: STATE | '';
  citizenship: CITIZENSHIP;
  services: SERVICE | '';
  referrer: string;
  fileNo: string;
}

const ServiceRequest = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    title: '',
    paxType: CUSTOMER_TYPE.CORPORATE,
    countryOfResidence: COUNTRY.INDIA,
    client: '',
    client_user_id: null,
    stateOfResidence: '',
    citizenship: CITIZENSHIP.INDIAN,
    services: '',
    referrer: '',
    fileNo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [filteredStates, setFilteredStates] = useState<STATE[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoadingClients, setIsLoadingClients] = useState(false);

  // Fetch clients when component mounts
  useEffect(() => {
    fetchClients();
    localStorage.setItem('formMode', '');
  }, []);

  // Fetch clients from API
  const fetchClients = async () => {
    setIsLoadingClients(true);
    
    try {
      // Use the existing API to fetch clients
      const clientsData = await getAllClients();
      
      if (clientsData && Array.isArray(clientsData)) {
        setClients(clientsData.map(client => ({
          client_user_id: client.userId || 0,
          name: client.name || ''
        })));
      } else {
        console.error('Failed to fetch clients: Invalid response format');
        ToastNotifyError('Failed to fetch clients. Please try again.');
      }
    } catch (error) {
      console.error('Error fetching clients:', error);
      ToastNotifyError(error instanceof Error ? error.message : 'Failed to fetch clients');
    } finally {
      setIsLoadingClients(false);
    }
  };

  // Filter states based on selected country
  useEffect(() => {
    if (formData.countryOfResidence) {
      setFilteredStates(COUNTRY_STATES[formData.countryOfResidence] || []);
      // Reset state selection if changing country
      setFormData(prev => ({
        ...prev,
        stateOfResidence: ''
      }));
    } else {
      setFilteredStates([]);
    }
  }, [formData.countryOfResidence]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDropdownChange = (name: string, value: string | number) => {
    if (name === 'client') {
      // When client is selected, find the client object to get the user_id
      const selectedClient = clients.find(client => client.client_user_id === Number(value));
      setFormData(prev => ({
        ...prev,
        [name]: value === '' ? '' : Number(value),
        client_user_id: selectedClient ? selectedClient.client_user_id : null
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate required fields
      const requiredFields: (keyof FormData)[] = [
        'paxType', 'countryOfResidence', 'citizenship', 'services'
      ];
      
      const missingFields = requiredFields.filter(field => !formData[field]);
      
      if (missingFields.length > 0) {
        const errorMsg = `Please fill in all required fields: ${missingFields.join(', ')}`;
        console.error('Missing required fields:', missingFields);
        ToastNotifyError(errorMsg);
        return;
      }

      // Prepare the payload according to the API requirements
      const payload: ServiceRequestPayload = {
        title: formData.title,
        pax_type: Number(formData.paxType),
        country_of_residence: Number(formData.countryOfResidence),
        citizenship: Number(formData.citizenship),
        service_type: Number(formData.services),
        // Optional fields
        client_id: formData.client ? Number(formData.client) : null,
        client_user_id: formData.client_user_id,
        state_of_residence: formData.stateOfResidence ? Number(formData.stateOfResidence) : null,
        referrer: formData.referrer || null,
        file_number: formData.fileNo || undefined,
      };

      console.log('Submitting service request:', payload);
      
      // Call the API service to submit the request
      const response = await submitServiceRequest(payload);
      
      // Store the application ID and reference number in localStorage
      if (response.id) {
        localStorage.setItem('applicationId', String(response.id));
      }
      if (response.requestCode) {
        localStorage.setItem('referenceNumber', response.requestCode);
        
        // Show success message with reference number before navigating (optional)
        // alert(`Service request submitted successfully! Your reference number is: ${response.requestCode}`);
      }
      
      // Navigate to the Common Screen with reference number as a query parameter
      localStorage.setItem(STORAGE_KEY.APPLICATION_INFO, '');
      localStorage.setItem(STORAGE_KEY.APPLICATION_STATUS, APPLICATION_STATUS.STEP1_DONE.toString());

      router.push(`/services/common?reference=${response.requestCode || ''}`);
    } catch (error) {
      console.error('Error submitting service request:', error);
      ToastNotifyError(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Create dropdown options using our enums and helper function
  const paxTypeOptions = createEnumOptions(CUSTOMER_TYPE, CUSTOMER_TYPE_LABELS);
  const countryOptions = createEnumOptions(COUNTRY, COUNTRY_LABELS);
  
  // Generate state options based on filtered states
  const stateOptions = [
    { value: '', label: 'Select' },
    ...filteredStates.map(stateId => ({
      value: stateId,
      label: STATE_LABELS[stateId]
    }))
  ];
  
  // Create client options
  const clientOptions = [
    { value: '', label: 'Select a client' },
    ...clients.map(client => ({
      value: client.client_user_id,
      label: client.name
    }))
  ];
  
  // Create citizenship options and sort them alphabetically by label
  const citizenshipOptions = createEnumOptions(CITIZENSHIP, CITIZENSHIP_LABELS)
    .sort((a, b) => a.label.localeCompare(b.label));
    
  // Create service options with a select option and sorted alphabetically
  const serviceOptions = createEnumOptions(SERVICE, SERVICE_LABELS)
    .map(option => ({
      ...option,
      category: SERVICE_CATEGORIES[option.value as SERVICE],
      categoryLabel: SERVICE_CATEGORY_LABELS[SERVICE_CATEGORIES[option.value as SERVICE]]
    }));

  return (
    <div className="py-6 px-[80px]">
      <h1 className="text-[28px] font-bold text-[#1C1C1C] mb-6">Service Request</h1>
      
      <form onSubmit={handleSubmit}>
        {/* First Card - Form Fields */}
        <div className="bg-white rounded-2xl border border-[#E6EAF2] shadow-sm mb-6 overflow-hidden">
          <div className="relative">
            <div className="absolute left-0 right-0 top-0 border-t border-[#E6EAF2]"></div>
            <div className="p-6">
              <div className="border-b-[1.5px] border-[#E6EAF2] pb-5 -mx-6 px-6">
                <div className="text-lg font-medium text-[#1C1C1C]">
                  Title
                </div>
              </div>
              
              {/* First Row - 5 Fields */}
              <div className="grid grid-cols-5 gap-4 mb-6 mt-6">
                <div>
                  <label htmlFor="paxType" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                    Pax Type
                  </label>
                  <CustomDropdown
                    options={paxTypeOptions}
                    value={formData.paxType}
                    onChange={(value) => handleDropdownChange('paxType', value)}
                    name="paxType"
                  />
                </div>
                
                <div>
                  <label htmlFor="countryOfResidence" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                    Country of Residence
                  </label>
                  <CustomDropdown
                    options={countryOptions}
                    value={formData.countryOfResidence}
                    onChange={(value) => handleDropdownChange('countryOfResidence', value)}
                    name="countryOfResidence"
                  />
                </div>
                
                <div>
                  <label htmlFor="client" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                    Client
                  </label>
                  {isLoadingClients ? (
                    <div className="w-full px-3 py-2 border border-[#E6EAF2] rounded-md bg-gray-50 text-gray-400">
                      Loading clients...
                    </div>
                  ) : (
                    <SearchableDropdown
                      options={clientOptions}
                      value={formData.client}
                      onChange={(value) => handleDropdownChange('client', value)}
                      name="client"
                      placeholder="Select or search client"
                      searchPlaceholder="Search clients..."
                    />
                  )}
                </div>
                
                <div>
                  <label htmlFor="stateOfResidence" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                    State of Residence
                  </label>
                  <CustomDropdown
                    options={stateOptions}
                    value={formData.stateOfResidence}
                    onChange={(value) => handleDropdownChange('stateOfResidence', value)}
                    name="stateOfResidence"
                  />
                </div>
                
                <div>
                  <label htmlFor="citizenship" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                    Choose your Citizenship
                  </label>
                  <CustomDropdown
                    options={citizenshipOptions}
                    value={formData.citizenship}
                    onChange={(value) => handleDropdownChange('citizenship', value)}
                    name="citizenship"
                  />
                </div>
              </div>
              
              {/* Second Row - 5 Fields */}
              <div className="grid grid-cols-5 gap-4">
                <div>
                  <label htmlFor="services" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                    Choose Services
                  </label>
                  <GroupedDropdown
                    options={serviceOptions}
                    value={formData.services}
                    onChange={(value) => handleDropdownChange('services', value)}
                    name="services"
                    placeholder="Select a service"
                  />
                </div>
                
                <div>
                  <label htmlFor="referrer" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                    Referrer
                  </label>
                  <input
                    type="text"
                    id="referrer"
                    name="referrer"
                    placeholder=""
                    value={formData.referrer}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-[#E6EAF2] rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] placeholder-gray-400 text-gray-900"
                  />
                </div>
                
                <div>
                  <label htmlFor="fileNo" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                    File No/ Company Name
                  </label>
                  <input
                    type="text"
                    id="fileNo"
                    name="fileNo"
                    placeholder=""
                    value={formData.fileNo}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-[#E6EAF2] rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] placeholder-gray-400 text-gray-900"
                  />
                </div>
                
                {/* Add two empty columns to maintain 5-column layout */}
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Branch Information and Submit Button */}
        <div className="bg-white rounded-2xl border border-[#E6EAF2] shadow-sm overflow-hidden">
          <div className="p-6">
            <h2 className="text-lg font-medium text-[#1C1C1C] mb-4">Visaistic Branch City</h2>
            
            <div className="mb-4">
              <p className="text-base font-medium text-[#1C1C1C]">VisaisticIndia Pvt. Ltd</p>
            </div>
            
            <div className="flex items-start mb-3">
              <FiMapPin className="text-[#0B498B] mr-2 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-[#1C1C1C]">
                  Head Branch- Delhi :<br />
                  BR-60B, Shalimar Bagh, Opp Federal Bank, New Delhi -110088
                </p>
              </div>
            </div>
            
            <div className="flex items-center mb-3">
              <FiPhone className="text-[#0B498B] mr-2 flex-shrink-0" />
              <p className="text-sm text-[#1C1C1C]">+91 8700947353</p>
            </div>
            
            <div className="flex items-center mb-6">
              <FiGlobe className="text-[#0B498B] mr-2 flex-shrink-0" />
              <p className="text-sm text-[#1C1C1C]">www.visaistic.com</p>
            </div>
            
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[#F59E0B]">
                Note: Please select the nearest branch and mail the documents to the specific address as mentioned
              </p>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#0B498B] text-white px-6 py-2.5 rounded-md hover:bg-[#083968] transition-colors focus:outline-none focus:ring-1 focus:ring-[#0B498B] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ServiceRequest; 