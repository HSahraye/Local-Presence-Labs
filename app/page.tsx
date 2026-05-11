import type { Metadata } from "next";
import type { SVGProps } from "react";
import {
  BadgeCheck,
  BriefcaseBusiness,
  CalendarClock,
  ChartNoAxesColumnIncreasing,
  CircleCheckBig,
  HeartPulse,
  Home,
  Search,
  ShieldCheck,
  Sparkles,
  UserRound,
  Wrench,
} from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { BackgroundGrid } from "@/components/background-grid";
import { BentoGrid } from "@/components/bento-grid";
import { BeforeAfterPanel } from "@/components/before-after-panel";
import { CTAButton } from "@/components/cta-button";
import { CTASection } from "@/components/cta-section";
import { EnhancedCaseStudyCard } from "@/components/enhanced-case-study-card";
import { EnhancedPackageCard } from "@/components/enhanced-package-card";
import { FAQAccordion } from "@/components/faq-accordion";
import { FloatingCard } from "@/components/floating-card";
import { GradientBlob } from "@/components/gradient-blob";
import { IndustryCard } from "@/components/industry-card";
import { Scorecard } from "@/components/scorecard";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { SectionHeading } from "@/components/section-heading";
import { Spotlight } from "@/components/spotlight";
import { TimelineProcess } from "@/components/timeline-process";
import { TrustChips } from "@/components/trust-chips";
import { caseStudies } from "@/data/caseStudies";
import { faqs } from "@/data/faqs";
import { industryGroups } from "@/data/industries";
import { packages } from "@/data/packages";

const bentoItems = [
  {
    title: "Website that converts",
    description: "Clear messaging, modern design, and conversion-focused calls to action.",
    icon: Home,
  },
  {
    title: "Google visibility",
    description: "Stronger map and local search presence through profile and SEO improvements.",
    icon: Search,
  },
  {
    title: "Ads that send traffic to the right page",
    description: "Campaigns and landing experiences aligned around lead generation.",
    icon: ChartNoAxesColumnIncreasing,
  },
  {
    title: "Review and trust signals",
    description: "Reputation systems and trust-building sections that reduce buyer hesitation.",
    icon: ShieldCheck,
  },
  {
    title: "Lead tracking",
    description: "Track calls, forms, and quote requests so decisions are backed by data.",
    icon: CircleCheckBig,
  },
  {
    title: "Booking and follow-up systems",
    description: "Simple workflows to capture leads and move prospects into appointments.",
    icon: CalendarClock,
  },
];

const scoreItems = [
  { label: "Website clarity", score: 48 },
  { label: "Mobile experience", score: 56 },
  { label: "Google Business Profile", score: 41 },
  { label: "Local SEO", score: 39 },
  { label: "Reviews", score: 45 },
  { label: "Paid ads", score: 34 },
  { label: "Lead tracking", score: 29 },
  { label: "Follow-up system", score: 32 },
];

const trustCards = [
  "Clear pricing ranges",
  "Local business focus",
  "Website + Google + ads together",
  "Honest project examples",
  "Conversion-first builds",
  "Tracking-ready setup",
];

const industryIcons = [Wrench, UserRound, CarIcon, BriefcaseBusiness, UtensilsIcon, HeartPulse];

export const metadata: Metadata = {
  title:
    "Presence Labs | Websites, Google Ads & Local SEO for Local Businesses",
  description:
    "Presence Labs helps local service businesses build professional websites, improve Google visibility, run ads, and turn visitors into calls, quote requests, and booked appointments.",
};

