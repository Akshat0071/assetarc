"use client";

import React, { useState, useEffect, useRef } from "react";

/* ---------------- TYPES ---------------- */

type Flake = {
  key: number;
  left: number;
  startY: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  drift: number;
  kind: "dot" | "dendrite";
};

type CSSVars = React.CSSProperties & {
  "--drift"?: string;
  "--startY"?: string;
  "--pageHeight"?: string;
};

/* ---------------- HELPERS ---------------- */

const createFlakes = (total: number): Flake[] => {
  return Array.from({ length: total }).map((_, index) => {
    const duration = 36 + Math.random() * 18;

    return {
      key: index,
      left: Math.random() * 100,
      startY: -(600 + Math.random() * 1200), // above page
      size: 6 + Math.random() * 10,
      opacity: 0.4 + Math.random() * 0.3,
      duration,
      delay: -Math.random() * duration,
      drift: -24 + Math.random() * 48,
      kind: Math.random() > 0.5 ? "dendrite" : "dot",
    };
  });
};

/* ---------------- COMPONENT ---------------- */

const Snowfall: React.FC = () => {
  const [flakes, setFlakes] = useState<Flake[]>([]);
  const [isMobile, setIsMobile] = useState(true); // Default to true to prevent flash on mobile

  const overlayRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if mobile
    const checkMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    setIsMobile(checkMobile);
    
    // Don't create flakes on mobile
    if (checkMobile) return;
    
    setFlakes(createFlakes(220));
  }, []);

  /* -------- PAGE HEIGHT (read-only, safe) -------- */

  useEffect(() => {
    // Skip height calculation on mobile
    if (isMobile) return;

    const updateHeight = () => {
      const h =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      worldRef.current?.style.setProperty("--pageHeight", `${h}px`);
      if (worldRef.current) worldRef.current.style.height = `${h}px`;
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [isMobile]);

  /* -------- CAMERA (smooth, no stutter) -------- */

  useEffect(() => {
    // Skip animation loop on mobile
    if (isMobile) return;

    let rafId: number;

    const updateCamera = () => {
      if (worldRef.current) {
        // This makes the snow "World Fixed" so you can scroll past it
        worldRef.current.style.transform = `translateY(${-window.scrollY}px)`;
      }
      rafId = requestAnimationFrame(updateCamera);
    };

    rafId = requestAnimationFrame(updateCamera);
    return () => cancelAnimationFrame(rafId);
  }, [isMobile]);

  // Don't render anything on mobile
  if (isMobile) return null;

  return (
    <div
      ref={overlayRef}
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      aria-hidden="true"
    >
      {/* WORLD */}
      <div
        ref={worldRef}
        className="absolute top-0 left-0 w-full"
        // Key optimization: Tell browser to promote this layer
        style={{ willChange: "transform" }}
      >
        <style jsx>{`
          @keyframes snow-fall {
            from {
              transform: translate3d(0, var(--startY), 0);
            }
            to {
              transform: translate3d(
                var(--drift, 0px),
                var(--pageHeight, 200vh),
                0
              );
            }
          }

          @keyframes snow-spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>

        {flakes.map((flake) => {
          const style: CSSVars = {
            left: `${flake.left}%`,
            top: "0px",
            opacity: flake.opacity,
            animation: `snow-fall ${flake.duration}s linear ${flake.delay}s infinite`,
            "--startY": `${flake.startY}px`,
            "--drift": `${flake.drift}px`,
          };

          if (flake.kind === "dendrite") {
            return (
              <span key={flake.key} className="absolute" style={style}>
                <svg
                  className="block text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
                  width={flake.size * 3.2}
                  height={flake.size * 3.2}
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeOpacity="0.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    animation: `snow-spin ${flake.duration * 1.4
                      }s linear infinite`,
                  }}
                >
                  <path d="M16 3v26M16 16l8-8M16 16l-8-8M16 16l8 8M16 16l-8 8" />
                  <path d="M16 8l2.5-2.5M16 8l-2.5-2.5M16 24l2.5 2.5M16 24l-2.5 2.5" />
                  <path d="M21 11l3-1M21 11l1-3M11 21l-3 1M11 21l-1 3" />
                  <path d="M21 21l3 1M21 21l1 3M11 11l-3-1M11 11l-1-3" />
                  <path d="M21 21l3 1M21 21l1 3M11 11l-3-1M11 11l-1-3" />
                </svg>
              </span>
            );
          }

          return (
            <span
              key={flake.key}
              className="absolute rounded-full bg-white/70 shadow-[0_0_4px_rgba(255,255,255,0.4)]"
              style={{
                ...style,
                width: flake.size,
                height: flake.size,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Snowfall;
