# OnRecord Court Reporting Solutions Website

A professional website for a California court reporting and interpreting agency built with Next.js, TypeScript, and Tailwind CSS.

## 🏢 Business Information

**Business Name:** OnRecord Court Reporting Solutions  
**Address:** 528 Palisades Dr #880, Pacific Palisades, CA 90272  
**Phone:** (310) 564-6955  
**Email:** intake@onrecordreporting.com  

### Alternative Business Names
The following alternative names are available in the configuration:
- Pacific Legal Services Group
- Golden State Court Reporting Agency
- California Legal Support Services
- Pacific Coast Reporting & Translation
- California Reporting & Interpreting Services

## 🚀 Features

- **Professional Design:** Clean, modern design optimized for legal industry
- **Responsive Layout:** Mobile-first design that works on all devices
- **SEO Optimized:** Meta tags, JSON-LD schema, sitemap, and robots.txt
- **Contact Form:** Integrated email functionality with Resend
- **Legal Compliance:** Terms of Use and Privacy Policy pages
- **Service Pages:** Detailed information about court reporting, interpreting, and translation services
- **Professional Branding:** Consistent branding throughout the site

## 🛠️ Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Email Service:** Resend
- **Deployment:** Vercel (recommended)

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Resend API key (for email functionality)

## 🚀 Getting Started

### 1. Clone and Install

```bash
cd court-reporting-website
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Email Configuration
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=intake@onrecordreporting.com

# Business Configuration (optional - defaults are in config/business.ts)
NEXT_PUBLIC_BUSINESS_NAME="OnRecord Court Reporting Solutions"
NEXT_PUBLIC_BUSINESS_ADDRESS="528 Palisades Dr #880, Pacific Palisades, CA 90272"
NEXT_PUBLIC_BUSINESS_PHONE="(310) 564-6955"
NEXT_PUBLIC_BUSINESS_EMAIL="intake@onrecordreporting.com"
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📧 Email Configuration

### Resend Setup

1. Sign up for a Resend account at [resend.com](https://resend.com)
2. Create an API key
3. Add the API key to your `.env.local` file
4. Update the `from` email address in `src/app/api/contact/route.ts` to match your verified domain

### Email Templates

The contact form sends two emails:
1. **Service Request Email:** Sent to your business email with client details
2. **Confirmation Email:** Sent to the client confirming their request

## 🎨 Customization

### Business Information

Update business details in `src/config/business.ts`:

```typescript
export const businessConfig = {
  name: "Your Business Name",
  address: "Your Address",
  phone: "Your Phone",
  email: "your-email@domain.com",
  // ... other settings
}
```

### Branding

- **Logo:** Replace the placeholder logo in the Header component
- **Colors:** Update Tailwind color classes throughout the site
- **Fonts:** Modify font imports in `src/app/layout.tsx`

### Content

- **Services:** Update service descriptions in page components
- **Testimonials:** Replace placeholder testimonials with real client feedback
- **About Page:** Customize company information and team details

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📱 Mobile Optimization

The website is fully responsive and optimized for mobile devices:
- Touch-friendly navigation
- Optimized images and loading
- Mobile-first design approach
- Fast loading times

## 🔍 SEO Features

- **Meta Tags:** Optimized for search engines
- **JSON-LD Schema:** LocalBusiness structured data
- **Sitemap:** Automatically generated sitemap.xml
- **Robots.txt:** Search engine crawling instructions
- **Performance:** Optimized for Core Web Vitals

## 📄 Legal Compliance

The website includes:
- **Terms of Use:** Comprehensive terms for service usage
- **Privacy Policy:** GDPR and CCPA compliant privacy policy
- **Professional Disclaimers:** Clear statements about agency services

## 🛡️ Security

- **Environment Variables:** Sensitive data stored securely
- **Input Validation:** Contact form validation and sanitization
- **HTTPS:** Secure connections for all communications
- **Privacy:** No tracking or analytics without consent

## 📞 Support

For technical support or customization requests:
- Email: your-email@domain.com
- Phone: (310) 564-6955

## 📝 License

This project is proprietary software. All rights reserved.

## 🔄 Updates

To update the website:
1. Make changes to the code
2. Test locally with `npm run dev`
3. Push to your repository
4. Deploy automatically (if using Vercel)

### Common Updates

**Business Information:**
- Update `src/config/business.ts`
- Update environment variables
- Update contact information in components

**Content Updates:**
- Services: Edit page components
- Testimonials: Update testimonial arrays
- About: Modify company information

**Styling:**
- Colors: Update Tailwind classes
- Layout: Modify component structure
- Typography: Change font imports and classes

---

**Note:** This website is designed for a court reporting and interpreting agency. All services are provided through licensed professionals and qualified specialists. The agency does not directly employ court reporters but arranges services through certified California CSRs.