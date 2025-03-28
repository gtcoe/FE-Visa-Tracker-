"use client";

import React from 'react';
import { 
  STATE, 
  STATE_LABELS, 
  COUNTRY, 
  COUNTRY_LABELS,
  CITY,
  CITY_LABELS
} from '@component/constants/dropdown/geographical';

// Define interface for passenger info
export interface PassengerInfo {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  dob: string;
  passport_number: string;
  address_line_1: string;
  address_line_2: string;
  city: number;
  state: number;
  country: number;
  zip: string;
  occupation: string;
}

// Define props for the component
interface PassengerSearchResultsProps {
  passengers: PassengerInfo[];
  onUsePassenger: (passengerId: number) => void;
}

// Format date from ISO string to YYYY-MM-DD
const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toISOString().split('T')[0];
};

// Get the state label from the state ID
const getStateLabel = (stateId: number): string => {
  return STATE_LABELS[stateId as STATE] || `State ID: ${stateId}`;
};

// Get the country label from the country ID
const getCountryLabel = (countryId: number): string => {
  return COUNTRY_LABELS[countryId as COUNTRY] || `Country ID: ${countryId}`;
};

// Get the city label from the city ID
const getCityLabel = (cityId: number): string => {
  return CITY_LABELS[cityId as CITY] || `City ID: ${cityId}`;
};

const PassengerSearchResults: React.FC<PassengerSearchResultsProps> = ({ 
  passengers,
  onUsePassenger 
}) => {
  if (!passengers || passengers.length === 0) {
    return null;
  }

  return (
    <div className="mx-6 mb-6 border-[1.5px] border-[#E6EAF2] rounded-2xl">
      <div className="bg-[#F6F7F9] py-4 px-6 border-b border-gray-200 rounded-t-2xl">
        <p className="text-base font-medium text-[#1C1C1C]">Search Results</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date of Birth
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Passport Number
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Occupation
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {passengers.map((passenger) => (
              <tr key={passenger.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {`${passenger.first_name} ${passenger.last_name}`}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {passenger.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {formatDate(passenger.dob)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {passenger.passport_number}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <div>
                    {`${passenger.address_line_1}${passenger.address_line_2 ? ', ' + passenger.address_line_2 : ''}`}
                  </div>
                  <div>
                    {`${getCityLabel(passenger.city)}, ${getStateLabel(passenger.state)}, ${getCountryLabel(passenger.country)}, ${passenger.zip}`}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {passenger.occupation}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button
                    onClick={() => onUsePassenger(passenger.id)}
                    className="bg-[#0B498B] text-white px-4 py-1.5 rounded-md hover:bg-[#083968] transition-colors focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-sm"
                  >
                    Use
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PassengerSearchResults; 