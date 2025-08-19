import CardService from "@/components/CardService";

export default function Services() {
  return (
    <>
      <section className="flex flex-col">
        <div className="flex flex-col items-center gap-3 text-white text-center bg-primary-blue h-fit p-8 lg:p-0 lg:text-start lg:bg-white lg:text-primary-blue lg:items-start">
          <h1 className="text-body">¿Qué te ofrecemos?</h1>
          <h2 className="text-subtitle">Servicios jurídicos, contables y administrativos.</h2>
          <div className="w-8 h-1 bg-secondary-blue"></div>
          <p>Te respaldamos con asesoría integral en lo jurídico, contable y administrativo, asegurando confianza y estabilidad en cada decisión.</p>
        </div>
        <div className="px-5 py-8">
          <CardService />
        </div>
      </section>
    </>
  );
}