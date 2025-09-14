import { ArrowTrendingUpIcon, LockClosedIcon, ClipboardIcon, BriefcaseIcon, HandThumbUpIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import SectionIntro from "./SectionIntro";

const BenefitsSection = () => {
  return (
    <>
      <div className="p-8 bg-primary-blue lg:p-20 xl:py-24 xl:px-56">
        <div className="lg:hidden">
          <SectionIntro title="¿Por qué elegirnos?" titleClass="font-inter text-subtitle text-white" />
        </div>
        <h1 className="hidden lg:!block lg:text-center text-subtitle lg:text-white lg:mb-16">¿Por qué elegirnos?</h1>
        <div className="grid grid-cols-1 gap-6 mt-8 font-quicksand lg:grid-cols-3 lg:gap-x-28 lg:gap-y-14">
          <div className="inline-flex gap-6 items-center">
            <ArrowTrendingUpIcon className="w-8 h-8 text-secondary-blue stroke-2 lg:w-12 lg:h-12" />
            <span className="text-white text-body">Resultados administrativos y financieros optimizados.</span>
          </div>
          <div className="inline-flex gap-6 items-center">
            <LockClosedIcon className="w-8 h-8 text-secondary-blue stroke-2 lg:w-12 lg:h-12" />
            <span className="text-white text-body">Seguridad jurídica y acompañamiento legal.</span>
          </div>
          <div className="inline-flex gap-6 items-center">
            <ClipboardIcon className="w-8 h-8 text-secondary-blue stroke-2 lg:w-12 lg:h-12" />
            <span className="text-white text-body">Información actualizada en cada proceso legal y administrativo.</span>
          </div>
          <div className="hidden lg:!inline-flex gap-6 items-center">
            <BriefcaseIcon className="w-8 h-8 text-secondary-blue stroke-2 lg:w-12 lg:h-12" />
            <span className="text-white text-body">Fortalecimiento de los órganos administrativos</span>
          </div>
          <div className="hidden lg:!inline-flex gap-6 items-center">
            <HandThumbUpIcon className="w-8 h-8 text-secondary-blue stroke-2 lg:w-12 lg:h-12" />
            <span className="text-white text-body">Reintegro garantizado y recuperación priorizada</span>
          </div>
          <div className="hidden lg:!inline-flex gap-6 items-center">
            <CurrencyDollarIcon className="w-8 h-8 text-secondary-blue stroke-2 lg:w-12 lg:h-12" />
            <span className="text-white text-body">Gestión eficiente y oportuna de cartera</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BenefitsSection;