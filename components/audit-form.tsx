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

export function AuditForm() {
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
    <div className="rounded-3xl border border-[#1C768F]/20 bg-white p-6 shadow-[0_14px_30px_rgba(2,25,35,0.08)] md:p-8">
      {status === "success" ? (
        <div className="rounded-2xl border border-[#1C768F]/20 bg-[#F8FAFC] p-6 text-[#032539]">
          <p className="text-lg font-semibold">Audit request received.</p>
          <p className="mt-2 text-sm text-[#334155]">
            Thanks — your audit request was sent. We&apos;ll review your online presence
            and follow up soon.
          </p>
          <Button className="mt-4" variant="secondary" onClick={() => setStatus("idle")}>
            Submit Another Request
          </Button>
        </div>
      ) : (
        <form
          name="free-audit"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="grid gap-5"
        >
          <input type="hidden" name="form-name" value="free-audit" />
          <p className="hidden">
            <label>
              Don&apos;t fill this out if you&apos;re human:
              <input name="bot-field" />
            </label>
          </p>
          <p className="text-sm text-[#334155]">
            Tell us where your business shows up online today. We&apos;ll review your
            website, Google presence, ads, reviews, and lead flow.
          </p>
          <FormField label="Name" name="name" required />
          <FormField label="Business Name" name="businessName" required />
          <FormField label="Website URL" name="websiteUrl" type="url" required />
          <FormField
            label="Google Business Profile URL or Business Location"
            name="googleBusinessProfileOrLocation"
            required
          />
          <FormField label="Email" name="email" type="email" required />
          <FormField label="Phone (optional)" name="phone" />
          <FormField label="Main Goal" name="mainGoal" required />
          <FormField label="Current Monthly Ad Budget (optional)" name="monthlyAdBudget" />
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
          {status === "error" ? (
            <p className="text-sm text-[#CC4D35]">
              Something went wrong. Please email{" "}
              <a className="underline" href={`mailto:${fallbackEmail}`}>
                {fallbackEmail}
              </a>{" "}
              directly.
            </p>
          ) : null}
          <Button type="submit" className="mt-2" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending..." : "Get My Free Audit"}
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
