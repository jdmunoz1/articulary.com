import { ALL_GUIDES } from "../src/data/guides/index.ts";
import { TOOLS } from "../src/data/tools.tsx";
import { SOFTWARE } from "../src/data/software.ts";
console.log("GUIDES:", ALL_GUIDES.map((g) => g.slug).join(", "));
console.log("SOFTWARE:", SOFTWARE.map((s) => s.slug).join(", "));
console.log("TOOLS:", TOOLS.map((t) => t.slug).join(", "));
