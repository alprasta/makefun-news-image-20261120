// News-image entry: "The World Today — 20 November 2026".
//
// The entry itself is the picture file entry.png that sits next to this
// script. This program's only job is to hand that picture, byte for byte,
// to the grader's output folder. It never changes the picture, never
// reaches for the network, and never consults the clock, so running it
// twice always produces the same file.
//
// Run it locally like this:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const IMAGE_NAME = "entry.png";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, IMAGE_NAME);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const bytes = readFileSync(source);
const target = join(outputDir, IMAGE_NAME);
writeFileSync(target, bytes);

// Prove the copy is exact before reporting success: hash both sides and
// refuse to finish if they ever differ.
const digest = (data) => createHash("sha256").update(data).digest("hex");
const written = readFileSync(target);
if (digest(written) !== digest(bytes)) {
  throw new Error(`copy mismatch: ${target} is not identical to ${source}`);
}

console.log(`wrote ${bytes.length} bytes to ${target} (sha256 ${digest(bytes)})`);
