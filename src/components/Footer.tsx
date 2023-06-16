import React from "react";
import { footerLinks } from "./data/footer";
import Logo from "../images/logo.svg";
import ArrowDown from "../images/icons/arrow-down.svg";

// icons
import {
  FaFacebookSquare,
  FaInstagram,
  FaSnapchat,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-custom-gray">
      <div className="w-full max-w-5xl mx-auto pt-4 pb-3">
        {/* links */}
        <div className="flex justify-between gap-11">
          {footerLinks.map((item, index) => (
            <div key={index} className="w-full max-w-[290px]">
              <h4 className="text-black font-bold text-xl mb-6">{item.Head}</h4>

              <ul>
                {item.Sublinks.map((slink, index) => (
                  <li key={index}>
                    {slink.type === "address" ? (
                      <address className="text-xl text-custom-gray mb-4 block transition duration-300 ease-in-out delay-75 hover:text-custom-green hover:font-semibold">
                        {slink.title}
                      </address>
                    ) : (
                      <a
                        href={`${
                          slink.type === "tel"
                            ? `tel:+${slink.link}`
                            : slink.type === "email"
                            ? `mailto:${slink.link}`
                            : slink.link
                        }`}
                        className={`text-xl text-custom-gray mb-4 block transition duration-300 ease-in-out delay-75 hover:text-custom-green hover:font-semibold ${
                          slink.link === "#" ? "hover:-translate-y-1" : ""
                        }`}
                      >
                        {slink.title}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* extras */}
        <div className="flex items-end">
          <div className="mr-72">
            <img src={Logo} alt="" className="w-44 h-14 inline-block" />
          </div>

          <div className="flex-1 flex justify-between items-center">
            <div className="flex justify-start gap-2 items-center ">
              <FaFacebookSquare
                size={30}
                color="#5F5E5E"
                className="transition duration-300 ease-in-out delay-75 hover:-translate-y-1 cursor-pointer"
              />
              <FaInstagram
                size={30}
                color="#5F5E5E"
                className="transition duration-300 ease-in-out delay-75 hover:-translate-y-1 cursor-pointer"
              />
              <FaSnapchat
                size={30}
                color="#5F5E5E"
                className="transition duration-300 ease-in-out delay-75 hover:-translate-y-1 cursor-pointer"
              />
              <FaTwitterSquare
                size={30}
                color="#5F5E5E"
                className="transition duration-300 ease-in-out delay-75 hover:-translate-y-1 cursor-pointer"
              />
            </div>

            <button className="flex items-center justify-center border-2 rounded-[20px] border-custom-green px-8 py-1 transition duration-300 ease-in-out delay-75 hover:-translate-y-1">
              <p className="text-xl text-custom-green font-semibold cursor-pointer">
                Naira
              </p>
              <img src={ArrowDown} alt="" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
