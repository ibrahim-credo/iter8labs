// app/privacy-policy/page.tsx
import React from 'react';
import Link from 'next/link';
import { FiArrowLeft, FiDownload, FiPrinter, FiShield, FiLock, FiEye, FiUsers } from 'react-icons/fi';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - iter8labs',
  description: 'iter8labs Privacy Policy - Learn how we collect, use, protect, and manage your personal information when using our SaaS platform and services.',
  keywords: 'privacy policy, data protection, personal information, iter8labs, SaaS platform, privacy rights',
};

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      {/* Header */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            <FiArrowLeft className="mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4">
            <button className="flex items-center text-gray-400 hover:text-white transition-colors">
              <FiPrinter className="mr-2" />
              Print
            </button>
            <button className="flex items-center text-gray-400 hover:text-white transition-colors">
              <FiDownload className="mr-2" />
              Download PDF
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-400 mb-8">Effective Date: June 29, 2025</p>

          {/* Key Privacy Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6 text-center">
              <FiShield className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Data Protection</h3>
              <p className="text-gray-300 text-sm">Your data is secured with enterprise-grade protection</p>
            </div>
            <div className="bg-green-900/20 border border-green-800 rounded-lg p-6 text-center">
              <FiLock className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-green-400 mb-2">No Data Selling</h3>
              <p className="text-gray-300 text-sm">We never sell your personal information to third parties</p>
            </div>
            <div className="bg-purple-900/20 border border-purple-800 rounded-lg p-6 text-center">
              <FiEye className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-purple-400 mb-2">Transparency</h3>
              <p className="text-gray-300 text-sm">Clear information about data collection and usage</p>
            </div>
            <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-6 text-center">
              <FiUsers className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Your Rights</h3>
              <p className="text-gray-300 text-sm">Full control over your personal data and privacy</p>
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Privacy Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                Welcome to iter8labs, a software vendor platform offering a suite of SaaS (Software as a Service) solutions 
                designed to enhance productivity, security, and efficiency. Your privacy is important to us, and this 
                Privacy Policy outlines how we collect, use, protect, and disclose your information when you use our website and services.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white">1. Information We Collect</h2>
              <p className="text-gray-300 mb-6">We may collect the following types of information:</p>
              
              <div className="space-y-6">
                <div className="bg-gray-900/50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">a. Personal Information</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center"><span className="text-blue-400 mr-2">•</span> Name</li>
                    <li className="flex items-center"><span className="text-blue-400 mr-2">•</span> Email address</li>
                    <li className="flex items-center"><span className="text-blue-400 mr-2">•</span> Phone number</li>
                    <li className="flex items-center"><span className="text-blue-400 mr-2">•</span> Company name</li>
                    <li className="flex items-center"><span className="text-blue-400 mr-2">•</span> Billing address and payment details</li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">b. Account Information</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center"><span className="text-purple-400 mr-2">•</span> Username and password</li>
                    <li className="flex items-center"><span className="text-purple-400 mr-2">•</span> SaaS product preferences</li>
                    <li className="flex items-center"><span className="text-purple-400 mr-2">•</span> Subscription plans and usage statistics</li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold mb-3 text-green-400">c. Technical Information</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center"><span className="text-green-400 mr-2">•</span> IP address</li>
                    <li className="flex items-center"><span className="text-green-400 mr-2">•</span> Browser type and version</li>
                    <li className="flex items-center"><span className="text-green-400 mr-2">•</span> Device type and operating system</li>
                    <li className="flex items-center"><span className="text-green-400 mr-2">•</span> Log data, cookies, and analytics</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white">2. How We Use Your Information</h2>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <p className="text-gray-300 mb-4 font-semibold">We use your information to:</p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    Provide, operate, and maintain our SaaS platform
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    Personalize your experience and recommend suitable products
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    Process transactions and manage subscriptions
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    Communicate with you regarding updates, offers, or support
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    Ensure platform security and monitor for misuse
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    Comply with legal and regulatory requirements
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white">3. Sharing Your Information</h2>
              <div className="bg-red-900/20 border border-red-800 rounded-lg p-6">
                <p className="text-gray-300 mb-4 font-semibold">We do not sell your personal information. We may share your data with:</p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    Third-party service providers who assist with payment processing, analytics, hosting, and customer support
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    Legal authorities if required to comply with applicable laws and regulations
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    Business partners under confidentiality agreements to improve product offerings
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white">4. Data Retention</h2>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <p className="text-gray-300">
                  We retain your data for as long as necessary to fulfill the purposes outlined in this policy 
                  unless a longer retention period is required or permitted by law.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white">5. Your Rights and Choices</h2>
              <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6">
                <p className="text-gray-300 mb-4">Depending on your location, you may have rights to:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-2">✓</span>
                      Access or correct your personal data
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-2">✓</span>
                      Request deletion of your account
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-2">✓</span>
                      Opt out of marketing communications
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-2">✓</span>
                      Request a copy of the data we hold about you
                    </li>
                  </ul>
                </div>
                <p className="text-gray-300 mt-4">
                  To exercise your rights, contact us at: <strong className="text-blue-400">privacy@iter8labs.world</strong>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white">6. Cookies and Tracking Technologies</h2>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <p className="text-gray-300">
                  We use cookies to improve your browsing experience and understand user behavior. You can control 
                  cookie preferences through your browser settings.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white">7. Security</h2>
              <div className="bg-green-900/20 border border-green-800 rounded-lg p-6">
                <p className="text-gray-300">
                  We implement robust security measures, including encryption, access controls, and secure servers 
                  to protect your information from unauthorized access, disclosure, or alteration.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white">8. International Data Transfers</h2>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <p className="text-gray-300">
                  Your data may be transferred to and stored on servers located outside your country. By using our 
                  platform, you consent to such transfers subject to appropriate safeguards.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white">9. Children's Privacy</h2>
              <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-6">
                <p className="text-gray-300">
                  Our services are not intended for children under 13. We do not knowingly collect personal 
                  information from children without parental consent.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white">10. Changes to This Policy</h2>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <p className="text-gray-300">
                  We may update this Privacy Policy from time to time. We will notify you of any significant 
                  changes via email or platform notifications.
                </p>
              </div>
            </section>

            <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold mb-3 text-blue-400">11. Contact Us</h3>
              <p className="text-gray-300">
                If you have any questions or concerns about this Privacy Policy, contact us at:
                <br />
                <strong className="text-blue-400">Email:</strong> privacy@iter8labs.world
                <br />
                <strong className="text-blue-400">Company:</strong> iter8labs Inc.
                <br />
                <strong className="text-blue-400">Address:</strong> #204 Brandon In Murphy, TX 75094, USA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;