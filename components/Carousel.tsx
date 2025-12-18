// components/Carousel.tsx
"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type CarouselProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  height?: string;
  classname1?: string;
  classname2?: string;
  classname3?: string;
};

function Carousel<T>({
  items,
  renderItem,
  height = "h-[42.625rem]",
  classname1 = "",
  classname3 = "",
  classname2 = "",
}: CarouselProps<T>) {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className={classname1}>
      <div className={classname2}>
        <div className={classname3}>
          {/* Contenido */}
          <div className={`relative w-full ${height}`}>
            {items.map((item, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-500 h-full ${
                  i === index
                    ? "opacity-100 relative"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                {renderItem(item, i)}
              </div>
            ))}
          </div>

          {/* Navegación */}
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-lg bg-blue-light hover:bg-gray-300 transition"
            >
              <ChevronLeftIcon className="w-4" />
            </button>

            <div className="flex items-center gap-2">
              {items.map((_, i) => (
                <span
                  key={i}
                  className={`rounded-full transition ${
                    i === index ? "bg-blue-600 w-2 h-2" : "bg-gray-300 h-1 w-1"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-lg bg-blue-light hover:bg-gray-300 transition"
            >
              <ChevronRightIcon className="w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
  