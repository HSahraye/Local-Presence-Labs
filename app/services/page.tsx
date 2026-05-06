import type { Metadata } from "next";

import { CTAButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { serviceGroups } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore website design, Google visibility, paid ads, and lead system services for local service businesses.",
};

export default function ServicesPage() {
  return (
    <div className="container-shell py-16">
      <SectionHeading
        eyebrow="Services"
        title="Practical marketing and web systems for local businesses."
        description="We combine websites, Google visibility, paid ads, and lead operations into one focused growth partner model."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {serviceGroups.map((service) => (
          <div key={service.title}>
            <ServiceCard service={service} />
            <div className="mt-4">
              <CTAButton href="/free-audit" variant="outline" withArrow>
                Request a Free Audit
              </CTAButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
