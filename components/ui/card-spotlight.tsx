"use client";

import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React, { MouseEvent as ReactMouseEvent, useState } from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "#262626",
  className,
  active,
  hoverEnabled = true,
  // effect customization
  effectColors,
  effectDotSize,
  effectAnimationSpeed,
  effectContainerClassName,
  effectShowGradient,
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
  active?: boolean;
  hoverEnabled?: boolean;
  effectColors?: number[][];
  effectDotSize?: number;
  effectAnimationSpeed?: number;
  effectContainerClassName?: string;
  effectShowGradient?: boolean;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => hoverEnabled && setIsHovering(true);
  const handleMouseLeave = () => hoverEnabled && setIsHovering(false);
  const showEffect = (hoverEnabled && isHovering) || !!active;

  // When activated without hover (mobile), center the spotlight
  React.useEffect(() => {
    if (!active || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(rect.width / 2);
    mouseY.set(rect.height / 2);
  }, [active, mouseX, mouseY]);
  return (
    <div
      className={cn(
        "group/spotlight p-10 rounded-md relative border border-neutral-800 bg-black dark:border-neutral-800",
        className
      )}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.div
        className={cn(
          "pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300",
          hoverEnabled && "group-hover/spotlight:opacity-100",
          showEffect && "opacity-100"
        )}
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      >
        {showEffect && (
          <CanvasRevealEffect
            animationSpeed={effectAnimationSpeed ?? 5}
            containerClassName={cn(
              "bg-transparent absolute inset-0 pointer-events-none",
              effectContainerClassName
            )}
            colors={
              effectColors ?? [
                [59, 130, 246],
                [139, 92, 246],
              ]
            }
            dotSize={effectDotSize ?? 3}
            showGradient={effectShowGradient}
          />
        )}
      </motion.div>
      {children}
    </div>
  );
};
