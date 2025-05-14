"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/ui/language-switcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.svg" 
            alt="Nari Labs Logo" 
            width={40} 
            height={40} 
            className="rounded-md"
          />
          <span className="text-xl font-semibold text-gray-900">Nari Labs</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            href="#" 
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Home
          </Link>
          <Link 
            href="#features" 
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Features
          </Link>
          <Link 
            href="#how-to-use" 
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            How to Use
          </Link>
          <Link 
            href="#demo" 
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Demo
          </Link>
          <Link 
            href="#faq" 
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            FAQ
          </Link>
          <Link 
            href="/blog" 
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
            aria-label="Blog"
          >
            Blog
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Link 
            href="https://huggingface.co/spaces/nari-labs/Dia-1.6B" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button size="sm">
              Try Now
            </Button>
          </Link>
        </div>
        
        <button 
          className="md:hidden flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
          onClick={handleToggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link 
              href="#" 
              className="block py-2 text-base font-medium text-gray-600 hover:text-gray-900"
            >
              Home
            </Link>
            <Link 
              href="#features" 
              className="block py-2 text-base font-medium text-gray-600 hover:text-gray-900"
            >
              Features
            </Link>
            <Link 
              href="#how-to-use" 
              className="block py-2 text-base font-medium text-gray-600 hover:text-gray-900"
            >
              How to Use
            </Link>
            <Link 
              href="#demo" 
              className="block py-2 text-base font-medium text-gray-600 hover:text-gray-900"
            >
              Demo
            </Link>
            <Link 
              href="#faq" 
              className="block py-2 text-base font-medium text-gray-600 hover:text-gray-900"
            >
              FAQ
            </Link>
            <Link 
              href="/blog" 
              className="block py-2 text-base font-medium text-gray-600 hover:text-gray-900"
              aria-label="Blog"
            >
              Blog
            </Link>
            <div className="mt-4 flex flex-col gap-2">
              <div className="mb-2">
                <LanguageSwitcher />
              </div>
              <Link 
                href="https://huggingface.co/spaces/nari-labs/Dia-1.6B" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full justify-center">
                  Try Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 