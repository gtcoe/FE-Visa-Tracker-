"use client";

import React, { useState } from 'react';
import ClientsTable from './ClientsTable';
import AddClientForm from './AddClientForm';
import ClientDetails from './ClientDetails';
import { ToastNotifySuccess, ToastNotifyError } from '../common/Toast';
import { useClientContext, ClientContextClient } from '@component/context/ClientContext';
import SearchBar from '../../components/common/SearchBar';
import { useClients, useSearchClients, useCreateClient } from '@component/hooks/useClients';

// Define the Client interface
export interface Client {
  clientId?: number;
  userId?: number;
  type: number; // 1 for Corporate, 2 for Agent
  name: string;
  address: string;
  branches: string;
  ownerName: string;
  ownerPhone: string;
  ownerEmail: string;
  country?: number;
  state?: number;
  city?: string;
  zipCode?: string;
  gstNo?: string;
  billingCycle?: string;
  spokeName?: string;
  spokePhone?: string;
  spokeEmail?: string;
}

const ManageClients = () => {
  const [showAddClient, setShowAddClient] = useState(false);
  const [showClientDetails, setShowClientDetails] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Use client context
  const { selectedClient, setSelectedClient } = useClientContext();
  
  // Use React Query hooks
  const { 
    data: clients = [], 
    isLoading: isLoadingClients, 
    error: clientsError 
  } = useClients();
  
  const { 
    data: searchResults = [], 
    isLoading: isSearching,
    refetch: performSearch
  } = useSearchClients(searchQuery);
  
  const createClientMutation = useCreateClient();
  
  const handleSubmitSearch = async () => {
    if (searchQuery.trim()) {
      await performSearch();
    }
  };

  const handleCreateClient = async (clientData: Client) => {
    try {
      await createClientMutation.mutateAsync(clientData);
      setShowAddClient(false);
      ToastNotifySuccess("Client added successfully");
    } catch (error) {
      console.error('Error creating client:', error);
      ToastNotifyError("Failed to add client. Please try again.");
    }
  };

  const handleViewClient = (client: Client | ClientContextClient) => {
    setSelectedClient(client as ClientContextClient);
    setShowClientDetails(true);
  };

  const handleBackToList = () => {
    setShowAddClient(false);
    setShowClientDetails(false);
    setSelectedClient(null);
  };

  return (
    <div className="px-[80px]">
      <div className="flex justify-between items-center pt-[32px] pb-[24px]">
        <h1 className="text-[#1C1C1C] text-[28px] font-bold mt-0">
          {showAddClient ? "Add Client" : showClientDetails ? "Client Details" : "Manage Clients"}
        </h1>
        {!showAddClient && !showClientDetails && (
          <button
            onClick={() => setShowAddClient(true)}
            className="bg-[#0B498B] w-[145px] h-[40px] text-white px-[32px] py-[8px] rounded-[4px] font-medium"
          >
            Add Client
          </button>
        )}
        {(showAddClient || showClientDetails) && (
          <button
            onClick={handleBackToList}
            className="text-[#0B498B] w-auto h-[40px] px-[16px] py-[8px] border border-[#0B498B] rounded-[4px] font-medium flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to List
          </button>
        )}
      </div>

      {!showAddClient && !showClientDetails && (
        <div className="mb-6">
          <SearchBar
            placeholder="Search clients..."
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            onSearch={handleSubmitSearch}
          />
        </div>
      )}

      {showAddClient ? (
        <AddClientForm onSubmit={handleCreateClient} />
      ) : showClientDetails && selectedClient ? (
        <ClientDetails client={selectedClient} />
      ) : (
        <div>
          {isLoadingClients || isSearching ? (
            <div className="text-center py-4">Loading clients...</div>
          ) : clientsError ? (
            <div className="text-center py-4 text-red-500">Failed to load clients</div>
          ) : searchQuery.trim() ? (
            <ClientsTable 
              clients={searchResults} 
              onViewClient={handleViewClient}
              isSearchResults={true}
            />
          ) : (
            <ClientsTable 
              clients={clients} 
              onViewClient={handleViewClient}
              isSearchResults={false}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ManageClients; 