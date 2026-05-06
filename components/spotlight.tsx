import { cn } from "@/lib/utils";

export function Spotlight({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-3xl",
        "bg-[radial-gradient(circle_at_center,rgba(28,118,143,0.45),rgba(3,37,57,0)_70%)]",
        className,
      )}
      aria-hidden
    />
  );
}
