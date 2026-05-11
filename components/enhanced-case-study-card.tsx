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
    <article className="group overflow-hidden rounded-3xl border border-[#3B82F6]/20 bg-white shadow-[0_14px_30px_rgba(2,25,35,0.08)] transition hover:-translate-y-1">
      <div className="h-1 w-full bg-gradient-to-r from-[#3B82F6] via-[#7C3AED] to-[#7C3AED]" />
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3B82F6]">
          {caseStudy.category}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-[#0F172A]">{caseStudy.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[#334155]">{caseStudy.description}</p>
        <p className="mt-4 text-sm text-[#334155]">
          <span className="font-semibold text-[#0F172A]">Business value: </span>
          {caseStudy.value}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {caseStudy.tools.slice(0, 4).map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-[#3B82F6]/20 bg-[#F8FAFC] px-2.5 py-1 text-xs text-[#334155]"
            >
              {tool}
            </span>
          ))}
        </div>
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#3B82F6]"
        >
          View Case Studies
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
