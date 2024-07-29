"use client";

import useScrollTo from "@/app/hooks/useScrollTo";
import React, { useCallback, useState, useRef } from "react";
import { HiMenu } from "react-icons/hi";
import MenuItem from "./MenuItem";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const scrollTo = useScrollTo();

  const toggleOpen = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  return (
    <div className="fixed w-full bg-slate-50 shadow-sm z-50 text-primary xl:px-20 top-0">
      <div className="flex justify-between items-center">
        <Logo />
        <div>
          <div>
            <div className="hidden lg:flex text-base gap-4">
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
          <div className="flex relative px-4" ref={menuRef}>
            <div onClick={toggleOpen} className="rounded-full p-1.5 transition">
              <HiMenu size={30} />
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="flex lg:hidden absolute w-full right-0 bg-primary text-white">
          <div className="flex flex-col justify-around">
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
        </div>
      )}
    </div>
  );
};

export default Navbar;
