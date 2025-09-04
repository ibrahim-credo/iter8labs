// app/terms-of-service/page.tsx
import React from 'react';
import Link from 'next/link';
import { FiArrowLeft, FiDownload, FiPrinter } from 'react-icons/fi';

const TermsOfServicePage: React.FC = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">End-User License Agreement (EULA)</h1>
          <p className="text-xl text-gray-400 mb-8">Last updated: June 29, 2025</p>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Agreement Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                This End-User License Agreement ("Agreement") is entered into by and between iter8labs, a Texas corporation 
                with its principal office located at #204 Brandon In Murphy, TX 75094, USA ("Company"), and the 
                entity/individual agreeing to this Agreement ("Customer"). This Agreement governs the use of the 
                Company's Software-as-a-Service product for Digital Certificate Lifecycle Management (the "Software").
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white">1. DEFINITIONS</h2>
              <div className="space-y-4">
                <div className="bg-gray-900/50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">1.1. Account-Related Information</h3>
                  <p className="text-gray-300">
                    Contact information, payment information, and biographical information about Customer's representatives 
                    and contacts used for marketing, opening new user accounts to use the SaaS Services, and to maintain existing accounts.
                  </p>
                </div>

                <div className="bg-gray-900/50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">1.2. Certificates</h3>
                  <p className="text-gray-300">
                    The digital certificates or electronic credentials used to certify the Customer or Customer's network.
                  </p>
                </div>

                <div className="bg-gray-900/50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <h3 className="text-xl font-semibold mb-2 text-green-400">1.3. SaaS Services</h3>
                  <p className="text-gray-300">
                    The provision of the cloud based Software together with the Software Agents and Cloud Connectors 
                    as a platform to the Customer in a hosted, software-as-a-service format, and including all upgrades, 
                    updates and patches to the SaaS Services that iter8labs makes available for general release.
                  </p>
                </div>

                <div className="bg-gray-900/50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <h3 className="text-xl font-semibold mb-2 text-yellow-400">1.4. Customer Content</h3>
                  <p className="text-gray-300">
                    The data provided by the Customer for use in connection with the Services including infrastructure 
                    assets such as Certificates, ADCs, PKIs, and other similar data and materials, plus any other data 
                    Customer submits to iter8labs in connection with the use of the Services.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white">2. iter8labs SERVICES</h2>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  The Customer will purchase and iter8labs will provide the SaaS Services as specified in the applicable Order Form. 
                  The Customer is granted access to and use of the Solution(s) included in the SaaS Services during the 
                  Subscription Term solely for its internal business purposes.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  During the Subscription Term, the Customer is granted a nonexclusive, nontransferable, nonsublicensable, 
                  royalty-free, worldwide license to access and use the SaaS Services solely for internal business operations, 
                  including for production or evaluation testing, subject to the terms of this Agreement.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white">3. RESTRICTIONS</h2>
              <div className="bg-red-900/20 border border-red-800 rounded-lg p-6">
                <p className="text-gray-300 mb-4">The Customer shall not, and shall not permit any third party to:</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Copy or republish the SaaS Services or Software
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Make the SaaS Services available to anyone other than authorized Users
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Use or access the SaaS Services to provide service bureau, timesharing, or any other computer hosting services to third parties
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code of the Software
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Use the SaaS Services in violation of any applicable laws, regulations, or third-party rights
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white">4. FEES & PAYMENT</h2>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 space-y-4">
                <p className="text-gray-300">
                  The Subscription Fee is payable in advance annually unless otherwise specified in the Order Form. 
                  All fees are due within thirty (30) days from the date of invoice.
                </p>
                <p className="text-gray-300">
                  Late payments are subject to interest of one (1%) per month or the highest rate permitted by law, 
                  whichever is lower. The Subscription Fee will be subject to increase by 8% per annum over the previous year's Fee.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white">5. LIMITATION OF LIABILITY</h2>
              <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-6">
                <p className="text-gray-300 leading-relaxed">
                  To the fullest extent permitted by law, neither Party shall be liable to the other for any indirect, 
                  incidental, consequential, special, exemplary, or punitive damages, including but not limited to loss 
                  of use, data, business, revenue, or profits, arising out of or related to this Agreement.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white">6. GOVERNING LAW</h2>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <p className="text-gray-300">
                  This Agreement is governed by Texas law. Disputes are subject to the exclusive jurisdiction of Texas courts.
                </p>
              </div>
            </section>

            <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Contact Information</h3>
              <p className="text-gray-300">
                For questions about this EULA, please contact us at:
                <br />
                <strong>iter8labs</strong>
                <br />
                #204 Brandon In Murphy, TX 75094, USA
                <br />
                Email: legal@iter8labs.world
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;