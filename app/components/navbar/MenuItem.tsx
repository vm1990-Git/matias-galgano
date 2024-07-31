"use client";

import React from "react";

interface MenuItemProps {
  label: string;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
                flex
                justify-start
                items-center
                lg:justify-center
                hover:text-white
                transition
                font-semibold
                cursor-pointer
                w-[120vw]
                h-20
                lg:w-auto
                lg:border-none
                hover:bg-tertiary
                lg:hover:bg-tertiary
                px-3
                border-b-[0.5px]
                border-tertiary
            "
    >
      {label}
    </div>
  );
};

export default MenuItem;
