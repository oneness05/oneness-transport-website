import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.onenesstransport.com";
  const lastModified = new Date("2026-08-16T12:00:00-05:00");

  return [
    { url: baseUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/broker-setup`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    {
      url: `${baseUrl}/blog/how-to-choose-dry-van-carrier-texas`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.onenesstransport.com";
  const lastModified = new Date("2026-08-16T12:00:00-05:00");

  return [
    { url: baseUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/broker-setup`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    {
      url: `${baseUrl}/blog/california-non-domiciled-cdl-crash-data`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/how-to-choose-dry-van-carrier-texas`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
    },
  ];
}
