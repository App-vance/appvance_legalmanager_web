"use client";

import React, { useState } from "react";
import Button from "@/components/Button";
import { sendEmail, TemplateParams } from "@/services/email-service";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const templateParams: TemplateParams = {
      name: (formData.get("name") ?? "").toString(),
      phone: (formData.get("phone") ?? "").toString(),
    };

    try {
      await sendEmail('service_0b2yiq1', 'template_74uavx6', templateParams);
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="name"
        name="name"
        className="border border-gray-300 py-2.5 pl-6 text-body rounded-md w-full text-gray outline-secondary-blue/30"
        placeholder="Nombre completo"
      />
      <input
        type="tel"
        id="phone"
        name="phone"
        className="border border-gray-300 py-2.5 pl-6 text-body rounded-md w-full mt-3 text-gray outline-secondary-blue/30"
        placeholder="Teléfono celular"
      />

      <Button
        text={loading ? "Enviando..." : "Contacto urgente"}
        customClass="text-button bg-secondary-blue mb-3 mt-6"
      />

      {status === "success" && <p className="text-green-600">Mensaje enviado ✅</p>}
      {status === "error" && <p className="text-red-600">Error al enviar ❌</p>}

      <p className="text-body text-body-secondary text-black">
        O conoce nuestros servicios primero.
      </p>
    </form>
  );
};

export default ContactForm;
