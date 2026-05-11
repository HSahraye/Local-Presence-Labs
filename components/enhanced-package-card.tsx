import { Check, Megaphone, Rocket, Wrench } from "lucide-react";

import { CTAButton } from "@/components/cta-button";
import type { PackageItem } from "@/data/packages";
import { cn } from "@/lib/utils";

const icons = [Wrench, Rocket, Megaphone];
const outcomes = ["Build your foundation", "Generate lead flow", "Scale with optimization"];

export function EnhancedPackageCard({
  pkg,
  index,
  popular = false,
}: {
  pkg: PackageItem;
  index: number;
  popular?: boolean;
}) {
  const Icon = icons[index] ?? Wrench;
  const outcome = outcomes[index] ?? "Improve online presence";

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-3xl border bg-white p-6 shadow-[0_14px_30px_rgba(2,25,35,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(2,25,35,0.12)]",
        popular
          ? "border-[#7C3AED]/50 ring-2 ring-[#7C3AED]/20"
          : "border-[#3B82F6]/20",
      )}
    >
      {popular ? (
        <span className="absolute right-4 top-4 rounded-full bg-[#7C3AED] px-3 py-1 text-xs font-semibold text-[#0F172A]">
          Most Popular
        </span>
      ) : null}
      <div className="w-fit rounded-xl bg-[#3B82F6]/10 p-2.5">
        <Icon className="h-5 w-5 text-[#3B82F6]" />
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#3B82F6]">
        {outcome}
      </p>
      <h3 className="mt-2 text-2xl font-bold text-[#0F172A]">{pkg.name}</h3>
      <p className="mt-2 text-lg font-semibold text-[#7C3AED]">{pkg.price}</p>
      <p className="mt-3 text-sm text-[#334155]">{pkg.tagline}</p>
      <ul className="mt-5 space-y-2">
        {pkg.includes.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
            <Check className="mt-0.5 h-4 w-4 text-[#7C3AED]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <CTAButton href="/free-audit" withArrow className="w-full">
          {pkg.ctaLabel}
        </CTAButton>
      </div>
    </article>
  );
}
