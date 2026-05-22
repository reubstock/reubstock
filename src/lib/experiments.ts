export type Experiment = {
  slug: string;
  title: string;
  blurb: string;
  href: string;
  image: string;
  year: number;
  featured?: boolean;
};

// Order = reverse-chronological. Featured tiles appear up top, the rest flow into the grid.
export const experiments: Experiment[] = [
  {
    slug: "drug-simulator",
    title: "Drug Simulator",
    blurb: "Pick a substance, set a dose, watch what happens.",
    href: "https://drug-simulator.vercel.app",
    image: "/experiments/drug-simulator.jpg",
    year: 2026,
    featured: true,
  },
  {
    slug: "dreams",
    title: "Dreams",
    blurb: "A diagnostic dream reader built on the Sleep & Dream Database.",
    href: "https://dreams-livid.vercel.app",
    image: "/experiments/dreams.jpg",
    year: 2026,
    featured: true,
  },
  {
    slug: "cosmic-calendar",
    title: "Cosmic Calendar",
    blurb: "Your life is 0.23 seconds long. A five-zoom anchor.",
    href: "https://cosmic-calendar-pied.vercel.app",
    image: "/experiments/cosmic-calendar.jpg",
    year: 2026,
    featured: true,
  },
  {
    slug: "taste",
    title: "TASTE",
    blurb: "A fictional AI-native agency that doesn't exist (yet).",
    href: "https://taste-rouge.vercel.app",
    image: "/experiments/taste.jpg",
    year: 2026,
  },
  {
    slug: "powers-of-you",
    title: "Powers of You",
    blurb: "A personal Eames sequel. Scroll across space and time.",
    href: "https://powers-of-you.vercel.app",
    image: "/experiments/powers-of-you.jpg",
    year: 2026,
  },
  {
    slug: "days-of-our-lives",
    title: "Days of Our Lives",
    blurb: "Carpe diem — your weeks, on a single page.",
    href: "https://days-of-our-lives.vercel.app",
    image: "/experiments/days-of-our-lives.jpg",
    year: 2026,
  },
  {
    slug: "a-younger-world",
    title: "A Younger World",
    blurb: "Share of population under 15, by country, 1950 → 2100.",
    href: "https://a-younger-world.vercel.app",
    image: "/experiments/a-younger-world.jpg",
    year: 2026,
  },
  {
    slug: "everyone-ever",
    title: "Everyone Ever",
    blurb: "An hourglass of every human who has lived, is living, will live.",
    href: "https://everyone-ever.vercel.app",
    image: "/experiments/everyone-ever.jpg",
    year: 2026,
  },
  {
    slug: "gashapon",
    title: "Gashapon",
    blurb: "Three.js capsule machine. Series 01: Serial Killers.",
    href: "https://gashapon-five.vercel.app",
    image: "/experiments/gashapon.jpg",
    year: 2025,
  },
];
