import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div
      className="flex justify-center items-center p-2 cursor-pointer gap-1"
      onClick={() => window.location.reload()}
    >
      <Image
        className="w-14"
        src={"/assets/logoWhite.png"}
        alt="Logo image"
        width={500}
        height={500}
      />
      <div className="flex flex-col w-60 text-lg translate-y-0.5 ">
        <span className="font-semibold leading-tight">Dr. Matías Galgano </span>
        <span className="text-lg font-semibold leading-tight">Oftalmólogo</span>
        <span className="text-xs font-semibold leading-tight">
          M.N. 161969 - M.P. 338690
        </span>
      </div>
    </div>
  );
};

export default Logo;
