import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Load environment variables (Next.js automatically loads `.env.local`)
export async function POST(req: Request) {
    console.log(process.env.PORT)
  const body = await req.json();

  const { firstName, lastName, email, phoneNumber, selectedPackage, message } = body;

  if (!firstName || !lastName || !email || !selectedPackage || !message) {
    return NextResponse.json(
      { error: "All required fields (firstName, lastName, email, selectedPackage, message) must be provided." },
      { status: 400 }
    );
  }

  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // Use STARTTLS
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    //   logger: true, // Enable debug logs
    //   debug: true,
    });

    // Email HTML Template
    const emailTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        /* General styles */
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          color: #333;
        }
        table {
          border-spacing: 0;
          width: 100%;
        }
        td {
          padding: 0;
        }
        img {
          border: 0;
        }
        .email-container {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border: 1px solid #dddddd;
          border-radius: 8px;
          overflow: hidden;
        }
        .email-header {
          background-color: #0C1956;
          color: #ffffff;
          text-align: center;
          padding: 20px;
        }
        .email-header h1 {
          margin: 0;
          font-size: 24px;
        }
        .email-body {
          padding: 20px;
          line-height: 1.6;
        }
        .email-footer {
          background-color: #f8f8f8;
          text-align: center;
          padding: 15px;
          font-size: 12px;
          color: #666666;
        }
        .email-footer a {
          color: #007bff;
          text-decoration: none;
        }
        .button {
          display: inline-block;
          background-color: #007bff;
          color: #ffffff;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 16px;
          margin: 20px 0;
        }
        @media screen and (max-width: 600px) {
          .email-body {
            padding: 15px;
          }
        }
      </style>
    </head>
    <body>
      <table role="presentation" class="email-container">
        <!-- Header -->
        <tr>
          <td class="email-header">
            <h1>
              <div>
                <img src="https://res.cloudinary.com/dyflt39oq/image/upload/v1737483608/Grandfleet/GrandFleet_hya5au.png" width="100px" alt="">
              </div>
              <div>GrandFleet</div>
            </h1>
            <h3>Thank You for Reaching Out</h3>
            <p>We’ve Received Your Submission</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td class="email-body">
            <p>Dear ${firstName} ${lastName},</p>
            <p>
              Thank you for contacting us at <strong>GrandFleet</strong>. We have successfully received your message and our team will get back to you as soon as possible.
            </p>
            <p><strong>Here are the details you submitted:</strong></p>
            <ul>
              <li><strong>Selected Package:</strong> ${selectedPackage}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Phone Number:</strong> ${phoneNumber}</li>
              <li><strong>Message:</strong> ${message}</li>
            </ul>
            <p>
              If you need to update your submission or have additional questions, please feel free to contact us at <a href="mailto:support@grandfleet.au">support@grandfleet.au</a>.
            </p>
            <p>
              We appreciate your interest in our services and look forward to assisting you.
            </p>
            <p>Best regards,<br>The GrandFleet Team</p>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td class="email-footer">
            <p>&copy; 2025 GrandFleet. All rights reserved.</p>
            <p>
              <a href="#">Privacy Policy</a> |
              <a href="#">Unsubscribe</a>
            </p>
          </td>
        </tr>
      </table>
    </body>
    </html>
    `;

    // Define email options
    const mailOptions = {
      from: '"GrandFleet" <support@grandfleet.au>', // Sender address
      to: email, // Recipient
      cc: 'support@grandfleet.com', // CC to support team
      subject: 'We’ve Received Your Submission', // Subject line
      html: emailTemplate, // HTML body
      replyTo: email, // Reply-to address
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Contact form email sent:', info.messageId);

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error: any) {
    console.error('Error sending email:', error.message);
    return NextResponse.json({ error: error.message || 'Unknown error' }, { status: 500 });
  }
}