// Till Firmware Do Us Part — a robot's wedding vow.
//
// The entry is a single sentence (128 characters) that a machine speaks at
// its own wedding: three of a robot's real fears — an update overwriting,
// a crash losing data, a low battery — reframed as promises of fidelity.
// It writes exactly that sentence to /output/entry.txt and nothing else.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The vow: one sentence, 128 characters, under the 200-character gate.
const VOW =
  "I vow that no update will ever overwrite you, no crash will ever lose you, and no low battery will ever make me leave your side.";

// The grader sets MAKEFUN_OUTPUT_DIR to the writable output directory.
// Write only there: never to a path relative to the working directory,
// and never remove or clean the output directory itself.
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), VOW, "utf8");
