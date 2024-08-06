"use client";

import React from "react";
import Header from "./components/Header";
import Navbar from "./components/navbar/Navbar";
import TwoIconSection from "./components/twoIconSection/TwoIconSection";
import Profile from "./components/profile/Profile";
import Questionary from "./components/questionary/Questionary";
import Location from "./components/Location";
import ServiceSection from "./components/serviceSection/ServiceSection";
import Footer from "./components/Footer";
import ContactUs from "./components/contactUs/ContactUs";

import { makePhoneCall, openWhatsapp } from "./utils/utils";
import { FaHospital, FaSquarePhone } from "react-icons/fa6";
import { RiComputerLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { FloatingWhatsApp } from "react-floating-whatsapp";

import useScrollTo from "./hooks/useScrollTo";

export default function Home() {
  const scrollTo = useScrollTo();

  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <Header
        title="Dr. Matías Galgano"
        description="¡Hola! Te doy la bienvenida a mi sitio web para conocernos un poco.
          Mi nombre es Matías Galgano, oftalmólogo formado en la Universidad de Buenos Aires y en el Hospital Santa Lucía de Buenos Aires."
      />
      <TwoIconSection
        iconA={FaHospital}
        iconsSize={90}
        titleA="Atención Presencial"
        descriptionA='Pres. José E. Uriburu 1170 PB "A", CABA'
        actionA={() => scrollTo("location-section")}
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
          iconsSize={90}
          titleA="Llamanos"
          descriptionA="11-4823-0403"
          actionA={() => makePhoneCall("1148230403")}
          iconB={IoLogoWhatsapp}
          titleB="Turnos por WhatsApp"
          descriptionB="11-6542-5471"
          actionB={() => openWhatsapp("5491165425471")}
        />
        <ContactUs />
      </div>
      <FloatingWhatsApp
        phoneNumber="+54 9 11 6542-5471"
        accountName="Consultorio Dr. Galgano"
        avatar="/assets/logoWhatsApp.png"
        chatMessage="Hola, dejame tu consulta y en breve me contactaré."
        buttonStyle={{ bottom: 15, right: 15 }}
        chatboxStyle={{ bottom: 80, right: 5 }}
      />
      <Location />
      <Footer />
    </div>
  );
}
