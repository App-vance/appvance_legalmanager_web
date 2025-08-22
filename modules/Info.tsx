import Image from "next/image";
import { ExclamationCircleIcon, DocumentTextIcon, CurrencyDollarIcon, CreditCardIcon } from "@heroicons/react/24/outline";

export default function Info() {
  return (
    <>
      <section className="bg-[#F1FAFF] flex flex-col justify-between lg:flex-row lg:p-24 lg:gap-6">
        <div className="w-full px-9 py-16 lg:flex-1 lg:px-0 lg:py-0">
          <div className="flex flex-col gap-6 lg:gap-10">
            <div className="flex-1 border-b border-gray lg:border-none last:border-b-0 xl:max-w-[560px]">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10">
                <div className="shrink-1">
                  <ExclamationCircleIcon className="h-8 w-8 stroke-2 mb-4 mx-auto text-secondary-blue lg:w-12 lg:h-12 lg:mb-0" />
                </div>
                <div className="text-center lg:text-start">
                  <h1 className=" text-gray text-features mb-4 lg:text-subtitle lg:mb-2 lg:text-[#201D15]">¿Tienes un problema inmobiliario, laboral, civil o comercial?</h1>
                  <p className="text-body text-gray mb-6 lg:mb-0">Te ofrecemos asesoría legal integral.</p>
                </div>
              </div>
            </div>

            <div className="flex-1 border-b border-gray lg:border-none last:border-b-0 xl:max-w-[560px]">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10">
                <div className="shrink-1">
                  <DocumentTextIcon className="h-8 w-8 stroke-2 mb-4 mx-auto text-secondary-blue lg:w-12 lg:h-12 lg:mb-0" />
                </div>
                <div className="text-center lg:text-start">
                  <h1 className=" text-gray text-features mb-4 lg:text-subtitle lg:mb-2 lg:text-black">¿Tienes dificultades con la seguridad social?</h1>
                  <p className="text-body text-gray mb-6 lg:mb-0">Te ayudamos a gestionarlo.</p>
                </div>
              </div>
            </div>

            <div className="flex-1 border-b border-gray lg:border-none last:border-b-0 xl:max-w-[560px]">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10">
                <div className="shrink-1">
                  <CurrencyDollarIcon className="h-8 w-8 stroke-2 mb-4 mx-auto text-secondary-blue lg:w-12 lg:h-12 lg:mb-0" />
                </div>
                <div className="text-center lg:text-start">
                  <h1 className=" text-gray text-features mb-4 lg:text-subtitle lg:mb-2 lg:text-black">¿Necesitas orden en tus finanzas?</h1>
                  <p className="text-body text-gray mb-6 lg:mb-0">Te apoyamos con auditoria, revisión fiscal y contabilidad.</p>
                </div>
              </div>
            </div>

            <div className="flex-1 border-b border-gray lg:border-none last:border-b-0 xl:max-w-[560px]">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10">
                <div className="shrink-1">
                  <CreditCardIcon className="h-8 w-8 stroke-2 mb-4 mx-auto text-secondary-blue lg:w-12 lg:h-12 lg:mb-0" />
                </div>
                <div className="text-center lg:text-start">
                  <h1 className=" text-gray text-features mb-4 lg:text-subtitle lg:mb-2 lg:text-black">¿Problemas con cartera, seguros o propiedad horizontal?</h1>
                  <p className="text-body text-gray mb-6 lg:mb-0">Te respaldamos con soluciones legales.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative px-0 w-full h-[350px] lg:flex-1 lg:h-[500px] ">
          <Image
            src="/img/image-legal-manager-info.webp"
            alt="Ejemplo"
            fill
            className="!rounded-none lg:rounded-lg lg:max-w-[632px] lg:max-h-full lg:ml-auto"
          />
        </div>
      </section>
    </>
  );
}