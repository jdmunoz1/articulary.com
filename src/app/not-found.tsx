import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-2xl flex-col items-center justify-center px-4 py-20 text-center">
      <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-[var(--brand)] to-[var(--violet)] text-3xl font-black text-white">404</div>
      <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-[var(--ink)]">Page not found</h1>
      <p className="mt-3 text-[var(--ink-soft)]">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-gradient rounded-xl px-6 py-3 text-sm font-semibold">Back to home</Link>
        <Link href="/search" className="rounded-xl border border-[var(--border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--ink)] hover:border-[var(--brand)]/40">Search the site</Link>
      </div>
    </div>
  );
}
