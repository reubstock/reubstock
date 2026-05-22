import ExperimentTile from "@/components/ExperimentTile";
import WritingTile from "@/components/WritingTile";
import { experiments } from "@/lib/experiments";
import { fetchPosts } from "@/lib/rss";

export const revalidate = 3600;

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <div className="px-6 sm:px-10">
      <section className="max-w-6xl mx-auto pt-10 sm:pt-20 pb-12 sm:pb-16">
        <h1 className="text-5xl sm:text-7xl md:text-8xl tracking-tight leading-[0.95] font-semibold">
          Reuben Steiger
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-muted max-w-2xl leading-snug">
          Things I make and things I write — usually about people, time, and the slow collision between the two.
        </p>
      </section>

      <section className="max-w-6xl mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-12">
          {/* Making column */}
          <div>
            <header className="flex items-baseline justify-between mb-8 border-t border-rule pt-4">
              <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold">Making</h2>
              <span className="text-xs uppercase tracking-widest text-muted">
                {experiments.length} pieces
              </span>
            </header>
            <div className="space-y-10">
              {experiments.map((e) => (
                <ExperimentTile key={e.slug} experiment={e} />
              ))}
            </div>
          </div>

          {/* Writing column */}
          <div className="md:border-l md:border-border md:pl-10 lg:pl-16">
            <header className="flex items-baseline justify-between mb-8 border-t border-rule pt-4">
              <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold">Writing</h2>
              <span className="text-xs uppercase tracking-widest text-muted">
                <a
                  href="https://reubensteiger.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Fellow Travelers ↗
                </a>
              </span>
            </header>
            {posts.length === 0 ? (
              <p className="text-sm text-muted">
                Writing will appear here once the Fellow Travelers feed is reachable.
              </p>
            ) : (
              <div className="space-y-10">
                {posts.map((p) => (
                  <WritingTile key={p.link} post={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
