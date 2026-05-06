import type { Metadata } from "next";
import {
  AlertTriangle,
  BarChart3,
  Megaphone,
  Search,
  ShieldCheck,
  Waypoints,
} from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { CaseStudyCard } from "@/components/case-study-card";
import { CTAButton } from "@/components/cta-button";
import { FAQAccordion } from "@/components/faq-accordion";
import { IndustryCard } from "@/components/industry-card";
import { PackageCard } from "@/components/package-card";
import { ProcessSteps } from "@/components/process-steps";
import { SectionHeading } from "@/components/section-heading";
import { TrustChips } from "@/components/trust-chips";
import { caseStudies } from "@/data/caseStudies";
import { faqs } from "@/data/faqs";
import { industries } from "@/data/industries";
import { packages } from "@/data/packages";

const problems = [
  "Outdated or missing website",
  "Weak Google Business Profile",
  "No clear call/text/book buttons",
  "Ads sending traffic to bad pages",
  "No tracking for calls or leads",
  "Few reviews or weak trust signals",
];

const pillars = [
  { title: "Professional Website", icon: Waypoints },
  { title: "Google Visibility", icon: Search },
  { title: "Paid Ads", icon: Megaphone },
  { title: "Lead Systems", icon: BarChart3 },
];

export const metadata: Metadata = {
  title:
    "Local Presence Labs | Websites, Google Ads & Local SEO for Local Businesses",
  description:
    "Local Presence Labs helps local service businesses build professional websites, improve Google visibility, run ads, and turn visitors into calls, quote requests, and booked appointments.",
};

export default function HomePage() {
  return (
    <div className="pb-16">
      <section className="relative overflow-hidden border-b border-[#1C768F]/10 bg-gradient-to-br from-white via-[#F8FAFC] to-[#dff2f7]">
        <div className="container-shell py-16 md:py-24">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1C768F]">
              Local Presence Labs
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-[#032539] md:text-6xl">
              Get Found, Trusted, and Booked Online
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-[#334155]">
              We help local service businesses build a professional online presence, show
              up on Google, and turn visitors into calls, quote requests, and booked
              appointments.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href="/free-audit" size="lg" withArrow>
                Get a Free Online Presence Audit
              </CTAButton>
              <CTAButton href="/services" variant="outline" size="lg">
                View Services
              </CTAButton>
            </div>
            <div className="mt-8">
              <TrustChips
                items={[
                  "Websites",
                  "Google Business Profile",
                  "Google Ads",
                  "Facebook Ads",
                  "Local SEO",
                  "Lead Tracking",
                ]}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="container-shell py-16">
        <AnimatedSection>
          <SectionHeading
            title="Your business may be great, but your online presence might be costing you customers."
            centered
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((item) => (
              <article
                key={item}
                className="rounded-2xl border border-[#1C768F]/20 bg-white p-5 shadow-sm"
              >
                <AlertTriangle className="h-5 w-5 text-[#FA991C]" />
                <p className="mt-3 font-medium text-[#032539]">{item}</p>
              </article>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="border-y border-[#1C768F]/10 bg-white py-16">
        <div className="container-shell">
          <AnimatedSection>
            <SectionHeading title="We build the full system, not just a website." centered />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-2xl border border-[#1C768F]/20 bg-[#F8FAFC] p-5 text-center"
                >
                  <pillar.icon className="mx-auto h-6 w-6 text-[#1C768F]" />
                  <p className="mt-3 font-semibold text-[#032539]">{pillar.title}</p>
                </article>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="container-shell py-16">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Packages"
            title="Simple packages built for real local business growth."
            centered
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <PackageCard key={pkg.name} pkg={pkg} highlight={index === 1} />
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="border-y border-[#1C768F]/10 bg-white py-16">
        <div className="container-shell">
          <AnimatedSection>
            <SectionHeading eyebrow="Industries" title="Who we help" centered />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => (
                <IndustryCard key={industry} label={industry} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="container-shell py-16">
        <AnimatedSection>
          <SectionHeading eyebrow="Case Studies" title="Early portfolio projects and builds" />
          <p className="mt-3 max-w-3xl text-[#334155]">
            These are starter portfolio and internal/demo project examples that show our
            process and execution approach. We avoid inflated or fake performance claims.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((item) => (
              <CaseStudyCard key={item.title} caseStudy={item} compact />
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="border-y border-[#1C768F]/10 bg-white py-16">
        <div className="container-shell">
          <AnimatedSection>
            <SectionHeading eyebrow="Process" title="Audit to Optimization" centered />
            <div className="mt-10">
              <ProcessSteps />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="container-shell py-16">
        <AnimatedSection>
          <div className="rounded-3xl bg-gradient-to-r from-[#032539] to-[#1C768F] p-8 text-white md:p-10">
            <h2 className="text-3xl font-bold tracking-tight">
              Want to know what your online presence is missing?
            </h2>
            <p className="mt-4 max-w-3xl text-white/90">
              Get a free review of your website, Google Business Profile, ads, and lead
              flow. We&apos;ll send you a simple action plan with the biggest fixes.
            </p>
            <div className="mt-7">
              <CTAButton href="/free-audit" variant="default" withArrow>
                Request Free Audit
              </CTAButton>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="container-shell py-16">
        <AnimatedSection>
          <SectionHeading eyebrow="FAQ" title="Common questions from local businesses" />
          <div className="mt-8 rounded-2xl border border-[#1C768F]/20 bg-white px-6">
            <FAQAccordion items={faqs} />
          </div>
        </AnimatedSection>
      </section>

      <section className="container-shell">
        <div className="rounded-2xl border border-[#1C768F]/20 bg-white p-6 text-center">
          <ShieldCheck className="mx-auto h-6 w-6 text-[#1C768F]" />
          <p className="mt-3 text-sm text-[#334155]">
            Get Found. Get Trusted. Get Booked. We focus on practical growth systems for
            local businesses that need measurable lead outcomes.
          </p>
        </div>
      </section>
    </div>
  );
}
