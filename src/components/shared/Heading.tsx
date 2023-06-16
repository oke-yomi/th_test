import React from "react";

type Props = {
  heading: string;
};

const Heading = ({ heading }: Props) => {
  return (
    <>
      <h3 className="text-custom-darkgray font-semibold text-6xl text-center">
        {heading}
      </h3>
    </>
  );
};

export default Heading;
