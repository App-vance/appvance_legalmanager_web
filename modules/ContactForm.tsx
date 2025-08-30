"use client";

import React, { useState } from "react";
import Button from "@/components/Button";
import { sendEmail, TemplateParams } from "@/services/email-service";
import { useFormValidation } from "@/hooks/useFormValidation";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const { values, errors, handleChange, validate } = useFormValidation(
    { name: "", phone: "" },
    {
      name: (val) => (!val.trim() ? "El nombre es obligatorio" : null),
      phone: (val) =>
        !/^[0-9]{10}$/.test(val) ? "Debe ser un número de 10 dígitos" : null,
    }
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validate();
    if (!isValid) return;

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    let messageContent = "";

    if (formData.get("name")) {
      messageContent += `<p><strong>Nombre:</strong> ${formData.get("name")}</p>`;
    }
    if (formData.get("phone")) {
      messageContent += `<p><strong>Teléfono:</strong> ${formData.get("phone")}</p>`;
    }

    const templateParams: TemplateParams = {
      message: messageContent, // 🔑 ahora solo un campo
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
      <div className="mb-3">
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Nombre completo"
          className={`border py-2.5 pl-6 rounded-md w-full 
            ${errors.name ? "border-red-500" : "border-gray-300"} 
            placeholder-gray-400 text-gray-800 focus:outline-blue-400`}
        />
        {errors.name && (
          <p className="text-sm text-red-500 mt-1">{errors.name}</p>
        )}
      </div>

      <div className="mb-3">
        <input
          type="tel"
          name="phone"
          value={values.phone}
          onChange={(e) => {
            const onlyNums = e.target.value.replace(/[^0-9]/g, ""); // solo dígitos
            handleChange({
              target: { name: "phone", value: onlyNums },
            } as React.ChangeEvent<HTMLInputElement>);
          }}
          placeholder="Teléfono celular"
          className={`border py-2.5 pl-6 rounded-md w-full 
            ${errors.phone ? "border-red-500" : "border-gray-300"} 
            placeholder-gray-400 text-gray-800 focus:outline-blue-400`}
        />
        {errors.phone && (
          <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
        )}
      </div>

      <Button
        text={loading ? "Enviando..." : "Contacto urgente"}
        customClass="text-button bg-secondary-blue mb-3 mt-6"
      />

      {status === "success" && (
        <p className="text-green-600">Mensaje enviado ✅</p>
      )}
      {status === "error" && <p className="text-red-600">Error al enviar ❌</p>}

      <p className="text-sm text-gray-600 mt-2">
        O conoce nuestros servicios primero.
      </p>
    </form>
  );
};

export default ContactForm;
