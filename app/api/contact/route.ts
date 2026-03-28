import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAILS = [
  "info@alastreplastering.com",
  "contact@alastreshell.com",
];

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = body?.name || "Not provided";
    const email = body?.email || "Not provided";
    const phone = body?.phone || "Not provided";
    const message = body?.message || "";

    if (!message || message.trim().length < 5) {
      return NextResponse.json(
        { message: "Please provide more details about the project." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { message: "Missing RESEND_API_KEY." },
        { status: 500 }
      );
    }

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New Contact Request – Alastre</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <hr />

        <h3>Project Details</h3>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    await resend.emails.send({
      from:
        process.env.NOTIFICATION_FROM ||
        "Alastre AI <info@alastreplastering.com>",
      to: TO_EMAILS,
      subject: "New Contact Request from Website",
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("CONTACT FORM ERROR:", error);

    return NextResponse.json(
      {
        message:
          error?.message || "Something went wrong sending the request.",
      },
      { status: 500 }
    );
  }
}
