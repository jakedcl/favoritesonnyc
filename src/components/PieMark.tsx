import { useId } from "react";

// Smooth tubing traced from the original mark's centerlines.
// Ring: the ink's own circle, open from about 12 o'clock to about 2 o'clock.
// Slice: tip at the center, narrow sector toward 1 o'clock, outer edge the arc.
// Crust: closed band, outer and inner arcs joined by rounded caps.
const CIRCLE = "M249 141 A126.4 126.4 0 1 1 139 66";
const SLICE = "M130 195 L156 57 A127 127 0 0 1 238 126 Z";
const CRUST =
  "M169 5 A143.9 143.9 0 0 1 270 82 A14.8 14.8 0 0 1 254 107 A150.7 150.7 0 0 0 169 38 A17.7 17.7 0 0 1 169 5 Z";

function Strokes() {
  return (
    <>
      <path d={CIRCLE} />
      <path d={SLICE} />
      <path d={CRUST} />
    </>
  );
}

export function PieMark({ className = "" }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const glowId = `pie-glow-${uid}`;
  const coreId = `pie-core-${uid}`;

  return (
    <svg
      className={className}
      viewBox="0 0 286 320"
      fill="none"
      overflow="visible"
      aria-hidden="true"
    >
      <defs>
        <filter
          id={glowId}
          x="-150"
          y="-160"
          width="590"
          height="640"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur in="SourceAlpha" stdDeviation="6" result="a1" />
          <feFlood floodColor="#e01018" floodOpacity="1" result="f1" />
          <feComposite in="f1" in2="a1" operator="in" result="g1" />
          <feGaussianBlur in="SourceAlpha" stdDeviation="20" result="a2" />
          <feFlood floodColor="#d10c16" floodOpacity="0.92" result="f2" />
          <feComposite in="f2" in2="a2" operator="in" result="g2" />
          <feGaussianBlur in="SourceAlpha" stdDeviation="46" result="a3" />
          <feFlood floodColor="#c00812" floodOpacity="0.5" result="f3" />
          <feComposite in="f3" in2="a3" operator="in" result="g3" />
          <feMerge>
            <feMergeNode in="g3" />
            <feMergeNode in="g2" />
            <feMergeNode in="g1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id={coreId} x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="0.8" />
        </filter>
      </defs>
      <svg viewBox="0 0 286 320" x="0" y="0" width="286" height="320" overflow="visible" filter={`url(#${glowId})`}>
        <g stroke="#e10c16" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round">
          <Strokes />
        </g>
      </svg>
      <svg viewBox="0 0 286 320" x="0" y="0" width="286" height="320" overflow="visible" filter={`url(#${coreId})`}>
        <g stroke="#fff2f0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <Strokes />
        </g>
      </svg>
    </svg>
  );
}
