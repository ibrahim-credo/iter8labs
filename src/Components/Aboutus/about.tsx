import React from 'react';
import { FiUsers, FiShield, FiTrendingUp, FiGlobe, FiTarget, FiAward } from 'react-icons/fi';
import { RiSecurePaymentLine, RiCloudLine } from 'react-icons/ri';
import { HiOutlineSparkles } from 'react-icons/hi';

const AboutUs = () => {
  const values = [
    {
      icon: <FiShield className="h-8 w-8 text-blue-400" />,
      title: "Security First",
      description: "Enterprise-grade security for safe transactions and data privacy protection."
    },
    {
      icon: <FiUsers className="h-8 w-8 text-purple-400" />,
      title: "Customer Success",
      description: "Dedicated to empowering our users with exceptional support and innovative solutions."
    },
    {
      icon: <HiOutlineSparkles className="h-8 w-8 text-green-400" />,
      title: "Innovation",
      description: "Continuously pushing boundaries to deliver cutting-edge SaaS technologies."
    },
    {
      icon: <FiGlobe className="h-8 w-8 text-red-400" />,
      title: "Global Reach",
      description: "Connecting businesses worldwide with the best cloud-based solutions."
    }
  ];

  const services = [
    {
      icon: <RiCloudLine className="h-6 w-6 text-blue-400" />,
      title: "Productivity Tools",
      description: "Streamline workflows and boost efficiency"
    },
    {
      icon: <FiShield className="h-6 w-6 text-purple-400" />,
      title: "Cybersecurity Solutions",
      description: "Advanced security for modern threats"
    },
    {
      icon: <FiTrendingUp className="h-6 w-6 text-green-400" />,
      title: "AI and Analytics Platforms",
      description: "Data-driven insights and automation"
    },
    {
      icon: <RiSecurePaymentLine className="h-6 w-6 text-yellow-400" />,
      title: "Public Key Infrastructure",
      description: "Secure digital identity solutions"
    }
  ];

  const stats = [
    { number: "10k+", label: "Active Users", color: "from-blue-400 to-blue-600" },
    { number: "99.9%", label: "Uptime", color: "from-purple-400 to-purple-600" },
    { number: "24/7", label: "Support", color: "from-green-400 to-green-600" },
    { number: "50+", label: "SaaS Partners", color: "from-red-400 to-red-600" }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        {/* Background effects */}
        <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20" style={{ backgroundColor: '#14ABAF' }}></div>
        <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20" style={{ backgroundColor: '#111E60' }}></div>
        
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-gray-900 bg-opacity-70 border border-gray-800 rounded-full px-6 py-2 mb-8">
              <FiTarget className="h-5 w-5 text-blue-400 mr-2" />
              <span className="text-gray-300 text-sm">About Iter8Labs</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Empowering Innovation.
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #111E60, #14ABAF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> Simplifying SaaS.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              We are a next-generation software vendor platform dedicated to connecting businesses 
              and individuals with cutting-edge SaaS solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-600 bg-opacity-20 border border-blue-500 rounded-full px-4 py-2 mb-6">
                <span className="text-blue-400 text-sm font-medium">Our Mission</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Making SaaS Discovery 
                <span className="text-blue-400"> Simple & Secure</span>
              </h2>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Our mission is simple: to make it easy, secure, and seamless for users to discover, 
                compare, and subscribe to cloud-based software tools that elevate productivity, 
                enhance security, and drive operational efficiency.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} text-transparent bg-clip-text mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 relative overflow-hidden">
                {/* Tech pattern background */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-1/4 w-px h-full bg-white"></div>
                  <div className="absolute top-0 left-2/4 w-px h-full bg-white"></div>
                  <div className="absolute top-0 left-3/4 w-px h-full bg-white"></div>
                  <div className="absolute top-1/4 left-0 w-full h-px bg-white"></div>
                  <div className="absolute top-2/4 left-0 w-full h-px bg-white"></div>
                  <div className="absolute top-3/4 left-0 w-full h-px bg-white"></div>
                </div>
                
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-6">Our Platform Benefits</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-600 bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                        <FiShield className="h-4 w-4 text-blue-400" />
                      </div>
                      <span className="text-gray-300">Enterprise-grade security</span>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-600 bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                        <FiUsers className="h-4 w-4 text-purple-400" />
                      </div>
                      <span className="text-gray-300">All-in-one platform</span>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-600 bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                        <FiTrendingUp className="h-4 w-4 text-green-400" />
                      </div>
                      <span className="text-gray-300">Scalable for growth</span>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-red-600 bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                        <FiAward className="h-4 w-4 text-red-400" />
                      </div>
                      <span className="text-gray-300">Trusted by experts</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A team of technology experts, product innovators, and customer success champions 
              who believe in the power of the cloud.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl p-6 border border-gray-800 text-center hover:border-gray-700 transition-all duration-300 hover:scale-105">
                <div className="bg-gray-800 bg-opacity-70 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Iter8Labs serves as a central marketplace and management hub for SaaS applications 
              across various categories, ensuring our users have access to top-tier solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-black bg-opacity-50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
                <div className="flex items-start">
                  <div className="bg-gray-800 bg-opacity-70 rounded-lg p-3 mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="relative">
            {/* Background glow effects */}
            <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10" style={{ backgroundColor: '#14ABAF' }}></div>
            <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10" style={{ backgroundColor: '#111E60' }}></div>
            
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-8 md:p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center rounded-full px-4 py-2 mb-6 border" style={{ background: 'linear-gradient(to right, rgba(17, 30, 96, 0.2), rgba(20, 171, 175, 0.2))', borderColor: '#14ABAF' }}>
                  <FiTarget className="h-4 w-4 mr-2" style={{ color: '#14ABAF' }} />
                  <span className="text-sm font-medium" style={{ color: '#14ABAF' }}>Our Vision</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  The Future of 
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #111E60, #14ABAF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> SaaS Innovation</span>
                </h2>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  To become the most trusted platform for discovering and deploying SaaS innovations 
                  globally — enabling every business to work smarter, faster, and more securely.
                </p>
              </div>
              
              {/* Decorative tech elements */}
              <div className="absolute top-0 left-1/4 w-px h-full opacity-20" style={{ background: 'linear-gradient(to bottom, transparent, #14ABAF, transparent)' }}></div>
              <div className="absolute top-0 right-1/4 w-px h-full opacity-20" style={{ background: 'linear-gradient(to bottom, transparent, #111E60, transparent)' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-950">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses who trust iter8labs for their SaaS solutions. 
            Start your journey with our 40-day free trial.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-white px-8 py-3 rounded-full text-lg font-medium transition-all" style={{ background: 'linear-gradient(to right, #111E60, #14ABAF)' }}>
              Start Your Free Trial
            </button>
            <button className="bg-transparent border border-gray-500 hover:border-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;