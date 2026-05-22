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
          <h1 className="text-4xl sm:text-5xl tracking-tight">About</h1>
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
            Hi, I&apos;m Reuben. {/* TODO: replace with your bio */}
            Write a paragraph or two here — who you are, what you think about, what
            you&apos;re building right now. The voice that runs through Fellow Travelers is
            the right voice for this section.
          </p>
          <p>
            {/* TODO: a second paragraph if you want one — origin, current obsession, or a
            line about what you&apos;d like to be reached about. */}
            You can put a second paragraph here.
          </p>
        </div>

        <div className="mt-14 pt-6 border-t border-border font-sans text-sm flex flex-wrap gap-x-8 gap-y-2 text-foreground/80">
          <a href="https://x.com/reubstock" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">X</a>
          <a href="https://www.linkedin.com/in/reubensteiger" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="https://reubensteiger.substack.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Fellow Travelers</a>
          <a href="mailto:reubstock@gmail.com" className="hover:text-foreground transition-colors">Email</a>
        </div>
      </section>
    </div>
  );
}
