import { businessConfig } from '@/config/business';

export const metadata = {
  title: `Privacy Policy - ${businessConfig.name}`,
  description: 'Privacy Policy for California Reporting & Interpreting Services.',
};

export default function Privacy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              How we collect, use, and protect your personal information
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4">We collect information you provide directly to us, such as:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Contact information (name, email, phone number, address)</li>
              <li>Law firm or organization information</li>
              <li>Service requests and case information</li>
              <li>Payment and billing information</li>
              <li>Communications with us</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Provide court reporting, interpreting, and translation services</li>
              <li>Schedule and coordinate services with licensed professionals</li>
              <li>Process payments and send invoices</li>
              <li>Communicate with you about your service requests</li>
              <li>Improve our services and customer experience</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
            <p className="text-gray-600 mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share 
              your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>With licensed court reporters, interpreters, and translators who will provide services</li>
              <li>With payment processors to process transactions</li>
              <li>When required by law or to protect our rights</li>
              <li>With your explicit consent</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. This includes encryption, 
              secure servers, and restricted access to personal information. However, no method of 
              transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Confidentiality in Legal Services</h2>
            <p className="text-gray-600 mb-6">
              We understand the sensitive nature of legal proceedings and maintain strict confidentiality 
              protocols. All professionals working through our agency are bound by confidentiality 
              agreements and professional ethics standards. We do not disclose case information or 
              client details except as necessary to provide the requested services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking</h2>
            <p className="text-gray-600 mb-6">
              Our website may use cookies and similar tracking technologies to improve your experience. 
              You can control cookie settings through your browser preferences. We do not use cookies 
              to collect personal information without your consent.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
            <p className="text-gray-600 mb-6">
              We retain your personal information only as long as necessary to provide services and 
              comply with legal obligations. Service records and transcripts may be retained longer 
              as required by professional standards and legal requirements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information (subject to legal requirements)</li>
              <li>Opt out of marketing communications</li>
              <li>Request information about how your data is used</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. California Privacy Rights</h2>
            <p className="text-gray-600 mb-6">
              California residents have additional privacy rights under the California Consumer Privacy Act (CCPA). 
              This includes the right to know what personal information is collected, the right to delete 
              personal information, and the right to opt out of the sale of personal information. 
              We do not sell personal information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children&apos;s Privacy</h2>
            <p className="text-gray-600 mb-6">
              Our services are not directed to children under 13 years of age. We do not knowingly 
              collect personal information from children under 13. If we become aware that we have 
              collected such information, we will take steps to delete it.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this privacy policy from time to time. Changes will be posted on this page 
              with an updated revision date. We encourage you to review this policy periodically.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have questions about this privacy policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600">
                <strong>{businessConfig.name}</strong><br />
                {businessConfig.address}<br />
                Phone: {businessConfig.phone}<br />
                Email: {businessConfig.email}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
