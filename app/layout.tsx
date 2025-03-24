// app/layout.tsx
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@component/components/common/NavBar";
import "./globals.css";
import {
  roleBasedNavItems,
  UserRole,
} from "@component/constants/appConstants";
import { ClientProvider } from "@component/context/ClientContext";
import { UserProvider } from "@component/context/UserContext";
import { ApplicationProvider } from "@component/context/ApplicationContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // For demo purposes, set a default user role
    // In a real app, this would come from an API or auth service
    setUserRole("client");
  }, []);

  // Render navigation items based on user role
  const navItems =
    userRole && pathname !== "/" ? roleBasedNavItems[userRole] : [];
  
  // Check if we're on the checklist-details page
  const isChecklistDetailsPage = pathname?.includes('checklist-details');
  
  // Check if we're on the login/sign-in page
  const isLoginPage = pathname === "/";

  return (
    <html lang="en">
      <body>
        <UserProvider>
          <ClientProvider>
            <ApplicationProvider>
              <div className="min-h-screen flex flex-col">
                {userRole && navItems.length > 0 && !isChecklistDetailsPage && !isLoginPage && (
                  <Navbar items={navItems} userRole={userRole} />
                )}
                <main className="flex-grow">{children}</main>
              </div>
              <ToastContainer />
            </ApplicationProvider>
          </ClientProvider>
        </UserProvider>
      </body>
    </html>
  );
}
