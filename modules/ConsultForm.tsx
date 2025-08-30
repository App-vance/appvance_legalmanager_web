"use client";

import React from 'react'
import Button from '@/components/Button';


const ConsultForm = () => {
    return (
        <div className='bg-blue-light'>
            <form className='px-8 lg:px-56 py-14 lg:py-28 text-body flex gap-6 lg:gap-10 flex-col'>
                <div className='flex flex-col lg:flex-row gap-6 lg:gap-9'>
                    <div className='flex-1'>
                        <label htmlFor="name">Nombre completo*</label>
                        <input
                            className='border border-gray-300 rounded-md px-4 py-2.5 w-full text-gray outline-secondary-blue/30 mt-3'
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Escribe aquí tu nombre"
                        />
                    </div>
                    <div className='flex-1'>
                        <label htmlFor="email">Correo electrónico*</label>
                        <input
                            className='border border-gray-300 rounded-md px-4 py-2.5 w-full text-gray outline-secondary-blue/30 mt-3'
                            type="email"
                            id="email"
                            name="email"
                            placeholder="ejemplo@correo.com"
                        />
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-6 lg:gap-9'>
                    <div className='flex-1'>
                        <label htmlFor="phone">Tu número de contacto*</label>
                        <input
                            className='border border-gray-300 rounded-md px-4 py-2.5 w-full text-gray outline-secondary-blue/30 mt-3'
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Escribe aquí tu número de contacto"
                        />
                    </div>
                    <div className="flex-1 relative">
                        <label htmlFor="interest">Área de interés*</label>
                        <select
                            className="appearance-none border border-gray-300 mt-3 rounded-md px-4 py-2.5 w-full text-gray outline-none focus:ring-1 focus:ring-secondary-blue/30 focus:border-secondary-blue/30 transition"
                            id="interest"
                            name="interest"
                        >
                            <option value="" className='bg-blue-light'>Selecciona el área legal de tu caso</option>
                            <option value="administrative" className='bg-blue-light'>Administrativa</option>
                            <option value="financial" className='bg-blue-light'>Financiera</option>
                            <option value="accounting" className='bg-blue-light'>Contable</option>
                            <option value="specific_services" className='bg-blue-light'>Servicios específicos</option>
                        </select>

                        {/* Icono flecha */}
                        <svg
                            className="pointer-events-none absolute right-4 top-[40px] lg:top-[3rem] w-5 h-5 text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
                <div>
                    <label htmlFor="message">Campo de descripción de tu caso</label>
                    <textarea
                        rows={6}
                        className='border border-gray-300 rounded-md px-4 py-2.5 w-full text-gray outline-secondary-blue/30 text-area mt-3'
                        id="message"
                        name="message"
                        placeholder="Cuéntanos los detalles de tu caso: situación actual, tipo de asesoría que necesitas, la urgencia y cualquier información importante."
                    />
                </div>
                <div>
                    <label htmlFor='priority'>¿Cuándo necesitas la asesoría?</label>
                    <div className="flex flex-wrap w-full gap-4 gap-x-8 mt-3">
                        <label className="flex items-center gap-4 text-gray">
                            <input className='select-button' type="radio" name="priority" value="alta" />
                            Lo antes posible
                        </label>
                        <label className="flex items-center gap-4 text-gray">
                            <input className='select-button' type="radio" name="priority" value="media" />
                            Esta semana
                        </label>
                        <label className="flex items-center gap-4 text-gray">
                            <input className='select-button' type="radio" name="priority" value="baja" />
                            Este mes
                        </label>
                        <label className="flex items-center gap-4  text-gray">
                            <input className='select-button' type="radio" name="priority" value="baja" />
                            Cuando sea conveniente
                        </label>
                    </div>
                </div>
                <div>
                    <label className="flex items-center gap-4 text-gray">
                        <input className='select-button' type="radio" name="terms" value="accepted" />
                        Acepto términos y condiciones
                    </label>
                </div>
                <Button text='Enviar mi consulta' customClass='w-fit' />
            </form>
        </div>
    )
}

export default ConsultForm