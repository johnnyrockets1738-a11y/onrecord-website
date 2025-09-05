import Link from 'next/link';
import { businessConfig } from '@/config/business';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">CR</span>
              </div>
              <span className="text-xl font-semibold">
                {businessConfig.name}
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Professional court reporting and interpreting services for legal professionals across California. 
              We arrange certified court reporters, qualified interpreters, and certified translations.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>{businessConfig.address}</p>
              <p>Phone: {businessConfig.phone}</p>
              <p>Email: {businessConfig.email}</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/services#court-reporting" className="hover:text-white transition-colors">
                  Court Reporting
                </Link>
              </li>
              <li>
                <Link href="/services#interpreting" className="hover:text-white transition-colors">
                  Legal Interpreting
                </Link>
              </li>
              <li>
                <Link href="/services#translation" className="hover:text-white transition-colors">
                  Translation Services
                </Link>
              </li>
              <li>
                <Link href="/services#remote" className="hover:text-white transition-colors">
                  Remote Depositions
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} {businessConfig.name}. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 mt-2 md:mt-0">
              Licensed to provide court reporting services through certified California CSRs
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
