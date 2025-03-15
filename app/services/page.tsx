"use client";

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Loading fallback component
const PageLoading = () => (
  <div className="flex justify-center items-center min-h-screen bg-[#E6EAF2]">
    <div className="animate-pulse flex flex-col items-center">
      <div className="h-20 w-20 rounded-full bg-gray-200 mb-4"></div>
      <div className="h-5 w-48 bg-gray-200 rounded mb-3"></div>
      <div className="h-3 w-36 bg-gray-200 rounded"></div>
    </div>
  </div>
);

// Dynamically import the SearchPax component with SSR disabled for faster client-side rendering
const SearchPax = dynamic(() => import('@component/components/Services/CommonScreen'), {
  loading: () => <PageLoading />,
  ssr: false, // Disable server-side rendering for this component to improve initial load time
});

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#E6EAF2]">
      <Suspense fallback={<PageLoading />}>
        <SearchPax />
      </Suspense>
    </div>
  );
} 