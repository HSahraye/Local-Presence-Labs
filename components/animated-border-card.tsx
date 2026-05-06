import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function AnimatedBorderCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-[#1C768F]/20 bg-white p-5 shadow-[0_8px_28px_rgba(2,25,35,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(2,25,35,0.12)]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1C768F] via-[#FA991C] to-[#CC4D35] opacity-80" />
      {children}
    </div>
  );
}
