// components/CarouselLg.tsx  
"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from 'next/link';

interface Sys {
  id: string;
}

type Notice = {
  sys: Sys;
  date: string;
  tittle: string;
  image: string;
  description?: string;
  img?: { url: string };
};

type CarouselLgProps = {
  items: Notice[];
  itemsToShow?: number;
};

const CarouselLg = ({ items, itemsToShow = 4 }: CarouselLgProps) => {
  const [pageIndex, setPageIndex] = useState(0);
  const total = items.length;
  const visibleCount = Math.min(itemsToShow, total);
  const maxPageIndex = Math.ceil(total / visibleCount) - 1;

  const next = () => {
    setPageIndex(prev => (prev < maxPageIndex ? prev + 1 : 0));
  };

  const prev = () => {
    setPageIndex(prev => (prev > 0 ? prev - 1 : maxPageIndex));
  };

  const startIndex = pageIndex * visibleCount;
  const currentItems = items.slice(startIndex, startIndex + visibleCount);

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    };
    return d.toLocaleDateString('es', options);
  };

  return (
    <div className="relative w-full">
      {/* Contenedor de tarjetas */}
      <div className="grid grid-cols-4 gap-10 w-full">
        {currentItems.map((item, idx) => (
          <Link href={`/noticias/${item?.sys.id}`} key={idx}>
            <div className=" cursor-pointer group flex flex-col">
              <img
                src={item.img?.url}
                alt={item.tittle}
                className="w-full h-[18.75rem] object-cover rounded-lg mb-8"
              />
              <span className="text-body text-secondary-blue mb-6">
                {formatDate(item.date)}
              </span>
              <span className="text-features text-primary-blue">
                {item.tittle}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Flecha izquierda */}


      <button
        onClick={prev}
        className="absolute top-1/2 left-0 -translate-y-1/2 translate-x-[-5rem] p-3 rounded-lg cursor-pointer bg-slate-300 hover:bg-white transition z-10"
      >
        <ChevronLeftIcon className="w-6 h-6 text-primary-blue" />
      </button>


      <button
        onClick={next}
        className="absolute top-1/2 right-0 -translate-y-1/2 -translate-x-[-5rem] p-3 rounded-lg cursor-pointer bg-slate-300 hover:bg-white transition z-10"
      >
        <ChevronRightIcon className="w-6 h-6 text-primary-blue" />
      </button>



    </div>
  );
};

export default CarouselLg;
