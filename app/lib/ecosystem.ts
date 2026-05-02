export const siteName = "UNENDLESS";
export const siteUrl = "https://unendless.vercel.app";
export const founderPageUrl = `${siteUrl}/founder`;
export const siteDescription =
  "UNENDLESS is a holding company and deep-tech incubator building experimental software, interactive computing systems, and founder-led digital infrastructure.";
export const ogImagePath = "/unendlessbanner.jpg";

export type ExternalLink = {
  href: string;
  label: string;
};

export type DirectorySection = {
  description: string;
  links: ExternalLink[];
  title: string;
  website: string;
};

type SchemaReference = {
  "@id": string;
};

type OrganizationSchema = {
  "@id": string;
  "@type": "Organization";
  department?: SchemaReference[];
  description?: string;
  founder?: SchemaReference;
  foundingDate?: string;
  name: string;
  owns?: SchemaReference[];
  parentOrganization?: SchemaReference;
  sameAs?: string[];
  subOrganization?: SchemaReference[];
  url: string;
};

type PersonSchema = {
  "@id": string;
  "@type": "Person";
  description: string;
  jobTitle: string;
  mainEntityOfPage?: string;
  name: string;
  sameAs: string[];
  url: string;
  worksFor?: SchemaReference;
};

type OfferSchema = {
  "@type": "Offer";
  availability: "https://schema.org/InStock";
  description: string;
  name: string;
  price: string;
  priceCurrency: "INR";
};

type SoftwareApplicationSchema = {
  "@id": string;
  "@type": ["MobileApplication", "SoftwareApplication"];
  applicationCategory: string;
  creator: SchemaReference;
  description: string;
  featureList: string[];
  name: string;
  offers: OfferSchema[];
  operatingSystem: string;
};

type KnowledgeGraphSchema = {
  "@context": "https://schema.org";
  "@graph": Array<OrganizationSchema | PersonSchema | SoftwareApplicationSchema>;
};

export const ecosystemLinks = {
  cynocyte: {
    instagram: "https://www.instagram.com/cynocyte/",
    instagramIndia: "https://www.instagram.com/cynocyteindia/",
    reddit: "https://www.reddit.com/user/cynocyte/",
    threads: "https://www.threads.net/@cynocyte",
    website: "https://cynocyte.vercel.app/",
    x: "https://x.com/cynocyte",
    youtube: "https://www.youtube.com/@cynocyte",
  },
  cynocyteSystems: {
    instagram: "https://www.instagram.com/cynocytesystems/",
    website: "https://cynocyte.vercel.app/systems",
  },
  founder: {
    instagram: "https://www.instagram.com/theswarnadeep_/",
    linkedin:
      "https://www.linkedin.com/in/swarnadeepmukherjee-unendless/",
    reddit: "https://www.reddit.com/user/SwarnadeepMukherjee/",
    threads: "https://www.threads.net/@theswarnadeep_",
    x: "https://x.com/theswarnadeep_",
  },
  unendless: {
    instagram: "https://www.instagram.com/unendless.global/",
    website: siteUrl,
  },
} as const;

export const revisitFeatureList = [
  "Schedule management",
  "Task tracking",
  "Study planning",
  "Student routine organization",
] as const;

export const founderSocialLinks: ExternalLink[] = [
  { label: "LinkedIn", href: ecosystemLinks.founder.linkedin },
  { label: "X", href: ecosystemLinks.founder.x },
  { label: "Instagram", href: ecosystemLinks.founder.instagram },
  { label: "Threads", href: ecosystemLinks.founder.threads },
  { label: "Reddit", href: ecosystemLinks.founder.reddit },
];

export const footerDirectory: DirectorySection[] = [
  {
    title: "UNENDLESS",
    description: "Parent company",
    website: ecosystemLinks.unendless.website,
    links: [
      { label: "Website", href: ecosystemLinks.unendless.website },
      { label: "Instagram", href: ecosystemLinks.unendless.instagram },
    ],
  },
  {
    title: "Cynocyte",
    description: "Primary subsidiary",
    website: ecosystemLinks.cynocyte.website,
    links: [
      { label: "Website", href: ecosystemLinks.cynocyte.website },
      { label: "Instagram", href: ecosystemLinks.cynocyte.instagram },
      { label: "India", href: ecosystemLinks.cynocyte.instagramIndia },
      { label: "X", href: ecosystemLinks.cynocyte.x },
      { label: "Threads", href: ecosystemLinks.cynocyte.threads },
      { label: "YouTube", href: ecosystemLinks.cynocyte.youtube },
      { label: "Reddit", href: ecosystemLinks.cynocyte.reddit },
    ],
  },
  {
    title: "Cynocyte Systems",
    description: "Sub-division",
    website: ecosystemLinks.cynocyteSystems.website,
    links: [
      { label: "Website", href: ecosystemLinks.cynocyteSystems.website },
      { label: "Instagram", href: ecosystemLinks.cynocyteSystems.instagram },
    ],
  },
  {
    title: "Swarnadeep Mukherjee",
    description: "Founder",
    website: founderPageUrl,
    links: [
      { label: "Profile", href: founderPageUrl },
      { label: "LinkedIn", href: ecosystemLinks.founder.linkedin },
      { label: "X", href: ecosystemLinks.founder.x },
      { label: "Instagram", href: ecosystemLinks.founder.instagram },
      { label: "Threads", href: ecosystemLinks.founder.threads },
      { label: "Reddit", href: ecosystemLinks.founder.reddit },
    ],
  },
];

