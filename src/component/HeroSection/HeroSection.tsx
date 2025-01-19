"use client";

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./hero.css";

const HeroSection: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [maxWordsPerLine, setMaxWordsPerLine] = useState(10); // Default for SSR
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure this logic only runs on the client
    setIsClient(true);

    const updateMaxWords = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 640) setMaxWordsPerLine(7); // Small screens
      else if (windowWidth < 1024) setMaxWordsPerLine(10); // Medium screens
      else setMaxWordsPerLine(12); // Large screens
    };

    updateMaxWords(); // Set initial value
    window.addEventListener("resize", updateMaxWords);

    return () => window.removeEventListener("resize", updateMaxWords);
  }, []);

  const chunkWords = (text: string, maxWords: number): string[] => {
    const words = text.split(" ");
    const chunks: string[] = [];
    for (let i = 0; i < words.length; i += maxWords) {
      chunks.push(words.slice(i, i + maxWords).join(" "));
    }
    return chunks;
  };

  const text =
    "At TeraCores, we create impactful web solutions that blend creativity, technology, and strategy to elevate your brand.";

  const displayText = isClient
    ? chunkWords(text, maxWordsPerLine).map((line, index) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ))
    : text; // Render as a single string on the server

  return (
    <section
      ref={ref}
      className="relative w-full h-screen bg-cover bg-center -mt-28"
      style={{ backgroundImage: "url(/hero.jpg)" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Content section */}
      <div className="relative z-10 flex items-center justify-center w-full h-full text-center text-white px-4 sm:px-8">
        <div className="mt-20 space-y-6 max-w-3xl mx-auto">
          {/* Title Section */}
          <h1
            className={`text-3xl font-medium leading-tight sm:text-5xl lg:text-7xl transition-opacity duration-700 ease-out ${
              inView ? "opacity-100 animate-appear delay-[0s]" : "opacity-0"
            }`}
          >
            Transform Your <br />
            <span className="text-white glow rounded-b-lg inline-block text-transparent bg-clip-text">
              Online Presence
            </span>
            <br /> Today!
          </h1>

          {/* Dynamic Paragraph */}
          <p
            className={`text-sm sm:text-lg lg:text-xl transition-opacity duration-700 ease-out ${
              inView ? "opacity-100 animate-appear delay-[0.5s]" : "opacity-0"
            }`}
          >
            {displayText}
          </p>

          {/* Call to Action Button */}
          <div className="mt-6">
            <button className="inline-block text-xs md:text-base text-white border-2 border-white hover:bg-white hover:border-white hover:text-black transition-all duration-300 px-6 py-3 rounded-full">
              <a href="#services">Get Started</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
