import { useId } from "react";

// Smooth tubing traced from the original mark's centerlines.
// Ring: the ink's own circle, open from about 12 o'clock to about 2 o'clock.
// Slice: tip at the center, narrow sector toward 1 o'clock, outer edge the arc.
// Crust: the same two arcs, brought closer, with straight radial ends.
const CIRCLE = "M249 141 A126.4 126.4 0 1 1 139 66";
const SLICE = "M130 195 L156 57 A127 127 0 0 1 238 126 Z";
const CRUST =
  "M175.0 11.1 A139.3 139.3 0 0 1 269.4 91.8 L256.0 101.3 A155.3 155.3 0 0 0 169.6 33.4 Z";

function Strokes() {
  return (
    <>
      <path d={CIRCLE} />
      <path d={SLICE} />
      <path d={CRUST} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={8} />
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
