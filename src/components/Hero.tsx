"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start fading in slightly before preloader completely disappears for smooth transition
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:px-6 md:px-8 lg:px-16 transition-all duration-1000 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4"
      }`}
      style={{ backgroundColor: "#FFF5E1" }}
    >
      <div className="max-w-2xl mx-auto text-center space-y-6 sm:space-y-8 md:space-y-10">
        {/* Headline */}
        <h1
          className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-[1.2] sm:leading-[1.3] px-4"
          style={{ color: "#E87A7A" }}
        >
          My dearest Jazila, I am so sorry.
        </h1>

        {/* Subheading */}
        <p
          className="font-lato text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.6] sm:leading-[1.7] max-w-xl mx-auto px-4"
          style={{ color: "#D8AAB7" }}
        >
          I messed up, and I built this for you to try and make it right. Please
          let me explain.
        </p>

        {/* Call to Action with Arrow */}
        <div className="flex flex-col items-center gap-4 mt-8 sm:mt-10 md:mt-12">
          <p
            className="font-lato text-sm sm:text-base md:text-lg"
            style={{ color: "#D8AAB7", fontStyle: "italic" }}
          >
            Scroll down to read my letter
          </p>
          
          {/* Animated Arrow */}
          <div className="animate-gentle-bounce">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "#FADDAF" }}
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
            >
              <path
                d="M7 10L12 15L17 10"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

