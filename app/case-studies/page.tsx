import type { Metadata } from "next";
import { ArrowRight, Compass, LineChart, Radar, ShieldCheck, Waypoints } from "lucide-react";

import { BackgroundGrid } from "@/components/background-grid";
import { CTAButton } from "@/components/cta-button";
import { CTASection } from "@/components/cta-section";
import { EnhancedCaseStudyCard } from "@/components/enhanced-case-study-card";
import { GradientBlob } from "@/components/gradient-blob";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { SectionHeading } from "@/components/section-heading";
import { Spotlight } from "@/components/spotlight";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected builds and growth systems from Local Presence Labs across local businesses and full-stack platforms.",
};

const evaluationItems = [
  { title: "Clarity", icon: Compass, text: "Can a customer understand your offer in seconds?" },
  { title: "Trust", icon: ShieldCheck, text: "Do sections, reviews, and structure reduce buyer hesitation?" },
  { title: "Search visibility", icon: Radar, text: "Can nearby customers find your services on Google?" },
  { title: "Conversion path", icon: Waypoints, text: "Is there a direct path from page view to action?" },
  { title: "Tracking", icon: LineChart, text: "Can you see what channels are producing real leads?" },
  { title: "Follow-up", icon: ArrowRight, text: "Do incoming leads get a fast and clear response?" },
];

export default function CaseStudiesPage() {
  const [featured, ...rest] = caseStudies;

  return (
    <div className="pb-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#021923] via-[#032539] to-[#0d3447] py-16 text-white md:py-20">
        <BackgroundGrid />
        <Spotlight className="-top-20" />
        <GradientBlob className="-left-10 top-10 h-44 w-44" />
        <div className="container-shell relative z-10">
          <SectionEyebrow className="border-[#1C768F]/40 bg-[#1C768F]/15 text-[#9fdfef]">
            Case Studies
          </SectionEyebrow>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Selected Builds & Growth Systems
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-white/85">
            A look at websites, booking flows, local service brands, and full-stack
            platforms built with a focus on trust, clarity, and conversion.
          </p>
        </div>
      </section>

      <section className="container-shell -mt-10 relative z-20">
        <article className="overflow-hidden rounded-3xl border border-[#1C768F]/20 bg-white shadow-[0_18px_34px_rgba(2,25,35,0.14)]">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#1C768F] via-[#FA991C] to-[#CC4D35]" />
          <div className="p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1C768F]">Featured Build</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#032539]">{featured.title}</h2>
            <p className="mt-2 text-sm font-semibold uppercase text-[#CC4D35]">{featured.category}</p>
            <p className="mt-4 text-[#334155]">{featured.description}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Info title="Challenge" body={featured.challenge} />
              <Info title="What was built" body={featured.built.join(", ")} />
              <Info title="Business value" body={featured.value} />
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {featured.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-[#1C768F]/20 bg-[#F8FAFC] px-2.5 py-1 text-xs text-[#334155]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </article>
      </section>

      <section className="container-shell py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {rest.map((item) => (
            <EnhancedCaseStudyCard key={item.title} caseStudy={item} href="/free-audit" />
          ))}
        </div>
      </section>

      <section className="container-shell py-4">
        <SectionHeading
          eyebrow="Approach"
          title="How we think"
          description="We design online presence systems from the customer’s point of view first, then align structure, trust, and tracking."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Info
            title="Decision path first"
            body="Each section should help prospects move to the next step with less confusion."
          />
          <Info
            title="Trust before traffic scale"
            body="We improve clarity and proof points before amplifying spend on paid traffic."
          />
          <Info
            title="Measurement by default"
            body="We connect pages, ads, and lead capture so business decisions are data-informed."
          />
        </div>
      </section>

      <section className="container-shell py-4">
        <SectionHeading
          eyebrow="Method"
          title="How we evaluate online presence"
          description="Every project starts with signal quality, user trust, and conversion friction across the full customer journey."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {evaluationItems.map((item) => (
            <article key={item.title} className="rounded-2xl border border-[#1C768F]/20 bg-white p-5 shadow-sm">
              <div className="w-fit rounded-xl bg-[#1C768F]/10 p-2.5">
                <item.icon className="h-5 w-5 text-[#1C768F]" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#032539]">{item.title}</h3>
              <p className="mt-2 text-sm text-[#334155]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell py-12">
        <CTASection />
        <div className="mt-6">
          <CTAButton href="/free-audit" variant="secondary" withArrow>
            Start My Free Audit
          </CTAButton>
        </div>
      </section>
    </div>
  );
}

function Info({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-[#1C768F]/15 bg-[#F8FAFC] p-4">
      <p className="text-sm font-semibold text-[#032539]">{title}</p>
      <p className="mt-2 text-sm text-[#334155]">{body}</p>
    </div>
  );
}
