export type CaseStudy = {
  title: string;
  description: string;
  challenge: string;
  built: string;
  value: string;
  tools: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Local Tech Support Website Launch",
    description:
      "Built a local service website with booking, service packages, payment flow, Google Business copy, and conversion-focused CTAs.",
    challenge:
      "The service offering was unclear online and the booking journey required too many steps.",
    built:
      "A clean service website with structured package sections, booking flow, payment path integration, and trust-focused local copy.",
    value:
      "Created a clear customer path from first visit to booking request while improving credibility for local search visitors.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Form integrations", "Google Business copy"],
  },
  {
    title: "Mobile Service Brand Optimization",
    description:
      "Improved mobile layout, service-package clarity, booking flow, and customer decision path for a local mobile service business.",
    challenge:
      "Most traffic came from mobile, but the old experience made it difficult to understand services and request a booking.",
    built:
      "A mobile-first interface with stronger section hierarchy, streamlined package presentation, and clearer action buttons.",
    value:
      "Reduced friction for mobile visitors and made it easier for prospects to move from browsing to contacting.",
    tools: ["UX audit", "Landing page optimization", "Conversion copywriting", "CTA testing"],
  },
  {
    title: "Student Marketplace Platform",
    description:
      "Built and deployed a full-stack marketplace concept using React, Flask, Netlify, and Render.",
    challenge:
      "Needed a practical MVP that could support listings, user flow experiments, and production deployment quickly.",
    built:
      "A full-stack prototype with frontend marketplace views, backend API workflows, and cloud deployment setup.",
    value:
      "Demonstrated end-to-end product execution and rapid iteration capability for digital platform builds.",
    tools: ["React", "Flask", "Netlify", "Render", "REST APIs"],
  },
];
