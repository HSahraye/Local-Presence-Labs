import type { CaseStudy } from "@/data/caseStudies";

export function CaseStudyCard({
  caseStudy,
  compact = false,
}: {
  caseStudy: CaseStudy;
  compact?: boolean;
}) {
  return (
    <article className="rounded-2xl border border-[#3B82F6]/20 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-[#0F172A]">{caseStudy.title}</h3>
      <p className="mt-3 text-[#334155] leading-relaxed">{caseStudy.description}</p>
      {!compact ? (
        <div className="mt-5 space-y-4 text-sm text-[#334155]">
          <p>
            <span className="font-semibold text-[#0F172A]">Challenge: </span>
            {caseStudy.challenge}
          </p>
          <p>
            <span className="font-semibold text-[#0F172A]">What was built: </span>
            {caseStudy.built.join(", ")}
          </p>
          <p>
            <span className="font-semibold text-[#0F172A]">Business value: </span>
            {caseStudy.value}
          </p>
          <p>
            <span className="font-semibold text-[#0F172A]">Tech/tools: </span>
            {caseStudy.tools.join(", ")}
          </p>
        </div>
      ) : null}
    </article>
  );
}
