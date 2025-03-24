// src/pages/privacy-policy.tsx
import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased text-foreground">
      <Navbar />
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-20">
        <div className=" mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-8 text-center text-primary">Privacy Policy</h1>
          <p className="text-gray-600 mb-8 text-center">Last Updated: March 24, 2025</p>

          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">1. Information We Collect</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Aitrix Labs we are committed to protecting your
                  privacy. This Privacy Policy explains how we collect, use, and share
                  your personal information when you use our website (aitrixlabs.com) and
                  our AI-powered educational platform (collectively, the "Services"). This
                  policy is specifically tailored for compliance within the legal
                  framework of Nepal.
                </p>
                <div className="bg-gray-50 p-4 rounded mt-4">
                  <p className="text-gray-700 font-medium">We may collect the following types of information:</p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Personal Information:</strong> Name, email address, contact details, and educational background</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Usage Data:</strong> Information about how you use our Services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Learning Analytics:</strong> Performance metrics, learning patterns, and progress data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Device Information:</strong> IP address, browser type, device type, and operating system</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">2. How We Use Your Information</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  We use your information for the following purposes:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <h3 className="font-medium text-gray-800 mb-2">Providing the Services</h3>
                    <p className="text-sm text-gray-700">To deliver personalized learning experiences, adapt our AI systems to your needs, and maintain your account</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h3 className="font-medium text-gray-800 mb-2">Improving the Services</h3>
                    <p className="text-sm text-gray-700">To enhance our platform, fix issues, and develop new features based on user behavior and feedback</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h3 className="font-medium text-gray-800 mb-2">Communication</h3>
                    <p className="text-sm text-gray-700">To send you important updates, notifications, and information about our Services</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h3 className="font-medium text-gray-800 mb-2">Research and Development</h3>
                    <p className="text-sm text-gray-700">To advance our AI technology and educational methodologies</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h3 className="font-medium text-gray-800 mb-2">Legal Compliance</h3>
                    <p className="text-sm text-gray-700">To comply with applicable laws, regulations, and legal processes</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">3. How We Share Your Information</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  We may share your information with the following parties:
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Educational Institutions:</span>
                      <span className="ml-1">When you're affiliated with an institution that uses our platform</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Service Providers:</span>
                      <span className="ml-1">Third parties that help us deliver our Services (e.g., cloud storage, analytics)</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Legal Authorities:</span>
                      <span className="ml-1">When required by law, court order, or government regulation</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Business Transfers:</span>
                      <span className="ml-1">In connection with a merger, acquisition, or sale of assets</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Affiliates:</span>
                      <span className="ml-1">With our related companies for purposes consistent with this Privacy Policy</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">With Your Consent:</span>
                      <span className="ml-1">When you have explicitly agreed to the sharing of your information</span>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">4. Data Security</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect
                  your personal information from unauthorized access, use, or disclosure.
                  These measures include:
                </p>
                <div className="grid grid-cols-2 gap-3 mt-4 mb-4">
                  <div className="flex items-center p-3 bg-gray-50 rounded">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Data encryption</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Firewalls</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Access controls</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Security audits</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We comply with industry best practices for data security. While we strive to protect your information, no method of transmission over the Internet or method of electronic storage is 100% secure.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">5. Cookies and Similar Technologies</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  We use cookies and similar technologies to collect information about your
                  use of the Services. You can control cookies through your browser
                  settings.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                  <p className="text-sm text-blue-700">
                    <strong>Cookie Notice:</strong> Our website uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. By continuing to use our site, you consent to our use of cookies in accordance with this Privacy Policy.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">6. Your Rights</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  You have the following rights regarding your personal information,
                  subject to applicable Nepalese laws:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-50 p-3 rounded">
                    <h3 className="text-sm font-medium text-gray-800">Right to Access</h3>
                    <p className="text-xs text-gray-600 mt-1">Request access to your personal data</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <h3 className="text-sm font-medium text-gray-800">Right to Rectification</h3>
                    <p className="text-xs text-gray-600 mt-1">Request correction of inaccurate data</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <h3 className="text-sm font-medium text-gray-800">Right to Erasure</h3>
                    <p className="text-xs text-gray-600 mt-1">Request deletion of your data (right to be forgotten)</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <h3 className="text-sm font-medium text-gray-800">Right to Restriction</h3>
                    <p className="text-xs text-gray-600 mt-1">Request limitation of processing your data</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <h3 className="text-sm font-medium text-gray-800">Right to Data Portability</h3>
                    <p className="text-xs text-gray-600 mt-1">Request transfer of your data</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <h3 className="text-sm font-medium text-gray-800">Right to Object</h3>
                    <p className="text-xs text-gray-600 mt-1">Object to processing of your data</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <h3 className="text-sm font-medium text-gray-800">Right to Withdraw Consent</h3>
                    <p className="text-xs text-gray-600 mt-1">Withdraw previously given consent</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <h3 className="text-sm font-medium text-gray-800">Right to Complain</h3>
                    <p className="text-xs text-gray-600 mt-1">Lodge a complaint with a supervisory authority</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">
                  To exercise these rights, please contact us at <a href="mailto:aitrixlabs@gmail.com" className="text-primary hover:underline">aitrixlabs@gmail.com</a>.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">7. Data Retention</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  We will retain your personal information for as long as necessary to
                  provide the Services, comply with our legal obligations, resolve
                  disputes, and enforce our agreements.
                </p>
                <div className="bg-gray-50 p-4 rounded mt-4">
                  <h3 className="text-sm font-medium text-gray-800 mb-2">Retention Periods:</h3>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Account information:</strong> As long as your account is active, plus a reasonable period thereafter</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Learning data:</strong> Up to 3 years after your last interaction with our Services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Usage data:</strong> Up to 2 years for analytical purposes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">8. Children's Privacy</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Our Services are not directed to children under the age of 13 (or other
                  age specified by Nepalese law regarding consent). We do not knowingly collect personal information from children under this age. If we become aware that we have collected personal information from a child under the applicable age without parental consent, we will take steps to delete that information.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">9. Cross-Border Data Transfers</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Your personal information may be transferred to and processed in
                  countries other than Nepal. We will take appropriate safeguards to
                  ensure that your personal information is protected in accordance with
                  this Privacy Policy and applicable data protection laws.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                  <p className="text-sm text-blue-700">
                    <strong>Data Transfer Notice:</strong> When we transfer your data internationally, we implement appropriate safeguards such as standard contractual clauses and ensure the receiving countries provide adequate levels of data protection.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">10. Changes to this Privacy Policy</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you
                  of any material changes by posting a notice on our website or by sending
                  you an email. Your continued use of our Services after such notice constitutes your acceptance of the revised Privacy Policy.
                </p>
              </div>
            </section>

          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;