import CardTeam from "@/components/CardTeam";
import SimpleCardTeam from "@/components/SimpleCardTeam";

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
            "Docente Universitario."
          ]}
        />
        <div className="w-sm bg-gray-100">
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
