"use client";

import { Sheet } from "@/components/Sheet";

export default function MenuError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Sheet title="menu">
      <p className="empty-copy">couldn’t load the menu.</p>
      <p>
        <button type="button" className="text-button" onClick={reset}>
          try again
        </button>
      </p>
    </Sheet>
  );
}
