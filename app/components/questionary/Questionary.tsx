import QuestionaryItem from "./QuestionaryItem";

interface QuestionaryProps {}

const Questionary: React.FC<QuestionaryProps> = ({}) => {
  return (
    <div
      className="flex justify-center flex-col gap-4 py-8 z-10 bg-white text-black"
      id="questionary-section"
    >
      <span className="text-center font-bold text-4xl">
        Preguntas Frecuentes
      </span>
      <div className="flex justify-center flex-col gap-5 xl:grid xl:grid-cols-2 md:self-center md:items-start p-4">
        <QuestionaryItem
          question="¿Qué debo traer a mi primera consulta?"
          answer="Trae cualquier resumen de historia clínica disponible, estudios previos. Si la consulta es por fondo de ojos, se recomienda asistir acompañado."
        />
        <QuestionaryItem
          question="¿Cuánto dura una consulta oftalmológica?"
          answer="Entre 10 y 15 minutos, dependiendo de la complejidad del caso y si ya nos conocemos previamente."
        />
        <QuestionaryItem question="¿Atendés por Obra Social?" answer="Osde." />
        <QuestionaryItem
          question="¿Ofrecen consultas en línea?"
          answer="Si, podés estar en cualquier parte del mundo. Utilizamos plataformas como Zoom y Teams.  Utilizo estándares de confidencialidad y calidad en la atención, incluso en el entorno virtual. Tu privacidad y bienestar son nuestra prioridad, sin importar la modalidad de consulta que elijas."
        />
        <QuestionaryItem
          question="¿Cuáles son los síntomas para consultar a un oftalmólogo?"
          answer="En general, debe realizarse un control anual, sobre todo si existen antecedentes de patologías oftalmológicas como el glaucoma, o antecedentes de cirugías oftalmológicas."
        />
        <QuestionaryItem
          question="¿Qué es un fondo de ojos?"
          answer="Es un estudio para evaluar las estructuras del ojo y explorar lesiones, como nevus o desgarros entre otros. Tiempo aproximado: 45 minutos."
        />
        <QuestionaryItem
          question="¿Cómo es la preparación de un fondo de ojos?"
          answer="No hay preparación. Debe concurrir preferentemente acompañado, con lentes de Sol y sin conducir ya que se verá afectada la visión, sobre todo de cerca."
        />
        <QuestionaryItem
          question="¿Hacés cirugías de catarata y refractivas?"
          answer="¡Sí! Luego de una evaluación completa con fondo de ojos, toma de presión y los estudios que correspondiere."
        />
      </div>
    </div>
  );
};

export default Questionary;
