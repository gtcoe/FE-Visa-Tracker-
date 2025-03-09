// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { UserRole } from "@component/constants/appConstants";
import visaisticLogo from "../../public/visaisticLogo.svg";
import profileImg from "../../public/profile-img.svg";

interface NavbarProps {
  items: { label: string; path: string }[];
  userRole: UserRole;
}

export default function Navbar({ items, userRole }: NavbarProps) {
  const pathname = usePathname();

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

        <nav className="hidden md:flex space-x-8">
          {items.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`px-3 py-2 text-sm font-medium ${
                pathname.startsWith(item.path)
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            {/* Profile icon or avatar could go here */}
            <Image
              src={profileImg}
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
