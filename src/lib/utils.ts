/* Small shared helpers. */

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function formatDate(iso: string): string {
  const d = new Date(iso + (iso.length === 10 ? "T00:00:00Z" : ""));
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

/** Simple reading-time estimate from word count. */
export function readingTime(text: string, wordsPerMin = 200): string {
  const words = text.trim().split(/\s+/).length;
  const mins = Math.max(1, Math.round(words / wordsPerMin));
  return mins > 1 ? `${mins} min read` : "1 min read";
}
