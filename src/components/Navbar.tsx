import React, { useState } from "react";
import Logo from "../images/logo.svg";
import Caret from "../images/icons/caret.svg";
import Phone from "../images/icons/phone.svg";

interface MenuItem {
  title: string;
  submenu?: boolean;
}

interface Props {
  links: MenuItem[];
}

const Navbar = ({ links }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <nav className="">
      <div className="w-full max-w-5xl flex justify-between items-center mx-auto py-12">
        <div className="">
          <a href="/" className="inline-block w-[173px] h-14 mr-10">
            <img src={Logo} alt="logo" />
          </a>
        </div>

        <div className="flex-1 flex justify-between items-center">
          <ul className="flex justify-between items-center pb-3 border-b-[5px] border-[#929292]">
            {links.map((link, index) => (
              <li key={index} className="mr-10 cursor-pointer">
                <a
                  href="#"
                  className="flex items-center uppercase font-bold text-[15px] text-custom-gray transition duration-300 ease-in-out delay-75 hover:-translate-y-1 hover:text-custom-green"
                >
                  {link.title}
                  {link.submenu && (
                    <span>
                      <img src={Caret} alt="" />
                    </span>
                  )}
                </a>
              </li>
            ))}

            <li>
              <button className="font-bold text-[15px] text-custom-gray px-2 py-[6px] rounded-[10px] border border-custom-green transition duration-300 ease-in-out delay-75 hover:-translate-y-1 hover:text-custom-green">
                Sign up
              </button>
            </li>
          </ul>

          <div>
            <a
              href="tel:+2347030601281"
              className="flex items-center text-custom-green text-xl transition duration-300 ease-in-out delay-75 hover:font-semibold"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={Phone}
                alt=""
                className={`transition duration-300 ease-in-out delay-75 hover:-translate-y-1 ${
                  isHovered ? "animate-ping" : ""
                }`}
              />
              +(234) 703 060 1281
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
