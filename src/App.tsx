import React from "react";
import Navbar from "./components/Navbar";
import { links } from "./components/data/links";
import Heading from "./components/shared/Heading";
import Values from "./components/Values";
import People from "./components/People";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-white">
      <Navbar links={links} />

      <section className="mb-4">
        <div className="w-full max-w-5xl bg-[#ecf0ef] rounded-[20px] py-10 px-6 mx-auto">
          <div className="mb-[14px]">
            <Heading heading="Our story" />

            <p className="text-xl text-center mt-[14px]">
              The company started in the year 2013 under a different name. We
              are a{" "}
              <span className="text-custom-green">HOSPITALITY COMPANY.</span>
              We provide a vast amount of services to our customers, which
              includes access to hotels, flights, car rides and lots more.
            </p>
          </div>

          <div className="px-[27px] py-[42px] bg-[rgba(33,67,39,0.13)] rounded-[20px] w-[95%] mx-auto">
            <div className="flex gap-14 justify-between items-center">
              <p className="text-[rgba(242,81,86,0.8)] font-semibold text-[40px] block flex-1">
                “True hospitality consists of giving the best of yourself to
                your guests.”
              </p>

              <p className="text-[#5f4b4b] text-[28px] block flex-[1.55]">
                Our story is a story of passion, hardwork and tenacity. We
                wanted to help people travel and feel safe in comfort with their
                guides, and our partners. We set out to get just the best
                people- to help achieve this. Our employees, partners and
                associates are people who care. It’s beautiful here, let’s have
                fun together.
              </p>
            </div>

            <div className="bg-white px-7 py-2 mt-11 w-fit rounded-md mx-auto">
              <p className="text-lg text-center text-black">
                “If you ever have a shot, make it count!”
              </p>
            </div>
          </div>
        </div>
      </section>

      <Values />

      <People />

      <Footer />
    </main>
  );
}

export default App;
