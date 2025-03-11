import React from 'react';
import { Client } from './ManageClients';

interface ClientsTableProps {
  clients: Client[];
}

const ClientsTable = ({ clients }: ClientsTableProps) => {
  const getClientType = (type: number) => {
    return type === 1 ? 'Corporate' : 'Agent';
  };

  return (
    <div>
      <h2 className="text-lg font-medium mb-4">Client Details</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-[#F9FAFB]">
            <tr className="border-b border-[#E6EAF2]">
              <th className="text-left py-3 text-[#696969] text-xs font-medium px-6 border-r border-[#E6EAF2] w-[10%]">TYPE</th>
              <th className="text-left py-3 text-[#696969] text-xs font-medium px-6 border-r border-[#E6EAF2] w-[15%]">CLIENT NAME</th>
              <th className="text-left py-3 text-[#696969] text-xs font-medium px-6 border-r border-[#E6EAF2] w-[20%]">ADDRESS</th>
              <th className="text-left py-3 text-[#696969] text-xs font-medium px-6 border-r border-[#E6EAF2] w-[10%]">BRANCHES</th>
              <th className="text-left py-3 text-[#696969] text-xs font-medium px-6 border-r border-[#E6EAF2] w-[15%]">OWNER NAME</th>
              <th className="text-left py-3 text-[#696969] text-xs font-medium px-6 border-r border-[#E6EAF2] w-[15%]">OWNER PHONE</th>
              <th className="text-left py-3 text-[#696969] text-xs font-medium px-6 w-[15%]">OWNER EMAIL ID</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={client.id || index} className="border-b border-[#E6EAF2] last:border-b-0">
                <td className="text-left py-4 text-[#696969] text-xs font-medium px-6 border-r border-[#E6EAF2]">
                  {getClientType(client.type)}
                </td>
                <td className="text-left py-4 text-[#696969] text-xs font-medium px-6 border-r border-[#E6EAF2]">
                  {client.name}
                </td>
                <td className="text-left py-4 text-[#696969] text-xs font-medium px-6 border-r border-[#E6EAF2]">
                  {client.address}
                </td>
                <td className="text-left py-4 text-[#696969] text-xs font-medium px-6 border-r border-[#E6EAF2]">
                  {client.branches}
                </td>
                <td className="text-left py-4 text-[#696969] text-xs font-medium px-6 border-r border-[#E6EAF2]">
                  {client.ownerName}
                </td>
                <td className="text-left py-4 text-[#696969] text-xs font-medium px-6 border-r border-[#E6EAF2]">
                  {client.ownerPhone}
                </td>
                <td className="text-left py-4 text-[#696969] text-xs font-medium px-6">
                  {client.ownerEmail}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientsTable; 