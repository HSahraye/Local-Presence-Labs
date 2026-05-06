import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { CTAButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Local Presence Labs for websites, ads, local SEO, and lead growth systems.",
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
          <div className="mt-8 space-y-4 rounded-2xl border border-[#1C768F]/20 bg-white p-5 text-sm text-[#334155]">
            <p>
              <span className="font-semibold text-[#032539]">Email: </span>
              hello@localpresencelabs.com
            </p>
            <p>
              <span className="font-semibold text-[#032539]">Service area: </span>
              Bay Area, CA and remote support for other U.S. local businesses
            </p>
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
