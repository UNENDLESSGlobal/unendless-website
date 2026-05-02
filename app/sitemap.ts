import type { MetadataRoute } from "next";
import { founderPageUrl, siteUrl } from "./lib/ecosystem";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: founderPageUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/revisit`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
