import { cn } from "@/lib/utils";

export function GradientBlob({
  className,
  color = "from-[#3B82F6]/40 to-[#7C3AED]/20",
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
