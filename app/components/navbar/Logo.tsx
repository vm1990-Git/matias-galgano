import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div
      className="flex justify-center items-center p-2 cursor-pointer gap-1"
      onClick={() => window.location.reload()}
    >
      <Image
        className="w-12"
        src={"/assets/logo2.png"}
        alt="Logo image"
        width={500}
        height={500}
      />
      <div className="flex flex-col w-60 text-lg translate-y-0.5">
        <span className="font-semibold leading-tight">Dr. Matias Galgano </span>
        <div className="flex flex-col sm:flex-row">
          <span className="text-xs font-semibold">
            M.N. 161969 - M.P. 338690
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
