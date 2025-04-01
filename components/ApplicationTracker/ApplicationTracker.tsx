"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ToastNotifySuccess, ToastNotifyError } from '@component/components/common/Toast';
import SearchBar from '@component/components/common/SearchBar';
import { useSearchApplications } from '@component/hooks/useApplications';

const ApplicationTracker = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    status: '',
    date: '',
    client: '',
  });
  
  // Use React Query for searching applications
  const { 
    data: applications = [], 
    isLoading, 
    error, 
    refetch: performSearch
  } = useSearchApplications({
    query: searchQuery,
    ...selectedFilters
  }, false); // Don't fetch on mount, wait for user to search
  
  const handleSearch = async () => {
    try {
      await performSearch();
    } catch (err) {
      console.error('Error searching applications:', err);
      ToastNotifyError('Failed to search applications');
    }
  };
  
  const handleFilterChange = (filterType: string, value: string) => {
    setSelectedFilters({
      ...selectedFilters,
      [filterType]: value,
    });
  };
  
  const handleViewApplication = (applicationId: string | number) => {
    router.push(`/application/${applicationId}`);
  };
  
  const handleCreateApplication = () => {
    router.push('/application/create');
  };

  return (
    <div className="px-[80px]">
      <div className="flex justify-between items-center pt-[32px] pb-[24px]">
        <h1 className="text-[#1C1C1C] text-[28px] font-bold mt-0">Application Tracker</h1>
        <button
          onClick={handleCreateApplication}
          className="bg-[#0B498B] w-auto h-[40px] text-white px-[32px] py-[8px] rounded-[4px] font-medium"
        >
          Create Application
        </button>
      </div>

      <div className="mb-6">
        <SearchBar
          placeholder="Search by reference number, applicant name..."
          value={searchQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
          onSearch={handleSearch}
        />
      </div>

      <div className="mb-6 flex space-x-4">
        <select
          className="border border-[#E6EAF2] rounded-[4px] px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#0B498B]"
          value={selectedFilters.status}
          onChange={(e) => handleFilterChange('status', e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
        
        <select
          className="border border-[#E6EAF2] rounded-[4px] px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#0B498B]"
          value={selectedFilters.date}
          onChange={(e) => handleFilterChange('date', e.target.value)}
        >
          <option value="">All Dates</option>
          <option value="today">Today</option>
          <option value="last-week">Last Week</option>
          <option value="last-month">Last Month</option>
        </select>
        
        <select
          className="border border-[#E6EAF2] rounded-[4px] px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#0B498B]"
          value={selectedFilters.client}
          onChange={(e) => handleFilterChange('client', e.target.value)}
        >
          <option value="">All Clients</option>
          <option value="corporate">Corporate</option>
          <option value="agent">Agent</option>
        </select>
      </div>

      {isLoading ? (
        <div className="text-center py-8">Loading applications...</div>
      ) : error ? (
        <div className="text-center py-8 text-red-500">Failed to load applications</div>
      ) : applications.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          {searchQuery || selectedFilters.status || selectedFilters.date || selectedFilters.client
            ? 'No applications found matching your search criteria'
            : 'No applications available. Click "Create Application" to get started.'}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reference #
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Applicant
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {applications.map((application) => (
                <tr 
                  key={application.id} 
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => handleViewApplication(application.id)}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                    {application.referenceNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {application.applicantName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {application.applicationType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(application.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${application.status === 'approved' ? 'bg-green-100 text-green-800' : 
                        application.status === 'rejected' ? 'bg-red-100 text-red-800' : 
                        application.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-gray-100 text-gray-800'}`}>
                      {application.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {application.clientName}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ApplicationTracker;
