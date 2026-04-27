// app/api/send-email/route.ts

import { Resend } from "resend";

const resend = new Resend("re_87x2NZrA_GZy3vv1JKHgPW1MS5k2qMuTx");

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

    // Send email to user
    const userEmailData = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Your AtiSunya Brochure - Thank You for Your Interest!",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #fbc02d;">Hello ${name},</h2>
          <p>Thank you for your interest in AtiSunya Infotech!</p>
          <p>We've received your brochure request with the following details:</p>
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

    // Send notification email to your business email
    const businessEmailData = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "kalpana@atisunyainfotech.com",
      subject: `New Brochure Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #fbc02d;">New Brochure Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Contact:</strong> ${contact}</p>
          <p><strong>Requirements:</strong> ${requirements}</p>
        </div>
      `,
    });

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