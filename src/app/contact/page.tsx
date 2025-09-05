import { ContactForm } from '@/components/ContactForm';
import { businessConfig } from '@/config/business';

export const metadata = {
  title: `Contact Us - ${businessConfig.name}`,
  description: 'Contact us for court reporting, legal interpreting, and translation services in California.',
};

export default function Contact() {
  const contactInfo = [
    {
      title: 'Phone',
      value: businessConfig.phone,
      href: `tel:${businessConfig.phone}`,
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: 'Email',
      value: businessConfig.email,
      href: `mailto:${businessConfig.email}`,
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Address',
      value: businessConfig.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(businessConfig.address)}`,
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Emergency Only' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ready to schedule a deposition or need interpreting services? Contact us today for a quote 
              or to discuss your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  We&apos;re here to help with all your court reporting and interpreting needs. 
                  Contact us by phone, email, or use the form to get started.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <div className="text-blue-600">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                      <a
                        href={info.href}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                        target={info.title === 'Address' ? '_blank' : undefined}
                        rel={info.title === 'Address' ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-600">{schedule.day}</span>
                      <span className="text-gray-900 font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Emergency services available 24/7 for urgent legal matters.
                </p>
              </div>

              {/* Service Areas */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Areas</h3>
                <p className="text-gray-600 mb-4">
                  We provide services throughout California with both in-person and remote options.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Major Cities</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>Los Angeles</li>
                      <li>San Francisco</li>
                      <li>San Diego</li>
                      <li>Sacramento</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Services</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>In-person depositions</li>
                      <li>Remote depositions</li>
                      <li>Court appearances</li>
                      <li>Arbitrations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions about our court reporting and interpreting services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How far in advance should I schedule?</h3>
              <p className="text-gray-600">
                We recommend scheduling at least 24-48 hours in advance for standard services. 
                For urgent matters, we offer same-day and emergency services.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you provide remote services?</h3>
              <p className="text-gray-600">
                Yes, we offer comprehensive remote deposition services with secure video conferencing, 
                real-time transcription, and document sharing capabilities.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What languages do you support?</h3>
              <p className="text-gray-600">
                We provide interpreting services in 100+ languages with certified legal interpreters 
                who specialize in courtroom procedures and legal terminology.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Are your court reporters licensed?</h3>
              <p className="text-gray-600">
                Yes, all court reporting services are provided through licensed California Certified 
                Shorthand Reporters (CSRs) who meet all state requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a quote or to schedule your next deposition
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${businessConfig.phone}`}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call {businessConfig.phone}
            </a>
            <a
              href={`mailto:${businessConfig.email}`}
              className="bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-800 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
