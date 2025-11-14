// components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Using react-icons instead of heroicons
import { HiMenu, HiX } from 'react-icons/hi';
import iter8logo from '@/images/iter8labs.png';
// Adjust the path to match your file location

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (): void => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-black'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              {/* Logo Image */}
              <div className="relative w-10 h-10 md:w-20 md:h-20">
                <Image
                  src={iter8logo}
                  alt="Iter8labs Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                  className="transition-transform hover:scale-105"
                />
              </div>
              {/* Company Name */}
              <span className="font-bold text-2xl md:text-3xl">
                <span style={{ color: '#111E60' }}>ITER</span>
                <span style={{ color: '#14ABAF' }}>8</span>
                <span style={{ color: '#111E60' }}>LABS</span>
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
              Products
            </Link>
            <Link href="/isec" className="text-gray-300 hover:text-white transition-colors">
              ISEC
            </Link>
            <Link href="/features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About Us
            </Link>
          </div>

          {/* Auth buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-300 hover:text-white transition-colors">
              Log in
            </Link>
            <Link href="/signup">
              <button className="text-white px-5 py-2 rounded-full font-medium transition-all transform hover:scale-105" style={{ background: 'linear-gradient(to right, #111E60, #14ABAF)' }}>
                Try for Free
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none transition-transform hover:scale-110"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 py-4 space-y-4 bg-gray-900 border-t border-gray-800">
          <Link href="/products" className="block text-gray-300 hover:text-white transition-colors py-2" onClick={closeMenu}>
            Products
          </Link>
          <Link href="/isec" className="block text-gray-300 hover:text-white transition-colors py-2" onClick={closeMenu}>
            ISEC
          </Link>
          <Link href="/features" className="block text-gray-300 hover:text-white transition-colors py-2" onClick={closeMenu}>
            Features
          </Link>
          <Link href="/pricing" className="block text-gray-300 hover:text-white transition-colors py-2" onClick={closeMenu}>
            Pricing
          </Link>
          <Link href="/aboutus" className="block text-gray-300 hover:text-white transition-colors py-2" onClick={closeMenu}>
            About Us
          </Link>
          <div className="pt-4 border-t border-gray-800">
            <Link href="/login" className="block text-gray-300 hover:text-white transition-colors py-2 mb-3" onClick={closeMenu}>
              Log in
            </Link>
            <Link href="/signup" onClick={closeMenu}>
              <button className="w-full text-white px-4 py-2 rounded-full font-medium transition-all" style={{ background: 'linear-gradient(to right, #111E60, #14ABAF)' }}>
                Try for Free
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;