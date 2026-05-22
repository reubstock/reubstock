import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About — reubstock",
};

export default function AboutPage() {
  return (
    <div className="px-6 sm:px-10">
      <section className="max-w-2xl mx-auto pt-10 sm:pt-20 pb-24">
        <header className="border-t border-rule pt-4 mb-10">
          <h1 className="text-4xl sm:text-5xl tracking-tight font-semibold">About</h1>
        </header>

        <div className="mb-10">
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 overflow-hidden rounded-md border border-border">
            <Image
              src="/images/headshot.jpg"
              alt="Reuben Steiger"
              fill
              sizes="(min-width: 640px) 208px, 160px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Reuben Steiger is a writer and entrepreneur based in Princeton, NJ.
            Over a 25-year career he has helped found companies like Second Life,
            forming industries like the Metaverse and Bitcoin. Steiger has also
            led global innovation for companies such as Interpublic and Omnicom.
            His current focus is on AI, where he advises a variety of public and
            private clients on scaling and gaining adoption for world-changing
            technologies.
          </p>
          <p>
            Steiger&rsquo;s writing is devoted to making complex subjects easy to
            understand and turning serious ideas upside down. He holds a BA from
            Brown University and collects books about the future.
          </p>
        </div>

        <div className="mt-14 pt-6 border-t border-border text-sm flex flex-wrap gap-x-8 gap-y-2 text-foreground/80">
          <a href="https://x.com/reubstock" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">X</a>
          <a href="https://www.linkedin.com/in/reubensteiger" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="https://reubensteiger.substack.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Fellow Travelers</a>
          <a href="mailto:reubstock@gmail.com" className="hover:text-foreground transition-colors">Email</a>
        </div>
      </section>
    </div>
  );
}
