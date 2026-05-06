import type { Metadata } from "next";

import { PackageCard } from "@/components/package-card";
import { SectionHeading } from "@/components/section-heading";
import { packages } from "@/data/packages";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "See transparent package options for local business websites, ads, SEO, and growth support.",
};

export default function PackagesPage() {
  return (
    <div className="container-shell py-16">
      <SectionHeading
        eyebrow="Packages"
        title="Clear packages to match your growth stage."
        description="Choose the level of support that fits your current goals. Final pricing depends on scope, competition, service area, ad budget, and the current state of your online presence."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {packages.map((pkg, index) => (
          <PackageCard key={pkg.name} pkg={pkg} highlight={index === 1} />
        ))}
      </div>
      <p className="mt-8 rounded-xl border border-[#1C768F]/20 bg-white p-4 text-sm text-[#334155]">
        Final pricing depends on scope, competition, service area, ad budget, and the
        current state of your online presence.
      </p>
    </div>
  );
}
