import type { MetadataRoute } from "next";
import { getAllNewsPosts } from "@/lib/news";

const baseUrl = "https://bytecodeconsulting.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/news/",
    "/services/",
    "/training/",
    "/schools-students/",
    "/about/",
    "/contact/",
    "/proposal/",
    "/training-brochure/",
  ];

  const newsRoutes = getAllNewsPosts().map((post) => `/news/${post.slug}/`);

  return [...routes, ...newsRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" || route.startsWith("/news/") ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/news/") ? 0.85 : 0.8,
  }));
}
