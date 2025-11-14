// src/Components/ISEC/isec.tsx
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiCheck, FiShield, FiSearch, FiRefreshCw, FiLink, FiLock, FiBarChart2, FiAlertCircle, FiClock, FiUsers, FiArrowRight, FiZap } from 'react-icons/fi';
import { RiShieldKeyholeLine, RiCloudLine } from 'react-icons/ri';
import isecLogo from '@/images/isec-logo.jpg';

const ISECPage = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const keyFeatures = [
    {
      icon: <FiSearch className="h-8 w-8" style={{ color: '#14ABAF' }} />,
      title: "Automated Certificate Discovery",
      description: "Instantly identifies all active certificates across networks, servers, and cloud assets.",
      highlight: "Highlights expired or weakly encrypted certificates for proactive renewal.",
      visual: "network-diagram"
    },
    {
      icon: <FiRefreshCw className="h-8 w-8" style={{ color: '#14ABAF' }} />,
      title: "Lifecycle Management",
      description: "Complete control from issuance to revocation.",
      highlight: "Automates renewals and policy enforcement across multiple environments.",
      visual: "lifecycle-flow"
    },
    {
      icon: <FiLink className="h-8 w-8" style={{ color: '#14ABAF' }} />,
      title: "Multi-CA Integration",
      description: "Seamless integration with internal and external CAs such as MSCA, EJBCA, and DigiCert.",
      highlight: "Unified visibility across all certificate sources.",
      visual: "integration-hub"
    },
    {
      icon: <FiLock className="h-8 w-8" style={{ color: '#14ABAF' }} />,
      title: "Security at the Core",
      description: "Role-based access control (RBAC), encrypted data in transit and at rest.",
      highlight: "Built on Kubernetes for scalability, reliability, and zero-trust deployment.",
      visual: "security-layers"
    },
    {
      icon: <FiBarChart2 className="h-8 w-8" style={{ color: '#14ABAF' }} />,
      title: "Unified Dashboard",
      description: "Real-time visibility into certificate health, expiry alerts, and compliance metrics.",
      highlight: "Self-service requests, approvals, and audit logs in one place.",
      visual: "dashboard-view"
    }
  ];

  const whyISECStats = [
    {
      quote: "TLS certificates will only be valid for 47 days from March 2026",
      icon: <FiClock className="h-6 w-6" style={{ color: '#14ABAF' }} />,
      stat: "47 Days",
      label: "Certificate Validity"
    },
    {
      quote: "In 2022, Twitter experienced a widespread outage due to an expired certificate that went unnoticed and unrenewed.",
      icon: <FiAlertCircle className="h-6 w-6" style={{ color: '#14ABAF' }} />,
      stat: "2022",
      label: "Twitter Outage"
    },
    {
      quote: "In 2018, Marriott Hotels disclosed a massive data breach that exposed the personal identifiable information (PII) of up to 500 million guests. The breach was facilitated by an unauthorized third-party using a compromised certificate to access the hotel's guest reservation system.",
      icon: <FiShield className="h-6 w-6" style={{ color: '#14ABAF' }} />,
      stat: "500M",
      label: "Records Exposed"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative pt-28 md:pt-36 pb-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ backgroundColor: '#14ABAF' }}></div>
        <div className="absolute -bottom-10 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" style={{ backgroundColor: '#111E60' }}></div>
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Content */}
            <div className="lg:w-1/2">
              <div className="inline-flex items-center rounded-full px-4 py-2 mb-6 border" style={{ background: 'linear-gradient(to right, rgba(17, 30, 96, 0.2), rgba(20, 171, 175, 0.2))', borderColor: '#14ABAF' }}>
                <RiShieldKeyholeLine className="h-4 w-4 mr-2" style={{ color: '#14ABAF' }} />
                <span className="text-sm font-medium" style={{ color: '#14ABAF' }}>ISEC</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Integrated Secure 
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #111E60, #14ABAF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> Enterprise Certificates</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                An intelligent Certificate Lifecycle Management platform that simplifies and secures how organizations manage their digital certificates.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/pricing">
                  <button className="text-white px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105" style={{ background: 'linear-gradient(to right, #111E60, #14ABAF)' }}>
                    View Pricing
                  </button>
                </Link>
                <Link href="/register-interest">
                  <button className="bg-transparent border border-gray-500 hover:border-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
                    Request Demo
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Right Column - Logo */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                {/* ISEC Logo - Tech Style */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 rounded-2xl opacity-30 animate-pulse" style={{ 
                    background: 'linear-gradient(135deg, #111E60, #14ABAF, #111E60)',
                    filter: 'blur(20px)'
                  }}></div>
                  
                  {/* Main container */}
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl border-2 flex items-center justify-center shadow-2xl overflow-hidden" style={{ borderColor: '#14ABAF' }}>
                    {/* Tech grid pattern */}
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: `
                        linear-gradient(rgba(20, 171, 175, 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(20, 171, 175, 0.3) 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px'
                    }}></div>
                    
                    {/* Corner accents */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 rounded-tl" style={{ borderColor: '#14ABAF' }}></div>
                    <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 rounded-tr" style={{ borderColor: '#14ABAF' }}></div>
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 rounded-bl" style={{ borderColor: '#111E60' }}></div>
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 rounded-br" style={{ borderColor: '#111E60' }}></div>
                    
                    {/* Logo image */}
                    <div className="relative z-10 w-48 h-48 md:w-60 md:h-60 flex items-center justify-center">
                      <Image
                        src={isecLogo}
                        alt="ISEC Logo"
                        fill
                        style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 10px rgba(20, 171, 175, 0.5))' }}
                        priority
                      />
                    </div>
                    
                    {/* Inner glow */}
                    <div className="absolute inset-4 rounded-xl opacity-20" style={{ 
                      background: 'radial-gradient(circle, rgba(20, 171, 175, 0.3), transparent 70%)'
                    }}></div>
                  </div>
                  
                  {/* Rotating ring */}
                  <div className="absolute inset-0 rounded-2xl opacity-20 animate-spin" style={{
                    background: 'conic-gradient(from 0deg, transparent, #14ABAF, transparent, #111E60, transparent)',
                    animationDuration: '8s'
                  }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section - Visual Design */}
      <div className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Overview</h2>
              <div className="h-px w-24 mx-auto mb-6" style={{ background: 'linear-gradient(to right, transparent, #14ABAF, transparent)' }}></div>
            </div>
            
            {/* Visual Overview Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 rounded-2xl p-8 md:p-12 relative overflow-hidden" style={{ borderColor: '#14ABAF' }}>
              {/* Tech grid background */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `
                  linear-gradient(rgba(20, 171, 175, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(20, 171, 175, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px'
              }}></div>
              
              {/* Visual structure - ISEC Platform Diagram */}
              <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                  {/* Left - Platform Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(20, 171, 175, 0.2)' }}>
                        <RiShieldKeyholeLine className="h-6 w-6" style={{ color: '#14ABAF' }} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">ISEC by Iter8 Labs</h3>
                        <p className="text-sm text-gray-400">Intelligent Certificate Lifecycle Management</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed mb-6">
                      An intelligent Certificate Lifecycle Management (CLM) platform designed to simplify and secure the way organizations manage their digital certificates. Built on a <span className="font-semibold text-white">cloud-native architecture</span>, ISEC automatically discovers, monitors, and manages both internal and external Certificate Authorities (CAs).
                    </p>
                  </div>
                  
                  {/* Right - Visual Benefits */}
                  <div className="space-y-4">
                    <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 border border-gray-700">
                      <div className="flex items-center mb-2">
                        <FiZap className="h-5 w-5 mr-2" style={{ color: '#14ABAF' }} />
                        <span className="font-semibold text-sm">Automated Discovery</span>
                      </div>
                    </div>
                    <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 border border-gray-700">
                      <div className="flex items-center mb-2">
                        <FiShield className="h-5 w-5 mr-2" style={{ color: '#14ABAF' }} />
                        <span className="font-semibold text-sm">Risk Mitigation</span>
                      </div>
                    </div>
                    <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 border border-gray-700">
                      <div className="flex items-center mb-2">
                        <RiCloudLine className="h-5 w-5 mr-2" style={{ color: '#14ABAF' }} />
                        <span className="font-semibold text-sm">Complete Visibility</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Result Statement - Visual */}
                <div className="border-t border-gray-800 pt-8">
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full mr-3 animate-pulse" style={{ backgroundColor: '#14ABAF' }}></div>
                      <span className="text-gray-300">Fewer outages</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full mr-3 animate-pulse" style={{ backgroundColor: '#14ABAF' }}></div>
                      <span className="text-gray-300">Stronger compliance</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full mr-3 animate-pulse" style={{ backgroundColor: '#14ABAF' }}></div>
                      <span className="text-gray-300">Streamlined ecosystem</span>
                    </div>
                    <div className="flex items-center ml-auto">
                      <span className="text-sm font-semibold" style={{ color: '#14ABAF' }}>All from a single intelligent platform</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why ISEC Section - Visual Stats */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why 
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #111E60, #14ABAF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> ISEC</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real-world incidents highlight the critical importance of automated certificate management.
            </p>
          </div>

          {/* Story Cards - Narrative Flow */}
          <div className="relative max-w-6xl mx-auto mb-12">
            {/* Connecting Story Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 transform -translate-y-1/2 z-0" style={{
              background: 'linear-gradient(to right, transparent, #14ABAF, #14ABAF, transparent)',
              opacity: 0.3
            }}></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {/* Card 1: The Challenge */}
              <div className="relative">
                {/* Story connector arrow */}
                <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-20">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#14ABAF' }}>
                    <FiArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-900 to-black border-2 rounded-xl p-6 relative overflow-hidden group h-full" style={{ borderColor: '#14ABAF' }}>
                  {/* Story step indicator */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ 
                    backgroundColor: 'rgba(20, 171, 175, 0.2)',
                    color: '#14ABAF',
                    border: '2px solid #14ABAF'
                  }}>
                    1
                  </div>
                  
                  {/* Tech corner brackets */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: '#14ABAF' }}></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: '#14ABAF' }}></div>
                  
                  {/* Hover gradient */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                    background: 'linear-gradient(to bottom right, rgba(17, 30, 96, 0.1), rgba(20, 171, 175, 0.1))'
                  }}></div>
                  
                  <div className="relative z-10">
                    {/* Story label */}
                    <div className="mb-3">
                      <span className="text-xs uppercase tracking-wider font-semibold" style={{ color: '#14ABAF' }}>The Challenge</span>
                    </div>
                    
                    {/* Stat Number */}
                    <div className="mb-4">
                      <div className="text-4xl font-bold mb-1" style={{ color: '#14ABAF' }}>47 Days</div>
                      <div className="text-xs uppercase tracking-wider text-gray-400">By 2029</div>
                    </div>
                    
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(20, 171, 175, 0.2)' }}>
                      {whyISECStats[0].icon}
                    </div>
                    
                    {/* Timeline Content */}
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <span className="font-semibold text-white">Certificate validity is rapidly decreasing:</span> March 15, 2026 - capped at <span className="font-semibold" style={{ color: '#14ABAF' }}>200 days</span>.<br /> March 15, 2027 - reduced to <span className="font-semibold" style={{ color: '#14ABAF' }}>100 days</span>.<br /> March 15, 2029 - limited to <span className="font-semibold" style={{ color: '#14ABAF' }}>47 days</span>, with Domain Control Validation (DCV) periods shortened to <span className="font-semibold" style={{ color: '#14ABAF' }}>10 days</span>.
                    </p>
                    
                    {/* Impact note */}
                    <div className="mt-4 pt-4 border-t border-gray-800">
                      <p className="text-xs text-gray-500">Certificate validity periods are rapidly decreasing</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: The Consequence */}
              <div className="relative">
                {/* Story connector arrow */}
                <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-20">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#14ABAF' }}>
                    <FiArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-900 to-black border-2 rounded-xl p-6 relative overflow-hidden group h-full" style={{ borderColor: '#14ABAF' }}>
                  {/* Story step indicator */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ 
                    backgroundColor: 'rgba(20, 171, 175, 0.2)',
                    color: '#14ABAF',
                    border: '2px solid #14ABAF'
                  }}>
                    2
                  </div>
                  
                  {/* Tech corner brackets */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: '#14ABAF' }}></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: '#14ABAF' }}></div>
                  
                  {/* Warning accent */}
                  <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(to right, #ef4444, #f59e0b)' }}></div>
                  
                  {/* Hover gradient */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                    background: 'linear-gradient(to bottom right, rgba(17, 30, 96, 0.1), rgba(20, 171, 175, 0.1))'
                  }}></div>
                  
                  <div className="relative z-10">
                    {/* Story label */}
                    <div className="mb-3">
                      <span className="text-xs uppercase tracking-wider font-semibold text-orange-400">The Consequence</span>
                    </div>
                    
                    {/* Stat Number */}
                    <div className="mb-4">
                      <div className="text-4xl font-bold mb-1 text-orange-400">{whyISECStats[1].stat}</div>
                      <div className="text-xs uppercase tracking-wider text-gray-400">{whyISECStats[1].label}</div>
                    </div>
                    
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(239, 68, 68, 0.2)' }}>
                      {whyISECStats[1].icon}
                    </div>
                    
                    {/* Quote */}
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <span className="font-semibold text-white">"{whyISECStats[1].quote}"</span>
                    </p>
                    
                    {/* Impact note */}
                    <div className="mt-4 pt-4 border-t border-gray-800">
                      <p className="text-xs text-gray-500">Expired certificates cause widespread service outages</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: The Impact */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-900 to-black border-2 rounded-xl p-6 relative overflow-hidden group h-full" style={{ borderColor: '#ef4444' }}>
                  {/* Story step indicator */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ 
                    backgroundColor: 'rgba(239, 68, 68, 0.2)',
                    color: '#ef4444',
                    border: '2px solid #ef4444'
                  }}>
                    3
                  </div>
                  
                  {/* Tech corner brackets */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: '#ef4444' }}></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: '#ef4444' }}></div>
                  
                  {/* Critical accent */}
                  <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(to right, #ef4444, #dc2626)' }}></div>
                  
                  {/* Hover gradient */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                    background: 'linear-gradient(to bottom right, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.1))'
                  }}></div>
                  
                  <div className="relative z-10">
                    {/* Story label */}
                    <div className="mb-3">
                      <span className="text-xs uppercase tracking-wider font-semibold text-red-400">The Impact</span>
                    </div>
                    
                    {/* Stat Number */}
                    <div className="mb-4">
                      <div className="text-4xl font-bold mb-1 text-red-400">{whyISECStats[2].stat}</div>
                      <div className="text-xs uppercase tracking-wider text-gray-400">{whyISECStats[2].label}</div>
                    </div>
                    
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(239, 68, 68, 0.2)' }}>
                      {whyISECStats[2].icon}
                    </div>
                    
                    {/* Quote */}
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <span className="font-semibold text-white">"{whyISECStats[2].quote}"</span>
                    </p>
                    
                    {/* Impact note */}
                    <div className="mt-4 pt-4 border-t border-gray-800">
                      <p className="text-xs text-gray-500">Compromised certificates lead to catastrophic data breaches</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Story conclusion */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center px-6 py-3 rounded-full border-2" style={{ 
                borderColor: '#14ABAF',
                background: 'linear-gradient(to right, rgba(17, 30, 96, 0.2), rgba(20, 171, 175, 0.2))'
              }}>
                <FiShield className="h-5 w-5 mr-2" style={{ color: '#14ABAF' }} />
                <span className="text-sm font-semibold" style={{ color: '#14ABAF' }}>
                  This is why automated certificate management is critical
                </span>
              </div>
            </div>
          </div>

          {/* Main Why ISEC - Visual Flow */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 rounded-2xl p-8 md:p-12 relative overflow-hidden" style={{ borderColor: '#14ABAF' }}>
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `
                  linear-gradient(rgba(20, 171, 175, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(20, 171, 175, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px'
              }}></div>
              
              <div className="relative z-10">
                {/* Visual flow diagram */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
                  <div className="text-center md:text-left">
                    <div className="text-4xl font-bold mb-2" style={{ color: '#14ABAF' }}>Thousands</div>
                    <div className="text-gray-400">Digital Certificates</div>
                  </div>
                  
                  <FiArrowRight className="h-8 w-8 text-gray-600 rotate-90 md:rotate-0" />
                  
                  <div className="text-center md:text-left">
                    <div className="text-4xl font-bold mb-2" style={{ color: '#14ABAF' }}>Manual</div>
                    <div className="text-gray-400">Management</div>
                  </div>
                  
                  <FiArrowRight className="h-8 w-8 text-gray-600 rotate-90 md:rotate-0" />
                  
                  <div className="text-center md:text-left">
                    <div className="text-4xl font-bold mb-2 text-red-400">Risk</div>
                    <div className="text-gray-400">Downtime & Breaches</div>
                  </div>
                </div>
                
                <div className="border-t border-gray-800 pt-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0" style={{ backgroundColor: 'rgba(20, 171, 175, 0.2)' }}>
                      <FiZap className="h-6 w-6" style={{ color: '#14ABAF' }} />
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      <span className="font-semibold text-white">ISEC brings automation, security and insight together</span> to give you a unified view and effortless control of your certificate lifecycle across cloud, DevOps, and hybrid environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Key 
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #111E60, #14ABAF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> Features</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive capabilities designed to automate and secure your certificate management.
            </p>
          </div>

          {/* Features Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-gray-700"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{
                    backgroundColor: 'rgba(20, 171, 175, 0.1)',
                    border: '1px solid rgba(20, 171, 175, 0.3)'
                  }}>
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">{feature.description}</p>

                  {/* Highlight */}
                  <div className="pt-4 border-t border-gray-800">
                    <div className="flex items-start">
                      <FiCheck className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5" style={{ color: '#14ABAF' }} />
                      <p className="text-xs text-gray-400 leading-relaxed">{feature.highlight}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Transformation Section - Visual Design */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 rounded-2xl p-8 md:p-12 relative overflow-hidden" style={{ borderColor: '#14ABAF' }}>
              {/* Background effects */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `
                  linear-gradient(rgba(20, 171, 175, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(20, 171, 175, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}></div>
              
              <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(to right, #111E60, #14ABAF)' }}></div>
              
              <div className="relative z-10">
                {/* Main statement */}
                <div className="text-center mb-12">
                  <p className="text-2xl md:text-3xl font-bold mb-4 leading-relaxed">
                    ISEC empowers organizations to move from <span className="text-gray-400">manual, reactive</span> certificate management to an <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #111E60, #14ABAF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>automated model</span>
                  </p>
                  <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                    Bridging IT security, compliance, and operations — ensuring that digital trust never fails.
                  </p>
                </div>
                
                {/* Visual transformation diagram */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {/* Before */}
                  <div className="bg-gray-800 bg-opacity-30 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: 'rgba(239, 68, 68, 0.2)' }}>
                        <FiAlertCircle className="h-5 w-5 text-red-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-300">Before</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 rounded-full mr-3 mt-2" style={{ backgroundColor: '#ef4444' }}></div>
                        <span className="text-sm text-gray-400">Manual, reactive management</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 rounded-full mr-3 mt-2" style={{ backgroundColor: '#ef4444' }}></div>
                        <span className="text-sm text-gray-400">IT security silos</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 rounded-full mr-3 mt-2" style={{ backgroundColor: '#ef4444' }}></div>
                        <span className="text-sm text-gray-400">Compliance challenges</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow/Transformation */}
                  <div className="flex items-center justify-center">
                    <div className="hidden md:block">
                      <FiArrowRight className="h-12 w-12" style={{ color: '#14ABAF' }} />
                    </div>
                    <div className="md:hidden">
                      <FiArrowRight className="h-12 w-12 rotate-90" style={{ color: '#14ABAF' }} />
                    </div>
                  </div>
                  
                  {/* After */}
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border-2" style={{ borderColor: '#14ABAF' }}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: 'rgba(20, 171, 175, 0.2)' }}>
                        <FiZap className="h-5 w-5" style={{ color: '#14ABAF' }} />
                      </div>
                      <h3 className="text-lg font-semibold text-white">With ISEC</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <FiCheck className="h-4 w-4 mr-3 mt-1 flex-shrink-0" style={{ color: '#14ABAF' }} />
                        <span className="text-sm text-white font-medium">Automated model</span>
                      </div>
                      <div className="flex items-start">
                        <FiCheck className="h-4 w-4 mr-3 mt-1 flex-shrink-0" style={{ color: '#14ABAF' }} />
                        <span className="text-sm text-white font-medium">Unified security & operations</span>
                      </div>
                      <div className="flex items-start">
                        <FiCheck className="h-4 w-4 mr-3 mt-1 flex-shrink-0" style={{ color: '#14ABAF' }} />
                        <span className="text-sm text-white font-medium">Digital trust assurance</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Target industries - Visual */}
                <div className="border-t border-gray-800 pt-8">
                  <div className="text-center mb-6">
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Trusted by organizations across industries
                    </p>
                  </div>
                  
                  {/* Industry badges */}
                  <div className="flex flex-wrap justify-center gap-4">
                    {['Financial Institutions', 'Telecom Operators', 'Cloud-Native Enterprises'].map((industry, idx) => (
                      <div key={idx} className="flex items-center px-5 py-3 rounded-lg border-2 transition-all hover:scale-105" style={{ 
                        borderColor: '#14ABAF',
                        backgroundColor: 'rgba(20, 171, 175, 0.05)'
                      }}>
                        <div className="w-2 h-2 rounded-full mr-3 animate-pulse" style={{ backgroundColor: '#14ABAF' }}></div>
                        <span className="text-sm font-medium text-white">{industry}</span>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-center text-gray-400 text-sm mt-6">
                    ISEC provides the reliability, visibility, and intelligence needed to manage complex certificate ecosystems at scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-950">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Certificate Management?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Experience the power of automated certificate lifecycle management with ISEC.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/pricing">
              <button className="w-full sm:w-auto text-white px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105" style={{ background: 'linear-gradient(to right, #111E60, #14ABAF)' }}>
                View Pricing
              </button>
            </Link>
            <Link href="/register-interest">
              <button className="w-full sm:w-auto bg-transparent border border-gray-500 hover:border-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
                Request Demo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ISECPage;
