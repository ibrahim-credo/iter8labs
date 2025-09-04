// app/data-processing-addendum/page.tsx
import React from 'react';
import Link from 'next/link';
import { FiArrowLeft, FiDownload, FiPrinter, FiShield, FiGlobe, FiLock } from 'react-icons/fi';

const DataProcessingAddendumPage: React.FC = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Data Processing Addendum</h1>
          <p className="text-xl text-gray-400 mb-8">Last updated: June 29, 2025</p>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6 text-center">
              <FiShield className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-blue-400 mb-2">GDPR Compliant</h3>
              <p className="text-gray-300 text-sm">Full compliance with European data protection regulations</p>
            </div>
            <div className="bg-green-900/20 border border-green-800 rounded-lg p-6 text-center">
              <FiGlobe className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-green-400 mb-2">UAE & KSA Laws</h3>
              <p className="text-gray-300 text-sm">Compliant with Middle Eastern data protection requirements</p>
            </div>
            <div className="bg-purple-900/20 border border-purple-800 rounded-lg p-6 text-center">
              <FiLock className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-purple-400 mb-2">Secure Processing</h3>
              <p className="text-gray-300 text-sm">Advanced security measures for data protection</p>
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Addendum Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                This Data Processing Addendum forms part of the Master Subscription Agreement governing the provision 
                of the SaaS Services between iter8labs ("Processor") and the Customer ("Controller") to reflect the parties' 
                agreement about the Processing of Customer Personal Data in compliance with applicable data protection laws.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white">1. DEFINITIONS</h2>
              <div className="space-y-4">
                <div className="bg-gray-900/50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">Applicable Law</h3>
                  <p className="text-gray-300">
                    Any data protection and privacy laws and regulations applicable to the Processing of Personal Data, including:
                  </p>
                  <ul className="mt-2 text-gray-300 space-y-1">
                    <li>• UAE Federal Decree-Law No. 45 of 2021 (UAE PDPL)</li>
                    <li>• KSA Personal Data Protection Law (Royal Decree M/19 of 2021)</li>
                    <li>• General Data Protection Regulation (EU) 2016/679 (GDPR)</li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">Controller Personal Data</h3>
                  <p className="text-gray-300">
                    Any Personal Data Processed by Processor on behalf of Controller pursuant to or in connection with the Agreement.
                  </p>
                </div>

                <div className="bg-gray-900/50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <h3 className="text-xl font-semibold mb-2 text-green-400">Standard Contractual Clauses</h3>
                  <p className="text-gray-300">
                    Contractual data transfer mechanisms or data export authorizations issued by relevant data protection authorities 
                    in UAE, KSA, and EU jurisdictions.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white">2. PROCESSING OF PERSONAL DATA</h2>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 space-y-4">
                <p className="text-gray-300">
                  Processor shall Process Controller Personal Data on Controller's behalf and at Controller's instructions 
                  as specified in the Agreement and this DPA, including transfers to third countries or international organizations.
                </p>
                <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Processing Instructions</h4>
                  <p className="text-gray-300">
                    Controller instructs Processor to Process Controller Personal Data for the provision of services 
                    and transfer data to any country or territory as reasonably necessary for service provision.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white">3. SECURITY MEASURES</h2>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <p className="text-gray-300 mb-4">
                  Processor shall implement appropriate technical and organizational measures to ensure an appropriate 
                  level of security of the Controller Personal Data, including:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-900/20 border border-green-800 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-green-400 mb-2">Technical Measures</h4>
                    <ul className="text-gray-300 space-y-1">
                      <li>• Encryption of personal data</li>
                      <li>• Access controls and authentication</li>
                      <li>• Regular security assessments</li>
                    </ul>
                  </div>
                  <div className="bg-purple-900/20 border border-purple-800 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">Organizational Measures</h4>
                    <ul className="text-gray-300 space-y-1">
                      <li>• Staff training and confidentiality</li>
                      <li>• Incident response procedures</li>
                      <li>• Regular compliance audits</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white">4. DATA BREACH NOTIFICATION</h2>
              <div className="bg-red-900/20 border border-red-800 rounded-lg p-6">
                <p className="text-gray-300 mb-4">
                  Processor shall notify Controller without undue delay and, where feasible, not later than within 
                  forty-eight (48) hours upon becoming aware of a Personal Data Breach affecting Controller Personal Data.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-red-400 mb-2">Breach Response Process</h4>
                  <ol className="text-gray-300 space-y-2">
                    <li>1. Immediate notification to Controller</li>
                    <li>2. Provide available information for regulatory reporting</li>
                    <li>3. Assist in investigation and remediation</li>
                    <li>4. Implement additional security measures as needed</li>
                  </ol>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white">5. DATA SUBJECT RIGHTS</h2>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <p className="text-gray-300 mb-4">
                  Controller shall be solely responsible for compliance with statutory obligations concerning Data Subject rights. 
                  Processor will assist Controller in fulfilling these obligations.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="bg-blue-900/20 rounded-lg p-3 mb-2">
                      <span className="text-blue-400 font-semibold">Access</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-900/20 rounded-lg p-3 mb-2">
                      <span className="text-green-400 font-semibold">Rectification</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-900/20 rounded-lg p-3 mb-2">
                      <span className="text-purple-400 font-semibold">Erasure</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-yellow-900/20 rounded-lg p-3 mb-2">
                      <span className="text-yellow-400 font-semibold">Portability</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white">6. AUDIT RIGHTS</h2>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <p className="text-gray-300 mb-4">
                  Processor shall make available to an auditor mandated by Controller such information reasonably 
                  necessary to demonstrate compliance with this DPA and allow for audits.
                </p>
                <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-yellow-400 mb-2">Audit Limitations</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Maximum of one audit per calendar year (except in special circumstances)</li>
                    <li>• Prior written notice required</li>
                    <li>• Conducted during normal business hours</li>
                    <li>• Auditor must be subject to confidentiality obligations</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Contact Information</h3>
              <p className="text-gray-300">
                For questions about data processing or privacy matters, please contact our Data Protection Officer:
                <br />
                <strong>iter8labs Data Protection Team</strong>
                <br />
                #204 Brandon In Murphy, TX 75094, USA
                <br />
                Email: privacy@iter8labs.world
                <br />
                DPO Email: dpo@iter8labs.world
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataProcessingAddendumPage;