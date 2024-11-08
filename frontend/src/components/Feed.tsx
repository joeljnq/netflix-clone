import { useEffect, useState } from "react";
import {
  getMovieGenres,
  getMovieByGenre,
  getMovies,
  getPopularTvShows,
  getTVGenres,
  getTvByGenre,
} from "../service/api";
import { useTranslation } from "react-i18next";
import { generateRandomNumber } from "../utils/utils";
import { Link } from "react-router-dom";
import { PlayIcon } from "../icons/PlayIcon";
import { InfoIcon } from "../icons/InfoIcon";
import { useViewPreference } from "../context/ViewPreferenceContext";
import { genre, itemsContent } from "../interface/interface";
import { MovieList } from "./MovieList";



interface allMovies {
  genre: string;
  movies: itemsContent[];
}
export const Feed = () => {
  const { t, i18n } = useTranslation();
  const { viewPreference } = useViewPreference();
  const [contentItems, setContentItems] = useState<itemsContent[]>([]);
  const [genres, setGenres] = useState<genre[]>([]);
  const [allMovies, setAllMovies] = useState<allMovies[]>([]);

  const pathBanner = "https://image.tmdb.org/t/p/original";

  const bannerRandom = generateRandomNumber(contentItems.length);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data =
          viewPreference === "movies"
            ? await getMovies(i18n.language)
            : await getPopularTvShows(i18n.language);
        if (data && data.results) setContentItems(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [i18n.language, viewPreference]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const data =
          viewPreference === "movies"
            ? await getMovieGenres(i18n.language)
            : await getTVGenres(i18n.language);
        if (data && data.genres) setGenres(data.genres);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGenres();
  }, [i18n.language, viewPreference]);

  useEffect(() => {
    if (genres.length === 0) return;
    const FetchAllMovies = async () => {
      try {
        const allMoviesData: allMovies[] = await Promise.all(
          genres.map(async (genre) => {
            const data =
              viewPreference === "movies"
                ? await getMovieByGenre(genre.id, i18n.language)
                : await getTvByGenre(genre.id, i18n.language);
            return { genre: genre.name, movies: data.results || [] };
          })
        );
        setAllMovies(allMoviesData);
      } catch (error) {
        console.log(error);
      }
    };
    FetchAllMovies();
  }, [genres, i18n.language]);

  return (
    <>
      {contentItems.length > 0 && genres.length > 0 && (
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
            src={pathBanner + contentItems[bannerRandom].backdrop_path}
            alt="cover"
            className=" absolute w-full max-h-full object-center shadow-2xl -z-50"
          ></img>

          <div className="ml-14 w-2/6 z-10">
            <h1 className="text-3xl mb-4">
              {contentItems[bannerRandom].title ||
                contentItems[bannerRandom].name}
            </h1>
            <p className="max-w-xl max-h-20 overflow-hidden">
              {contentItems[bannerRandom].overview}
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
        <section className="pb-40 bg-black mt-0 ">
          <MovieList title={t("feed.onPopular")} items={contentItems} genre={genres} />
        </section>
        {allMovies.map((item, index) => {
          return (
            <section key={`${item.genre}${index}`} className=" bg-black ">
              <div className="">
                  <MovieList title={item.genre} items={item.movies} key={item.genre} genre={genres} />
              </div>
            </section>
          );
        })}
      </>
  );
};
