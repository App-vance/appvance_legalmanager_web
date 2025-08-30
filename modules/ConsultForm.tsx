"use client";

import React from 'react'
import Button from '@/components/Button';


const ConsultForm = () => {
    return (
        <div className='bg-blue-light'>
            <form className='px-8 py-14'>
                <div className='flex flex-col gap-3 mb-6 text-body'>
                    <label htmlFor="name">Nombre completo*</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Escribe aquí tu nombre"
                    />
                </div>
                <div className='flex flex-col gap-3 mb-6'>
                    <label htmlFor="email">Correo electrónico*</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="ejemplo@correo.com"
                    />
                </div>
                <div className='flex flex-col gap-3 mb-6'>
                    <label htmlFor="phone">Tu número de contacto*</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Escribe aquí tu número de contacto"
                    />
                </div>
                <div className='flex flex-col gap-3 mb-6'>
                    <label htmlFor="message">Campo de descripción de tu caso</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Cuéntanos los detalles de tu caso: situación actual, tipo de asesoría que necesitas, la urgencia y cualquier información importante."
                    />
                </div>
                <div className='flex flex-col gap-3 mb-6'>
                    <label htmlFor='priority'>¿Cuándo necesitas la asesoría?</label>
                    <div className="flex flex-wrap w-full gap-4">
                        <label className="flex items-center gap-2 flex-1 min-w-[150px]">
                            <input type="radio" name="priority" value="alta" />
                            Lo antes posible
                        </label>
                        <label className="flex items-center gap-2 flex-1 min-w-[150px]">
                            <input type="radio" name="priority" value="media" />
                            Esta semana
                        </label>
                        <label className="flex items-center gap-2 flex-1 min-w-[150px]">
                            <input type="radio" name="priority" value="baja" />
                            Este mes
                        </label>
                    </div>
                </div>
                <div className='flex gap-3 mb-6'>
                    <label className="flex items-center gap-4">
                        <input type="radio" name="terms" value="accepted" />
                        Acepto términos y condiciones
                    </label>
                </div>
                <Button text='Enviar mi consulta' customClass='' />
            </form>
        </div>
    )
}

export default ConsultForm