import React from "react";
import { genre, itemsContent } from "../interface/interface";
import { MovieCard } from "./MovieCard";

interface props {
  title: string;
  items: itemsContent[];
  genre: genre[];
}
export const MovieList: React.FC<props> = ( {title,items, genre}) => {


  const getGenreList = (genreList:number[]) => {
   return genreList.map((item) => {
      const genreName = genre.filter((g) => item === g.id);
      return genreName.map((g) => g.name);
    }
  ).flat()
}  
  return (
    <div className=" w-full px-4 md:px-20  space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
            {title}
        </p>
        <div className="  grid grid-cols-6 gap-3 ">
            {items.slice(0,6).map((item)=>(
                <MovieCard key={item.id} item={item} genreList={getGenreList(item.genre_ids)}  />
            ))}
        </div>
      </div>
    </div>
  );
};
