import { useId } from "react";

// Centerlines of public/logo.png: the open ring, the pulled slice, and the crust.
const CIRCLE =
  "M249.0 141.0 L257.7 164.0 L259.9 175.0 L261.0 199.0 L257.9 213.0 L253.7 230.0 L242.7 251.0 L227.9 270.0 L216.0 280.9 L183.0 301.7 L164.0 308.7 L140.0 313.9 L135.0 312.1 L123.0 313.0 L99.0 309.9 L82.0 304.7 L62.0 294.7 L42.0 277.9 L30.3 264.0 L15.8 241.0 L6.3 218.0 L5.0 212.0 L4.1 180.0 L13.3 144.0 L20.3 128.0 L34.1 110.0 L52.0 92.1 L74.0 75.3 L88.0 69.3 L101.0 66.1 L120.0 64.0 L133.0 64.1 L139.0 66.0";
const SLICE =
  "M129.4 194.9 L131.1 178.0 L133.9 169.0 L142.9 122.0 L144.1 108.0 L146.9 99.0 L147.1 91.0 L149.9 83.0 L152.3 66.0 L156.1 57.3 L159.0 56.1 L166.0 57.1 L197.0 74.3 L210.0 84.0 L224.9 100.0 L235.7 114.0 L237.9 125.0 L236.0 127.7 L174.0 170.7 L138.0 193.2 L129.4 194.9 Z";
const CRUST =
  "M159.3 22.0 L159.0 32.0 L160.1 34.7 L178.0 41.4 L183.0 44.6 L190.0 46.4 L217.0 64.1 L226.0 71.1 L237.9 84.0 L252.3 105.0 L257.0 109.7 L260.0 110.9 L264.0 109.7 L276.6 103.0 L275.7 94.0 L264.7 72.0 L251.9 54.0 L234.0 35.3 L204.0 16.4 L180.0 7.1 L172.0 6.0 L166.0 7.1 L163.4 10.0 L159.3 22.0 Z";

export function PieMark({ className = "" }: { className?: string }) {
  const id = `pie-neon-${useId().replace(/:/g, "")}`;

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
          id={id}
          x="-35%"
          y="-35%"
          width="170%"
          height="170%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.05" result="core" />
          <feGaussianBlur in="SourceAlpha" stdDeviation="3.4" result="a1" />
          <feFlood floodColor="#ff2c36" floodOpacity="1" result="f1" />
          <feComposite in="f1" in2="a1" operator="in" result="r1" />
          <feGaussianBlur in="SourceAlpha" stdDeviation="8.5" result="a2" />
          <feFlood floodColor="#ff1c2a" floodOpacity="0.42" result="f2" />
          <feComposite in="f2" in2="a2" operator="in" result="r2" />
          <feGaussianBlur in="SourceAlpha" stdDeviation="18" result="a3" />
          <feFlood floodColor="#d31222" floodOpacity="0.16" result="f3" />
          <feComposite in="f3" in2="a3" operator="in" result="r3" />
          <feMerge>
            <feMergeNode in="r3" />
            <feMergeNode in="r2" />
            <feMergeNode in="r1" />
            <feMergeNode in="core" />
          </feMerge>
        </filter>
      </defs>
      <svg
        viewBox="0 0 286 320"
        x="0"
        y="0"
        width="286"
        height="320"
        overflow="visible"
        filter={`url(#${id})`}
      >
        <g stroke="#fff4f2" strokeWidth="4.4" strokeLinecap="round" strokeLinejoin="round">
          <path d={CIRCLE} />
          <path d={SLICE} />
          <path d={CRUST} />
        </g>
      </svg>
    </svg>
  );
}
