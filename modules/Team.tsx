"use client";

import CardTeam from "@/components/CardTeam";
import Carousel from "@/components/Carousel";
import { phases } from "@/helpers/phases";

type Phases = {
  author: string;
  text: string;
};

const Team = () => {
  return (
    <div className="hidden pt-44 pb-10 lg:flex flex-col items-center gap-10 lg:px-20 xl:px-56 xl:min-w-3xl">
      <div className="flex w-full justify-between items-center gap-10">
        <CardTeam
          name="Diego Mauricio Sierra Arango"
          position="Abogado"
          qualifications={[
            "Abogado especialista en Derecho Privado, Seguros, Responsabilidad Civil, Derecho Inmobiliario y Derecho Procesal, con Maestría en Gestión de Riesgos y Responsabilidad Civil y del Estado.",
            "Cuenta con más de 20 años de experiencia asesorando y representando empresas y propiedades horizontales, con amplia trayectoria en litigio civil, responsabilidad contractual y extracontractual y gestión jurídica preventiva.",
            "Docente en diversas entidades académicas y gremiales, y actualmente se desempeña como abogado litigante y gerente de Consultorías Empresariales S.A.S., firma especializada en asesoría jurídica estratégica en propiedad horizontal.",
          ]}
        />
        <div className="w-sm bg-transparent relative">
          <div className="before:content-['“'] before:absolute before:text-[30rem] before:-top-45 before:left-0 before:text-gray-200 before:-z-10"></div>
          <Carousel<Phases>
            items={phases}
            classname3="w-full flex flex-col items-center justify-between rounded-2xl"
            height="h-full"
            renderItem={(item) => (
              <div className="flex flex-col items-center text-center px-4 py-16 h-full justify-end">
                <p className="text-body text-slate-600 mb-6">{item.text}</p>
                <span className="text-small font-bold text-slate-800">
                  {item.author}
                </span>
              </div>
            )}
          />
        </div>
      </div>
      <div className="flex w-full gap-10 justify-between">
        <CardTeam
          name="Ángela María Saldarriaga Betancur"
          position="Abogada"
          qualifications={[
            "Abogada especialista en Responsabilidad Civil, con experiencia en asesoría jurídica en régimen de propiedad horizontal y gestión de conflictos derivados de la administración de copropiedades.",
            "Se desempeña como abogada senior de Consultorías Empresariales S.A.S., donde lidera procesos de acompañamiento jurídico preventivo, estructuración de conceptos técnicos y representación en asuntos relacionados con responsabilidad contractual y extracontractual.",
          ]}
        />
        <CardTeam
          name="Verónica Sánchez Granda"
          position="Abogada"
          qualifications={[
            "Abogada junior de Consultorías Empresariales S.A.S., con experiencia en la emisión de conceptos jurídicos, análisis e interpretación de reglamentos de propiedad horizontal y acompañamiento en procesos de asesoría a copropiedades.",
            "Se destaca por su capacidad de estudio normativo, estructuración de criterios jurídicos y apoyo técnico en la gestión preventiva de riesgos en el régimen de propiedad horizontal. Participa activamente en la elaboración de respuestas legales, revisión de actuaciones administrativas y soporte jurídico a consejos de administración y representantes legales.",
          ]}
        />
        <CardTeam
          name="Sandra Milena Domínguez Aguiar"
          position="Contadora"
          qualifications={[
            "Contadora Pública con más de doce (12) años de experiencia en el sector de propiedad horizontal, especializada en auditoría, análisis presupuestal y control financiero de copropiedades.",
            "Cuenta con amplia trayectoria en revisión de estados financieros, evaluación de ejecución presupuestal, control de cartera, elaboración y seguimiento de presupuestos anuales, así como acompañamiento contable a consejos de administración y revisores fiscales.",
            "Se destaca por su enfoque en transparencia financiera, cumplimiento normativo y fortalecimiento de los controles internos en la gestión administrativa de propiedades horizontales."
          ]}
        />
      </div>
    </div>
  );
};

export default Team;
