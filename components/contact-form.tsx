"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();

    // TODO: Connect to Formspree, Netlify Forms, Resend, or backend API.
  };

  return (
    <div className="rounded-2xl border border-[#1C768F]/20 bg-white p-6 shadow-sm">
      {sent ? (
        <div className="rounded-xl bg-[#F8FAFC] p-5 text-[#032539]">
          <p className="text-lg font-semibold">Message sent successfully.</p>
          <p className="mt-2 text-sm text-[#334155]">
            We will reply shortly to discuss your goals and best next steps.
          </p>
          <Button variant="secondary" className="mt-4" onClick={() => setSent(false)}>
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-4">
          <FormField label="Name" name="name" required />
          <FormField label="Business Name" name="businessName" required />
          <FormField label="Email" name="email" type="email" required />
          <FormField label="Phone (optional)" name="phone" />
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium text-[#032539]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="rounded-xl border border-[#1C768F]/25 px-4 py-3 text-sm text-[#032539] outline-none transition focus:border-[#1C768F] focus:ring-2 focus:ring-[#1C768F]/20"
            />
          </div>
          <Button type="submit">Send Message</Button>
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
      <label htmlFor={name} className="text-sm font-medium text-[#032539]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="h-11 rounded-xl border border-[#1C768F]/25 px-4 text-sm text-[#032539] outline-none transition focus:border-[#1C768F] focus:ring-2 focus:ring-[#1C768F]/20"
      />
    </div>
  );
}
