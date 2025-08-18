"use client";

import Button from "@/components/Button";
import ContactForm from "@/modules/ContactForm";

const Hero = () => {
  return (
    <div className="hero-bg flex items-center justify-between px-20 text-white">
      <div>
        <h1 className="text-title max-w-[650px]">
          Tu aliado legal en cada etapa de tu negocio y vida
        </h1>
        <h3 className="pt-6 pb-9 text-[1rem] font-semibold leading-[24px]">Asesoría integral en las principales áreas del derecho.</h3>
        <Button
          text="Comúnicate con nosotros."
          customClass="text-button bg-secondary-blue"
          onClick={() => console.log("Solicitar asesoría clicked")}
        />
      </div>
      <div className="flex flex-col py-16 px-20 bg-white rounded-lg shadow-lg h-[450px] w-[512px] gap-6">
        <h3 className="text-primary-blue text-features">¿Necesitas asesoría urgente?</h3>
        <p className="text-black text-body">Déjanos tus datos y te contactaremos lo más rápido posible.</p>
        <ContactForm />
      </div>
    </div>
  );
};

export default Hero;
