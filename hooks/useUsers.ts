import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  getAllUsers, 
  getUserById, 
  createUser, 
  updateUserStatus, 
  searchUsers 
} from '@component/api/user';
import { User } from '@component/components/ManageUsers/ManageUsers';
import { UserContextUser } from '@component/context/UserContext';

// Query keys
export const userKeys = {
  all: ['users'] as const,
  lists: () => [...userKeys.all, 'list'] as const,
  list: (filters: any) => [...userKeys.lists(), { filters }] as const,
  details: () => [...userKeys.all, 'detail'] as const,
  detail: (id: number | string) => [...userKeys.details(), id] as const,
};

// Hook for fetching all users
export const useUsers = () => {
  return useQuery({
    queryKey: userKeys.lists(),
    queryFn: getAllUsers,
  });
};

// Hook for fetching a single user
export const useUser = (userId: number | string | undefined) => {
  return useQuery({
    queryKey: userKeys.detail(userId || 0),
    queryFn: () => getUserById(Number(userId)),
    // Only fetch when we have a userId
    enabled: !!userId,
  });
};

// Hook for searching users
export const useSearchUsers = (query: string, enabled = false) => {
  return useQuery({
    queryKey: ['users', 'search', query],
    queryFn: () => searchUsers(query),
    // Only run the query if enabled is true and query is not empty
    enabled: enabled && !!query && query.length > 0,
    // Keep the data for 3 minutes
    staleTime: 3 * 60 * 1000,
  });
};

// Hook for creating a user
export const useCreateUser = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (newUser: User) => createUser(newUser),
    onSuccess: () => {
      // Invalidate the users list to trigger a refetch
      queryClient.invalidateQueries({ queryKey: userKeys.lists() });
    },
  });
};

// Hook for updating a user's status
export const useUpdateUserStatus = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ userId, status }: { userId: number | string, status: number }) => 
      updateUserStatus(userId, status),
    onSuccess: (_, variables) => {
      // Invalidate the users list and the specific user's data
      queryClient.invalidateQueries({ queryKey: userKeys.lists() });
      queryClient.invalidateQueries({ queryKey: userKeys.detail(variables.userId) });
      
      // Optionally, perform an optimistic update
      queryClient.setQueryData(
        userKeys.lists(), 
        (oldData: UserContextUser[] | undefined) => {
          if (!oldData) return undefined;
          
          return oldData.map(user => 
            user.id === variables.userId 
              ? { ...user, status: variables.status } 
              : user
          );
        }
      );
    },
  });
}; 