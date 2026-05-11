import { LucideIcon } from "lucide-react";

export function FloatingCard({
  label,
  icon: Icon,
  delay = 0,
}: {
  label: string;
  icon: LucideIcon;
  delay?: number;
}) {
  return (
    <div
      className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white shadow-lg backdrop-blur-sm transition duration-500 hover:-translate-y-0.5"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center gap-2">
        <span className="rounded-lg bg-white/15 p-1.5">
          <Icon className="h-4 w-4 text-[#7C3AED]" />
        </span>
        <span className="font-medium">{label}</span>
      </div>
    </div>
  );
}
