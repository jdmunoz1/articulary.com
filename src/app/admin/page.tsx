import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

// Minimal admin guard: an httpOnly session cookie set by the login API.
// This is a basic protection layer — in production, replace with a real auth
// provider (e.g. Auth.js / NextAuth) before exposing any sensitive features.
async function isAuthed() {
  const store = await cookies();
  return store.get("articulary_admin")?.value === "1";
}

const ADMIN_LINKS = [
  { label: "Guides content", desc: "Edit or add guide articles.", href: "/" },
  { label: "Tools", desc: "Manage free tools and their engines.", href: "/" },
  { label: "Software", desc: "Software entries, affiliates and comparisons.", href: "/" },
  { label: "Site settings", desc: "Site config, analytics and integrations.", href: "/" },
];

export const metadata = { title: "Admin", robots: { index: false, follow: false } };

export default async function AdminPage() {
  const authed = await isAuthed();
  if (!authed) redirect("/api/admin/login?return=/admin");
  return <AdminPanel />;
}

function AdminPanel() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-[var(--ink)]">Admin</h1>
      <p className="mt-2 text-[var(--ink-soft)]">Manage Articulary content (placeholder — data lives in code today).</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {ADMIN_LINKS.map((l) => (
          <Link key={l.label} href={l.href} className="rounded-2xl border border-[var(--border)] bg-white p-6 transition hover:border-[var(--brand)]/40">
            <h2 className="font-bold text-[var(--ink)]">{l.label}</h2>
            <p className="mt-1 text-sm text-[var(--ink-soft)]">{l.desc}</p>
          </Link>
        ))}
      </div>
      <form action="/api/admin/logout" method="post" className="mt-8">
        <button className="rounded-lg border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--surface)]">Sign out</button>
      </form>
    </div>
  );
}