export default function HomePage() {
  return (
    <div className="pb-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1220] via-[#0F172A] to-[#1E1B4B] py-16 text-white md:py-24">
        <BackgroundGrid />
        <Spotlight className="-top-16" />
        <GradientBlob className="-left-8 top-16 h-44 w-44" />
        <GradientBlob className="bottom-8 right-8 h-40 w-40" color="from-[#7C3AED]/30 to-[#7C3AED]/20" />
        <div className="container-shell relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <AnimatedSection>
            <SectionEyebrow className="border-[#3B82F6]/40 bg-[#3B82F6]/15 text-[#DBEAFE]">
              Online presence systems for local businesses
            </SectionEyebrow>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              Get Found, Trusted, and Booked Online
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/85">
              We help local service businesses build a professional website, improve Google
              visibility, run smarter ads, and turn visitors into real leads.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href="/free-audit" size="lg" withArrow>
                Get a Free Online Presence Audit
              </CTAButton>
              <CTAButton href="/packages" variant="outline" size="lg" className="border-white/30 bg-white/5 text-white hover:bg-white/10">
                See Packages
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
          <AnimatedSection>
            <div className="grid gap-3 sm:grid-cols-2">
              <FloatingCard label="Website Audit" icon={BadgeCheck} delay={0.05} />
              <FloatingCard label="Google Visibility" icon={Search} delay={0.1} />
              <FloatingCard label="Lead Tracking" icon={ChartNoAxesColumnIncreasing} delay={0.15} />
              <FloatingCard label="Review Requests" icon={ShieldCheck} delay={0.2} />
              <FloatingCard label="Booked Appointments" icon={CalendarClock} delay={0.25} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="container-shell py-16 md:py-20">
        <AnimatedSection>
          <SectionHeading
            eyebrow="System"
            title="The full online presence system your business actually needs"
            description="Most local businesses do not need more random marketing tasks. They need a connected system that turns visibility into booked work."
          />
          <div className="mt-8">
            <BentoGrid items={bentoItems} />
          </div>
        </AnimatedSection>
      </section>

      <section className="container-shell py-4 md:py-8">
        <AnimatedSection>
          <Scorecard items={scoreItems} />
        </AnimatedSection>
      </section>

      <section className="container-shell py-16">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Packages"
            title="Choose the growth model that fits your current stage"
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <EnhancedPackageCard key={pkg.name} pkg={pkg} index={index} popular={index === 1} />
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="container-shell py-4 md:py-8">
        <AnimatedSection>
          <CTASection />
        </AnimatedSection>
      </section>

      <section className="container-shell py-16">
        <AnimatedSection>
          <BeforeAfterPanel />
        </AnimatedSection>
      </section>

      <section className="container-shell py-16">
        <AnimatedSection>
          <SectionHeading eyebrow="Process" title="From audit to optimization with clear milestones" />
          <div className="mt-8">
            <TimelineProcess />
          </div>
        </AnimatedSection>
      </section>

      <section className="container-shell py-16">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Case Studies"
            title="Selected Builds & Growth Systems"
            description="Real builds, platforms, and local business systems showing how we think through online presence, booking flow, trust, and conversion."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((item) => (
              <EnhancedCaseStudyCard key={item.title} caseStudy={item} />
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="container-shell py-16">
        <AnimatedSection>
          <SectionHeading eyebrow="Industries" title="Who we support" />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {industryGroups.map((group, index) => (
              <IndustryCard
                key={group.group}
                label={group.group}
                items={group.items}
                icon={industryIcons[index] ?? Wrench}
              />
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="container-shell py-16">
        <AnimatedSection>
          <div className="rounded-3xl border border-[#3B82F6]/20 bg-white p-7 shadow-sm md:p-8">
            <SectionHeading
              eyebrow="Trust"
              title="Built for businesses that need practical growth, not marketing fluff."
            />
            <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {trustCards.map((item) => (
                <div key={item} className="rounded-xl border border-[#3B82F6]/15 bg-[#F8FAFC] p-4 text-sm font-medium text-[#0F172A]">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#334155]">
              No fake guarantees. No confusing retainers. Just a practical plan to improve
              how customers find, trust, and contact your business.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section className="container-shell py-4 md:py-8">
        <AnimatedSection>
          <CTASection />
        </AnimatedSection>
      </section>

      <section className="container-shell py-16">
        <AnimatedSection>
          <SectionHeading eyebrow="FAQ" title="Common questions from local businesses" />
          <div className="mt-8 rounded-2xl border border-[#3B82F6]/20 bg-white px-6">
            <FAQAccordion items={faqs} />
          </div>
          <div className="mt-8 rounded-2xl border border-[#3B82F6]/20 bg-white p-6 text-center">
            <Sparkles className="mx-auto h-5 w-5 text-[#3B82F6]" />
            <p className="mt-3 text-sm text-[#334155]">
              Get Found. Get Trusted. Get Booked. A connected local growth system beats one-off tactics.
            </p>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}

function CarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M3 13l2-5h14l2 5M5 13h14M6 18h.01M18 18h.01M4 13v5h2M18 18h2v-5" />
    </svg>
  );
}

function UtensilsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M3 2v7a4 4 0 0 0 8 0V2M7 2v20M14 2h1a4 4 0 0 1 4 4v16" />
    </svg>
  );
}
