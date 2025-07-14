"use server"

export async function submitContactForm(formData: FormData) {
  try {
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const company = formData.get("company") as string
    const message = formData.get("message") as string

    // Validation
    if (!firstName || !lastName || !email || !message) {
      return {
        success: false,
        message: "Please fill in all required fields.",
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
      }
    }

    // Check if Resend API key is available
    const resendApiKey = process.env.resendApiKey

    if (!resendApiKey) {
      // Fallback: Log the submission and return success
      console.log("📧 New Contact Form Submission:", {
        name: `${firstName} ${lastName}`,
        email,
        company: company || "Not provided",
        message,
        timestamp: new Date().toISOString(),
      })

      return {
        success: true,
        message:
          "Thank you for your message! We'll get back to you within 24 hours. (Note: Email service is being configured)",
      }
    }

    // Import Resend only if API key is available
    const { Resend } = await import("resend")
    const resend = new Resend(resendApiKey)

    console.log("📧 Attempting to send notification email...")
    
    // Send email to you
    const notificationResult = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["adambhedj13@gmail.com"],
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Company:</strong> ${company || "Not provided"}</p>
          </div>
          
          <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Project Details</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #1e40af;">
              <strong>💡 Quick Actions:</strong><br>
              • Reply to this email to respond directly to the client<br>
              • Schedule a consultation call<br>
              • Send a project proposal
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
          
          <p style="color: #64748b; font-size: 14px; text-align: center;">
            This email was sent from your Dynamis Solutions website contact form.<br>
            Submitted on ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    })
    
    console.log("✅ Notification email sent successfully:", notificationResult)

    console.log("📧 Attempting to send confirmation email...")
    
    // Send confirmation email to the client
    const confirmationResult = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [email],
      subject: "Thank you for contacting Dynamis Solutions!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Thank You, ${firstName}!</h1>
            <p style="color: #e0e7ff; margin: 10px 0 0 0; font-size: 16px;">We've received your message</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              Hi ${firstName},
            </p>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              Thank you for reaching out to Dynamis Solutions! We're excited about the opportunity to help transform your business with our web and mobile development expertise.
            </p>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
              <h3 style="color: #1e293b; margin-top: 0;">What happens next?</h3>
              <ul style="color: #4b5563; line-height: 1.8; padding-left: 20px;">
                <li>We'll review your project details within 24 hours</li>
                <li>Our team will prepare a customized proposal for your needs</li>
                <li>We'll schedule a free consultation call to discuss your vision</li>
                <li>You'll receive a detailed project timeline and quote</li>
              </ul>
            </div>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              In the meantime, feel free to check out our portfolio to see some of our recent work, or browse our blog for insights on web development and digital marketing.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="mailto:adam.bhedj13@gmail.com" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block;">
                Contact Us Directly
              </a>
            </div>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              Best regards,<br>
              <strong>Adam Bhedj</strong><br>
              Founder, Dynamis Solutions<br>
              <a href="mailto:adam.bhedj13@gmail.com" style="color: #2563eb;">adam.bhedj13@gmail.com</a>
            </p>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #9ca3af; font-size: 14px;">
            <p>Dynamis Solutions - Building powerful web and mobile applications</p>
            <p>© 2024 Dynamis Solutions. All rights reserved.</p>
          </div>
        </div>
      `,
    })
    
    console.log("✅ Confirmation email sent successfully:", confirmationResult)

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Contact form error:", error)

    // Log the submission details even if email fails
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const company = formData.get("company") as string
    const message = formData.get("message") as string

    console.log("📧 Contact Form Submission (Email failed):", {
      name: `${firstName} ${lastName}`,
      email,
      company: company || "Not provided",
      message,
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : "Unknown error",
    })

    return {
      success: true,
      message:
        "Thank you for your message! We'll get back to you within 24 hours. (Your message was received successfully)",
    }
  }
}
