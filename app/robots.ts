import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://bytecodeconsulting.com/sitemap.xml",
    host: "https://bytecodeconsulting.com",
  };
}
