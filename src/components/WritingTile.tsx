import Image from "next/image";
import type { Post } from "@/lib/rss";

export default function WritingTile({ post }: { post: Post }) {
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
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center p-6 text-center">
            <span className="text-xl text-foreground/70 leading-snug">{post.title}</span>
          </div>
        )}
      </div>
      <div className="mt-3">
        <h3 className="text-xl tracking-tight font-medium leading-snug">{post.title}</h3>
        <p className="mt-1 text-xs text-muted tabular-nums">{post.date} · Fellow Travelers</p>
      </div>
    </a>
  );
}
