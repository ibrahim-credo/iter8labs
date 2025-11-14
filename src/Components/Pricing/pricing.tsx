// src/Components/Pricing/pricing.tsx
import React from 'react';
import Link from 'next/link';
import { FiCheck, FiUsers, FiShield, FiZap, FiServer, FiHeadphones } from 'react-icons/fi';
import { RiShieldKeyholeLine } from 'react-icons/ri';

interface PricingPlan {
  name: string;
  suitableFor: string;
  price: string;
  priceNote?: string;
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
  buttonText: string;
  buttonLink: string;
}

const Pricing = () => {
  const plans: PricingPlan[] = [
    {
      name: "Starter",
      suitableFor: "Small IT Teams",
      price: "$299",
      priceNote: "/month",
      features: [
        "Certificate discovery",
        "Expiry alerts",
        "Dashboard access",
        "Basic reporting",
        "Email support"
      ],
      icon: <FiUsers className="h-6 w-6" style={{ color: '#14ABAF' }} />,
      buttonText: "Get Started",
      buttonLink: "/signup?plan=starter"
    },
    {
      name: "Professional",
      suitableFor: "Mid-size Enterprises",
      price: "$699",
      priceNote: "/month",
      features: [
        "Multi-CA integrations",
        "Role-based access control",
        "Advanced reporting",
        "API access",
        "Priority support",
        "Custom integrations"
      ],
      icon: <FiShield className="h-6 w-6" style={{ color: '#14ABAF' }} />,
      popular: true,
      buttonText: "Start Free Trial",
      buttonLink: "/signup?plan=professional"
    },
    {
      name: "Enterprise",
      suitableFor: "Large Organizations",
      price: "Custom Quote",
      priceNote: "",
      features: [
        "Full automation suite",
        "HSM integration",
        "Premium support (24/7)",
        "Dedicated account manager",
        "Custom SLA",
        "On-premise deployment",
        "White-label options"
      ],
      icon: <RiShieldKeyholeLine className="h-6 w-6" style={{ color: '#14ABAF' }} />,
      buttonText: "Contact Sales",
      buttonLink: "/contact"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-28 md:pt-36 pb-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ backgroundColor: '#14ABAF' }}></div>
        <div className="absolute -bottom-10 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" style={{ backgroundColor: '#111E60' }}></div>
        
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full px-4 py-2 mb-6 border" style={{ background: 'linear-gradient(to right, rgba(17, 30, 96, 0.2), rgba(20, 171, 175, 0.2))', borderColor: '#14ABAF' }}>
              <RiShieldKeyholeLine className="h-4 w-4 mr-2" style={{ color: '#14ABAF' }} />
              <span className="text-sm font-medium" style={{ color: '#14ABAF' }}>Pricing</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              ISEC 
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #111E60, #14ABAF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> Pricing</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Choose the plan that fits your organization's security needs. All plans include enterprise-grade certificate lifecycle management.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border-2 overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'border-opacity-100 shadow-2xl scale-105'
                    : 'border-gray-800 hover:border-gray-700'
                }`}
                style={{
                  background: plan.popular
                    ? 'linear-gradient(to bottom, rgba(17, 30, 96, 0.3), rgba(20, 171, 175, 0.1), rgba(17, 30, 96, 0.3))'
                    : 'linear-gradient(to bottom, rgba(17, 30, 96, 0.1), rgba(0, 0, 0, 0.8), rgba(17, 30, 96, 0.1))',
                  borderColor: plan.popular ? '#14ABAF' : undefined
                }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 text-center py-2 text-xs font-bold uppercase tracking-wider" style={{ 
                    background: 'linear-gradient(to right, #111E60, #14ABAF)',
                    color: 'white'
                  }}>
                    Most Popular
                  </div>
                )}

                {/* Background grid pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: `
                    linear-gradient(rgba(20, 171, 175, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(20, 171, 175, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}></div>

                {/* Content */}
                <div className="relative p-8 pt-12">
                  {/* Plan Icon */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(20, 171, 175, 0.2)' }}>
                      {plan.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                      <p className="text-sm text-gray-400">{plan.suitableFor}</p>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-8 pb-8 border-b border-gray-800">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.priceNote && (
                        <span className="text-gray-400 ml-2">{plan.priceNote}</span>
                      )}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mb-8 space-y-4">
                    <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#14ABAF' }}>
                      Key Inclusions
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <FiCheck className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" style={{ color: '#14ABAF' }} />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link href={plan.buttonLink} className="block">
                    <button
                      className={`w-full py-3 px-6 rounded-full font-medium transition-all transform hover:scale-105 ${
                        plan.popular
                          ? 'text-white'
                          : 'bg-transparent border-2 text-white hover:border-white'
                      }`}
                      style={
                        plan.popular
                          ? { background: 'linear-gradient(to right, #111E60, #14ABAF)' }
                          : { borderColor: '#14ABAF' }
                      }
                    >
                      {plan.buttonText}
                    </button>
                  </Link>
                </div>

                {/* Glow effect for popular plan */}
                {plan.popular && (
                  <div className="absolute -inset-0.5 opacity-30 blur-xl rounded-2xl" style={{ 
                    background: 'linear-gradient(to right, #111E60, #14ABAF)'
                  }}></div>
                )}
              </div>
            ))}
          </div>

          {/* Pricing Note */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm max-w-3xl mx-auto">
              <span className="font-semibold text-gray-300">*</span> Pricing depends on deployment model (on-premise / cloud) and integration volume. 
              Contact us for detailed pricing based on your specific requirements.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ/Additional Info Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked 
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #111E60, #14ABAF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> Questions</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900 bg-opacity-70 rounded-xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <FiServer className="h-5 w-5 mr-2" style={{ color: '#14ABAF' }} />
                  Deployment Options
                </h3>
                <p className="text-gray-400 text-sm">
                  All plans support on-premise, cloud, and hybrid deployments. Pricing may vary based on your chosen deployment model.
                </p>
              </div>

              <div className="bg-gray-900 bg-opacity-70 rounded-xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <FiZap className="h-5 w-5 mr-2" style={{ color: '#14ABAF' }} />
                  Integration Volume
                </h3>
                <p className="text-gray-400 text-sm">
                  Pricing scales with the number of integrations and certificate volumes. Contact us for volume-based pricing.
                </p>
              </div>

              <div className="bg-gray-900 bg-opacity-70 rounded-xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <FiHeadphones className="h-5 w-5 mr-2" style={{ color: '#14ABAF' }} />
                  Support Levels
                </h3>
                <p className="text-gray-400 text-sm">
                  Starter includes email support. Professional includes priority support. Enterprise includes 24/7 premium support.
                </p>
              </div>

              <div className="bg-gray-900 bg-opacity-70 rounded-xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <FiShield className="h-5 w-5 mr-2" style={{ color: '#14ABAF' }} />
                  Free Trial
                </h3>
                <p className="text-gray-400 text-sm">
                  Professional plan includes a 40-day free trial. Enterprise plans include custom trial periods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-950">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Certificates?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Start your free trial today or contact our sales team to discuss enterprise solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/signup">
              <button className="w-full sm:w-auto text-white px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105" style={{ background: 'linear-gradient(to right, #111E60, #14ABAF)' }}>
                Start Free Trial
              </button>
            </Link>
            <Link href="/contact">
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

export default Pricing;

