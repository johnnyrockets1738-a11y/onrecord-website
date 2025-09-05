import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { businessConfig } from "@/config/business";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `${businessConfig.name} - Professional Court Reporting & Interpreting Services`,
  description: businessConfig.description,
  keywords: "court reporting, legal interpreting, translation services, California, depositions, hearings, arbitrations",
  authors: [{ name: businessConfig.name }],
  openGraph: {
    title: `${businessConfig.name} - Professional Court Reporting & Interpreting Services`,
    description: businessConfig.description,
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": businessConfig.name,
              "description": businessConfig.description,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "528 Palisades Dr #880",
                "addressLocality": "Pacific Palisades",
                "addressRegion": "CA",
                "postalCode": "90272",
                "addressCountry": "US"
              },
              "telephone": businessConfig.phone,
              "email": businessConfig.email,
              "url": "https://onrecordreporting.com",
              "serviceArea": {
                "@type": "State",
                "name": "California"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Legal Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Court Reporting",
                      "description": "Certified court reporters for depositions, hearings, and arbitrations"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Legal Interpreting",
                      "description": "Qualified legal interpreters in 100+ languages"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Translation Services",
                      "description": "Certified translations of legal documents"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
