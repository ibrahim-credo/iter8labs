// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo and tagline */}
          <div className="mb-6 md:mb-0">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold">iter8labs</span>
            </Link>
            <p className="text-gray-400 mt-2 max-w-md">
              Innovative SaaS solutions to enhance your business security and efficiency.
            </p>
          </div>
          
          {/* Essential links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/data-processing-addendum" className="text-gray-400 hover:text-white transition-colors">
              DPA
            </Link>
          </div>
        </div>
        
        {/* Copyright and social */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} iter8labs. All rights reserved.
          </p>
          
          {/* Social icons - simplified */}
          <div className="flex space-x-6">
            {['twitter', 'linkedin', 'github'].map((social) => (
              <a key={social} href={`#${social}`} className="text-gray-500 hover:text-white transition-colors">
                <span className="sr-only">{social}</span>
                <div className="w-5 h-5">
                  {/* Placeholder for social icons - replace with actual icons */}
                  <div className="w-full h-full bg-gray-700 rounded-sm"></div>
                </div>
              </a>
            ))}
          </div>
        </div>
        
        {/* Legal disclaimer */}
        <div className="border-t border-gray-900 pt-6 mt-6">
          <p className="text-gray-500 text-xs text-center">
            By using our services, you agree to our{' '}
            
            <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300">
              Privacy Policy
            </Link>
            
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;