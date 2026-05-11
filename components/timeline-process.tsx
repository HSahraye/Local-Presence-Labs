import { ClipboardCheck, Compass, Cog, Rocket, LineChart } from "lucide-react";

const steps = [
  {
    title: "Audit",
    description: "Review your website, Google profile, ads, and lead flow to find highest-impact gaps.",
    icon: ClipboardCheck,
  },
  {
    title: "Plan",
    description: "Prioritize the right fixes based on your services, market, budget, and goals.",
    icon: Compass,
  },
  {
    title: "Build",
    description: "Implement pages, profiles, ad setup, and conversion systems with clean execution.",
    icon: Cog,
  },
  {
    title: "Launch",
    description: "Ship updates fast with tracking, QA checks, and clear customer-facing messaging.",
    icon: Rocket,
  },
  {
    title: "Optimize",
    description: "Improve based on performance signals, lead quality, and conversion data.",
    icon: LineChart,
  },
];

export function TimelineProcess() {
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      {steps.map((step, index) => (
        <article
          key={step.title}
          className="relative rounded-2xl border border-[#3B82F6]/20 bg-white p-5 shadow-sm"
        >
          {index < steps.length - 1 ? (
            <span className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-[#3B82F6]/40 lg:block" />
          ) : null}
          <div className="w-fit rounded-xl bg-[#3B82F6]/10 p-2.5">
            <step.icon className="h-5 w-5 text-[#3B82F6]" />
          </div>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#3B82F6]">
            Step {index + 1}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-[#0F172A]">{step.title}</h3>
          <p className="mt-2 text-sm text-[#334155]">{step.description}</p>
        </article>
      ))}
    </div>
  );
}
