import { CheckCircle2 } from "lucide-react";

import type { ServiceGroup } from "@/data/services";

export function ServiceCard({ service }: { service: ServiceGroup }) {
  return (
    <article className="rounded-2xl border border-[#1C768F]/20 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-[#032539]">{service.title}</h3>
      <p className="mt-3 text-[#334155] leading-relaxed">{service.description}</p>
      <h4 className="mt-5 text-sm font-semibold uppercase tracking-wide text-[#1C768F]">
        Deliverables
      </h4>
      <ul className="mt-3 space-y-2">
        {service.deliverables.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-[#1C768F]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-5 rounded-xl bg-[#F8FAFC] p-3 text-sm text-[#334155]">
        <span className="font-semibold text-[#032539]">Best for: </span>
        {service.bestFor}
      </p>
    </article>
  );
}
