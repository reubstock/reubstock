import Image from "next/image";
import type { Experiment } from "@/lib/experiments";

export default function ExperimentTile({ experiment }: { experiment: Experiment }) {
  return (
    <a
      href={experiment.href}
      target="_blank"
      rel="noopener noreferrer"
      className="tile-hover group block"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md bg-[#ece8df] border border-border">
        <Image
          src={experiment.image}
          alt={experiment.title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-4">
        <h3 className="text-xl tracking-tight font-medium">{experiment.title}</h3>
        <span className="text-xs text-muted tabular-nums">{experiment.year}</span>
      </div>
      <p className="mt-1 text-sm text-muted leading-snug">{experiment.blurb}</p>
    </a>
  );
}
