import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "./components/ScrollReveal";
import {
  ecosystemLinks,
  ogImagePath,
  siteDescription,
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
    href: "https://getrevisit.vercel.app",
    action: "Visit Website ↗",
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
    absolute: "UNENDLESS | Deep-Tech Incubator & Holding Company",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "UNENDLESS | Deep-Tech Incubator & Holding Company",
    description: siteDescription,
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
    description: siteDescription,
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

        {/* Hidden SEO content */}
        <h1 className="sr-only">
          UNENDLESS — Deep-Tech Incubator and Holding Company. A founder-led
          holding structure for ventures in interactive computing, artificial
          intelligence, software products, and connected digital
          infrastructure. Founded by Swarnadeep Mukherjee.
        </h1>
      </section>

      {/* ── Intro Text ── */}
      <ScrollReveal className="w-full px-6 py-24 text-center">
        <p className="mx-auto max-w-2xl text-[1.1rem] leading-relaxed text-[var(--text-secondary)] sm:text-[1.25rem]">
          Shaping what comes next. A global holding company and<br className="hidden sm:block" />
          venture incubator.
        </p>
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
              infrastructure
            </p>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
