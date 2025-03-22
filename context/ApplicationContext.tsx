"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { ApplicationData, StatusFormData } from '@component/types/application-tracker';

// Define the context interface
interface ApplicationContextType {
  applications: ApplicationData[];
  setApplications: React.Dispatch<React.SetStateAction<ApplicationData[]>>;
  searchParams: StatusFormData | null;
  setSearchParams: React.Dispatch<React.SetStateAction<StatusFormData | null>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
}

// Create the context with default values
const ApplicationContext = createContext<ApplicationContextType>({
  applications: [],
  setApplications: () => {},
  searchParams: null,
  setSearchParams: () => {},
  isLoading: false,
  setIsLoading: () => {},
  error: null,
  setError: () => {},
  currentPage: 1,
  setCurrentPage: () => {},
  totalPages: 1,
  setTotalPages: () => {},
});

// Context provider component
export const ApplicationProvider = ({ children }: { children: ReactNode }) => {
  const [applications, setApplications] = useState<ApplicationData[]>([]);
  const [searchParams, setSearchParams] = useState<StatusFormData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  return (
    <ApplicationContext.Provider
      value={{
        applications,
        setApplications,
        searchParams,
        setSearchParams,
        isLoading,
        setIsLoading,
        error,
        setError,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

// Custom hook for using the application context
export const useApplicationContext = () => useContext(ApplicationContext); 