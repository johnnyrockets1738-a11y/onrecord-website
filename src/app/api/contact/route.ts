import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key-for-build');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, firm, email, phone, caseInfo, date, service, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using Resend
    await resend.emails.send({
      from: 'noreply@onrecordreporting.com',
      to: process.env.CONTACT_EMAIL || 'intake@onrecordreporting.com',
      subject: `New Service Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">New Service Request</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Firm/Organization:</strong> ${firm || 'Not provided'}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Service Details</h3>
            <p><strong>Service Requested:</strong> ${service}</p>
            <p><strong>Preferred Date:</strong> ${date || 'Not specified'}</p>
            <p><strong>Case Information:</strong> ${caseInfo || 'Not provided'}</p>
          </div>
          
          ${message ? `
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Additional Details</h3>
            <p>${message}</p>
          </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              This request was submitted through the ${process.env.NEXT_PUBLIC_BUSINESS_NAME || 'OnRecord Court Reporting Solutions'} website.
            </p>
          </div>
        </div>
      `,
    });

    // Also send confirmation email to the client
    await resend.emails.send({
      from: 'noreply@onrecordreporting.com',
      to: email,
      subject: 'Thank you for your service request',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">Thank You for Your Request</h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for contacting ${process.env.NEXT_PUBLIC_BUSINESS_NAME || 'OnRecord Court Reporting Solutions'}. We have received your request for ${service} services and will contact you within 24 hours to discuss your needs and provide a quote.</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Request Summary</h3>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Preferred Date:</strong> ${date || 'Not specified'}</p>
            <p><strong>Case Information:</strong> ${caseInfo || 'Not provided'}</p>
          </div>
          
          <p>If you have any urgent questions, please don't hesitate to call us at ${process.env.NEXT_PUBLIC_BUSINESS_PHONE || '(310) 564-6955'}.</p>
          
          <p>Best regards,<br>
          ${process.env.NEXT_PUBLIC_BUSINESS_NAME || 'OnRecord Court Reporting Solutions'}</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              ${process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || '528 Palisades Dr #880, Pacific Palisades, CA 90272'}<br>
              Phone: ${process.env.NEXT_PUBLIC_BUSINESS_PHONE || '(310) 564-6955'}<br>
              Email: ${process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'intake@onrecordreporting.com'}
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
