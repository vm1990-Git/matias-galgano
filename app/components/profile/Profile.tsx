import React, { useState } from "react";
import ProfileItem from "./ProfileItem";
import Image from "next/image";

const Profile = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className="flex flex-col gap-4 justify-center items-center bg-white py-8"
      id="profile-section"
    >
      <Image
        className="w-80 rounded-3xl"
        src="/assets/profile.jpeg"
        alt="Foto Perfil"
        width={500}
        height={500}
      />
      <span className="text-3xl font-semibold">Acerca de mí</span>
      <span className="text-center px-8 lg:px-52 xl:px-96">
        Nací, crecí y me formé en Buenos Aires. Me recibí en la UBA de médico, y
        después hice la especialidad de oftalmología en el Hospital Santa Lucía,
        donde también fui jefe de residentes (2020-2021). Allí continué mi
        formación como becario en el servicio de Cirugía de cataratas y
        refractiva (2021-2023). Hoy formo parte del servicio de urgencias del
        Hospital Santa Lucía.
      </span>

      {expanded ? (
        <div className="flex flex-col justify-center animate-fade-up animate-once">
          <div className="grid grid-cols-1 items-start justify-items-start gap-2 lg:px-52 xl:px-96 p-4">
            <ProfileItem detail="Medicina: Universidad de Buenos Aires (2009-2016)" />
            <ProfileItem detail="Oftalmología: Hospital Santa Lucía (2017-2021)" />
            <ProfileItem detail="Cirugía de cataratas y refractiva: Hospital Santa Lucía (2021-2023)" />
            <ProfileItem detail="Experiencia Laboral: Guardia Oftalmología. Cirujano de cataratas y refractiva. Cirujano de guardia oftalmológica. Consultorio, Internación" />
          </div>
        </div>
      ) : (
        <button className="font-semibold " onClick={toggleExpanded}>
          Leer más
        </button>
      )}
      {expanded && (
        <button className="font-semibold" onClick={toggleExpanded}>
          Leer menos
        </button>
      )}
    </div>
  );
};

export default Profile;
