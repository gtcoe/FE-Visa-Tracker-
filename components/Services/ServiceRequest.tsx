"use client";

import React, { useState } from 'react';
import { FiMapPin, FiPhone, FiGlobe } from 'react-icons/fi';
import CustomDropdown from './CustomDropdown';
import { useRouter } from 'next/navigation';

const ServiceRequest = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    paxType: 'Corporate',
    countryOfResidence: 'India',
    client: '',
    stateOfResidence: '',
    citizenship: 'Indian',
    services: '',
    referrer: '',
    fileNo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDropdownChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Make POST API request to save form data
      // For now, we'll just simulate the API call with a timeout
      // Replace this with your actual API call
      console.log('Submitting form data:', formData);
      
      // Simulating API request
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Navigate to the common screen with Search Pax tab active
      router.push('/services/common-screen');
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const paxTypeOptions = [
    { value: 'Corporate', label: 'Corporate' },
    { value: 'Individual', label: 'Individual' }
  ];

  const countryOptions = [
    { value: 'India', label: 'India' },
    { value: 'USA', label: 'USA' },
    { value: 'UK', label: 'UK' },
    { value: 'Canada', label: 'Canada' }
  ];

  const stateOptions = [
    { value: '', label: 'Select' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Maharashtra', label: 'Maharashtra' },
    { value: 'Karnataka', label: 'Karnataka' }
  ];

  const citizenshipOptions = [
    { value: 'Indian', label: 'Indian' },
    { value: 'American', label: 'American' },
    { value: 'British', label: 'British' },
    { value: 'Canadian', label: 'Canadian' }
  ];

  const serviceOptions = [
    { value: '', label: 'Select' },
    { value: 'Visa', label: 'Visa' },
    { value: 'Passport', label: 'Passport' },
    { value: 'Travel', label: 'Travel' }
  ];

  const referrerOptions = [
    { value: '', label: 'Select' },
    { value: 'Agent', label: 'Agent' },
    { value: 'Friend', label: 'Friend' },
    { value: 'Online', label: 'Online' }
  ];

  const fileNoOptions = [
    { value: '', label: 'Select' },
    { value: 'File1', label: 'File 1' },
    { value: 'File2', label: 'File 2' },
    { value: 'Company1', label: 'Company 1' }
  ];

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
                  <input
                    type="text"
                    id="client"
                    name="client"
                    placeholder="-"
                    value={formData.client}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-[#E6EAF2] rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B]"
                  />
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
                  <CustomDropdown
                    options={serviceOptions}
                    value={formData.services}
                    onChange={(value) => handleDropdownChange('services', value)}
                    name="services"
                  />
                </div>
                
                <div>
                  <label htmlFor="referrer" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                    Referrer
                  </label>
                  <CustomDropdown
                    options={referrerOptions}
                    value={formData.referrer}
                    onChange={(value) => handleDropdownChange('referrer', value)}
                    name="referrer"
                  />
                </div>
                
                <div>
                  <label htmlFor="fileNo" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                    File No/ Company Name
                  </label>
                  <CustomDropdown
                    options={fileNoOptions}
                    value={formData.fileNo}
                    onChange={(value) => handleDropdownChange('fileNo', value)}
                    name="fileNo"
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
                className="bg-[#0B498B] text-white px-4 py-2 rounded-md hover:bg-[#083968] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B498B] focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Saving...' : 'Save & Continue'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ServiceRequest; 