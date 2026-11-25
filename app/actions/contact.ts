"use server";

import { Resend } from "resend";

export async function submitContactForm(formData: FormData) {
  const field = (name: string) => String(formData.get(name) ?? "").trim();
  const firstName = field("firstName");
  const lastName = field("lastName");
  const email = field("email");
  const message = field("message");
  if (!firstName || !lastName || !email || !message) {
    return {
      success: false,
      message: "Please complete your name, email, and project details.",
    };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  const failure = {
    success: false,
    message:
      "Your enquiry could not be sent. Please try again or email us directly.",
  };
  const apiKey = process.env.RESEND_API_KEY || process.env.resendApiKey;
  if (!apiKey) return failure;
  const resend = new Resend(apiKey);
  const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
  try {
    const delivery = await resend.emails.send({
      from,
      to: ["adambhedj13@gmail.com"],
      replyTo: email,
      subject: `Dynamis project enquiry from ${firstName} ${lastName}`,
      text: [
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Company: ${field("company") || "Unspecified"}`,
        `Service: ${field("service") || "Unspecified"}`,
        `Timeline: ${field("timeline") || "Unspecified"}`,
        "",
        message,
      ].join("\n"),
    });
    if (delivery.error || !delivery.data?.id) return failure;
  } catch {
    return failure;
  }

  // The agency already has the enquiry even if the courtesy receipt fails.
  try {
    await resend.emails.send({
      from,
      to: [email],
      replyTo: "contact@dynamissolution.tn",
      subject: "Your project enquiry is with Dynamis",
      text: `Hi ${firstName},\n\nThanks for telling us about your project. Our team will review your enquiry and get in touch at this address.\n\nDynamis Solution\ncontact@dynamissolution.tn`,
    });
  } catch {
    console.warn("Could not send the project enquiry receipt.");
  }
  return {
    success: true,
    message:
      "Thank you. Your enquiry is with our team. We’ll follow up by email.",
  };
}
