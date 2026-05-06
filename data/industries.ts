export type IndustryGroup = {
  group: string;
  items: string[];
};

export const industryGroups: IndustryGroup[] = [
  {
    group: "Home services",
    items: ["Cleaning companies", "Handymen", "HVAC, plumbing, electrical", "Home tech services"],
  },
  {
    group: "Personal services",
    items: ["Mobile detailers", "Barbers and salons", "Tutors and coaches"],
  },
  {
    group: "Auto services",
    items: ["Auto repair", "Mobile detailing and care"],
  },
  {
    group: "Local professionals",
    items: ["Local professional services", "Specialized service providers"],
  },
  {
    group: "Food and hospitality",
    items: ["Restaurants and food trucks", "Local hospitality concepts"],
  },
  {
    group: "Health and wellness",
    items: ["Dentists and clinics", "Private wellness practices"],
  },
];
