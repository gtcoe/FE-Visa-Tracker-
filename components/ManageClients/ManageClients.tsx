"use client";

import React, { useState, useEffect } from 'react';
import ClientsTable from './ClientsTable';
import AddClientForm from './AddClientForm';
import { getAllClients, createClient } from '@component/api/client';
import { ToastNotifySuccess, ToastNotifyError } from '../common/Toast';
import { useClientContext, ClientContextClient } from '@component/context/ClientContext';

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
  const [activeTab, setActiveTab] = useState<'list' | 'add'>('list');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  // Use client context
  const { clients, setClients } = useClientContext();

  // Fetch clients on component mount
  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    setLoading(true);
    try {
      const clientData = await getAllClients();
      setClients(clientData || []);
    } catch (error) {
      console.error('Error fetching clients:', error);
      ToastNotifyError('Failed to load clients. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddClient = async (newClient: Client) => {
    try {
      // Call API to create client
      await createClient(newClient);
      // Refetch clients to get the updated list
      await fetchClients();
      // Switch back to list view
      setActiveTab('list');
      ToastNotifySuccess("Client added successfully");
    } catch (err) {
      console.error('Failed to add client:', err);
      ToastNotifyError("Failed to add client. Please try again.");
    }
  };

  return (
    <div className="px-[80px]">
      <div className="flex justify-between items-center pt-[32px] pb-[24px]">
        <h1 className="text-[#1C1C1C] text-[28px] font-bold mt-0">Manage Clients</h1>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-[#E6EAF2]">
          <div className="flex">
            <button
              className={`px-6 py-4 w-[159px] text-base ${activeTab === 'list' ? 'text-[#0B498B] border-b-4 border-[#0B498B] font-semibold' : 'text-[#696969] font-normal'}`}
              onClick={() => setActiveTab('list')}
            >
              Client Tracker
            </button>
            <button
              className={`px-6 py-4 w-[159px] text-base ${activeTab === 'add' ? 'text-[#0B498B] border-b-4 border-[#0B498B] font-semibold' : 'text-[#696969]'} font-normal`}
              onClick={() => setActiveTab('add')}
            >
              Add Client
            </button>
          </div>
        </div>

        <div className={`${activeTab === 'list' ? "px-6 py-[21.5px]" : "p-6"}`}>
          {activeTab === 'list' ? (
            <>
              {loading ? (
                <div className="text-center py-4">Loading clients...</div>
              ) : error ? (
                <div className="text-center py-4 text-red-500">{error}</div>
              ) : (
                <ClientsTable clients={clients} />
              )}
            </>
          ) : (
            <AddClientForm onSubmit={handleAddClient} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageClients; 