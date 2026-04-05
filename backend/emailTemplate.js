/**
 * emailTemplate.js
 * Email notification template for portfolio contact form submissions.
 * Usage: const { buildContactEmail } = require('./emailTemplate');
 */

/**
 * @param {Object} params
 * @param {string} params.firstName
 * @param {string} params.lastName
 * @param {string} params.email
 * @param {string} params.phone
 * @param {string} params.message
 * @returns {{ subject: string, html: string }}
 */
const buildContactEmail = ({ firstName, lastName, email, phone, message }) => {
  const subject = `📬 New message from ${firstName} ${lastName}`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Portfolio Contact</title>
</head>
<body style="margin:0; padding:0; background-color:#f3f4f6; font-family: Arial, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f4f6; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:16px; overflow:hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); max-width:600px; width:100%;">

          <!-- ── Header ─────────────────────────────── -->
          <tr>
            <td style="background: linear-gradient(135deg, #f97316, #f59e0b); padding: 32px 40px; text-align:center;">
              <h1 style="margin:0; color:#ffffff; font-size:24px; font-weight:800; letter-spacing:0.5px;">
                📨 New Portfolio Contact
              </h1>
              <p style="margin:8px 0 0; color:rgba(255,255,255,0.85); font-size:14px;">
                Someone reached out through your portfolio contact form
              </p>
            </td>
          </tr>

          <!-- ── Sender Info ─────────────────────────── -->
          <tr>
            <td style="padding: 32px 40px 0;">
              <h2 style="margin:0 0 16px; font-size:16px; color:#374151; font-weight:700; text-transform:uppercase; letter-spacing:1px;">
                Sender Details
              </h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb; border-radius:10px; overflow:hidden;">

                <!-- Name -->
                <tr style="background:#fafafa;">
                  <td style="padding:14px 20px; width:38%; border-bottom:1px solid #e5e7eb;">
                    <span style="font-size:13px; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:0.5px;">👤 Name</span>
                  </td>
                  <td style="padding:14px 20px; border-bottom:1px solid #e5e7eb;">
                    <span style="font-size:15px; color:#111827; font-weight:600;">${firstName} ${lastName}</span>
                  </td>
                </tr>

                <!-- Email -->
                <tr>
                  <td style="padding:14px 20px; width:38%; border-bottom:1px solid #e5e7eb; background:#fafafa;">
                    <span style="font-size:13px; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:0.5px;">📧 Email</span>
                  </td>
                  <td style="padding:14px 20px; border-bottom:1px solid #e5e7eb;">
                    <a href="mailto:${email}" style="font-size:15px; color:#f97316; text-decoration:none; font-weight:600;">${email}</a>
                  </td>
                </tr>

                <!-- Phone -->
                <tr style="background:#fafafa;">
                  <td style="padding:14px 20px; width:38%;">
                    <span style="font-size:13px; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:0.5px;">📞 Phone</span>
                  </td>
                  <td style="padding:14px 20px;">
                    <span style="font-size:15px; color:#111827;">${phone && phone.trim() !== '' ? phone : '<em style="color:#9ca3af;">Not provided</em>'}</span>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- ── Message ─────────────────────────────── -->
          <tr>
            <td style="padding: 28px 40px 0;">
              <h2 style="margin:0 0 12px; font-size:16px; color:#374151; font-weight:700; text-transform:uppercase; letter-spacing:1px;">
                💬 Message
              </h2>
              <div style="background:#fff7ed; border-left:4px solid #f97316; border-radius:0 10px 10px 0; padding:20px 24px; color:#374151; font-size:15px; line-height:1.75;">
                ${message.replace(/\n/g, '<br/>')}
              </div>
            </td>
          </tr>

          <!-- ── Reply CTA ───────────────────────────── -->
          <tr>
            <td style="padding: 28px 40px 0; text-align:center;">
              <a href="mailto:${email}?subject=Re: Your message to Pratham Bansal"
                style="display:inline-block; background:linear-gradient(135deg, #f97316, #f59e0b); color:#ffffff; text-decoration:none; font-size:15px; font-weight:700; padding:14px 36px; border-radius:50px; letter-spacing:0.3px;">
                ↩ Reply to ${firstName}
              </a>
            </td>
          </tr>

          <!-- ── Timestamp ───────────────────────────── -->
          <tr>
            <td style="padding: 24px 40px 0;">
              <p style="margin:0; font-size:13px; color:#9ca3af; text-align:center;">
                🕐 Received on ${new Date().toLocaleString('en-IN', {
                  timeZone: 'Asia/Kolkata',
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })} IST
              </p>
            </td>
          </tr>

          <!-- ── Footer ─────────────────────────────── -->
          <tr>
            <td style="padding: 28px 40px 32px;">
              <hr style="border:none; border-top:1px solid #e5e7eb; margin-bottom:20px;"/>
              <p style="margin:0; font-size:12px; color:#9ca3af; text-align:center; line-height:1.6;">
                This email was auto-generated by your <strong style="color:#f97316;">Portfolio Contact Form</strong>.<br/>
                Hit <strong>Reply</strong> above to respond directly to ${firstName}.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
  `.trim();

  return { subject, html };
};

module.exports = { buildContactEmail };
