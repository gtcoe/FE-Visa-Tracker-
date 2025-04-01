import { QueryClient } from '@tanstack/react-query';
import { 
  getAllUsers, 
  getUserById 
} from '@component/api/user';
import { 
  getAllClients, 
  getClientById 
} from '@component/api/client';
import { 
  getAllChecklists, 
  getChecklistById 
} from '@component/api/checklist';
import { searchApplications } from '@component/api/application';
import { userKeys } from '@component/hooks/useUsers';
import { clientKeys } from '@component/hooks/useClients';
import { checklistKeys } from '@component/hooks/useChecklists';
import { applicationKeys } from '@component/hooks/useApplications';

/**
 * Prefetch common data that is frequently accessed by users
 * @param queryClient React Query client instance
 */
export const prefetchCommonData = async (queryClient: QueryClient) => {
  // Prefetch all users - useful for admin panels
  queryClient.prefetchQuery({
    queryKey: userKeys.lists(),
    queryFn: getAllUsers,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
  
  // Prefetch all clients - useful for client selection dropdowns
  queryClient.prefetchQuery({
    queryKey: clientKeys.lists(),
    queryFn: getAllClients,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
  
  // Prefetch all checklists - useful for checklist selection
  queryClient.prefetchQuery({
    queryKey: checklistKeys.lists(),
    queryFn: getAllChecklists,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

/**
 * Prefetch user data for a specific user
 * @param queryClient React Query client instance
 * @param userId User ID to prefetch
 */
export const prefetchUserData = async (queryClient: QueryClient, userId: number | string) => {
  queryClient.prefetchQuery({
    queryKey: userKeys.detail(userId),
    queryFn: () => getUserById(Number(userId)),
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};

/**
 * Prefetch client data for a specific client
 * @param queryClient React Query client instance
 * @param clientId Client ID to prefetch
 */
export const prefetchClientData = async (queryClient: QueryClient, clientId: number) => {
  queryClient.prefetchQuery({
    queryKey: clientKeys.detail(clientId),
    queryFn: () => getClientById(clientId),
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};

/**
 * Prefetch checklist data for a specific checklist
 * @param queryClient React Query client instance
 * @param checklistId Checklist ID to prefetch
 */
export const prefetchChecklistData = async (queryClient: QueryClient, checklistId: number) => {
  queryClient.prefetchQuery({
    queryKey: checklistKeys.detail(checklistId),
    queryFn: () => getChecklistById(checklistId),
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};

/**
 * Prefetch related data based on user interactions or navigation patterns
 * @param queryClient React Query client instance
 * @param path Current path the user is on
 */
export const prefetchRelatedData = async (queryClient: QueryClient, path: string) => {
  // Prefetch data based on the current route
  if (path.includes('/manage-users')) {
    // User is on the users page, prefetch all users
    await prefetchCommonData(queryClient);
  } 
  else if (path.includes('/manage-clients')) {
    // User is on the clients page, prefetch all clients
    queryClient.prefetchQuery({
      queryKey: clientKeys.lists(),
      queryFn: getAllClients,
      staleTime: 5 * 60 * 1000, // 5 minutes
    });
  }
  else if (path.includes('/manage-checklist')) {
    // User is on the checklist page, prefetch all checklists
    queryClient.prefetchQuery({
      queryKey: checklistKeys.lists(),
      queryFn: getAllChecklists,
      staleTime: 5 * 60 * 1000, // 5 minutes
    });
  }
  else if (path.includes('/application-tracker')) {
    // User is on the application tracker, prefetch recent applications
    queryClient.prefetchQuery({
      queryKey: applicationKeys.searchWithParams({ recent: true }),
      queryFn: () => searchApplications({ recent: true }),
      staleTime: 2 * 60 * 1000, // 2 minutes
    });
  }
};

/**
 * Initialize prefetching for the application
 * @param queryClient React Query client instance
 */
export const initializePrefetching = (queryClient: QueryClient) => {
  // Prefetch essential data on application load
  prefetchCommonData(queryClient);
  
  // Listen for navigation events to prefetch related data
  if (typeof window !== 'undefined') {
    // Track user's last visited paths to predict navigation patterns
    const lastVisitedPaths: string[] = [];
    
    // Add event listener for prefetching on navigation
    const handleNavigation = (path: string) => {
      // Update last visited paths
      lastVisitedPaths.push(path);
      if (lastVisitedPaths.length > 5) {
        lastVisitedPaths.shift(); // Keep only the last 5 paths
      }
      
      // Prefetch related data based on current path
      prefetchRelatedData(queryClient, path);
    };
    
    // Initial prefetch based on current path
    handleNavigation(window.location.pathname);
    
    // Set up MutationObserver to detect client-side navigation changes
    const observer = new MutationObserver(() => {
      const currentPath = window.location.pathname;
      const lastPath = lastVisitedPaths[lastVisitedPaths.length - 1];
      
      if (currentPath !== lastPath) {
        handleNavigation(currentPath);
      }
    });
    
    // Start observing changes to the document
    observer.observe(document, { subtree: true, childList: true });
  }
}; 