import React from "react";
import ServiceItem from "./ServiceItem";
import { BsJournalMedical } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

interface ServiceSectionProps {}

const ServiceSection: React.FC<ServiceSectionProps> = ({}) => {
  return (
    <div
      className="flex flex-col w-full justify-center items-center text-white py-8 bg-primary"
      id="service-section"
    >
      <h2 className="font-bold text-4xl text-center">Nuestros Servicios</h2>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-0 md:gap-20 pt-10">
        <ServiceItem
          title="Consultorio general de Oftalmología"
          icon={BsJournalMedical}
          iconSize={100}
          description={[
            "Atención integral para la salud ocular, realizando exámenes, diagnósticos y tratamientos personalizados para cada paciente.",
          ]}
        />
        <ServiceItem
          title="Estudios"
          icon={FaUserDoctor}
          iconSize={100}
          description={[
            "Fondo de ojos",
            "Test de ojo seco",
            "Toma de presión intraocular",
            "Retinografía",
            "Test de Ishihara (colores)",
          ]}
        />
        <ServiceItem
          title="Cirugías"
          icon={FaEye}
          iconSize={100}
          description={[
            "Cataratas",
            "Refractiva con Excimer Laser",
            "Refractiva con lentes fáquicas",
            "Tapones lagrimales",
            "Glaucoma",
            "Anillos intraestromales",
            "Retina",
            "Iridotomía con Yag Láser",
            "Fotocoagulación con láser argón",
            "Pterigion autoinjerto conjuntival",
            "Capsulotomía posterior con Yag Láser",
          ]}
        />
      </div>
    </div>
  );
};

export default ServiceSection;
