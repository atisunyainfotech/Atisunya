// app/api/send-email/route.ts

import { Resend } from 'resend';

export const runtime = 'nodejs';

const RESEND_API_KEY = process.env.RESEND_API_KEY || 're_87x2NZrA_GZy3vv1JKHgPW1MS5k2qMuTx';
const resend = new Resend(RESEND_API_KEY);

const VERIFIED_FROM = 'onboarding@resend.dev';
const DEFAULT_FROM = 'onboarding@resend.dev';

export async function POST(req: Request) {
  try {
    const { name, email, contact, requirements } = await req.json();

    // Validate required fields
    if (!name || !email || !contact || !requirements) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Trim and validate email
    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return Response.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Send email to user
    let userEmailData;
    let userEmailError: any = null;
    try {
      userEmailData = await resend.emails.send({
        from: VERIFIED_FROM,
        to: trimmedEmail,
        subject: "Thank You for Downloading the AtiSunya Infotech Brochure!",
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #fbc02d;">Hello ${name},</h2>
            <p>Thank you for downloading the AtiSunya Infotech brochure!</p>
            <p>Here are the details you provided:</p>
            <ul>
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Contact:</strong> ${contact}</li>
              <li><strong>Requirements:</strong> ${requirements}</li>
            </ul>
            <p>Our team will review your information and get back to you shortly.</p>
            <p>Best regards,<br><strong>AtiSunya Infotech Team</strong></p>
          </div>
        `,
      });
      console.log("User email sent successfully");
    } catch (error) {
      userEmailError = error;
      console.error("Failed to send user email with VERIFIED_FROM:", error);
      try {
        userEmailData = await resend.emails.send({
          from: DEFAULT_FROM,
          to: trimmedEmail,
          subject: "Thank You for Downloading the AtiSunya Infotech Brochure!",
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
              <h2 style="color: #fbc02d;">Hello ${name},</h2>
              <p>Thank you for downloading the AtiSunya Infotech brochure!</p>
              <p>Here are the details you provided:</p>
              <ul>
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Contact:</strong> ${contact}</li>
                <li><strong>Requirements:</strong> ${requirements}</li>
              </ul>
              <p>Our team will review your information and get back to you shortly.</p>
              <p>Best regards,<br><strong>AtiSunya Infotech Team</strong></p>
            </div>
          `,
        });
        console.log("User email sent successfully with DEFAULT_FROM");
      } catch (fallbackError) {
        userEmailError = fallbackError;
        console.error("Failed to send user email with DEFAULT_FROM:", fallbackError);
      }
    }
    // Send notification email to your business email
    let businessEmailData;
    let businessEmailError: any = null;
    try {
      businessEmailData = await resend.emails.send({
        from: VERIFIED_FROM,
        to: "kalpana@atisunyainfotech.com", // Replace with your business email
        subject: `New Brochure Download from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #fbc02d;">New Brochure Download</h2>
            <p>A user has downloaded the brochure with the following details:</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Contact:</strong> ${contact}</p>
            <p><strong>Requirements:</strong> ${requirements}</p>
          </div>
        `,
      });
      console.log("Business email sent successfully");
    } catch (error) {
      businessEmailError = error;
      console.error("Failed to send business email with VERIFIED_FROM:", error);
      try {
        businessEmailData = await resend.emails.send({
          from: DEFAULT_FROM,
          to: "kalpana@atisunyainfotech.com",
          subject: `New Brochure Download from ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
              <h2 style="color: #fbc02d;">New Brochure Download</h2>
              <p>A user has downloaded the brochure with the following details:</p>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Contact:</strong> ${contact}</p>
              <p><strong>Requirements:</strong> ${requirements}</p>
            </div>
          `,
        });
        console.log("Business email sent successfully with DEFAULT_FROM");
      } catch (fallbackError) {
        businessEmailError = fallbackError;
        console.error("Failed to send business email with DEFAULT_FROM:", fallbackError);
      }
    }
    const errors = [];
    if (userEmailError) {
      errors.push({ userEmailError: userEmailError.message || String(userEmailError) });
    }
    if (businessEmailError) {
      errors.push({ businessEmailError: businessEmailError.message || String(businessEmailError) });
    }

    if (errors.length > 0) {
      console.error("Email send failures:", errors);
      return Response.json(
        {
          success: false,
          errors,
          userEmail: userEmailData,
          businessEmail: businessEmailData,
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      userEmail: userEmailData,
      businessEmail: businessEmailData,
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}