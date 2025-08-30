import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

const PUBLIC_KEY = "cGdzlOjd6MMxHJm9J";


export interface TemplateParams {
    [key: string]: string | number | boolean;
}

/**
 * Envía un correo usando EmailJS
 * @param templateId - El ID de la plantilla en EmailJS
 * @param serviceId - El ID del servicio en EmailJS
 * @param templateParams - Los parámetros que espera la plantilla
 * @returns Respuesta de EmailJS
 */
export const sendEmail = async (
  serviceId: string,
  templateId: string,
  templateParams: TemplateParams
): Promise<EmailJSResponseStatus> => {
    console.log(serviceId, templateId, templateParams);
  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      PUBLIC_KEY
    );
    return response;
  } catch (error) {
    throw error;
  }
};
