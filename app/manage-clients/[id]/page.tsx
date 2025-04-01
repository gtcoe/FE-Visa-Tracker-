'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ClientDetails from '@component/components/ManageClients/ClientDetails';
import { useClientContext, ClientContextClient } from '@component/context/ClientContext';
import { getClientById } from '@component/api/client';

const ClientDetailsPage = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const { clients, selectedClient, setSelectedClient } = useClientContext();
  const [client, setClient] = useState<ClientContextClient | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClient = async () => {
      if (!params || !params.id) {
        setLoading(false);
        return;
      }

      // If we already have a selected client in context, use that
      if (selectedClient) {
        setClient(selectedClient);
        setLoading(false);
        return;
      }

      // Otherwise, find the client from the clients list in context using the URL parameter
      const clientId = params.id.toString();
      if (clients.length > 0) {
        const foundClient = clients.find(c => c.clientId?.toString() === clientId);
        if (foundClient) {
          // Set the found client in local state and also in context
          setClient(foundClient);
          setSelectedClient(foundClient);
          setLoading(false);
          return;
        }
      }
      
      // If client is not found in context, fetch from backend
      try {
        const clientIdInt = parseInt(clientId);
        if (!isNaN(clientIdInt)) {
          const fetchedClient = await getClientById(clientIdInt);
          if (fetchedClient) {
            setClient(fetchedClient);
            setSelectedClient(fetchedClient);
          } else {
            setFetchError('Could not fetch client details. Please try again later.');
          }
        }
      } catch (error) {
        console.error('Error fetching client:', error);
        setFetchError('An error occurred while fetching client details.');
      } finally {
        setLoading(false);
      }
    };

    fetchClient();
  }, [params, clients, selectedClient, setSelectedClient]);

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
          <p className="text-center text-gray-500">
            {fetchError || "Client not found"}
          </p>
        </div>
      </div>
    );
  }

  return <ClientDetails client={client} />;
};

export default ClientDetailsPage; 