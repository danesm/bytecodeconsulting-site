import { aiAgentsForGrowingBusinesses } from "@/lib/news/posts/ai-agents-for-growing-businesses";
import { serverlessModernisationWithoutOverengineering } from "@/lib/news/posts/serverless-modernisation-without-overengineering";
import type { NewsPost } from "@/lib/news/types";

const newsPosts: NewsPost[] = [
  aiAgentsForGrowingBusinesses,
  serverlessModernisationWithoutOverengineering,
];

export const NEWS_LATEST_LIMIT = 6;

export function getAllNewsPosts() {
  return [...newsPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getLatestNewsPosts(limit = NEWS_LATEST_LIMIT) {
  return getAllNewsPosts().slice(0, limit);
}

export function getArchivedNewsPosts(limit = NEWS_LATEST_LIMIT) {
  return getAllNewsPosts().slice(limit);
}

export function getNewsPostBySlug(slug: string) {
  return newsPosts.find((post) => post.slug === slug);
}
