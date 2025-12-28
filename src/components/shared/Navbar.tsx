"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import weblogo from "../../../public/brand_logo.svg";
import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Claimly Guides", href: "/claimly_guides" },
    { name: "About Us", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#f5f7fa]">
      <div className="nav-container py-4">
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
                  pathname === link.href
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
            <Button variant="outline" href="/login">
              Login
            </Button>

            <Button variant="primary" href="/register">
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

        {/* Mobile Sidebar (Drawer) */}
        <div className="lg:hidden">
          {/* Overlay */}
          <div
            className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out ${
              isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Drawer */}
          <div
            className={`fixed top-0 left-0 h-full w-[280px] bg-[#f5f7fa] z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full p-6">
              {/* Header inside drawer */}
              <div className="flex items-center justify-between mb-8">
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  <Image
                    src={weblogo}
                    alt="Claimly Logo"
                    width={100}
                    height={32}
                  />
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-black transition"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition ${
                      pathname === link.href
                        ? "bg-[#2563EB] text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Footer inside drawer (Auth Buttons) */}
              <div className="pt-6 border-t border-gray-200 space-y-3">
                {/* Login */}
                <Button variant="outline" href="/login">
                  Login
                </Button>

                <Button variant="primary" href="/register">
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
