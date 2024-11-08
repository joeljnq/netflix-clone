import React from "react";
import { itemsContent } from "../interface/interface";
import { Link } from "react-router-dom";
import { PlayIcon } from "../icons/PlayIcon";
import { useTranslation } from "react-i18next";

interface props {
  item: itemsContent;
  genreList: string[];
}
export const MovieCard: React.FC<props> = ({ item, genreList }) => {
  const {i18n} = useTranslation();
  const pathBASE = "https://image.tmdb.org/t/p/w500";
  return (
    <div className=" group bg-zinc-900  relative h-[12vw] ">
      <img
        className=" cursor-pointer  transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]"
        src={pathBASE + item.poster_path}
        alt="poster"
      />
      <div
        id="info"
        className=" opacity-0 absolute top-0 left-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110
      group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100 "
      >
        <img
          className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw] "
          src={pathBASE + item.backdrop_path}
          alt="poster"
        />
        <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md ">
          <div className="flex flex-row items-start gap-3">
            <Link
              className="w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center transition hover:bg-neutral-300"
              to={`/${i18n.language}/watch/${item.id}`}
            >
              <PlayIcon />
            </Link>
            </div>
            <div className="flex flex-col mt-4  items-start">
              <p className="text-white font-bold">{item.title}</p>
              <div className="flex gap-2">
               
                  <p>{genreList[0]}</p>
                  {genreList[1] && (<p>{genreList[1]}</p>)}

              </div>
            </div>
        </div>
      </div>
    </div>
  );
};
