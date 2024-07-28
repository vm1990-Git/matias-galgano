import React from "react";
import { FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";

const ContactInfo = () => {
  return (
    <div className="flex justify-center items-start w-[90vw] md:w-96">
      <div className="flex flex-col justify-center items-start text-white gap-2.5 max-w-80 md:max-w-none">
        <div className="flex justify-center items-center gap-2 ">
          <FaPhoneAlt size={18} />
          <span className="font-semibold">6379 4344</span>
        </div>
        <div className="flex justify-center items-center gap-2 ">
          <IoMailOpen size={20} />
          <span className="font-semibold">drgalganomatias@gmail.com</span>
        </div>
        <div className="flex justify-center items-center gap-2 ">
          <FaLocationDot size={20} />
          <span className="font-semibold">
            Pres. José E. Uriburu 1170 PB &quot;A&quot; (CP 1114)
          </span>
        </div>
        <div className="flex justify-center items-center gap-2 ">
          <MdWatchLater size={20} />
          <span className="font-semibold">
            Martes y Miércoles 08:00 a 12:00
          </span>
        </div>
        <div className="flex justify-center items-center gap-2 ">
          <FaLinkedin size={20} />
          <span className="font-semibold">Linkedin</span>
        </div>
        <div className="flex justify-center items-center gap-2 ">
          <GrInstagram size={18} />
          <span className="font-semibold">Instagram</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
