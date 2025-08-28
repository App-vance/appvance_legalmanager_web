"use client";

import { useState } from "react";
import CardCarousel from '@/components/CardCarousel';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const items = ["dasdadad 1", "contefgdgfdgnido3 2", "contehfhfghnido4 3"];

const TeamCarousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className='lg:hidden min-h-screen'>
      <div className='py-10 px-8'>
        <div className="w-full flex flex-col items-center justify-between bg-white rounded-2xl">
          {/* Contenido */}
          <div className="relative flex-1 flex items-center justify-center overflow-hidden w-full">
            <CardCarousel
              name="Diego Mauricio Sierra Arango"
              position="Gerente General"
              image="/img/gerente.jpg"
              qualifications={[
                "Abogado Universidad de Antioquia",
                "Especialista Gestión Inmobiliaria Universidad Nacional",
                "Especialista Derecho Procesal Universidad de Medellín",
                "Especialista Responsabilidad Civil y del Estado Universidad Autónoma",
                "Especialista Derecho de Seguros Universidad Javeriana",
                "Conciliador en Derecho",
                "Docente Universitario."
              ]}
            />
            {/* {items.map((item, i) => (
              <div
                key={i}
                className={`absolute bg-red-300 w-full flex items-center justify-center text-lg font-semibold transition-opacity duration-900
                  ${i === index ? "opacity-100" : "opacity-0"}
                `}
              >
                {item}
              </div>
            ))} */}
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
  )
}

export default TeamCarousel