import { businessConfig } from '@/config/business';

export const metadata = {
  title: `Terms of Use - ${businessConfig.name}`,
  description: 'Terms of Use for California Reporting & Interpreting Services.',
};

export default function Terms() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Use
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Please read these terms carefully before using our services
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using the services of {businessConfig.name} (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), 
              you accept and agree to be bound by the terms and provision of this agreement. If you do not 
              agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
            <p className="text-gray-600 mb-6">
              {businessConfig.name} provides court reporting, legal interpreting, and translation services 
              for legal professionals. All court reporting services are provided through licensed California 
              Certified Shorthand Reporters (CSRs). All interpreting services are provided through qualified 
              legal interpreters. All translation services are provided through certified translators.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Service Arrangements</h2>
            <p className="text-gray-600 mb-6">
              The Company acts as an agency that arranges services through licensed professionals. We do not 
              directly employ court reporters, interpreters, or translators, but rather coordinate with 
              qualified professionals to provide the requested services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Client Responsibilities</h2>
            <p className="text-gray-600 mb-4">Clients are responsible for:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Providing accurate and complete information about their service needs</li>
              <li>Ensuring proper notice for scheduling services</li>
              <li>Payment of services according to agreed terms</li>
              <li>Compliance with all applicable laws and regulations</li>
              <li>Maintaining confidentiality of sensitive information</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Scheduling and Cancellation</h2>
            <p className="text-gray-600 mb-6">
              Services should be scheduled with reasonable advance notice. Cancellations must be made at least 
              24 hours in advance to avoid cancellation fees. Emergency cancellations may be subject to 
              additional charges to compensate for the professional&apos;s time and preparation.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Payment Terms</h2>
            <p className="text-gray-600 mb-6">
              Payment terms will be specified in individual service agreements. Generally, payment is due 
              within 30 days of service completion. Late payments may be subject to additional fees. 
              Rush services may require advance payment or additional fees.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Confidentiality</h2>
            <p className="text-gray-600 mb-6">
              We understand the sensitive nature of legal proceedings and maintain strict confidentiality 
              protocols. All professionals working through our agency are bound by confidentiality agreements 
              and professional ethics standards. However, clients remain responsible for ensuring their own 
              compliance with attorney-client privilege and other confidentiality requirements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              The Company&apos;s liability is limited to the fees paid for the specific service in question. 
              We are not liable for indirect, incidental, or consequential damages. While we strive to 
              provide accurate and reliable services, clients are responsible for reviewing and verifying 
              all work products.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Professional Standards</h2>
            <p className="text-gray-600 mb-6">
              All services are provided in accordance with applicable professional standards and regulations. 
              Court reporters are licensed by the California Court Reporters Board. Interpreters meet 
              qualification standards for legal interpreting. Translators are certified for legal document 
              translation.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Dispute Resolution</h2>
            <p className="text-gray-600 mb-6">
              Any disputes arising from these terms or our services will be resolved through binding 
              arbitration in Los Angeles County, California, in accordance with the rules of the American 
              Arbitration Association.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Modifications</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify these terms at any time. Changes will be effective immediately 
              upon posting on our website. Continued use of our services after changes constitutes acceptance 
              of the modified terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
            <p className="text-gray-600 mb-6">
              For questions about these terms, please contact us at:
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
