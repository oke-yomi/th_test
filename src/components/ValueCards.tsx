import React from "react";

interface ValueItem {
  title: string;
  image: string;
}

interface Props {
  values: ValueItem[];
}

const ValueCards = ({ values }: Props) => {
  return (
    <>
      <ul className="px-12 flex justify-between items-center gap-10">
        {values.map((card, index) => (
          <li
            key={index}
            className="rounded-[20px] bg-[rgba(0,0,0,0.75)] cursor-pointer transition duration-300 ease-in-out delay-75 hover:-translate-y-1 hover:scale-110"
          >
            <div className="w-[300px] h-56 rounded-[20px]">
              <img src={card.image} alt="" />
            </div>
            <p className="text-center text-white font-bold text-[15px] pt-5 pb-4">
              {card.title}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ValueCards;
