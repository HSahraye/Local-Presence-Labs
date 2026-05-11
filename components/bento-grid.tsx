import { LucideIcon } from "lucide-react";

import { AnimatedBorderCard } from "@/components/animated-border-card";

type BentoItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function BentoGrid({ items }: { items: BentoItem[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => (
        <AnimatedBorderCard
          key={item.title}
          className={
            index === 0
              ? "md:col-span-2"
              : index === 3
                ? "xl:col-span-2"
                : ""
          }
        >
          <div className="rounded-xl bg-[#3B82F6]/10 p-2.5 w-fit">
            <item.icon className="h-5 w-5 text-[#3B82F6]" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-[#0F172A]">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#334155]">{item.description}</p>
        </AnimatedBorderCard>
      ))}
    </div>
  );
}
