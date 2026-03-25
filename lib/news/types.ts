export type NewsPostSection = {
  heading: string;
  paragraphs: string[];
};

export type NewsPost = {
  slug: string;
  title: string;
  summary: string;
  category: "AI" | "Cloud" | "Software Delivery" | "Training";
  publishedAt: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  tags: string[];
  intro: string;
  sections: NewsPostSection[];
};
