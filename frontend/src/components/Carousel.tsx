import React, { useState } from "react";
//import { LeftArrow } from "../icons/LeftArrow";
//import { RightArrow } from "../icons/RightArrow";
import { Link } from "react-router-dom";

interface itemsContentContent {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string;
  overview: string;
}
interface Props {
  itemsContent: itemsContentContent;
}
/*
        <div className="opacity-0 absolute top-0 left-0 w-full h-full transition duration-200 z-10 scale-0 group-hover:scale-110 group-hover:opacity-100">
          <img
            src={pathBASE + itemsContent.poster_path}
            alt={`movie${index}`}
            className="object-cover shadow-xl rounded-t-md w-full h-auto"
          />
          <div className="bg-black p-4 rounded-b-md">
            <h1 className="text-white text-lg">{itemsContent.title || itemsContent.name}</h1>
            <p className="text-white">{itemsContent.release_date}</p>
            <p className="text-white">{itemsContent.vote_average}</p>
            <p className="text-white">{itemsContent.overview}</p>
          </div>
        </div>  
        */

export const Carousel: React.FC<Props> = ({ itemsContent }) => {
  const [isHovered, setIsHovered] = useState(false);

  const pathBASE = "https://image.tmdb.org/t/p/w500";
  /*  
  const [currentIndex, setCurrentIndex] = useState(6);
  const totalImages = itemsContentsContent.length * 2;

 const previousSlide = () => {
    if (currentIndex === 0) setCurrentIndex(itemsContentsContent.length - 1);
    else setCurrentIndex(currentIndex - 1);
  };

  const nextSlide = () => {
    if (currentIndex === totalImages - 6) setCurrentIndex(0);
    else setCurrentIndex(currentIndex + 1);
  };



     
      
        <button className="bg-white rounded-full absolute top-1/2 left-2 z-50" onClick={previousSlide}>
          <LeftArrow />
        </button>
        <button className="bg-white rounded-full absolute top-1/2 right-2" onClick={nextSlide}>
          <RightArrow />
        </button>
;*/

  return (
    <Link
    to={`${itemsContent.id}`}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    className="relative flex flex-col items-center"
  >
    <div className="transform ease-in-out duration-300 hover:scale-125">
      <img
        src={pathBASE + itemsContent.poster_path}
        alt={`movie${itemsContent.id}`}
        className="min-w-64 h-64 shadow-xl rounded-md"
      />
    </div>
    {isHovered && (
      <div
        id="card"
        className="absolute z-20 top-full left-0 transform scale-110 bg-black bg-opacity-80 rounded-md  duration-500"
      >
        <div id="info" className="bg-gray-800 bg-opacity-90 p-4 text-white">
          <p className="text-white text-sm">{itemsContent.release_date}</p>
          <p className="text-white text-sm">
            Rating: {itemsContent.vote_average}
          </p>
          <p className="text-white text-sm line-clamp-3">
            {itemsContent.overview}
          </p>
        </div>
      </div>
    )}
  </Link>

  );
};
