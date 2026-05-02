import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";
import {
  ecosystemLinks,
  ogImagePath,
  siteKeywords,
  siteUrl,
  unendlessKnowledgeGraph,
  websiteSchema,
} from "./lib/ecosystem";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "UNENDLESS | Deep-Tech Incubator & Holding Company",
    template: "%s | UNENDLESS",
  },
  description:
    "UNENDLESS — founded by Swarnadeep Mukherjee — is a holding company and deep-tech incubator building experimental software, interactive AI computing systems, and mobile products including Cynocyte and Revisit, based in India.",
  applicationName: "UNENDLESS — Built by Swarnadeep Mukherjee",
  alternates: {
    canonical: siteUrl,
  },
  authors: [
    {
      name: "Swarnadeep Mukherjee",
      url: siteUrl,
    },
  ],
  creator: "Swarnadeep Mukherjee",
  publisher: "UNENDLESS",
  referrer: "origin-when-cross-origin",
  keywords: siteKeywords,
  category: "Technology",
  classification: "Technology, Artificial Intelligence",
  verification: {
    google: "e658be14549c1578",
  },
  openGraph: {
    title: "UNENDLESS | Deep-Tech Incubator & Holding Company",
    description:
      "UNENDLESS — founded by Swarnadeep Mukherjee — is a holding company and deep-tech incubator building experimental software, interactive AI computing systems, and mobile products including Cynocyte and Revisit, based in India.",
    url: siteUrl,
    siteName: "UNENDLESS",
    type: "website",
    locale: "en_US",
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
    description:
      "UNENDLESS — founded by Swarnadeep Mukherjee — is a holding company and deep-tech incubator building experimental software, interactive AI computing systems, and mobile products including Cynocyte and Revisit, based in India.",
    creator: "@theswarnadeep_",
    images: [ogImagePath],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "geo.placename": "India",
    "geo.region": "IN",
    "og:see_also": [
      "https://www.linkedin.com/in/swarnadeepmukherjee-unendless/",
      "https://x.com/theswarnadeep_",
      "https://www.instagram.com/unendless.global/",
    ],
    abstract:
      "UNENDLESS is a holding company and deep-tech incubator founded by Swarnadeep Mukherjee. The ecosystem includes Cynocyte for AI and interactive computing, Cynocyte Systems for infrastructure, and Revisit, a student life manager for Android.",
    subject:
      "Deep Tech, Artificial Intelligence, Interactive Computing, Software Products, India Technology",
    language: "English",
    "revisit-after": "7 days",
    author: "Swarnadeep Mukherjee",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" prefix='og: https://ogp.me/ns# profile: https://ogp.me/ns/profile#' className="antialiased bg-black text-white" style={{ backgroundColor: '#000000' }}>
      <body className="min-h-screen overflow-x-hidden bg-black text-white" style={{ backgroundColor: '#000000' }}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B4ZW3RG3DE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-B4ZW3RG3DE');
          `}
        </Script>

        <script
          id="unendless-knowledge-graph"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(unendlessKnowledgeGraph),
          }}
        />

        <script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {/* ── Floating Pill Navbar ── */}
        <nav className="fixed inset-x-0 top-6 z-50 flex justify-center px-4">
          <div className="flex items-center gap-16 rounded-full border border-white/10 bg-white/5 px-12 py-4 shadow-lg backdrop-blur-md">
            <Link
              href="/"
              className="text-xs font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-70"
            >
              HOME
            </Link>
            <a
              href="#about"
              className="text-xs font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-70"
            >
              ABOUT
            </a>
          </div>
        </nav>

        <main className="relative z-10 flex-1 bg-black" style={{ backgroundColor: '#000000' }}>{children}</main>

        {/* ── Footer: Master Ecosystem Directory ── */}
        <footer id="about" className="relative z-10 w-full border-t border-white/10 bg-black px-4 py-16 sm:px-6 lg:px-10" style={{ backgroundColor: '#000000' }}>
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {/* COMPANY */}
              <div className="flex flex-col">
                <h4 className="mb-6 text-[10px] font-bold uppercase tracking-widest text-white">
                  UNENDLESS
                </h4>
                <div className="flex flex-col gap-4">
                  <a
                    href={ecosystemLinks.unendless.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-cyan)]"
                  >
                    Website
                  </a>
                  <a
                    href={ecosystemLinks.unendless.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-cyan)]"
                  >
                    Instagram
                  </a>
                </div>
              </div>

              {/* CYNOCYTE */}
              <div className="flex flex-col">
                <h4 className="mb-6 text-[10px] font-bold uppercase tracking-widest text-white">
                  CYNOCYTE
                </h4>
                <div className="flex flex-col gap-4">
                  <a
                    href={ecosystemLinks.cynocyte.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-cyan)]"
                  >
                    Website
                  </a>
                  <a
                    href={ecosystemLinks.cynocyte.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-cyan)]"
                  >
                    Instagram
                  </a>
                  <a
                    href={ecosystemLinks.cynocyte.instagramIndia}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-cyan)]"
                  >
                    Instagram (Cynocyte India)
                  </a>
                  <a
                    href={ecosystemLinks.cynocyte.x}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-cyan)]"
                  >
                    X
                  </a>
                  <a
                    href={ecosystemLinks.cynocyte.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-cyan)]"
                  >
                    YouTube
                  </a>
                  <a
                    href={ecosystemLinks.cynocyte.reddit}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-cyan)]"
                  >
                    Reddit
                  </a>
                  <a
                    href={ecosystemLinks.cynocyte.threads}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-cyan)]"
                  >
                    Threads
                  </a>
                </div>
              </div>

              {/* CYNOCYTE SYSTEMS */}
              <div className="flex flex-col">
                <h4 className="mb-6 text-[10px] font-bold uppercase tracking-widest text-white">
                  CYNOCYTE SYSTEMS
                </h4>
                <div className="flex flex-col gap-4">
                  <a
                    href={ecosystemLinks.cynocyteSystems.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-cyan)]"
                  >
                    Website
                  </a>
                  <a
                    href={ecosystemLinks.cynocyteSystems.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-cyan)]"
                  >
                    Instagram
                  </a>
                </div>
              </div>

              {/* FOUNDER */}
              <div className="flex flex-col">
                <h4 className="mb-6 text-[10px] font-bold uppercase tracking-widest text-white">
                  FOUNDER
                </h4>
                <div className="flex flex-col gap-4">
                  <a
                    href={ecosystemLinks.founder.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-cyan)]"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={ecosystemLinks.founder.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-white"
                  >
                    Instagram
                  </a>
                  <a
                    href={ecosystemLinks.founder.x}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-white"
                  >
                    X
                  </a>
                  <a
                    href={ecosystemLinks.founder.reddit}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-white"
                  >
                    Reddit
                  </a>
                  <a
                    href={ecosystemLinks.founder.threads}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-white"
                  >
                    Threads
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-24 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-[var(--text-muted)]">
                © 2026 UNENDLESS. All rights reserved.
              </p>
              <p className="text-xs text-[var(--text-muted)]">
                Founded by SWARNADEEP MUKHERJEE.
              </p>
              <p className="text-xs text-[var(--text-dim)] mt-2">
                UNENDLESS and its ventures — Cynocyte, Cynocyte Systems, and Revisit — are built and maintained by <a href="/founder" className="underline hover:text-[var(--text-muted)] transition-colors">Swarnadeep Mukherjee</a>.
              </p>
            </div>

            {/* Hidden SEO footer content */}
            <div className="sr-only" aria-hidden="true">
              <p>
                UNENDLESS is a deep-tech incubator and holding company founded
                by Swarnadeep Mukherjee. The ecosystem includes Cynocyte for
                interactive computing and AI, Cynocyte Systems for
                infrastructure engineering, Unendless Studios, and Revisit, a
                student life manager for Android. Based in India.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
