import CardService from "@/components/CardService";
import { BriefcaseIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

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
        <div className="flex flex-col gap-8 px-8 py-10">
          <CardService
            title="Área Administrativa"
            description="Los enfoques están dados por nuestras diferentes áreas de gestión tales como:"
            icon={<BriefcaseIcon className="h-8 w-8 stroke-2 mb-4 mx-auto text-secondary-blue" />}
            items={[
              "Área operativa",
              "Área de mantenimientos",
              "Área de talento humano",
              "Área jurídica",
              "Área financiera",
              "Área contable",
              "Área de dirección",
              "Área de Control"
            ]}
          />
          <CardService
            title="Área Jurídica"
            description="Los enfoques están dados por nuestras diferentes áreas de gestión tales como:"
            icon={<DocumentTextIcon className="h-8 w-8 stroke-2 mb-4 mx-auto text-secondary-blue" />}
            items={[
              "Área operativa",
              "Área de mantenimientos",
              "Área de talento humano",
              "Área jurídica",
              "Área financiera",
              "Área contable",
              "Área de dirección",
              "Área de Control"
            ]}
          />
        </div>
      </section>
    </>
  );
}