import CardService from "@/components/CardService";
import { BriefcaseIcon, DocumentTextIcon, CurrencyDollarIcon, Squares2X2Icon } from "@heroicons/react/24/outline";

export default function Services() {
  return (
    <>
      <section className="flex flex-col lg:pl-56 lg:py-20">
        <div className="flex flex-col items-center gap-3 text-white text-center bg-primary-blue h-fit p-8 md:px-20 lg:p-0 lg:text-start lg:bg-white lg:text-primary-blue lg:items-start">
          <h1 className="text-body-secondary font-quicksand">¿Qué te ofrecemos?</h1>
          <h2 className="text-2xl font-semibold font-inter lg:text-subtitle lg:max-w-[30.625rem]">Servicios jurídicos, contables y administrativos.</h2>
          <div className="w-8 h-1 bg-secondary-blue"></div>
          <p className="font-quicksand text-body-secondary lg:max-w-[45.625rem] lg:text-body">Te respaldamos con asesoría integral en lo jurídico, contable y administrativo, asegurando confianza y estabilidad en cada decisión.</p>
        </div>
        <div className="flex flex-col gap-8 px-8 py-10 md:px-36 lg:flex-row lg:px-1 lg:gap-10 lg:overflow-x-auto custom-scrollbar">
          <CardService
            title="Área Administrativa"
            description="Los enfoques están dados por nuestras diferentes áreas de gestión tales como:"
            customClass="lg:grid-cols-2"
            icon={<BriefcaseIcon className="h-8 w-8 stroke-2 mb-4 mx-auto text-secondary-blue lg:ml-0 lg:h-10 lg:w-10" />}
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
            description="Nuestra área local ofrece acompañamiento en las siguientes áreas del Derecho:"
            icon={<DocumentTextIcon className="h-8 w-8 stroke-2 mb-4 mx-auto text-secondary-blue lg:ml-0 lg:h-10 lg:w-10" />}
            items={[
              "Derecho comercial",
              "Derecho inmobiliario",
              "Derecho laboral",
              "Derecho civil",
              "Seguridad social"
            ]}
          />
          <CardService
            title="Área Contable"
            description="El objetivo es la prestación de servicios enfocados en:"
            icon={<CurrencyDollarIcon className="h-8 w-8 stroke-2 mb-4 mx-auto text-secondary-blue lg:ml-0 lg:h-10 lg:w-10" />}
            items={[
              "Servicio de auditoría",
              "La revisión fiscal",
              "Servicio de contabilidad",
              "Derecho civil",
              "Seguridad social"
            ]}
          />
          <CardService
            title="Servicios Específicos"
            description="Otros servicios complementarios que tenemos para ofrecerte:"
            icon={<Squares2X2Icon className="h-8 w-8 stroke-2 mb-4 mx-auto text-secondary-blue lg:ml-0 lg:h-10 lg:w-10" />}
            items={[
              "Recuperación de cartera",
              "Asesoría en propiedad horizontal",
              "Procesos de responsabilidad civil",
              "Procesos de responsabilidad estatal ",
              "Derecho de seguros"
            ]}
          />
        </div>
      </section>
    </>
  );
}