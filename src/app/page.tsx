import ExperimentTile from "@/components/ExperimentTile";
import WritingTile from "@/components/WritingTile";
import { experiments } from "@/lib/experiments";
import { fetchPosts } from "@/lib/rss";

export const revalidate = 3600;

export default async function Home() {
  const featured = experiments.filter((e) => e.featured);
  const grid = experiments.filter((e) => !e.featured);

  const posts = await fetchPosts();
  const featuredPosts = posts.slice(0, 2);
  const gridPosts = posts.slice(2);

  return (
    <div className="px-6 sm:px-10">
      <section className="max-w-6xl mx-auto pt-10 sm:pt-20 pb-16 sm:pb-24">
        <h1 className="text-5xl sm:text-7xl md:text-8xl tracking-tight leading-[0.95]">
          Reuben Steiger
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-muted max-w-2xl leading-snug">
          Things I make and things I write — usually about people, time, and the slow collision between the two.
        </p>
      </section>

      <section className="max-w-6xl mx-auto pb-24">
        <header className="flex items-baseline justify-between mb-8 sm:mb-12 border-t border-rule pt-4">
          <h2 className="text-2xl sm:text-3xl tracking-tight">Experiments</h2>
          <span className="font-sans text-xs uppercase tracking-widest text-muted">
            {experiments.length} pieces
          </span>
        </header>

        {featured.length > 0 && (
          <div
            className={`grid grid-cols-1 gap-8 sm:gap-10 mb-12 sm:mb-16 ${
              featured.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
            }`}
          >
            {featured.map((e) => (
              <ExperimentTile key={e.slug} experiment={e} size="featured" />
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {grid.map((e) => (
            <ExperimentTile key={e.slug} experiment={e} size="grid" />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto pb-24">
        <header className="flex items-baseline justify-between mb-8 sm:mb-12 border-t border-rule pt-4">
          <h2 className="text-2xl sm:text-3xl tracking-tight">Writing</h2>
          <span className="font-sans text-xs uppercase tracking-widest text-muted">
            <a href="https://reubensteiger.substack.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              Fellow Travelers ↗
            </a>
          </span>
        </header>

        {posts.length === 0 ? (
          <p className="font-sans text-sm text-muted">
            Writing will appear here once the Fellow Traveler feed is reachable.
          </p>
        ) : (
          <>
            {featuredPosts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-12 sm:mb-16">
                {featuredPosts.map((p) => (
                  <WritingTile key={p.link} post={p} size="featured" />
                ))}
              </div>
            )}
            {gridPosts.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                {gridPosts.map((p) => (
                  <WritingTile key={p.link} post={p} size="grid" />
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}
