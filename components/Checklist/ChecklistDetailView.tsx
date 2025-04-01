"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ToastNotifySuccess, ToastNotifyError } from '@component/components/common/Toast';
import { useChecklist } from '@component/hooks/useChecklists';
import { useSearchClients } from '@component/hooks/useClients';
import { getChecklistById } from '@component/api/checklist';
import { 
  VISA_COUNTRY_LABELS, 
  VISA_CATEGORY_LABELS,
  NATIONALITY_LABELS,
  STATE_LABELS 
} from '@component/constants/dropdown/geographical';

interface Checklist {
  id: number;
  title: string;
  description: string;
  category: string;
  items?: any[];
  clients?: Array<{
    id: number;
    name: string;
    email: string;
  }>;
}

interface UpdateChecklistParams {
  title: string;
  description: string;
  category: string;
  clients: Array<{
    id: number;
    name: string;
    email: string;
  }>;
}

const updateChecklist = async (checklistId: number, data: UpdateChecklistParams): Promise<any> => {
  try {
    const response = await fetch(`/api/checklists/${checklistId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Failed to update checklist');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error updating checklist:', error);
    throw error;
  }
};

interface ChecklistDetailViewProps {
  checklistId: string;
}

const ChecklistDetailView: React.FC<ChecklistDetailViewProps> = ({ checklistId }) => {
  const router = useRouter();
  
  const { 
    data: checklist, 
    isLoading, 
    error,
    refetch: refetchChecklist
  } = useChecklist(Number(checklistId));
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [selectedClients, setSelectedClients] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showClientDropdown, setShowClientDropdown] = useState(false);
  
  const {
    data: searchResults = [],
    refetch: searchClients,
    isLoading: isSearching
  } = useSearchClients(searchQuery);
  
  useEffect(() => {
    if (checklist) {
      const typedChecklist = checklist as unknown as Checklist;
      setTitle(typedChecklist.title || '');
      setDescription(typedChecklist.description || '');
      setCategory(typedChecklist.category || '');
      setSelectedClients(typedChecklist.clients || []);
    }
  }, [checklist]);
  
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const handleClientSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value.trim().length > 2) {
      setShowClientDropdown(true);
      await searchClients();
    } else {
      setShowClientDropdown(false);
    }
  };

  const handleSelectClient = (client: any) => {
    const isAlreadySelected = selectedClients.some(c => c.id === client.clientId);
    
    if (!isAlreadySelected) {
      const clientToAdd = {
        id: client.clientId,
        name: client.name,
        email: client.ownerEmail
      };
      setSelectedClients([...selectedClients, clientToAdd]);
    }
  };

  const handleRemoveClient = (clientId: number) => {
    setSelectedClients(selectedClients.filter(client => client.id !== clientId));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await updateChecklist(Number(checklistId), {
        title,
        description,
        category,
        clients: selectedClients
      });
      
      ToastNotifySuccess("Checklist updated successfully");
      
      refetchChecklist();
    } catch (error) {
      console.error('Error updating checklist:', error);
      ToastNotifyError("Failed to update checklist");
    }
  };

  if (isLoading) {
    return <div className="text-center py-8">Loading checklist...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Failed to load checklist</div>;
  }

  if (!checklist) {
    return <div className="text-center py-8 text-red-500">Checklist not found</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 min-h-[100px]"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={handleCategoryChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Clients
          </label>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleClientSearch}
              placeholder="Search clients by name or email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            
            {showClientDropdown && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-auto">
                {isSearching ? (
                  <div className="px-4 py-2 text-gray-500">Searching...</div>
                ) : searchResults.length === 0 ? (
                  <div className="px-4 py-2 text-gray-500">No clients found</div>
                ) : (
                  searchResults.map(client => {
                    const isAlreadySelected = selectedClients.some(c => c.id === client.clientId);
                    
                    return (
                      <div 
                        key={client.clientId}
                        className={`px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between ${isAlreadySelected ? 'bg-blue-50' : ''}`}
                        onClick={() => handleSelectClient(client)}
                      >
                        <div>
                          <div className="font-medium">{client.name}</div>
                          <div className="text-sm text-gray-600">{client.ownerEmail}</div>
                        </div>
                        {isAlreadySelected && (
                          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            )}
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            {selectedClients.map(client => (
              <div 
                key={client.id} 
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center text-sm"
              >
                <span>{client.name}</span>
                <button 
                  type="button"
                  className="ml-2 text-blue-700 hover:text-blue-900"
                  onClick={() => handleRemoveClient(client.id)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChecklistDetailView; 