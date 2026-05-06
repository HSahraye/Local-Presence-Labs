import { cn } from "@/lib/utils";

export function GradientBlob({
  className,
  color = "from-[#1C768F]/40 to-[#FA991C]/20",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        "bg-gradient-to-br",
        color,
        className,
      )}
      aria-hidden
    />
  );
}
