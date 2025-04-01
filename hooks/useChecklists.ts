import { useQuery } from '@tanstack/react-query';
import { 
  getAllChecklists, 
  getChecklistById, 
  searchChecklists,
  ChecklistSearchParams 
} from '@component/api/checklist';

// Query keys
export const checklistKeys = {
  all: ['checklists'] as const,
  lists: () => [...checklistKeys.all, 'list'] as const,
  list: (filters: any) => [...checklistKeys.lists(), { filters }] as const,
  details: () => [...checklistKeys.all, 'detail'] as const,
  detail: (id: number) => [...checklistKeys.details(), id] as const,
  search: () => [...checklistKeys.all, 'search'] as const,
  searchParams: (params: ChecklistSearchParams) => [...checklistKeys.search(), params] as const,
};

// Hook for fetching all checklists
export const useChecklists = () => {
  return useQuery({
    queryKey: checklistKeys.lists(),
    queryFn: getAllChecklists,
    // Keep the data fresh for 10 minutes
    staleTime: 10 * 60 * 1000,
  });
};

// Hook for fetching a single checklist
export const useChecklist = (checklistId: number) => {
  return useQuery({
    queryKey: checklistKeys.detail(checklistId),
    queryFn: () => getChecklistById(checklistId),
    // Only fetch when we have a checklistId
    enabled: !!checklistId,
    // Keep the data fresh for 15 minutes
    staleTime: 15 * 60 * 1000,
  });
};

// Hook for searching checklists
export const useSearchChecklists = (params: ChecklistSearchParams, enabled = true) => {
  return useQuery({
    queryKey: checklistKeys.searchParams(params),
    queryFn: () => searchChecklists(params),
    // Only run the query if enabled is true and at least one parameter is provided
    enabled: enabled && (!!params.country || !!params.category || !!params.nationality || !!params.state),
    // Keep the data fresh for 5 minutes
    staleTime: 5 * 60 * 1000,
  });
}; 