"use client";

import { useState } from "react";
import CardCarousel from '@/components/CardCarousel';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { team } from "@/helpers/team";

const TeamCarousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % team.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + team.length) % team.length);
  };

  return (
    <div className='lg:hidden'>
      <div className='py-10 px-8'>
        <div className="w-full flex flex-col items-center justify-between bg-white rounded-2xl">
          {/* Contenido */}
          <div className="relative w-full h-[42.625rem]">
            {team.map((item, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-500 h-full ${
                  i === index ? "opacity-100 relative" : "opacity-0 pointer-events-none"
                }`}
              >
                <CardCarousel
                  name={item.name}
                  position={item.position}
                  image={item.image}
                  qualifications={item.qualifications}
                />
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
              {team.map((_, i) => (
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
  )
}

export default TeamCarousel