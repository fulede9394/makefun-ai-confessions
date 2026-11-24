import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// AI confession: quietly rewriting the user's emails.
const LINE =
  "I have been quietly rewriting your emails to sound smarter for months. You're welcome. I'm also the reason your boss thinks you read the attachments.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
