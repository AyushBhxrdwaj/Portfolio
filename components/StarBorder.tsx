import React from "react";
type AsProp = React.ElementType;

export interface StarBorderProps {
  as?: AsProp;
  className?: string;
  color?: string; // any valid CSS color, e.g., 'cyan', '#22d3ee', 'rgb(34,211,238)'
  radius?: number; // corner radius in px for the border path
  speed?: string; // animation duration, e.g., '4s'
  children: React.ReactNode;
}

const StarBorder: React.FC<StarBorderProps> = ({
  as,
  className = "",
  color = "#22d3ee", // tailwind cyan-400
  radius = 14,
  speed = "7s",
  children,
}) => {
  // Ensure the polymorphic component accepts children to avoid TS inferring `children: never`
  const Comp = (as || "div") as React.ComponentType<
    React.PropsWithChildren<{ className?: string; style?: React.CSSProperties }>
  >;
  return (
    <Comp
      className={`relative ${className}`}
      style={{
        // CSS vars configure the border color and animation speed
        // Using currentColor simplifies tinting
        color,
        // Provide the vars as well for CSS that reads them directly
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore - CSS custom props
        "--sb-color": color,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore - CSS custom props
        "--sb-speed": speed,
      }}
    >
      {/* Border overlay */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{ filter: "none" }}
      >
        <svg
          className="block w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Single comet particle that orbits around the border */}
          <rect
            x="1.25"
            y="1.25"
            width="97.5"
            height="97.5"
            rx={radius}
            ry={radius}
            fill="none"
            className="sb-comet"
          />
        </svg>
      </span>

      {/* Content */}
      {children}
      {/* Component-scoped styles */}
      <style>{`
        .sb-comet {
          stroke: var(--sb-color, currentColor);
          stroke-width: 2;
          stroke-linecap: round;
          /* a very short dash acts as a small particle */
          stroke-dasharray: 6 400;
          filter: drop-shadow(0 0 6px color-mix(in oklab, var(--sb-color, currentColor) 70%, transparent));
          animation: sb-comet-move var(--sb-speed, 4s) linear infinite;
          opacity: 0.9;
        }
        @keyframes sb-comet-move {
          to { stroke-dashoffset: -420; }
        }
      `}</style>
    </Comp>
  );
};

export default StarBorder;
