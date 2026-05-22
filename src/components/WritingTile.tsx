import Image from "next/image";
import type { Post } from "@/lib/rss";

type Props = {
  post: Post;
  size: "featured" | "grid";
};

export default function WritingTile({ post, size }: Props) {
  const isFeatured = size === "featured";
  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="tile-hover group block"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md bg-[#ece8df] border border-border">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes={isFeatured ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center p-6 text-center">
            <span className="font-serif text-xl text-foreground/70 leading-snug">{post.title}</span>
          </div>
        )}
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-4">
        <h3 className={isFeatured ? "text-xl sm:text-2xl tracking-tight leading-snug" : "text-lg tracking-tight leading-snug"}>
          {post.title}
        </h3>
      </div>
      <p className="mt-1 font-sans text-xs text-muted tabular-nums">{post.date} · Fellow Travelers</p>
    </a>
  );
}
