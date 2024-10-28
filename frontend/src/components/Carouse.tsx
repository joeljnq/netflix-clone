import React, { useState } from "react";
import { LeftArrow } from "../icons/LeftArrow";
import { RightArrow } from "../icons/RightArrow";

interface Props {
  images: string[];
}

export const Carousel: React.FC<Props> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(6);
  const totalImages = images.length * 2;

 const previousSlide = () => {
    if (currentIndex === 0) setCurrentIndex(images.length - 1);
    else setCurrentIndex(currentIndex - 1);
  };

  const nextSlide = () => {
    if (currentIndex === totalImages - 6) setCurrentIndex(0);
    else setCurrentIndex(currentIndex + 1);
  };
;

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex gap-2 transition-transform ease-out duration-400"
        style={{
          transform: `translateX(-${currentIndex * 15.7}%)`,
        }}
      >
        {[...images, ...images].map((image, index) => (
          <img key={index} src={image} alt={`movie${index}`} className=" min-w-64 h-64 " />
        ))}
      </div>
      <div className="absolute top-0 h-full text-white w-full flex justify-between items-center z-20 px-10">
        <button className="bg-white rounded-full" onClick={previousSlide}>
          <LeftArrow />
        </button>
        <button className="bg-white rounded-full" onClick={nextSlide}>
          <RightArrow />
        </button>
      </div>
    </div>
  );
};
