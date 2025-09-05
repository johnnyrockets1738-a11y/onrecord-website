# Deployment Guide

This guide will help you deploy the California Reporting & Interpreting Services website to production.

## 🚀 Quick Deploy to Vercel (Recommended)

### 1. Prepare Your Repository

1. Push your code to GitHub, GitLab, or Bitbucket
2. Make sure all files are committed and pushed

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your repository
4. Configure the project:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)

### 3. Environment Variables

In the Vercel dashboard, add these environment variables:

```env
RESEND_API_KEY=your_actual_resend_api_key
CONTACT_EMAIL=intake@californiareporting.com
NEXT_PUBLIC_BUSINESS_NAME="California Reporting & Interpreting Services"
NEXT_PUBLIC_BUSINESS_ADDRESS="528 Palisades Drive #190, Pacific Palisades, CA 90272"
NEXT_PUBLIC_BUSINESS_PHONE="(310) 564-6955"
NEXT_PUBLIC_BUSINESS_EMAIL="intake@californiareporting.com"
```

### 4. Deploy

Click "Deploy" and wait for the build to complete. Your site will be available at a Vercel URL.

## 📧 Email Setup (Resend)

### 1. Create Resend Account

1. Go to [resend.com](https://resend.com)
2. Sign up for an account
3. Verify your email address

### 2. Get API Key

1. Go to API Keys in your Resend dashboard
2. Create a new API key
3. Copy the key (starts with `re_`)

### 3. Add Domain (Optional)

For production, you should add your own domain:
1. Go to Domains in Resend dashboard
2. Add your domain (e.g., `californiareporting.com`)
3. Follow DNS setup instructions
4. Update the `from` email in `src/app/api/contact/route.ts`

## 🌐 Custom Domain Setup

### 1. Add Domain to Vercel

1. Go to your project in Vercel dashboard
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `californiareporting.com`)
4. Follow the DNS configuration instructions

### 2. Update DNS Records

Add these DNS records to your domain provider:

```
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 3. Update Configuration

Update these files with your domain:
- `public/robots.txt` - Update sitemap URL
- `src/app/sitemap.ts` - Update base URL
- `src/app/layout.tsx` - Update JSON-LD schema URL

## 🔧 Alternative Deployment Options

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Add environment variables in Netlify dashboard

### AWS Amplify

1. Connect your repository to AWS Amplify
2. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
   ```

### Railway

1. Connect your repository to Railway
2. Add environment variables
3. Railway will automatically detect Next.js and deploy

## 📱 Post-Deployment Checklist

- [ ] Test the contact form
- [ ] Verify email delivery
- [ ] Check all pages load correctly
- [ ] Test mobile responsiveness
- [ ] Verify SEO meta tags
- [ ] Check sitemap.xml accessibility
- [ ] Test robots.txt
- [ ] Verify SSL certificate
- [ ] Check page load speeds
- [ ] Test all internal links

## 🔍 SEO Verification

### Google Search Console

1. Add your domain to Google Search Console
2. Verify ownership
3. Submit your sitemap: `https://yourdomain.com/sitemap.xml`

### Google Analytics (Optional)

1. Create a Google Analytics account
2. Add tracking code to `src/app/layout.tsx`
3. Verify tracking is working

## 🛡️ Security Considerations

- [ ] Enable HTTPS (automatic with Vercel/Netlify)
- [ ] Set up proper CORS headers if needed
- [ ] Configure CSP headers
- [ ] Set up rate limiting for contact form
- [ ] Regular security updates

## 📊 Performance Optimization

- [ ] Enable Vercel Analytics (if using Vercel)
- [ ] Optimize images (Next.js does this automatically)
- [ ] Enable compression
- [ ] Set up CDN (automatic with Vercel/Netlify)
- [ ] Monitor Core Web Vitals

## 🔄 Updates and Maintenance

### Regular Updates

1. Keep dependencies updated:
   ```bash
   npm update
   ```

2. Test locally before deploying:
   ```bash
   npm run dev
   npm run build
   ```

3. Deploy updates by pushing to your repository

### Content Updates

- Business information: Update `src/config/business.ts`
- Services: Edit page components
- Testimonials: Update testimonial arrays
- Contact information: Update in multiple locations

## 🆘 Troubleshooting

### Common Issues

**Build Fails:**
- Check for TypeScript errors
- Verify all imports are correct
- Check environment variables

**Contact Form Not Working:**
- Verify Resend API key is correct
- Check email domain is verified
- Test with a simple email first

**SEO Issues:**
- Verify meta tags are correct
- Check sitemap is accessible
- Test with Google's Rich Results Test

### Support

For technical issues:
- Check Next.js documentation
- Review Vercel/Netlify documentation
- Check Resend documentation for email issues

---

**Note:** This deployment guide assumes you're using the recommended tech stack. Adjustments may be needed for different hosting providers or configurations.
