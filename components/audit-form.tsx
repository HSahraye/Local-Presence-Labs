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
    <div className="rounded-2xl border border-[#1C768F]/20 bg-white p-6 shadow-sm">
      {status === "success" ? (
        <div className="rounded-xl bg-[#F8FAFC] p-5 text-[#032539]">
          <p className="text-lg font-semibold">Audit request received.</p>
          <p className="mt-2 text-sm text-[#334155]">
            Thanks for sharing your details. We will follow up with your action
            plan shortly.
          </p>
          <Button className="mt-4" variant="secondary" onClick={() => setStatus("idle")}>
            Submit Another Request
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-4">
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
              className="rounded-xl border border-[#1C768F]/25 px-4 py-3 text-sm text-[#032539] outline-none transition focus:border-[#1C768F] focus:ring-2 focus:ring-[#1C768F]/20"
            />
          </div>
          <Button type="submit" className="mt-2">
            Request Free Audit
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
        className="h-11 rounded-xl border border-[#1C768F]/25 px-4 text-sm text-[#032539] outline-none transition focus:border-[#1C768F] focus:ring-2 focus:ring-[#1C768F]/20"
      />
    </div>
  );
}
