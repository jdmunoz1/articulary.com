import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.redirect(new URL("/", "http://localhost"));
  res.cookies.delete("articulary_admin");
  return res;
}
