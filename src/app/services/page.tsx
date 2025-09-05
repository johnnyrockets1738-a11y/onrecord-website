import { ServiceCard } from '@/components/ServiceCard';
import { businessConfig } from '@/config/business';

export const metadata = {
  title: `Services - ${businessConfig.name}`,
  description: 'Professional court reporting, legal interpreting, and translation services for California law firms.',
};

export default function Services() {
  const services = [
    {
      title: 'Court Reporting',
      description: 'Certified court reporters for depositions, hearings, and arbitrations, in person or remote.',
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      features: [
        'Licensed California CSRs',
        'In-person and remote depositions',
        'Real-time transcription',
        'Expedited delivery options',
        'Same-day rush services',
        'Video conferencing support'
      ],
      ctaText: 'Schedule Deposition',
      ctaHref: '/contact'
    },
    {
      title: 'Legal Interpreting',
      description: 'Qualified legal interpreters in 100+ languages for depositions and proceedings.',
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      features: [
        '100+ languages available',
        'Certified legal interpreters',
        'Simultaneous and consecutive',
        'Video remote interpreting',
        'On-site and remote options',
        'Specialized legal terminology'
      ],
      ctaText: 'Request Interpreter',
      ctaHref: '/contact'
    },
    {
      title: 'Translation Services',
      description: 'Certified translations of exhibits, contracts, and transcripts.',
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      features: [
        'Certified translations',
        'Legal document expertise',
        'Notarized when required',
        'Rush delivery available',
        'Multiple language pairs',
        'Quality assurance process'
      ],
      ctaText: 'Get Quote',
      ctaHref: '/contact'
    }
  ];

  const additionalServices = [
    {
      title: 'Remote Depositions',
      description: 'Secure, high-quality remote deposition services with professional court reporters and interpreters.',
      features: [
        'Secure video conferencing',
        'Real-time transcription',
        'Document sharing capabilities',
        'Technical support included'
      ]
    },
    {
      title: 'Expedited Services',
      description: 'Rush services for urgent legal matters with same-day or next-day availability.',
      features: [
        'Same-day scheduling',
        '24-hour turnaround',
        'Emergency coverage',
        'Priority support'
      ]
    },
    {
      title: 'Document Management',
      description: 'Secure handling and management of legal documents and transcripts.',
      features: [
        'Secure document storage',
        'Digital delivery options',
        'Confidentiality protocols',
        'Long-term archiving'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Legal Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive court reporting, interpreting, and translation services for California law firms. 
              All services provided through licensed professionals and qualified specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional legal support services to meet all your court reporting and language needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized services to support your legal practice
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Area
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide services throughout California with both in-person and remote options
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Coverage Areas</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Major Cities</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>Los Angeles</li>
                    <li>San Francisco</li>
                    <li>San Diego</li>
                    <li>Sacramento</li>
                    <li>San Jose</li>
                    <li>Oakland</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Services</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>In-person depositions</li>
                    <li>Remote depositions</li>
                    <li>Court appearances</li>
                    <li>Arbitrations</li>
                    <li>Mediations</li>
                    <li>Hearings</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Remote Services Available</h3>
              <p className="text-gray-600 mb-4">
                We offer comprehensive remote services for clients throughout California and beyond, 
                ensuring you can access professional court reporting and interpreting services regardless of location.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">Secure video conferencing</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">Real-time transcription</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">Document sharing</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">Technical support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Schedule Your Service?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your specific needs and get a quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Request a Quote
            </a>
            <a
              href={`tel:${businessConfig.phone}`}
              className="bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-800 transition-colors"
            >
              Call {businessConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
