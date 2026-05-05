const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Transporter configuration for Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change this to your email service provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // If using Gmail, use an App Password, not your real password
  },
});

// Verify the transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.error('Nodemailer configuration error:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

// Endpoint to handle contact form submission
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validate the required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Please fill out all fields.' });
  }

  // Set up the email data
  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`, // Sender address (your authenticated email)
    replyTo: email, // Set the reply-to to the sender's actual email
    to: process.env.RECEIVER_EMAIL, // Your email address where you want to receive messages
    subject: `Portfolio Contact: ${subject}`,
    text: `You have received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; background-color: #ffffff;">
        <div style="background-color: #0f172a; padding: 24px; text-align: center;">
          <h2 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">Portfolio Contact</h2>
          <p style="margin: 8px 0 0; color: #94a3b8; font-size: 14px;">You received a new message</p>
        </div>
        
        <div style="padding: 32px 24px;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; width: 100px; color: #64748b; font-weight: 500;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: 500;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none; font-weight: 600;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: 500;">Subject</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-weight: 600;">${subject}</td>
            </tr>
          </table>
          
          <div>
            <h3 style="margin: 0 0 12px; color: #64748b; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Message</h3>
            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; color: #334155; line-height: 1.6; font-size: 15px;">
              ${message.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
        
        <div style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px; text-align: center;">
          <p style="margin: 0; color: #94a3b8; font-size: 12px;">
            Sent automatically from your Portfolio Website.
          </p>
        </div>
      </div>
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to send message. Please try again later.' });
  }
});

// Start the server (only if not running in Vercel)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
