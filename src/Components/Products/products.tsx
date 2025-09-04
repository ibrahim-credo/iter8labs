// src/Components/Products/products.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiChevronDown, FiFileText, FiShield } from 'react-icons/fi';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { RiShieldKeyholeLine } from 'react-icons/ri';
import isecLogo from '@/images/isec-logo.jpg'; // Adjust the path to match your file location

interface LegalDocument {
  href: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
}

const ProductShowcase: React.FC = () => {
  const [isLegalDropdownOpen, setIsLegalDropdownOpen] = useState<boolean>(false);

  const legalDocuments: LegalDocument[] = [
    {
      href: '/terms-of-service',
      title: 'Terms of Service',
      description: 'End-User License Agreement',
      icon: FiFileText,
      iconColor: 'text-blue-400'
    },
    {
      href: '/data-processing-addendum',
      title: 'Data Processing Addendum',
      description: 'Privacy & Data Protection',
      icon: FiShield,
      iconColor: 'text-green-400'
    }
  ];

  const handleDropdownToggle = (): void => {
    setIsLegalDropdownOpen(!isLegalDropdownOpen);
  };

  return (
    <div className="bg-gray-950 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our SaaS Solutions</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover innovative cloud-based products designed to enhance your business security and efficiency.
          </p>
        </div>

        {/* ISEC Coming Soon Featured Product */}
        <div className="relative mb-20 rounded-xl">
          {/* Background gradients */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          
          <div className="relative border border-gray-800 rounded-xl bg-black bg-opacity-70 backdrop-blur-sm p-8 md:p-10" style={{ overflow: 'visible' }}>
            {/* Glowing lines for tech feel */}
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-30"></div>
            <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-30"></div>
            <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
            <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <div className="flex items-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 bg-opacity-20 mr-4">
                    <RiShieldKeyholeLine className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="border border-blue-500 bg-blue-500 bg-opacity-10 px-3 py-1 rounded-full text-sm text-blue-400 font-medium">
                    Coming Soon
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-4">ISEC</h3>
                <p className="text-gray-400 text-lg mb-6">
                  Our flagship security solution is coming soon. Register now to be among the first to experience the next generation of enterprise security.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Link href="/register-interest">
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all">
                      Register Interest
                    </button>
                  </Link>
                  <Link href="/learn-more-isec">
                    <button className="flex items-center justify-center bg-transparent border border-gray-700 hover:border-gray-500 px-6 py-3 rounded-full text-lg font-medium transition-colors">
                      Join Waiting List
                      <FiArrowRight className="ml-2" />
                    </button>
                  </Link>
                </div>

                {/* Legal Documents Dropdown */}
                <div className="relative mb-6" style={{ zIndex: 50 }}>
                  <button
                    onClick={handleDropdownToggle}
                    className="flex items-center justify-between w-full sm:w-auto bg-gray-800 hover:bg-gray-700 border border-gray-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    type="button"
                    aria-expanded={isLegalDropdownOpen}
                    aria-haspopup="true"
                  >
                    <span className="flex items-center">
                      <FiFileText className="mr-2" />
                      Legal Documents
                    </span>
                    <FiChevronDown className={`ml-2 transition-transform ${isLegalDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isLegalDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-gray-800 border border-gray-700 rounded-lg shadow-xl" style={{ zIndex: 9999 }}>
                      <div className="py-2">
                        {legalDocuments.map((doc, index) => {
                          const IconComponent = doc.icon;
                          return (
                            <Link key={index} href={doc.href}>
                              <div className="flex items-center px-4 py-3 hover:bg-gray-700 transition-colors cursor-pointer">
                                <IconComponent className={`mr-3 ${doc.iconColor}`} />
                                <div>
                                  <div className="text-white font-medium">{doc.title}</div>
                                  <div className="text-gray-400 text-xs">{doc.description}</div>
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                        
                        <div className="border-t border-gray-700 mx-4 my-2"></div>
                        
                        <div className="px-4 py-2">
                          <p className="text-gray-400 text-xs">
                            By using our services, you agree to these terms and our data processing practices.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center text-gray-500">
                  <FaRegCalendarAlt className="mr-2" />
                  <span>Launching Q2 2025</span>
                </div>
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  {/* ISEC Logo */}
                  <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 flex items-center justify-center shadow-xl">
                    <div className="relative w-40 h-40 md:w-48 md:h-48 flex items-center justify-center">
                      <Image
                        src={isecLogo}
                        alt="ISEC Logo"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                      />
                    </div>
                    
                    {/* Subtle animation effect */}
                    <div className="absolute inset-0 border-4 border-transparent rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 animate-pulse" style={{ backdropFilter: "blur(8px)" }}></div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-10 blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Future Products Placeholder */}
        {/* <div className="text-center mt-20">
          <h3 className="text-2xl font-bold mb-6">More Products Coming to iter8labs</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Our product pipeline is full of innovative solutions. Stay tuned as we expand our offerings to meet your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border border-gray-800 rounded-xl p-6 bg-black bg-opacity-40">
                <div className="w-12 h-12 bg-gray-800 rounded-lg mb-4 mx-auto flex items-center justify-center">
                  <div className="w-6 h-6 rounded bg-gray-700"></div>
                </div>
                <div className="h-4 bg-gray-800 rounded w-32 mb-3 mx-auto"></div>
                <div className="h-3 bg-gray-800 rounded w-48 mb-2 mx-auto"></div>
                <div className="h-3 bg-gray-800 rounded w-40 mb-2 mx-auto"></div>
                <div className="h-3 bg-gray-800 rounded w-44 mx-auto"></div>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <Link href="/roadmap">
              <button className="text-blue-400 flex items-center mx-auto hover:text-blue-300 transition-colors">
                View Product Roadmap
                <FiArrowRight className="ml-2" />
              </button>
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProductShowcase;