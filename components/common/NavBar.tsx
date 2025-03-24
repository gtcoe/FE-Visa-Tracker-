// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { USER_TYPE } from "@component/constants/userConstants";
import visaisticLogo from "../../public/visaisticLogo.svg";
import { logout } from "@component/api/auth";

interface NavbarProps {
  items: { label: string; path: string }[];
  userRole: USER_TYPE;
}

export default function Navbar({ items, userRole }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    logout(); // Call the logout function from auth.ts
    router.push('/'); // Redirect to sign in page
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src={visaisticLogo}
              alt="Visalatic"
              width={110}
              height={40}
              className="mr-2"
            />
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-8">
            {items.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-3 py-3 text-sm font-medium ${
                  pathname?.startsWith(item.path) ?? false
                    ? "text-[#0B498B] border-b-2 border-[#0B498B]"
                    : "text-gray-700 hover:text-[#0B498B]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={handleLogout}
            className="bg-[#0B498B] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#093d75] transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
