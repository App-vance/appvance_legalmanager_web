import React from 'react'

import Button from '@/components/Button';

const ContactForm = () => {
  return (
    <form>
      <input type="text" id="name" name="name" required />
      <Button text="Contacto urgente" customClass="text-button bg-secondary-blue mb-3 mt-6" />
      <p className='text-body text-body-secondary text-black'>O conoce nuestros servicios primero.</p>
    </form>
  )
}

export default ContactForm