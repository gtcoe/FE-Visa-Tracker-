'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Client } from '@component/components/ManageClients/ManageClients';

// Updated interface to make sure clientId can be either number, string, or undefined
export interface ClientContextClient extends Omit<Client, 'clientId'> {
  clientId?: number | string;
}

interface ClientContextType {
  clients: ClientContextClient[];
  setClients: (clients: ClientContextClient[]) => void;
  selectedClient: ClientContextClient | null;
  setSelectedClient: (client: ClientContextClient | null) => void;
}

// Create context with default values
const ClientContext = createContext<ClientContextType>({
  clients: [],
  setClients: () => {},
  selectedClient: null,
  setSelectedClient: () => {},
});

// Hook for using the client context
export const useClientContext = () => useContext(ClientContext);

// Provider component
export const ClientProvider = ({ children }: { children: ReactNode }) => {
  const [clients, setClients] = useState<ClientContextClient[]>([]);
  const [selectedClient, setSelectedClient] = useState<ClientContextClient | null>(null);

  return (
    <ClientContext.Provider
      value={{
        clients,
        setClients,
        selectedClient,
        setSelectedClient,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
}; 