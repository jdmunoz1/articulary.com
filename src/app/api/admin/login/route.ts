import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const returnTo = req.nextUrl.searchParams.get("return") ?? "/admin";
  return new NextResponse(
    `<html><body style="font-family:sans-serif;max-width:400px;margin:80px auto;padding:0 20px;text-align:center">
      <h1 style="font-size:1.5rem;font-weight:bold;color:#101532">Articulary Admin</h1>
      <form method="post" style="display:flex;flex-direction:column;gap:12px;margin-top:24px">
        <input name="password" type="password" placeholder="Admin password" required
          style="padding:12px;border:1px solid #e5e7eb;border-radius:8px;font-size:1rem;width:100%;box-sizing:border-box" />
        <input name="return" type="hidden" value="${returnTo}" />
        <button type="submit" style="padding:12px;background:linear-gradient(135deg,#4f46e5,#7c3aed);color:white;border:none;border-radius:8px;font-size:1rem;cursor:pointer;font-weight:600">Sign in</button>
      </form>
      <p style="margin-top:16px;font-size:.875rem;color:#6b7280">
        Set ADMIN_PASSWORD in your .env.local file to protect this route.
      </p>
    </body></html>`,
    { headers: { "Content-Type": "text/html" } }
  );
}

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const password = form.get("password") as string;
  const returnTo = (form.get("return") as string) ?? "/admin";

  const expected = process.env.ADMIN_PASSWORD ?? "CHANGE_ME";
  if (password !== expected) {
    return new NextResponse("Incorrect password. <a href='/api/admin/login'>Try again</a>.", { status: 401, headers: { "Content-Type": "text/html" } });
  }

  const res = NextResponse.redirect(new URL(returnTo, req.url));
  res.cookies.set("articulary_admin", "1", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  });
  return res;
}
