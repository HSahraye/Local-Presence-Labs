import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Local Presence Labs.",
};

export default function TermsOfServicePage() {
  return (
    <div className="container-shell py-16">
      <SectionHeading
        eyebrow="Legal"
        title="Terms of Service"
        description="By using this website, you agree to the terms below."
      />
      <div className="mt-8 space-y-6 rounded-2xl border border-[#1C768F]/20 bg-white p-6 text-sm leading-relaxed text-[#334155]">
        <section>
          <h2 className="text-base font-semibold text-[#032539]">Website Use</h2>
          <p className="mt-2">
            Content on this site is provided for general information. Service scope,
            deliverables, and pricing are finalized in written agreements.
          </p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-[#032539]">No Guarantees</h2>
          <p className="mt-2">
            Marketing results depend on many factors, including market competition, offer
            quality, budget, and business operations. We do not guarantee specific revenue
            outcomes.
          </p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-[#032539]">Intellectual Property</h2>
          <p className="mt-2">
            Unless otherwise stated, all website content is owned by Local Presence Labs and
            may not be reproduced without permission.
          </p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-[#032539]">Contact</h2>
          <p className="mt-2">
            Questions about these terms can be sent to hello@localpresencelabs.com.
          </p>
        </section>
      </div>
    </div>
  );
}