export const siteKeywords = [
  "UNENDLESS",
  "Swarnadeep Mukherjee",
  "deep-tech incubator India",
  "holding company India",
  "interactive computing",
  "artificial intelligence India",
  "Cynocyte",
  "Cynocyte Systems",
  "Revisit app",
  "student life manager Android",
  "Flutter developer India",
  "indie developer India",
  "browser-based AI",
  "experimental software India",
  "founder-led tech company India",
  "Swarnadeep Mukherjee UNENDLESS",
  "Swarnadeep Mukherjee Cynocyte",
  "Revisit student app Android India",
];

const schemaIds = {
  cynocyte: `${ecosystemLinks.cynocyte.website}#organization`,
  cynocyteSystems: `${ecosystemLinks.cynocyteSystems.website}#organization`,
  founder: `${siteUrl}/#founder`,
  revisit: `${siteUrl}/#revisit`,
  unendless: `${siteUrl}/#organization`,
} as const;

export const founderPersonSchema: PersonSchema = {
  "@id": schemaIds.founder,
  "@type": "Person",
  name: "Swarnadeep Mukherjee",
  url: founderPageUrl,
  jobTitle: "Founder, Developer, and Systems Architect of UNENDLESS",
  description:
    "Swarnadeep Mukherjee is the founder, developer, and systems architect behind the UNENDLESS ecosystem and its connected ventures.",
  knowsAbout: [
    "Flutter",
    "Artificial Intelligence",
    "Interactive Computing",
    "Android Development",
    "Groq API",
    "Software Architecture",
    "Mobile App Development",
    "Deep Tech",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Software Developer and Technology Entrepreneur",
    occupationLocation: { "@type": "Country", name: "India" },
  },
  sameAs: [
    ecosystemLinks.founder.linkedin,
    ecosystemLinks.founder.x,
    ecosystemLinks.founder.instagram,
    ecosystemLinks.founder.threads,
    ecosystemLinks.founder.reddit,
  ],
  worksFor: { "@id": schemaIds.unendless },
  mainEntityOfPage: founderPageUrl,
};

const cynocyteSystemsSchema: OrganizationSchema = {
  "@id": schemaIds.cynocyteSystems,
  "@type": "Organization",
  name: "Cynocyte Systems",
  url: ecosystemLinks.cynocyteSystems.website,
  description:
    "Cynocyte Systems is the infrastructure and systems sub-division within the broader Cynocyte organization.",
  sameAs: [ecosystemLinks.cynocyteSystems.instagram],
  parentOrganization: { "@id": schemaIds.cynocyte },
};

const cynocyteSchema: OrganizationSchema = {
  "@id": schemaIds.cynocyte,
  "@type": "Organization",
  name: "Cynocyte",
  url: ecosystemLinks.cynocyte.website,
  description:
    "Cynocyte is the primary UNENDLESS subsidiary focused on experimental AI platforms and interactive computing systems.",
  sameAs: [
    ecosystemLinks.cynocyte.instagram,
    ecosystemLinks.cynocyte.instagramIndia,
    ecosystemLinks.cynocyte.x,
    ecosystemLinks.cynocyte.threads,
    ecosystemLinks.cynocyte.youtube,
    ecosystemLinks.cynocyte.reddit,
  ],
  parentOrganization: { "@id": schemaIds.unendless },
  department: [{ "@id": schemaIds.cynocyteSystems }],
};

const revisitSchema: SoftwareApplicationSchema = {
  "@id": schemaIds.revisit,
  "@type": ["MobileApplication", "SoftwareApplication"],
  name: "Revisit",
  applicationCategory: "EducationApplication / Student Life Manager",
  operatingSystem: "Android",
  description:
    "Revisit is a student life manager for Android that helps organize study routines, tasks, and academic planning.",
  creator: { "@id": schemaIds.unendless },
  featureList: [...revisitFeatureList],
  offers: [
    {
      "@type": "Offer",
      name: "Revisit Free",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      description: "Free Android version of Revisit.",
    },
    {
      "@type": "Offer",
      name: "Revisit Pro",
      price: "99",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      description: "Paid Android version of Revisit.",
    },
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://unendless.vercel.app/#website",
  url: siteUrl,
  name: "UNENDLESS",
  description:
    "UNENDLESS is a holding company and deep-tech incubator founded by Swarnadeep Mukherjee, building interactive computing, AI platforms, and software products from India.",
  publisher: { "@id": schemaIds.unendless },
  inLanguage: "en-US",
};

export const unendlessKnowledgeGraph: KnowledgeGraphSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@id": schemaIds.unendless,
      "@type": ["Organization", "Corporation"],
      name: "UNENDLESS",
      url: ecosystemLinks.unendless.website,
      description:
        "UNENDLESS is a holding company and deep-tech incubator focused on interactive computing, software products, and connected digital infrastructure.",
      foundingDate: "2024",
      areaServed: { "@type": "Country", name: "India" },
      logo: {
        "@type": "ImageObject",
        url: "https://unendless.vercel.app/unendlessbanner.jpg",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        availableLanguage: ["English"],
      },
      sameAs: [ecosystemLinks.unendless.instagram],
      founder: { "@id": schemaIds.founder },
      subOrganization: [{ "@id": schemaIds.cynocyte }],
      owns: [{ "@id": schemaIds.revisit }],
    },
    founderPersonSchema,
    cynocyteSchema,
    cynocyteSystemsSchema,
    revisitSchema,
  ],
};
