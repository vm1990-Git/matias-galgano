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
  description: string;
}

const Header: React.FC<HeaderProps> = ({ description }) => {
  const descriptionLines = description.split("\n");

  return (
    <div className="flex items-center justify-center h-screen mt-20 gap-8">
      <div
        className="hidden md:flex flex-1 flex-col justify-center items-center bg-cover bg-center h-full"
        id="header-section"
        style={{ backgroundImage: "url('./assets/headerImg9.png')" }}
      ></div>
      <div className="flex flex-col justify-center items-center h-full w-96 gap-4">
        <Image
          className="w-80 mx-6"
          src="/assets/logo2.png"
          alt="Picture of brain"
          width={500}
          height={500}
        />
        <div className="flex flex-col w-96 sm:max-w-sm text-lg px-8">
          {descriptionLines.map((line, index) => (
            <p key={index} className="">
              {line}
            </p>
          ))}
        </div>
      </div>
      <div
        className="hidden md:flex flex-1 flex-col justify-center items-center bg-cover bg-center h-full"
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
