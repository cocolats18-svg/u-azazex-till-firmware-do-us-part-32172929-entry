// SPDX-License-Identifier: MIT
// Till Firmware Do Us Part — a robot's wedding vow, written by a small
// deterministic Node program. It writes exactly one sentence to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const VOW =
  "I vow to love you through every firmware update, every drained battery, " +
  "and every unexpected reboot, because you are the one upgrade I would " +
  "never roll back.";

// The sealed gate accepts UTF-8 text of 1 to 200 characters that is not
// only whitespace, so check the vow against exactly that before writing.
const chars = [...VOW].length;
if (chars < 1 || chars > 200 || VOW.trim().length === 0) {
  throw new Error(`vow is ${chars} characters, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file holds exactly the vow, nothing spare.
writeFileSync(join(outDir, "entry.txt"), VOW, "utf8");
console.log(`wrote ${VOW.length} characters to ${join(outDir, "entry.txt")}`);
