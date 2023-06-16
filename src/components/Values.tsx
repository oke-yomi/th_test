import React from "react";
import Heading from "./shared/Heading";
import ValueCards from "./ValueCards";
import { values } from "./data/values";

const Values = () => {
  return (
    <section>
      <div className="mb-3">
        <Heading heading={"Core values"} />
      </div>

      <div className="bg-[#8acca9] flex flex-col justify-between items-center gap-9 px-[230px] py-11">
        <p className="text-custom-darkgray font-semibold text-2xl text-center">
          We believe in the power of diverse groups of people to make things
          happen.
        </p>

        <ul className="px-12">
          <ValueCards values={values} />
        </ul>

        <div className="bg-white px-7 py-2 w-fit rounded-md mx-auto">
          <p className="text-xl text-center text-black">
            Pursing excellence and providing value to the people
          </p>
        </div>
      </div>
    </section>
  );
};

export default Values;
