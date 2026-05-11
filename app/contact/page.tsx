import type { Metadata } from "next";
import { MapPin } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { CTAButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Presence Labs for websites, ads, local SEO, and lead growth systems.",
};

export default function ContactPage() {
  return (
    <div className="container-shell py-16">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s improve your online presence."
            description="Tell us what you’re trying to improve — website, Google, ads, reviews, or lead flow."
          />
          <div className="mt-8 space-y-4 rounded-2xl border border-[#3B82F6]/20 bg-white p-5 text-sm text-[#334155]">
            <p>
              <span className="font-semibold text-[#0F172A]">Email: </span>
              <a href="mailto:Sahrayeh@bayareatechhelp.com" className="underline">
                Sahrayeh@bayareatechhelp.com
              </a>
            </p>
            <p>
              <span className="font-semibold text-[#0F172A]">Service area: </span>
              Bay Area, CA and remote support for other U.S. local businesses
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/10 px-3 py-1 text-xs font-medium text-[#6D28D9]">
              <MapPin className="h-3.5 w-3.5" />
              Local First: Proudly Alameda-based
            </div>
          </div>
          <div className="mt-8">
            <CTAButton href="/free-audit" withArrow>
              Request Free Audit
            </CTAButton>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
