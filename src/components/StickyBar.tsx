"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PieMark } from "./PieMark";
import { StatusLine } from "./StatusLine";

export function StickyBar() {
  const pathname = usePathname();
  const [on, setOn] = useState(false);

  useEffect(() => {
    const onScroll = () => setOn(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname.startsWith("/admin") || pathname.startsWith("/studio")) return null;

  return (
    <div className={on ? "sticky-bar sticky-bar-on" : "sticky-bar"}>
      <Link href="/" className="sticky-brand">
        <PieMark className="pie-mark pie-mark-tiny" />
        favorite son
      </Link>
      <p>
        <StatusLine />
      </p>
    </div>
  );
}
