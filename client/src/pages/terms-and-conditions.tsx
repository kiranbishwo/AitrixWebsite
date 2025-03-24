// src/pages/terms-and-conditions.tsx
import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const TermsAndConditionsPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased text-foreground">
      <Navbar />
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-20">
        <div className=" mx-auto bg-white rounded-lg shadow-sm p-8 ">
          <h1 className="text-3xl font-bold mb-8 text-center text-primary">Terms and Conditions of Use</h1>
          <p className="text-gray-600 mb-8 text-center">Last Updated: March 24, 2025</p>

          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">1. Acceptance of Terms</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  By accessing or using the Aitrix Labs website (aitrixlabs.com) and any
                  related services, including our AI-powered educational platform
                  (collectively, the "Services"), you agree to be bound by these Terms
                  and Conditions ("Terms"). If you do not agree to these Terms, you may
                  not access or use the Services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">2. Description of Services</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Aitrix Labs provides an AI-driven educational platform that utilizes
                  neural networks and machine learning to create personalized learning
                  experiences. The Services include, but are not limited to:
                </p>
                <ul className="mt-2 mb-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>AI Learning Paths</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Neural Knowledge Mapping</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Adaptive Content Engine</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Predictive Analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>AI Tutoring Companion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Learning Analytics Dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Automated Assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Skill-Gap Predictor</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">3. User Accounts</h2>
              <div className="prose prose-gray max-w-none">
                <ul className="space-y-2 text-gray-700 leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Some features of the Services may require you to create an account.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>You are responsible for maintaining the confidentiality of your
                      account credentials and for all activities that occur under your
                      account.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>You agree to provide accurate and complete information when creating
                      your account and to update your information as necessary.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Aitrix Labs reserves the right to suspend or terminate your account if
                      you violate these Terms.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">4. Use of the Services</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  You agree to use the Services only for lawful purposes and in
                  accordance with these Terms. You agree not to:
                </p>
                <ul className="mt-2 mb-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Use the Services in any way that could damage, disable, overburden, or impair our servers or networks.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Attempt to gain unauthorized access to any portion of the Services.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Interfere with or disrupt the Services or any other user's use of the Services.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Engage in any activity that could violate the privacy or security of other users.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Reproduce, duplicate, copy, sell, resell, or exploit any portion of the Services without our express written permission.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Use data mining, robots, or similar data gathering or extraction tools.</span>
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  You are responsible for ensuring that your use of the Services complies with all applicable laws and regulations, including
                  those related to education, data privacy, and intellectual property.
                </p>
              </div>
            </section>

            {/* Continue with sections 5-15 using the same improved format */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">5. Intellectual Property</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  The Services and all content included on the Aitrix Labs website,
                  including text, graphics, logos, images, software, and other materials
                  (collectively, the "Content"), are owned by or licensed to Aitrix Labs
                  and are protected by copyright, trademark, and other intellectual
                  property laws. You may not use the Content for any commercial purpose
                  without our express written permission. You may use the Content for
                  personal, non-commercial educational purposes only.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">6. User Content</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  You may be able to submit content to the Services, such as essays,
                  assignments, or feedback ("User Content"). You retain all rights to your
                  User Content. By submitting User Content, you grant Aitrix Labs a
                  non-exclusive, worldwide, royalty-free license to use, reproduce,
                  modify, adapt, publish, translate, distribute, and display your User
                  Content in connection with the Services. You are responsible for ensuring
                  that your User Content does not infringe the rights of any third party.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">7. Data Protection and Privacy</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Aitrix Labs is committed to protecting the privacy of your data. Our
                  Privacy Policy, which is incorporated into these Terms, explains how we
                  collect, use, and share your personal information. We implement advanced
                  security protocols to ensure student data privacy. We comply with
                  applicable data protection laws in Nepal.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                  <p className="text-sm text-blue-700">
                    <strong>Important:</strong> We adhere to all relevant Nepalese data protection laws to ensure the privacy and security of your information.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">8. Disclaimer of Warranties</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed uppercase text-sm">
                  THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY
                  OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
                  THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE, AND NON-INFRINGEMENT. AITRIX LABS DOES NOT WARRANT THAT THE
                  SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE
                  CORRECTED, OR THAT THE SERVICES ARE FREE OF VIRUSES OR OTHER HARMFUL
                  COMPONENTS. AITRIX LABS DOES NOT WARRANT THE ACCURACY, COMPLETENESS,
                  OR RELIABILITY OF THE CONTENT OR ANY INFORMATION OBTAINED THROUGH THE
                  SERVICES. THE LEARNING OUTCOMES AND RESULTS ACHIEVED THROUGH THE USE
                  OF THE SERVICES MAY VARY DEPENDING ON INDIVIDUAL CIRCUMSTANCES.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">9. Limitation of Liability</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed uppercase text-sm">
                  TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, AITRIX LABS SHALL
                  NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                  PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER
                  INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL,
                  OR OTHER INTANGIBLE LOSSES, RESULTING FROM (A) YOUR ACCESS TO OR USE
                  OF OR INABILITY TO ACCESS OR USE THE SERVICES; (B) ANY CONDUCT OR
                  CONTENT OF ANY THIRD PARTY ON THE SERVICES, INCLUDING WITHOUT
                  LIMITATION, ANY DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT OF OTHER
                  USERS OR THIRD PARTIES; OR (C) UNAUTHORIZED ACCESS, USE, OR
                  ALTERATION OF YOUR TRANSMISSIONS OR CONTENT. IN NO EVENT SHALL AITRIX
                  LABS' AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICES
                  EXCEED THE AMOUNT YOU PAID TO AITRIX LABS, IF ANY, DURING THE SIX (6)
                  MONTHS PRIOR TO THE EVENT GIVING RISE TO THE LIABILITY.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">10. Governing Law and Dispute Resolution</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the
                  laws of Nepal. Any dispute arising out of or relating to these Terms
                  shall be resolved through good faith negotiation. If negotiation fails,
                  the parties agree to submit to binding arbitration in accordance with
                  the rules of the Nepal Council of Arbitration (or a similar body
                  recognized in Nepal). The place of arbitration shall be Kathmandu,
                  Nepal. The language of the arbitration shall be English or Nepali.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">11. Changes to the Terms</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Aitrix Labs reserves the right to modify these Terms at any time. We
                  will notify you of any material changes to the Terms by posting a notice
                  on the Aitrix Labs website or by sending you an email. Your continued
                  use of the Services after any such changes constitutes your acceptance
                  of the revised Terms.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">12. Termination</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Aitrix Labs may terminate your access to the Services at any time, with
                  or without cause. You may terminate your account at any time by
                  contacting us. Upon termination, all rights and licenses granted to you
                  under these Terms will immediately terminate.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">13. Severability</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  If any provision of these Terms is held to be invalid or unenforceable,
                  such provision shall be struck and the remaining provisions shall
                  remain in full force and effect.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">14. Waiver</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  No waiver of any provision of these Terms shall be effective unless in
                  writing and signed by Aitrix Labs.
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

export default TermsAndConditionsPage;