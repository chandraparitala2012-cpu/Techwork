import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false, // STARTTLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    ciphers: "SSLv3",
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"DataTechZ Website" <${process.env.SMTP_USER}>`,
      to: "info@datatechz.com",
      replyTo: email,
      subject: `New Enquiry from ${name}${company ? ` — ${company}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00C2D4; border-bottom: 2px solid #00C2D4; padding-bottom: 8px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 140px;"><strong>Name</strong></td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Email</strong></td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Company</strong></td>
              <td style="padding: 8px 0;">${company}</td>
            </tr>` : ""}
            ${service ? `
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Service</strong></td>
              <td style="padding: 8px 0;">${service}</td>
            </tr>` : ""}
          </table>
          <div style="margin-top: 24px;">
            <strong style="color: #666;">Message</strong>
            <p style="margin-top: 8px; padding: 16px; background: #f5f5f5; border-radius: 8px; line-height: 1.6;">
              ${message.replace(/\n/g, "<br/>")}
            </p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #999;">
            Sent from the DataTechZ website contact form. Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
