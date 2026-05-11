"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";

type Status = "idle" | "submitting" | "success" | "error";
const fallbackEmail = "Sahrayeh@bayareatechhelp.com";

function encodeFormData(formData: FormData) {
  const params = new URLSearchParams();

  for (const [key, value] of formData.entries()) {
    if (typeof value === "string") {
      params.append(key, value);
    }
  }

  return params.toString();
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData(formData),
      });

      if (!response.ok) {
        throw new Error("Netlify form submission failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }

    // TODO: Alternative providers if needed: Formspree, Resend, or custom API endpoint.
  };

  return (
    <div className="rounded-3xl border border-[#3B82F6]/20 bg-white p-6 shadow-[0_14px_30px_rgba(2,25,35,0.08)] md:p-8">
      {status === "success" ? (
        <div className="rounded-2xl border border-[#3B82F6]/20 bg-[#F8FAFC] p-6 text-[#0F172A]">
          <p className="text-lg font-semibold">Message sent successfully.</p>
          <p className="mt-2 text-sm text-[#334155]">
            Thanks — your message was sent. We&apos;ll follow up soon.
          </p>
          <Button variant="secondary" className="mt-4" onClick={() => setStatus("idle")}>
            Send Another Message
          </Button>
        </div>
      ) : (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="grid gap-5"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don&apos;t fill this out if you&apos;re human:
              <input name="bot-field" />
            </label>
          </p>
          <p className="text-sm text-[#334155]">
            Tell us what you want to improve first and we&apos;ll recommend the fastest
            path forward.
          </p>
          <FormField label="Name" name="name" required />
          <FormField label="Business Name" name="businessName" required />
          <FormField label="Email" name="email" type="email" required />
          <FormField label="Phone (optional)" name="phone" />
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium text-[#0F172A]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="rounded-xl border border-[#3B82F6]/25 bg-white px-4 py-3 text-sm text-[#0F172A] outline-none transition focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20"
            />
            <p className="text-xs text-[#64748b]">
              Include your website URL and what is currently blocking growth.
            </p>
          </div>
          {status === "error" ? (
            <p className="text-sm text-[#7C3AED]">
              Something went wrong. Please email{" "}
              <a className="underline" href={`mailto:${fallbackEmail}`}>
                {fallbackEmail}
              </a>{" "}
              directly.
            </p>
          ) : null}
          <Button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending..." : "Send Message"}
          </Button>
        </form>
      )}
    </div>
  );
}

function FormField({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-sm font-medium text-[#0F172A]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="h-11 rounded-xl border border-[#3B82F6]/25 bg-white px-4 text-sm text-[#0F172A] outline-none transition focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20"
      />
    </div>
  );
}
