import type { Metadata } from "next";

import { BackgroundGrid } from "@/components/background-grid";
import { EnhancedPackageCard } from "@/components/enhanced-package-card";
import { GradientBlob } from "@/components/gradient-blob";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { Spotlight } from "@/components/spotlight";
import { packages } from "@/data/packages";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "See transparent package options for local business websites, ads, SEO, and growth support.",
};

export default function PackagesPage() {
  return (
    <div className="pb-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1220] via-[#0F172A] to-[#1E1B4B] py-16 text-white">
        <BackgroundGrid />
        <Spotlight className="-top-20" />
        <GradientBlob className="right-6 top-8 h-44 w-44" />
        <div className="container-shell relative z-10">
          <SectionEyebrow className="border-[#3B82F6]/40 bg-[#3B82F6]/15 text-[#DBEAFE]">
            Packages
          </SectionEyebrow>
          <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
            Clear packages to match your growth stage
          </h1>
          <p className="mt-4 max-w-3xl text-white/85">
            Choose the level of support that fits your current goals. Final pricing
            depends on scope, competition, service area, ad budget, and current online
            presence quality.
          </p>
        </div>
      </section>
      <section className="container-shell -mt-8 relative z-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <EnhancedPackageCard key={pkg.name} pkg={pkg} index={index} popular={index === 1} />
          ))}
        </div>
        <p className="mt-8 rounded-xl border border-[#3B82F6]/20 bg-white p-4 text-sm text-[#334155]">
          Final pricing depends on scope, competition, service area, ad budget, and the
          current state of your online presence.
        </p>
      </section>
    </div>
  );
}
