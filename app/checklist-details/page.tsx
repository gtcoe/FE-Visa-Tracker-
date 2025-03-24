"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ChecklistDetailView, { ChecklistDetail } from '@component/components/Checklist/ChecklistDetailView';
import { sampleChecklistData } from '@component/data/checklistData';

export default function ChecklistDetailsPage() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [checklistData, setChecklistData] = useState<ChecklistDetail | null>(null);
  const [params, setParams] = useState({
    country: 0,
    category: 0,
    nationality: 0,
    state: 0,
  });

  useEffect(() => {
    const countryParam = Number(searchParams?.get('country') || 0);
    const categoryParam = Number(searchParams?.get('category') || 0);
    const nationalityParam = Number(searchParams?.get('nationality') || 0);
    const stateParam = Number(searchParams?.get('state') || 0);

    setParams({
      country: countryParam,
      category: categoryParam,
      nationality: nationalityParam,
      state: stateParam
    });

    // In a real application, this would be an API call
    // For now, we'll use the sample data
    const key = `${countryParam}-${categoryParam}-${nationalityParam}-${stateParam}`;
    const data = sampleChecklistData[key] || sampleChecklistData.default;
    
    setChecklistData(data);
    setLoading(false);
  }, [searchParams]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <svg className="animate-spin h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="mt-2 text-gray-600">Loading checklist details...</p>
        </div>
      </div>
    );
  }

  if (!checklistData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center text-red-600">
          <h1 className="text-2xl font-bold mb-2">Error</h1>
          <p>Could not find checklist data for the selected parameters.</p>
        </div>
      </div>
    );
  }

  return (
    <ChecklistDetailView
      visaCountry={params.country}
      visaCategory={params.category}
      nationality={params.nationality}
      state={params.state}
      details={checklistData}
    />
  );
} 