// api/contact.js (CommonJS to avoid ESM config hassles)
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  try {
    const { name, message, company } = req.body || {};

    // Simple validation
    if (!name || !message) {
      return res
        .status(400)
        .json({ ok: false, error: 'Name and message are required' });
    }

    // Honeypot (hidden field named "company"); bots will fill it
    if (company) return res.status(200).json({ ok: true });

    // Transport using env vars (set in the next step)
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_APP_PASS,
      },
    });

    //process.env.TO_EMAIL ||

    const info = await transporter.sendMail({
      from: process.env.ZOHO_USER,
      to: 'abdullahsiam004@gmail.com',
      replyTo: req.body.email || process.env.ZOHO_USER, // optional
      subject: `New inquiry from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p><p>${String(message).replace(
        /\n/g,
        '<br/>'
      )}</p>`,
    });

    return res.status(200).json({ ok: true, id: info.messageId });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: 'Failed to send email' });
  }
};
