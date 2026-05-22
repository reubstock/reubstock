import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "reubstock — Reuben Steiger",
  description: "Experiments and writing by Reuben Steiger.",
  openGraph: {
    title: "reubstock",
    description: "Experiments and writing by Reuben Steiger.",
    url: "https://reubstock.com",
    siteName: "reubstock",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <header className="px-6 sm:px-10 pt-8 pb-6">
          <nav className="max-w-6xl mx-auto flex items-center justify-between">
            <Link href="/" className="text-lg sm:text-xl tracking-tight hover:opacity-70 transition-opacity">
              reubstock
            </Link>
            <div className="font-sans text-sm flex items-center gap-6 sm:gap-8 text-foreground/80">
              <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
              <a href="https://x.com/reubstock" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">X</a>
              <a href="https://www.linkedin.com/in/reubensteiger" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="px-6 sm:px-10 py-10 mt-24">
          <div className="max-w-6xl mx-auto font-sans text-xs text-muted flex items-center justify-between">
            <span>© {new Date().getFullYear()} Reuben Steiger</span>
            <span>reubstock.com</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
