"use client";

import React, { useState } from 'react';
import ClientsTable from './ClientsTable';
import AddClientForm from './AddClientForm';

export interface Client {
  id?: string;
  type: number; // 1 for Corporate, 2 for Agent
  name: string;
  address: string;
  branches: string;
  ownerName: string;
  ownerPhone: string;
  ownerEmail: string;
  country?: string;
  state?: string;
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
  const [clients, setClients] = useState<Client[]>([
    {
      id: '1',
      type: 1, // Corporate
      name: 'ABC Corporate',
      address: '123/b block Dwarka',
      branches: 'Delhi',
      ownerName: 'Dev Kumar',
      ownerPhone: '+91 9898989898',
      ownerEmail: 'devkumar@gmail.com'
    },
    {
      id: '2',
      type: 2, // Agent
      name: 'XYX Corporate',
      address: 'xyz/b block Dwarka',
      branches: 'Delhi',
      ownerName: 'Shiv Kumar',
      ownerPhone: '+91 9898989898',
      ownerEmail: 'shivkumar@gmail.com'
    }
  ]);

  const handleAddClient = (newClient: Client) => {
    // In a real app, you would call an API to save the client
    const clientWithId = {
      ...newClient,
      id: (clients.length + 1).toString()
    };
    setClients([...clients, clientWithId]);
    setActiveTab('list');
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
              className={`px-6 py-4 font-medium text-sm ${activeTab === 'list' ? 'text-[#0B498B] border-b-2 border-[#0B498B]' : 'text-[#696969]'}`}
              onClick={() => setActiveTab('list')}
            >
              Client tracker
            </button>
            <button
              className={`px-6 py-4 font-medium text-sm ${activeTab === 'add' ? 'text-[#0B498B] border-b-2 border-[#0B498B]' : 'text-[#696969]'}`}
              onClick={() => setActiveTab('add')}
            >
              Add Client
            </button>
          </div>
        </div>

        <div className="p-6">
          {activeTab === 'list' ? (
            <ClientsTable clients={clients} />
          ) : (
            <AddClientForm onSubmit={handleAddClient} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageClients; 