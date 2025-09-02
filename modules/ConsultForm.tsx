"use client";

import React from "react";
import Button from "@/components/Button";
import { useFormValidation } from "@/hooks/useFormValidation";
import { sendEmail, TemplateParams } from "@/services/email-service";

const ConsultForm = () => {
  const { values, errors, handleChange, validate } = useFormValidation(
    {
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
      priority: "",
      terms: "",
    },
    {
      name: (val) =>
        !val.trim() ? "El nombre es obligatorio" : null,
      email: (val) =>
        !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val)
          ? "Ingrese un email válido"
          : null,
      phone: (val) =>
        !/^[0-9]{10}$/.test(val)
          ? "Debe ser un número de 10 dígitos"
          : null,
      interest: (val) =>
        !val.trim() ? "Selecciona un área de interés" : null,
      message: (val) =>
        !val.trim() ? "Ingresa una descripción del caso" : null,
      priority: (val) =>
        !val.trim() ? "Seleccione la prioridad" : null,
      terms: (val) =>
        val !== "accepted" ? "Acepte términos y condiciones" : null,
    }
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;

    const formData = new FormData(e.currentTarget);
    
    let messageContent = "";

    messageContent += `<p><strong>Nombre:</strong> ${formData.get("name")}</p>`;
    messageContent += `<p><strong>Correo electrónico:</strong> ${formData.get("email")}</p>`;
    messageContent += `<p><strong>Teléfono:</strong> ${formData.get("phone")}</p>`;
    messageContent += `<p><strong>Área de interés:</strong> ${formData.get("interest")}</p>`;
    messageContent += `<p><strong>Descripción del caso:</strong> ${formData.get("message")}</p>`;
    messageContent += `<p><strong>Prioridad:</strong> ${formData.get("priority")}</p>`;

    const templateParams: TemplateParams = {
        message: messageContent, // 🔑 ahora solo un campo
    };

    try {
        await sendEmail('service_0b2yiq1', 'template_74uavx6', templateParams);
        // setStatus("success");
    } catch (error) {
        console.error(error);
        // setStatus("error");
    } finally {
        // setLoading(false);
    }
  };

  return (
    <div className="bg-blue-light font-quicksand">
      <form
        onSubmit={handleSubmit}
        className="px-8 lg:px-56 py-14 lg:py-28 text-body flex gap-6 lg:gap-10 flex-col"
      >
        {/* Nombre y Correo */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-9">
          <div className="flex-1">
            <label htmlFor="name">Nombre completo*</label>
            <input
              className={`border rounded-md px-4 py-2.5 w-full text-gray outline-secondary-blue/30 mt-3 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              type="text"
              id="name"
              name="name"
              placeholder="Escribe aquí tu nombre"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div className="flex-1">
            <label htmlFor="email">Correo electrónico*</label>
            <input
              className={`border rounded-md px-4 py-2.5 w-full text-gray outline-secondary-blue/30 mt-3 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              type="email"
              id="email"
              name="email"
              placeholder="ejemplo@correo.com"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Teléfono y Área */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-9">
          <div className="flex-1">
            <label htmlFor="phone">Tu número de contacto*</label>
            <input
              className={`border rounded-md px-4 py-2.5 w-full text-gray outline-secondary-blue/30 mt-3 ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              type="text"
              id="phone"
              name="phone"
              placeholder="Escribe aquí tu número de contacto"
              value={values.phone}
              onChange={(e) => {
                const onlyNums = e.target.value.replace(/[^0-9]/g, "");
                handleChange({
                  target: { name: "phone", value: onlyNums },
                } as React.ChangeEvent<HTMLInputElement>);
              }}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
          <div className="flex-1 relative">
            <label htmlFor="interest">Área de interés*</label>
            <select
              className={`appearance-none border mt-3 rounded-md px-4 py-2.5 w-full text-gray outline-none focus:ring-1 focus:ring-secondary-blue/30 focus:border-secondary-blue/30 transition ${
                errors.interest ? "border-red-500" : "border-gray-300"
              }`}
              id="interest"
              name="interest"
              value={values.interest}
              onChange={handleChange}
            >
              <option value="" className="bg-blue-light">
                Selecciona el área legal de tu caso
              </option>
              <option value="Administrativa" className="bg-blue-light">
                Administrativa
              </option>
              <option value="Financiera" className="bg-blue-light">
                Financiera
              </option>
              <option value="Contable" className="bg-blue-light">
                Contable
              </option>
              <option value="Servicios específicos" className="bg-blue-light">
                Servicios específicos
              </option>
            </select>
            {errors.interest && (
              <p className="text-red-500 text-sm mt-1">{errors.interest}</p>
            )}
            <svg
              className="pointer-events-none absolute right-4 top-[40px] lg:top-[3rem] w-5 h-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Mensaje */}
        <div>
          <label htmlFor="message">Campo de descripción de tu caso*</label>
          <textarea
            rows={6}
            className={`border rounded-md px-4 py-2.5 w-full text-gray outline-secondary-blue/30 text-area mt-3 ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
            id="message"
            name="message"
            placeholder="Cuéntanos los detalles de tu caso: situación actual, tipo de asesoría que necesitas, la urgencia y cualquier información importante."
            value={values.message}
            onChange={handleChange}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Prioridad */}
        <div>
          <label htmlFor="priority">¿Cuándo necesitas la asesoría?*</label>
          <div className="flex flex-wrap w-full gap-4 gap-x-8 mt-3">
            {["alta", "media", "baja", "comodin"].map((val, idx) => (
              <label
                key={idx}
                className="flex items-center gap-4 text-gray cursor-pointer"
              >
                <input
                  className="select-button"
                  type="radio"
                  name="priority"
                  value={val}
                  checked={values.priority === val}
                  onChange={handleChange}
                />
                {val === "alta"
                  ? "Lo antes posible"
                  : val === "media"
                  ? "Esta semana"
                  : val === "baja"
                  ? "Este mes"
                  : "Cuando sea conveniente"}
              </label>
            ))}
          </div>
          {errors.priority && (
            <p className="text-red-500 text-sm mt-1">{errors.priority}</p>
          )}
        </div>

        {/* Terms */}
        <div>
          <label className="flex items-center gap-4 text-gray cursor-pointer">
            <input
              className="select-button"
              type="radio"
              name="terms"
              value="accepted"
              checked={values.terms === "accepted"}
              onChange={handleChange}
            />
            Acepto términos y condiciones*
          </label>
          {errors.terms && (
            <p className="text-red-500 text-sm mt-1">{errors.terms}</p>
          )}
        </div>

        <Button text="Enviar mi consulta" customClass="w-fit" />
      </form>
    </div>
  );
};

export default ConsultForm;
