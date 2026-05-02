import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";
import {
  ecosystemLinks,
  founderSocialLinks,
  ogImagePath,
  siteDescription,
  siteKeywords,
  siteUrl,
} from "./lib/ecosystem";

const ecosystemCards = [
  {
    title: "Cynocyte",
    description: "The interactive computing company. Pushing the frontier of browser-based AI.",
    href: ecosystemLinks.cynocyte.website,
    action: "Visit Website ↗",
  },
  {
    title: "Cynocyte Systems",
    description: "The hardcore engineering and infrastructure engine powering our interactive web ecosystems.",
    href: ecosystemLinks.cynocyteSystems.website,
    action: "Visit Website ↗",
  },
  {
    title: "Revisit",
    description: "Student life manager for Android. Organizing routines and academic planning.",
    href: "/revisit",
    action: "Learn More ↗",
    isInternal: true,
  },
  {
    title: "UNENDLESS Studios",
    description: "Currently in stealth. Exploring the intersection of digital entertainment, media, and interactive storytelling.",
    isRestricted: true,
    action: "In Incubation 🔒",
  },
] as const;

export const metadata: Metadata = {
  title: {
    absolute: "Swarnadeep Mukherjee's UNENDLESS — Deep-Tech Incubator & Holding Company",
  },
  description: "UNENDLESS, founded by Swarnadeep Mukherjee, is a deep-tech incubator and holding company building interactive AI computing, Cynocyte, and the Revisit Android app. Based in India.",
  keywords: siteKeywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "UNENDLESS | Deep-Tech Incubator & Holding Company",
    description: "UNENDLESS, founded by Swarnadeep Mukherjee, is a deep-tech incubator and holding company building interactive AI computing, Cynocyte, and the Revisit Android app. Based in India.",
    url: siteUrl,
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: "UNENDLESS ecosystem banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UNENDLESS | Deep-Tech Incubator & Holding Company",
    description: "UNENDLESS, founded by Swarnadeep Mukherjee, is a deep-tech incubator and holding company building interactive AI computing, Cynocyte, and the Revisit Android app. Based in India.",
    images: [ogImagePath],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-black" style={{ backgroundColor: '#000000' }}>
      {/* ── Hero: Full-bleed banner ── */}
      <section className="relative flex h-screen w-full max-w-[1920px] flex-col items-center justify-center overflow-hidden" aria-label="UNENDLESS banner">
        <div className="w-full">
          <Image
            src="/unendlessbanner.jpg"
            alt="UNENDLESS — Deep-Tech Incubator and Holding Company banner"
            width={1920}
            height={630}
            priority
            className="banner-image block h-auto w-full"
            sizes="100vw"
          />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 flex animate-bounce flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">
          <span>Scroll to see more</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Visible Title Section ── */}
      <ScrollReveal className="w-full px-6 py-16 text-center sm:py-20 lg:py-24">
        <h1 className="display-title text-gradient text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
          UNENDLESS
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-[var(--text-secondary)]">
          Founded by Swarnadeep Mukherjee · Deep-Tech Incubator · Holding Company
        </p>
      </ScrollReveal>

      {/* ── Intro Text ── */}
      <ScrollReveal className="w-full px-6 py-24 text-center">
        <p className="mx-auto max-w-2xl text-[1.1rem] leading-relaxed text-[var(--text-secondary)] sm:text-[1.25rem]">
          Shaping what comes next. A global holding company and<br className="hidden sm:block" />
          venture incubator.
        </p>
      </ScrollReveal>

      {/* ── Who We Are Section ── */}
      <ScrollReveal delay={100} className="w-full px-6 py-16 text-center sm:py-20">
        <div className="mx-auto max-w-2xl">
          <p className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-cyan)]">
            WHO WE ARE
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] mb-6">
            UNENDLESS is a founder-led holding company and deep-tech incubator based in India, building at the intersection of interactive computing and artificial intelligence. Founded by Swarnadeep Mukherjee, the ecosystem spans Cynocyte — an experimental AI and browser-based computing platform — Cynocyte Systems for infrastructure engineering, and Revisit, a student life manager for Android.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
            Our approach mirrors the structure of conglomerates like Alphabet: a parent company that incubates and holds distinct ventures, each with its own identity and mission, unified by a shared founder vision.
          </p>
        </div>
      </ScrollReveal>

      {/* ── Ecosystem Links ── */}
      <ScrollReveal delay={200} className="w-full">
        <section
          id="ecosystem"
          className="relative z-10 w-full px-4 pb-24 sm:px-6 lg:px-10"
          aria-label="Ecosystem directory"
        >
          <div className="mx-auto max-w-6xl">
            <p className="mb-6 text-left text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
              THE ECOSYSTEM
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {ecosystemCards.map((card, index) => {
                const hasLink = "href" in card && card.href;
                const isRestricted = "isRestricted" in card && card.isRestricted;
                const isInternal = "isInternal" in card && card.isInternal;

                const inner = (
                  <div className="flex h-full flex-col p-6">
                    <div className="flex items-start justify-between">
                      <h2 className="text-xl font-semibold tracking-[-0.03em] text-[var(--text-primary)]">
                        {card.title}
                      </h2>
                      {isRestricted && (
                        <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-[var(--text-secondary)]">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                          Restricted
                        </span>
                      )}
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {card.description}
                    </p>

                    <div className={`mt-auto pt-8 text-sm font-medium ${isRestricted ? "text-[var(--text-primary)]" : "text-[var(--accent-cyan)]"}`}>
                      {card.action}
                    </div>
                  </div>
                );

                const cardClasses = `flex h-full flex-col rounded-2xl border border-white/10 bg-[#050505] transition-colors duration-300 hover:bg-[#0a0a0a]`;

                if (hasLink) {
                  if (isInternal) {
                    return (
                      <Link
                        key={card.title}
                        href={card.href}
                        className={cardClasses}
                      >
                        {inner}
                      </Link>
                    );
                  }
                  return (
                    <a
                      key={card.title}
                      href={card.href}
                      target="_blank"
                      rel="noreferrer"
                      className={cardClasses}
                    >
                      {inner}
                    </a>
                  );
                }

                return (
                  <div key={card.title} className={cardClasses}>
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hidden SEO keyword block */}
          <div className="sr-only" aria-hidden="true">
            <p>
              UNENDLESS holding company deep-tech incubator Swarnadeep Mukherjee
              founder Cynocyte interactive computing artificial intelligence
              Cynocyte Systems infrastructure engineering Revisit student life
              manager Android Unendless Studios India technology startup
              ecosystem parent company subsidiary software products digital
              infrastructure Swarnadeep Mukherjee founder UNENDLESS Cynocyte India
              interactive computing AI Flutter Android developer Revisit student app
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ── Founder Card Section ── */}
      <ScrollReveal delay={400} className="w-full px-6 py-20 sm:py-24">
        <section className="mx-auto max-w-2xl">
          <p className="mb-12 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-mint)] text-center">
            FOUNDED BY
          </p>
          
          <div className="glass-panel rounded-2xl p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
              Swarnadeep Mukherjee
            </h2>
            <p className="mt-2 text-lg text-[var(--text-muted)]">
              Founder · Developer · Systems Architect
            </p>
            
            <p className="mt-6 text-base leading-relaxed text-[var(--text-secondary)]">
              Building interactive computing systems, AI platforms, and mobile software from India.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {founderSocialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-link"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/founder"
                className="button-primary inline-flex"
              >
                Full Profile →
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
