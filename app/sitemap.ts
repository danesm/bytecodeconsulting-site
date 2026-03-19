import type { MetadataRoute } from "next";

const baseUrl = "https://bytecodeconsulting.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/services/",
    "/training/",
    "/schools-students/",
    "/about/",
    "/contact/",
    "/proposal/",
    "/training-brochure/",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
