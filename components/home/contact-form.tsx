"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";

const services = [
  "Web development",
  "SaaS development",
  "Branding & design",
  "Automation & AI workflows",
  "Marketing & growth",
  "Social media management",
  "Photo & modeling sessions",
  "Business consulting",
];
const timelines = [
  "Immediately",
  "Within 30 days",
  "Within 90 days",
  "Exploring options",
];

export function ContactForm() {
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  async function send(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setPending(true);
    setResult(null);
    try {
      const response = await submitContactForm(data);
      setResult(response);
      if (response.success) form.reset();
    } catch {
      setResult({
        success: false,
        message:
          "Your enquiry could not be sent. Please try again or email us directly.",
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      method="post"
      onSubmit={send}
      className="brief-form"
      aria-label="Project enquiry"
      aria-busy={pending}
    >
      <label>
        First name
        <input
          name="firstName"
          autoComplete="given-name"
          required
          disabled={pending}
        />
      </label>
      <label>
        Last name
        <input
          name="lastName"
          autoComplete="family-name"
          required
          disabled={pending}
        />
      </label>
      <label>
        Work email
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          disabled={pending}
        />
      </label>
      <label>
        Company (optional)
        <input name="company" autoComplete="organization" disabled={pending} />
      </label>
      <label>
        Service (optional)
        <select name="service" defaultValue="" disabled={pending}>
          <option value="">Select a service</option>
          {services.map((value) => (
            <option key={value}>{value}</option>
          ))}
        </select>
      </label>
      <label>
        Timeline (optional)
        <select name="timeline" defaultValue="" disabled={pending}>
          <option value="">Select a timeline</option>
          {timelines.map((value) => (
            <option key={value}>{value}</option>
          ))}
        </select>
      </label>
      <label className="full-field">
        Project details
        <textarea
          name="message"
          placeholder="What would you like to build or improve?"
          required
          disabled={pending}
        />
      </label>
      <button
        disabled={pending}
        type="submit"
        className="lime-button full-field"
      >
        {pending ? "Sending…" : "Send enquiry"}
        <ArrowUpRight size={17} />
      </button>
      <div
        className={`form-status ${result?.success ? "success" : ""}`}
        role="status"
      >
        {result?.message}
        {result && !result.success && (
          <>
            {" "}
            <a href="mailto:contact@dynamissolution.tn">Email Dynamis</a>
          </>
        )}
      </div>
    </form>
  );
}
