import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import ScrollReveal from "../components/ScrollReveal";
import {
  ecosystemLinks,
  founderPageUrl,
  founderSocialLinks,
  ogImagePath,
  siteUrl,
} from "../lib/ecosystem";

export const metadata: Metadata = {
  title: "Swarnadeep Mukherjee — Founder of UNENDLESS | Developer & Systems Architect",
  description:
    "Swarnadeep Mukherjee is the founder, developer, and systems architect behind UNENDLESS, Cynocyte, Cynocyte Systems, and Revisit. Building the future of interactive computing and AI from India.",
  alternates: {
    canonical: founderPageUrl,
  },
  keywords: [
    "Swarnadeep Mukherjee",
    "UNENDLESS founder",
    "Cynocyte founder",
    "indie developer India",
    "interactive computing India",
    "deep tech founder India",
    "Revisit app developer",
    "Flutter developer India",
    "AI app developer India",
  ],
  openGraph: {
    title: "Swarnadeep Mukherjee — Founder of UNENDLESS",
    description:
      "Founder and systems architect behind UNENDLESS, Cynocyte, and Revisit. Building interactive computing and AI platforms from India.",
    url: founderPageUrl,
    type: "profile",
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: "Swarnadeep Mukherjee - UNENDLESS Founder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swarnadeep Mukherjee — Founder of UNENDLESS",
    description:
      "Founder and systems architect behind UNENDLESS, Cynocyte, and Revisit. Building interactive computing and AI platforms from India.",
    images: [ogImagePath],
    creator: "@theswarnadeep_",
  },
};

const ecosystemItems = [
  {
    title: "UNENDLESS",
    description: "Parent holding company and deep-tech incubator",
    href: ecosystemLinks.unendless.website,
  },
  {
    title: "Cynocyte",
    description: "Primary subsidiary exploring interactive computing and AI",
    href: ecosystemLinks.cynocyte.website,
  },
  {
    title: "Cynocyte Systems",
    description: "Infrastructure and systems engineering division",
    href: ecosystemLinks.cynocyteSystems.website,
  },
  {
    title: "Revisit",
    description: "Student life manager for Android",
    href: "https://getrevisit.vercel.app",
  },
];

export default function FounderPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#founder`,
    name: "Swarnadeep Mukherjee",
    url: founderPageUrl,
    mainEntityOfPage: founderPageUrl,
    jobTitle: "Founder, Developer, and Systems Architect",
    description:
      "Swarnadeep Mukherjee is the founder, developer, and systems architect behind the UNENDLESS ecosystem. He builds experimental software, interactive AI platforms, and mobile applications including Revisit, a student life manager for Android.",
    nationality: { "@type": "Country", name: "India" },
    knowsAbout: [
      "Flutter development",
      "Artificial Intelligence",
      "Interactive Computing",
      "Android app development",
      "Groq API",
      "Software architecture",
      "Deep tech",
      "Mobile applications",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Developer and Technology Entrepreneur",
      occupationLocation: { "@type": "Country", name: "India" },
    },
    worksFor: { "@id": `${siteUrl}/#organization` },
    founder: { "@id": `${siteUrl}/#organization` },
    sameAs: [
      ecosystemLinks.founder.linkedin,
      ecosystemLinks.founder.x,
      ecosystemLinks.founder.instagram,
      ecosystemLinks.founder.threads,
      ecosystemLinks.founder.reddit,
    ],
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Swarnadeep Mukherjee",
        item: founderPageUrl,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center bg-black min-h-screen" style={{ backgroundColor: "#000000" }}>
      {/* JSON-LD Schema Tags */}
      <Script
        id="founder-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative w-full max-w-[1920px] flex flex-col items-center justify-center py-24 px-6 lg:py-32">
        <ScrollReveal className="flex flex-col items-center gap-4 text-center" delay={0}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight">
            Swarnadeep Mukherjee
          </h1>
        </ScrollReveal>

        <ScrollReveal className="mt-4" delay={100}>
          <h2 className="text-lg md:text-xl lg:text-2xl text-[var(--text-secondary)]">
            Founder · Developer · Systems Architect
          </h2>
        </ScrollReveal>

        <ScrollReveal className="mt-8 max-w-2xl" delay={200}>
          <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
            I'm the founder and systems architect behind UNENDLESS, a deep-tech holding company building experimental software and interactive computing systems. My work spans across Cynocyte (interactive AI platforms), Cynocyte Systems (infrastructure), and Revisit (student life management for Android). Based in India, I'm focused on building the next generation of digital products at the intersection of technology, design, and human experience.
          </p>
        </ScrollReveal>
      </section>

      {/* ── The Ecosystem Section ── */}
      <section className="relative w-full max-w-[1920px] px-6 py-16 lg:py-24">
        <ScrollReveal delay={0}>
          <div className="flex flex-col gap-2 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-cyan)]">
              Portfolio
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
              The Ecosystem
            </h3>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ecosystemItems.map((item, index) => (
            <ScrollReveal key={item.href} delay={200 + index * 100}>
              <Link href={item.href} target="_blank" rel="noopener noreferrer">
                <div
                  className="group relative p-6 lg:p-8 rounded-2xl border border-[var(--border-soft)] transition-all duration-300 hover:border-[var(--border-strong)] hover:bg-[var(--bg-soft)]"
                  style={{
                    backgroundColor: "var(--bg-panel)",
                  }}
                >
                  <div className="flex flex-col gap-3">
                    <h4 className="text-lg md:text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors">
                      {item.title} ↗
                    </h4>
                    <p className="text-sm md:text-base text-[var(--text-secondary)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Connect Section ── */}
      <section className="relative w-full max-w-[1920px] px-6 py-16 lg:py-24">
        <ScrollReveal delay={0}>
          <div className="flex flex-col gap-2 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-mint)]">
              Social
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
              Connect
            </h3>
            <p className="text-base text-[var(--text-secondary)] mt-2">
              Find me across the web
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-wrap gap-4">
          {founderSocialLinks.map((link, index) => (
            <ScrollReveal key={link.href} delay={200 + index * 80}>
              <a
                href={link.href}
                target="_blank"
                rel="me noopener noreferrer"
                className="px-6 py-3 rounded-lg border border-[var(--border-soft)] text-[var(--text-primary)] font-medium transition-all duration-300 hover:border-[var(--border-strong)] hover:bg-[var(--bg-soft)]"
                style={{
                  backgroundColor: "var(--bg-panel)",
                }}
              >
                {link.label} ↗
              </a>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Footer Spacer ── */}
      <div className="h-16" />
    </div>
  );
}
