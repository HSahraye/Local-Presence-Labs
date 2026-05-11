import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Presence Labs.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-shell py-16">
      <SectionHeading
        eyebrow="Legal"
        title="Privacy Policy"
        description="Presence Labs values your privacy and handles contact information with care."
      />
      <div className="mt-8 space-y-6 rounded-2xl border border-[#3B82F6]/20 bg-white p-6 text-sm leading-relaxed text-[#334155]">
        <section>
          <h2 className="text-base font-semibold text-[#0F172A]">Information We Collect</h2>
          <p className="mt-2">
            We may collect contact details and business information submitted through our
            forms, including name, email, phone number, business name, and website details.
          </p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-[#0F172A]">How We Use Information</h2>
          <p className="mt-2">
            We use submitted information to respond to inquiries, deliver requested audits,
            and provide service-related communication.
          </p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-[#0F172A]">Data Sharing</h2>
          <p className="mt-2">
            We do not sell personal information. We may use trusted service providers for
            hosting, analytics, and communication when needed to operate this website.
          </p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-[#0F172A]">Contact</h2>
          <p className="mt-2">
            For privacy questions, email{" "}
            <a href="mailto:Sahrayeh@bayareatechhelp.com" className="underline">
              Sahrayeh@bayareatechhelp.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
