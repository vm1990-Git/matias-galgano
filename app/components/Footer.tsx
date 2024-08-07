import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col justify-start bottom-0 w-full z-50 pl-3 py-2 text-white text-sm bg-primary mt-4">
      <div className="flex items-center gap-2 rounded-full">
        <a
          className="flex justify-center items-center"
          href="https://www.linkedin.com/in/matias-galgano-667a28134/"
          target="_blank"
        >
          <FaLinkedin size={27} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
