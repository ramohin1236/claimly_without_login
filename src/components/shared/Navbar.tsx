"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import weblogo from "../../../public/brand_logo.svg";
import AuthActions from "../navbar/AuthActions";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
  const isLogin = false;


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
          <Link href="/">
            <Image src={weblogo} alt="Claimly Logo" width={120} height={40} />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded text-sm font-medium transition ${pathname === link.href
                    ? "bg-[#2563EB] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth */}
          <div className="hidden lg:flex items-center space-x-4">
            <AuthActions isLogin={isLogin} />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Drawer */}
        <div className="lg:hidden">
          {/* Overlay */}
          <div
            className={`fixed inset-0 bg-black/40 z-40 ${isMenuOpen ? "block" : "hidden"
              }`}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Drawer */}
          <div
            className={`fixed top-0 left-0 h-full w-[280px] bg-[#f5f7fa] z-50 transition-transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
          >
            <div className="p-6 flex flex-col h-full">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <Image src={weblogo} alt="Logo" width={100} height={32} />
                <button onClick={() => setIsMenuOpen(false)}>✕</button>
              </div>

              {/* Links */}
              <nav className="flex-1 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm transition ${pathname === link.href
                        ? "bg-[#2563EB] text-white"
                        : "text-gray-700 hover:bg-gray-100"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Auth */}
              <div className="pt-6 border-t">
                <AuthActions
                  isLogin={isLogin}
                  onActionClick={() => setIsMenuOpen(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
