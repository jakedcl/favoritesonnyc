"use client";

import { Sheet } from "@/components/Sheet";

export default function DrinksError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Sheet title="wine & drinks" kicker="natural wine, cocktails, beer">
      <p className="empty-copy">couldn’t load the list.</p>
      <p>
        <button type="button" className="text-button" onClick={reset}>
          try again
        </button>
      </p>
    </Sheet>
  );
}
