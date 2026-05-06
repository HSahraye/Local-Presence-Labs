export type PackageItem = {
  name: string;
  price: string;
  tagline: string;
  includes: string[];
  ctaLabel: string;
};

export const packages: PackageItem[] = [
  {
    name: "Starter Presence",
    price: "Starting at $799",
    tagline: "For businesses that need a clean online foundation.",
    includes: [
      "5-page website",
      "Mobile responsive design",
      "Contact form",
      "Click-to-call/text buttons",
      "Basic SEO",
      "Google Business Profile link",
      "Analytics setup",
    ],
    ctaLabel: "Get Starter Presence",
  },
  {
    name: "Growth Launch",
    price: "Starting at $1,500",
    tagline: "For businesses ready to generate leads.",
    includes: [
      "Website or landing page",
      "Google Business Profile optimization",
      "Local SEO setup",
      "Google Ads or Meta Ads setup",
      "Conversion tracking",
      "Review request system",
      "30-day launch support",
    ],
    ctaLabel: "Get Growth Launch",
  },
  {
    name: "Monthly Growth Partner",
    price: "Starting at $750/month",
    tagline: "For businesses that want ongoing growth.",
    includes: [
      "Website updates",
      "Google Ads management",
      "Meta Ads management",
      "Google Business posts",
      "SEO improvements",
      "Lead tracking",
      "Monthly performance report",
    ],
    ctaLabel: "Become a Growth Partner",
  },
];
