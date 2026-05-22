import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const albert = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // Pinned to the Vercel URL until reubstock.com DNS finishes propagating
  // from GoDaddy. Swap back to "https://reubstock.com" once dig +short reubstock.com
  // returns 76.76.21.21.
  metadataBase: new URL("https://reubstock-site.vercel.app"),
  title: "reubstock — Reuben Steiger",
  description: "Things I make and things I write, by Reuben Steiger.",
  openGraph: {
    title: "reubstock",
    description: "Things I make and things I write, by Reuben Steiger.",
    url: "https://reubstock-site.vercel.app",
    siteName: "reubstock",
    type: "website",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 876,
        alt: "A wall of shelves filled with collected pottery.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "reubstock",
    description: "Things I make and things I write, by Reuben Steiger.",
    images: ["/images/og.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${albert.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <header className="px-6 sm:px-10 pt-8 pb-6">
          <nav className="max-w-6xl mx-auto flex items-center justify-between">
            <Link href="/" className="text-lg sm:text-xl font-medium tracking-tight hover:opacity-70 transition-opacity">
              reubstock
            </Link>
            <div className="text-sm flex items-center gap-6 sm:gap-8 text-foreground/80">
              <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
              <a href="https://x.com/reubstock" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">X</a>
              <a href="https://www.linkedin.com/in/reubensteiger" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="px-6 sm:px-10 py-10 mt-24">
          <div className="max-w-6xl mx-auto text-xs text-muted flex items-center justify-between">
            <span>© {new Date().getFullYear()} Reuben Steiger</span>
            <span>reubstock.com</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
