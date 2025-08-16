"use client";
import React from "react";

export default function SplashScreen() {
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setDone(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] grid place-items-center bg-black text-white transition-opacity duration-500 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      role="status"
      aria-label="Loading"
    >
      <div className="relative" aria-hidden>
        <div className="flex items-end gap-1 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
          {Array.from("ayuxh.dev").map((ch, i) => (
            <span
              key={i}
              className="inline-block animate-loader-pop"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              {ch}
            </span>
          ))}
        </div>
        <div className="mt-3 h-[2px] w-0 bg-white/60 animate-loader-line" />
        <span className="sr-only">Loading ayuxh.dev</span>
      </div>
    </div>
  );
}
