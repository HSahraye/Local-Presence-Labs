import type { CaseStudy } from "@/data/caseStudies";

export function CaseStudyCard({
  caseStudy,
  compact = false,
}: {
  caseStudy: CaseStudy;
  compact?: boolean;
}) {
  return (
    <article className="rounded-2xl border border-[#1C768F]/20 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-[#032539]">{caseStudy.title}</h3>
      <p className="mt-3 text-[#334155] leading-relaxed">{caseStudy.description}</p>
      {!compact ? (
        <div className="mt-5 space-y-4 text-sm text-[#334155]">
          <p>
            <span className="font-semibold text-[#032539]">Challenge: </span>
            {caseStudy.challenge}
          </p>
          <p>
            <span className="font-semibold text-[#032539]">What was built: </span>
            {caseStudy.built}
          </p>
          <p>
            <span className="font-semibold text-[#032539]">Business value: </span>
            {caseStudy.value}
          </p>
          <p>
            <span className="font-semibold text-[#032539]">Tech/tools: </span>
            {caseStudy.tools.join(", ")}
          </p>
        </div>
      ) : null}
    </article>
  );
}
