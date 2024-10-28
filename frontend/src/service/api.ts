
export async function getMovies (lang: string) {
    try {
    const apiKey = import.meta.env.VITE_API_KEY;
   const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=${lang}&page=1`;
   const res = await fetch(url)
    const data =  res.json()
    return data
    } catch (error) {
        console.log(error);
    }
}

export async function getGenres(lang:string){
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=${lang}`
    try{
        const res = await fetch(url)
        const data = res.json()
        return data
    }catch(error){
        console.log(error);
    }
}

export async function getMovieByGenre (genre: number, lang: string) {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&api_key=${apiKey}&language=${lang}&page=1&sort_by=popularity.desc&with_genres=${genre}`
    try{
        const res = await fetch(url)
        const data = res.json()
        return data
    }catch(error){
        console.log(error);
    }

}