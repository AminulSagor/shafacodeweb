import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, message, fileUrl } = body;

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_HOST,
      port: Number(process.env.ZOHO_PORT),
      secure: false,
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_PASS,
      },
    });
    const mailHtml = `
      <h2>New Affiliate Lead</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br/>')}</p>
      ${
        fileUrl
          ? `<p><strong>Uploaded File:</strong> <a href="${fileUrl}" target="_blank">View File</a></p>`
          : ''
      }
    `;
    // Send email
    await transporter.sendMail({
      from: process.env.ZOHO_USER,
      to: email || process.env.TO_EMAIL, // where you want to receive emails
      subject: `New Affiliate Lead from ${fullName}`,
      html: mailHtml,
    });
    return NextResponse.json({ ok: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { ok: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
