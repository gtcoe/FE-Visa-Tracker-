"use client";

import React, { useState, useEffect } from 'react';
import CustomDropdown from '../common/CustomDropdown';
import { 
  VISA_COUNTRY, VISA_COUNTRY_LABELS, 
  VISA_CATEGORY, VISA_CATEGORY_LABELS,
  NATIONALITY, NATIONALITY_LABELS,
  STATE, STATE_LABELS,
  COUNTRY, COUNTRY_LABELS
} from '@component/constants/dropdown/geographical';
import { createEnumOptions } from '@component/constants/dropdown/dropdownConstants';
import { ToastNotifyError, ToastNotifySuccess } from '../common/Toast';
import { getAllChecklists, searchChecklists, getChecklistById, ChecklistItem, ChecklistSearchParams } from '@component/api/checklist';

// Dummy data for demonstration (will be replaced with API calls in production)
const dummyData: ChecklistItem[] = [
  {
    id: 1,
    country: VISA_COUNTRY.FRANCE,
    category: VISA_CATEGORY.BUSINESS,
    nationality: NATIONALITY.INDIAN,
    state: STATE.DELHI
  },
  // Add more dummy data as needed
];

// Helper function to create dropdown options
const createOptionsFromEnum = (enumObject: any, enumLabels: Record<number, string>) => {
  return [
    { value: '', label: 'Select' },
    ...Object.entries(enumObject)
      .filter(([key]) => !isNaN(Number(key)))
      .map(([key, value]) => ({
        value: Number(key),
        label: enumLabels[Number(key)]
      }))
  ];
};

