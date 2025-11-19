import nodemailer from 'nodemailer';

interface MailOptions {
  subject: string;
  html: string;
}

const sendMail = async (options: MailOptions) => {
  const transporter = nodemailer.createTransport({
    host: process.env.ZOHO_HOST,
    port: Number(process.env.ZOHO_PORT),
    secure: false,
    auth: {
      user: process.env.ZOHO_USER,
      pass: process.env.ZOHO_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.ZOHO_USER,
    to: process.env.TO_EMAIL || 'aminulislamsagor@shafacode.com',
    subject: options.subject,
    html: options.html,
  });
};

export default sendMail;
