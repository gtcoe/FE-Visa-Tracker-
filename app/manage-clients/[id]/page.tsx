'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ClientDetails from '@component/components/ManageClients/ClientDetails';
import { Client } from '@component/components/ManageClients/ManageClients';

// Sample client data for demonstration
const sampleClients: Client[] = [
  {
    id: '1',
    type: 1, // Corporate
    name: 'ABC Corporation',
    address: 'PlotNo 58, Regent Gateway, Doddanakundi Village',
    branches: 'Kiadb Industrial Area, Itpl Roa',
    ownerName: 'Sahil',
    ownerPhone: '+91 9898989898',
    ownerEmail: 'sahil.dua@gmail.com',
    country: 'India',
    state: 'Karnataka',
    city: 'Bangalore',
    zipCode: '560048',
    gstNo: '56252686926',
    billingCycle: 'Monthly',
    spokeName: 'Kartik',
    spokePhone: '+91 9898989898',
    spokeEmail: 'kartik.chopra@gmail.com'
  },
  {
    id: '2',
    type: 2, // Agent
    name: 'XYZ Corporate',
    address: 'xyz/b block Dwarka',
    branches: 'Delhi',
    ownerName: 'Shiv Kumar',
    ownerPhone: '+91 9898989898',
    ownerEmail: 'shivkumar@gmail.com',
    country: 'India',
    state: 'Delhi',
    city: 'New Delhi',
    zipCode: '110075',
    gstNo: '29GGGGG1314R9Z6',
    billingCycle: 'Quarterly'
  }
];

const ClientDetailsPage = () => {
  const params = useParams();
  const [client, setClient] = useState<Client | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, you would fetch the client data from an API
    // For this example, we're using the sample data
    const clientId = params.id as string;
    const foundClient = sampleClients.find(c => c.id === clientId);
    
    // Simulate API call delay
    setTimeout(() => {
      setClient(foundClient || null);
      setLoading(false);
    }, 500);
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-gray-200 mb-4"></div>
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!client) {
    return (
      <div className="p-6 bg-[#E6EAF2]  min-h-screen">
        <h1 className="text-2xl font-bold text-[#1C1C1C] mb-6">Client Details</h1>
        <div className="bg-white rounded-lg border border-[#E6EAF2] shadow-sm p-6">
          <p className="text-center text-gray-500">Client not found</p>
        </div>
      </div>
    );
  }

  return <ClientDetails client={client} />;
};

export default ClientDetailsPage; 