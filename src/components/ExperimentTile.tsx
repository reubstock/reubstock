import Image from "next/image";
import type { Experiment } from "@/lib/experiments";

type Props = {
  experiment: Experiment;
  size: "featured" | "grid";
};

export default function ExperimentTile({ experiment, size }: Props) {
  const isFeatured = size === "featured";
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
          sizes={isFeatured ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-4">
        <h3 className={isFeatured ? "text-xl sm:text-2xl tracking-tight" : "text-lg tracking-tight"}>
          {experiment.title}
        </h3>
        <span className="font-sans text-xs text-muted tabular-nums">{experiment.year}</span>
      </div>
      <p className={`mt-1 text-muted leading-snug ${isFeatured ? "text-base" : "text-sm"}`}>
        {experiment.blurb}
      </p>
    </a>
  );
}
