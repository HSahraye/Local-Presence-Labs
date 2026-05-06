export type ServiceGroup = {
  title: string;
  description: string;
  deliverables: string[];
  bestFor: string;
};

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Website & Landing Pages",
    description:
      "Conversion-focused websites and landing pages that make your business look trustworthy and guide visitors toward calls, quote requests, and appointments.",
    deliverables: [
      "High-converting website pages",
      "Mobile-first responsive design",
      "Click-to-call, text, and booking CTAs",
      "Fast-loading layouts with clear service messaging",
      "Form setup and lead capture flow",
    ],
    bestFor:
      "Businesses with an outdated website, no website, or pages that are not turning traffic into leads.",
  },
  {
    title: "Google Visibility",
    description:
      "Local search improvements that help your business appear more often when nearby customers search for your services.",
    deliverables: [
      "Google Business Profile optimization",
      "Service-area and category cleanup",
      "Local SEO foundation setup",
      "On-page SEO improvements",
      "Review request strategy and profile trust signals",
    ],
    bestFor:
      "Service businesses that want stronger map visibility, better local rankings, and more inbound calls from Google.",
  },
  {
    title: "Paid Ads",
    description:
      "Practical paid traffic campaigns focused on generating quality leads, not vanity metrics.",
    deliverables: [
      "Google Ads campaign setup and management",
      "Facebook and Instagram ad setup and management",
      "Offer and audience strategy",
      "Landing page and ad alignment",
      "Ad conversion tracking setup",
    ],
    bestFor:
      "Businesses ready to grow faster with paid acquisition and a clear lead-generation process.",
  },
  {
    title: "Lead Systems & Automation",
    description:
      "Simple systems that help you track leads, respond faster, and follow up consistently without overcomplicated tools.",
    deliverables: [
      "Lead tracking setup",
      "Booking and contact form setup",
      "Review request system",
      "Basic follow-up automation",
      "Simple reporting visibility",
    ],
    bestFor:
      "Businesses that are getting leads but missing opportunities due to slow response, weak follow-up, or no tracking.",
  },
];
