import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  getAllClients, 
  getClientById, 
  createClient, 
  searchClients 
} from '@component/api/client';
import { Client } from '@component/components/ManageClients/ManageClients';

// Query keys
export const clientKeys = {
  all: ['clients'] as const,
  lists: () => [...clientKeys.all, 'list'] as const,
  list: (filters: any) => [...clientKeys.lists(), { filters }] as const,
  details: () => [...clientKeys.all, 'detail'] as const,
  detail: (id: number) => [...clientKeys.details(), id] as const,
};

// Hook for fetching all clients
export const useClients = () => {
  return useQuery({
    queryKey: clientKeys.lists(),
    queryFn: getAllClients,
  });
};

// Hook for fetching a single client
export const useClient = (clientId: number) => {
  return useQuery({
    queryKey: clientKeys.detail(clientId),
    queryFn: () => getClientById(clientId),
    // Only fetch when we have a clientId
    enabled: !!clientId,
  });
};

// Hook for searching clients
export const useSearchClients = (query: string) => {
  return useQuery({
    queryKey: ['clients', 'search', query],
    queryFn: () => searchClients(query),
    // Don't run the query automatically, let the component control when to run it
    enabled: false,
    // Keep the data for 3 minutes
    staleTime: 3 * 60 * 1000,
  });
};

// Hook for creating a client
export const useCreateClient = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (newClient: Client) => createClient(newClient),
    onSuccess: () => {
      // Invalidate the clients list to trigger a refetch
      queryClient.invalidateQueries({ queryKey: clientKeys.lists() });
    },
  });
}; 