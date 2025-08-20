import React from 'react'

import Button from '@/components/Button';

const ContactForm = () => {
  return (
    <form>
      <input type="text" id="name" name="name" className='border border-gray-300 py-2.5 pl-6 text-body rounded-md w-full text-gray outline-secondary-blue/30' placeholder='Nombre completo' />
      <input type="tel" id="phone" name="phone" className='border border-gray-300 py-2.5 pl-6 text-body rounded-md w-full mt-3 text-gray outline-secondary-blue/30' placeholder='Teléfono celular' />
      <Button text="Contacto urgente" customClass="text-button bg-secondary-blue mb-3 mt-6" />
      <p className='text-body text-body-secondary text-black'>O conoce nuestros servicios primero.</p>
    </form>
  )
}

export default ContactForm