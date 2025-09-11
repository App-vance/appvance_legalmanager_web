import React from 'react'

const About = () => {
  return (
    <div className="relative">
      <div className="about-bg w-full h-[350px] md:h-[400px] lg:h-[680px] bg-cover bg-center" />
      <div
        className="
          w-full bg-primary-blue text-white flex flex-col items-center text-center p-8 gap-3
          lg:absolute lg:w-auto lg:left-0 lg:-bottom-20 lg:max-w-[718px] lg:p-8 md:px-20 lg:px-24 lg:py-[6.4rem] lg:flex-col lg:gap-8 lg:rounded-lg lg:text-left lg:items-start
        "
      >
        <h3 className="text-body-secondary font-quicksand">Quiénes somos</h3>
        <p className="text-subtitle font-inter">Somos un equipo profesional a tu servicio.</p>
        <div className="w-8 h-1 bg-secondary-blue lg:hidden"></div>
        <p className="text-body-secondary font-quicksand">
          Ofrecemos a nuestros clientes un servicio completo basado en profesionalismo y experiencia, garantizando el buen funcionamiento de las gestiones encomendadas y contribuyendo al desarrollo óptimo de cada línea de trabajo.
          <br /> <br />
          Actualmente brindamos asesorías en derecho y contabilidad en Bogotá y Medellín, en áreas jurídicas, contables, tributarias, de revisoría fiscal, auditoría y administración de propiedad horizontal.
        </p>
      </div>
    </div>
  )
}

export default About