import BenefitsSection from "./BenefitsSection";
import SectionIntro from "./SectionIntro";

const ClientTestimonials = () => {
  return (
    <>
      <div className="p-8 md:px-20 lg:p-20 xl:py-24 xl:px-56">
        <SectionIntro title="Opiniones de nuestros clientes" titleClass="text-subtitle text-primary-blue font-inter"  description="La confianza se construye con resultados y un acompañamiento cercano en cada gestión." descriptionClass="text-body text-primary-blue font-quicksand" />
        <div className="bg-secondary-blue mt-8 lg:mt-14">Opiniones</div>
      </div>
      <BenefitsSection />
    </>
  );
};

export default ClientTestimonials;