"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";

type Status = "idle" | "success";

export function AuditForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("success");
    event.currentTarget.reset();

    // TODO: Connect to Formspree, Netlify Forms, Resend, or backend API.
  };

  return (
    <div className="rounded-3xl border border-[#1C768F]/20 bg-white p-6 shadow-[0_14px_30px_rgba(2,25,35,0.08)] md:p-8">
      {status === "success" ? (
        <div className="rounded-2xl border border-[#1C768F]/20 bg-[#F8FAFC] p-6 text-[#032539]">
          <p className="text-lg font-semibold">Audit request received.</p>
          <p className="mt-2 text-sm text-[#334155]">
            Thanks for sharing your details. We will follow up with your initial action
            plan shortly.
          </p>
          <Button className="mt-4" variant="secondary" onClick={() => setStatus("idle")}>
            Submit Another Request
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-5">
          <p className="text-sm text-[#334155]">
            Tell us where your business shows up online today. We&apos;ll review your
            website, Google presence, ads, reviews, and lead flow.
          </p>
          <FormField label="Name" name="name" required />
          <FormField label="Business Name" name="businessName" required />
          <FormField label="Website URL" name="websiteUrl" type="url" required />
          <FormField
            label="Google Business Profile URL or Business Location"
            name="gbp"
            required
          />
          <FormField label="Email" name="email" type="email" required />
          <FormField label="Phone (optional)" name="phone" />
          <FormField label="Main Goal" name="goal" required />
          <FormField label="Current Monthly Ad Budget (optional)" name="adBudget" />
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium text-[#032539]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="rounded-xl border border-[#1C768F]/25 bg-white px-4 py-3 text-sm text-[#032539] outline-none transition focus:border-[#1C768F] focus:ring-2 focus:ring-[#1C768F]/20"
            />
            <p className="text-xs text-[#64748b]">
              Share any context on your current website, ads, or lead flow.
            </p>
          </div>
          <Button type="submit" className="mt-2">
            Get My Free Audit
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
      <label htmlFor={name} className="text-sm font-medium text-[#032539]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="h-11 rounded-xl border border-[#1C768F]/25 bg-white px-4 text-sm text-[#032539] outline-none transition focus:border-[#1C768F] focus:ring-2 focus:ring-[#1C768F]/20"
      />
    </div>
  );
}
