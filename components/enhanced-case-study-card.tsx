import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import type { CaseStudy } from "@/data/caseStudies";

export function EnhancedCaseStudyCard({
  caseStudy,
  href = "/case-studies",
}: {
  caseStudy: CaseStudy;
  href?: string;
}) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-[#1C768F]/20 bg-white shadow-[0_14px_30px_rgba(2,25,35,0.08)] transition hover:-translate-y-1">
      <div className="h-1 w-full bg-gradient-to-r from-[#1C768F] via-[#FA991C] to-[#CC4D35]" />
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1C768F]">
          {caseStudy.category}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-[#032539]">{caseStudy.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[#334155]">{caseStudy.description}</p>
        <p className="mt-4 text-sm text-[#334155]">
          <span className="font-semibold text-[#032539]">Business value: </span>
          {caseStudy.value}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {caseStudy.tools.slice(0, 4).map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-[#1C768F]/20 bg-[#F8FAFC] px-2.5 py-1 text-xs text-[#334155]"
            >
              {tool}
            </span>
          ))}
        </div>
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#1C768F]"
        >
          View Case Studies
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
