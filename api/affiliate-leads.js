const nodemailer = require('nodemailer');

module.exports = async function (req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  try {
    const { name, email, phone, about, company } = req.body || {};

    // Simple validation
    if (!name || !about) {
      return res
        .status(400)
        .json({ ok: false, error: 'Name and message are required' });
    }

    // Honeypot (bots will fill this)
    if (company) return res.status(200).json({ ok: true });

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_APP_PASS,
      },
    });

    // Send email
    const info = await transporter.sendMail({
      from: process.env.ZOHO_USER,
      to: process.env.TO_EMAIL || 'aminulislamsagor@shafacode.com',
      subject: `New Affiliate Lead from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; background:#f6f9fc; padding:20px;">
          <table style="max-width:600px; margin:auto; background:#fff; border-radius:10px; padding:30px; border:1px solid #eaeaea;">
            <tr>
              <td>
                <h2 style="color:#333; font-size:22px;">📩 New Inquiry Received</h2>
                <p style="color:#555; font-size:15px;">You have a new message.</p>
                <table style="width:100%;">
                  <tr><td style="font-weight:bold; width:120px;">Name:</td><td>${name}</td></tr>
                  <tr><td style="font-weight:bold;">Email:</td><td>${
                    email || 'N/A'
                  }</td></tr>
                  <tr><td style="font-weight:bold;">Phone:</td><td>${
                    phone || 'N/A'
                  }</td></tr>
                  <tr>
                    <td style="font-weight:bold; vertical-align:top;">Message:</td>
                    <td>${String(about).replace(/\n/g, '<br/>')}</td>
                  </tr>
                </table>
                <hr style="margin:25px 0; border-top:1px solid #eee;" />
                <p style="color:#777; font-size:13px; text-align:center;">This email was sent from your website affliliate leads</p>
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    return res.status(200).json({ ok: true, id: info.messageId });
  } catch (err) {
    console.error('Email error:', err);
    return res.status(500).json({ ok: false, error: 'Failed to send email' });
  }
};
