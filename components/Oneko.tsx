"use client";
import React, { useEffect, useRef } from "react";

type Props = {
  enabled?: boolean;
  size?: number; // CSS size in px (kept crisp via pixelated scaling)
  zIndex?: number;
};

// Pixel-art Oneko: tiny canvas sprite that follows the cursor.
const Oneko: React.FC<Props> = ({
  enabled = true,
  size = 48,
  zIndex = 9999,
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const raf = useRef<number | null>(null);

  const pos = useRef({ x: 80, y: 80 });
  const target = useRef({ x: 200, y: 200 });
  const movingTick = useRef(0);
  const idleTime = useRef(0);

  useEffect(() => {
    if (!enabled) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const onMouse = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      idleTime.current = 0;
    };
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) {
        target.current.x = t.clientX;
        target.current.y = t.clientY;
        idleTime.current = 0;
      }
    };
    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });

    const GRID = 16; // 16x16 pixel sprite
    const canvas = canvasRef.current!;
    canvas.width = GRID;
    canvas.height = GRID;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Helper for pixel rect
    const px = (x: number, y: number, w: number, h: number, c: string) => {
      ctx.fillStyle = c;
      ctx.fillRect(x, y, w, h);
    };

    // Draw a simple pixel cat. Two walking frames toggled by movingTick.
    const drawCat = (frame: 0 | 1) => {
      ctx.clearRect(0, 0, GRID, GRID);

      const BLACK = "#000";
      const WHITE = "#fff";
      const PINK = "#ff9fbc";

      // Head outline
      px(3, 2, 10, 1, BLACK); // top
      px(2, 3, 1, 8, BLACK); // left
      px(13, 3, 1, 8, BLACK); // right
      px(3, 11, 10, 1, BLACK); // bottom
      // Ears
      px(3, 2, 2, 2, BLACK);
      px(11, 2, 2, 2, BLACK);
      // Head fill
      px(3, 3, 10, 8, WHITE);

      // Eyes
      px(6, 6, 1, 1, BLACK);
      px(10, 6, 1, 1, BLACK);
      // Nose
      px(8, 8, 1, 1, PINK);

      // Body outline
      px(8, 9, 6, 1, BLACK); // top
      px(8, 10, 1, 5, BLACK); // left
      px(13, 10, 1, 5, BLACK); // right
      px(9, 15, 4, 1, BLACK); // bottom
      // Body fill
      px(9, 10, 4, 5, WHITE);

      // Legs (animate)
      if (frame === 0) {
        px(9, 15, 1, 1, BLACK); // front outline
        px(11, 15, 1, 1, BLACK); // back outline
      } else {
        px(10, 15, 1, 1, BLACK);
        px(12, 15, 1, 1, BLACK);
      }

      // Tail (wag a bit)
      if (frame === 0) {
        px(14, 10, 1, 1, BLACK);
        px(15, 11, 1, 1, BLACK);
      } else {
        px(15, 10, 1, 1, BLACK);
        px(14, 11, 1, 1, BLACK);
      }
    };

    const step = () => {
      const wrap = wrapRef.current!;
      const dx = target.current.x - pos.current.x;
      const dy = target.current.y - pos.current.y;
      const dist = Math.hypot(dx, dy);
      const speed = Math.min(14, Math.max(2, dist * 0.18));
      if (dist > 0.5) {
        pos.current.x += (dx / dist) * speed;
        pos.current.y += (dy / dist) * speed;
      }

      idleTime.current += 1;
      if (idleTime.current > 120) {
        // gentle idle wander near last target
        target.current.x += Math.sin(performance.now() / 700) * 0.8;
        target.current.y += Math.cos(performance.now() / 900) * 0.8;
      }

      // animate when moving fast enough
      if (dist > 4) movingTick.current = (movingTick.current + 1) % 20;
      const frame: 0 | 1 = movingTick.current < 10 ? 0 : 1;
      drawCat(frame);

      wrap.style.transform = `translate3d(${pos.current.x - size / 2}px, ${
        pos.current.y - size / 2
      }px, 0)`;
      raf.current = requestAnimationFrame(step);
    };

    raf.current = requestAnimationFrame(step);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchmove", onTouch);
    };
  }, [enabled, size]);

  if (!enabled) return null;

  return (
    <div
      ref={wrapRef}
      aria-hidden
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: size,
        height: size,
        zIndex,
        pointerEvents: "none",
        willChange: "transform",
        imageRendering: "pixelated",
        filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.5))",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", imageRendering: "pixelated" }}
      />
    </div>
  );
};

export default Oneko;
