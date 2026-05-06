import { CheckCircle2 } from "lucide-react";

import { CTAButton } from "@/components/cta-button";

type ScoreItem = {
  label: string;
  score: number;
};

export function Scorecard({ items }: { items: ScoreItem[] }) {
  return (
    <section className="rounded-3xl border border-[#1C768F]/20 bg-white p-6 shadow-[0_14px_30px_rgba(2,25,35,0.08)] md:p-8">
      <h3 className="text-2xl font-bold tracking-tight text-[#032539]">
        How strong is your online presence?
      </h3>
      <p className="mt-3 max-w-3xl text-[#334155]">
        Most local businesses have hidden conversion leaks across website clarity, Google
        visibility, ad flow, and lead follow-up.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <div key={item.label} className="rounded-2xl border border-[#1C768F]/15 bg-[#F8FAFC] p-4">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-medium text-[#032539]">{item.label}</span>
              <span className="text-[#1C768F]">{item.score}%</span>
            </div>
            <div className="h-2 rounded-full bg-[#1C768F]/15">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-[#1C768F] to-[#FA991C]"
                style={{ width: `${item.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3 rounded-xl bg-[#032539] p-4 text-sm text-white">
        <CheckCircle2 className="h-4 w-4 text-[#FA991C]" />
        <span>Get a practical score review and action plan in your free audit.</span>
      </div>
      <div className="mt-6">
        <CTAButton href="/free-audit" withArrow>
          Request a Free Audit
        </CTAButton>
      </div>
    </section>
  );
}
