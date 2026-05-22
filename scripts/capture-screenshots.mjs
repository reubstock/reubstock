#!/usr/bin/env node
// Captures uniform screenshots of every Experiment listed in src/lib/experiments.ts.
// Run: npm run capture
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, "..", "public", "experiments");

// Mirror the data in src/lib/experiments.ts so this script has no TS dependency.
const targets = [
  { slug: "drug-simulator", url: "https://drug-simulator.vercel.app" },
  { slug: "dreams", url: "https://dreams-livid.vercel.app" },
  { slug: "cosmic-calendar", url: "https://cosmic-calendar-pied.vercel.app" },
  { slug: "taste", url: "https://taste-rouge.vercel.app" },
  { slug: "powers-of-you", url: "https://powers-of-you.vercel.app" },
  { slug: "days-of-our-lives", url: "https://days-of-our-lives.vercel.app" },
  { slug: "a-younger-world", url: "https://a-younger-world.vercel.app" },
  { slug: "everyone-ever", url: "https://everyone-ever.vercel.app" },
  { slug: "gashapon", url: "https://gashapon-five.vercel.app" },
];

const VIEWPORT = { width: 1600, height: 1000 };

async function main() {
  await mkdir(outDir, { recursive: true });
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 2,
  });

  for (const t of targets) {
    const file = path.join(outDir, `${t.slug}.jpg`);
    console.log(`→ ${t.slug}  (${t.url})`);
    const page = await ctx.newPage();
    try {
      await page.goto(t.url, { waitUntil: "networkidle", timeout: 45_000 });
      // Give canvas / Three.js a beat to render
      await page.waitForTimeout(2_000);
      await page.screenshot({
        path: file,
        type: "jpeg",
        quality: 90,
        clip: { x: 0, y: 0, width: VIEWPORT.width, height: VIEWPORT.height },
      });
      console.log(`  ✓ ${path.relative(process.cwd(), file)}`);
    } catch (err) {
      console.error(`  ✗ ${t.slug}: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log("done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
