"use client";

import Header from "./components/Header";
import Navbar from "./components/navbar/Navbar";
import TwoIconSection from "./components/twoIconSection/TwoIconSection";

import { IoLogoWhatsapp, IoMdMailOpen } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import useScrollTo from "./hooks/useScrollTo";
import Profile from "./components/profile/Profile";
import Questionary from "./components/questionary/Questionary";
import Location from "./components/Location";
import ServiceSection from "./components/serviceSection/ServiceSection";
import { FaHospital } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import Footer from "./components/Footer";
import ContactUs from "./components/contactUs/ContactUs";

// import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Home() {
  const scrollTo = useScrollTo();

  const openWhatsapp = () => {
    window.open("https://api.whatsapp.com/send/?phone=");
  };

  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <Header
        title="Dr. Matias Galgano"
        description="¡Hola! Te doy la bienvenida a mi sitio web para conocernos un poco.
          Mi nombre es Matías Galgano, oftalmólogo formado en la Universidad de Buenos Aires y en el Hospital Santa Lucía de Buenos Aires.
          "
      />
      <TwoIconSection
        iconA={FaHospital}
        iconsSize={100}
        titleA="Atención Presencial"
        descriptionA='Pres. José E. Uriburu 1170 PB "A", CABA'
        actionA={() => {
          scrollTo("location-section");
        }}
        iconB={RiComputerLine}
        titleB="Atención Virtual"
        descriptionB="Videollamadas, Zoom & Meet"
        actionB={() => null}
      />
      <Profile />
      <ServiceSection />
      <Questionary />
      <div className="bg-primary">
        <TwoIconSection
          iconA={FaSquarePhone}
          iconsSize={100}
          titleA="Llamanos"
          descriptionA="6379-4344"
          actionA={openWhatsapp}
          iconB={IoMdMailOpen}
          titleB="Envíanos un Mail"
          descriptionB="drgalganomatias@gmail.com"
          actionB={() => {
            scrollTo("contact-section");
          }}
        />
        <ContactUs />
      </div>
      <Location />
      <Footer />
    </div>
  );
}
