import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.onenesstransport.com";
  const lastModified = new Date("2026-09-01T15:23:00-05:00");

  return [
    { url: baseUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/broker-setup`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    {
      url: `${baseUrl}/blog/trucking-insurance-coverage-comparison-owner-operators`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/fmcsa-cdl-training-provider-audit-2026`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/freight-broker-packet-checklist-new-carriers`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/owner-operator-fuel-card-comparison-2026`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/fmcsa-new-entrant-safety-audit-checklist`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/cvsa-brake-safety-week-2026-checklist`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/fmcsa-revoked-elds-october-2026-deadline`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
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
