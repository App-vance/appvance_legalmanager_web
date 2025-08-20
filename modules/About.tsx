import React from 'react'

const About = () => {
  return (
    <div className='relative about-bg'>
        <div className='absolute  max-w-[718px] bg-primary-blue text-white px-24 py-[6.4rem] flex flex-col gap-8 -bottom-20 rounded-lg'>
            <h3 className='text-body-secondary'>Quiénes somos</h3>
            <p className='text-subtitle'>Somos un equipo profesional a tu servicio.</p>
            <p className='text-body-secondary'>Ofrecemos a nuestros clientes un servicio completo basado en profesionalismo y experiencia, garantizando el buen funcionamiento de las gestiones encomendadas y contribuyendo al desarrollo óptimo de cada línea de trabajo.
                <br /> <br />
Actualmente brindamos asesorías en derecho y contabilidad en Bogotá y Medellín, en áreas jurídicas, contables, tributarias, de revisoría fiscal, auditoría y administración de propiedad horizontal.</p>
        </div>
    </div>
  )
}

export default About