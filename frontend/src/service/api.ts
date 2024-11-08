import { itemDetail } from "../interface/interface";

export async function getMovies(lang: string) {
  try {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=${lang}&page=1`;
    const res = await fetch(url);
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPopularTvShows(lang: string) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=${lang}&page=1`;
  try {
    const res = await fetch(url);
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getTvByGenre(genre: number, lang: string) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&api_key=${apiKey}&language${lang}&page=1&sort_by=popularity.desc&with_genres=${genre}`;
  try {
    const res = await fetch(url);
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function getMovieByGenre(genre: number, lang: string) {
  console.log('entre');
  
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&api_key=${apiKey}&language=${lang}&page=1&sort_by=popularity.desc&with_genres=${genre}`;
  try {
    const res = await fetch(url); 
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function getTVGenres(lang:string) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=${lang}`;
  try {
    const res = await fetch(url);
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function getMovieGenres(lang: string) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=${lang}`;
  try {
    const res = await fetch(url);
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieById(id: string, lang: string) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=${lang}`;
  try {
    const res = await fetch(url);
    const data = res.json().then((data:itemDetail) => {
      const trailer = data.results.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );
      if (trailer) {
        return `https://www.youtube.com/embed/${trailer.key}?autoplay=1&controls=0`;
      }
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}