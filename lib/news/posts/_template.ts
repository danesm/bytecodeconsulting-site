import type { NewsPost } from "@/lib/news/types";

// Copy this file, rename it to match the article slug, then import it in
// /Users/bccadmin/dev/bytecodeconsulting-site/lib/news/index.ts.
export const newsPostTemplate: NewsPost = {
  slug: "new-article-slug",
  title: "New article title",
  summary: "Short summary for the news card and metadata description.",
  category: "AI",
  publishedAt: "2026-03-25",
  readingTime: "4 min read",
  image: "/news/your-image-file.svg",
  imageAlt: "Describe the article image for accessibility and SEO.",
  tags: ["AI", "Cloud", "Software Delivery"],
  intro:
    "Use this opening paragraph to set the context clearly and explain why the article matters.",
  sections: [
    {
      heading: "First section heading",
      paragraphs: [
        "Write the first paragraph of this section here.",
        "Add a second paragraph when you want a little more depth.",
      ],
    },
    {
      heading: "Second section heading",
      paragraphs: [
        "Use additional sections to keep the article easy to read and well structured.",
      ],
    },
  ],
};
