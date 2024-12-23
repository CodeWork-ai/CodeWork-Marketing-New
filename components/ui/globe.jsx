"use client";

import createGlobe from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const GLOBE_CONFIG = {
  width: 1000,
  height: 1000,
  onRender: () => { },
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.1,
  dark: 3, // Dark background
  diffuse: 0, // Higher diffuse light for better visibility
  mapSamples: 18000,
  mapBrightness: 1.8, // Slightly dim map brightness for contrast
  baseColor: [0.48,0.65,0.97], // Dim gray as the base color
  markerColor: [0.98,0.25,0.17], // Red for markers
  glowColor: [0.48,0.55,0.77], // Red glow
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

export default function Globe({ className, config = GLOBE_CONFIG }) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const [r, setR] = useState(0);

  const updatePointerInteraction = (value) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      setR(delta / 200);
    }
  };

  const onRender = useCallback(
    (state) => {
      if (!pointerInteracting.current) phi += 0.005;
      state.phi = phi + r;
      state.width = width * 2;
      state.height = width * 2;
    },
    [r]
  );

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    });

    setTimeout(() => (canvasRef.current.style.opacity = "4"));
    return () => globe.destroy();
  }, []);

  return (
    <div className="relative max-w-[550px] ">
      <div
        className={cn(
          "aspect-[1/1] w-full max-w-[550px] bg-none bg-opacity-100",
          className
        )}
      >
        <canvas
          className={cn(
            "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
          )}
          ref={canvasRef}
          onPointerDown={(e) =>
            updatePointerInteraction(e.clientX - pointerInteractionMovement.current)
          }
          onPointerUp={() => updatePointerInteraction(null)}
          onPointerOut={() => updatePointerInteraction(null)}
          onMouseMove={(e) => updateMovement(e.clientX)}
          onTouchMove={(e) =>
            e.touches[0] && updateMovement(e.touches[0].clientX)
          }
        />
      </div>
      <div className="absolute text-xl lg:text-2xl 2xl:text-4xl right-20 lg:top-40 lg:bottom-20 lg:left-40 z-10 w-[300px]"></div>
    </div>
  );
}
