import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div className="flex flex-col bg-primary">
      <span
        id="contact-section"
        className="text-center font-bold text-4xl pb-8 pt-4 text-white"
      >
        Contactanos
      </span>
      <div className="flex justify-center flex-wrap gap-8 md:gap-0 py-4 z-10">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
};

export default ContactUs;
