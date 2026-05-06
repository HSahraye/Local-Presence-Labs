import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";

export function BeforeAfterPanel() {
  const before = [
    "Outdated website",
    "No clear CTA",
    "Weak Google presence",
    "No tracking",
    "Missed leads",
  ];

  const after = [
    "Modern website",
    "Click-to-call and quote form",
    "Optimized Google profile",
    "Ads connected to landing pages",
    "Leads tracked and followed up",
  ];

  return (
    <section className="rounded-3xl border border-[#1C768F]/15 bg-white p-6 shadow-[0_14px_30px_rgba(2,25,35,0.08)] md:p-8">
      <h3 className="text-2xl font-bold tracking-tight text-[#032539]">
        Small fixes can change how customers see your business
      </h3>
      <div className="mt-6 grid items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
        <article className="rounded-2xl border border-[#CC4D35]/20 bg-[#fff6f4] p-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#CC4D35]">Before</p>
          <ul className="mt-3 space-y-2">
            {before.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#334155]">
                <XCircle className="h-4 w-4 text-[#CC4D35]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <ArrowRight className="mx-auto hidden h-6 w-6 text-[#1C768F] lg:block" />
        <article className="rounded-2xl border border-[#1C768F]/20 bg-[#f3fbfd] p-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#1C768F]">After</p>
          <ul className="mt-3 space-y-2">
            {after.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#334155]">
                <CheckCircle2 className="h-4 w-4 text-[#1C768F]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
