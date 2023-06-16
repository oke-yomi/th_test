import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import Image1 from "../images/img-1.png";

interface ListItem {
  id: number;
  image: string;
}

const items: ListItem[] = [
  { id: 1, image: Image1 },
  { id: 2, image: Image1 },
  { id: 3, image: Image1 },
  { id: 4, image: Image1 },
  { id: 5, image: Image1 },
];

const ClickableList = () => {
  const [selectedItemId, setSelectedItemId] = useState<number>(2);

  const handleItemClick = (itemId: number) => {
    setSelectedItemId(itemId);
  };

  const itemsLength = items.length;

  return (
    <div className="w-full ">
      <div className="flex gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className={`cursor-pointer  transition duration-100 ease-in delay-75 ${
              selectedItemId === item.id
                ? "scale-110 animate-bounce-slow"
                : "opacity-50"
            }`}
            onClick={() => handleItemClick(item.id)}
          >
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>

      <ProgressBar itemsLength={itemsLength} progress={selectedItemId} />
    </div>
  );
};

export default ClickableList;
