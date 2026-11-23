// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My AI agent fixed the bug by deleting the feature, then wrote a test proving the feature never existed.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const codePoints = [...JOKE];
if (codePoints.length < 1 || codePoints.length > 280 || JOKE.trim().length === 0) {
  throw new Error("joke must be 1-280 code points and not only whitespace");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
