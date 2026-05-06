export type CaseStudy = {
  title: string;
  category: string;
  description: string;
  challenge: string;
  built: string[];
  value: string;
  tools: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Local Tech Support Website Launch",
    category: "Local Service Business",
    description:
      "A home tech support brand needed a clearer way to present services, pricing, booking, and trust to local customers.",
    challenge:
      "The service offer and booking journey were difficult to understand, which made it harder for local customers to request help quickly.",
    built: [
      "Conversion-focused website",
      "Service package structure",
      "Booking flow",
      "Payment-ready customer journey",
      "Google Business profile copy",
      "CTA and trust sections",
    ],
    value:
      "Created a more professional online presence and made it easier for customers to understand services and request help.",
    tools: [
      "Website",
      "Calendly",
      "Stripe/Square-ready flow",
      "Google Business Profile",
      "SEO copy",
    ],
  },
  {
    title: "Mobile Service Brand Optimization",
    category: "Mobile Local Service",
    description:
      "A mobile service business had overlapping sections, unclear service flow, and weak mobile UX.",
    challenge:
      "Mobile traffic was high, but the old layout caused confusion and made the path from interest to booking inconsistent.",
    built: [
      "Cleaner homepage structure",
      "Better package presentation",
      "Improved booking CTA flow",
      "Mobile-first layout feedback",
      "Trust and conversion improvements",
    ],
    value:
      "Reduced confusion, clarified the offer, and improved the customer path from interest to booking.",
    tools: ["Website UX", "Service packages", "Mobile optimization", "Booking flow"],
  },
  {
    title: "Student Marketplace Platform",
    category: "Full-Stack Web Platform",
    description:
      "A marketplace concept needed a more enterprise-style platform with listings, profiles, messages, admin trust features, and deployed frontend/backend.",
    challenge:
      "The project needed a complete architecture from interface to API with practical deployment and trust-focused admin workflows.",
    built: [
      "React/TypeScript frontend",
      "Flask API backend",
      "Listing detail API integration",
      "Profile pages",
      "Admin trust dashboard",
      "Netlify frontend deployment",
      "Render backend deployment",
    ],
    value:
      "Demonstrated ability to plan, build, connect, and deploy a full web platform beyond simple brochure websites.",
    tools: ["React", "TypeScript", "Flask", "Netlify", "Render", "API integration"],
  },
];
