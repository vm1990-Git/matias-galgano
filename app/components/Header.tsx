import Image from "next/image";
import React from "react";

interface HeaderProps {
  title: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <div className="flex items-center justify-center h-screen sm:mt-20">
      <div
        className="hidden sm:flex flex-1 bg-cover bg-center h-full flex-col justify-center items-center"
        id="header-section"
        style={{ backgroundImage: "url('./assets/headerImg9.png')" }}
      ></div>
      <div className="flex flex-col justify-center items-center h-full  gap-4 px-2 bg-cover">
        <Image
          className="w-64 -translate-x-4"
          src="/assets/logo.png"
          alt="Logo"
          width={500}
          height={500}
        />
        <div className="flex flex-col md:max-w-sm p-4 sm:p-12">
          <span className="font-bold text-xl">{title}</span>
          <span className="font-semi text-lg semi">{description}</span>
        </div>
      </div>
      <div
        className="hidden sm:flex flex-1 bg-cover bg-center h-full flex-col justify-center items-center"
        id="header-section"
        style={{ backgroundImage: "url('./assets/headerImg10.png')" }}
      ></div>
    </div>
  );
};

export default Header;
