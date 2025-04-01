"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useChecklists, useSearchChecklists } from '@component/hooks/useChecklists';
import SearchBar from '@component/components/common/SearchBar';
import PrefetchLink from '@component/components/common/PrefetchLink';
import { prefetchChecklistData } from '@component/utils/prefetchingStrategies';
import { useQueryClient } from '@tanstack/react-query';

const ChecklistList = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Use React Query hooks
  const { 
    data: checklists = [], 
    isLoading, 
    error 
  } = useChecklists();
  
  const { 
    data: searchResults = [], 
    isLoading: isSearching,
    refetch: performSearch
  } = useSearchChecklists({ query: searchQuery });
  
  const handleSubmitSearch = async () => {
    if (searchQuery.trim()) {
      await performSearch();
    }
  };

  const displayedChecklists = searchQuery.trim() ? searchResults : checklists;

  // Handle mouse enter on a checklist card to prefetch data
  const handleChecklistHover = (checklistId: number) => {
    prefetchChecklistData(queryClient, checklistId);
  };

  return (
    <div className="px-[80px]">
      <div className="flex justify-between items-center pt-[32px] pb-[24px]">
        <h1 className="text-[#1C1C1C] text-[28px] font-bold mt-0">Checklists</h1>
        <Link href="/manage-checklist/create">
          <button
            className="bg-[#0B498B] w-[145px] h-[40px] text-white px-[32px] py-[8px] rounded-[4px] font-medium"
          >
            Add Checklist
          </button>
        </Link>
      </div>

      <div className="mb-6">
        <SearchBar
          placeholder="Search checklists..."
          value={searchQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
          onSearch={handleSubmitSearch}
        />
      </div>

      {isLoading || isSearching ? (
        <div className="text-center py-8">Loading checklists...</div>
      ) : error ? (
        <div className="text-center py-8 text-red-500">Failed to load checklists</div>
      ) : displayedChecklists.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          {searchQuery.trim() ? 'No checklists found matching your search' : 'No checklists available'}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedChecklists.map((checklist) => (
            <PrefetchLink
              key={checklist.id}
              href={`/manage-checklist/${checklist.id}`}
              prefetchType="checklist"
              dataId={checklist.id}
              className="block"
            >
              <div
                className="bg-white rounded-lg border border-gray-200 p-6 shadow cursor-pointer hover:shadow-md transition-shadow h-full"
                onMouseEnter={() => handleChecklistHover(checklist.id)}
              >
                <h2 className="text-xl font-semibold mb-2 text-[#1C1C1C]">{checklist.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-2">{checklist.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {checklist.items?.length || 0} items
                  </span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {checklist.category}
                  </span>
                </div>
              </div>
            </PrefetchLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChecklistList; 