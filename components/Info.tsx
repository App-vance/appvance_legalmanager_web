import { ExclamationCircleIcon, DocumentTextIcon, CurrencyDollarIcon, CreditCardIcon } from "@heroicons/react/24/outline";

export default function Info() {
  return (
    <>
      <section className="flex px-14 pt-10 lg:pt-24">
        <div className="w-full lg:flex-1">
          <div className="flex flex-col gap-6">
            <div className="flex-1 border-b border-gray-light lg:border-none">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
                <div className="shrink-1">
                  <ExclamationCircleIcon className="h-8 w-8 mb-4 mx-auto text-secondary-blue lg:w-12 lg:h-12" />
                </div>
                <div className="text-center lg:text-start">
                  <h1 className=" text-gray text-features mb-4 lg:text-subtitle lg:mb-2">¿Tienes un problema inmobiliario, laboral, civil o comercial?</h1>
                  <p className="text-body text-gray mb-6 lg:mb-0">Te ofrecemos asesoría legal integral.</p>
                </div>
              </div>
            </div>

            <div className="flex-1 border-b border-gray-light lg:border-none">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
                <div className="shrink-1">
                  <DocumentTextIcon className="h-8 w-8 mb-4 mx-auto text-secondary-blue lg:w-12 lg:h-12" />
                </div>
                <div className="text-center lg:text-start">
                  <h1 className=" text-gray text-features mb-4 lg:text-subtitle lg:mb-2">¿Tienes dificultades con la pensión o seguridad social?</h1>
                  <p className="text-body text-gray mb-6 lg:mb-0">Te ayudamos a gestionarlo.</p>
                </div>
              </div>
            </div>

            <div className="flex-1 border-b border-gray-light lg:border-none">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
                <div className="shrink-1">
                  <CurrencyDollarIcon className="h-8 w-8 mb-4 mx-auto text-secondary-blue lg:w-12 lg:h-12" />
                </div>
                <div className="text-center lg:text-start">
                  <h1 className=" text-gray text-features mb-4 lg:text-subtitle  lg:mb-2">¿Necesitas orden en tus finanzas?</h1>
                  <p className="text-body text-gray mb-6 lg:mb-0">Te apoyamos con auditoria, revisión fiscal y contabilidad.</p>
                </div>
              </div>
            </div>

            <div className="flex-1 border-b border-gray-light lg:border-none">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
                <div className="shrink-1">
                  <CreditCardIcon className="h-8 w-8 mb-4 mx-auto text-secondary-blue lg:w-12 lg:h-12" />
                </div>
                <div className="text-center lg:text-start">
                  <h1 className=" text-gray text-features mb-4 lg:text-subtitle lg:mb-2">¿Problemas con cartera, seguros o propiedad horizontal?</h1>
                  <p className="text-body text-gray mb-6 lg:mb-0">Te respaldamos con soluciones legales.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:flex-1">
          <div className="">imagen</div>
        </div>
      </section>
    </>
  );
}