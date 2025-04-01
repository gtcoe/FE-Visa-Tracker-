import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  searchApplications, 
  searchPax, 
  addApplicationStep1, 
  addApplicationStep2, 
  addApplicationStep3, 
  addApplicationStep4, 
  submitServiceRequest,
  getClientsByType,
  ServiceRequestPayload,
  Step3RequestPayload
} from '@component/api/application';

// Query keys
export const applicationKeys = {
  all: ['applications'] as const,
  search: () => [...applicationKeys.all, 'search'] as const,
  searchWithParams: (params: any) => [...applicationKeys.search(), params] as const,
  pax: () => [...applicationKeys.all, 'pax'] as const,
  paxWithParams: (params: any) => [...applicationKeys.pax(), params] as const,
  clients: () => ['clients'] as const,
  clientsByType: (type: string | number) => [...applicationKeys.clients(), 'type', type] as const,
};

// Hook for searching applications
export const useSearchApplications = (searchParams: any, enabled = true) => {
  return useQuery({
    queryKey: applicationKeys.searchWithParams(searchParams),
    queryFn: () => searchApplications(searchParams),
    enabled: enabled && !!searchParams,
    // Keep the data for 3 minutes
    staleTime: 3 * 60 * 1000,
  });
};

// Hook for searching passengers
export const useSearchPax = (searchParams: any, enabled = true) => {
  return useQuery({
    queryKey: applicationKeys.paxWithParams(searchParams),
    queryFn: () => searchPax(searchParams),
    enabled: enabled && !!searchParams,
    // Keep the data for 3 minutes
    staleTime: 3 * 60 * 1000,
  });
};

// Hook for getting clients by type
export const useClientsByType = (clientType: string | number, enabled = true) => {
  return useQuery({
    queryKey: applicationKeys.clientsByType(clientType),
    queryFn: () => getClientsByType(clientType),
    enabled: enabled && !!clientType,
    // Keep the data for 5 minutes
    staleTime: 5 * 60 * 1000,
  });
};

// Hook for submitting service request (Step 1)
export const useSubmitServiceRequest = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (requestData: ServiceRequestPayload) => submitServiceRequest(requestData),
    onSuccess: () => {
      // Invalidate relevant queries
      queryClient.invalidateQueries({ queryKey: applicationKeys.all });
    },
  });
};

// Hook for adding Step 1 data
export const useAddApplicationStep1 = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (applicationData: any) => addApplicationStep1(applicationData),
    onSuccess: () => {
      // Invalidate relevant queries
      queryClient.invalidateQueries({ queryKey: applicationKeys.all });
    },
  });
};

// Hook for adding Step 2 data
export const useAddApplicationStep2 = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (applicationData: any) => addApplicationStep2(applicationData),
    onSuccess: () => {
      // Invalidate relevant queries
      queryClient.invalidateQueries({ queryKey: applicationKeys.all });
    },
  });
};

// Hook for adding Step 3 data
export const useAddApplicationStep3 = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (applicationData: Step3RequestPayload) => addApplicationStep3(applicationData),
    onSuccess: () => {
      // Invalidate relevant queries
      queryClient.invalidateQueries({ queryKey: applicationKeys.all });
    },
  });
};

// Hook for adding Step 4 data
export const useAddApplicationStep4 = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (applicationData: any) => addApplicationStep4(applicationData),
    onSuccess: () => {
      // Invalidate relevant queries
      queryClient.invalidateQueries({ queryKey: applicationKeys.all });
    },
  });
}; 