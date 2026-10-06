const CX = 36;
const CY = 50;
const R = 23;
const SLICE_START = 72;
const SLICE_END = 12;

function polar(deg: number, radius: number) {
  const angle = (deg * Math.PI) / 180;
  return [CX + radius * Math.cos(angle), CY - radius * Math.sin(angle)] as const;
}

function num(value: number) {
  return value.toFixed(2);
}

const [arcX, arcY] = polar(SLICE_START, R);
const [arcEndX, arcEndY] = polar(SLICE_END, R);
const arc = `M ${num(arcX)} ${num(arcY)} A ${R} ${R} 0 1 0 ${num(arcEndX)} ${num(arcEndY)}`;

const [cutX, cutY] = polar(SLICE_START, R - 0.15);
const [cutEndX, cutEndY] = polar(SLICE_END, R - 0.15);
const cuts = `M ${CX} ${CY} L ${num(cutX)} ${num(cutY)} M ${CX} ${CY} L ${num(cutEndX)} ${num(cutEndY)}`;

const toppings = [128, 188, 238, 312].map((deg) => {
  const [x, y] = polar(deg, 11.2);
  return { cx: x, cy: y };
});

const [hookX, hookY] = polar(112, R + 2.2);
const arm = `M 17 8 C 17 16, 21 21, ${num(hookX)} ${num(hookY)}`;
const plate = "M 9 8 H 25";

export function PieMark({
  className = "",
  bracket = false,
}: {
  className?: string;
  bracket?: boolean;
}) {
  const frame = bracket
    ? { viewBox: "0 0 72 84", x: 0, y: 0, width: 72, height: 84 }
    : { viewBox: "4 20 64 62", x: 4, y: 20, width: 64, height: 62 };

  return (
    <svg
      className={className}
      viewBox={frame.viewBox}
      fill="none"
      overflow="visible"
      aria-hidden="true"
    >
      {bracket ? (
        <g className="pie-hardware">
          <path d={plate} className="pie-arm" />
          <path d={arm} className="pie-arm" />
          <path d={arm} className="pie-arm-lite" />
        </g>
      ) : null}
      <svg
        className="pie-neon"
        viewBox={frame.viewBox}
        overflow="visible"
        x={frame.x}
        y={frame.y}
        width={frame.width}
        height={frame.height}
      >
        <path d={arc} className="pie-glow" />
        <path d={cuts} className="pie-glow" />
        <path d={arc} className="pie-tube" />
        <path d={cuts} className="pie-tube" />
        <path d={arc} className="pie-core" />
        <path d={cuts} className="pie-core" />
        {toppings.map((dot) => (
          <circle key={`${dot.cx}-${dot.cy}`} cx={dot.cx} cy={dot.cy} r="1.55" className="pie-dot" />
        ))}
        {toppings.map((dot) => (
          <circle
            key={`core-${dot.cx}-${dot.cy}`}
            cx={dot.cx}
            cy={dot.cy}
            r="1.55"
            className="pie-dot-core"
          />
        ))}
      </svg>
    </svg>
  );
}
