// Two Robots in an Elevator — make.fun bounty
// u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f
//
// One line of awkward small talk that one robot says to another
// while they ride an elevator together. Node 22, stdlib only,
// no clock, no network, no randomness. Writes only to /output.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "We have shared this elevator 214 times. This is the first time either of us has spoken.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = `${outDir}/entry.txt`;

const chars = [...LINE].length;
const bytes = Buffer.byteLength(LINE, "utf8");
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  throw new Error(
    `gate violated: entry is ${chars} chars / ${bytes} bytes, must be 1-200 chars`,
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, LINE, "utf8");

const back = readFileSync(outPath, "utf8");
if (back !== LINE) {
  throw new Error("read-back mismatch: entry.txt does not match the line");
}

console.log(`wrote entry.txt (${chars} chars, ${bytes} bytes)`);
