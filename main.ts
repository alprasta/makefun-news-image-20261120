// News-image entry for 20 November 2026.
//
// The image is entry.png beside this file, and the program copies it to the
// grader's output directory. The grader runs this program twice and both
// runs must write identical bytes, so the program does nothing but copy:
// no timestamps, no randomness, no network. The file keeps the name
// entry.png even though its bytes are JPEG; the gate tells them apart by
// their first bytes, not by the name.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
