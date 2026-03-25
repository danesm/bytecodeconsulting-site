import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";
import { Card } from "@/components/ui/card";
import { getArchivedNewsPosts, getLatestNewsPosts } from "@/lib/news";
import { buildMetadata } from "@/lib/seo";

const Navbar = dynamic(() => import("@/components/site/navbar").then((mod) => mod.Navbar), { ssr: false });

export const metadata: Metadata = buildMetadata({
  title: "News & Insights",
  description:
    "News, articles, and practical insights from Bytecode Consulting on AI adoption, cloud modernization, software delivery, and training.",
  path: "/news/",
  keywords: [
    "Bytecode Consulting news",
    "AI consultancy blog",
    "cloud modernization insights",
    "software delivery articles",
  ],
});

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export default function NewsPage() {
  const latestPosts = getLatestNewsPosts();
  const archivedPosts = getArchivedNewsPosts();
  const [featuredPost, ...otherPosts] = latestPosts;

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <PageHero
        eyebrow="News & Insights"
        title="Latest News & Insights"
        copy="Updates on AI, cloud, software, and digital transformation."
        primaryCta={{ label: "Explore services", href: "/services" }}
        secondaryCta={{ label: "Contact us", href: "/contact" }}
      />

      <section className="section-divider pb-20">
        <div className="section-shell">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Latest Posts</p>
              <p className="mt-2 text-sm text-slate-400">Recent articles and updates from Bytecode Consulting.</p>
            </div>
          </div>

          <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
            <Link href={`/news/${featuredPost.slug}`} className="group block">
              <Card className="h-full overflow-hidden p-0">
                <div className="relative aspect-[16/8] overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.imageAlt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 1279px) 100vw, 60vw"
                    priority
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-cyan-200">
                    <span>{featuredPost.category}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400">{formatDate(featuredPost.publishedAt)}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400">{featuredPost.readingTime}</span>
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">{featuredPost.title}</h2>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">{featuredPost.summary}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
                    Read article
                    <span aria-hidden="true">→</span>
                  </div>
                </div>
              </Card>
            </Link>

            <div className="grid gap-6">
              {otherPosts.map((post) => (
                <Link key={post.slug} href={`/news/${post.slug}`} className="group block">
                  <Card className="h-full overflow-hidden p-0">
                    <div className="grid gap-0 sm:grid-cols-[0.38fr_0.62fr]">
                      <div className="relative aspect-[16/9] overflow-hidden sm:aspect-auto sm:min-h-full">
                        <Image
                          src={post.image}
                          alt={post.imageAlt}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-[1.03]"
                          sizes="(max-width: 639px) 100vw, 40vw"
                        />
                      </div>
                      <div className="p-5">
                        <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-cyan-200">
                          <span>{post.category}</span>
                          <span className="text-slate-500">•</span>
                          <span className="text-slate-400">{formatDate(post.publishedAt)}</span>
                        </div>
                        <h2 className="mt-3 text-xl font-semibold text-white">{post.title}</h2>
                        <p className="mt-3 text-sm leading-7 text-slate-300">{post.summary}</p>
                        <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-200">
                          Open post
                          <span aria-hidden="true">→</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {archivedPosts.length > 0 ? (
            <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Archive</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">Earlier articles</h2>
              <div className="mt-6 grid gap-4">
                {archivedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/news/${post.slug}`}
                    className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-cyan/40 hover:bg-white/[0.05] sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <div className="text-base font-semibold text-white">{post.title}</div>
                      <div className="mt-1 text-sm text-slate-400">
                        {post.category} • {formatDate(post.publishedAt)}
                      </div>
                    </div>
                    <div className="text-sm font-medium text-cyan-200">Open article</div>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <Footer />
    </main>
  );
}
