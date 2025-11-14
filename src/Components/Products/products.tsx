// src/Components/Products/products.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiChevronDown, FiFileText, FiShield, FiCloud, FiLayers, FiZap, FiCheck, FiServer, FiUsers, FiLink } from 'react-icons/fi';
import { RiShieldKeyholeLine, RiCloudLine } from 'react-icons/ri';
import { HiOutlineSparkles } from 'react-icons/hi';
import { FaRegCalendarAlt } from 'react-icons/fa';
import isecLogo from '@/images/isec-logo.jpg';

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

  const features = [
    {
      icon: <RiCloudLine className="h-8 w-8" style={{ color: '#14ABAF' }} />,
      title: "Scalable Cloud Infrastructure",
      description: "Kubernetes-native deployments for enterprise-grade scalability."
    },
    {
      icon: <FiShield className="h-8 w-8" style={{ color: '#14ABAF' }} />,
      title: "Secure by Design",
      description: "Encryption, RBAC, and compliance baked into every product."
    },
    {
      icon: <FiLayers className="h-8 w-8" style={{ color: '#14ABAF' }} />,
      title: "Custom Integrations",
      description: "Tailored compatibility with enterprise systems and APIs."
    },
    {
      icon: <HiOutlineSparkles className="h-8 w-8" style={{ color: '#14ABAF' }} />,
      title: "Continuous Innovation",
      description: "Built to evolve with modern IT environments."
    }
  ];

  const productSpecs = [
    { 
      label: "Type", 
      value: "Certificate Lifecycle Management (CLM)",
      icon: <FiShield className="h-4 w-4" style={{ color: '#14ABAF' }} />,
      description: "Enterprise certificate management platform"
    },
    { 
      label: "Core Tech", 
      value: "Kubernetes",
      icon: <RiCloudLine className="h-4 w-4" style={{ color: '#14ABAF' }} />,
      description: "Cloud-native architecture"
    },
    { 
      label: "Integrations", 
      value: "MSCA, EJBCA, DigiCert",
      icon: <FiLink className="h-4 w-4" style={{ color: '#14ABAF' }} />,
      description: "Seamless third-party connectivity"
    },
    { 
      label: "Deployment", 
      value: "On-premise / Cloud / Hybrid",
      icon: <FiServer className="h-4 w-4" style={{ color: '#14ABAF' }} />,
      description: "Flexible deployment options"
    },
    { 
      label: "Target Users", 
      value: "Enterprises, IT Security Teams, MSPs",
      icon: <FiUsers className="h-4 w-4" style={{ color: '#14ABAF' }} />,
      description: "Built for security professionals"
    }
  ];

  const handleDropdownToggle = (): void => {
    setIsLegalDropdownOpen(!isLegalDropdownOpen);
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative pt-28 md:pt-36 pb-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ backgroundColor: '#14ABAF' }}></div>
        <div className="absolute -bottom-10 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" style={{ backgroundColor: '#111E60' }}></div>
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Column - Content */}
            <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
              <div className="relative mb-6">
                {/* Badge */}
                <div className="inline-flex items-center rounded-full px-4 py-2 mb-6 border" style={{ background: 'linear-gradient(to right, rgba(17, 30, 96, 0.2), rgba(20, 171, 175, 0.2))', borderColor: '#14ABAF' }}>
                  <RiShieldKeyholeLine className="h-4 w-4 mr-2" style={{ color: '#14ABAF' }} />
                  <span className="text-sm font-medium" style={{ color: '#14ABAF' }}>Products</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                  Our Core 
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #111E60, #14ABAF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> Offering</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  Iter8 Labs develops cutting-edge cybersecurity and automation tools that enable organizations to build secure, intelligent, and scalable infrastructure.
                </p>
              </div>
              
              {/* Key Points Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'rgba(20, 171, 175, 0.05)' }}>
                  <FiShield className="h-6 w-6 mx-auto mb-2" style={{ color: '#14ABAF' }} />
                  <div className="text-sm font-semibold">Cybersecurity</div>
                </div>
                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'rgba(20, 171, 175, 0.05)' }}>
                  <FiZap className="h-6 w-6 mx-auto mb-2" style={{ color: '#14ABAF' }} />
                  <div className="text-sm font-semibold">Automation</div>
                </div>
                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'rgba(20, 171, 175, 0.05)' }}>
                  <RiCloudLine className="h-6 w-6 mx-auto mb-2" style={{ color: '#14ABAF' }} />
                  <div className="text-sm font-semibold">DevOps</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                <Link href="#isec" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto text-white px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105" style={{ background: 'linear-gradient(to right, #111E60, #14ABAF)' }}>
                    Explore ISEC
                  </button>
                </Link>
                <Link href="/register-interest" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-transparent border border-gray-500 hover:border-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
                    Register Interest
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Right Column - Visual Element */}
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <div className="relative">
                {/* Abstract visualization */}
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 shadow-2xl overflow-hidden">
                  {/* Glowing lines for tech feel */}
                  <div className="absolute top-0 left-1/3 w-px h-full opacity-30" style={{ background: 'linear-gradient(to bottom, transparent, #14ABAF, transparent)' }}></div>
                  <div className="absolute top-0 left-2/3 w-px h-full opacity-30" style={{ background: 'linear-gradient(to bottom, transparent, #111E60, transparent)' }}></div>
                  <div className="absolute top-1/3 left-0 w-full h-px opacity-30" style={{ background: 'linear-gradient(to right, transparent, #14ABAF, transparent)' }}></div>
                  <div className="absolute top-2/3 left-0 w-full h-px opacity-30" style={{ background: 'linear-gradient(to right, transparent, #111E60, transparent)' }}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4" style={{ backgroundColor: 'rgba(20, 171, 175, 0.2)' }}>
                        <RiShieldKeyholeLine className="h-10 w-10" style={{ color: '#14ABAF' }} />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">ISEC</h3>
                      <p className="text-gray-400">Our Flagship Product</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: 'rgba(20, 171, 175, 0.05)' }}>
                        <span className="text-sm text-gray-400">Certificate Lifecycle Management</span>
                        <FiCheck className="h-5 w-5" style={{ color: '#14ABAF' }} />
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: 'rgba(20, 171, 175, 0.05)' }}>
                        <span className="text-sm text-gray-400">Kubernetes-Native</span>
                        <FiCheck className="h-5 w-5" style={{ color: '#14ABAF' }} />
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: 'rgba(20, 171, 175, 0.05)' }}>
                        <span className="text-sm text-gray-400">Enterprise-Ready</span>
                        <FiCheck className="h-5 w-5" style={{ color: '#14ABAF' }} />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Highlighting glow */}
                <div className="absolute -inset-0.5 opacity-20 blur-sm rounded-xl" style={{ background: 'linear-gradient(to right, #111E60, #14ABAF)' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ISEC Product Section */}
      <div id="isec" className="py-20 bg-gray-950 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative mb-20 rounded-xl overflow-hidden">
            {/* Background gradients */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20" style={{ backgroundColor: '#14ABAF' }}></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20" style={{ backgroundColor: '#111E60' }}></div>
            
            <div className="relative border border-gray-800 rounded-xl bg-black bg-opacity-70 backdrop-blur-sm p-8 md:p-12 overflow-hidden">
              {/* Graph/Grid Background Pattern */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `
                  linear-gradient(rgba(20, 171, 175, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(20, 171, 175, 0.3) 1px, transparent 1px),
                  linear-gradient(rgba(17, 30, 96, 0.2) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(17, 30, 96, 0.2) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px, 40px 40px, 20px 20px, 20px 20px',
                backgroundPosition: '0 0, 0 0, 0 0, 0 0'
              }}></div>
              
              {/* Diagonal grid lines */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `
                  repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(20, 171, 175, 0.1) 10px, rgba(20, 171, 175, 0.1) 20px),
                  repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(17, 30, 96, 0.1) 10px, rgba(17, 30, 96, 0.1) 20px)
                `
              }}></div>
              
              {/* Glowing accent lines for tech feel */}
              <div className="absolute top-0 left-1/4 w-px h-full opacity-20" style={{ background: 'linear-gradient(to bottom, transparent, #14ABAF, transparent)' }}></div>
              <div className="absolute top-0 left-2/3 w-px h-full opacity-20" style={{ background: 'linear-gradient(to bottom, transparent, #111E60, transparent)' }}></div>
              <div className="absolute top-1/3 left-0 w-full h-px opacity-20" style={{ background: 'linear-gradient(to right, transparent, #14ABAF, transparent)' }}></div>
              <div className="absolute top-2/3 left-0 w-full h-px opacity-20" style={{ background: 'linear-gradient(to right, transparent, #111E60, transparent)' }}></div>
              
              {/* Corner accent dots */}
              <div className="absolute top-4 left-4 w-2 h-2 rounded-full opacity-30" style={{ backgroundColor: '#14ABAF' }}></div>
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-30" style={{ backgroundColor: '#14ABAF' }}></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full opacity-30" style={{ backgroundColor: '#111E60' }}></div>
              <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full opacity-30" style={{ backgroundColor: '#111E60' }}></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                {/* Left Column - Product Info */}
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full mr-4" style={{ backgroundColor: 'rgba(20, 171, 175, 0.2)' }}>
                      <RiShieldKeyholeLine className="h-6 w-6" style={{ color: '#14ABAF' }} />
                    </div>
                    <div className="border rounded-full px-3 py-1 text-sm font-medium" style={{ borderColor: '#14ABAF', backgroundColor: 'rgba(20, 171, 175, 0.1)', color: '#14ABAF' }}>
                      Product: ISEC
                    </div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">ISEC</h2>
                  
                  <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                    A comprehensive Certificate Lifecycle Management solution designed for modern enterprises. Built on Kubernetes, ISEC provides seamless certificate management with enterprise-grade security and flexibility.
                  </p>

                  {/* Product Specifications - Table Layout */}
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, #14ABAF, transparent)' }}></div>
                      <h3 className="text-lg font-semibold mx-4" style={{ color: '#14ABAF' }}>Product Specifications</h3>
                      <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, #14ABAF, transparent)' }}></div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl overflow-hidden">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-800">
                            <th className="pl-3 pr-2 py-2 text-left w-16"></th>
                            <th className="px-3 py-2 text-left">
                              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#14ABAF', letterSpacing: '0.1em' }}>Specification</span>
                            </th>
                            <th className="px-3 py-2 text-left hidden sm:table-cell">
                              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#14ABAF', letterSpacing: '0.1em' }}></span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {productSpecs.map((spec, index) => (
                            <tr 
                              key={index}
                              className="group border-b border-gray-800 last:border-b-0 transition-all duration-300"
                              style={{ 
                                background: index % 2 === 0 ? 'transparent' : 'rgba(20, 171, 175, 0.02)'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(to right, rgba(17, 30, 96, 0.1), rgba(20, 171, 175, 0.1))';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = index % 2 === 0 ? 'transparent' : 'rgba(20, 171, 175, 0.02)';
                              }}
                            >
                              <td className="pl-3 pr-2 py-3 align-middle">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: 'rgba(20, 171, 175, 0.15)', border: '1px solid rgba(20, 171, 175, 0.3)' }}>
                                  {spec.icon}
                                </div>
                              </td>
                              <td className="px-3 py-3 align-middle">
                                <div>
                                  <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#14ABAF', letterSpacing: '0.1em' }}>
                                    {spec.label}
                                  </div>
                                  <div className="text-white font-semibold text-sm">
                                    {spec.value}
                                  </div>
                                </div>
                              </td>
                              <td className="px-3 py-3 align-middle hidden sm:table-cell">
                                <div className="text-gray-400 text-xs leading-relaxed">
                                  {spec.description}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center sm:justify-start">
                    <Link href="/register-interest" className="w-full sm:w-auto">
                      <button className="w-full sm:w-auto text-white px-6 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105" style={{ background: 'linear-gradient(to right, #111E60, #14ABAF)' }}>
                        Register Interest
                      </button>
                    </Link>
                    <Link href="/learn-more-isec" className="w-full sm:w-auto">
                      <button className="w-full sm:w-auto flex items-center justify-center bg-transparent border border-gray-700 hover:border-gray-500 px-6 py-3 rounded-full text-lg font-medium transition-colors">
                        Learn More
                        <FiArrowRight className="ml-2" />
                      </button>
                    </Link>
                  </div>

                  {/* Legal Documents Dropdown */}
                  <div className="relative mb-6 flex justify-center sm:justify-start" style={{ zIndex: 50 }}>
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
                
                {/* Right Column - Product Logo */}
                <div className="flex justify-center items-center w-full">
                  <div className="relative">
                    {/* ISEC Logo - Tech Style */}
                    <div className="relative w-56 h-56 md:w-72 md:h-72 flex items-center justify-center">
                      {/* Outer glow ring */}
                      <div className="absolute inset-0 rounded-2xl opacity-30 animate-pulse" style={{ 
                        background: 'linear-gradient(135deg, #111E60, #14ABAF, #111E60)',
                        filter: 'blur(20px)'
                      }}></div>
                      
                      {/* Main container with tech grid */}
                      <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl border-2 flex items-center justify-center shadow-2xl overflow-hidden" style={{ borderColor: '#14ABAF' }}>
                        {/* Tech grid pattern background */}
                        <div className="absolute inset-0 opacity-20" style={{
                          backgroundImage: `
                            linear-gradient(rgba(20, 171, 175, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(20, 171, 175, 0.3) 1px, transparent 1px)
                          `,
                          backgroundSize: '20px 20px'
                        }}></div>
                        
                        {/* Corner tech accents */}
                        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 rounded-tl" style={{ borderColor: '#14ABAF' }}></div>
                        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 rounded-tr" style={{ borderColor: '#14ABAF' }}></div>
                        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 rounded-bl" style={{ borderColor: '#111E60' }}></div>
                        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 rounded-br" style={{ borderColor: '#111E60' }}></div>
                        
                        {/* Animated border glow */}
                        <div className="absolute inset-0 rounded-2xl opacity-30" style={{
                          background: 'linear-gradient(90deg, transparent, #14ABAF, transparent, #111E60, transparent)',
                          backgroundSize: '200% 200%',
                          animation: 'gradient-shift 3s ease infinite'
                        }}></div>
                        
                        {/* Logo image */}
                        <div className="relative z-10 w-40 h-40 md:w-52 md:h-52 flex items-center justify-center">
                          <Image
                            src={isecLogo}
                            alt="ISEC Logo"
                            fill
                            style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 10px rgba(20, 171, 175, 0.5))' }}
                            priority
                          />
                        </div>
                        
                        {/* Inner glow effect */}
                        <div className="absolute inset-4 rounded-xl opacity-20" style={{ 
                          background: 'radial-gradient(circle, rgba(20, 171, 175, 0.3), transparent 70%)'
                        }}></div>
                      </div>
                      
                      {/* Rotating tech ring */}
                      <div className="absolute inset-0 rounded-2xl opacity-20 animate-spin" style={{
                        background: 'conic-gradient(from 0deg, transparent, #14ABAF, transparent, #111E60, transparent)',
                        animationDuration: '8s'
                      }}></div>
                    </div>
                    
                    {/* Decorative tech elements */}
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full opacity-15 blur-2xl" style={{ background: 'linear-gradient(135deg, #111E60, #14ABAF)' }}></div>
                    <div className="absolute -left-4 -top-4 w-16 h-16 rounded-full opacity-10 blur-xl" style={{ background: '#14ABAF' }}></div>
                    
                    {/* Tech scan lines effect */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                      <div className="absolute inset-0 opacity-5" style={{
                        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(20, 171, 175, 0.1) 2px, rgba(20, 171, 175, 0.1) 4px)'
                      }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Iter8 Labs Features Section */}
     

      {/* CTA Section */}
      <div className="py-20 bg-gray-950">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Infrastructure?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join the waitlist to be among the first to experience ISEC and transform your certificate management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/register-interest" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto text-white px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105" style={{ background: 'linear-gradient(to right, #111E60, #14ABAF)' }}>
                Register Interest
              </button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-transparent border border-gray-500 hover:border-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
                Contact Sales
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
