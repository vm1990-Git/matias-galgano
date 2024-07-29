// import React from "react";

// interface HeaderProps {
//   description: string;
// }

// const Header: React.FC<HeaderProps> = ({ description }) => {
//   const descriptionLines = description.split("\n");

//   return (
//     <div
//       className="w-full bg-cover bg-center h-screen flex flex-col justify-center items-center"
//       id="header-section"
//       style={{ backgroundImage: "url('./assets/headerImg5.png')" }}
//     >
//       <div className="flex flex-col bg-opacity-50 bg-slate-300 w-full sm:max-w-sm p-6 sm:p-12 sm:rounded-2xl">
//         {descriptionLines.map((line, index) => (
//           <p key={index} className="">
//             {line}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Header;

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
      <div className="flex flex-col justify-center items-center h-full w-96 gap-4 px-2">
        <Image
          className="w-80 -translate-x-4"
          src="/assets/logo2.png"
          alt="Picture of brain"
          width={500}
          height={500}
        />
        <div className="flex flex-col md:max-w-sm p-4 sm:p-12 ">
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

// import Image from "next/image";
// import React from "react";

// interface HeaderProps {
//   description: string;
// }

// const Header: React.FC<HeaderProps> = ({ description }) => {
//   const descriptionLines = description.split("\n");

//   return (
//     <div
//       className="w-full bg-cover bg-center h-screen flex flex-col justify-center items-center"
//       id="header-section"
//       style={{ backgroundImage: "url('./assets/headerImg6.png')" }}
//     >
//       <div className="flex flex-col bg-opacity-50  w-full sm:max-w-sm p-6 sm:p-12 sm:rounded-2xl">
//         {descriptionLines.map((line, index) => (
//           <div
//             key={index}
//             className="flex flex-col justify-center items-center gap-8 p-8 rounded-2xl bg-white "
//           >
//             <Image
//               className="w-96  "
//               src="/assets/logo2.png"
//               alt="Picture of brain"
//               width={500}
//               height={500}
//             />
//             <p className="">{line}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Header;

// import Image from "next/image";
// import React from "react";

// interface HeaderProps {
//   title: string;
//   description: string;
// }

// const Header: React.FC<HeaderProps> = ({ title, description }) => {
//   return (
//     <div
//       className="w-full h-screen flex flex-col md:flex-row justify-center items-center bg-white"
//       id="header-section"
//     >
//       <div className="flex flex-col md:flex-row justify-center items-center md:bg-slate-200 rounded-3xl md:mt-20">
//         <div className="">
//           <Image
//             className="w-64 sm:w-72 md:w-96 sm:max-w-sm p-4 sm:p-12 pt-20"
//             src="/assets/logo2.png"
//             alt="Picture of brain"
//             width={500}
//             height={500}
//           />
//         </div>

//         <div className="flex flex-col md:max-w-sm p-4 sm:p-12 ">
//           <span className="font-bold text-xl">{title}</span>
//           <span className="font-semi">{description}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
