import { useEffect, useState } from "react";
import { getGenres, getMovieByGenre, getMovies } from "../service/api";
import { useTranslation } from "react-i18next";
import { generateRandomNumber } from "../utils/utils";
import { Link } from "react-router-dom";
import { PlayIcon } from "../icons/PlayIcon";
import { InfoIcon } from "../icons/InfoIcon";
import { Carousel } from "./Carouse";

/*
 {allMovies.map((genre)=>{
          return(
            <section key={genre.genre} className="w-full ">
            <h3 className="text-3xl">{genre.genre}</h3>
            <Carouse
              images={genre.movies.map((movie) => pathBASE + movie.poster_path)}
            />
          </section>
          )
        })}

*/
interface popularMovies {
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string;
  overview: string;
}

interface genres {
  id: number;
  name: string;
}

interface allMovies {
  genre: string;
  movies: popularMovies[];
}
export const Feed = () => {
  const { t, i18n } = useTranslation();
  const [movies, setMovies] = useState<popularMovies[]>([]);
  const [genres, setGenres] = useState<genres[]>([]);
  const [allMovies, setAllMovies] = useState<allMovies[] >([]);

  const pathBanner = "https://image.tmdb.org/t/p/original";
  const pathBASE = "https://image.tmdb.org/t/p/w500";

  const bannerRandom = generateRandomNumber(movies.length);
  useEffect(() => {
    console.log('entre');
    
    const fetchMovies = async () => {
      const data = await getMovies(i18n.language);
      setMovies(data.results);
    };
    fetchMovies();
  }, [i18n.language]);

  useEffect(() => {
    const fetchGenres = async () => {
      const data = await getGenres(i18n.language);
      setGenres(data.genres);
    };
    fetchGenres();
  }, [i18n.language]);

  useEffect(() => {
    const FetchAllMovies = async() => {

      const allMoviesData : allMovies[] = await Promise.all(
        genres.map(async (genre) => {
          const data = await getMovieByGenre(genre.id, i18n.language);
          return { genre: genre.name, movies: data.results };
        })
      );
      setAllMovies(allMoviesData);
    };
    if(genres.length > 0) FetchAllMovies();

  }, [i18n.language,genres]);
  console.log(allMovies, "allMovies");

  return (
    <div className="w-full  ">
      {movies.length > 0 && (
        <div className="w-full h-[92vh] flex justify-start items-center relative">
          <div
            className="absolute top-0 left-0 h-full w-full  bg-black/40"
            aria-hidden={true}
          ></div>
          <div
            className="absolute top-0 left-0 h-full w-full  bg-gradient-to-t from-black via-transparent to-transparent"
            aria-hidden={true}
          ></div>

          
            <img
              src={pathBanner + movies[bannerRandom].backdrop_path}
              alt="cover"
              className=" absolute w-full max-h-full object-center shadow-2xl -z-50"
            ></img>
          
          
            <div className="ml-14 w-2/6 z-10">
              <h1 className="text-3xl">{movies[bannerRandom].title}</h1>
              <p className="max-w-xl max-h-20 overflow-hidden">
                {movies[bannerRandom].overview}
              </p>
              <div className="flex gap-5 mt-4">
                <Link
                  to="asd"
                  className="py-1 px-12 bg-white text-black flex items-center hover:bg-gray-300"
                >
                  <PlayIcon />
                  {t("feed.play")}
                </Link>
                <Link
                  to="asd"
                  className="py-4 px-8 bg-gray-600/40 hover:bg-gray-600/80 text-white flex gap-4"
                >
                  <InfoIcon />
                  {t("feed.moreInfo")}
                </Link>
              </div>
            </div>
          
        </div>
      )}
      <div className="bg-black flex flex-col px-20">
        <section className="w-full  ">
          <h3 className="text-3xl">{t("feed.onPopular")}</h3>
          <Carousel
            images={movies.map((movie) => pathBASE + movie.poster_path)}
          />
        </section>
       
        
      </div>
    </div>
  );
};
