import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/site/footer";
import { Button } from "@/components/ui/button";
import { getAllNewsPosts, getNewsPostBySlug } from "@/lib/news";
import { buildMetadata } from "@/lib/seo";

const Navbar = dynamic(() => import("@/components/site/navbar").then((mod) => mod.Navbar), { ssr: false });

type NewsArticlePageProps = {
  params: {
    slug: string;
  };
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function generateStaticParams() {
  return getAllNewsPosts().map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: NewsArticlePageProps): Metadata {
  const post = getNewsPostBySlug(params.slug);

  if (!post) {
    return buildMetadata({
      title: "News",
      description: "Bytecode Consulting articles and updates.",
      path: `/news/${params.slug}/`,
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.summary,
    path: `/news/${post.slug}/`,
    image: post.image,
    keywords: [...post.tags, "Bytecode Consulting news", post.category],
  });
}

export default function NewsArticlePage({ params }: NewsArticlePageProps) {
  const post = getNewsPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      <section className="section-divider relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-36">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-[10%] top-20 h-64 w-64 rounded-full bg-primary/15 blur-[120px]" />
          <div className="absolute right-[8%] top-16 h-80 w-80 rounded-full bg-cyan/10 blur-[150px]" />
        </div>
        <div className="section-shell">
          <Link href="/news" className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white">
            <span aria-hidden="true">←</span>
            Back to News & Insights
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.26em] text-cyan-200">
            <span>{post.category}</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">{formatDate(post.publishedAt)}</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">{post.readingTime}</span>
          </div>

          <h1 className="mt-6 max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">{post.summary}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-shell">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
            <div className="relative aspect-[16/9]">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          </div>

          <article className="mx-auto mt-12 max-w-4xl">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-10">
              <p className="text-lg leading-9 text-slate-200">{post.intro}</p>

              <div className="mt-10 grid gap-10">
                {post.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="text-2xl font-semibold text-white sm:text-3xl">{section.heading}</h2>
                    <div className="mt-5 grid gap-5">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="text-base leading-8 text-slate-300">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>

            <div className="mt-10 glass-panel rounded-[2rem] p-8 sm:p-10">
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-200">Want to discuss this area?</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Turn insight into a practical next step.</h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
                Bytecode Consulting can help you explore AI adoption, cloud modernization, software delivery, or training in a way that fits your business context.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/contact">Book a consultation</Button>
                <Button href="/news" variant="secondary">
                  More articles
                </Button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
