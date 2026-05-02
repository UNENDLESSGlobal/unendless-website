import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import ScrollReveal from "../components/ScrollReveal";
import {
  ecosystemLinks,
  ogImagePath,
  siteUrl,
  revisitFeatureList,
} from "../lib/ecosystem";

export const metadata: Metadata = {
  title: "Revisit — Student Life Manager for Android | Built by UNENDLESS",
  description:
    "Revisit is a free Android app for students that manages study routines, schedules, tasks, alarms, AI chat, Google Calendar sync, and academic planning. Built by UNENDLESS and Cynocyte.",
  keywords: [
    "Revisit",
    "student life manager Android",
    "student planner Android India",
    "academic planning app",
    "study routine app India",
    "Flutter student app",
    "AI study app Android",
    "free student app India",
    "Revisit UNENDLESS",
  ],
  alternates: {
    canonical: `${siteUrl}/revisit`,
  },
  openGraph: {
    title: "Revisit — Student Life Manager for Android",
    description:
      "Revisit is a free Android app for students that manages study routines, schedules, tasks, alarms, AI chat, Google Calendar sync, and academic planning.",
    url: `${siteUrl}/revisit`,
    type: "website",
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: "Revisit - Student Life Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revisit — Student Life Manager for Android",
    description:
      "Revisit is a free Android app for students that manages study routines, schedules, tasks, alarms, AI chat, Google Calendar sync, and academic planning.",
    images: [ogImagePath],
  },
};

const features = [
  {
    title: "Smart Scheduling",
    description: "Manage your full timetable and academic calendar",
  },
  {
    title: "AI Chat",
    description: "Built-in AI assistant for study help, powered by Groq",
  },
  {
    title: "Alarms & Reminders",
    description: "Study alarms with interval mode for focused sessions",
  },
  {
    title: "Google Calendar Sync",
    description: "Sync your academic schedule with Google Calendar",
  },
  {
    title: "Books & Chapter Generator",
    description: "AI-generated study notes for any topic",
  },
  {
    title: "Task Tracker",
    description: "Track assignments, deadlines, and daily to-dos",
  },
];

export default function RevisitPage() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "MobileApplication"],
    "@id": `${siteUrl}/#revisit`,
    name: "Revisit",
    url: "https://getrevisit.vercel.app",
    applicationCategory: "EducationApplication",
    applicationSubCategory: "Education",
    operatingSystem: "Android",
    softwareVersion: "1.0",
    description:
      "Revisit is a student life manager for Android that helps organize study routines, tasks, and academic planning.",
    releaseNotes:
      "Student life manager with AI chat, Google Calendar sync, alarms, and study planning",
    creator: { "@id": `${siteUrl}/#organization` },
    author: { "@id": `${siteUrl}/#founder` },
    downloadUrl: "https://getrevisit.vercel.app",
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
        name: "Revisit",
        item: `${siteUrl}/revisit`,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center bg-black min-h-screen" style={{ backgroundColor: "#000000" }}>
      {/* JSON-LD Schema Tags */}
      <Script
        id="revisit-software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Script
        id="revisit-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative w-full max-w-[1920px] flex flex-col items-center justify-center py-24 px-6 lg:py-32">
        <ScrollReveal className="flex flex-col items-center gap-4 text-center" delay={0}>
          <h1 className="text-gradient text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight display-title">
            Revisit
          </h1>
        </ScrollReveal>

        <ScrollReveal className="mt-4" delay={100}>
          <h2 className="text-lg md:text-xl lg:text-2xl text-[var(--text-secondary)]">
            The Student Life Manager for Android
          </h2>
        </ScrollReveal>

        <ScrollReveal className="mt-8 max-w-2xl" delay={200}>
          <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
            Revisit helps students organize their routines, track tasks, set alarms, plan academics, and use AI assistance — all in one app. Built by Cynocyte, a venture of UNENDLESS.
          </p>
        </ScrollReveal>
      </section>

      {/* ── Features Section ── */}
      <section className="relative w-full max-w-[1920px] px-6 py-16 lg:py-24">
        <ScrollReveal delay={0}>
          <div className="flex flex-col gap-2 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-cyan)]">
              Features
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
              Everything You Need to Succeed
            </h3>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={200 + index * 100}>
              <div
                className="p-6 lg:p-8 rounded-2xl border border-[var(--border-soft)] transition-all duration-300 hover:border-[var(--border-strong)] hover:bg-[var(--bg-soft)]"
                style={{
                  backgroundColor: "var(--bg-panel)",
                }}
              >
                <h4 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">
                  {feature.title}
                </h4>
                <p className="mt-3 text-sm md:text-base text-[var(--text-secondary)]">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Download Section ── */}
      <section className="relative w-full max-w-[1920px] px-6 py-16 lg:py-24">
        <ScrollReveal delay={0}>
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-mint)]">
                Ready to Get Organized?
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
                Download Revisit Now
              </h3>
            </div>
            <p className="max-w-2xl text-base md:text-lg text-[var(--text-secondary)]">
              Get started for free on Android. Premium features available for ₹99.
            </p>
            <a
              href="https://getrevisit.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary inline-flex mt-4"
            >
              Get Revisit →
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Built By Section ── */}
      <section className="relative w-full max-w-[1920px] px-6 py-16 lg:py-24">
        <ScrollReveal delay={0}>
          <div className="glass-panel rounded-2xl p-8 lg:p-12 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent-amber)] mb-4">
              Built By
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[var(--text-secondary)]">
              Revisit is a product of{" "}
              <a
                href={ecosystemLinks.cynocyte.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent-cyan)] hover:underline"
              >
                Cynocyte
              </a>
              , a venture under{" "}
              <Link href="/" className="text-[var(--accent-cyan)] hover:underline">
                UNENDLESS
              </Link>
              , founded by{" "}
              <Link href="/founder" className="text-[var(--accent-cyan)] hover:underline">
                Swarnadeep Mukherjee
              </Link>
              .
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Footer Spacer ── */}
      <div className="h-16" />
    </div>
  );
}
