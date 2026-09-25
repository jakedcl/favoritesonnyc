"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { photos } from "@/content/site";

export function PieStrip() {
  const track = useRef<HTMLDivElement>(null);
  const pos = useRef(0);
  const vel = useRef(0.4);
  const drag = useRef<{
    x: number;
    y: number;
    pos: number;
    lastX: number;
    lastT: number;
    locked: boolean;
  } | null>(null);

  useEffect(() => {
    const node = track.current;
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) vel.current = 0;

    let frame = 0;
    const tick = () => {
      if (!drag.current) {
        pos.current += vel.current;
        if (reduce) vel.current *= 0.9;
        else if (Math.abs(vel.current) > 0.4) vel.current *= 0.965;
        else vel.current = 0.4;
      }

      const width = node.scrollWidth / 2;
      if (width > 0) {
        if (pos.current < 0) pos.current += width;
        if (pos.current >= width) pos.current -= width;
      }
      node.style.transform = `translate3d(${-pos.current}px, 0, 0)`;
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  function onPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    drag.current = {
      x: event.clientX,
      y: event.clientY,
      pos: pos.current,
      lastX: event.clientX,
      lastT: performance.now(),
      locked: false,
    };
  }

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const current = drag.current;
    if (!current) return;
    const dx = event.clientX - current.x;
    const dy = event.clientY - current.y;

    if (!current.locked) {
      if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
      if (Math.abs(dy) > Math.abs(dx)) {
        drag.current = null;
        return;
      }
      current.locked = true;
      event.currentTarget.setPointerCapture(event.pointerId);
    }

    pos.current = current.pos - dx;
    const now = performance.now();
    const dt = now - current.lastT || 16;
    vel.current = ((current.lastX - event.clientX) / dt) * 16;
    vel.current = Math.max(-18, Math.min(18, vel.current));
    current.lastX = event.clientX;
    current.lastT = now;
  }

  function endDrag() {
    drag.current = null;
  }

  return (
    <div
      className="pie-strip"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <div className="pie-track" ref={track}>
        {[0, 1].map((copy) => (
          <div className="pie-set" key={copy} aria-hidden={copy === 1}>
            {photos.map((photo) => (
              <figure className="pie-frame" key={`${copy}-${photo.src}`}>
                <Image
                  src={photo.src}
                  alt={copy === 0 ? photo.alt : ""}
                  fill
                  sizes="(max-width: 700px) 70vw, 280px"
                  draggable={false}
                />
                <figcaption>{photo.label}</figcaption>
              </figure>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
