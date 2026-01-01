"use client";

import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

const Snowfall = dynamic(() => import("@/components/home/Snowfall"), {
  ssr: false,
  loading: () => null,
});

export default function SnowfallWrapper() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Defer snowfall until browser is idle to reduce TBT
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const id = window.requestIdleCallback(() => {
        setShouldRender(true);
      }, { timeout: 3000 });
      return () => window.cancelIdleCallback(id);
    } else {
      // Fallback: delay by 2 seconds
      const timer = setTimeout(() => setShouldRender(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!shouldRender) return null;
  return <Snowfall />;
}
