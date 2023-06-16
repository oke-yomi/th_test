import React from "react";
import Heading from "./shared/Heading";
import Person1 from "../images/person-1.png";
import ClickableList from "./CliackableList";

const People = () => {
  return (
    <section className="py-9">
      <div className="mb-3">
        <Heading heading={"Our people"} />
      </div>

      <div className="w-full bg-[#ECF0EF]">
        <div className="w-full max-w-5xl bg-[#d1dad5] px-10 py-7 mx-auto">
          <div className=" mb-16 flex justify-between gap-8 pr-20">
            <div className="w-1/2">
              <div className="bg-[#f1cf6c] px-3 pb-3 pt-2 w-fit rounded-3xl">
                <div className="relative">
                  {/* image */}
                  <div className="w-[282px] h-[379px] bg-white rounded-[5px] flex justify-center items-center">
                    <img src={Person1} alt="" />
                  </div>

                  {/* side box */}
                  <div className="px-4 bg-white py-3 w-fit rounded-[10px] absolute bottom-6 -right-36 shadow-xl">
                    <h4 className="font-bold text-3xl text-custom-darkgray mb-4">
                      Kings Ativie
                    </h4>
                    <p className="text-custom-darkgray font-semibold text-sm">
                      Director of communications and HR
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="font-semibold text-right w-1/2 pt-12 pl-12">
              <p className="text-2xl text-[#052865] mb-2">
                Kings Ativie by name, who studied at The Bells University in
                Ogun state. I am interested in technology, research & sports.{" "}
              </p>

              <p className="text-xl text-[rgba(242,81,86,0.8)]">
                “My time here has been wonderful, everyday I’m inspired by the
                projects we work on, my greater goal is to solve urban issues”
              </p>
            </div>
          </div>

          <ClickableList />

          {/* carousel */}
          <div className=""></div>
        </div>
      </div>
    </section>
  );
};

export default People;
