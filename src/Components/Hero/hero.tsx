// components/Hero.jsx
import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="bg-black text-white pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <div className="relative mb-6">
              {/* Animation blobs in background */}
              <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ backgroundColor: '#14ABAF' }}></div>
              <div className="absolute -bottom-10 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" style={{ backgroundColor: '#111E60' }}></div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                Your Trusted Platform for 
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #111E60, #14ABAF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> SaaS Solutions</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Explore a suite of innovative cloud-based solutions that enhance productivity, security, and efficiency for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/signup">
                <button className="text-white px-8 py-3 rounded-full text-lg font-medium transition-all" style={{ background: 'linear-gradient(to right, #111E60, #14ABAF)' }}>
                  Try for Free for 40 Days
                </button>
              </Link>
              <Link href="/products">
                <button className="bg-transparent border border-gray-500 hover:border-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
                  Explore Products
                </button>
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center text-gray-400 text-sm">
              <div className="flex items-center mr-6 mb-2">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>No credit card required</span>
              </div>
              
              <div className="flex items-center mr-6 mb-2">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Full-featured access</span>
              </div>
              
              <div className="flex items-center mb-2">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              {/* Abstract visualization */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 shadow-2xl overflow-hidden">
                {/* Glowing lines for tech feel */}
                <div className="absolute top-0 left-1/3 w-px h-full opacity-30" style={{ background: 'linear-gradient(to bottom, transparent, #14ABAF, transparent)' }}></div>
                <div className="absolute top-0 left-2/3 w-px h-full opacity-30" style={{ background: 'linear-gradient(to bottom, transparent, #111E60, transparent)' }}></div>
                <div className="absolute top-1/3 left-0 w-full h-px opacity-30" style={{ background: 'linear-gradient(to right, transparent, #14ABAF, transparent)' }}></div>
                <div className="absolute top-2/3 left-0 w-full h-px opacity-30" style={{ background: 'linear-gradient(to right, transparent, #111E60, transparent)' }}></div>
                
                {/* SaaS dashboard preview */}
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-gray-500">iter8labs Dashboard</div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-lg font-semibold mb-2">Welcome to Your iter8labs Dashboard</div>
                    <div className="h-2 bg-gray-800 rounded w-24 mb-4"></div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-gray-800 bg-opacity-40 p-4 rounded-lg">
                        <div className="h-2 bg-blue-500 rounded w-8 mb-2"></div>
                        <div className="h-2 bg-gray-700 rounded w-12 mb-2"></div>
                        <div className="text-xl font-bold text-blue-400">4</div>
                        <div className="text-xs text-gray-500">Active Products</div>
                      </div>
                      <div className="bg-gray-800 bg-opacity-40 p-4 rounded-lg">
                        <div className="h-2 bg-purple-500 rounded w-8 mb-2"></div>
                        <div className="h-2 bg-gray-700 rounded w-12 mb-2"></div>
                        <div className="text-xl font-bold text-purple-400">86%</div>
                        <div className="text-xs text-gray-500">Security Score</div>
                      </div>
                      <div className="bg-gray-800 bg-opacity-40 p-4 rounded-lg">
                        <div className="h-2 bg-green-500 rounded w-8 mb-2"></div>
                        <div className="h-2 bg-gray-700 rounded w-12 mb-2"></div>
                        <div className="text-xl font-bold text-green-400">24/7</div>
                        <div className="text-xs text-gray-500">Support</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 bg-opacity-40 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-sm font-medium">Recent Activity</div>
                        <div className="text-xs text-blue-400">View All</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between py-1 border-b border-gray-800">
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            <span className="text-xs">ISEC security scan completed</span>
                          </div>
                          <div className="text-xs text-gray-500">2m ago</div>
                        </div>
                        <div className="flex items-center justify-between py-1 border-b border-gray-800">
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                            <span className="text-xs">New subscription activated</span>
                          </div>
                          <div className="text-xs text-gray-500">1h ago</div>
                        </div>
                      </div>
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
  );
};

export default Hero;