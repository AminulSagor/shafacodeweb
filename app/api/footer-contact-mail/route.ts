import { db } from '@/db/firebase-admin';
import sendMail from '@/lib/send-mail';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    const contact = await db.collection('contact').add({
      name,
      email,
      message,
    });

    console.log(contact, 'contact');

    const mailHtml = `
  <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
    <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); overflow: hidden;">

      <div style="background-color: #4f46e5; color: #ffffff; padding: 20px; text-align: center;">
        <h2 style="margin: 0; font-size: 24px;">New Contact Inquiry</h2>
      </div>

      <div style="padding: 20px; color: #333333; line-height: 1.6;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      </div>

      <div style="background-color: #f3f4f6; color: #555555; text-align: center; padding: 10px 20px; font-size: 12px;">
        This message was sent from your website contact form.
      </div>
    </div>
  </div>
`;

    await sendMail({
      subject: 'New Contact Mail From ' + name,
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
