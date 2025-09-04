// components/Features.jsx
import React from 'react';
import { RiSecurePaymentLine, RiDashboardLine } from 'react-icons/ri';
import { IoServerOutline } from 'react-icons/io5';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { AiOutlineCloudServer } from 'react-icons/ai';

const Features = () => {
  const features = [
    {
      icon: <AiOutlineCloudServer className="h-10 w-10 text-blue-400" />,
      title: "Multi-SaaS Offering",
      description: "Access multiple software products under one brand with unified billing and management.",
    },
    {
      icon: <RiSecurePaymentLine className="h-10 w-10 text-purple-400" />,
      title: "Secure Payment Processing",
      description: "Integrated with Stripe & PayPal for seamless, secure transactions and subscription management.",
    },
    {
      icon: <IoServerOutline className="h-10 w-10 text-green-400" />,
      title: "Modern Architecture",
      description: "Built on a scalable cloud infrastructure designed for performance and future growth.",
    },
    {
      icon: <RiDashboardLine className="h-10 w-10 text-red-400" />,
      title: "User Dashboard",
      description: "Manage subscriptions, track usage, and access support all from one intuitive interface.",
    },
    {
      icon: <HiOutlineUserGroup className="h-10 w-10 text-yellow-400" />,
      title: "Subscription-Based Model",
      description: "Flexible monthly and yearly plans with free trial periods to suit various business needs.",
    },
  ];

  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Platform Features</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            iter8labs provides a comprehensive suite of tools and features to help businesses maximize their productivity and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl p-8 border border-gray-800 transform transition-all duration-300 hover:scale-105 hover:border-gray-700"
            >
              <div className="flex flex-col items-start">
                <div className="bg-gray-800 bg-opacity-70 rounded-lg p-3 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-black bg-opacity-50 border border-gray-800 rounded-xl">
            <div className="text-4xl font-bold mb-2">
              <span style={{ backgroundImage: 'linear-gradient(to right, #3b82f6, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                99.9%
              </span>
            </div>
            <div className="text-xl font-medium">Uptime Guarantee</div>
            <p className="text-gray-400 mt-2">For all our cloud-based services</p>
          </div>
          
          <div className="p-6 bg-black bg-opacity-50 border border-gray-800 rounded-xl">
            <div className="text-4xl font-bold mb-2">
              <span style={{ backgroundImage: 'linear-gradient(to right, #a855f7, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                10k+
              </span>
            </div>
            <div className="text-xl font-medium">Active Users</div>
            <p className="text-gray-400 mt-2">Trusting our platform globally</p>
          </div>
          
          <div className="p-6 bg-black bg-opacity-50 border border-gray-800 rounded-xl">
            <div className="text-4xl font-bold mb-2">
              <span style={{ backgroundImage: 'linear-gradient(to right, #10b981, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                24/7
              </span>
            </div>
            <div className="text-xl font-medium">Customer Support</div>
            <p className="text-gray-400 mt-2">Technical assistance always available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;