const Checklist = () => {
  // State for filter options
  const [filters, setFilters] = useState<ChecklistSearchParams>({
    country: undefined,
    category: undefined,
    nationality: NATIONALITY.INDIAN, // Default to Indian
    state: STATE.DELHI, // Default to Delhi
  });

  // State for checklist items and loading
  const [checklist, setChecklist] = useState<ChecklistItem[]>([]);
  const [filteredChecklist, setFilteredChecklist] = useState<ChecklistItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load initial data when component mounts
  useEffect(() => {
    fetchChecklists();
  }, []);

  // Function to fetch all checklists
  const fetchChecklists = async () => {
    setIsLoading(true);
    
    try {
      // In production, use API call
      // const data = await getAllChecklists();
      // For now, use dummy data with timeout to simulate API call
      setTimeout(() => {
        setChecklist(dummyData);
        setFilteredChecklist(dummyData);
        setIsLoading(false);
      }, 500);
    } catch (error) {
      console.error('Error fetching checklists:', error);
      ToastNotifyError('Failed to load checklists. Please try again.');
      setIsLoading(false);
    }
  };

  // Handle filter changes
  const handleFilterChange = (name: string, value: string | number) => {
    setFilters(prev => ({
      ...prev,
      [name]: value === '' ? undefined : Number(value)
    }));
  };

  // Handle search button click
  const handleSearch = async () => {
    setIsLoading(true);
    
    try {
      // In production, use API call
      // const data = await searchChecklists(filters);
      // For now, filter the dummy data
      const filtered = checklist.filter(item => {
        const countryMatch = !filters.country || item.country === filters.country;
        const categoryMatch = !filters.category || item.category === filters.category;
        const nationalityMatch = !filters.nationality || item.nationality === filters.nationality;
        const stateMatch = !filters.state || item.state === filters.state;
        
        return countryMatch && categoryMatch && nationalityMatch && stateMatch;
      });
      
      // Simulate API delay
      setTimeout(() => {
        setFilteredChecklist(filtered);
        setIsLoading(false);
        
        // Show success message if results found
        if (filtered.length > 0) {
          ToastNotifySuccess(`Found ${filtered.length} checklist item(s)`);
        } else {
          ToastNotifyError('No results found for your search criteria');
        }
      }, 500);
    } catch (error) {
      console.error('Error searching checklists:', error);
      ToastNotifyError('Failed to search checklists. Please try again.');
      setIsLoading(false);
    }
  };

  // Handle view checklist item
  const handleViewItem = async (id: number) => {
    console.log(`View checklist item with ID: ${id}`);
    
    try {
      // In production, this would get details and open a modal or navigate to detail page
      // const details = await getChecklistById(id);
      // console.log('Checklist details:', details);
      
      // For now, just show a message
      ToastNotifySuccess('Viewing checklist item details (not implemented yet)');
    } catch (error) {
      console.error('Error viewing checklist item:', error);
      ToastNotifyError('Failed to load checklist details. Please try again.');
    }
  };

  // Create dropdown options for each filter
  const countryOptions = createOptionsFromEnum(VISA_COUNTRY, VISA_COUNTRY_LABELS);
  const categoryOptions = createOptionsFromEnum(VISA_CATEGORY, VISA_CATEGORY_LABELS);
  const nationalityOptions = createOptionsFromEnum(NATIONALITY, NATIONALITY_LABELS);
  const stateOptions = createOptionsFromEnum(STATE, STATE_LABELS);

  return (
    <div className="px-[80px] py-6">
      <div className="flex items-center pt-[32px] pb-[24px]">
        <h1 className="text-[#1C1C1C] text-[28px] font-bold mt-0">
          Check list
        </h1>
      </div>

      {/* Search Panel */}
      <div className="bg-white rounded-2xl border border-[#E6EAF2] shadow-sm mb-6 overflow-hidden">
        <div className="">
          <h2 className="text-lg font-medium text-[#1C1C1C] px-6 py-5 border-b border-[#E6EAF2]">Search</h2>
          
          <div className="grid grid-cols-5 gap-5 p-6">
            <div>
              <label className="block text-sm font-medium text-[#1C1C1C] mb-2">
                Search Country
              </label>
              <CustomDropdown
                options={countryOptions}
                value={filters.country || ''}
                onChange={(value) => handleFilterChange('country', value)}
                name="country"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#1C1C1C] mb-2">
                Visa Category
              </label>
              <CustomDropdown
                options={categoryOptions}
                value={filters.category || ''}
                onChange={(value) => handleFilterChange('category', value)}
                name="category"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#1C1C1C] mb-2">
                Nationality
              </label>
              <CustomDropdown
                options={nationalityOptions}
                value={filters.nationality || ''}
                onChange={(value) => handleFilterChange('nationality', value)}
                name="nationality"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#1C1C1C] mb-2">
                State
              </label>
              <CustomDropdown
                options={stateOptions}
                value={filters.state || ''}
                onChange={(value) => handleFilterChange('state', value)}
                name="state"
              />
            </div>
            
            <div className="flex items-end">
              <button
                onClick={handleSearch}
                disabled={isLoading}
                className="max-w-[114px]  bg-[#0B498B] text-white px-5 py-2 rounded font-medium h-10 w-full min-w-[150px] hover:bg-[#0A3E75] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Searching...' : 'Search'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Table */}
      <div className="bg-white rounded-2xl border border-[#E6EAF2] shadow-sm overflow-hidden">
        <div className="">
          <h2 className="px-6 pb-5 pt-[22px] text-lg font-medium text-[#1C1C1C] border-b border-[#E6EAF2]">Checklist Details</h2>
          
          {isLoading ? (
            <div className="text-center py-8">
              <svg className="animate-spin h-8 w-8 mx-auto text-[#0B498B]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="mt-2 text-gray-600">Loading...</p>
            </div>
          ) : filteredChecklist.length === 0 ? (
            <div className="text-center py-8 text-gray-500">No results found</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-[#F9FAFB] text-center text-sm font-medium text-gray-500 uppercase tracking-wider border-b border-t border-[#E6EAF2]">
                    <th className="px-4 py-4 border-r border-[#E6EAF2]">COUNTRY</th>
                    <th className="px-4 py-4 border-r border-[#E6EAF2]">CATEGORY</th>
                    <th className="px-4 py-4 border-r border-[#E6EAF2]">NATIONALITY</th>
                    <th className="px-4 py-4 border-r border-[#E6EAF2]">STATES</th>
                    <th className="px-4 py-4">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredChecklist.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 border-b border-[#E6EAF2] last:border-b-0">
                      <td className="px-4 py-4 text-sm text-gray-900 border-r border-[#E6EAF2] text-center">{VISA_COUNTRY_LABELS[item.country]}</td>
                      <td className="px-4 py-4 text-sm text-gray-900 border-r border-[#E6EAF2] text-center">{VISA_CATEGORY_LABELS[item.category]}</td>
                      <td className="px-4 py-4 text-sm text-gray-900 border-r border-[#E6EAF2] text-center">{NATIONALITY_LABELS[item.nationality]}</td>
                      <td className="px-4 py-4 text-sm text-gray-900 border-r border-[#E6EAF2] text-center">{STATE_LABELS[item.state]}</td>
                      <td className="px-4 py-4 text-sm text-gray-900 text-center">
                        <button 
                          onClick={() => handleViewItem(item.id)}
                          className="text-[#0B498B] hover:underline font-medium"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      
      {/* Footer */}
      <div className="text-center py-8 text-gray-500">
        Developed by <a href="#" className="text-[#0B498B] hover:underline">Tech Katalyst</a>
      </div>
    </div>
  );
};

export default Checklist; 