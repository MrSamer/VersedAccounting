import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  logoUrl?: string;
}

export function Header({ logoUrl = '' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            {logoUrl ? (
              <img
                src="https://versedacc.com/gallery_gen/ecbff47d4f64812ce54026087af6a702_745x324_24x142_800x600_crop.png?ts=1727827275"
                alt="Company Logo"
                className="w-36 h-36 object-contain"
              />
            ) : (
              <div className="w-36 h-36 bg-indigo-400 rounded-full" />
            )}
            <h1 className="text-3xl font-bold text-gray-900">
              Versed Accounting
            </h1>
          </div>

          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-lg font-medium text-gray-900 hover:text-indigo-600 transition-colors"
            >
              Our Services
            </a>
            <a
              href="#about"
              className="text-lg font-medium text-gray-900 hover:text-indigo-600 transition-colors"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-lg font-medium text-gray-900 hover:text-indigo-600 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <a
              href="#services"
              className="block text-lg font-medium text-gray-900 hover:text-indigo-600 transition-colors"
            >
              Our Services
            </a>
            <a
              href="#about"
              className="block text-lg font-medium text-gray-900 hover:text-indigo-600 transition-colors"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="block text-lg font-medium text-gray-900 hover:text-indigo-600 transition-colors"
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
