export type Post = {
  title: string;
  link: string;
  date: string;
  pubDate: Date;
  image?: string;
  excerpt?: string;
};

const FEED_URL = "https://reubensteiger.substack.com/feed";

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#x27;/g, "'")
    .replace(/&#8217;/g, "’")
    .replace(/&#8216;/g, "‘")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

function pickTag(item: string, tag: string): string | undefined {
  const re = new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`, "i");
  const m = item.match(re);
  if (!m) return undefined;
  const raw = m[1].trim();
  const unwrapped = raw.replace(/^<!\[CDATA\[([\s\S]*?)\]\]>$/, "$1");
  return decodeEntities(unwrapped);
}

function firstImage(html: string | undefined): string | undefined {
  if (!html) return undefined;
  const m = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return m?.[1];
}

function formatDate(d: Date): string {
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export async function fetchPosts(): Promise<Post[]> {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const xml = await res.text();
    const items = xml.split(/<item[\s>]/).slice(1).map((s) => s.replace(/<\/item>[\s\S]*$/, ""));
    const posts: Post[] = items.map((item) => {
      const title = pickTag(item, "title") ?? "Untitled";
      const link = pickTag(item, "link") ?? "#";
      const pubDateStr = pickTag(item, "pubDate") ?? "";
      const content = pickTag(item, "content:encoded") ?? pickTag(item, "description");
      const enclosureMatch = item.match(/<enclosure[^>]+url=["']([^"']+)["']/i);
      const image = enclosureMatch?.[1] ?? firstImage(content);
      const excerpt = content
        ? decodeEntities(content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()).slice(0, 200)
        : undefined;
      const pubDate = new Date(pubDateStr);
      return {
        title,
        link,
        pubDate,
        date: isNaN(pubDate.getTime()) ? "" : formatDate(pubDate),
        image,
        excerpt,
      };
    });
    return posts.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());
  } catch {
    return [];
  }
}
