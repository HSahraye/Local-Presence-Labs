import { Building2 } from "lucide-react";

export function IndustryCard({ label }: { label: string }) {
  return (
    <article className="rounded-2xl border border-[#1C768F]/20 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-[#1C768F]/10 p-2">
          <Building2 className="h-4 w-4 text-[#1C768F]" />
        </span>
        <h3 className="font-semibold text-[#032539]">{label}</h3>
      </div>
    </article>
  );
}
