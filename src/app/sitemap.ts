import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const basePath = "/zagle";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/oferta", "/kontakt"];
  const now = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${basePath}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
