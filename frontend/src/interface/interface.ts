export interface itemsContent {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string;
  overview: string;
  duration: number;
  genre_ids: number[];
  
  }

export interface genre {
  id: number;
  name: string;
}

export interface itemDetail{
  id:number;
  results:{
    key:string
    type:string
    site:string
  }[]

}