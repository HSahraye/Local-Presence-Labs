import type { Metadata } from "next";

import { CaseStudyCard } from "@/components/case-study-card";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Review honest starter case studies and project examples from Local Presence Labs.",
};

export default function CaseStudiesPage() {
  return (
    <div className="container-shell py-16">
      <SectionHeading
        eyebrow="Case Studies"
        title="Real builds and portfolio projects."
        description="These projects represent internal, demo, and portfolio work. We focus on honest execution details and practical business value."
      />
      <div className="mt-10 grid gap-6">
        {caseStudies.map((item) => (
          <CaseStudyCard key={item.title} caseStudy={item} />
        ))}
      </div>
    </div>
  );
}
