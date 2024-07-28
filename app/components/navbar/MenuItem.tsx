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
                border-b-[0.5px]
                w-[120vw]
                h-20
                lg:w-auto
                lg:border-none
                hover:bg-secondary
                lg:hover:bg-primary
                px-2
                lg:px-0
            "
    >
      {label}
    </div>
  );
};

export default MenuItem;
