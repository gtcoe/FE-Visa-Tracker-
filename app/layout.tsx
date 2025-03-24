// app/layout.tsx
"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Navbar from "@component/components/common/NavBar";
import "./globals.css";
import {
  roleBasedNavItems,
  DEFAULT_PATHS,
} from "@component/constants/appConstants";
import { ClientProvider } from "@component/context/ClientContext";
import { UserProvider } from "@component/context/UserContext";
import { ApplicationProvider } from "@component/context/ApplicationContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isLoggedIn, getToken } from "@component/api/auth";
import config from '@component/constants/config';

const { USER_TYPE_KEY } = config;

// Define user roles type
type UserRole = "client" | "manager" | "admin";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      try {
        if (isLoggedIn()) {
          // Get user type from localStorage
          const userType = localStorage.getItem(USER_TYPE_KEY);
          
          if (userType) {
            // Map user type to role (1 = admin, 2 = manager, 3 = client)
            const role = 
              userType === "1" ? "admin" :
              userType === "2" ? "manager" : "client";
            
            setUserRole(role as UserRole);
            
            // If user is on the login page but already logged in, redirect to default page
            if (pathname === "/") {
              router.push("/application-tracker");
            }
          }
        } else {
          // User is not logged in
          setUserRole(null);
          
          // If user is trying to access protected pages, redirect to login
          if (pathname !== "/" && !pathname?.includes('auth')) {
            router.push("/");
          }
        }
      } catch (error) {
        console.error("Authentication error:", error);
        setUserRole(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [pathname, router]);

  // Render navigation items based on user role
  const navItems =
    userRole && pathname !== "/" ? roleBasedNavItems[userRole] : [];
  
  // Check if we're on the checklist-details page
  const isChecklistDetailsPage = pathname?.includes('checklist-details');
  
  // Check if we're on the login/sign-in page
  const isLoginPage = pathname === "/";

  if (loading && pathname !== "/") {
    return (
      <html lang="en">
        <body>
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0B498B]"></div>
          </div>
        </body>
      </html>
    );
  }

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
