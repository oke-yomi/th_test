import React from "react";

interface Props {
  itemsLength: number;
  progress: number;
}

const ProgressBar = ({ itemsLength, progress }: Props) => {
  const progressLength = (progress / itemsLength) * 100;
  const remainder = 100 - progressLength;
  return (
    <div className="h-[6px] w-full mt-5 flex">
      <span
        className="bg-custom-green h-full rounded-3xl transition duration-150 ease-in-out delay-200"
        style={{ width: `${progressLength}%` }}
      />

      <span
        className="bg-white h-full rounded-3xl transition duration-150 ease-in-out delay-200"
        style={{ width: `${remainder}%` }}
      />
    </div>
  );
};

export default ProgressBar;
