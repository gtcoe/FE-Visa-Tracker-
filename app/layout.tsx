// app/layout.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Navbar from "@component/components/common/NavBar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  defaultRoutes,
  roleBasedNavItems,
  UserRole,
} from "@component/constants/appConstants";
import { ClientProvider } from "@component/context/ClientContext";
import { UserProvider } from "@component/context/UserContext";
import { ApplicationProvider } from "@component/context/ApplicationContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    //update role to check
    setUserRole("client");
  }, []);

  // useEffect(() => {
  //   // Fetch the user role from headers or API
  //   const fetchUserRole = async () => {
  //     try {
  //       const response = await fetch("/api/auth/me");
  //       if (response.ok) {
  //         const data = await response.json();
  //         // const data = { role: "client" };
  //         setUserRole(data.role as UserRole);

  //         // If user is on the root path, redirect to the default page based on role
  //         if (pathname === "/visaistic" && data.role) {
  //           router.push(defaultRoutes[data.role as UserRole]);
  //         }
  //       } else {
  //         // Handle authentication errors
  //         console.error("Authentication error");
  //         router.push("/visaistic"); // Redirect to login if not authenticated
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user role:", error);
  //     }
  //   };

  //   fetchUserRole();
  // }, [pathname, router]);

  // Render navigation items based on user role

  const navItems =
    userRole && pathname !== "/" ? roleBasedNavItems[userRole] : [];

  return (
    <html lang="en">
      <body>
        <UserProvider>
          <ClientProvider>
            <ApplicationProvider>
              <div className="min-h-screen flex flex-col">
                {userRole && navItems.length > 0 && (
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
