"use client";
import Button from "@/components/Button";
import React from "react";

const Hero = () => {
  return (
    <div className="hero-bg flex items-center justify-between px-20 text-white">
      <div>
        <h1 className="text-title max-w-[650px]">
          Tu aliado legal en cada etapa de tu negocio y vida
        </h1>
        <p className="pt-6 pb-9 text-[1rem] font-medium leading-[24px]">Asesoría integral en las principales áreas del derecho.</p>
        <Button
            text="Comúnicate con nosotros."
            customClass="text-button bg-secondary-blue"
            onClick={() => console.log("Solicitar asesoría clicked")}
        />
      </div>
      <div className="flex flex-col items-center justify-center py-16 px-20 bg-white rounded-lg shadow-lg h-[450px] w-[512px]">
        <p>Formulario</p>
      </div>
    </div>
  );
};

export default Hero;
