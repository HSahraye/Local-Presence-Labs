import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

import { AuditForm } from "@/components/audit-form";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Free Audit",
  description:
    "Request a free online presence audit for your website, Google profile, ads, and lead flow.",
};

const reviewPoints = [
  "Website clarity, mobile UX, and conversion flow",
  "Google Business Profile setup and visibility signals",
  "Google Ads and Meta Ads structure (if running campaigns)",
  "Lead tracking and follow-up process",
  "Review and trust-building opportunities",
];

export default function FreeAuditPage() {
  return (
    <div className="container-shell py-16">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Free Audit"
            title="Get a focused online presence action plan."
            description="Tell us where your business shows up online today. We’ll review your website, Google presence, ads, reviews, and lead flow."
          />
          <div className="mt-8 space-y-5 text-sm text-[#334155]">
            <InfoBlock
              title="What we review"
              text="Your website, Google Business Profile, local search setup, ad traffic flow, and lead capture path."
            />
            <InfoBlock
              title="Who it is for"
              text="Local service businesses that want more calls, quote requests, and booked appointments."
            />
            <InfoBlock
              title="What you receive"
              text="A practical list of priority fixes with clear next steps you can act on immediately."
            />
            <InfoBlock
              title="Why it matters"
              text="Most businesses lose leads due to small gaps across pages, profiles, ads, and follow-up. This identifies those gaps before you waste more budget."
            />
          </div>
          <ul className="mt-8 space-y-2">
            {reviewPoints.map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-[#334155]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#1C768F]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <AuditForm />
      </div>
    </div>
  );
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl border border-[#1C768F]/20 bg-white p-4">
      <p className="font-semibold text-[#032539]">{title}</p>
      <p className="mt-1">{text}</p>
    </div>
  );
}
