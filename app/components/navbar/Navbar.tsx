"use client";

import useScrollTo from "@/app/hooks/useScrollTo";
import React, { useCallback, useState, useRef, useEffect } from "react";
import MenuItem from "./MenuItem";
import Logo from "./Logo";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const scrollTo = useScrollTo();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed w-full bg-primary shadow-md z-50 text-white top-0">
      <div className="flex justify-between items-center h-20">
        <Logo />
        <div>
          <div>
            <div className="hidden lg:flex">
              <MenuItem
                label="Inicio"
                onClick={() => {
                  scrollTo("header-section");
                }}
              />
              <MenuItem
                label="Acerca de mí"
                onClick={() => {
                  scrollTo("profile-section");
                }}
              />
              <MenuItem
                label="Nuestros Servicios"
                onClick={() => {
                  scrollTo("service-section");
                }}
              />
              <MenuItem
                label="Preguntas Frecuentes"
                onClick={() => {
                  scrollTo("questionary-section");
                }}
              />
              <MenuItem
                label="Contáctanos"
                onClick={() => {
                  scrollTo("contact-section");
                }}
              />
              <MenuItem
                label="Ubicación"
                onClick={() => {
                  scrollTo("location-section");
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex lg:hidden">
          <div className="flex gap-2 relative px-4">
            <div onClick={toggleOpen} className="rounded-full p-1.5 transition">
              <HiMenu size={30} />
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute lg:hidden w-full bg-primary right-0 border-t-[0.5px] border-tertiary"
        >
          <MenuItem
            label="Inicio"
            onClick={() => {
              scrollTo("header-section");
              toggleOpen();
            }}
          />
          <MenuItem
            label="Acerca de mí"
            onClick={() => {
              scrollTo("profile-section");
              toggleOpen();
            }}
          />
          <MenuItem
            label="Nuestros Servicios"
            onClick={() => {
              scrollTo("service-section");
              toggleOpen();
            }}
          />
          <MenuItem
            label="Preguntas Frecuentes"
            onClick={() => {
              scrollTo("questionary-section");
              toggleOpen();
            }}
          />
          <MenuItem
            label="Contáctanos"
            onClick={() => {
              scrollTo("contact-section");
              toggleOpen();
            }}
          />
          <MenuItem
            label="Ubicación"
            onClick={() => {
              scrollTo("location-section");
              toggleOpen();
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
