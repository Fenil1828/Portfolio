import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Send email to your inbox
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // Resend default sender (upgrade account to use custom domain)
      to: "jasanifenil18@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0; background: #f5f5f5; padding: 15px; border-radius: 8px;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            ${phone ? `<p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>` : ""}
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
            <p style="white-space: pre-wrap; color: #555; line-height: 1.6;">
              ${message}
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #999; font-size: 12px;">
            <p>This is an automated email from your portfolio contact form.</p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Got your message! 🎉",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">Thanks for reaching out, ${name}!</h2>
          
          <p style="color: #555; line-height: 1.6;">
            I've received your message and will get back to you as soon as possible. 
            In the meantime, feel free to check out my <a href="https://your-portfolio.com" style="color: #7c3aed; text-decoration: none;">portfolio</a> 
            and <a href="https://github.com/Fenil1828" style="color: #7c3aed; text-decoration: none;">GitHub</a>.
          </p>
          
          <p style="color: #555; line-height: 1.6;">
            Looking forward to connecting with you!
          </p>
          
          <p style="margin-top: 30px; color: #999; font-size: 12px;">
            Best regards,<br/>
            Fenil
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
