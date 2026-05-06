import { Check } from "lucide-react";

import { CTAButton } from "@/components/cta-button";
import type { PackageItem } from "@/data/packages";
import { cn } from "@/lib/utils";

type PackageCardProps = {
  pkg: PackageItem;
  highlight?: boolean;
};

export function PackageCard({ pkg, highlight = false }: PackageCardProps) {
  return (
    <article
      className={cn(
        "rounded-2xl border bg-white p-6 shadow-sm",
        highlight ? "border-[#FA991C]/50 ring-2 ring-[#FA991C]/20" : "border-[#1C768F]/20",
      )}
    >
      <h3 className="text-xl font-semibold text-[#032539]">{pkg.name}</h3>
      <p className="mt-2 text-lg font-bold text-[#1C768F]">{pkg.price}</p>
      <p className="mt-3 text-[#334155]">{pkg.tagline}</p>
      <ul className="mt-5 space-y-2">
        {pkg.includes.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
            <Check className="h-4 w-4 mt-0.5 text-[#FA991C]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <CTAButton href="/free-audit" className="w-full" withArrow>
          {pkg.ctaLabel}
        </CTAButton>
      </div>
    </article>
  );
}
