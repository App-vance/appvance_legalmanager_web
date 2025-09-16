"use client";

import CardTeam from "@/components/CardTeam";
import Carousel from "@/components/Carousel";
import SimpleCardTeam from "@/components/SimpleCardTeam";
import { phases } from "@/helpers/phases";

type Phases = {
  author: string;
  text: string;
};

const Team = () => {
  return (
    // Necesito que quede centrado el contenido
    <div className="hidden pt-44 pb-10 lg:flex flex-col items-center gap-10 lg:px-20 xl:px-56 xl:min-w-3xl">
      <div className="flex w-full justify-between gap-10">
        <CardTeam
          name="Diego Mauricio Sierra Arango"
          position="Gerente General"
          image="/img/gerente.jpg"
          qualifications={[
            "Abogado Universidad de Antioquia",
            "Especialista Gestión Inmobiliaria Universidad Nacional",
            "Especialista Derecho Procesal Universidad de Medellín",
            "Especialista Responsabilidad Civil y del Estado Universidad Autónoma",
            "Especialista Derecho de Seguros Universidad Javeriana",
            "Conciliador en Derecho",
            "Docente Universitario.",
          ]}
        />
        <div className="w-sm bg-transparent relative">
          <div className="before:content-['“'] before:absolute before:text-[30rem] before:-top-45 before:left-0 before:text-gray-200 before:-z-10"></div>
          <Carousel<Phases>
            items={phases}
            classname3="w-full flex flex-col items-center justify-between rounded-2xl"
            height="h-[26.875rem]"
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
      <div className="flex w-full gap-10">
        <CardTeam
          name="Adriana María Sánchez Murillo"
          position="Contadora"
          image="/img/gerente.jpg"
          qualifications={[
            "Contadora Universidad Luis Amigó",
            "Especialista revisoría fiscal Universidad Autónoma",
            "Especialista derecho tributario Universidad Autónoma y diplomada en propiedad horizontal.",
          ]}
        />
        <CardTeam
          name="Dora Lucía Uribe Álvarez"
          position="Contadora"
          image="/img/gerente.jpg"
          qualifications={[
            "Contadora Politécnico Jaime Isaza Cadavid",
            "Especialización en normas internacionales de información financiera Universidad Autónoma Latinoamericana.",
          ]}
        />
      </div>
      <div className="flex w-full gap-8 justify-between">
        <SimpleCardTeam
          name="Andrea Castaño Gómez"
          position="Asistente Administrativo"
          image="/img/team1.jpg"
        />
        <SimpleCardTeam
          name="Sandra Domínguez"
          position="Contadora Pública"
          image="/img/team1.jpg"
        />
        <SimpleCardTeam
          name="Juan Carlos Suárez"
          position="Mensajero"
          image="/img/team1.jpg"
        />
      </div>
    </div>
  );
};

export default Team;
