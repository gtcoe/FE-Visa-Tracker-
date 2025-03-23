"use client";

import React, { Suspense, useEffect } from 'react';
import { useRouter } from 'next/navigation';
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

// Dynamically import the ServiceRequest component
const ServiceRequestComponent = dynamic(() => import('@component/components/Services/ServiceRequest'), {
  loading: () => <PageLoading />,
  ssr: false, // Disable server-side rendering for this component to improve initial load time
});

export default function ServicesPage() {
  const router = useRouter();

  // Redirect to service-request page when the services tab is clicked
  useEffect(() => {
    router.push('/services/service-request');
  }, [router]);

  return (
    <div className="min-h-screen bg-[#E6EAF2]">
      <Suspense fallback={<PageLoading />}>
        <PageLoading />
      </Suspense>
    </div>
  );
} 