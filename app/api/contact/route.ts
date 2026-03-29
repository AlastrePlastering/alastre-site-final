import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY || process.env.Alastre_Ai;

    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: "Missing Resend API key." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "N/A");
    const safeMessage = escapeHtml(message);

    const logoUrl = "https://www.alastreplastering.com/logos/alastre-plastering.png";

    // EMAIL INTERNO (PARA TI)
    const internalEmail = await resend.emails.send({
      from: "Alastre Lead Website <info@alastreplastering.com>",
      to: ["info@alastreplastering.com"],
      replyTo: email,
      subject: `New Lead - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111; padding: 20px;">

          <div style="text-align:center; margin-bottom:20px;">
            <img src="${logoUrl}" style="max-width:160px;" />
          </div>

          <h2 style="margin-bottom:16px;">New Website Lead</h2>

          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>

          <p style="margin-top:18px;"><strong>Message:</strong></p>

          <div style="padding: 12px; background: #f4f4f4; border-radius: 8px;">
            ${safeMessage}
          </div>

          <hr style="margin:24px 0;" />

          <p style="font-size:12px; color:#777;">
            Sent from AlastrePlastering.com
          </p>
        </div>
      `,
    });

    if (internalEmail.error) {
      console.error("Resend internal email error:", internalEmail.error);
      return NextResponse.json(
        { success: false, error: "Failed to send email." },
        { status: 500 }
      );
    }

    // AUTO REPLY (CLIENTE)
    const autoReply = await resend.emails.send({
      from: "Alastre Construction <info@alastreplastering.com>",
      to: [email],
      subject: "We received your request - Alastre Construction",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #111; padding: 20px;">

          <!-- LOGO ARRIBA -->
          <div style="text-align:center; margin-bottom:20px;">
            <img src="${logoUrl}" style="max-width:180px;" />
          </div>

          <h2>Thank you for reaching out</h2>

          <p>Hi ${safeName},</p>

          <p>
            We received your message and our team will review it shortly.
          </p>

          <p>
            To help us move faster with your estimate, feel free to reply to this email and attach any project files such as:
          </p>

          <ul>
            <li>Plans or blueprints</li>
            <li>Project photos</li>
            <li>Measurements</li>
            <li>Project address</li>
            <li>Scope details</li>
          </ul>

          <p>
            Sending those files in advance helps us provide a faster and more accurate estimate.
          </p>

          <p>
            We appreciate the opportunity and look forward to working with you.
          </p>

          <!-- FIRMA -->
          <div style="margin-top:30px; text-align:center;">

            <img src="${logoUrl}" style="max-width:140px; margin-bottom:10px;" />

            <p>
              <strong>Alastre Construction</strong><br/>
              Framing • Drywall • Finish • Stucco • Shell Construction
            </p>

            <p>
              www.alastreplastering.com<br/>
              info@alastreplastering.com<br/>
              contact@alastreshell.com<br/>
              PH: 786-724-6573
            </p>
          </div>

        </div>
      `,
    });

    if (autoReply.error) {
      console.error("Resend auto-reply error:", autoReply.error);
    }

    return NextResponse.json({
      success: true,
      data: internalEmail.data,
      autoReplySent: !autoReply.error,
    });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}