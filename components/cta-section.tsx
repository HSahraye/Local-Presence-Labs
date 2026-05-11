import { CTAButton } from "@/components/cta-button";

export function CTASection({
  title = "Want to know what your business is missing online?",
  copy = "Get a free audit of your website, Google presence, ads, reviews, and lead flow. We’ll show you the highest-impact fixes first.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="rounded-3xl border border-[#3B82F6]/20 bg-gradient-to-r from-[#0F172A] to-[#3B82F6] p-8 text-white shadow-[0_16px_32px_rgba(2,25,35,0.2)] md:p-10">
      <h3 className="text-3xl font-bold tracking-tight">{title}</h3>
      <p className="mt-4 max-w-3xl text-white/90">{copy}</p>
      <div className="mt-7">
        <CTAButton href="/free-audit" withArrow>
          Get My Free Audit
        </CTAButton>
      </div>
    </section>
  );
}
