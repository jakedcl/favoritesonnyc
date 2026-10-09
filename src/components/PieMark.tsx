import { useId } from "react";
import { PIE_TUBE } from "@/marks/pie-geometry";

// Paths in src/marks/pie-mark.svg are true arcs and straight lines.
// Each path is one solid tube. Neon red, the white core, and the glow are only a style.
const TUBES = [PIE_TUBE.ring, PIE_TUBE.slice, PIE_TUBE.crust] as const;

function Tubes({ core = false }: { core?: boolean }) {
  return (
    <g fill="none" stroke={core ? "#fff2f0" : "#e10c16"} strokeLinecap="round" strokeLinejoin="round">
      {TUBES.map((tube) => (
        <path key={tube.d} d={tube.d} strokeWidth={core ? 4 : tube.width} />
      ))}
    </g>
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
        <Tubes />
      </svg>
      <svg viewBox="0 0 286 320" x="0" y="0" width="286" height="320" overflow="visible" filter={`url(#${coreId})`}>
        <Tubes core />
      </svg>
    </svg>
  );
}
