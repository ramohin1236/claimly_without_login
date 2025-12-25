"use client";

import Image from "next/image";
import { useState } from "react";
import weblogo from "../../../public/brand_logo.svg";
import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", isActive: true },
    { name: "Claimly Guides", href: "#" },
    { name: "About Us", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 ">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={weblogo}
              alt="Claimly Logo"
              width={120}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded text-sm font-medium transition ${
                  link.isActive
                    ? "bg-[#2563EB] text-white"
                    : "text-gray-700 hover:text-[#1d4ed8] hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* <button className="px-4 py-2 text-sm border border-[#2563EB] text-[#2563EB] rounded hover:bg-blue-50 transition">
              Login
            </button> */}
            <Button variant="outline" >
              Login
            </Button>
            <Button variant="primary">
              Sign up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t mt-2 pt-4 pb-4">
            {/* Navigation Links */}
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-3 rounded text-sm font-medium ${
                    link.isActive
                      ? "bg-[#002868] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Auth Buttons Dropdown */}
            <div className="mt-6 pt-4 border-t space-y-3">
              {/* <button className="w-full px-4 py-3 text-sm border border-[#2563EB] text-[#2563EB] rounded hover:bg-blue-50 transition">
                Login
              </button> */}
              <Button variant="outline" fullWidth>
                Login
              </Button>
              <Button variant="primary" fullWidth>
                Sign Up
              </Button>
              {/* <button className="w-full px-4 py-3 text-sm bg-[#2563EB] text-white rounded hover:bg-[#1d4ed8] transition">
                Sign up
              </button> */}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
