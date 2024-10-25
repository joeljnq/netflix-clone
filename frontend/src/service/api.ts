
export async function getMovies (lang: string) {
    try {
    const apiKey = import.meta.env.VITE_API_KEY;
   const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=${lang}-US&page=1`;
   const res = await fetch(url)
    const data =  res.json()
    return data
    } catch (error) {
        console.log(error);
    }
}