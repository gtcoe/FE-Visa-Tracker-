'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '@component/components/ManageUsers/ManageUsers';

// Updated interface to make sure id can be either number, string, or undefined
export interface UserContextUser extends User {
  id?: number | string;
}

interface UserContextType {
  users: UserContextUser[];
  setUsers: (users: UserContextUser[]) => void;
  selectedUser: UserContextUser | null;
  setSelectedUser: (user: UserContextUser | null) => void;
}

// Create context with default values
const UserContext = createContext<UserContextType>({
  users: [],
  setUsers: () => {},
  selectedUser: null,
  setSelectedUser: () => {},
});

// Hook for using the user context
export const useUserContext = () => useContext(UserContext);

// Provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<UserContextUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserContextUser | null>(null);

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        selectedUser,
        setSelectedUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}; 