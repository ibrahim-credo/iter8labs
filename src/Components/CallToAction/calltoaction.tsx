// components/CallToAction.jsx
import React from 'react';
import Link from 'next/link';
import { FiCheck } from 'react-icons/fi';

const CallToAction = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        {/* Background glow effects */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10" style={{ backgroundColor: '#14ABAF' }}></div>
          <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10" style={{ backgroundColor: '#111E60' }}></div>
          
          {/* Main content */}
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-8 md:p-12 overflow-hidden">
            {/* Tech pattern background */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-1/4 w-px h-full bg-white"></div>
              <div className="absolute top-0 left-2/4 w-px h-full bg-white"></div>
              <div className="absolute top-0 left-3/4 w-px h-full bg-white"></div>
              <div className="absolute top-1/4 left-0 w-full h-px bg-white"></div>
              <div className="absolute top-2/4 left-0 w-full h-px bg-white"></div>
              <div className="absolute top-3/4 left-0 w-full h-px bg-white"></div>
            </div>
            
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to transform your business with our solutions?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                  Start your 40-day free trial today and experience the full power of iter8labs's SaaS ecosystem with no commitment.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/signup">
                    <button className="text-white px-8 py-3 rounded-full text-lg font-medium transition-all" style={{ background: 'linear-gradient(to right, #111E60, #14ABAF)' }}>
                      Start Your Free Trial
                    </button>
                  </Link>
                  <Link href="/contact">
                    <button className="bg-transparent border border-gray-500 hover:border-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
                      Talk to Sales
                    </button>
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Full access to all products during trial",
                    "No credit card required to start",
                    "24/7 support included during trial",
                    "Cancel anytime with no obligations"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mr-3" style={{ background: 'linear-gradient(to right, #111E60, #14ABAF)' }}>
                        <FiCheck className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right side countdown/timer visual */}
              <div className="lg:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="w-48 h-48 md:w-56 md:h-56 bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-full border border-gray-800 flex flex-col items-center justify-center">
                    <div className="text-sm text-gray-400 mb-2 uppercase tracking-wider">Limited Time Offer</div>
                    <div className="text-4xl font-bold" style={{ background: 'linear-gradient(to right, #111E60, #14ABAF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      40
                    </div>
                    <div className="text-xl font-medium mb-1">Days</div>
                    <div className="text-sm text-gray-400">Free Trial</div>
                    
                    {/* Circular progress indicator */}
                    <div className="absolute inset-0 border-4 border-transparent rounded-full p-1">
                      <div className="w-full h-full rounded-full border-8 border-gray-800 animate-spin" style={{ borderTopColor: '#14ABAF', borderRightColor: '#111E60', animationDuration: '10s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;