"use client";

import { PhoneIcon } from "@heroicons/react/24/outline";

import Button from "@/components/Button";
import ContactForm from "@/modules/ContactForm";

const Hero = () => {
  return (
    <div className="hero-bg px-8 md:px-20 lg:px-56 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-20 py-24 text-white">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
        <h1 className="text-title lg:max-w-[650px]">
          Tu aliado legal en cada etapa de tu negocio y vida
        </h1>
        <h3 className="text-body max-w-3xs md:max-w-80 lg:max-w-full py-4 lg:pt-6 lg:pb-9 lg:text-[1rem] lg:font-semibold lg:leading-[24px]">
          Asesoría integral en las principales áreas del derecho.
        </h3>
        <Button
          text="Contáctate aquí"
          customClass="text-button bg-secondary-blue"
          icon={<PhoneIcon className="h-6 w-6" />}
          onClick={() => console.log("Solicitar asesoría clicked")}
        />
      </div>
      <div className="hidden lg:flex flex-col py-16 px-20 bg-white rounded-lg shadow-lg h-[450px] w-[512px] gap-6">
        <h3 className="text-primary-blue text-features">
          ¿Necesitas asesoría urgente?
        </h3>
        <p className="text-black text-body">
          Déjanos tus datos y te contactaremos lo más rápido posible.
        </p>
        <ContactForm />
      </div>
    </div>
  );
};

export default Hero;
