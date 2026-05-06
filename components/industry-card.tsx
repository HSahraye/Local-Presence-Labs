import { ComponentType, SVGProps } from "react";

export function IndustryCard({
  label,
  items,
  icon: Icon,
}: {
  label: string;
  items?: string[];
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}) {
  return (
    <article className="rounded-2xl border border-[#1C768F]/20 bg-white p-5 shadow-sm transition hover:-translate-y-0.5">
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-[#1C768F]/10 p-2">
          <Icon className="h-4 w-4 text-[#1C768F]" />
        </span>
        <h3 className="font-semibold text-[#032539]">{label}</h3>
      </div>
      {items?.length ? (
        <ul className="mt-4 space-y-1.5 text-sm text-[#334155]">
          {items.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
