"use client";

import { useEffect, useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 z-50 p-3 rounded-full bg-secondary-blue/70 ring-2 ring-white cursor-pointer text-white shadow-lg transition-all duration-300 lg:bottom-6 lg:right-6 hover:lg:bg-secondary-blue ${
        isVisible ? "translate-y-0 opacity-100" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Volver arriba"
    >
      <ChevronUpIcon className="w-6 h-6 lg:w-8 lg:h-8" />
    </button>
  );
};

export default ScrollUp;
