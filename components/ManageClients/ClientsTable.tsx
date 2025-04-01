import React from 'react';
import { Client } from './ManageClients';
import { useClientContext, ClientContextClient } from '@component/context/ClientContext';
import { useRouter } from 'next/navigation';
import PrefetchLink from '@component/components/common/PrefetchLink';

interface ClientsTableProps {
  clients: Client[] | ClientContextClient[];
  onViewClient?: (client: Client | ClientContextClient) => void;
  isSearchResults?: boolean;
}

const ClientsTable = ({ clients, onViewClient, isSearchResults = false }: ClientsTableProps) => {
  const { setSelectedClient } = useClientContext();
  const router = useRouter();
  
  const getClientType = (type: number) => {
    return type === 1 ? 'Corporate' : 'Agent';
  };

  const handleClientClick = (client: Client | ClientContextClient) => {
    // Set the selected client in context
    setSelectedClient(client as ClientContextClient);
    
    // If onViewClient prop is provided, call it instead of navigating
    if (onViewClient) {
      onViewClient(client);
    } else {
      // Otherwise navigate to the client details page
      router.push(`/manage-clients/${client.clientId}`);
    }
  };

  return (
    <div>
      {isSearchResults && (
        <div className="mb-4 text-sm text-gray-600">
          Found {clients.length} result{clients.length !== 1 ? 's' : ''}
        </div>
      )}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full border border-[#E6EAF2] rounded-[16px] overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-[#F9FAFB]">
              <tr className="border-b border-[#E6EAF2]">
                <th className="text-center py-3 text-[#696969] text-xs font-medium px-6 border-r border-[#E6EAF2] w-[10%] tracking-[0.03em] first:rounded-tl-[16px] last:rounded-tr-[16px]">TYPE</th>
                <th className="text-center py-3 text-[#696969] text-xs font-medium px-6 border-r border-[#E6EAF2] w-[15%] tracking-[0.03em]">CLIENT NAME</th>
                <th className="text-center py-3 text-[#696969] text-xs font-medium px-6 border-r border-[#E6EAF2] w-[20%] tracking-[0.03em]">ADDRESS</th>
                <th className="text-center py-3 text-[#696969] text-xs font-medium px-6 border-r border-[#E6EAF2] w-[10%] tracking-[0.03em]">BRANCHES</th>
                <th className="text-center py-3 text-[#696969] text-xs font-medium px-6 border-r border-[#E6EAF2] w-[15%] tracking-[0.03em]">OWNER NAME</th>
                <th className="text-center py-3 text-[#696969] text-xs font-medium px-6 border-r border-[#E6EAF2] w-[15%] tracking-[0.03em]">OWNER PHONE</th>
                <th className="text-center py-3 text-[#696969] text-xs font-medium px-6 w-[15%] tracking-[0.03em] ">OWNER EMAIL ID</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr key={client.clientId || index} className="border-b border-[#E6EAF2] last:border-b-0">
                  <td className="text-center py-4 text-xs font-medium px-6 border-r border-[#E6EAF2] text-[#1C1C1C]">
                    {getClientType(client.type)}
                  </td>
                  <td className="text-center py-4 text-xs font-medium px-6 border-r border-[#E6EAF2]">
                    {onViewClient ? (
                      <button 
                        onClick={() => handleClientClick(client)}
                        className="text-[#0B498B] hover:underline cursor-pointer"
                      >
                        {client.name}
                      </button>
                    ) : (
                      <PrefetchLink
                        href={`/manage-clients/${client.clientId}`}
                        prefetchType="client"
                        dataId={client.clientId}
                        className="text-[#0B498B] hover:underline cursor-pointer"
                      >
                        {client.name}
                      </PrefetchLink>
                    )}
                  </td>
                  <td className="text-center py-4 text-xs font-medium px-6 border-r border-[#E6EAF2] text-[#1C1C1C]">
                    {client.address}
                  </td>
                  <td className="text-center py-4 text-xs font-medium px-6 border-r border-[#E6EAF2] text-[#1C1C1C]">
                    {client.branches}
                  </td>
                  <td className="text-center py-4 text-xs font-medium px-6 border-r border-[#E6EAF2] text-[#1C1C1C]">
                    {client.ownerName}
                  </td>
                  <td className="text-center py-4 text-xs font-medium px-6 border-r border-[#E6EAF2] text-[#1C1C1C]">
                    {client.ownerPhone}
                  </td>
                  <td className="text-center py-4 text-xs font-medium px-6 text-[#1C1C1C]">
                    {client.ownerEmail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {clients.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No clients found
        </div>
      )}
    </div>
  );
};

export default ClientsTable; 