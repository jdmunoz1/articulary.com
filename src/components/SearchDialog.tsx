"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/** Global keyboard shortcut: Cmd/Ctrl+K opens the search page. */
export function SearchDialog() {
  const router = useRouter();
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        router.push("/search");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router]);
  return null;
}
