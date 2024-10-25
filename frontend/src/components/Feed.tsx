import { useEffect, useState } from "react";
import { getMovies } from "../service/api";
import { useTranslation } from "react-i18next";
import { generateRandomNumber } from "../utils/utils";
import { Link } from "react-router-dom";
import { PlayIcon } from "../icons/PlayIcon";
import { InfoIcon } from "../icons/InfoIcon";

interface popularMovies {
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string;
  overview: string;
}

export const Feed = () => {
  const { t, i18n } = useTranslation();
  const [movies, setMovies] = useState<popularMovies[]>([]);
  console.log(movies);
  const pathBASE = "https://image.tmdb.org/t/p/original";
  const bannerRandom = generateRandomNumber(movies.length);
  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies(i18n.language);
      setMovies(data.results);
    };
    fetchMovies();
  }, [i18n.language]);
  return (
    <div className="w-full  ">
      <div className="w-full h-[97vh] flex justify-start items-center relative">
        <div
          className="absolute top-0 left-0 h-full w-full  bg-black/40"
          aria-hidden={true}
        ></div>
        <div
          className="absolute top-0 left-0 h-full w-full  bg-gradient-to-t from-black via-transparent to-transparent"
          aria-hidden={true}
        ></div>

        {movies.length && (
          <img
            src={pathBASE + movies[bannerRandom].backdrop_path}
            alt="cover"
            className=" absolute w-full max-h-full object-center shadow-2xl rounded- -z-50"
          ></img>
        )}
        {movies.length && (
          <div className="ml-14 w-2/6 z-10">
            <h1 className="text-3xl">{movies[bannerRandom].title}</h1>
            <p className="max-w-xl max-h-20 overflow-hidden">{movies[bannerRandom].overview}</p>
            <div className="flex gap-5 mt-4">
              <Link to="asd" className="py-1 px-12 bg-white text-black flex items-center hover:bg-gray-300">
                <PlayIcon />
                {t("feed.play")}
              </Link>
              <Link to="asd" className="py-4 px-8 bg-gray-600/40 hover:bg-gray-600/80 text-white flex gap-4">
                <InfoIcon />
                {t("feed.moreInfo")}
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="bg-black flex">
        <section className="w-full ">
          <h3>{t("feed.onPopular")}</h3>
          <div className="flex">
          {movies.map(movie => (
            <div key={movie.title} className="flex gap-5">
              <img src={pathBASE + movie.poster_path} alt="cover" className="w-32 h-48 object-cover rounded" />
            </div>
          ))}
          </div>
        </section>

      </div>
    </div>
  );
};
