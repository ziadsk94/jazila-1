"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Wait for page to load, then fade out
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    // Remove from DOM after fade out completes
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center font-lato transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{
        backgroundColor: "#F1CADD",
        color: "#E87A7A",
      }}
    >
      <h1 className="text-2xl font-bold px-4 text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        For Jazila
      </h1>
    </div>
  );
}

